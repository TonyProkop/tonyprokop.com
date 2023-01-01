export default {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: "Tony Prokop | Web Designer and Developer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I'm a freelance web designer and developer, located in Omaha, NE.",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-HC3J3BJXXM",
        async: true,
      },
      {
        src: "js/ga.js",
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/image"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/svg", "@nuxtjs/sitemap"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    splitChunks: {
      layouts: true,
    },
  },

  sitemap: {
    hostname: "https://tonyprokop.com",
    exclude: ["/privacy-policy", "/review", "/terms-and-conditions"],
  },
}
