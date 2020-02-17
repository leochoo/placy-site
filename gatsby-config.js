module.exports = {
  siteMetadata: {
    title: "Placy | Find Your Rhythm",
    author: "Hideo Daikoku"
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-ffmpeg",
    "gatsby-plugin-ffmpeg"
  ]
}
