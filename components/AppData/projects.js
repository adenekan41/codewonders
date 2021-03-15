const PROJECTS_DATA = [
  {
    title: 'Piggment',
    description: 'The Gradients and colours for the next smart creator',
    about:
      'Piggment is curated collection of amazingly colored gradients for designers, developers and smart creators over the world. now you can generate, explore, save, easy CSS crossbrowser gradient codes all in one place.',
    link: 'https://piggment.co',
    imageUrl: 'https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif',
    github: 'https://github.com/adenekan41/piggment',
    type: ['project', 'open-source', 'tools'],
    technologies: ['React', 'Sass & CSS', 'Javascript', 'Context'],
  },
  {
    title: 'Shoprrr',
    description: 'An E-commerce Application For Buying Cotton Products.',
    github: 'https://github.com/adenekan41/shoprrr',
    about:
      'Shoprrr is an e-commerce platform catered towards giving the best and fast experience for customers to buy cotton products, we call its a frictionless process from start to finish.',
    link: 'https://shoprrr.netlify.com',
    imageUrl: 'https://i.ibb.co/T0XwFsQ/Screen-Recording-2020-05-06-at-3.gif',
    type: ['project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase'],
  },
  {
    title: '54gene',
    description: 'Discover Yourself Through Your Genes.',
    about:
      'Africans house the most genetically diverse DNA in comparison to all other world populations combined. In gathering insights from the African genome, we could power medical breakthroughs and discoveries that will change the entire landscape of healthcare, globally. We fully recognise the tremendous potential that this presents. Presently, most genomic data used for development research is from Europe, United Kingdom and North America with African genomic data only accounting for less than 3%. This is where we come in. We exist to close this gap by increasing access to highly curated genomic data from African populations.',
    link: 'https://54gene.com',
    imageUrl:
      'https://i.ibb.co/6gZckMz/Screenshot-2020-05-04-at-4-34-31-AM.png',
    type: ['others', 'project'],
    technologies: ['Vuejs', 'Javascript', 'Vuex'],
  },
  {
    title: 'Piggment Chrome Extension',
    github: 'https://github.com/adenekan41/piggment-chrome',
    description: 'The gradient you have always wanted in a new tab',
    about:
      'Piggment is curated collection of amazingly coloured gradients for designers, developers and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in a new tab.',
    link:
      'https://chrome.google.com/webstore/detail/piggment-crafted-to-inspi/eifkhhlfjplpakoddkndkgjhfajnhffg',
    imageUrl: 'https://i.ibb.co/Pxm6yzy/Screenshot-2020-07-28-at-02-48-43.png',
    type: ['project', 'open-source', 'tools'],
    technologies: ['React', 'Context API', 'Javascript'],
  },
  {
    title: 'Fast',
    description: 'The fastest way to buy the things you love',
    about:
      'One click. No passwords. The worlds fastest checkout. Forget passwords. Skip long entry forms. Shop online and securely check out with a single click. It’s safe, easy, and yep, fast.',
    link: 'https://fastasf.netlify.app/',
    imageUrl: 'https://i.ibb.co/KsnZhLP/Screenshot-2020-06-11-at-15-10-06.png',
    type: ['others', 'project'],
    technologies: ['React', 'TypeScript', 'Javascript', 'Contentful'],
  },

  {
    title: 'Zeedas',
    description: 'Engineering Team On Steriod.',
    about:
      'Zeedas is an advanced product management tool that allows you manage and track the speed and accuracy of developers from anywhere in the world to meet your software needs.',
    link: 'https://zeedas.com',
    imageUrl:
      'https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png',
    type: ['others', 'project'],
    technologies: ['Vuejs', 'Vuex', 'Javascript', 'CSS3 & Sass'],
  },
  {
    title: 'Nester Verify',
    description:
      'An online web application for address and guarantor verification',
    about:
      'Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.',
    link: 'https://nesterverify.com',
    imageUrl:
      'https://i.ibb.co/5K2pY54/Screen-Shot-2019-11-23-at-2-16-30-PM.png',
    type: ['project'],
    technologies: ['Vue', 'Vuex', 'Javascript', 'CSS3 & Sass'],
  },
  {
    title: 'Clinified',
    description: 'Accessing healthcare will never be the same again',
    about:
      'Clinified is your personal assistance working for you 24/7. Better manage your practice and build your online reputation. With our integrated end-to-end solution, you are able to improve online presence and devote time to what really matters: your patients .Today, the entire healthcare system in Africa is fundamentally broken, complicated and frustrating. Clinified wants to change this by transforming how you access and experience healthcare, with a focus on high quality and improved outcomes.',
    link: 'https://clinified.com/',
    imageUrl:
      'https://i.ibb.co/ZhmzLdv/Screenshot-2020-05-04-at-4-26-10-AM.png',
    type: ['project'],
    technologies: ['Nuxt', 'Vue', 'Javascript', 'A11y'],
  },
  {
    title: 'Nester Pod',
    description: 'Manage All Your Logistics in One Place',
    about:
      'Delivery Tracking and Management. Organize, coordinate and monitor all aspects of your parcel delivery in a convenient and efficient way. Drivers, courier companies, field staff and carriers can now receive instant pickup and delivery requests at any location through our app and edit and capture customers delivery information on the go.',
    link: 'https://nesterpod.com',
    imageUrl:
      'https://i.ibb.co/nfnG7F6/Screen-Shot-2019-11-23-at-2-17-06-PM.png',
    type: ['others', 'project'],
    technologies: ['Vuejs', 'Vuex', 'Javascript', 'Sass', 'A11y'],
  },
  {
    title: 'Bloverse',
    description:
      'A content creation platform fostering a global community of engaged and insightful individuals',
    link: 'https://www.bloverse.com/',
    about:
      'Bloverse is a content creation platform fostering a global community of engaged and insightful individuals. A global community of engaged and insightful individuals revolutionising the creation and consumption of content ',
    imageUrl:
      'https://i.ibb.co/s5ppyjx/Screen-Shot-2019-11-23-at-2-17-57-PM.png',
    type: ['others'],
    technologies: ['Vuejs', 'Vuex', 'Javascript', 'TypeScript', 'CSS3 & Sass'],
  },
  {
    title: 'Opus Insights',
    description:
      'A forcasting platform for farmers  that bring intelligent insights to agricultural supply chains',
    about:
      'Opus Insights is a forcasting platform for farmers that bring intelligent insights to agricultural supply chains, automated alerts on weather changing. AI powered and smart map.',
    link: 'https://opusinsight.netlify.app',
    github: 'https://github.com/adenekan41/opus',
    imageUrl: 'https://i.ibb.co/zFT3HQR/Screen-Recording-2020-05-06-at-1.gif',
    type: ['others', 'project'],
    technologies: ['React', 'Context API', 'Javascript', 'HTML & CSS'],
  },

  {
    title: 'Lentora',
    description: 'Learn a New Skill, Boost Your Career',
    about:
      'Learn Anything at Your Own Pace. Get lifetime access to hundreds of top quality professional and vocational courses/programs. Learn at your own pace. Improve your career and business growth with relevant skills.',
    link: 'http://lentora.com/',
    imageUrl:
      'https://i.ibb.co/ykQmbVw/Screen-Shot-2019-11-23-at-2-20-17-PM.png',
    type: ['others', 'project'],
    technologies: ['Nuxt', 'Vue', 'Javascript', 'Vuex', 'A11y'],
  },

  {
    title: 'Truegiven',
    description: 'Addressing current and future workforce needs',
    about:
      'True Given helps people gain more control of their finances by connecting people to organizations providing direct and immediate assistance to families and individuals who desperately require a modest helping hand. Our specific focus is how the aid will benefit children, older adults and other vulnerable members of our community. True Given offers peace of mind.',
    link: 'https://truegiven.com',
    imageUrl:
      'https://i.ibb.co/LnCz8Vx/Screen-Shot-2019-11-23-at-2-24-07-PM.png',
    type: ['project'],
    technologies: ['HTML', 'CSS', 'Javascript', 'Compiled HTML'],
  },
  {
    title: 'Freespace (WIP)',
    description: '100% Anonymously tell the world your mind.',
    about:
      'Freespace can be utilized as your own safe place where you can freely un-conceal your thoughts and emotions without any apprehensions. Freespace requires no log-in, your IP address is not tracked and we do not leave any cache files on your browser or SERVER.  This is to assure our users that we give utmost importance to their privacy and anonymity.  Keeping this in mind, we have also ensured that no comment section is available for the posts.  This is to further protect the writer of the post and to ensure no negative interactions or cyberbullying takes place.  We are hopeful that this will further encourage our users to share openly and to read stories of others, who are just like them or might be different but can still connect and learn at a certain level.',
    link: 'https://freespaace.com',
    imageUrl: 'https://i.ibb.co/q5ZDjLd/image.png',
    type: ['others', 'project'],
    technologies: ['React', 'Redux', 'Javascript', 'Firebase'],
  },
  {
    title: 'Liveizy',
    description: 'Manage all your properties in one place',
    about:
      'We reduce cost of living and help you meet your most important living expectations by increasing izyAccess to all the necessary resources needed to improve living standards.',
    link: 'https://liveizy.com',
    imageUrl:
      'https://i.ibb.co/PxwbV5m/Screen-Shot-2019-11-24-at-11-36-52-PM-1.png',
    type: ['others', 'project'],
    technologies: ['HTML', '11ty', 'Javascript', 'CSS & Sass'],
  },
  {
    title: 'Farmhub360',
    description:
      'Our goal is to help Customers to get fresh foods within the shortest possible time.',
    about:
      'Farmershub360 is a platform that allows farmers around the world to be able to showcase their farm produces to the customer or to distributors that can buy directly from the farmers. Farmerhub360.com is an online portal available 24/7 to the internet customers, It ís a virtual online market place facilitation easy buying and selling of farm produces such as Livestock, Aquaculture, Crops, Farm Equipments and Farm services such as Veterinary Doctors e.t.c',
    link: 'https://farmhub360.com',
    imageUrl:
      'https://i.ibb.co/XWjV6k0/Screen-Shot-2019-11-23-at-2-25-40-PM.png',
    type: ['project'],
    technologies: ['Vuejs', 'Vuex', 'Javascript', 'Nodejs'],
  },
  {
    title: '70Shops',
    description:
      'Helps business owners create an eCommerce platform for their businesses',
    about:
      'We are introducing a set of tools that will help grow the businesses of merchants in Africa especially. Our tools will be able to effectively manage the general operations of these merchants and provide them with analytical data to help streamline the growth of their businesses.',
    link: 'https://70shops.com',
    imageUrl:
      'https://i.ibb.co/q939Wxd/Screen-Shot-2019-11-23-at-2-27-08-PM.png',
    type: ['others', 'project'],
    technologies: ['HTML', '11ty', 'Javascript', 'CSS & Sass', 'A11y'],
  },

  {
    title: 'Bellza',
    description:
      'Discover & access to on-demand Information leisure and utility over the world from your chrome.',
    about:
      'Bellza, a chrome extension, will open up an era of high customization for the new tab pages of your Chrome and Firefox. Common websites can be added to Speed Dial in one step and displayed with icons; the customizable search engines, select HD wallpapers and widgets like Weather, Notes, Bookmarks, To-do List, History, Gmail Notifier, etc. can increase your productivity.',
    link: 'https://bellza.surge.sh',
    imageUrl: 'https://i.ibb.co/W6859mc/ezgif-com-optimize.gif',
    type: ['tools'],
    technologies: ['Vue', 'javascript', 'HTML & CSS'],
  },
  {
    title: 'Atara Pay',
    description: 'Buy and Sell Anywhere with Zero Risk',
    about:
      'AtaraPay is an online escrow service promoted by TrustPay Technologies Limited. We are the first company to create online escrow supported by technology to allow user accept or reject items purchased at point of delivery. Our solution protects buyers’ funds but goes the extra step to specifically protect merchants from a logistics perspective.',
    link: 'https://atarapay.com',
    imageUrl:
      'https://i.ibb.co/dk7bZ9L/Screen-Shot-2019-11-23-at-3-16-38-PM.png',
    type: ['portfolio', 'project'],
    technologies: ['Vuejs', 'Vuex', 'Javascript', 'Nodejs'],
  },

  {
    title: 'Urley',
    description: 'A cross-platform utility library to work with URLs',
    link: 'https://urley.netlify.com',
    github: 'https://github.com/adenekan41/urley',
    about:
      'Urley, A cross-platform utility library to work with URLs. Urely has a collection of handy helpers to use when working with URLs, with just a few imports you are set.',
    imageUrl: 'https://i.ibb.co/FDh7T07/image.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Typescript', 'Rollup'],
  },
  {
    title: 'Eze Wholesale',
    description: 'Buy & sell iPhones in wholesale quantities.',
    link: 'https://ezewholesale.com',
    about:
      'Eze connects electronics traders from all around the globe, enabling access to invaluable resources that improve the day-to-day lives of people everywhere.',
    imageUrl: 'https://i.ibb.co/NZgQ7P0/image.png',
    type: ['project', 'others'],
    technologies: ['Nextjs (React)', 'AWS', 'D3', 'Javascript', 'MobX'],
  },
  {
    title: 'Minimal Peace',
    description: 'A UI/UX designer of over 5+ years experience portfolio',
    about:
      'Adenekan Peace is lover of pure human design derived from critical research and detailed implementation of compiled results. With a hot cup of coffee every morning and a chilled pet bottle of soda by noon, I tackle my daily design challenges hoping one day the experience being implemented in my designs can change the world. Yeah, I almost forgot my pack of Maryland cookies and the smooth feel of soft jazz music that takes me to another planet which charges my brain to its climax.',
    link: 'https://minimalpeace.com/',
    github: 'https://github.com/adenekan41/minimal-peace',
    imageUrl: 'https://i.ibb.co/zs38X9q/Screen-Recording-2020-05-06-at-4-1.gif',
    type: ['project', 'others'],
    technologies: ['Gatsby', 'React', 'javascript'],
  },
  {
    title: 'Codewonders Helpers',
    description:
      'A Small Helpers Utility Functions For Javascript Development.',
    about:
      'This is a small helpers utility functions for javascript development. In here are the regular functions i use in my development feel free to contribute.',
    link: 'https://www.npmjs.com/package/codewonders-helpers',
    github: 'https://github.com/adenekan41/helpers',
    imageUrl: 'https://i.ibb.co/QpZjSmP/Group-14-1.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup'],
  },
  {
    title: 'Unit Css',
    description: '💪 A cli tool to convert units in your css file',
    about:
      'Unitcss A cli tool to convert css units in your file helps you swiftly convert units / mesurements in your file or folders. Using unitcss on files provides an easy way of changing mesurement from px to rem or rem to px or even px to em with only a few commands in your terminal.',
    link: 'https://www.npmjs.com/package/unitcss',
    github: 'https://github.com/adenekan41/unit-css',
    imageUrl: 'https://i.ibb.co/X2f8nWf/unitcsss.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup', 'CLI'],
  },
  {
    title: 'Helix',
    description:
      '🌄 A minimal monochrome theme for Vscode ~ 🎑 A light notion like theme for vscode.',
    about:
      'A Visual Studio Code theme for the notion and slient cool theme lovers out there. Fine-tuned for those of us who like to have the article creation feel. ✨The light theme of this color theme was inspired by notion and the dark theme was inspired by Sarah Drasner. cool right ?',
    link:
      'https://marketplace.visualstudio.com/items?itemName=codewonders.helix&ssr=false',
    github: 'https://github.com/adenekan41/helix',
    imageUrl:
      'https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png',
    type: ['open-source', 'tools'],
    technologies: ['JSON', 'CLI'],
  },
  {
    title: 'Compiled HTML',
    description:
      'A small project to make writing HTML faster and better and now components based with js',
    about:
      'Getting familiar with the template and you want to use some helper functions in your HTML file like import sidebar components or generate head components differently for each files @, Prefix to the world just import using them the following ways.',
    link: 'https://www.npmjs.com/package/generator-compiled-html',
    github: 'https://github.com/adenekan41/generator-compiled-html',
    imageUrl: 'https://i.ibb.co/kQvnBG2/Group-5-2-1.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Gulp'],
  },
  {
    title: 'Overstateful',
    description:
      'A small state management with less setup and super scalability in your react app.',
    about:
      'A small state management with less setup and super scalability in your react app.with over-stateful, all you need is this, less documentation required to get you going',
    link: 'https://www.npmjs.com/package/over-stateful',
    github: 'https://github.com/adenekan41/over-stateful',
    imageUrl:
      'https://i.ibb.co/YT6fXLB/Screenshot-2020-05-04-at-4-41-05-AM.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },
  {
    title: 'Broadstate',
    about:
      'Have you ever tried to move the value of a state from a child to the parent without using large state managment tools like Redux, Mobx e.t.c ?. Broadstate is an easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
    description:
      'Easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
    link: 'https://www.npmjs.com/package/broad-state',
    github: 'https://github.com/adenekan41/broad-state',
    imageUrl: 'https://i.ibb.co/GVdt9Jq/Dribbble-Shot-HD-3broad.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },
  {
    title: 'Aim Scroll',
    about:
      'Have you ever tried to add a feature to an element when the users scrolls to a certain extent ? or even tried the popular scroll aesthetic of adding a box-shadow to your navbar when the user scrolls up ?. aimscroll is Painless utility libary to handle scroll positions and methods in React.',
    description:
      'Painless utility libary to handle scroll positions and methods in react.',
    link: 'https://www.npmjs.com/package/aimscroll',
    github: 'https://github.com/adenekan41/aimscroll',
    imageUrl: 'https://i.ibb.co/1X27zFt/Group-6.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },
  {
    title: 'Use Responsive Query',
    about:
      ' An extremely powerful but easy to use hook for listening to media events in React. URQ create an experience of a javascript like reactive accomodation for your react application.',
    description:
      'An extremely powerful but easy to use hook for listening to media events in react.',
    link: 'https://www.npmjs.com/package/use-responsive-query',
    github: 'https://github.com/adenekan41/use-responsive-query',
    imageUrl: 'https://i.ibb.co/CPK4YzL/Group-38dd.png',
    type: ['open-source', 'tools'],
    technologies: ['Typescript', 'Rollup', 'React'],
  },
];

export default PROJECTS_DATA;
