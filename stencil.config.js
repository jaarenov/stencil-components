const sass = require('@stencil/sass');
const postcss = require('@stencil/postcss');

exports.config = {
  namespace: 'mycomponent',
  globalStyle: 'src/components/global/_reset.scss',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ], 

  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
