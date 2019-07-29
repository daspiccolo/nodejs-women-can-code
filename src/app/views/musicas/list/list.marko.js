// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node$1.0.0/src/app/views/musicas/list/list.marko",
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

  out.w("<html><head><meta charsert=\"utf-8\"><link rel=\"stylesheet\" href=\"/static/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/static/css/fontawsome.min.css\"><link rel=\"stylesheet\" href=\"/static/css/playlist.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"headerMain\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/static/img/logo-play.png\" alt=\"Playlist\"></h1></div><div class=\"headerMain-Navegation col-8\"><a href=\"/login\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a><br><a href=\"/cadastrar\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Cadastrar</a></div></div></div></header><main class=\"contentMain\"><div class=\"container\"><h1>Listagem de músicas</h1><table id=\"musicas\" class=\"table table-bordered table-hover\"><thead><tr><th scope=\"col\">ID</th><th scope=\"col\">Nome</th><th scope=\"col\">Compositor</th><th scope=\"col\">Album</th><th scope=\"col\">Editar</th><th scope=\"col\">Remover</th></tr></thead><body>");

  component_globals_tag({}, out);

  var for__32 = 0;

  marko_forEach(data.musicas, function(musica) {
    var keyscope__33 = "[" + ((for__32++) + "]");

    out.w("<tr id=\"musica_" +
      marko_escapeXmlAttr(musica.id) +
      " \"><td>" +
      marko_escapeXml(musica.id) +
      "</td><td>" +
      marko_escapeXml(musica.nome) +
      "</td><td>" +
      marko_escapeXml(musica.compositor) +
      "</td><td>" +
      marko_escapeXml(musica.album) +
      "</td><td><a href=\"/musicas/reg/" +
      marko_escapeXmlAttr(musica.id) +
      "\">Editar</a></td><td><a href=\"/musicas\" data-ref=\"" +
      marko_escapeXmlAttr(musica.id) +
      "\" data-type=\"remove\">Remover</a></td></tr>");
  });

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  out.w("</body></table> <p align=\"right\"><a href=\"/musicas/reg\">Adicionar Música</a></p></div></main><footer class=\"footer\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-8\"><ul class=\"socialMedia\"><a href=\"http://conteudo.sharerh.com/womencancode\" target=\"_blank\"><img src=\"/static/img/wcc.png\" class=\"wcc\"> </a><a href=\"#\" class=\"share-facebook\" target=\"_blank\">/Playlist </a> <a href=\"#\" class=\"share-twitter\" target=\"_blank\">@playlist</a></ul></div></div></div></footer><script src=\"/static/js/remove-musica.js\">\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "56");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node$1.0.0/src/app/views/musicas/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
