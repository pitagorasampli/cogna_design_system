
const { fileNameGenerator } = require('../utils.js')

let getStyleDictionaryAndroidThemes = (brand) => {
    let fileName = fileNameGenerator(brand)
  
    return {
      "source": [
        `./themes_tokens/token_${brand}.json`,
      ],
      "platforms": {
        compose: {
          transforms: [
            "attribute/cti",
            "name/cti/snake",
            "color/hex8android",
            "size/sp",
            "size/dp"
          ],
          transformGroup: 'compose',
          buildPath: "android_compose_tokens/src/styles/compose/themes/",
          files: [{
            destination: `${fileName}Theme.kt`,
            format: "compose/object",
            className: `${fileName}Theme`,
            packageName: `${fileName}Theme`,
            options: {
              "nameBrand": `${brand}`
            },
            filter: {
              attributes: {
                category: "refs"
              }
            }
          }]
        }
      }
    };
  }


module.exports = {
    getStyleDictionaryAndroidThemes
}