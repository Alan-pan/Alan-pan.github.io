import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/kfc",
  { text: "肯德基开吃指南", icon: "creative", link: "/guide/" },
  {
    text: "肯德基博文",
    icon: "edit",
    prefix: "/kfcposts/",
    children: [
      {
        text: "肯德基历史文章 1-4",
        icon: "edit" ,
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          "article2",
          "article3",
          "article4",
        ],
      },
      {
        text: "肯德基历史文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
  {
    text: "文章时间轴",
    icon: "note",
    link: "./timeline/",
  },
  
]);
