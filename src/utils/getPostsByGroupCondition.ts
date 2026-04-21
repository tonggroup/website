import type { CollectionEntry } from "astro:content";

type GroupKey = string | number | symbol;

interface GroupFunction<T> {
  (item: T, index?: number): GroupKey;
}

const getNewsByGroupCondition = (
  newsItems: CollectionEntry<"news">[],
  groupFunction: GroupFunction<CollectionEntry<"news">>
) => {
  const result: Record<GroupKey, CollectionEntry<"news">[]> = {};
  for (let i = 0; i < newsItems.length; i++) {
    const item = newsItems[i];
    const groupKey = groupFunction(item, i);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
};

export default getNewsByGroupCondition;
