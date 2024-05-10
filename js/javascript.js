



function calculateSpoonContainer() {
    const calculateSpoonContainerText = document.getElementById('calculateSpoonContainer-amount');
    const calculateSpoonContainerString = calculateSpoonContainerText.innerText;
    const calculateSpoonContainerTotal = parseFloat(calculateSpoonContainerString);

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + calculateSpoonContainerTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + calculateSpoonContainerTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('k.Accessories');

}





function rutiMaker() {
    const rutiMakerText = document.getElementById('rutiMaker-amount');
    const rutiMakerString = rutiMakerText.innerText;
    const rutiMakerAmountTotal = parseFloat(rutiMakerString);


    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + rutiMakerAmountTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + rutiMakerAmountTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;


    addToCalculationPurchaseEntry('k.Accessories');
}

function homeCooker() {
    const homeCookerText = document.getElementById('homeCooker-amount');
    const homeCookerString = homeCookerText.innerText;
    const homeCookerTotal = parseFloat(homeCookerString);


    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + homeCookerTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + homeCookerTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('Home Cooker');

}


function backCap() {
    const backCapText = document.getElementById('backCap-amount');
    const backCapString = backCapText.innerText;
    const backCapTotal = parseFloat(backCapString);

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + backCapTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + backCapTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('Sports Back Cap');
}



function jerseySet() {
    const jerseySetText = document.getElementById('jerseySet-amount');
    const jerseySetString = jerseySetText.innerText;
    const jerseySetTotal = parseFloat(jerseySetString);

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + jerseySetTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + jerseySetTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('Full Jersey Set');
}


function cates() {
    const catesText = document.getElementById('cates-amount');
    const catesString = catesText.innerText;
    const catesTotal = parseFloat(catesString);

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + catesTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + catesTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('Sports cates');
}


function singleChair() {
    const singleChairText = document.getElementById('singleChair-amount');
    const singleChairString = singleChairText.innerText;
    const singleChairTotal = parseFloat(singleChairString);

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + singleChairTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + singleChairTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('Single Relax Chair');
}



function childrenPlay() {
    const childrenPlayText = document.getElementById('childrenPlay-amount');
    const childrenPlayString = childrenPlayText.innerText;
    const childrenPlayTotal = parseFloat(childrenPlayString);

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + childrenPlayTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + childrenPlayTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('Children Play');
}

function flexibleSofa() {
    const flexibleSofaText = document.getElementById('flexibleSofa-amount');
    const flexibleSofaString = flexibleSofaText.innerText;
    const flexibleSofaTotal = parseFloat(flexibleSofaString);

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);


    const newTotalPrice = totalPriceElementCost + flexibleSofaTotal;
    totalPriceElementText.innerText = newTotalPrice;

    const newPreviousTotalAmount = previousTotalElementCost + flexibleSofaTotal;
    previousTotalElementText.innerText = newPreviousTotalAmount;

    addToCalculationPurchaseEntry('Flexible Sofa');
}







function addToCalculationPurchaseEntry(areaType) {
    const calculationEntry = document.getElementById('calculation-entry');

    const createContainer = document.createElement('li');
    createContainer.innerHTML = areaType;

    calculationEntry.appendChild(createContainer);

}







function discountCoupon() {
    const couponFieldText = document.getElementById('coupon-field');
    const couponField = couponFieldText.value;

    const totalPriceElementText = document.getElementById('totalPrice-amount');
    const totalPriceElementString = totalPriceElementText.innerText;
    const totalPriceElementCost = parseFloat(totalPriceElementString);


    const previousTotalElementText = document.getElementById('previousTotal-amount');
    const previousTotalElementString = previousTotalElementText.innerText;
    const previousTotalElementCost = parseFloat(previousTotalElementString);

    const discountFieldText = document.getElementById('discount-amount');
    const discountFieldString = discountFieldText.innerText;
    const discountField = parseFloat(discountFieldString);



    if (couponField === 'SELL200') {
        const discountFieldTotal1 = totalPriceElementCost / 100;
        const discountFieldTotal2 = discountFieldTotal1 * 20;
        const discountFieldTotal3 = discountFieldTotal2.toFixed(2);
        discountFieldText.innerText = discountFieldTotal3;

        const totalPriceElementCost2 = totalPriceElementCost - discountFieldTotal3;
        const totalPriceElementCost3 = totalPriceElementCost2.toFixed(2);
        previousTotalElementText.innerText = totalPriceElementCost3;

    }
    else {
        alert('Please use the SELL200 Coupon')
    }


}
