function sameBracket(text) {
    if (text.includes('[') && text.includes(']') || text.includes('{') && text.includes('}')) {
        console.log(true)
    } else {
        console.log(false)
    }

};
sameBracket('[curls]');
sameBracket('(curls]');