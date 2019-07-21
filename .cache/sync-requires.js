const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-template-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/templates/page-template.jsx"))),
  "component---src-templates-post-template-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/templates/post-template.jsx"))),
  "component---src-templates-tag-template-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/templates/tag-template.jsx"))),
  "component---src-templates-category-template-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/templates/category-template.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Siunami/Desktop/site/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/pages/404.jsx"))),
  "component---src-pages-categories-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/pages/categories.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/pages/index.jsx"))),
  "component---src-pages-tags-jsx": hot(preferDefault(require("/Users/Siunami/Desktop/site/src/pages/tags.jsx")))
}

