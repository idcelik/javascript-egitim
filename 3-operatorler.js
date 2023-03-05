//_____ OPERATÖRLER _____

// *** UNARY, BINARY, OPERAND ***

// Operand operatörlerin uygulandığı(+,-,* vs.) değerlerdir. Örneğin çarpma işlemi için 5*2 örneğinden gidersek. İki tane operand vardır. Bunlardan solda olan 5 ve sağ operand 2. Bunlara argüman da denebilir.
// Eğer tek operanddan oluşursa bu operatör unary olarak adlandırılır. Örneğin, "-" sayının işaretini değiştirir:
let x = 1;
x = -x;
alert(x); // -1, unary işlemi gerçekleşti

//Eğer operatörün iki tane operand’ı var ise buna binary operand denir. Örneğin çıkarma işlemi aşağıda bu formda bulunur.

let z = 1,
  y = 3;
alert(y - z); // 2, iki sayının çıkarılması binary operand işlemidir.

// *** KARAKTER DİZİSİ BİRLEŞTİRME : BINARY + ***

// JavaScript’te operatörlerin özel durumlarından birisi karakter dizilerinin + işareti ile birleştirilebilmesidir.

let s = "my" + "string";
alert(s); // mystring
//Dikkat edin eğer iki operand’dan birisi karakter dizisi ise diğeri ne olursan olsun karakter dizisine çevrilir.
alert("1" + 2); // "12"
alert(2 + "1"); // "21"

// "+" işlemi hem birleştirme hem de tip değiştirme yapmaktadır. Bu sadece "+" operatörüne has bir olaydır.
// Örneğin çıkarma ve çarpmanın davranışı farklıdır:
alert(2 - "1"); // 1
alert("6" / "2"); // 3

// *** SAYISAL DEĞER DÖNÜŞTÜRME : UNARY + ***
// Sayılara bir etkisi yoktur
let xx = 1;
alert(+xx); // 1

let yy = -2;
alert(+yy); // -2

// Sayı olmayan değerleri çevirir
alert(+true); // 1
alert(+""); // 0

// Aslında Number(...) işlemini yapar. Fakat daha kısa biçimyle.

// Karakter dizilerini sayılara çevirme gerekliliği sıklıkla önünüze gelir. Örneğin HTML form değerlerini alırken sadece karakter dizisi kullanır. Fakat ya siz bunları toplamak istiyorsanız ?
// Bildiğiniz gibi iki karakter dizisini + işareti ile toplarsanız birleştirme işlemi yapar:
let elma = "2";
let portakal = "3";
alert(elma + portakal); // "23",  binary toplama iki karakter dizisini birleştiriyor
// Eğer sayı olarak kullanmak istiyorsanız, önce dönüştürme işlemini yapıp sonra toplayabilirsiniz.
let elmaa = "2";
let portakall = "3";
// her iki değer de binary toplama işleminden önce sayıya çevrilmişlerdi
alert(+elma + +portakal); // 5
// Daha uzun bi şekilde bu işlemi yapmak istiyorsanız
// alert( Number(apples) + Number(oranges) ); // 5
// şeklinde yapabilirsiniz.

// *** ATAMA ***

// Atama operatörü = dir. Öncelik sırasında en altlarda yer almaktadır. Böylece x = 2 * 2 + 1 ifadesi çalıştığında önce tüm işlemler yapılır ardından “=” çalıştırılarak sonuç x içerisinde tutulur.

let xy = 2 * 2 + 1;

alert(xy); // 5
// Zincirleme atama yapmak şu şekilde mümkündür:

let a, b, c;

a = b = c = 2 + 2;
alert(a); // 4
alert(b); // 4
alert(c); // 4
// Zincirleme atama sağdan sola doğru olur. Önce en sağdaki değişkene değer atanır. 2+2 değeri önce c'ye ardından b ve son olarak da a'ya atanır. En sonunda tüm değişkenler tek bir değeri alırlar.

// *** KALAM % ***

// Kalan % operatörü yüzde ile alakası olmayan bir operatördür.
// a % b a’nın b’ye bölümünden kalan değeri verir.
alert(5 % 2); // 5'in 2 ile bölümünden kalan 1'dir.
alert(8 % 3); // 8'in 3 ile bölümünden kalan 2'dir.
alert(6 % 3); // 6'nın 3 ile bölümünden kalan 0'dır.

