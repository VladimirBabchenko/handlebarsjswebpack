var Handlebars = require("handlebars/dist/handlebars.min.js");
require("./scss/main.scss");
// require("./scss/main.scss");
// require("./css/grid.css");

var context = require("./stubs/context");
var partials = require("./hbs/partials");
var helpers = require("./hbs/helpers");
var template = require("./template.hbs");

Handlebars.registerPartial(partials);
Handlebars.registerHelper(helpers);

var compile = Handlebars.compile(template);
var compileTemplate = compile(context);
wrapper.innerHTML = compileTemplate;