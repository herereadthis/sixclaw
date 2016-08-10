var loaderUtils = require("loader-utils");

function getOutput(q){
    return loaderUtils.parseQuery(q).output;
}

module.exports = function(content) {
    if (!this.emitFile) throw new Error("emitFile is required from module system");
    var output = getOutput(this.resourceQuery) || getOutput(this.query);
    if (output) {
        this.emitFile(query.output, content);
    }
    return '';
};
module.exports.raw = true;
