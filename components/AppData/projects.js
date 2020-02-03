const PROJECTS_DATA = [
  {
    title: 'Shoprrr',
    description: 'An E-commerce Application For Buying Cotton Products.',
    link: 'https://shoprrr.netlify.com',
    imageUrl:
      'https://i.ibb.co/pW8TLch/Screen-Shot-2019-11-23-at-2-11-51-PM.png',
    type: ['project'],
  },
  {
    title: '54gene',
    description: 'Discover Yourself Through Your Genes.',
    link: 'https://54gene.com',
    imageUrl:
      'https://i.ibb.co/Z85CmV8/Screen-Shot-2019-11-23-at-1-48-13-PM.png',
    type: ['others'],
  },
  {
    title: 'Zeedas',
    description: 'Engineering Team On Steriod.',
    link: 'https://zeedas.com',
    imageUrl:
      'https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png',
    type: ['others'],
  },
  {
    title: 'Nester Verify',
    description:
      'An online web application for address and guarantor verification',
    link: 'https://nesterverify.com',
    imageUrl:
      'https://i.ibb.co/5K2pY54/Screen-Shot-2019-11-23-at-2-16-30-PM.png',
    type: ['project'],
  },
  {
    title: 'Nester Pod',
    description: 'Manage All Your Logistics in One Place',
    link: 'https://nesterpod.com',
    imageUrl:
      'https://i.ibb.co/nfnG7F6/Screen-Shot-2019-11-23-at-2-17-06-PM.png',
    type: ['others', 'project'],
  },
  {
    title: 'Bloverse',
    description:
      'A content creation platform fostering a global community of engaged and insightful individuals',
    link: 'https://www.bloverse.com/',
    imageUrl:
      'https://i.ibb.co/s5ppyjx/Screen-Shot-2019-11-23-at-2-17-57-PM.png',
    type: ['others'],
  },
  {
    title: 'Lentora',
    description: 'Learn a New Skill, Boost Your Career',
    link: 'http://lentora.com/',
    imageUrl:
      'https://i.ibb.co/ykQmbVw/Screen-Shot-2019-11-23-at-2-20-17-PM.png',
    type: ['others', 'project'],
  },
  {
    title: 'Joblink',
    description: 'Get to know everything about teaching and living in China',
    link: 'https://joblink4u.com',
    imageUrl:
      'https://i.ibb.co/Zfs0nNB/Screen-Shot-2019-11-23-at-2-21-16-PM.png',
    type: ['project'],
  },
  {
    title: 'Truegiven',
    description: 'Addressing current and future workforce needs',
    link: 'https://truegiven.com',
    imageUrl:
      'https://i.ibb.co/LnCz8Vx/Screen-Shot-2019-11-23-at-2-24-07-PM.png',
    type: ['project'],
  },
  {
    title: 'Liveizy',
    description: 'Manage all your properties in one place',
    link: 'https://liveizy.com',
    imageUrl:
      'https://i.ibb.co/PxwbV5m/Screen-Shot-2019-11-24-at-11-36-52-PM-1.png',
    type: ['others', 'project'],
  },
  {
    title: 'Farmhub360',
    description:
      'Our goal is to help Customers to get fresh foods within the shortest possible time.',
    link: 'https://farmhub360.com',
    imageUrl:
      'https://i.ibb.co/XWjV6k0/Screen-Shot-2019-11-23-at-2-25-40-PM.png',
    type: ['project'],
  },
  {
    title: '70Shops',
    description:
      'Helps business owners create an eCommerce platform for their businesses',
    link: 'https://joblink4u.com',
    imageUrl:
      'https://i.ibb.co/q939Wxd/Screen-Shot-2019-11-23-at-2-27-08-PM.png',
    type: ['others', 'project'],
  },

  {
    title: 'Bellza',
    description:
      'Discover & access to on-demand Information leisure and utility over the world from your chrome.',
    link: 'https://bellza.surge.sh',
    imageUrl:
      'https://i.ibb.co/VNh4BNS/Screen-Shot-2019-11-23-at-2-29-40-PM.png',
    type: ['tools'],
  },
  {
    title: 'Despatch',
    description:
      'Local Same Day Delivery Courier Specialists For Personal / Business Clients.',
    link: 'https://despatch.com.ng',
    imageUrl:
      'https://i.ibb.co/RcgJt6w/Screen-Shot-2019-11-23-at-2-31-47-PM.png',
    type: ['project'],
  },
  {
    title: 'Atara Pay',
    description: 'Buy and Sell Anywhere with Zero Risk',
    link: 'https://atarapay.com',
    imageUrl:
      'https://i.ibb.co/dk7bZ9L/Screen-Shot-2019-11-23-at-3-16-38-PM.png',
    type: ['portfolio', 'project'],
  },
  {
    title: 'Iyanu',
    description: 'Social Conscience As A Service',
    link: 'https://iyanu.io',
    imageUrl:
      'https://i.ibb.co/VBk5JzH/Screen-Shot-2019-11-23-at-3-17-50-PM.png',
    type: ['portfolio'],
  },
  {
    title: 'Payer',
    description: 'The Easietst way To But Airtime Make Payments,',
    link: 'https://www.codewonders.us/payer',
    imageUrl:
      'https://i.ibb.co/6ZHSPH0/Screen-Shot-2019-11-23-at-3-19-39-PM.png',
    type: ['others'],
  },
  {
    title: 'Artisan Inc',
    description:
      'Artisan Is a platform for engaging workers all over the country with easy task and small platform to work with',
    link: 'https://www.codewonders.us/Artisan/',
    imageUrl:
      'https://i.ibb.co/6s4mcqc/Screen-Shot-2019-11-24-at-11-30-22-PM.png',
    type: ['others'],
  },
  {
    title: 'Drum Root',
    description: 'A React Web App for Creating and Sharing Drum Loops.',
    link: 'https://github.com/zero-to-mastery/drum-root',
    imageUrl:
      'https://i.ibb.co/8MG46Ts/Smart-Select-20191111-111937-Fiverr.jpg',
    type: ['open-source'],
  },
  {
    title: 'VSCode Nice Index',
    description:
      'VSCode package to rename "index.js" files to their parent dir.',
    link: 'https://github.com/iamuchejude/vs-nice-index',
    imageUrl: 'https://i.ibb.co/Fz8wGvg/msvschero.jpg',
    type: ['open-source', 'tools'],
  },
  {
    title: 'NodeStorage.js',
    description: 'File system storage utility with localStorage like API',
    link: 'https://npm.im/nodestorage.js',
    imageUrl: 'https://i.ibb.co/QPBqVL2/Group-12-2-1.png',
    type: ['open-source', 'tools'],
  },
  {
    title: 'Helix',
    description: 'A minimal monochrome UI theme for Vscode',
    link: 'https://github.com/adenekan41/Helix',
    imageUrl:
      'https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png',
    type: ['tools'],
  },
  {
    title: 'Wondafu',
    description:
      'You can pay bills on WhatsApp now! My number is +1 (954) 621-1426.',
    link: 'https://wondafu.ng',
    imageUrl:
      'https://i.ibb.co/0tYR5Mb/Screen-Shot-2019-11-23-at-6-47-50-PM.png',
    type: ['project', 'others'],
  },
  {
    title: '#payme',
    description:
      'Create your personal hashtag to make & receive payments across all messaging apps.',
    link: 'https://hashtagpay.me/',
    imageUrl:
      'https://i.ibb.co/7p3Cz7K/Screen-Shot-2020-01-20-at-11-44-45-PM.png',
    type: ['project', 'others'],
  },
  {
    title: 'Todolst',
    description: 'Create Your first Todo with todolist.io we manage your todo.',
    link: 'https://exquis.surge.sh/',
    imageUrl:
      'https://i.ibb.co/7Y5BHXK/Screen-Shot-2020-01-20-at-11-35-35-PM.png',
    type: ['project', 'others'],
  },
  {
    title: 'Codewonders Helpers',
    description:
      'A Small Helpers Utility Functions For Javascript Development.',
    link: 'https://www.npmjs.com/package/codewonders-helpers',
    imageUrl: 'https://i.ibb.co/QpZjSmP/Group-14-1.png',
    type: ['open-source', 'tools'],
  },
];

export default PROJECTS_DATA;
