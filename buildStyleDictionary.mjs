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
      },
      android: {
        "transforms": [
          "attribute/cti",
          "name/cti/snake",
          "color/hex8android",
          "size/sp",
          "size/dp",
          "custom/category/lowercase"
        ],
        transformGroup: 'android',
        buildPath: 'android_tokens/src/styles/android/',
        files: [{
          destination: 'font_dimens.xml',
          format: "android/fontDimens"
        },{
          destination: "colors.xml",
          format: "android/colors"
        }]
      },
      compose: {
        "transforms": [
          "attribute/cti",
          "name/cti/snake",
          "color/hex8android",
          "size/sp",
          "size/dp",
          "custom/category/lowercase"
        ],
        transformGroup: 'compose',
        buildPath: "android_compose_tokens/src/styles/compose/",
        files: [{
          destination: "StyleDictionaryColor.kt",
          format: "compose/object",
          className: "StyleDictionaryColor",
          packageName: "StyleDictionaryColor",
          filter: {
            attributes: {
              category: "color"
            }
          }
        },{
          destination: "StyleDictionarySize.kt",
          format: "compose/object",
          className: "StyleDictionarySize",
          packageName: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size"
            }
          }
        }]
      }
    }
  });

  StyleDictionary.buildAllPlatforms();
};
export default executeStyleDictionary;
