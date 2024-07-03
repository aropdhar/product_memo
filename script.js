let originalprice1 = document.querySelector(".originalprice");
let vat1 = document.querySelector(".vat");
let discountpercentage1 = document.querySelector(".discountpercentage");
let pricewithVat1 = document.querySelector(".pricewithVat");
let discountprice1 = document.querySelector(".discountprice");
let price = document.querySelector(".price"); 

// vat calculation

function addVat(price = 0 , vat= 0){
  
    const includevat = price * vat /100;
    const vatwithprice = parseInt(price + includevat);
    return vatwithprice;

}

function discount(pricewithVat = 0 , discountamount = 0){
    
     const makediscount = (pricewithVat * discountamount) /100;
     return(makediscount);

}

function diplayprice(originalprice , vat , discountpercentage ,pricewithVat , discountprice){
    
    originalprice1.innerHTML = "MRP(TK)"+ " " + originalprice;
    vat1.innerHTML = vat + "%";
    discountpercentage1.innerHTML = discountpercentage + "%";
    pricewithVat1.innerHTML = pricewithVat + "Tk";
    discountprice1.innerHTML = discountprice + "Tk";
    price.innerHTML = "Total Price:-" + "  " + discountprice + "TK";

}

const originalprice = 500;
const vat = 6;
const discountpercentage = 50;

const pricewithVat = addVat( originalprice , vat );
const discountprice = discount(pricewithVat , discountpercentage);

diplayprice(originalprice , vat , discountpercentage , pricewithVat ,discountprice);