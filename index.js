const signMap = require('./signMap');
let langdetect = require('langdetect');

// транслитерация
// transliteration('привет','russian') // privet
// ошибки переключения клавиатуры
// transliteration('руддщ','keyboard') // hello
// transliteration('ghbdtn','keyboard') // привет

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
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (signMap.russian.hasOwnProperty(str[i])) {
      result += signMap.russian[str[i]];
    }
  }
  return result;
}

function transKeyboard(str) {
  let lang = langdetect.detect(str);
  let result = '';
  if (lang == 'russian') {
    for (let i = 0; i < str.length; i++) {
      for (let latin in signMap.keyboard) {
        if (signMap.keyboard[latin] == str[i]) result += latin;
      }
    }

  }
  else if (lang == 'english') {
    for (let i = 0; i < str.length; i++) {
      if (signMap.keyboard.hasOwnProperty(str[i])) {
        result += signMap.keyboard[str[i]];
      }
    }
  }
  return result;
}

module.exports = transliteration;