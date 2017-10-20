# Transliterate module - changes cyrillic symbols into latin ones

Usage example:  

``
// транслитерация
transliteration('привет','russian') // privet
// ошибки переключения клавиатуры
transliteration('руддщ','keyboard') // hello
transliteration('ghbdtn','keyboard') // привет
``

###	result = transliterate(word)
