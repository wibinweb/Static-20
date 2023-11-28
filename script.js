const changeTextH2 = document.getElementById('headerFindH2').textContent = "Personal info";
const changeTextP = document.getElementById('headerFIndP').textContent = "Please provide your name, email address, and phone number.";

const findNav = document.getElementById('findNav');
const findArticle = document.getElementById('findArticle');
const findFooter = document.getElementById('findFooter');
const findDiv = document.getElementById('findDiv');
const findThanks = document.getElementById('findThanks');
const finHeader = document.getElementById('finHeader');

const index1 = document.getElementById('index1');
const index2 = document.getElementById('index2');
const index3 = document.getElementById('index3');
const index4 = document.getElementById('index4');

const formN1 = document.getElementById('formN1').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('number');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const number = numberInput.value.trim();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const numberError = document.getElementById('numberError');
    const minValue = 2;
    const minValueNumber = 4;
    const listaPalabras = ['ofensa', 'ofensiva', 'mala', 'mal'];
    let palabrasFalse = false;
    for (let i = 0; i < listaPalabras.length; i++) {
        if (name.includes(listaPalabras[i])) {
            palabrasFalse = true;
            break;
        }
    }
    if (name === '') {
        nameError.textContent = 'This field is required';
    } else if (name.length <= minValue){ 
        nameError.textContent = 'Use more than 2 words';
    } else if (palabrasFalse){
        nameError.textContent = 'Dont use this type of words';
    } else {
        nameError.textContent = '';
    }
    if (email === '') {
        emailError.textContent = 'This field is required';
    } else {
        emailError.textContent = '';
    }
    if (number === '') {
        numberError.textContent = 'This field is required';
    } else if (isNaN(number)) {
        numberError.textContent = 'Use a valid number';
    } else if (number.length <= minValueNumber) {
        numberError.textContent = 'Use a number with more digits';
    } else {
        numberError.textContent = '';
    }
    if (name === '' || email === '' || number === '' || emailError.textContent !== '' || numberError.textContent !== '') {  
    } else {
        index1.classList = 'left-number';
        index2.classList = 'left-number-selected';
        document.getElementById('headerFindH2').textContent = 'Select your plan';
        document.getElementById('headerFIndP').textContent = 'You have the option of monthly or yearly billing.';
        findNav.classList = 'hide-part';
        findArticle.classList = 'show-part';
    }
});

const hideFreeMonths = document.querySelectorAll('.hideFreeMonths');

const arcadePrice = document.getElementById('arcadePrice');
const advancedPrice = document.getElementById('advancedPrice');
const proPrice = document.getElementById('proPrice');

arcadePrice.textContent = '$9/mo';
advancedPrice.textContent = '$12/mo';
proPrice.textContent = '$15/mo';

const arcade = document.getElementById('arcade');
const advanced = document.getElementById('advanced');
const pro = document.getElementById('pro');

arcade.textContent = "Arcade";
advanced.textContent = "Advanced";
pro.textContent = "Pro";

arcade.value = 9;
advanced.value = 12;
pro.value = 15;

const colocarvaloresSeleccionados = document.getElementById('colocarvaloresSeleccionados');
colocarvaloresSeleccionados.value = 1;

const colocarvaloresSeleccionados2 = document.getElementById('colocarvaloresSeleccionados2');
colocarvaloresSeleccionados2.value = 2;

const colocarvaloresSeleccionados3 = document.getElementById('colocarvaloresSeleccionados3');
colocarvaloresSeleccionados3.value = 2;

const cartShowValueFinal = document.getElementById('cartShowValueFinal');
cartShowValueFinal.textContent = colocarvaloresSeleccionados.value;
cartShowValueFinal.value = colocarvaloresSeleccionados.value;

const cartShowValueFinal2 = document.getElementById('cartShowValueFinal2');
cartShowValueFinal2.textContent = colocarvaloresSeleccionados2.value;
cartShowValueFinal2.value = colocarvaloresSeleccionados2.value;

