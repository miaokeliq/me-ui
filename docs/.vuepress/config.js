module.exports = {
  title: "MeUI",
  description: "一个好用的UI框架",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "交流", link: "/guide/" },
      { text: "主页", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "/get-started/"],
      },
      {
        title: "组件",
        children: ["/components/button"],
      },
    ],
  },
};
