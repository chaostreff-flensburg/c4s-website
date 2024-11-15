import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import multilanguage from "lume/plugins/multilanguage.ts";

const site = lume({
  src: "./content",
});

// We store files > 100 MB here so that we can keep the repository on GitHub.
const bigFileServer = "https://files.blinry.org/cfs";

site
  .use(
    multilanguage({
      languages: ["en", "de"],
      defaultLanguage: "en",
    }),
  )
  .use(jsx_preact())
  .use(mdx())
  .use(pagefind())
  .use(sass())
  // .use(tailwindcss())
  .use(postcss())
  // .use(minify_html())
  .copy("media")
  .copy("assets", ".")
  .copy("main.js")
  .copy([".jpg", ".png", ".pdf", ".svg", ".mp3", ".zip", ".mp4"])
  .remoteFile(
    "cubetopia/Cubetopia_1.03_Mac.zip",
    `${bigFileServer}/Cubetopia_1.03_Mac.zip`,
  )
  .remoteFile(
    "cubetopia/Cubetopia_1.03_Linux.zip",
    `${bigFileServer}/Cubetopia_1.03_Linux.zip`,
  )
  .remoteFile(
    "cubetopia/Cubetopia_1.03_Win.zip",
    `${bigFileServer}/Cubetopia_1.03_Win.zip`,
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
    "sylvoculture/TheGreatRewilding_1080_5oct2024.mp4",
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
    "prompt-engineering/241006_Fiction_Part1.mp4",
    `${bigFileServer}/241006_Fiction_Part1.mp4`,
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
  )
  .remoteFile(
    "./code.css",
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github.min.css",
  )
  .remoteFile(
    "./bootstrap.css",
    "https://esm.sh/bootstrap@5.2.3/dist/css/bootstrap.min.css",
  )
  .remoteFile(
    "./darktheme.css",
    "https://esm.sh/bootstrap-darkmode@5.0.1/css/darktheme.css",
  );

export default site;
