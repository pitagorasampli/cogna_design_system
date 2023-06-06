/* eslint-disable import/no-extraneous-dependencies */
import styleDictionary from 'style-dictionary';

import Color from 'tinycolor2';

const executeStyleDictionary = (fileName) => {
 
  const StyleDictionary = styleDictionary.registerTransform({
    name: 'name/composeColorName',
    type: 'value',
    matcher: function(prop) {
       return prop.attributes.category === 'sofia';
    },
    transformer: function(prop) {
      const hex8 = Color(prop.value).toHex8();
      return `Color(0x${hex8})`;
    }
  }).extend({
    source: [fileName],
    platforms: {
      android: {
        "transforms": [
          "attribute/cti",
          "name/cti/snake",
          "color/hex8android",
          "size/sp",
          "size/dp"
        ],
        transformGroup: 'android',
        buildPath: 'android_tokens/src/styles/android/',
        files: [{
          destination: 'font_dimens.xml',
          format: "android/fontDimens"
        }, {
          destination: "colors.xml",
          format: "android/colors"
        }]
      },
      compose: { 
        transforms: ['attribute/cti', 
        'name/cti/snake', 
        'name/composeColorName'],
        transformGroup: 'compose',
        buildPath: "android_compose_tokens/src/styles/compose/",
        files: [{
          destination: "StyleDictionaryColor.kt",
          format: "compose/object",
          className: "StyleDictionaryColor",
          packageName: "br.com.cogna",
          options: {
            outputReferences: true
          },
          filter: {
            attributes: {
              category: "sofia",
            }
          }
        }, {
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
