// Büyüktür/küçüktür: a > b, a < b.
// Büyük Eşit/Küçük Eşit: a >= b, a <= b.
// Eşitlik kontrolü a == b (Dikkat ederseniz tek değil iki tane '=' işaretinden oluşuyor.Tek olanı a = b atama anlamına geliyor).
// Eşit değildir matematikte şu şekilde gösteriliyor ≠, JavaScript’te ise eşittir öncesine ünlem işareti olarak kullanabilirsiniz a != b.

alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
let sonuc = 5 > 4; // karşılaştırma sonucu oluşacak sonucu değişkene atayıp
alert(sonuc);

//_____ KARAKTER DİZİSİ KARŞILAŞTIRMA _____

// Hangi karakter dizisinin hangisinden büyük olduğunu bulmak için alfabe sırasına bakılır.
// Her harf sıra ile kontrol edilir.
alert("Z" > "A"); // doğru ( true )
alert("Kum" > "Kan"); // doğru ( true )
alert("Bee" > "Be"); // doğru ( true )
// Tam olarak sözlükteki sıralama gibi değildir, unicode bir sıralama var
// Unicode sebebinden dolayı "A" ile "a" eşit değildir.

//_____ FARKLI TİPLERİN KARŞILAŞTIRILMASI _____

// Farklı tipler karşılaşılaştırıldığında sayılara döünüştürülürler.
alert("2" > 1); // doğru, karakter olan `2` sayıya çevrilerek 2 olmuş ve böyle karşılaştırılmıştır.
alert("01" == 1); // doğru, karakter olan '01' sayıya çevrilerek 1 olmuştur.

// Boolan değerler için true 1 olur ve false 0 olur.

//_____ SIKI EŞİTLİK _____

// Normal eşitlik kontorlü "=="'nün bir problemi vardır. 0 ile false'ı birbirinden ayıramamaktadır.
alert( 0 == false ); // true
// Aynı şey boş karakterler:
alert( '' == false ); // true

// ---> Sıkı eşitlik kontrolü === eşitliğin iki tarafını değiştirmeden kontrol eder.

// Diğer bir deyişle eğer a ve b iki farklı tip ise a === b doğrudan false ( yanlış ) döner. 
alert( 0 === false ); // yanlış, çünkü tipler farklı.
// Ayrıca eşitsizliği belirtmek için !== operatörü de bulunmaktadır.

//_____ null ile undefined(tanımlanmamış) EŞİTLİK KONTROLU _____

// Sıkı eşitlik kontrolü için ===: Bu değerler farklıdır, çünkü her biri kendine has bir tiptir.
alert( null === undefined ); // false
// Sıkı olmayan eşitlik kontrolüne göre ==: bunlar birbirlerine eşit fakat başka hiçbir değere eşit değildirler.
alert( null == undefined ); // true

// Matematiksel karşılaştırmalar için < > <= >= null/undefined sayıya çevrilirler. null 0 olurken undefined NaN( not a number ) olur.