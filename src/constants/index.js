import {
  companyone, companytwo, companythree, github, telegram, discord, telegram1, discord1, github1, 
  barber, beach, foobee, lion, luko, mused, network, virusageeks, kw,
  mobileDev, fintech, payment,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'Telegram',
    url: 'https://t.me/gemups1205',
    icon: telegram,
    icon1: telegram1,
  },
  {
    id: 2,
    name: 'Discord',
    url: 'https://discord.gg/midas_s7',
    icon: discord,
    icon1: discord1,
  },
  {
    id: 3,
    name: 'Github',
    url: 'https://github.com/olek-prog',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Swift',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Kotlin',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'iOS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Android',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Stripe',
    icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'VirusGeeks',
    desc: 'Built iOS and Android application from scratch using React Native and Redux-saga. Contributed to building platforms for admin and participant as a full-stack web developer. Integrated API into mobile app and deployed to google and app store.',
    tech: ['Flutter', 'SwiftUI', 'i18next', 'Swift', 'CoreData', 'QR Scanner', 'Webcam', 'XCTest', 'Unit', 'Google Maps', 'Styled Components', 'Touch ID Authentication'],
    img: virusageeks,
    carousel: [virusageeks],
    source_link: 'https://apps.apple.com/us/app/virusgeeks-mobile-app/id1571234929',
    live_link: 'https://my.virusgeeks.com/',
    android_link: 'https://play.google.com/store/apps/details?id=com.virusgeeks.mobile&hl=en_US&gl=US',
  },
  {
    id: 2,
    name: 'BeachBody',
    desc: 'Collaborated with 6 team members as a senior front-end developer. Updated front-end page for pixel-perfect and responsive design. Focused performance issue to improve app speed. Integrated Google Analytics. Implemented multi-language feature.',
    tech: ['Flutter', 'Dart', 'REST', 'Google Analytics', 'AWS', 'Google Tag Manager'],
    img: beach,
    carousel: [beach],
    source_link: 'https://www.beachbodyondemand.com/',
    live_link: 'https://www.beachbodyondemand.com/',
  },
  {
    id: 3,
    name: 'Keller Williams',
    desc: 'Worked as a senior front-end developer on 2 mobile applications (refactoring and dashboard). Built the infrastructure of the applications from scratch as a lead front-end developer. Collaborated with 3 backend developers, 2 front-end developers, and 2 QA Testers. Contributed to updating existing search website as a full-stack developer with around 10 team members for additional features and performance improvement in front-end and backend. Also collaborated with other team members who are working on reusable components and other websites & services.',
    tech: ['Flutter', 'Dart', 'GraphQL', 'i18next', 'Node.js', 'Android', 'GitHub', 'ElasticSearch', 'Spinaker', 'MediaPipe', 'LLM', 'Gemfury'],
    img: kw,
    carousel: [kw],
    source_link: 'https://kw.com/',
    live_link: 'https://kw.com/',
    command_link: 'https://console.command.kw.com',
  },
  {
    id: 4,
    name: 'FREIGHTLEADS',
    desc: 'Refactoring the website from scratch based on the client\'s design using iOS and Android app. Ongoing maintenance to polish design and payment processing.',
    tech: ['Flutter', 'Dart', 'Provider', 'Riverpod', 'Bloc / Cubit', 'GetX', 'Flutter Animations', 'Lottie', 'Firebase Integration', 'Push Notifications', 'Responsive UI', 'Custom Widgets', 'API Integration', 'State Management'],
    img: lion,
    carousel: [lion],
    source_link: 'https://www.freight-leads.com/',
    live_link: 'https://www.freight-leads.com/',
  },
  {
    id: 5,
    name: 'Luko',
    desc: 'Update front-end pages for pixel-perfect design. Integrated Google Analytics and Google Tag Manager. Updated Node backend for some technical issues and functions. Continuous deployment process via AWS and Netlify.',
    tech: ['Flutter', 'Android', 'Kotlin', 'java', 'UIKit', 'AWS', 'AR/VR development', 'Google Analytics', 'GTM'],
    img: luko,
    carousel: [luko],
    source_link: 'https://www.luko.eu/en/',
    live_link: 'https://www.luko.eu/en/',
  },
  {
    id: 6,
    name: 'Foobee',
    desc: 'Managed the front-end with 1 other front-end developer. Contributed to backend development using Firebase and Flutter. Focused on functionality and performance with API integrations. Integrated Firebase authentication with Chat API.',
    tech: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'ViewModel / LiveData', 'Room Database', 'Firebase', 'ML Kit', 'TensorFlow Lite', 'On-device Inference', 'Image Classification', 'Object Detection', 'NLP (Text Analysis)', 'Recommendation Systems', 'Authentication (Google, Facebook)', 'REST APIs / Node.js', 'Real-time Chat (Firebase / WebSockets)', 'Geolocation / Map Features'],
    img: foobee,
    carousel: [foobee],
    source_link: 'https://play.google.com/store/apps/details?id=com.foobeeapp.release&hl=en',
    live_link: 'https://apps.apple.com/us/app/foobee/id1374718279',
  },
  {
    id: 7,
    name: 'The Cut',
    desc: 'Contributed to the front-end with 2 other front-end developers. Managed backend development on Hasura engine for GraphQL. Focused on pixel-perfect and database structure. Integrated Amazon Web Services such as Cognito, S3, Lambda, AppSync using AWS-Amplify.',
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Core Data', 'CloudKit', 'Core Animation', 'Core Location', 'ARKit', 'LiDAR (Depth Scanning)', 'Bluetooth / IoT Device Integration', 'StoreKit (In-App Purchases)', 'URLSession / REST APIs', 'GraphQL (Apollo iOS)', 'AWS S3', 'Cognito', 'AWS Lambda', 'AWS Amplify', 'PostgreSQL', 'Firebase', 'XCTest / Unit Testing', 'App Store Deployment'],
    img: barber,
    carousel: [barber],
    source_link: 'https://play.google.com/store/apps/details?id=com.thecut.mobile.android.thecut&hl=en',
    live_link: 'https://apps.apple.com/us/app/thecut-barbershop-booking/id1101408626',
  },
  {
    id: 8,
    name: 'NETWORKED',
    desc: 'Built MVP version using Flutter. Integrated chat function using Parse. Focus on front-end development for pixel-perfect and better UX. Integrated Google Map for the next version. Supported ongoing maintenance until the next funding.',
    tech: ['Flutter', 'Dart', 'Swift', 'SwiftUI', 'WebRTC', 'Chat Messaging', 'Animations', 'Google Map', 'In App Purchase'],
    img: network,
    carousel: [network],
    source_link: 'https://apps.apple.com/us/app/mighty-networks/id1081683081',
    live_link: 'https://www.mightynetworks.com/',
    android_link: 'https://play.google.com/store/apps/details?id=com.mightybell.mb&hl=en&gl=US',
  },
  {
    id: 9,
    name: 'FARFETCH',
    desc: 'Built front-end with 1 other front-end developer for MVP version. Collaborated with a backend developer on Realm stitch server. Focused on pixel-perfect and performance issue with backend. Integrated Farfetch and Payment APIs.',
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'Core Data', 'Combine', 'Alamofire', 'URLSession', 'Core Animation', 'Auto Layout', 'Push Notifications', 'In-App Purchases (StoreKit)', 'Firebase', 'XCTest / Unit Testing', 'App Store Deployment'],
    img: mused,
    carousel: [mused],
    source_link: 'https://play.google.com/store/apps/details?id=com.farfetch.farfetchshop&hl=en/',
    live_link: 'https://apps.apple.com/us/app/farfetch-shop-luxury-fashion/id906698760',
  },
];

