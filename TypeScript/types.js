var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3];
var f = ['a', 's', 'd'];
var g = ['a', 2, true];
var h = ['a', 2, false];
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
var krediOdeme = Payment.kredi;
var havaleIslemi = Payment.havale;
var eftIslemı = Payment.eft;
