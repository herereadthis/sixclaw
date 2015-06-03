var loaderUtils = require("loader-utils");

module.exports = function(content) {
    if (!this.emitFile) throw new Error("emitFile is required from module system");

    var url, query, root;

    url = this.resourcePath;
    query = loaderUtils.parseQuery(this.resourceQuery)
    root = this.options.context;

    url = url.substr(url.indexOf(root) + root.length);

    if (JSON.stringify(this.query) !== '"?"') {
        this.emitFile(query.output, content);
    }
    return '';
};
module.exports.raw = true;
