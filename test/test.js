let translit = require('../index');

// транслитерация
console.log(translit('прИвЕТ','russian')) // privet
// ошибки переключения клавиатуры
console.log(translit('рУдДЩ','keyboard')) // hello
console.log(translit('gHbdTN','keyboard')) // привет