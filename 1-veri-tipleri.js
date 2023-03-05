//******SAYISAL İFADELER******

// tüm sayısal ifadeler  direkt olarak let ile atanabilir.
let n = 22;
let n2 = 3.21;

// Infinity matematiksel Sonsuzluğu ∞ ifade eder. Diğer tüm sayılardan büyük olan özel bir sayıdır.
// 0’a bölünmede sonuç sonsuzu verir:
alert(1 / 0); // Infinity

// NaN hesaplamalarda bir hata olduğunu gösterir. Hatalı veya tanımsız matematiksel hesapları gösterir, örneğin:
alert("Sayı Değil ( Not a Number) " / 1); // NaN, böyle bir bölme işlemi yapılamaz.
//NaN yapışkandır. Bir İşlemin Herhangi bir yerinde NaN ifadesi varsa, sonuç her zaman NaN gelir.

//-- BıgInt Sayılar
// Normal number değerleri,  (253-1) (bu 9007199254740991) -(253-1) değerler arasında olmalıdır. Tteknik bir sınırlamadır.
// Eğer BigInt kullanılması gerekiyorsa, değerin sonuna 'n' eklenir.
const bigInt = 112312312312312312334290n;
// Şu anda, BigInt Firefox/Chrome/Edge/Safari’de destekleniyor, ancak IE’de desteklenmiyor.

//******STRING – Karakter Dizisi******

// Js'de 3 çeşit tırnak işlemi vardır, çift tırnak, tek tırnak ve ters tırnak
let str = "Merhaba";
let str2 = "Dünya ${str}";
let str3 = `World ${str}`;
// çift ve tek tırnak basit tırnaklı olarak geçer. Fakat ters tırnak genişletilmiş fonksiyonlu tırnaktır. İçerisine ${..} gibi başka diziler alabilir.
alert(str); //Çıktısı : Merhaba
alert(str2); //Çıktısı : Dünya ${str}
alert(str3); //Çıktısı : World Merhaba

//******BOOLEAN TIPI******
let ornek1 = true;
let ornek2 = false;
let kontrol = 1 > 2;
alert(kontrol); // false

//******"NULL" TIPI******

// “null” değeri yukarıda tanımlanan hiçbir tipe dahil değildir.
// Kendi başına null değerini tutar.
let isim = null;

// JavaScript’te null olmayan objeyi referans göstermez veya başka dillerdeki gibi “null pointer” değildir.
// “olmayan”, “boş”, “bilinmeyen değer” anlamında bir özel değerdir.
// Yukarıdaki yas boş veya bilinmeyen bir değerdir.

//******"UNDEFINED" DEĞERİ******

// Bir diğer özel değer ise undefineddır. Kendi başına null gibi bir değerdir.
// undefined anlam olarak “herhangi bir değer atanmamıştır” anlamına gelir.
// Eğer bir değişken tanımlanmış fakat hiçbir değer atanmamışsa tam olarak bu değeri alır.
let x;
alert(x); // "undefined"Teknik olarak undefined değerini herhangi bir değişkene atamak mümkündür:
let y = 323;
x = undefined;
alert(x); // "undefined"
//Fakat bu şekilde tanımlanmasa daha iyi olur. Normalde null kullanılarak değişkenin boş veya bilinmeyen olduğu tanımlanır, undefined değişkene bir değer atanmış mı? Sorusunu kontrol eder.

//******OBJELER VE SEMBOLLER ******

// Obje özel bir tiptir.
// Diğer tüm tipler “primitive” yani basit veya ilkel tiplerdir. Bu değişkenler sadece bir şey tutabilirler (karakter dizisi veya sayı). Buna karşılık objeler veri koleksiyonları (collections) veya karmaşık yapılar tutabilirler.
// Symbol objeler için benzersiz tanımlayıcılar oluşturmak için kullanılır.

// object daha karmaşık veri yapıları için.
// symbol eşsiz tanımlamalar için.

//******TYPEOF OPERATÖRÜ******

// typeof argüman tipini bildirir.
// İki türlü yazımı vardır:
// 1 - Operatör olarak: typeof x.
// 2 - Fonksiyonel tipte: typeof(x).
// Diğer bir deyişle parantezli de çalışır parantez olmadan da çalışır. Sonuç aynı olacaktır.
// typeof x'i çalıştırdığınızda bu fonksiyon karakter dizisi (string) döndürür:

typeof undefined; // "undefined"
typeof 0; // "number"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)

// Son üç satır diğerlerinden farklıdır. Şu şekilde;

// Math matematiksel operasyonlar için kullanılacak JavaScript dilinde var olan bir objedir. Sayılar konusunda buna değinilecektir. Burada sadece objenin örneklenmesi için kullanılmıştır.
// Typeof null sonucu "object" dir. Aslında yanlış. Bu typeof fonksiyonunun bilinen bir hatasıdır. Eski versiyonlara uygunluk açısından bu şekliyle bırakılmıştır. Yoksa null bir obje değildir. Kendine has bir tiptir. Tekrar söylemek gerekirse bu JavaScript dilinin bir hatasıdır.
// typeof alert fonksiyondur. Çünkü alert dilde doğrudan var olan bir fonksiyondur. Math ile farklı gördüğünüz gibi. Bir sonraki bölümde fonksiyonlar anlatılacaktır. Fonksiyonlar obje tipine dahildir. Fakat typeof bunları farklı yorumlar. Resmi olarak yanlış olsa da pratikte çokça kullanılan bir özelliktir.
