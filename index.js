const signMap = require('./signMap');
let langdetect = require('langdetect');

function transliteration(str, mode) {
  let result = false;
  if (mode == 'russian') {
    result = transRussian(str);
  }
  else if (mode == 'keyboard') {
    result = transKeyboard(str);
  }
  return result;
}

function transRussian(str) {
  return changeSigns(str, signMap.translit.cyrilic);
}

function transKeyboard(str) {
  let lang = langdetect.detect(str);
  if (lang == 'russian') {
    return changeSigns(str, signMap.keyboard.cyrilic)
  }
  else if (lang == 'english') {
    return changeSigns(str, signMap.keyboard.latin)
  }
  else return str;
}

function changeSigns(str, obj) {
  str = str.split('');
  str = str.map((s) => {
    if (obj.hasOwnProperty(s)) {
      return obj[s];
    } else return s;
  })
  return str.join('');
}

module.exports = transliteration;