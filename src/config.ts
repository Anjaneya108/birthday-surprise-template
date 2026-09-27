/* ==========================================
   Birthday Surprise Website Configuration

   Edit this file to customize the website
   for your loved one!
   ========================================== */

export const config = {
  /* Name Verification Gate */
  recipientName: "nikita", // required name to enter
  nameHint: 'aapka naam only😂 ', // hint on wrong name

  /* Section Headings */
  soloGalleryTitle: "✨ Birthday Girl (yahi photos hain 😭🫠) ✨", // solo gallery title
  messageTitle: "To our Birthday Girl :", // letter section title
  footerText: "Made with 'lal dil' for you", // footer text

  /* Button Labels */
  buttons: {
    hero: "Ready for a little surprise?", // hero/landing button
    soloGallery: "Want to see more?", // solo gallery button
  },

  /* Together Gallery (Optional) */
  togetherGallery: {
    enabled: false, // toggle together gallery
    title: "💕 Our Memories 💕", // together gallery title
    buttonText: "One last thing...", // together gallery button
  },

  /* Birthday Message: Each string is a paragraph */
  message: [
  "Happiest Birthday, Dear Nikita!!! 💐🎂🥳❤️",
  " ",
  "Welcome to the 20s club, madam! 🥂😂",
  "Ab aap officially badi ho gayi ho 😭😂",
  " ",
  "I hope tera aaj ka din, aur aane wala har saal, is filled with joy, laughter, and all the little things and moments that make you smile ✨ ✨",
  " ",
  "Honestly, aage jo life aane wali hai na, wo bilkul teri tarah hi khoobsoorat hone wali hai",
  " ",
  "People say ki age ke saath insaan mature aur bada hota hai, but I think you’ll age like fine wine 🍷 (bas peena mat! 🥀🥀😂 😂 )",
  " ",
  "Ik you are incredibly strong and aage life mein jo bhi challenges aayenge; tu unhe easily face kar legi;",
  "baki tere har problem, ups and downs mein main hamesha tere saath hoon hi; chahe koi low phase ho, anxiety ho, ya bass mann kharab ho; I’ll always be there.",
  "Rona-dhona ho toh bhi bula lena, main bhi thoda bahut contribution de dunga! 😂 🫠🥹",
  " ",
  "But seriously, tera time aane wala hai💫🌟",
  "Tu bahut shine karne wali hai, bahut kuch achieve karne wali hai, aur khub machane wali hai 😌🔥",
  "Bas tu apni capabilities par pura trust rakh!💪💪",
  " ",
  "And idk tu maanti hai ya nahi, but jab tu actually khul ke hasti hai, bina kisi tension ke bilkul genuinely tab tu sach mein sabse zyada pyaari aur mesmerizing lagti hai🤩 ✨🌻🌷",
  "So abse aise moments zyada se zyada hone chahiye, okay? 😼",
  " ",
  "Have the most amazing birthday today 🥳🎂",
  "You genuinely deserve all the happiness, love, success and beautiful moments coming your way!! 💃💃",
  " ",
  "~ With laal dil, Your mitra (jo hamesha aapke replies ka wait kar raha hota hai 🫠🫠)",
  " ",
  "(P.S. : End mein ek chhoti si request thi..😂😭",
  "Madam umar badhne ke saath apne bhaav aur mat badha lena please👺😂 Iss saal mujhe thoda kam ignore kar dena😒😒",
  "Kehte hain 20s mein time bahut jaldi nikalta hai, toh apna precious time mujhe ignore karne mein waste mat karna ab 🫠🫠🥀",
  "i miss you alot but baat toh kar liya kar, achha nhi lagta mujhe 😭🤧🤧🥹🥹)",
],

  /* Theme Colors - Change these to customize the entire website theme! */
  colors: {
    primary: "#ec4899", // main color (buttons, accents)
    light: "#fdf2f8", // lightest shade (backgrounds)
    medium: "#f9a8d4", // medium shade (decorations)
    dark: "#db2777", // darkest shade (hover states)
  },

  /* Typing Animation Text (shown on the start screen) */
  typingText: {
    first: "Wait a second!",
    second: "Kisi ka toh Birthday hai aaj!!",
  },
};

export type Config = typeof config;
