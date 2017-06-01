let render = require('./../lib/render');

let playgroundBodyRenderer = require('./../lib/renderers/playgrount-setup-body');
let bioRenderer = require('./../lib/renderers/bio');
let bioLineRenderer = require('./../lib/renderers/bio-line');
let setupRenderer = require('./../lib/renderers/setup');
let environmentRenderer = require('./../lib/renderers/environment');
let descriptionRenderer = require('./../lib/renderers/description');
let environmentHeaderRenderer = require('./../lib/renderers/environment-header');
let environmentTitleRenderer = require('./../lib/renderers/environment-title');
let toolsListRenderer = require('./../lib/renderers/tools-list');
let toolItemRenderer = require('./../lib/renderers/tool-item');
let toolHeadRenderer = require('./../lib/renderers/tool-head');
let toolNamesListRenderer = require('./../lib/renderers/tool-names-list');
let toolNameRenderer = require('./../lib/renderers/tool-name');
let toolTitleRenderer = require('./../lib/renderers/tool-title');
let toolLinkRenderer = require('./../lib/renderers/tool-link');

const {
  BODY_RENDERER_KEY,
  BIO_RENDERER_KEY,
  BIO_LINE_RENDERER_KEY,
  SETUP_RENDERER_KEY,
  ENVIRONMENT_RENDERER_KEY,
  DESCRIPTION_RENDERER_KEY,
  ENVIRONMENT_HEADER_RENDERER_KEY,
  ENVIRONMENT_TITLE_RENDERER_KEY,
  TOOLS_LIST_RENDERER_KEY,
  TOOL_ITEM_RENDERER_KEY,
  TOOL_HEAD_RENDERER_KEY,
  TOOL_NAMES_LIST_RENDERER_KEY,
  TOOL_NAME_RENDERER_KEY,
  TOOL_TITLE_RENDERER_KEY,
  TOOL_LINK_RENDERER_KEY
} = require('./../lib/constants');

const renderersMap = {
  [BODY_RENDERER_KEY]: playgroundBodyRenderer,
  [BIO_RENDERER_KEY]: bioRenderer,
  [BIO_LINE_RENDERER_KEY]: bioLineRenderer,
  [SETUP_RENDERER_KEY]: setupRenderer,
  [ENVIRONMENT_RENDERER_KEY]: environmentRenderer,
  [DESCRIPTION_RENDERER_KEY]: descriptionRenderer,
  [ENVIRONMENT_HEADER_RENDERER_KEY]: environmentHeaderRenderer,
  [ENVIRONMENT_TITLE_RENDERER_KEY]: environmentTitleRenderer,
  [TOOLS_LIST_RENDERER_KEY]: toolsListRenderer,
  [TOOL_ITEM_RENDERER_KEY]: toolItemRenderer,
  [TOOL_HEAD_RENDERER_KEY]: toolHeadRenderer,
  [TOOL_NAMES_LIST_RENDERER_KEY]: toolNamesListRenderer,
  [TOOL_NAME_RENDERER_KEY]: toolNameRenderer,
  [TOOL_TITLE_RENDERER_KEY]: toolTitleRenderer,
  [TOOL_LINK_RENDERER_KEY]: toolLinkRenderer
};

module.exports = function (tree = {}) {
  return render(tree, renderersMap);
};
