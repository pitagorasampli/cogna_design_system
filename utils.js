const _ = require('lodash')
const Color = require('color')

const convertColorValue = (colorValue) => {
    let { color, valpha } = Color(colorValue)
    let [ red, green, blue ] = color

    return `UIColor(red: ${red}/255, green: ${green}/255, blue: ${blue}/255, alpha: ${valpha}).color`
}

const fileNameGenerator = (brand) => {
    let fileNameCamel =_.camelCase(brand)
    return _.upperFirst(fileNameCamel)
}

const filterLightColors = (token) => {
    return token.attributes.type == 'light theme' ? true : false
}

const filterRefsColors = (token) => {
    return token.attributes.type == 'refs' ? true : false
}

const generatePropertyName = (token) => {

    let { item, subitem, state } = token.attributes

    if (token.attributes.type == 'light theme') {
        subitem = (subitem == "primary" || subitem == "secondary") ? "" : subitem
    } else if (token.attributes.type == 'refs') {
        item = ["error","info","neutrals","primary","secondary","success","warning"] ? "" : item
    }

    let nameArray = [item, subitem]

    if (state !== undefined) {
        nameArray.push(state)
    }

    let name_snake = nameArray.join('_')

    return _.camelCase(name_snake)
}

const colorNameGenerator = (attributeName, token) => {
    this.type; `value`,
    this.matcher; (token) => token.attribute.category = attributeName,
    this.transformer; (prop) =>{
        const hex8 = Color(prop.value).toHex8();
        return `Color(0x${hex8})`;
    }
}

module.exports = {
    convertColorValue,
    fileNameGenerator,
    filterLightColors,
    filterRefsColors,
    generatePropertyName,
    colorNameGenerator
}