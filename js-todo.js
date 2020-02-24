const toDoForm = document.querySelector('.toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.toDoList');

const TODOS_LS = 'toDos'
let toDos= [];
//filter랑 foreach를 기억합세.

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li)
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

        toDos = cleanToDos
        saveToDos()
    
    //console.dir -> property
    //filter는 array의 모든 아이템을 통해 함수를 실행하고
    //그리고 true인 아이템들만 가지고 새로운 array를 만들고
    //foreach
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
    //localStorage must save 'string'!
}

function paintToDo(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement("button");
    const leftSide = 'leftSide'
    const newId = toDos.length + 1
    delBtn.innerText = '✖️'
    delBtn.addEventListener('click', deleteToDo)
    span.innerText = text
    li.appendChild(delBtn);
    li.appendChild(span);
    li.classList.add(leftSide)
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    //save -> push or push -> save! take order!
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function something(sth) {
    paintToDo(sth.text);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(something)
        //foreach => each element do something in array!
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init()