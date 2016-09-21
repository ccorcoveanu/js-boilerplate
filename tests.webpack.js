var testsContext = require.context('./src/js', true, /\.specs\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./src/js', true, /^((?!tests).)*.js$/);
srcContext.keys().forEach(srcContext);