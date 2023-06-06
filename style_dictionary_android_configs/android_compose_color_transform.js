const StyleDictionary = require('style-dictionary');

var Color = require('tinycolor2')

const colorNameGenerator = (attributeName, token) => {
    this.matcher; (token) => token.attribute.category = attributeName,
    this.transformer; (prop) =>{
        const hex8 = Color(prop.value).toHex8();
        return `Color(0x${hex8})`;
    }
}

module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `sofia`,
  transformer: (prop) => {
    const hex8 = Color(prop.value).toHex8();
    return `Color(0x${hex8})`;
  }
}