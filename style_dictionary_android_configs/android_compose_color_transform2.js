const StyleDictionary = require('style-dictionary');

var Color = require('tinycolor2')

const colorNameGenerator = (attributeName, token) => {
    this.type; `value`,
    this.matcher; (token) => token.attribute.category = attributeName,
    this.transformer; (prop) =>{
        const hex8 = Color(prop.value).toHex8();
        return `Color(0x${hex8})`;
    }
}

module.exports = {
  colorNameGenerator
}