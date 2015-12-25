var rules = require('../rules.json');

module.exports = function(frenchifiedContent) {

    rules.forEach(function(rule) {
        frenchifiedContent = frenchifiedContent.replace(new RegExp(rule.from, 'gmi'), rule.to);
    });
    console.log(frenchifiedContent);
    return frenchifiedContent;  
};