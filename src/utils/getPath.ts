import { NEWS_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a news item
 * @param id - id of the news item (aka slug)
 * @param filePath - the news item full file location
 * @param includeBase - whether to include `/news` in return value
 * @returns news item path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true
) {
  const pathSegments = filePath
    ?.replace(NEWS_PATH, "")
    .split("/")
    .filter(path => path !== "") // remove empty string in the segments ["", "other-path"] <- empty string will be removed
    .filter(path => !path.startsWith("_")) // exclude directories start with underscore "_"
    .slice(0, -1) // remove the last segment_ file name_ since it's unnecessary
    .map(segment => slugifyStr(segment)); // slugify each segment path

  const basePath = includeBase ? "/news" : "";

  // Making sure `id` does not contain the directory
  const newsId = id.split("/");
  const slug = newsId.length > 0 ? newsId.slice(-1) : newsId;

  // If not inside the sub-dir, simply return the file path
  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join("/");
  }

  return [basePath, ...pathSegments, slug].join("/");
}
