import sample from "./img/sample.png";
import testFlight from "./img/testflight.png";
import vinci from "./img/vinci.png";

const data = {
  thoughts: {
    project: {
      image: vinci,
      title: "thoughts",
      categories: [
        { text: "UI/UX", color: "#D2F2F2" },
        { text: "BRANDING", color: "#F2D2D2" },
        { text: "PRODUCT", color: "#D5F2D2" },
      ],
    },
    link: {
      url: "https://www.isteamacademy.org",
      display: "VIEW FIGMA FILE",
    },
    about:
      "I’ve always been a huge fan of journaling. However, when I started college, my life started getting extra busy and cluttered, and I found journaling to be a great way to gather my thoughts and reset at the end of each day. I tried a bunch of different ways of journaling; physical journals, different apps, but found that none of them quite worked for me. So, when my internship ended this past summer, I brought my idea to a friend and together, we created Thoughts.",
    info: {
      role: ["Designer", "Developer"],
      tools: ["Figma", "React Native"],
      timeline: ["August '23"],
    },
    overview:
      "Having never done mobile development, this project definitely required a ton of initial research. We started with figuring out what we needed to do, and my friend started with coding the base of the project. Meanwhile, I carried out some initial UX research. I did design critiques of existing apps, and surveyed my target demographic (younger people that use social media). From these insights, I started designing the wireframe. The app quickly took shape, and I took the lead on the front end of the app, translating my design into a functional product. The app is pretty much all complete now, but we’re currently in the process of running tests, getting Spotify’s approval for their API, and getting it onto the App Store.",

    process: {
      problem: {
        image: sample,
        title: "the problem",
        desc: "I had a lot of trouble staying consistent with journaling.",
        blurb:
          "I never had the energy to actually write out my thoughts (and my handwriting is bad), so any time I tried to use a physical journal, it would fizzle out within a few days. I tried journaling apps, but I found them to be too formal and super clunky; I just didn’t want to use their apps. I did enjoy using private social media accounts, like Twitter and Instagram, because they were built for bite-sized content creation and I could create my own “aesthetic” within my feed. However, eventually I grew tired of how hard each account pushed me to try and consume content within the app; something I was not looking for in a journaling app. After years of experimenting with all of these different forms of journaling, I realized: why not make my own?",
      },
      solution: {
        image: sample,
        title: "the solution",
        desc: "Creating the anti social media app.",
        blurb:
          "My solution was a journal app in the form of social media. I loved the aspects of an Instagram and Twitter account where I could just open up the app spontaneously and just post whatever was on my mind. I also loved how I could curate my own feed to look and feel how I wanted it to. I hated, however, how they tried to force me to browse their explore pages. I loved how journaling apps could add songs of the day, since I am a huge fan of music and how it could define a day. Thoughts had developed from a rough idea to the implementation of my favorite features of my journaling apps within a simple, accessible app.",
      },
      research: {
        image: sample,
        title: "research",
        desc: "research desc This is a brief description for this project",
        blurb: "research This is room for a blurb.",
      },
      design: {
        image: sample,
        title: "design",
        desc: "design desc This is a brief description for this project",
        blurb: "design This is room for a blurb.",
      },
      test: {
        image: testFlight,
        title: "testing",
        desc: "Testing is currently in progress.",
        blurb:
          "We’re currently in the process of getting the app from Expo Go onto TestFlight, where we can start giving out working demos to interested people. We also need Spotify’s approval to implement the song feature, so there are a few steps that we are actively taking to hopefully get us closer to launch. I’ll keep this page updated with our results from testing!",
      },
      product: {
        image: sample,
        title: "final product",
        desc: "final product desc This is a brief description for this project",
        blurb: "final product This is room for a blurb.",
      },
      reflection: {
        image: sample,
        title: "reflections",
        takeaways: "reflections takeaways for this project",
        nextSteps: "next steps for this project",
      },
    },
  },

  project2: {
    project: {
      image: vinci,
      title: null,
      categories: [
        { text: null, color: null },
        { text: null, color: null },
        { text: null, color: null },
      ],
    },
    link: {
      url: null,
      display: null,
    },
    about: null,
    info: {
      role: [null, null],
      tools: [null, null, null],
      timeline: [null, null],
    },
    overview: null,
    process: {
      problem: {
        image: null,
        title: "the problem",
        desc: null,
        blurb: null,
        title2: null,
        desc2: null,
        blurb2: null,
        image3: null,
        title3: null,
        desc3: null,
        blurb3: null,
      },
      solution: {
        image: null,
        title: "the solution",
        desc: null,
        blurb: null,
      },
      research: {
        image: null,
        title: "research",
        desc: null,
        blurb: null,
      },
      design: {
        image: null,
        title: "design",
        desc: null,
        blurb: null,
      },
      test: {
        image: null,
        title: "test",
        desc: null,
        blurb: null,
      },
      product: {
        image: null,
        title: "Final product",
        desc: null,
        blurb: null,
      },
      reflection: {
        image: null,
        title: "reflection",
        takeaways: null,
        nextSteps: null,
      },
    },
  },
};

export default data;