const experiences = [
  {
    id: 1,
    name: 'Railsware',
    image: companyone,
    text: "Built a reusable Flutter payments SDK module powering the mobile app and available for partner white-labeling. Integrated Amazon Pay checkout flow alongside Apple & Google, enabling a unified mobile Tap & Pay experience across payment methods. Architected wallet architecture enabling top-ups and payouts in multiple currencies, integrated with PCI-compliant back-end services. Led and mentored 4 mid-level engineers, introduced robust code review practices, and developed a Flutter widget library for payments flows. Worked closely with backend engineers to align mobile UX with payment lifecycle events including webhooks, settlement, and notifications. Enforced secure credential storage, token refresh mechanisms, and ensured mobile flows adhered to PCI-DSS and GDPR standards.",
    jobtitle: 'Senior Mobile Engineer',
    location: 'Kyiv, Ukraine (12/2019 - 07/2025)',
  },
  {
    id: 2,
    name: 'iPay.ua',
    image: companytwo,
    text: "Implemented intelligent payment routing system that automatically switches to alternative payment service providers (PSP) when one method fails, preserving seamless mobile user experience. Built native bridging modules using Swift for iOS and Kotlin for Android, wrapped into a shared Flutter layer for uniform UI across platforms. Implemented tokenization and secure storage of payment credentials, overseeing PCI-compliance related mobile flows. Delivered subscription and recurring payment support for wallet top-ups and premium account tiers, achieving increased user retention. Ensured robust payment processing with comprehensive error handling and fallback mechanisms.",
    jobtitle: 'Mobile Engineer',
    location: 'Kyiv, Ukraine (04/2017 - 11/2019)',
  },
  {
    id: 3,
    name: 'NovaPay',
    image: companythree,
    text: "Increased client engagement by delivering mobile apps with innovative fintech features. Built secure onboarding flows including document verification and biometric authentication for wallet features. Optimized mobile performance and improved maintainability using clean architecture patterns. Collaborated with DevOps to deploy CI/CD pipelines for mobile builds with automated tests, crash analytics, and payment-flow monitoring. Ensured high-quality mobile applications with focus on security, performance, and user experience.",
    jobtitle: 'Mobile Developer',
    location: 'Kyiv, Ukraine (09/2016 - 03/2017)',
  },
];

const services = [
  {
    id: 1,
    icon: mobileDev,
    title: 'Enterprise Mobile Development',
    text: 'I architect and build enterprise-grade mobile applications that scale to millions of users. Leveraging React Native, Flutter, Swift, and Kotlin, I deliver native-level performance with cross-platform efficiency. My solutions include advanced state management, offline-first architectures, real-time synchronization, and performance optimizations that ensure exceptional user experiences across iOS and Android platforms.',
  },
  {
    id: 2,
    icon: fintech,
    title: 'Fintech Platform Architecture',
    text: 'I design and develop secure, compliant financial technology platforms that process billions in transactions. My expertise includes PCI-DSS Level 1 compliance, end-to-end encryption, biometric authentication, fraud detection systems, and regulatory compliance (PSD2, Open Banking, GDPR). I build digital banking solutions, payment infrastructures, and financial APIs that meet the highest industry security standards.',
  },
  {
    id: 3,
    icon: payment,
    title: 'Payment Infrastructure & Integration',
    text: 'I architect high-performance payment processing systems that handle millions of transactions per second. I integrate with major payment providers (Stripe, PayPal, Adyen, banking APIs), build real-time transaction management systems, implement advanced fraud detection, and create comprehensive financial data analytics platforms. My solutions ensure 99.99% uptime, sub-100ms transaction processing, and complete regulatory compliance.',
  }
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Project',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Experience',
    url: '/#experience',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, experiences, social, services, navLinks,
};
