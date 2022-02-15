// document.getElementById('case-minus').addEventListener('click',
// function () {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) + 1;
// });
// document.getElementById('case-plus').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) - 1;
// });




function updateCaseNumber(product, price,isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) { 
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // Update case total input
    const castTotal = document.getElementById(product + '-total');
    castTotal.innerText = caseNumber * price;
}

// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1200,true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1200,false);
});

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 100, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 100, false);
});