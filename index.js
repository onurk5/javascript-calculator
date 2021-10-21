const display = document.getElementById('display');

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';//silindi
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "hatalı giriş"
                }
                break;
            default:
                display.innerText += e.target.innerText;
                
        }
    });
});