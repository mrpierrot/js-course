var chokidar = require('chokidar');
var asciidoctor = require('asciidoctor.js')();
var path = require('path');
var fs = require('fs');
require('asciidoctor-reveal.js');

// Convert the document 'presentation.adoc' using the reveal.js converter
var attributes = {'revealjsdir': '../../reveal.js@'};
var slidesOptions = {safe: 'safe', backend: 'revealjs', attributes: attributes};
var pageOptions = {safe: 'safe',doctype:'article', backend: 'html5'};

chokidar.watch('courses/**/*.adoc', {ignored: /(^|[\/\\])\../}).on('all', (event, npath) => {
    switch(event){
        case 'add':
        case 'change':
            asciidoctor.convertFile(npath, slidesOptions);
            var nFileName = path.basename(npath, path.extname(npath)) + '.page.html';
            var output = path.join(path.dirname(npath), nFileName);

            asciidoctor.convertFile(npath, Object.assign({to_file:output},pageOptions));
            console.log(`${npath} converted`);
    }
});

chokidar.watch('exercices/**/*.adoc', {ignored: /(^|[\/\\])\../}).on('all', (event, npath) => {
    switch(event){
        case 'add':
        case 'change':
            asciidoctor.convertFile(npath,pageOptions);
            console.log(`${npath} converted`);
    }
});