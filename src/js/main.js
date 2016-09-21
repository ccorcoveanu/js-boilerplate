require('../styles/main.scss')
import test from './modules/test/test'
let interval = setInterval(test, 1000)

// Treat module reloading
if ( module.hot ) {
  module.hot.accept()
  module.hot.dispose(function() {
    // revoke the side effect
    clearInterval(interval);
  })
}