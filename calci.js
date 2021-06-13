screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let ScreenValue = "";
for (item of button) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log(buttontext);

        if (buttontext == 'X') {
            buttontext = "*";
            ScreenValue += buttontext;
            screen.value = ScreenValue;
        }
        else if (buttontext == 'C') {
            ScreenValue = "";
            screen.value = ScreenValue;
        }
        else if (buttontext == '=') {
            screen.value = eval(ScreenValue);
        }
        else {
            ScreenValue += buttontext;
            screen.value = ScreenValue;

            
        }
    })
}