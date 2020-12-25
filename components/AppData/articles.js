const ARTICLE_DATA = [
  {
    title: 'Vue.js Quickstart Tutorial by @code_wonders',
    description:
      'Vue is a progressive JavaScript framework that focuses on building user interf...',
    link:
      'https://dev.to/code_wonders/vuejs-2-quickstart-tutorial-by-codewonders-2972',
    imageUrl:
      'https://i.ibb.co/2dZ7SPT/Screen-Shot-2019-11-25-at-1-15-37-AM.png',
    type: ['article'],
  },
  {
    title: 'Architecting Large-scale Javascript Applications',
    description:
      'In the past we have worked with large javascript applications and frameworks and it...',
    link:
      'https://www.canva.com/design/DAEP8soDA7Y/LhN_G3Z6vbratkAlslugaQ/view?utm_content=DAEP8soDA7Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
    imageUrl: 'https://i.ibb.co/bscsh9q/image.png',
    type: ['article'],
  },
  {
    title: 'A Chat App With Vuejs & NodeJs',
    description:
      'As part of my learning I decided to make some application and found interesti...',
    link:
      'https://medium.com/@codewonders/a-chat-app-with-vuejs-nodejs-325eac45e3a9',
    imageUrl: 'https://i.ibb.co/q5VVx07/nodejs-frameworks.png',
    type: ['article'],
  },
  {
    title: 'Best websites a programmer should visit in 2018 @code_wonders',
    description: 'Some useful websites for programmers.',
    link: 'https://becominghuman.ai/code-wonders-96d629bb8d8c',
    imageUrl:
      'https://i.ibb.co/Rvq0S0s/Screen-Shot-2019-11-25-at-1-28-30-AM.png',
    type: ['article'],
  },
  {
    title: 'What are these things called generator functions* ?',
    description:
      'In this lessons, we are going to explore one really great new ishhhh that was introduced int...',
    link:
      'https://dev.to/code_wonders/what-are-these-things-called-generator-functions-58nn',
    imageUrl: 'https://i.ibb.co/wc3m88r/cloud.png',
    type: ['article'],
  },
  {
    title: 'Let’s Create a Blog with React & Node @code_wonders',
    description: '',
    link:
      'https://medium.com/@codewonders/lets-create-a-blog-with-react-node-code-wonders-33978ed45e59',
    imageUrl: 'https://i.ibb.co/YT0XHgH/imageedit-7360658824.png',
    type: ['article'],
  },
  {
    title: 'Minimalism in Programming',
    description:
      'I’m 32, and I’ve been programming actively for over 16 years at this...',
    link: 'https://pointersgonewild.com/2018/02/18/minimalism-in-programming/',
    imageUrl: 'https://i.ibb.co/59sw2qV/code-wallpapers-30652-6650776.png',
    type: ['reading'],
  },
  {
    title: 'Accessible Icon Buttons',
    description: 'Freelance Front-End Web UI/UX Developer - Lebanon',
    link: 'https://www.sarasoueidan.com/blog/accessible-icon-buttons/',
    imageUrl:
      'https://i.ibb.co/mFkMHPZ/Screen-Shot-2019-11-25-at-1-38-58-AM.png',
    type: ['reading'],
  },
  {
    title: 'Reducing Motion to Improve Accessibility',
    description:
      'Hey friends! In this post, I am going to walk you through a newer medi...',
    link:
      'https://www.a11ywithlindsey.com/blog/reducing-motion-improve-accessibility',
    imageUrl:
      'https://i.ibb.co/Jm2f3rY/Dream-Host-Accessibility-Tips-750x498.jpg',
    type: ['reading'],
  },
  {
    title: 'Smoother & sharper shadows with layered box-shadows',
    description: '',
    link: 'https://tobiasahlin.com/blog/layered-smooth-box-shadows/',
    imageUrl:
      'https://i.ibb.co/MSMpWQL/Screen-Shot-2019-11-25-at-1-49-51-AM.png',
    type: ['reading'],
  },
  {
    title: 'Don’t be a Junior Developer: The Roadmap',
    description: '',
    link:
      'https://zerotomastery.io/blog/dont-be-a-junior-developer-the-roadmap',
    imageUrl: 'https://i.ibb.co/t2wy0Qg/279547.jpg',
    type: ['reading'],
  },
  {
    title: 'Go Beyond: A Story of Failure',
    description:
      'Today, I want to share my story in hopes that it might inspire others to achieve their dream jo...',
    link: 'https://zerotomastery.io/blog/go-beyond-a-story-of-failure/',
    imageUrl: 'https://i.ibb.co/g7Xj6Jt/fear-failure-blog-x2.png',
    type: ['reading'],
  },
  {
    title: 'A Modern CSS Reset',
    description: 'I think about and enjoy very boring CSS stuf...',
    link: 'https://hankchizljaw.com/wrote/a-modern-css-reset/',
    imageUrl: 'https://i.ibb.co/RPkXPLN/css-declaration-small.png',
    type: ['reading'],
  },
  {
    title: 'Usability & Web Accessibility',
    description: '',
    link: 'https://usability.yale.edu/web-accessibility/articles',
    imageUrl:
      'https://i.ibb.co/1MQyX2F/Handicapped-Wheelchair-Accessible-Sticker.png',
    type: ['reading'],
  },
  {
    title: 'DevEd',
    description: '',
    link: 'https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q',
    imageUrl:
      'https://i.ibb.co/3sKzk4K/Screen-Shot-2019-11-25-at-2-09-11-AM.png',
    type: ['video'],
  },
  {
    title: 'Traversy',
    description: '',
    link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
    imageUrl: 'https://i.ibb.co/tXBtHdk/images.png',
    type: ['video'],
  },
  {
    title: 'Tech Lead',
    description: '',
    link: 'https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw',
    imageUrl:
      'https://i.ibb.co/qpRtXXg/Screen-Shot-2019-11-25-at-2-16-57-AM.png',
    type: ['video'],
  },
  {
    title: 'Joma Tech',
    description: '',
    link: 'https://www.youtube.com/channel/UCV0qA-eDDICsRR9rPcnG7tw',
    imageUrl:
      'https://i.ibb.co/X8XM7gH/Screen-Shot-2019-11-25-at-2-15-33-AM.png',
    type: ['video'],
  },
];

export default ARTICLE_DATA;
