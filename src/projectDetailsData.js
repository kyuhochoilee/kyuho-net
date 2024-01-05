import sample from "./img/sample.png";
import vinci from "./img/vinci.png";
import thoughts from "./img/thoughts header.png";
import journalApps from "./img/solution.png";
import dayone from "./img/day one.png";
import infograph from "./img/Infographic.png";
import figma from "./img/figma.png";
import screens1 from "./img/screens1.png";
import screens2 from "./img/screens2full.png";
import screens3 from "./img/screens3.png";
import expo from "./img/expototestflight.png";
import splash from "./img/splashscreen.png";
import wireframes from "./img/wireframes.png";

const data = {
  thoughts: {
    project: {
      image: thoughts,
      title: "thoughts",
      categories: [
        { text: "UI/UX", color: "#D2F2F2" },
        { text: "BRANDING", color: "#F2D2D2" },
        { text: "PRODUCT", color: "#D5F2D2" },
      ],
    },
    link: {
      url: "https://www.figma.com/file/jS6qHr2eytVyu89gS6ZeM5/Thoughts?type=design&node-id=1-60&mode=design",
      display: "VIEW FIGMA FILE",
    },
    about:
      "I’ve always been a huge fan of journaling. However, when I started college, my life started getting extra busy and cluttered, and I found journaling to be a great way to gather my thoughts and reset at the end of each day. I tried a bunch of different ways of journaling; physical journals, different apps, but found that none of them quite worked for me. So, when my internship ended this past summer, I brought an idea of a journaling app to a friend and together, we created Thoughts.",
    info: {
      role: ["Designer", "Developer"],
      tools: ["Figma", "React Native"],
      timeline: ["August '23"],
    },
    overview:
      "At its core, Thoughts is the anti-social media app. I chose a social media style for my UI, complete with a feed and post creation page, but the app intentionally has no online functionality — everything that users write within the app stays strictly on their phone. There is functionality for photo uploads, mood tracking, entry organization and search, and Spotify integration which allows you to pick a song of the week. Having never done mobile development, this project definitely required a ton of research and iteration. The app is pretty much complete now, but we’re currently in the process of running tests, getting Spotify’s approval for their API, and getting it onto the App Store.",
    process: {
      problem: {
        image: dayone,
        title: "the problem",
        desc: "I had a lot of trouble staying consistent with journaling.",
        blurb:
          "I never had the energy to actually write out my thoughts (and my handwriting is bad), so any time I tried to use a physical journal, it would fizzle out within a few days. I tried journaling apps, but I found them to be too formal and super clunky; I just didn’t want to use their apps. I did enjoy using private social media accounts, like Twitter and Instagram, because they were built for bite-sized content creation and I could create my own “aesthetic” within my feed. However, eventually I grew tired of how hard each account pushed me to try and consume content within the app; something I was not looking for in a journaling app. After years of experimenting with all of these different forms of journaling, I realized: why not make my own?",
      },
      research: {
        image: infograph,
        title: "the research",
        desc: "Understanding user preferences and pain points.",
        blurb:
          "I carried out two main forms of research before beginning the app. The first was a simple survey which I sent out to friends and family. Through this survey, which you can view here, I uncovered a lot of interesting information that helped me get a good idea of what people were looking for. Unfortunately, my data set was not too large, due to various limitations, so the vast majority of people surveyed were students or young professionals. Above is the overview of the data.",
      },
      solution: {
        image: journalApps,
        title: "the solution",
        desc: "Creating the anti social media app.",
        blurb:
          "To align with all of these features and preferences, I developed a solution: a journal app in the form of social media. I loved the aspects of an Instagram and Twitter account where I could just open up the app spontaneously and just post whatever was on my mind. I also loved how I could curate my own feed to look and feel how I wanted it to. People also loved how these apps could add photos, and some had voice memos and music integration. Finally, journaling apps had great ways of organizing and searching through their entries. Thoughts had developed from a rough idea to the implementation of favorite features of journaling apps within a simple, accessible app.",
      },
      design: {
        image: wireframes,
        title: "design",
        desc: "Combining the best of all worlds.",
        blurb:
          "Based on the information that I gathered from my research, I went in and started wireframing, beginning with rough sketches and low fidelity prototypes, getting feeedback, and then creating a high fidelity prototype that was ready to be developed. At each stage, I seeked and gained valuable feedback from potential users, which helped me streamline my work.",
        image2: figma,
        title2: "dev",
        desc2: "Turning it into something real.",
        blurb2:
          "Once I had a final design, I went to my friend and together we started working on the actual app. We chose React Native, and used the Expo Go platform to test our app. I took charge of the front end of the app, making sure that all user-facing features were both functional and visually appealing. Meanwhile, my friend worked on the back end of the app, ensuring that it was working at top efficiency, while maintaining data security. Both of these processes had unprecedented challenges, since neither of us had worked with React Native before, which extended our estimated time of completion. However, we were able to successfully create a working prototype by the end of our month working on it, which I am pretty proud of.",
      },
      test: {
        image: expo,
        title: "testing",
        desc: "Testing is currently in progress.",
        blurb:
          "Though we did testing at each iteration of wireframe development, we are now going through the process of testing our actual app. We’re currently in the process of getting the app from Expo Go onto TestFlight, where we can start giving out working demos to interested people. We also need Spotify’s approval to implement the song feature, so there are a few steps that we are actively taking to hopefully get us closer to launch. I’ll keep this page updated with our results from testing!",
      },
      product: {
        image: screens1,
        title: "final product",
        desc: "Walking through the app.",
        blurb:
          "The app itself is fairly simple. There are three main screens - the first being the home, where all your journal entries are organized chronologically, similar to a social media feed. The header image at the top of your feed is randomized after a certain amount of time, and you have a button to log an entry, or what we call a “Thought”, straight from the get go. Each Thought is like a post, where you can see your title and first line of your post, top image, your mood, and your song, if you added one. If you click into the Thought, you can read the rest of the post, and edit or delete.",
        image2: screens2,
        title2: "create screen",
        blurb2:
          "The create screen is also quite simple - it gets right to the point. You can enter any information in any of the fields. The mood picker and Spotify song selector was a key part of this design, as I wanted maximum personalization. By logging into your Spotify, we will suggest your most recently played songs, and then from there you can search a song that you would rather have. If you have Spotify open on your phone, you’re able to control it from Thoughts, and actually play the song if you’d like (this might only be available for Spotify Premium). We want to expand this to other music platforms too, but for now, since the majority of people I know use Spotify, we started with that. As an extra note, you just have to have one thing filled out for the thought to be logged. That way you can have the flexibility of using the journal for a variety of things. I wanted to implement the voice memos, but we ran into some technical issues, so hopefully that feature comes soon.",
        image3: screens3,
        title3: "profile screen",
        blurb3:
          "The profile screen is where you can view your “profile”, as well as your posts in a more organized fashion. The profile, though not visible to anyone else, allows you to really make the app yours. You can add a profile picture, bio, just like a social media account. If you want to look back at old posts, we provided a calendar for you to find them quickly, and it indicates which dates have Thoughts. We also added a search function, and light and dark mode. And that’s pretty much it! As of right now, the app is fully functional and super fun to use.",
      },
      reflection: {
        image: splash,
        title: "reflect",
        desc: "I absolutely loved making this app.",
        blurb:
          "It was super fun and interesting from the start to finish, and there were a ton of challenges and problems that I didn’t foresee, which pushed my skills as a designer and developer. I learned much more about how to use Figma effectively, React Native coding, and the design + engineering process from the start to finish. Being a personal project that I did with my best friend, it was really cool watching an idea turn into a real thing through our own hard work. With that being said, here were a few takeaways:",
        title2: "1",
        desc2: "Iterate, test, iterate, test, iterate!",
        blurb2:
          "The UX testing aspect of this project was certainly the most educational. Getting opinions from non users gave me much more clarity in the direction that I wanted to take this app, and helped in formulating its present form. Having been one of the first mobile apps that I have designed, it was certainly a challenge, but getting feedback certainly helped a ton. And though it is something that is so stressed in design classes, it did feel different experiencing it first hand.",
        title3: "2",
        desc3: "The hardest part is the last 10%.",
        blurb3:
          "As we closed in towards the end of development (or so we thought), we realized that the final details were the hardest to smooth over. As a team of two with limited resources, we found ourselves dedicating much more time than we expected to solving these final issues, and we ultimately ran out of time (we had to go back to school). Thus, if I were to do another personal project, I would reconsider the scope and time frame of it to make sure it is realistic and more achievable.",
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
