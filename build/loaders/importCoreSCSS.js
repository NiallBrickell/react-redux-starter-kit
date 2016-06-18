module.exports = function(source) {
	this.cacheable();
	return `@import 'sassGlobals';
    ${source}`;
}