const cartShowValueFinal3 = document.getElementById('cartShowValueFinal3');
cartShowValueFinal3.textContent = colocarvaloresSeleccionados3.value;
cartShowValueFinal3.value = colocarvaloresSeleccionados3.value;


colocarvaloresSeleccionados.textContent = '+$1/mo'; 
colocarvaloresSeleccionados2.textContent = '+$2/mo'; 
colocarvaloresSeleccionados3.textContent = '+$2/mo'; 

const cartaSeleccionadaTime = document.getElementById('cartaSeleccionadaTime');
cartaSeleccionadaTime.textContent = '(Monthly)';


const timeSelectedTotal = document.getElementById('timeSelectedTotal');
timeSelectedTotal.textContent = 'month';

const totalTimeType = document.getElementById('totalTimeType');
totalTimeType.textContent = 'mo';

const timeFromSelectedPlan = document.getElementById('timeFromSelectedPlan');
timeFromSelectedPlan.textContent = 'mo';

const onlineServiceTime = document.getElementById('onlineServiceTime');
onlineServiceTime.textContent = 'mo';

const largerStorageTime = document.getElementById('largerStorageTime');
largerStorageTime.textContent = 'mo';

const customizableProfileTime = document.getElementById('customizableProfileTime');
customizableProfileTime.textContent = 'mo';


const mySwitch = document.getElementById('mySwitch').addEventListener('change', function(event2) {
    const mySwitch = document.getElementById('mySwitch');

    hideFreeMonths.forEach(function(element) {
        element.classList.toggle('showFreeMonths');
    });

    if (mySwitch.checked) {
        arcadePrice.textContent = '$90/yo';
        advancedPrice.textContent = '$120/yo';
        proPrice.textContent = '$150/yo';

        arcade.value = 90;
        advanced.value = 120;
        pro.value = 150;

        colocarvaloresSeleccionados.textContent = '+$10/yo'; 
        colocarvaloresSeleccionados2.textContent = '+$20/yo'; 
        colocarvaloresSeleccionados3.textContent = '+$20/yo'; 

        colocarvaloresSeleccionados.value = 10;
        colocarvaloresSeleccionados2.value = 20;
        colocarvaloresSeleccionados3.value = 20;

        cartShowValueFinal.textContent = colocarvaloresSeleccionados.value;
        cartShowValueFinal2.textContent = colocarvaloresSeleccionados2.value;
        cartShowValueFinal3.textContent = colocarvaloresSeleccionados3.value;

        cartShowValueFinal.value = colocarvaloresSeleccionados.value;
        cartShowValueFinal2.value = colocarvaloresSeleccionados2.value;
        cartShowValueFinal3.value = colocarvaloresSeleccionados3.value;


        cartaSeleccionadaTime.textContent = '(Yearly)';
        timeSelectedTotal.textContent = 'year';
        totalTimeType.textContent = 'yr';
        timeFromSelectedPlan.textContent = 'yr';

        onlineServiceTime.textContent = 'yr';
        largerStorageTime.textContent = 'yr';
        customizableProfileTime.textContent = 'yr';


    } else {
        arcadePrice.textContent = '$9/mo';
        advancedPrice.textContent = '$12/mo';
        proPrice.textContent = '$15/mo';

        arcade.value = 9;
        advanced.value = 12;
        pro.value = 15;

        colocarvaloresSeleccionados.textContent = '+$1/mo'; 
        colocarvaloresSeleccionados2.textContent = '+$2/mo'; 
        colocarvaloresSeleccionados3.textContent = '+$2/mo';

        colocarvaloresSeleccionados.value = 1;
        colocarvaloresSeleccionados2.value = 2;
        colocarvaloresSeleccionados3.value = 2;

        cartShowValueFinal.textContent = colocarvaloresSeleccionados.value;
        cartShowValueFinal2.textContent = colocarvaloresSeleccionados2.value;
        cartShowValueFinal3.textContent = colocarvaloresSeleccionados3.value;

        cartShowValueFinal.value = colocarvaloresSeleccionados.value;
        cartShowValueFinal2.value = colocarvaloresSeleccionados2.value;
        cartShowValueFinal3.value = colocarvaloresSeleccionados3.value;

        cartaSeleccionadaTime.textContent = '(Monthly)';
        timeSelectedTotal.textContent = 'month';
        totalTimeType.textContent = 'mo';
        timeFromSelectedPlan.textContent = 'mo';
        onlineServiceTime.textContent = 'mo';
        largerStorageTime.textContent = 'mo';
        customizableProfileTime.textContent = 'mo';

    }
});


