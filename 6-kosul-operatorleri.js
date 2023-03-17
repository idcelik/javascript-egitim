//_____ KOŞUL OPERATÖRLERI: IF, '?' _____

let tarih = 2023;
let sonuc = prompt("Kaç yılındaız?", "2000");
//if (tarih == sonuc) alert("Evet doğru! Şu anda 2023 yılındayız.");
if (tarih == sonuc) {
  alert("Evet doğru!");
  alert("Şu anda 2023 yılındayız.");
}else {
    alert("Nasıl bilemezsin. 2023 yılındayız...");
} 
 
//_____ BIRDEN FAZLA KOŞUL: “ELSE IF” _____

let yil = prompt('Kaç Yaşındayım?', '1');
if (yil < 27) {
  alert( 'daha büyük...' );
} else if (yil > 27) {
  alert( 'daha küçük' );
} else {
  alert( 'Kesinlikle!' );
}

//_____ ÜÇLÜ OPERATÖR ‘?’ _____

// let sonuc = koşul ? deger1 : deger2

let yas = prompt('İçeri Girebilmek için Yaşını Söylemelisin?', '18');
let girisIzni = (yas > 18) ? true : false;
if(girisIzni) alert ("Reşitsin. Hoşgeldin!");
else alert ("Reşit değilsin, üzgünüm. İlerleyen Zamanlarda Görüşürüz!");