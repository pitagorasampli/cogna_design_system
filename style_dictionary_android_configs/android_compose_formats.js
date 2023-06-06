module.exports = function({ dictionary, options, file }) {
    const themeableTokens = dictionary.allProperties.filter(token => { return token.themeable === true || token.darkValue });
    return `package ` + file.packageName + `
import androidx.compose.ui.graphics.Color
class Colors(\n` +
themeableTokens.map(token => {
    return `  val ${token.name}: Color,`
}).join(`\n`) +
`\n)\n\n` +

// Light mode colors
`fun lightColors(\n` + 
    themeableTokens.map(token => {
        var value = tokenToThemedValue(dictionary, options, themeableTokens, token);
        return `  ${token.name}: Color = ${value},`
    }).join(`\n`) +
    `\n): Colors = Colors(\n` + 
        themeableTokens.map(token => { return `    ${token.name},` }).join(`\n`) +
    `\n)\n\n` + 

// Dark mode colors - any color without a defined darkValue property will fall back to the light value
`fun darkColors(\n` + 
    themeableTokens
        .map(token => {
            var value = tokenToThemedDarkValue(dictionary, options, themeableTokens, token);
            return `  ${token.name}: Color = ${value},`
        }).join(`\n`) +
`\n): Colors = Colors(\n` + 
    themeableTokens.map(token => { return `    ${token.name},` }).join(`\n`) +
`\n)\n\n` + 

// This is the color palette that we build our light and dark themes on
`object Palette {\n` +
    dictionary.allProperties
        // We need to sort based on how deep the reference trail is, because a value needs to be 
        // defined before we reference it in Kotlin
        .sort( (token1, token2) => { return sortByReferenceDepth(dictionary, token1, token2) })
        .filter( token => { return !token.themeable && !token.darkValue } )
        .map(token => {
            var value = tokenToValue(dictionary, options, token);
            return `  val ${token.name}: Color = ${value}`
        }).join(`\n`) +
`\n}`
}

function tokenToValue(dictionary, options, token) {
    if (options.outputReferences && dictionary.usesReference(token.original.value)) {
        var reference = dictionary.getReference(token.original.value)
        return reference.name;
    } else {
        return token.value;
   }
}

function tokenToThemedValue(dictionary, options, themeableTokens, token) {
    if (options.outputReferences && dictionary.usesReference(token.original.value)) {
        var reference = dictionary.getReference(token.original.value)
        if (themeableTokens.includes(reference)) {
            return reference.name;
        } else {
            return `Palette.${reference.name}`
        }
    } else {
        return token.value;
   }
}

function tokenToThemedDarkValue(dictionary, options, themeableTokens, token) {
    if (!token.darkValue) {
        return tokenToThemedValue(dictionary, options, themeableTokens, token)
    }

    if (options.outputReferences && dictionary.usesReference(token.original.darkValue)) {
        var reference = dictionary.getReference(token.original.darkValue)
        if (themeableTokens.includes(reference)) {
            return reference.name;
        } else {
            return `Palette.${reference.name}`
        }
    } else {
        return token.darkValue;
   }
}

function sortByReferenceDepth(dictionary, token1, token2) {
    return tokenDepth(dictionary, token1) - tokenDepth(dictionary, token2)
}

function tokenDepth(dictionary, token) {
    if (dictionary.usesReference(token.original.value)) {
        var reference = dictionary.getReference(token.original.value)
        return tokenDepth(dictionary, reference) + 1
    } else {
        return 0
    }
}