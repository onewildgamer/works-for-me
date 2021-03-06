let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let bodyRenderer = require('../lib/renderers/body')
const htmlBeautify = require('../lib/html-beautify')

const input = require('./stubs/render/body--input')
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/body--output.html'), 'utf8'))

const { BODY_RENDERER_KEY } = require('../lib/constants')

describe('setup body renderer', () => {
  const renderersMap = {
    [BODY_RENDERER_KEY]: bodyRenderer
  }

  it('renders body wrapper', () => {
    let html = render(input, renderersMap)

    assert.equal(html, output)
  })
})
