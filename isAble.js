/*
২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
*/

var yourMoney = 80000;
if (yourMoney > 80000) {
    console.log("Buy Mac");
}
else if (yourMoney > 60000) {
    console.log("Buy gaming laoptop");
}
else if (yourMoney > 40000) {
    console.log("Buy lenovo yoga");
}
else if (yourMoney > 20000) {
    console.log("Buy old laoptop");
}
else {
    console.log("Mobile is ok");
}