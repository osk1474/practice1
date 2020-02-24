const hello = document.querySelector('.hello');
const input = hello.querySelector('input');
const yoMan = document.querySelector('.yoMan');

const yourName = 'currentUser'
const SHOW_CN = 'show'

function saveName(text){
    localStorage.setItem(yourName, text);
}

function handleEvent(event){
    event.preventDefault();
    const currentValue = input.value;
    helloYo(currentValue);
    saveName(currentValue);
}

function askName(){
    yoMan.classList.add(SHOW_CN);
    hello.classList.remove(SHOW_CN);
    hello.addEventListener("submit", handleEvent)
}
//not input but form.

function helloYo(text){
    input.classList.add(SHOW_CN);
    yoMan.classList.remove(SHOW_CN);
    yoMan.innerText = `Nice to meet you! ${text}`
}

function checkLS(){
    const nowName = localStorage.getItem(yourName)
    if (nowName !== null){
        helloYo(nowName);
    } else {
        askName();
    }
}

function init() {
   checkLS()
}

init();

//1. do you have name in LS?
//2. no? take name / yes? helloYo
//3. take name and save in LS