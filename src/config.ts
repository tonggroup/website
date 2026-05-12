export const SITE = {
  website: "https://tong-group.com/",
  author: "Alexander Tong",
  profile: "https://alextong.net/",
  desc: "Tong Group - Research team at the intersection of machine learning and life sciences, focusing on generative modeling, flow models, optimal transport, and protein design.",
  title: "Tong Group",
  ogImage: "tong-group-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/tonggroup/website/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Vienna", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
