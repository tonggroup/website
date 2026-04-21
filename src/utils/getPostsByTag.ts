import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

const getNewsByTag = (newsItems: CollectionEntry<"news">[], tag: string) =>
  getSortedPosts(
    newsItems.filter(newsItem => slugifyAll(newsItem.data.tags).includes(tag))
  );

export default getNewsByTag;
