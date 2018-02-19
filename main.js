var chokidar = require('chokidar');
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js');

// Convert the document 'presentation.adoc' using the reveal.js converter
var attributes = {'revealjsdir': '../../reveal.js@'};
var slidesOptions = {safe: 'safe', backend: 'revealjs', attributes: attributes};

chokidar.watch('courses/**/*.adoc', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    switch(event){
        case 'add':
        case 'change':
            asciidoctor.convertFile(path, slidesOptions);
            console.log(`${path} converted`);
    }
});

var pageOptions = {safe: 'safe',doctype:'article', backend: 'html5'};

chokidar.watch('exercices/**/*.adoc', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    switch(event){
        case 'add':
        case 'change':
            asciidoctor.convertFile(path,pageOptions);
            console.log(`${path} converted`);
    }
});