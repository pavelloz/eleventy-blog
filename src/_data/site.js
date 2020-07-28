/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  annee: `${year}`,
  allowDarkMode: true,
  lang: "en", // for html tag
  title: "platformOS Eleventy Blog Demo",
  description: "platformOS Eleventy Blog Demo",
  url: "https://eleventy-demo.prod01.oregon.platform-os.com/", // don't end with a slash /
  brandName: "platformOS", // for copyright and legal page

  author: {
    name: "Pawel Kowalski", // for posts meta and Open Graph meta (FB and Twitter)
    email: "pawel@platformos.com", // used in legal page
    github: "https://github.com/pavelloz", // used in footer
    twitter: "https://twitter.com/pavelloz", // used in footer
  },

  meta_data: {
    theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
    default_social_image: "/assets/img/featured_image.png", // for Open Graph meta
    locale: "en_US", // for Open Graph meta
    twitter_username: "@platformOS", // for Twitter Open Graph meta
  },
};
