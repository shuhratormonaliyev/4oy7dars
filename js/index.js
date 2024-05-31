//  1 -misol

// let = prompt(
//   "Foydalanuvchi kiritgan oy raqamiga mos ravishda oy nomini chiqaradigan funksiya tuzing."
// );

// let n = +prompt("oy sonini kiriting");

// switch (n) {
//   case 1:
//     console.log("yanvar");
//     break;
//   case 2:
//     console.log("fevral");
//     break;
//   case 3:
//     console.log("mart");
//     break;
//   case 4:
//     console.log("aprel");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("iyun");
//     break;
//   case 7:
//     console.log("iyul");
//     break;
//   case 8:
//     console.log("avgust");
//     break;
//   case 9:
//     console.log("sentabr");
//     break;
//   case 10:
//     console.log("oktabr");
//     break;
//   case 11:
//     console.log("noyabr");
//     break;
//   case 12:
//     console.log("dekabr");
//     break;
// }

//  2- MISOL \

// let = prompt("Foydalanuvchi kiritgan ballga mos ravishda bahoni chiqaradigan funksiya tuzing. Agar 90 va 100 orasida bolsa A 80 va 90 B, 70 va 80 C, 60 va 70 D va o dan 60 gacha F");
// let ball = +prompt("sonni kiriting");
// let result;
// if (ball >= 90 && ball <= 100) {
//   result = "A";
// } else if (ball >= 80 && ball < 90) {
//   result = "B";
// } else if (ball >= 70 && ball < 80) {
//   result = "C";
// } else if (ball >= 60 && ball < 70) {
//   result = "D";
// } else if (ball < 60) {
//   result = "F";
// } else {
//   result = "Xato";
// }
// switch (result) {
//   case "A":
//     console.log("A");
//     break;
//   case "B":
//     console.log("B");
//     break;
//   case "C":
//     console.log("C");
//     break;
//   case "D":
//     console.log("D");
//     break;
//   case "F":
//     console.log("F");
//     break;
//   default:
//     console.log("Mavjud emas");
//     break;
// }

//  3 -misol

// let = prompt(
//   'Kiritilgan vaqt oraligiga mos ravishda salomlashish xabarini chiqaradigan funksiya tuzing Bunda kiritilgan vaqt 5 va 12 orasida bolsa "xayrli tong", 12 va 17 orasida bolsa xayrli kun, 17 va 21 orasida bolsa  xayrli kech 21 va 24, 0, 5 orasida bolsa xayrli tun yozuvlari chiqarilsin'
// );
// let kun = +prompt("sonni kiriting");
// let result;
// if (kun >= 5 && kun <= 12) {
//   result = "xayrli tong";
// } else if (kun >= 12 && kun <= 17) {
//   result = "xayrli kun";
// } else if (kun >= 17 && kun <= 21) {
//   result = "xayrli kech";
// } else if (kun >= 21 && kun <= 24) {
//   result = "xayrli tun";
// } else if (kun <= 0 && kun <= 5) {
//   result = "xayrli tun";
// } else {
//   result = "xato";
// }
// switch (result) {
//   case "xayrli tong":
//     console.log("xayrli tong"); 
//     break;
//   case "xayrli kun":
//     console.log("xayrli kun");
//     break;
//     case "xayrli kech":
//     console.log("xayrli kech");
//     break;
//     case "xayrli tun":
//     console.log("xayrli tun");
//     break;
//     case "xayrli tun":
//     console.log("xayrli tun");
//     break;
//   default:
//     console.log("MAVJUD EMAS");
//     break;
// }





//  4 - misol 
// let = prompt('Foydalanuvchi togri raqam kiritmaguncha raqam kiritishni soraydigan funksiya tuzing');
// function togriRaqam() {
//     while (true) {
//     let raqam = prompt("Raqam kiriting");
//     if (raqam > 0 && raqam < 10 && raqam !== "") {
//         alert('Siz kiritgan raqam ${raqam}');
//     } else {
//         alert("Xatolik bo'ldi");
//     }
//    }
//   }
// togriRaqam();

//   5 - misol 
// let = prompt('0 dan 20 gacha bolgan juft sonlarni ekranga chiqaradigan funksiya tuzing');
// let n = 2;
// while (n <= 20) {
//     console.log(n);
//     n+=2;
// }


//=================== 6 - MISOL ===============


// let = prompt('Foydalanuvchi "stop" sozini kiritmaguncha xabar kiritishni soraydigan funksiya tuzing');
// function xabarKiriting() {
//     let input;
//     do {
//         input = prompt("Xabar kiriting");
//         if(input !== "stop") {
//             console.log('input');
//         }
//     } while(input !== "stop");
// }


// ============ 7 - MISOL =====================



// let = prompt('Foydalanuvchi kiritgan n ta sonning ortacha qiymatini hisoblaydigan funksiya tuzing.');
// function sonlarningOrtachasiniHisoblash() {
// let summa = 0;
//     let sonlarSoni = 0;
//     let input = prompt("son kiriting");

    
//     let n = parseInt('input');
//     while(sonlarSoni < n) {
//         input = prompt(${sonlarSoni + 1}-sonni kiriting);
//         let son = parseFloat('input');
//         if (!isNaN(son)) {
//             summa += son;
//             sonlarSoni++;
//         } else {
//             alert("xato");
//         }
//     if (sonlarSoni > 0) {
//         return summa / sonlarSoni;
//     } else {
//         alert("Hech qanday son kiritilmadi.");
//         return null;
//     }
// }
// let ortachaQiymat = sonlarningOrtachasiniHisobla();
// if (ortachaQiymat !== null) {
//     console.log("Kiritilgan sonlarning o'rtacha qiymati: " + ortachaQiymat);
// }