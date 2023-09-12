const { marked } = require('marked')
function markdownToHtml(markdown) {
  return marked(markdown)
}

module.exports = {
  markdownToHtml
}