// *** ÜS ALMA ** ***

// Üs alma operatörü JavaScript diline sonradan eklenen bir operatördür.
// Doğal sayı olan b değeri için a ** b a'nın b defa kendisiyle çarpılması demektir.
alert(2 ** 2); // 4  (2 * 2)
alert(2 ** 3); // 8  (2 * 2 * 2)
alert(2 ** 4); // 16 (2 * 2 * 2 * 2)
// Integer olmayan değerler için de aynı işlemi yapmak mümkün
alert(4 ** (1 / 2)); // 2 ( 1/2 üstü karekökü anlamına da gelir.)
alert(8 ** (1 / 3)); // 2 (1/3 üstü ise küp kök anlamına gelir. )

// *** ARTIRMA/AZALTMA ***

// Bir sayıyı artırmak veya azlatmak sayısal operasyonlarda önemli sayılabilecek bir düzeydedir.
// Bunun için özel bir operatör yapılmıştır:
// Artırma ++ değişkenin değerini 1 artırır:

let sayacc = 2;
sayacc++; // sayac =  sayac + 1 ile aynı, fakat daha kısa
alert(sayacc); // 3
//Azaltma -- değişkenin değerini bir azaltır:

let sayaccc = 2;
sayacccc--; //  sayac =  sayac - 1 ile aynı, fakat daha kısa
alert(sayaccc); // 1
// Artırma/Azaltma sadece değişkenlere uygulanabilirler. 5++ gibi bir kullanım hata verecektir.
// ++ ve -- operatörleri değişkenden önce veya sonra kullanılabilirler.
// Operatör değişkenden sonra geliyorsa ona “postfix form” deriz: counter++.
// “prefix form” ise opeatörün değişkenden önce geldiği durumdur: ++counter.

// *** BITSEL(BITWISE) OPERATÖRLER ***

// Bitsel operatörler argümanlara 32-bitlik doğal sayı gibi davranır ve ikili gösterimleri düzeyinde çalışır.
// Bu operatörler JavaScript’e özgü değildir. Çoğu programlama dilinde bulunurlar.
// Operatörlerin listesi:
// AND – VE ( & )
// OR – VEYA ( | )
// XOR – ÖZEL VEYA ( ^ )
// NOT – DEĞİL ( ~ )
// LEFT SHIFT – SOLA KAYDIRMA ( << )
// RIGHT SHIFT – SAĞ KAYDIRMA ( >> )
// ZERO-FILL RIGHT SHIFT – SIFIR DOLDURARAK SAĞ KAYDIRMA ( >>> )

// *** MODIFY-IN-PLACE(YERİNDE DEĞİŞTİR) ***
let n = 2;
n = n + 5;
n = n * 2;

let nn = 2;
nn += 5; // şu an n = 7 (n = n + 5 ile aynı)
nn *= 2; // şu an n = 14 (n = n * 2 ile aynı)
alert(nn); // 14
// Kısa olan “modify-and-assign” operatörleri tüm aritmetik ve bitsel operatörler için mevcuttur: /=, -=, vb.

// *** VİRGÜL ***
//Virgül operatörü birden fazla ifadeyi virgül , ile ayırarak hesaplamamıza olanak sağlar. Her bir ifade işleme alınır fakat bu ifadelerden sadece sonuncusu döndürülür.
let aa = (1 + 2, 3 + 4);
alert(aa); // 7 (3 + 4 işleminin sonucu)
//Burada, ilk ifade olan 1 + 2 işleme giriyor fakat sonucu çöpe atılıyor. Sonrasında gelen 3 + 4 işleme giriyor ve sonuç olarak geri döndürülüyor

// Peki neden son kısım hariç her şeyi yok sayan bir operatöre ihtiyacımız var?
// Bazen bizler; bir satırda birkaç işlem yapılan karmaşık yapılarda bu operatörü kullanırız.
// Bir satırda 3 farklı işlem
for (a = 1, b = 3, c = a * b; a < 10; a++) {}
// Bu tarz numaralar birçok JavaScript frameworklerinde kullanılır. Bu yüzden bunlardan bahsettik. Ama genelde bunlar kodun okunabilirliğini azaltıyorlar. Bu yüzden kullanmadan önce iyi düşünmek gerekir.
