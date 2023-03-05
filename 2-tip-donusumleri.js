//_____ TİP DÖNÜŞÜMLERİ _____


// *** TOSTRING *** 
// Bir değeri karakter dizisi olarak kullanmak istiyorsanız toString’i kullanabilirsiniz.

let value = false;
alert(typeof value); // boolean

value = String(value); // Şimdi değer karakter dizisi =  "false"
alert(typeof value); // karakter dizisi


// *** NUMBER *** 

// Sayısal dönüştürme işlemleri matematiksel operasyonlarda otomatik olarak gerçekleşir.
// Örneğin sayı olmayan iki değer * işlemine tutulduğunda:

alert( "7" * "4" ); // 28, karakterler sayılara dönüştürülür ve işlem öyle yapılır.

// Eğer isterseniz Number(value) fonksiyonu ile değeri sayıya dönüştürebilirsiniz: 
let str = "324";
alert(typeof str); // string 
let num = Number(str); // sayı olan 324 
alert(typeof num); // number 

 let age = Number("Bir sayı yerine herhangi bir yazı"); 
alert(age); // NaN, dönüştüremedi! 



// *** EKLEME KARAKTERİ + *** 

alert( 1 + '2' ); // '12' (Sağ tarafta karakter var)
alert( '1' + 2 ); // '12' (Sol tarafta karakter var) 
alert( 1 + 2 ); // 3 toplama işlemi yapıldı.

// Gördüğünüz gibi sadece bir tarafın karakter olması yeterlidir. Eğer iki tarafta sayıya dönüşebiliyorsa bu durumda gerçek toplama işlemi yapılır.


// *** BOOLEAN *** 

// “boş” olan 0, veya boş karakter dizisi, null, undefined , Nan gibi değerler false olur.
// Diğer türlü değerler true olur. 
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("merhaba") ); // true
alert( Boolean("") ); // false

// Dikkat: karakter olan "0" true'dur
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // içerisinde boşluk olan karakter dizisi true olur.
