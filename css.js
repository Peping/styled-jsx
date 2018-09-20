function notTranspiledError(name) {
  throw new Error(
    "styled-jsx/css: if you are getting this error it means that your `" +
    name +
    "` tagged template literals were not transpiled."
  )
}

function css() {
  notTranspiledError("css")
}

css.global = function() {
  notTranspiledError("global")
}
css.resolve = function() {
  notTranspiledError("resolve")
}
css.jsx = function() {
  notTranspiledError("jsx")
}

module.exports = css
module.exports.global = css.global
module.exports.resolve = css.resolve
module.exports.jsx = css.jsx
