const replaceHttp = (content) => {
    const find = 'http://';
    const re = new RegExp(find, 'g');
    content = content.replace(re, 'https://')
    return content;
}

module.exports = {
    replaceHttp
}