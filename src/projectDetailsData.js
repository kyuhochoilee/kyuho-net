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
import isteamhome from "./img/isteamscreenshot.png";
import isteamdesigncrit from "./img/isteamdesigncrit.png";
import isteamlogo from "./img/isteamlogo.png";
import isteamscreens2 from "./img/isteamscreens2.png";
import isteamsticker from "./img/isteamsticker.png";
import vincipics from "./img/vincipics.png";
import isteamscreens from "./img/isteamscreens.png";
import keynotes from "./img/keynotes cover 2.png";
import keynotes11 from "./img/keynotes1.1-min.png";
import keynotes12 from "./img/keynotes1.2-min.png";
import keynotes13 from "./img/keynotes1.3-min.png";
import keynotes21 from "./img/keynotes2.1-min.png";
import keynotes22 from "./img/keynotes2.2-min.png";
import keynotes23 from "./img/keynotes2.3-min.png";
import keynotes31 from "./img/keynotes3.1-min.png";
import keynotes32 from "./img/keynotes3.2-min.png";
import keynotes33 from "./img/keynotes3.3-min.png";
import keynotes41 from "./img/keynotes4.1-min.png";
import keynotes42 from "./img/keynotes4.2-min.png";
import keynotes43 from "./img/keynotes4.3-min.png";
import keynotes51 from "./img/keynotes5.1-min.png";
import keynotes52 from "./img/keynotes5.2-min.png";
import keynotes53 from "./img/keynotes5.3-min.png";
import keynotes61 from "./img/keynotes6.1-min.png";

