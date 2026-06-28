/* ============================================
   CNA Website - Member Data & Main Logic
   ============================================ */

// --- Member Showcase Data (13 brands with descriptions) ---
const MEMBER_SHOWCASE = [
  {
    id: 1,
    logo: "images/1.png",
    nameCN: "张亮麻辣烫",
    nameEN: "Zhang Liang Malatang",
    descCN: "2008年成立，全球中式餐饮连锁标杆。以现熬牛骨汤、单锅单煮为特色，创新DIY自选用餐模式。全球门店超6000家，布局纽约、东京、悉尼等国际都市，向世界持续传递地道中国味道。",
    descEN: "Founded in 2008, a world-renowned Chinese catering chain. Featuring slow-cooked beef bone broth and individual pot cooking, it offers a creative DIY dining mode. With over 6,000 stores globally across New York, Tokyo, Sydney and more, it spreads authentic Chinese flavor worldwide.",
    category: "restaurant"
  },
  {
    id: 2,
    logo: "images/2.png",
    nameCN: "农耕记",
    nameEN: "Gengji",
    descCN: "创立于2017年，现象级新农式餐饮标杆品牌。秉持把乡野搬进城市的理念，甄选天然食材，依托非遗技艺还原地道湘味。全球门店超百家，已落地美国加州等海外市场。",
    descEN: "Founded in 2017, a benchmark new rural-style catering brand. It selects natural ingredients and adopts intangible heritage craftsmanship to restore authentic Hunan flavors. With over 100 stores worldwide including California, delivering genuine Chinese rural cuisine to global diners.",
    category: "restaurant"
  },
  {
    id: 3,
    logo: "images/3.png",
    nameCN: "喜家德",
    nameEN: "Xijiade",
    descCN: "创立于2002年，知名现代中式快餐标杆品牌。主打明厨现包手工水饺，坚守匠心出品。全球直营门店超600家，已进驻伦敦等国际城市。以严苛品控重塑中式面点标准。",
    descEN: "Founded in 2002, a benchmark modern Chinese fast food brand. It features handmade dumplings made openly in view. With over 600 direct-operated stores worldwide including London, redefining Chinese dim sum with strict quality control.",
    category: "restaurant"
  },
  {
    id: 4,
    logo: "images/4.png",
    nameCN: "紫燕百味鸡",
    nameEN: "Ziyan Baiwei Ji",
    descCN: "创立于2000年，国内规模领先的国民佐餐卤味连锁。传承三十余年秘制工艺，打造百味鸡、夫妻肺片等经典川卤好物。全球门店超6000家，深耕地道川卤风味。",
    descEN: "Founded in 2000, a leading national braised delicacy chain. Inheriting decades-old secret craftsmanship, it creates classic Sichuan-style marinated dishes. With over 6,000 stores, spreading authentic Sichuan braised flavors to enrich dining tables worldwide.",
    category: "restaurant"
  },
  {
    id: 5,
    logo: "images/5.png",
    nameCN: "正新鸡排",
    nameEN: "Zhengxin Chicken Chop",
    descCN: "创立于2006年，全球规模领先的特色小吃连锁品牌。以招牌超大鸡排为核心，严选优质食材。全球门店超20000家，业务覆盖东亚、东南亚等地，以标准化运营赋能街头美食全球化。",
    descEN: "Founded in 2006, a world-leading specialty snack chain. Famous for its signature oversized chicken chop with premium ingredients. With over 20,000 stores across East and Southeast Asia, it standardizes street food for global development.",
    category: "restaurant"
  },
  {
    id: 6,
    logo: "images/6.png",
    nameCN: "大鼓米线",
    nameEN: "Dagu Rice Noodle",
    descCN: "创立于2010年，正新集团旗下国民级快餐标杆品牌。深耕云南风味精髓，坚持每日现熬无添加大骨高汤。全球门店超500家，已成功进驻北美、大洋洲等海外市场。",
    descEN: "Founded in 2010, a benchmark national fast-food brand under Zhengxin Group. Rooted in Yunnan flavor, it serves fresh daily bone broth with no additives. With over 500 stores globally across North America and Oceania, spreading authentic Eastern taste worldwide.",
    category: "restaurant"
  },
  {
    id: 7,
    logo: "images/7.png",
    nameCN: "刘一手",
    nameEN: "Liu Yi Shou",
    descCN: "创立于2000年，全球知名重庆火锅标杆品牌。坚守非遗古法炒料工艺，甄选优质食材。已布局全球二十余国，门店超1500家。以美食链接全球食客味蕾与情感。",
    descEN: "Founded in 2000, a benchmark brand of Chongqing hot pot worldwide. Adhering to intangible cultural heritage frying craftsmanship with premium ingredients. With over 1,500 stores across more than 20 countries, connecting global diners through food.",
    category: "restaurant"
  },
  {
    id: 8,
    logo: "images/8.png",
    nameCN: "莆田",
    nameEN: "Putien",
    descCN: "2000年始创新加坡，享誉全球的米其林星级闽菜标杆品牌。秉持用好料、烹原味的初心，严选原产地食材。全球门店超百家，融闽地山海本味与现代精致餐饮于一体。",
    descEN: "Founded in Singapore in 2000, a Michelin-starred benchmark of Fujian cuisine. Adhering to using premium ingredients to retain original flavors. With over 100 stores worldwide, integrating authentic mountain and sea tastes with modern fine dining.",
    category: "restaurant"
  },
  {
    id: 9,
    logo: "images/9.png",
    nameCN: "陈香贵",
    nameEN: "Chen Xianggui",
    descCN: "2020年创立，标杆级现代兰州牛肉面连锁品牌。传承百年制面技艺，恪守\"一清二白三红四绿五黄\"经典风味。将地道西北面食打造为国际化轻奢快餐，向世界演绎东方面食匠心美学。",
    descEN: "Founded in 2020, a benchmark modern Lanzhou beef noodle chain. Inheriting century-old noodle-making craftsmanship with classic flavors. Transforming authentic Northwest noodles into international casual dining, presenting the exquisite craftsmanship of oriental noodles to the world.",
    category: "restaurant"
  },
  {
    id: 10,
    logo: "images/10.png",
    nameCN: "探鱼",
    nameEN: "Tanyu",
    descCN: "国内知名国际化烤鱼连锁品牌，2013年始创深圳，以特色风味烤鱼为核心。深耕标准化运营与全域供应链建设，门店布局全国重点城市，并拓展新加坡、澳洲等海外市场。",
    descEN: "A renowned international grilled fish chain brand founded in Shenzhen in 2013, featuring signature flavored grilled fish. It focuses on standardized operation and global supply chain construction, with presence in Singapore, Australia and other overseas markets.",
    category: "restaurant"
  },
  {
    id: 11,
    logo: "images/11.png",
    nameCN: "蒸浏记",
    nameEN: "Zhengliuji",
    descCN: "浏阳蒸菜标准示范品牌，2015年创立，传承非遗蒸菜技艺，主打健康营养的现蒸菜品。国内门店超200家；已进军新加坡、香港等市场，以\"一菜一蒸\"明档模式推动中式蒸菜全球化。",
    descEN: "A benchmark brand for Liuyang steamed cuisine, founded in 2015. It inherits intangible cultural heritage techniques and focuses on healthy, fresh-steamed dishes. With over 200 stores nationwide, expanding to Singapore and Hong Kong, promoting global Chinese steamed cuisine.",
    category: "restaurant"
  },
  {
    id: 12,
    logo: "images/12.png",
    nameCN: "NSF International",
    nameEN: "NSF International",
    descCN: "创立于1944年，独立非营利的全球公共卫生权威机构，世卫组织食品安全与水质合作中心。提供食品、饮水、健康家电及消费品的标准制定、检测与认证服务，助力产业安全升级与国际市场准入。",
    descEN: "Founded in 1944, an independent, nonprofit global public health authority and a WHO Collaborating Center for food safety and water quality. It provides standard-setting, testing and certification services for food, water, healthy appliances and consumer products, empowering industries with global standards and local expertise.",
    category: "service"
  },
  {
    id: 13,
    logo: "images/13.png",
    nameCN: "中食国传",
    nameEN: "China Food Global Communication",
    descCN: "《中国食品报社》旗下全资国际传播平台，2024年成立。专注中国食品与餐饮文化的全球推广，运营海外新媒体与出海视频平台，提供国际品牌策划、跨境传播与产业对接服务。",
    descEN: "A wholly-owned international dissemination platform of China Food News, founded in 2024. It focuses on global promotion of Chinese food and culinary culture, operating overseas new media and video platforms, providing international branding, cross-border communication and industrial docking services.",
    category: "service"
  }
];

