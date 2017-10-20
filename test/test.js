let translit = require('../index');

// транслитерация
console.log(translit('прИвЕТ!','russian')) // privet
console.log(translit('hello!','russian')) // hello
// ошибки переключения клавиатуры
console.log(translit('рУдДЩ?','keyboard')) // hello
console.log(translit('gHbdTN \(*_*)/','keyboard')) // привет