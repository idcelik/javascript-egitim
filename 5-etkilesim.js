//_____ ALERT _____

alert("Merhaba");
// Bu ekrana mesaj’ değişkenini çıkarır ve önünüze gelen bu pop-up’da “OK” butonuna basmadan kodda bir sonraki adıma geçilmez.
// Ekrana çıkan küçük pencereye modal pencere denir. “Modal” sayfayı kullanan kişinin bu durumda sayfayla iletişime geçemeyeceğini, başka tuşlara basamayacağını sadece bu pencere ile etkileşim kurabileceğini ifade eder. Yani “OK”'e basması beklenir.

//_____ KULLANICIDAN BİLGİ İSTEME _____

// Kullanıcıdan bilgi istemek için prompt fonksiyonu kullanılır. Bu fonksiyon iki tane argümana ihtiyaç duyar:
// Modal penceresi içerisinde bir yazı ve OK/CANCEL butonlarını içerir.

// result = prompt(başlık[, varsayılan]);
// başlık  : Kullanıcıya gösterilecek yazı.
// default : Opsiyonel bir ikinci parametre, input alanı için varsayılan değeri içerir.

let age = prompt("Kaç yaşındasın?", 24);

alert(`Sen ${age} yaşındasın!`);
// Kullanıcı ekrana çıkan veri girişi kutusuna istediğini yazar ve OK tuşuna basar. İsterse bunu CANCEL tuşuna basarak iptal edebilir. Veya Esc tuşu da aynı işlevi görür.
// Eğer kullanıcı değer girdiyse bunu dönderir, eğer girmediyse ve o ekrandan Esc veya CANCEL butonu ile çıktıysa null dönderir.

// NOT
// IE: her zaman varsayılan değeri kullanın
// İkinci parametre opsiyonel. Fakat eğer bu parametreyi göndermezsek, Internet Explorer veri giriş ekranında "undefined" gösterir.
//İsterseniz aşağıdaki kodu Internet Explorer’da çalıştırıp görebilirsiniz:
// let test = prompt("Test");
// Bundan dolayı IE’de düzgün görünebilmesi için her zaman boşta olsa bir değer atamak önemli. Bu arada Edge browser’da bu problem görünmemektedir.
// let test = prompt("Test", ''); // <-- for IE

//_____ ONAY _____

// result = confirm(soru);
// confirm fonksiyonu içerisine yazdığımız soru ile OK ve CANCEL butonu olan bir pencere çıkarır.
// Eğer OK’e basıldıysa true, CANCEL’a basıldıysa false dönderir.
let ask = confirm("İyi misin?"); 
alert( ask ); // eğer OK'e basıldıysa `true` döner.