/* eslint-disable import/no-extraneous-dependencies */
import styleDictionary from 'style-dictionary';

const executeStyleDictionary = (fileName) => {
  const StyleDictionary = styleDictionary.extend({
    source: [fileName],
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: 'src/styles/',
        files: [{
          destination: 'variables-brand2.scss',
          format: 'scss/variables'
        }]
      }
    }
  });

  StyleDictionary.buildAllPlatforms();
};
export default executeStyleDictionary;
