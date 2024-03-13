import zine from "./img/zinecover.png";
import zinedoc from "./img/zinedoc.png";
import dada from "./img/dada copy.png";
import scene from "./img/ourscenecover.png";
import posterdoc from "./img/posterdoc.png";
import postercover from "./img/postercover.png";

const data = {
  zine: {
    project: {
      image: zine,
      title: "danielle ~ a zine",
      categories: [
        { text: "PRINT", color: "#D5F2D2" },
        { text: "GRAPHIC", color: "#D2F2F2" },
      ],
    },
    link: {
      url: "https://www.youtube.com/watch?v=qJ1GBL1TPLg",
      display: "DANIELLE (SMILE ON MY FACE) — FRED AGAIN..",
    },
    info: {
      role: ["Handbound Phaser Print"],
      tools: ["InDesign", "Photoshop"],
      timeline: ["February '23"],
    },
    overview:
      "“danielle” is a zine developed for my printmaking and publication design class called Pixel to Print. The assignment asked us to create a zine based off of anything that we are a fanatic of — a “fanzine”. At the time, a song that I had on loop was the song “Danielle (smile on my face)” by Fred Again. I was already an established fan of 070 Shake, both of her music and visual aesthetics in her work. I aimed to embody the chaotic and emotionally impactful nature of the lyrics and music that she created.",
    process: {
      problem: {
        image: zinedoc,
        title: "the zine",
        blurb:
          "To create this publication, I initially made the graphics on Photoshop, with a lot of layering and blending. From there, I used InDesign to lay out the designs, and then printed out 25 copies of the zine on french paper using a phaser printer. I then hand folded and bound each zine.",
      },
    },
  },

  poster: {
    project: {
      image: postercover,
      title: "lost ~ dust ~ hollow",
      categories: [
        { text: "PRINT", color: "#D5F2D2" },
        { text: "GRAPHIC", color: "#D2F2F2" },
      ],
    },
    link: {
      url: "https://drive.google.com/file/d/1lbjepHGUhmZnTilN7h6nDr0ODRN0JjAT/view?usp=sharing",
      display: "VIEW THE WORK",
    },
    info: {
      role: ["Risograph Print"],
      tools: ["Photoshop", "Risograph"],
      timeline: ["March '23"],
    },
    overview:
      "“lost ~ dust ~ hollow” is another work that I created for my printmaking class, Pixel to Print. The piece represents the inherent loss and lack of direction that many people face as they take their next step out of education and into the workforce. It aims to portray the journey of finding a purpose in a world in which you feel replaceable and insignificant.",
    process: {
      problem: {
        image: posterdoc,
        title: "the prints",
        blurb:
          "This work was initially designed on Photoshop. I then printed on natural french paper using a risograph with CMYK color separation.",
      },
    },
  },
  scene: {
    project: {
      image: scene,
      title: "our scene",
      categories: [
        { text: "MOTION", color: "#FFCCCC" },
        { text: "VIDEO", color: "#D2F2F2" },
        { text: "MUSIC", color: "#D5F2D2" },
      ],
    },
    link: {
      url: "https://www.youtube.com/watch?v=B_Mb7zgZsHg",
      display: "VIEW THE FULL WORK",
    },
    info: {
      role: ["Audiovisual"],
      tools: ["Premiere", "TouchDesigner", "FL Studio"],
      timeline: ["December '22"],
    },
    overview:
      "This piece, developed as a creative exploration for Design 21, an interdisciplinary seminar about the role of design in the 21st century, is a representation of the design process. It surveys the concept of “Nothing About Us, Without Us”, one that really resonated with me with its relevance to today. The song encompasses the questions that need to be asked within the design process, and the beauty of “perfect” design. Furthermore, the visual aspects - including how the visuals shift into the shape of a screen as the song transitions into euphoria show the shift from being within the design process to becoming the audience (the user). I composed, recorded, mixed and mastered the song that you hear, and then used TouchDesigner to create audio-reactive visuals. I then transformed this into a full video through Premiere Pro.",
  },
  dada: {
    project: {
      image: dada,
      title: "welcome back ~ dada",
      categories: [
        { text: "MOTION", color: "#FFCCCC" },
        { text: "GRAPHIC", color: "#D2F2F2" },
      ],
    },
    link: {
      url: "https://www.youtube.com/watch?v=3BpbSHN-ZhA",
      display: "VIEW THE FULL WORK",
    },
    info: {
      role: ["Animation"],
      tools: ["Photoshop"],
      timeline: ["February '22"],
    },
    overview:
      "Created for my first ever design class, this piece was an exploration into using Photoshop to select and combine found images and create works in response to the techniques, philosophies, and lineages of the 20th Century artistic movements Dada and Surrealism. I aimed to incorporate important images from my own life, and added an audio element to encompass the feeling. Please feel free to watch the work at the link above!",
  },
};

export default data;