// --- Full Member List (34 members + categories) ---
const MEMBER_LIST = [
  { num: 1, nameCN: "重庆一手麻辣餐饮管理有限公司", brandCN: "刘一手", category: "restaurant" },
  { num: 2, nameCN: "方叔叔餐饮管理（上海）有限公司", brandCN: "莆田", category: "restaurant" },
  { num: 3, nameCN: "满巍明（上海）餐饮管理有限公司", brandCN: "满巍明", category: "restaurant" },
  { num: 4, nameCN: "上海小贝壳餐饮管理有限公司", brandCN: "陈香贵", category: "restaurant" },
  { num: 5, nameCN: "Mikiya International LLC.", brandCN: "MIKIYA", category: "restaurant" },
  { num: 6, nameCN: "Umeteagroup inc", brandCN: "UME", category: "restaurant" },
  { num: 7, nameCN: "Enhance Hospitality Inc.", brandCN: "Multi-Brands", category: "restaurant" },
  { num: 8, nameCN: "荷兰骏修文陈氏国际有限公司", brandCN: "CHENIntl", category: "supply" },
  { num: 9, nameCN: "捷克斯洛伐克新北京国际贸易公司", brandCN: "AIChef", category: "supply" },
  { num: 10, nameCN: "武汉轩轶隆食品有限公司", brandCN: "JACKBrothers", category: "supply" },
  { num: 11, nameCN: "河北刁氏餐饮管理有限公司", brandCN: "刁四麻辣烫", category: "restaurant" },
  { num: 12, nameCN: "郭淑芬（杭州）餐饮有限公司", brandCN: "郭淑芬牛肉火锅", category: "restaurant" },
  { num: 13, nameCN: "深圳市甘棠明善餐饮有限公司", brandCN: "探鱼", category: "restaurant" },
  { num: 14, nameCN: "成都宽窄熊猫商业运营管理有限公司", brandCN: "宽窄", category: "restaurant" },
  { num: 15, nameCN: "杭州沙小龙餐饮管理有限公司", brandCN: "沙县", category: "restaurant" },
  { num: 16, nameCN: "恒兴食品（广州）有限公司", brandCN: "渔恒鲜", category: "supply" },
  { num: 17, nameCN: "浙江松盛园食品有限公司", brandCN: "松盛园", category: "supply" },
  { num: 18, nameCN: "苏州市水天堂食品生产有限公司", brandCN: "水天堂", category: "supply" },
  { num: 19, nameCN: "百珍堂生物科技（浙江）有限公司", brandCN: "晨曦", category: "supply" },
  { num: 20, nameCN: "扬州东园食品有限公司", brandCN: "东园", category: "supply" },
  { num: 21, nameCN: "中国食品报中食国传", brandCN: "中食国传", category: "service" },
  { num: 22, nameCN: "NSF大中国区", brandCN: "NSF", category: "service" },
  { num: 23, nameCN: "珠海优特智厨科技有限公司", brandCN: "优特智厨", category: "tech" },
  { num: 24, nameCN: "四川熊喵大师科技有限公司", brandCN: "熊喵大师", category: "tech" },
  { num: 25, nameCN: "上海长膳智能科技有限公司", brandCN: "长膳智能", category: "tech" },
  { num: 26, nameCN: "湖南省蕾自达智能科技有限公司", brandCN: "蕾自达", category: "tech" },
  { num: 27, nameCN: "苏州鹏满科技有限公司", brandCN: "PENGMAN鹏满", category: "tech" },
  { num: 28, nameCN: "添可电器有限公司", brandCN: "食万星厨", category: "tech" },
  { num: 29, nameCN: "上海发现者机器人集团有限公司", brandCN: "FXZ发现者", category: "tech" },
  { num: 30, nameCN: "燕诚智能设备制造河北有限公司", brandCN: "YANC燕诚", category: "tech" },
  { num: 31, nameCN: "北京大虎智源科技有限公司", brandCN: "大虎智源", category: "tech" },
  { num: 32, nameCN: "上海智好味科技有限公司", brandCN: "劲霸大厨", category: "tech" },
  { num: 33, nameCN: "苏州万店掌网络科技有限公司", brandCN: "万店掌", category: "tech" },
  { num: 34, nameCN: "通证创新（北京）区块链科技有限公司", brandCN: "通证创新", category: "tech" }
];

const CATEGORY_LABELS = {
  zh: { restaurant: "餐饮品牌", supply: "供应链", tech: "智能科技", service: "服务机构" },
  en: { restaurant: "Restaurant Brand", supply: "Supply Chain", tech: "Smart Tech", service: "Service Org" }
};
