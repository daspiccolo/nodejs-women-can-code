// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node$1.0.0/src/app/views/musicas/reg/reg.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/static/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/static/css/fontawsome.min.css\"><link rel=\"stylesheet\" href=\"/static/css/playlist.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"headerMain\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/static/img/logo-play.png\" alt=\"Playlist\"></h1></div><div class=\"headerMain-Navegation col-8\"><a href=\"/musicas\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Voltar</a></div></div></div></header><main class=\"contentMain\"><div class=\"container\"><h1>Cadastro de Músicas</h1>");

  if (data.errorsValidation) {
    out.w("<div>");

    var for__20 = 0;

    marko_forEach(data.errorsValidation, function(error) {
      var keyscope__21 = "[" + ((for__20++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(error.param) +
        " - " +
        marko_escapeXml(error.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=\"/musicas\" method=\"post\">");

  if (data.musica.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.musica.id) +
      "\"></div>");
  }

  out.w("<div class=\"form-group\"><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.musica.nome) +
    "\" placeholder=\"Coloque o nome\" class=\"form-control\"></div> <div><label for=\"compositor\">Compositor:</label><input type=\"text\" id=\"compositor\" name=\"compositor\" value=\"" +
    marko_escapeXmlAttr(data.musica.compositor) +
    "\" placeholder=\"Coloque o nome do compositor:\" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"album\">Álbum:</label><textarea cols=\"20\" rows=\"10\" id=\"album\" name=\"album\" placeholder=\"Álbum\" class=\"form-control\">" +
    marko_escapeXml(data.musica.album) +
    "</textarea></div> <input type=\"submit\" value=\"Salvar\" class=\"btn btn-success\"></form></div></main><footer class=\"footer\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-8\"><ul class=\"socialMedia\"><a href=\"http://conteudo.sharerh.com/womencancode\" target=\"_blank\"><img src=\"/static/img/wcc.png\" class=\"wcc\"> </a><a href=\"#\" class=\"share-facebook\" target=\"_blank\">/Playlist </a> <a href=\"#\" class=\"share-twitter\" target=\"_blank\">@playlist</a></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "46");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node$1.0.0/src/app/views/musicas/reg/reg.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
