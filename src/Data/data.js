/**src/data/data.js**/
const HEADER = "6 0 5 i v e";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About us" },
  /*{ id: 4, url: "#testimonials", label: "Testimonials" },*/
  { id: 4, url: "#footer", label: "Contact" }
];
const BANNER_DATA = {
  HEADING: "6 0 5 i v e . c o m",
  DECRIPTION:
    "Consulting engagements for Advanced Tech",
  TUTORIAL_URL:
    "#",
  WATCH_TUTORIAL: "Watch Tutorials"
};
const SERVICE_DATA = {
  HEADING: "Topics",
  ALL_SERVICES: "Blog",
  SERVICE_LIST: [
    {
      LABEL: "IoT and Smart Things",
      DESCRIPTION:
        "Smart things are changing the way we interact with our environment. With more and more devices getting 'smart' our behaviour is adopting to this new norm",
      URL: "images/service111.png"
    },
    {
      LABEL: "OSGi and Integrations",
      DESCRIPTION:
        "DevOps or Architectures ranging from Monoliths, Moduliths or Micro-Services; Batch to Streaming Protocols; the integration realm is quickly changing",
      URL: "images/service2.png"
    },
    {
      LABEL: "AI and ML",
      DESCRIPTION:
        "PyTorch, Tensorflow, SciKit, Numpy, Pandas, Keras - Machine Learning is the new world and going through an exponential growth phase",
      URL: "images/service33.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "About Me",
  TITLE: "Successfully executed multiple projects on:",
  IMAGE_URL: "images/network1.png",
  WHY_CHOOSE_US_LIST: [
    "Application Design and Architecture ",
    "Enterprise Integration Patterns and Implementations",
    "FinTech - Retail, Capital Markets and Wealth Management",
    "DevOps and DevSecOps",
    "All things OSGi and Microservices",
    "Robotic Process Automation",
    "Voice Assisted Channels",
    "Function Apps and Cloud Infrastructure"

  ]
};
const TESTIMONIAL_DATA = {
  HEADING: "Recent Blogs",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "",
      IMAGE_URL: "images/user1.jpg",
      NAME: "",
      DESIGNATION: ""
    },
    {
      DESCRIPTION:
        "",
      IMAGE_URL: "images/user2.jpg",
      NAME: "",
      DESIGNATION: ""
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
   /* "images/whatsapp-icon.png",*/
    { icon: "images/twitter-icon.png", url: "https://twitter.com/605ive" },
    { icon: "images/linkedin-icon.png", url: "https://www.linkedin.com/in/manavphull/" }
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "Contact for more information",
  CONTACT_DETAILS: {
    HEADING: "Contact",
    ADDRESS: "3553 Burgess Cres, Mississauga ON L5L 4Y9",
    MOBILE: "+1.807.787.5605",
    EMAIL: "info@605ive.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
