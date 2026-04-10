// ===== 墨痕 Inkmark · 书目数据库 =====
// 每次新增一本书，在这里添加一条记录即可

const BOOKS = [
  // 示例数据，可以删除
  {
    title: "影响力",
    category: "marketing",
    categoryName: "营销",
    intro: "罗伯特·西奥迪尼的经典著作，揭示了人类行为背后的六大说服原则。",
    summary: "互惠、承诺与一致、社会认同——六大说服原则重塑了我对人类行为的认知。",
    file: "/reports/marketing-influence.html",
    date: "2024-01-15"
  },
  {
    title: "人类简史",
    category: "history",
    categoryName: "历史",
    intro: "尤瓦尔·赫拉利以宏观视角梳理人类从智人到现代文明的演化历程。",
    summary: "虚构故事的能力，是智人征服世界最锋利的武器。",
    file: "reports/history-sapiens.html",
    date: "2024-02-03"
  },
  {
    title: "最好的告别",
    category: "medicine",
    categoryName: "医学",
    intro: "阿图·葛文德探讨老龄化与死亡，重新思考现代医学的边界与人的尊严。",
    summary: "善终不是放弃，而是在有限时间里，选择对自己真正重要的事。",
    file: "reports/medicine-being-mortal.html",
    date: "2024-03-20"
  }

  // 新增书籍格式（复制以下模板，填入信息）：
  /*
  {
    title: "书名",
    category: "marketing",  // 可选: marketing / history / medicine / philosophy / tech / psychology
    categoryName: "营销",   // 对应中文分类名
    intro: "书籍简介，2-3句话",
    summary: "一句话总结，你最深的感受",
    file: "reports/你的文件名.html",
    date: "2024-01-01"
  },
  */
];
