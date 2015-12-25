var rules = require('../rules.json');

module.exports = function(buffer) {
    var frenchifiedContent = buffer.toString();

    rules.forEach(function(rule) {
        frenchifiedContent = frenchifiedContent.replace(new RegExp(rule.from, 'gmi'), rule.to);
    });
    console.log(frenchifiedContent);
    return frenchifiedContent;  
};