const changeA = document.getElementById('changeA').addEventListener('click', function(event9){
    event9.preventDefault();

    if (cartaSeleccionadaTime.textContent === '(Monthly)'){
        cartaSeleccionadaTime.textContent = '(Yearly)';
    } else if (cartaSeleccionadaTime.textContent === '(Yearly)'){
        cartaSeleccionadaTime.textContent = '(Monthly)';
    }

    if (onlineServiceTime.textContent === 'mo'){
        onlineServiceTime.textContent = 'yr';
    } else if (onlineServiceTime.textContent === 'yr'){
        onlineServiceTime.textContent = 'mo';
    }

    if (largerStorageTime.textContent === 'mo'){
        largerStorageTime.textContent = 'yr';
    } else if (largerStorageTime.textContent === 'yr'){
        largerStorageTime.textContent = 'mo';
    }

    if (customizableProfileTime.textContent === 'mo'){
        customizableProfileTime.textContent = 'yr';
    } else if (customizableProfileTime.textContent === 'yr'){
        customizableProfileTime.textContent = 'mo';
    }

    if (timeFromSelectedPlan.textContent === 'mo'){
        timeFromSelectedPlan.textContent = 'yr';
    } else if (timeFromSelectedPlan.textContent === 'yr'){
        timeFromSelectedPlan.textContent = 'mo';
    }

    if (timeSelectedTotal.textContent === 'month'){
        timeSelectedTotal.textContent = 'year';
    } else if (timeSelectedTotal.textContent === 'year'){
        timeSelectedTotal.textContent = 'month';
    }

    if (totalTimeType.textContent === 'mo'){
        totalTimeType.textContent = 'yr';
    } else if (totalTimeType.textContent === 'yr'){
        totalTimeType.textContent = 'mo';
    }


    if (colocarvaloresSeleccionados.value = 1){
        colocarvaloresSeleccionados.value = 10;
        colocarvaloresSeleccionados.textContent = '10';
    } else if (colocarvaloresSeleccionados.textContent = '1'){
        colocarvaloresSeleccionados.value = 10;
        colocarvaloresSeleccionados.textContent = '10';
    }


});


const getTotalValue = document.getElementById('getTotalValue');

const valueFromSelectedPlan = document.getElementById('valueFromSelectedPlan');

const formN2 = document.getElementById('formN2').addEventListener('submit', function (event3) {
    event3.preventDefault();

    const errorSelectOne = document.getElementById('errorSelectOne');
    const cartaSeleccionada = document.getElementById('cartaSeleccionada');    

    if (arcade.checked) {

        cartaSeleccionada.textContent = arcade.textContent;
        errorSelectOne.textContent = '';

        index2.classList = 'left-number';
        index3.classList = 'left-number-selected';

        document.getElementById('headerFindH2').textContent = "Pick add-ons";
        document.getElementById('headerFIndP').textContent = "Adds ons help enhance your gaming experience";

        findArticle.classList = 'hide-part';
        findFooter.classList = 'show-part';

        valueFromSelectedPlan.textContent = arcade.value;

        getTotalValue.textContent = valueFromSelectedPlan.textContent;

    } else if (advanced.checked){
     
        cartaSeleccionada.textContent = advanced.textContent;
        errorSelectOne.textContent = '';

        index2.classList = 'left-number';
        index3.classList = 'left-number-selected';

        document.getElementById('headerFindH2').textContent = "Pick add-ons";
        document.getElementById('headerFIndP').textContent = "Adds ons help enhance your gaming experience";

        findArticle.classList = 'hide-part';
        findFooter.classList = 'show-part';

        valueFromSelectedPlan.textContent = advanced.value;

        getTotalValue.textContent = valueFromSelectedPlan.textContent;

    } else if (pro.checked){
      
        cartaSeleccionada.textContent = pro.textContent;
        errorSelectOne.textContent = '';

        index2.classList = 'left-number';
        index3.classList = 'left-number-selected';

        document.getElementById('headerFindH2').textContent = "Pick add-ons";
        document.getElementById('headerFIndP').textContent = "Adds ons help enhance your gaming experience";

        findArticle.classList = 'hide-part';
        findFooter.classList = 'show-part';

        valueFromSelectedPlan.textContent = pro.value;

        getTotalValue.textContent = valueFromSelectedPlan.textContent;

    }
    
    else {
        errorSelectOne.textContent = 'Select one';
        return;
    }
});




