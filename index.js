var fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    config = require('./config'),
    showdown = require('showdown'),
    markdownConverter = new showdown.Converter(),
    frenchify = require('./src/frenchify');

function fileHandler(file) {
    return function(err, data) {
        if (err) {
            throw err;
        }
        var outputFile = config.targetFolder + '/' + path.basename(file).replace('.md', '.html'),
            htmlContent = markdownConverter.makeHtml(frenchify(data.toString()));

        fs.writeFile(outputFile, htmlContent, function(err) {
            if(err) {
                return console.log(err);
            }
        });
    };
}

// TODO handle multiple files, usual glob patterns etc.
var fileParam = process.argv.slice(2)[0];

if (!fs.existsSync(config.targetFolder)) {
    mkdirp(config.targetFolder);
}

if(fs.existsSync(fileParam)) {
    console.log(fileParam);
    fs.readFile(fileParam, fileHandler(fileParam));
}
else {
    console.log('wrong file input');
}