const data = {
  thoughts: {
    project: {
      image: thoughts,
      title: "thoughts",
      categories: [
        { text: "DEV", color: "#D5F2D2" },
        { text: "UI/UX", color: "#D2F2F2" },
      ],
    },
    link: {
      url: "https://www.figma.com/file/jS6qHr2eytVyu89gS6ZeM5/Thoughts?type=design&node-id=1-60&mode=design",
      display: "VIEW FIGMA FILE",
    },
    about:
      "I’ve always been a huge fan of journaling. However, when I started college, my life started getting extra busy and cluttered, and I found journaling to be a great way to gather my thoughts and reset at the end of each day. I tried a bunch of different ways of journaling; physical journals, different apps, but found that none of them quite worked for me. So, when my internship ended this past summer, I brought an idea of a journaling app to a friend and together, we created Thoughts.",
    info: {
      role: ["Developer", "Designer"],
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
          "I carried out two main forms of research before beginning the app. The first was a simple survey which I sent out to friends and family. Through this survey, I uncovered a lot of interesting information that helped me get a good idea of what people were looking for. Unfortunately, my data set was not too large, due to various limitations, so the vast majority of people surveyed were students or young professionals. Above is the overview of the data. Next, I looked at current competitors in the market, and observed their UI, which I took inspiration from during the development of my wireframes.",
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

  isteam: {
    project: {
      image: isteamhome,
      title: "isteam academy",
      categories: [
        { text: "BRANDING", color: "#F2D2D2" },
        { text: "UI/UX", color: "#D2F2F2" },
        { text: null, color: null },
      ],
    },
    link: {
      url: "https://www.isteamacademy.org/",
      display: "VIEW WEBSITE",
    },
    about:
      "Back in October 2022, I joined Vinci Robotics Academy, a local organization that offered STEM classes for kids, as a web developer. After I created a new website for Vinci, I was asked to lead the branding and strategy for their non-profit project, iSTEAM Academy. iSTEAM Academy is a registered 501(c)(3) nonprofit organization that offers free robotics classes for students with special needs in the Boston area. Their mission resonated strongly with me, so I happily took on the project, and this is the result! This was certainly one of my most educational and fulfilling experiences, and I’m proud to say that my work has had a direct positive impact on the organization, as well as the communities that have supported me throughout my life.",
    info: {
      role: ["Designer", "Developer"],
      tools: ["Illustrator", "Photoshop", "Wix"],
      timeline: ["Summer '23"],
    },
    overview:
      "My role was to lead the branding and strategy of iSTEAM as they pivoted from being a section of Vinci Robotics to its own non-profit organization. I first conducted initial interviews of current parents and students, as well as design critiques of similar organizations, to get a better idea of what iSTEAM’s branding should communicate. I then translated these insights into designing iSTEAM’s logo, brand language, and website.",
    process: {
      research: {
        image: vincipics,
        title: "the research",
        desc: "Understanding the brand.",
        blurb:
          "Due to the scope of the project, as well as its community-oriented focus, I felt as though a qualitative approach to data collection would be better for iSTEAM. So, I started this project by talking to the board members of Vinci, as well as current staff and students that were running the first iteration of the non-profit. I asked them about their experiences with the program, as well as the motives behind their work. Throughout my conversations, I found that there was a common understanding and passion for inclusivity, collaboration, and learning across all of the people I interviewed. This, along with the classes that I was able to sit in on, showed to me that the main brand values that iSTEAM held were that it was a down-to-earth place for support, positivity, and growth.",
        image2: isteamdesigncrit,
        title2: "design critiques",
        blurb2:
          "To confirm these ideas, I wanted to interview parents of the children who were taking the classes, but unfortunately I was unable to get a hold of any of them, since there were not that many students at the time. This is definitely a big gap that I wish I was able to account for, but was unable to with the time and resources I was given. However, to compensate for this lack of research, I decided to go online and look for successful organizations that did similar work, to get a better understanding of the visuals and the language that I should be using with iSTEAM.",
      },
      design: {
        image: isteamlogo,
        title: "the brand",
        desc: "Turning my insights into something.",
        blurb:
          "I wanted to make something that was clear and simple. I didn’t want to overcomplicate or modernize the logo, since at its core, iSTEAM was simply a passionate group of students and professionals who wanted to give back to children with special needs in the local community.",
        image2: isteamsticker,

        title2: "behind the logo",
        blurb2:
          "I went with a gear in the shape of a lightbulb to represent the STEM aspect in it, while emphasizing the idea of creativity and positivity. The fonts I chose for the iSTEAM Academy text was more lighthearted, and aimed to show how the organization was oriented towards children.",
      },
      test: {
        image: isteamscreens,
        title: "the website",
        desc: null,
        blurb:
          "Having already created a website for Vinci before, I had some experience going into this one. However, this time, I was able to start this website from scratch. I based the structure of the site on my prior research of similar websites, but aimed to maintain the light-hearted, yet professional feeling of iSTEAM’s branding throughout the entire website. I was also responsible for writing up most of the content on the page, so I tried my best to create a brand voice that was consistent across pages.",
        title2: "final thoughts",
        image2: isteamscreens2,
        blurb2:
          "Overall, I’m really happy about how this project turned out. iSTEAM is now finishing up its first full year as a registered non-profit! Being able to use my design skills to actively support the my hometown community is incredibly fulfilling and fun. The link to the website is at the top of this page, so feel free to check it out!",
      },
    },
  },
  keynotes: {
    project: {
      image: keynotes,
      title: "keynotes",
      categories: [
        { text: "BRANDING", color: "#F2D2D2" },
        { text: "PRINT", color: "#D5F2D2" },
        { text: "UI/UX", color: "#D2F2F2" },
      ],
    },
    link: {
      url: "https://www.pennkeynotes.com/",
      display: "VIEW WEBSITE",
    },
    about:
      "After spending four years in a high school a cappella group, I knew I had to join one when I got to Penn. That’s where I found Keynotes: an all-gender, all-genre a cappella group, a group of singers, and above all, great friends! I fell in love with the organization, and Keynotes quickly became my home base. I’m super proud of the work that my fellow members and I have put into the group, and though I’m still in college, I know it’ll be one of the biggest things I miss after I graduate!",
    info: {
      role: ["President", "Designer"],
      tools: ["Photoshop", "InDesign", "Squarespace"],
      timeline: ["Fall 2021 - Present"],
    },
    overview:
      "Throughout my time at Keynotes, I’ve taken on a few roles. I’m currently the President, but before I was the Music Director, and before that, the Business Manager (or Events, as we call it). These roles really helped me grow as a leader. But how does this a cappella group relate to design? Surprisingly enough, Keynotes was actually the reason that I learned that design was what I wanted to do! In this article, I will walk through a few projects that I took on during my time in Keynotes that showcase my strengths as a designer and leader. If you want to see pretty much everything that I designed for Keynotes, look through the website I made. It’s linked above!",
    process: {
      problem: {
        image: keynotes11,
        title: "design & keynotes",
        desc: "How did an a cappella group spark my interest in design?",
        blurb:
          "When I first joined Keynotes as a freshman, I had pretty minimal experience in design. I had made a few posters and websites here and there in high school, and knew that I had liked it, but didn’t really think too much of it. However, as my first concert rolled around, an opportunity to try out design came to me, and I took it!",
        image2: keynotes12,
        desc2: null,
        title2: "my first show",
        blurb2:
          "For every show that we do, we have a themed photoshoot, which we then use as promo material. At the shows, we give out small show programs that introduce audience members to the group and the songs we’re going to be singing. The President at the time asked the group if anyone knew how to make a program, and I figured that I could probably make something work: I didn’t have too much work to do as a first-semester freshman and I had gone to a few shows already and seen some pretty programs. Plus, the old Keynotes programs were… not cute. So, I gave it a shot.",
        image3: keynotes13,
        desc3: null,
        title3: "the process",
        blurb3:
          "The process was pretty similar to any design process that I do now — I did a bit of research, looking at other programs “on the market” (as in other Penn groups’ programs), saw what features needed to be included, and then started making designs from there. I made a ton of drafts, and spent a lot of time, but I found that I was really enjoying it! After the final version was printed, bound, and distributed at our show, it was super cool to see all of the audience members enjoying the programs. From then on, I’ve designed not just the program, but also the theme for every single show - it’s become my semesterly project that I just love to take on.",
      },
      research: {
        image: keynotes21,
        title: "west coast love",
        desc: "West Coast Love — Spring 2022",
        blurb:
          "This was my first show as an official member of the Keynotes board. I was Events, so I had full reign over how the show was going to look and feel; I was responsible for organizing all show logistics, and this included the theme. I really wanted to switch things up from the last show, so I went for a more retro, colorful, funky vibe. I found a few pictures for inspiration, and got to work. I found a mural near Philly’s Chinatown where we could do our shoot, hired a photographer, sourced some clothes from friends (and Urban Outfitters), and we were ready!",
        image2: keynotes22,
        desc2: null,
        title2: "the shoot",
        blurb2:
          "I thought the shoot turned out really nice, and I had a lot of fun with the design of the graphics as well. These are some of my favorite flicks from the shoot! After the shoot, we had to figure out a specific name for the show. We decided on something like California Love, but I felt like that was a bit too specific. Then, as we were brainstorming, one of our group’s favorite songs played in the background — Emotional Oranges’ West Coast Love. And there it was! Keynotes A Cappella Presents — West Coast Love. It had a nice ring to it.",
        image3: keynotes23,
        desc3: null,
        title3: "the program",
        blurb3:
          "Having really enjoyed making the programs for the previous concert, I had to do it again. I went for something bolder, just like our photoshoot. I experimented more with fonts and formatting, and made a back cover this time! This program is definitely one of my favorites.",
      },
      solution: {
        image: keynotes31,
        title: "finesse",
        desc: "Finesse — Fall 2022",
        blurb:
          "Themes aside, Finesse was a really chaotic show to run. We were really struggling on the music front, and our President had gone abroad, meaning that a lot more responsibilities for internal logistics were shifted onto me. It was a great challenge for me and this show definitely pushed my leadership and management skills. The theme that I wanted to go for in this show was Dior. I wanted it to look expensive and fancy. From the inspiration pictures, I knew that we probably needed some sort of studio, so I booked some studio space in the Penn Venture Labs. After a quick clothing haul, we were ready to go.",
        image2: keynotes32,
        desc2: null,
        title2: "the shoot",
        blurb2:
          "These pictures came out really nicely. I thought that the amount of detail that each picture had needed its own space, so a lot of the design I tried to keep as simple as possible. This was also the first time I dabbled in Lightroom, as we didn’t have the money to pay the photographer to edit the photos. (Keynotes’ financial struggles are my excuse to DIY things.) I thought I did a pretty good job, and I also found out about black and white, which was great. We went with the show name Finesse because we were doing a Bruno Mars Medley, and I thought it encapsulated the vibe of the pictures.",
        image3: keynotes33,
        desc3: null,
        title3: "the program",
        blurb3:
          "However, with the aforementioned chaos surrounding the show, the program got pushed back… and back… until it was two days before the show. I wish I could have spent more time on this one, but I think for what it was, it turned out pretty good. I spent way too much time on the front pages and tried to do something new with the bios, which I think I could have made better with a bit more time. But all things considered, I was happy with it!",
      },
      design: {
        image: keynotes41,
        title: "solstice",
        desc: "Solstice — Fall 2023",
        blurb:
          "After I switched into the Music Director role, my roles changed from planning out the concerts to making sure that we knew all of our music for the concerts. This was a whole challenge within itself, but I really wanted to try it out, as I’ve been involved with vocal music for almost ten years now. However, I still wanted to be involved in making the theme, because design was starting to be my thing now. This time, we went for a streetwear vibe, and used a frat house as our venue.",
        image2: keynotes42,
        desc2: null,
        title2: "the shoot",
        blurb2:
          "For the design, I redesigned the Keynotes logo to emulate Stüssy. I wanted to make each photo look like something you would see in a magazine, and that really informed the layout design. I really liked how this turned out — one of our newbies is just as into the concert themes as I am, so it was great to work with her to make this happen. She took most of the photos, and they looked great. The future of Keynotes is in good hands! I also tried my hand at taking some, which I think turned out pretty well.",
        image3: keynotes43,
        desc3: null,
        title3: "the show",
        blurb3:
          "The unfortunate thing with this photoshoot was that it took a bit longer than expected, and the sun set on us. So, half of the photos are during the day, and half is during the night. But, when looking at all of the photos, the perfect show name came to me — solstice! This theme translated super well to the show as well. We found a way to split the songs between the first half and second half, where the first half was the “summer solstice” and the second half was the “winter solstice”. We even did an outfit change, which looked great.",
      },
      test: {
        image: keynotes51,
        title: "website",
        desc: "My idea to make a website stemmed from the Solstice show.",
        blurb:
          "For the show, I had a friend do videography for the first time, and had our sound guys record the input to each individual mics and send the audio files over. I spent a ton of my winter break putting together the audio mixes of each song that we sang at the show, and then editing them with the video to create much higher quality show videos. I suddenly had a ton of media that I thought would be really good to share, and represented the group well. For the past few years, we had only been using the group Instagram and Facebook pages to promote ourselves — we had a website, but it had pretty poor design and had fallen out of order. After I finished with the videos, I took it upon myself to make a whole new website from the ground up.",
        image2: keynotes52,
        desc2: null,
        title2: "the platform",
        blurb2:
          "Since I wanted the website to continue being maintained even after I graduate, I chose to make it on Squarespace, rather than coding it myself. It definitely had its learning curve and its limitations, but I got a hang of it after a little while.",
        image3: keynotes53,
        desc3: null,
        title3: "the content",
        blurb3:
          "You can view pretty much everything that I have done in terms of Keynotes’ design on this website’s Media page. It goes through each show, displays the program that I created, along with all of the promotional graphics and show photos! Feel free to browse through it — the link is at the top of this page!",
      },
      reflection: {
        image: keynotes61,
        title: "reflections",
        desc: "Overall, my work with Keynotes has been nothing short of rewarding.",
        blurb:
          "It’s an amazing community with fantastic people that I love spending time with. I think that’s definitely why I always make time to be super extra with these show themes and productions. At the end of the day, I’ve really enjoyed the time that I’ve invested in the group, and I hope it really shows. I’m now starting my role as the President, so I’ll keep this page updated with the newest shows!",
      },
    },
  },
};

export default data;
