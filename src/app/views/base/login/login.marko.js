// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node$1.0.0/src/app/views/base/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/static/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/static/css/fontawsome.min.css\"><link rel=\"stylesheet\" href=\"/static/css/playlist.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"headerMain\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/static/img/logo-play.png\" alt=\"Playlist\"></h1></div><div class=\"headerMain-Navegation col-8\"><a href=\"/cadastrar\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Cadastrar<br></a><a href=\"/home\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Home</a></div></div></div></header><main class=\"contentMain\"><div class=\"container\"><h1>Login</h1><form action=\"/login\" method=\"post\"><div class=\"form-group\"><label for=\"email\">E-mail:</label><input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"password\">Password:</label><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"></div><input type=\"submit\" value=\"Log in\" class=\"btn btn-block btn-primary\"></form></div></main><footer class=\"footer\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-8\"><ul class=\"socialMedia\"><a href=\"http://conteudo.sharerh.com/womencancode\" target=\"_blank\"><img src=\"/static/img/wcc.png\" class=\"wcc\"> </a><a href=\"#\" class=\"share-facebook\" target=\"_blank\">/Playlist </a> <a href=\"#\" class=\"share-twitter\" target=\"_blank\">@playlist</a></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node$1.0.0/src/app/views/base/login/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
