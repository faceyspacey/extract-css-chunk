module.exports = function(compilationHash, publicPath, outputFilename) {
  if (document) {
    var origin = document.location.protocol + '//' + document.location.hostname + (document.location.port ? ':' + document.location.port: '');
    var styleSheets = document.getElementsByTagName('link');
    for (var i = 0; i < styleSheets.length; i++) {
      if (styleSheets[i].href) {
		// ideally we wouldn't hard-code the requirement that css file names are
		// '[name].[contenthash].css' like we now do, but during development, if
		// they keep the same file name, the file doesn't update for some reason:
		var hrefUrl = styleSheets[i].href.replace(/\.css$/, '').split('.')
        // var hrefUrl = styleSheets[i].href.split('?');
        var href = hrefUrl[0];
        var hash = hrefUrl[1];
        // if (hash !== compilationHash && href === origin + publicPath + outputFilename) {
        if (outputHref.indexOf(href) === 0) {
          // var url = href + '?' + compilationHash;
          // styleSheets[i].href = url;
          var url = href + '.' + compilationHash + '.css';
          styleSheets[i].href = url;
          console.log('[HMR]', 'Reload css: ', url);
          break;
        }
      }
    }
  }
}
