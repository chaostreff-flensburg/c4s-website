import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import footnotes from "lume_markdown_plugins/footnotes.ts";

const site = lume({
  src: "./content",
})
.use(footnotes());

// We store files > 100 MB here so that we can keep the repository on GitHub.
const bigFileServer = "https://files.blinry.org/cfs";

site
  .use(
    multilanguage({
      languages: ["original", "en", "de"],
      defaultLanguage: "original",
    }),
  )
  .use(sass())
  .use(
    googleFonts({
      fonts: {
        display: "https://fonts.google.com/share?selection.family=Patua+One",
        text: "https://fonts.google.com/share?selection.family=Montserrat:ital,wght@0,400..900;1,400..900",
      },
    }),
  )
  //.copy("media")
  //.copy("assets", ".")
  //.copy("main.js")
  .copy([
    ".jpg",
    ".png",
    ".webp",
    ".pdf",
    ".epub",
    ".svg",
    ".mp3",
    ".zip",
    ".apk",
    ".mp4",
    ".vtt",
  ])
  .remoteFile(
    "cubetopia/Cubetopia_1.05_Mac.zip",
    `${bigFileServer}/Cubetopia_1.05_Mac.zip`,
  )
  .remoteFile(
    "cubetopia/Cubetopia_1.05_Linux.zip",
    `${bigFileServer}/Cubetopia_1.05_Linux.zip`,
  )
  .remoteFile(
    "cubetopia/Cubetopia_1.05_Win.zip",
    `${bigFileServer}/Cubetopia_1.05_Win.zip`,
  )
  .remoteFile(
    "cubetopia/Cubetopia_1.05_Android.apk",
    `${bigFileServer}/Cubetopia_1.05_Android.apk`,
  )
  .remoteFile(
    "cubetopia/Cubetopia_1.04t_Web.zip",
    `${bigFileServer}/Cubetopia_1.04t_Web.zip`,
  )
  .remoteFile(
    "rupture-remedy/Lee, Rupture, Remedy.mp4",
    `${bigFileServer}/Lee%2C%20Rupture%2C%20Remedy.mp4`,
  )
  .remoteFile(
    "utopia-still/UtopiaStill-Source.zip",
    `${bigFileServer}/UtopiaStill-Source.zip`,
  )
  .remoteFile(
    "the-great-rewilding/TheGreatRewilding_1080_5oct2024.mp4",
    `${bigFileServer}/TheGreatRewilding_1080_5oct2024.mp4`,
  )
  .remoteFile(
    "utopia-still/UtopiaStill-06-Video-Flythrough-01.mp4",
    `${bigFileServer}/UtopiaStill-06-Video-Flythrough-01.mp4`,
  )
  .remoteFile(
    "utopia-still/UtopiaStill-0.2-241004-01-MacOS.zip",
    `${bigFileServer}/UtopiaStill-0.2-241004-01-MacOS.zip`,
  )
  .remoteFile(
    "prompt-engineering/241127_PROMPT_ENGINEERING_ENGLISH_SUB_FINAL.mp4",
    `${bigFileServer}/241127_PROMPT_ENGINEERING_ENGLISH_SUB_FINAL.mp4`,
  )
  .remoteFile(
    "utopia-still/UtopiaStill-0.2-241004-01-Win.zip",
    `${bigFileServer}/UtopiaStill-0.2-241004-01-Win.zip`,
  )
  .remoteFile(
    "utopia-still/UtopiaStill-0.2-241004-01-Linux.x86_64.zip",
    `${bigFileServer}/UtopiaStill-0.2-241004-01-Linux.x86_64.zip`,
  )
  .remoteFile(
    "unwahrscheinliche-reise/Hörspiel_Die unwahrscheinliche Reise.mp3",
    `${bigFileServer}/H%C3%B6rspiel_Die%20unwahrscheinliche%20Reise.mp3`,
  );

export default site;