const addons1 = document.getElementById('addons1');
const addons2 = document.getElementById('addons2');
const addons3 = document.getElementById('addons3');


const formN3 = document.getElementById('formN3').addEventListener('submit', function(event4){
    event4.preventDefault();

    index3.classList = 'left-number';
    index4.classList = 'left-number-selected';
    const onlineFinalValue = document.getElementById('onlineFinalValue');
    const largerFinalValue = document.getElementById('largerFinalValue');
    const customizableFinalValue = document.getElementById('customizableFinalValue');
   
    const addons = [
        { checkbox: document.getElementById('addons1'), finalValue: document.getElementById('onlineFinalValue') },
        { checkbox: document.getElementById('addons2'), finalValue: document.getElementById('largerFinalValue') },
        { checkbox: document.getElementById('addons3'), finalValue: document.getElementById('customizableFinalValue') }
    ];

    addons.forEach(({ checkbox, finalValue }) => {
        if (checkbox.checked) {
            finalValue.classList = 'last-show';
        } else {
            finalValue.classList = 'last-hide';
        }
    });

    if (addons1.checked){
    } else {
    }

    if (addons2.checked){
    } else {
    }

    if (addons3.checked){
    } else {
    }

    findFooter.classList = 'hide-part';
    findDiv.classList = 'show-div';

    const changeTextH2 = document.getElementById('headerFindH2').textContent = "Finishing up";
    const changeTextP = document.getElementById('headerFIndP').textContent = "Double-check everything looks OK before";


});


const formN4 = document.getElementById('formN4').addEventListener('submit', function(event5){
    event5.preventDefault();

    findDiv.classList = 'hide-part';
    finHeader.classList = 'hide-part';
    findThanks.classList = 'show-thanks';

    const changeTextH2 = document.getElementById('headerFindH2').textContent = "";
    const changeTextP = document.getElementById('headerFIndP').textContent = "";

})


const goBack1 = document.getElementById('goBack1').addEventListener('click', function(event6){
    event6.preventDefault();
    findNav.classList = 'input-neutral';
    findArticle.classList = 'hide-part';
    index1.classList = 'left-number-selected';
    index2.classList = 'left-number';
    const changeTextH2 = document.getElementById('headerFindH2').textContent = "Personal info";
    const changeTextP = document.getElementById('headerFIndP').textContent = "Please provide your name, email address, and phone number.";
});

const goBack2 = document.getElementById('goBack2').addEventListener('click', function(event7){
    event7.preventDefault();

    findFooter.classList = 'hide-part';
    findArticle.classList = 'show-part';

    index2.classList = 'left-number-selected';
    index3.classList = 'left-number';

    const changeTextH2 = document.getElementById('headerFindH2').textContent = "Select your plan";
    const changeTextP = document.getElementById('headerFIndP').textContent = "You have the option of monthly or yearly billing.";

})

const goBack3 = document.getElementById('goBack3').addEventListener('click', function(event8){
    event8.preventDefault();

    findDiv.classList = 'hide-part';
    findFooter.classList = 'show-part';

    index3.classList = 'left-number-selected';
    index4.classList = 'left-number';

    const changeTextH2 = document.getElementById('headerFindH2').textContent = "Pick add-ons";
    const changeTextP = document.getElementById('headerFIndP').textContent = "Adds-ons help enhance your gaming experience.";

})