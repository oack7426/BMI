var Submit = document.querySelector('.submit');

var Height = document.querySelector('.height');
var Weight = document.querySelector('.weight');
Submit.addEventListener('click', function() {
    var HeightNum = parseInt(Height.value);
    var WeightNum = parseInt(Weight.value);
    var BMI = WeightNum / ((HeightNum * 0.01) * (HeightNum * 0.01));
    if (BMI < 18.5) {
        document.querySelector('.bmi_show h3').innerHTML = '體重過輕';
    } else if (18.5 <= BMI, BMI < 24) {
        document.querySelector('.bmi_show h3').innerHTML = '體重正常';
    } else {
        document.querySelector('.bmi_show h3').innerHTML = '體重過重';
    }
    document.querySelector('.bmi_show span').innerHTML = BMI.toFixed(1);
}, false);