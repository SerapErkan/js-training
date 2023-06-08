let id = 0;
// todo-1
let todoElement = document.getElementById("todo-1");
todoElement.onclick = addNote;

// todo-2
let todo2Element = document.getElementById("todo-2");
todo2Element.onclick = addFile;

// todo-3
let todo3Element = document.getElementById("todo-3");
todo3Element.onclick = register;

let todo1 = document.getElementById("todo-one");
let todo2 = document.getElementById("todo-two");
let todo3 = document.getElementById("todo-three");

todo1.style.display = "none";
todo2.style.display = "none";
todo3.style.display = "none";





// <<<  todo-3  >>>
function addNote() {

    let todo1 = document.getElementById("todo-one");
    let todo2 = document.getElementById("todo-two");
    let todo3 = document.getElementById("todo-three");
    let todo4 = document.getElementById("todo-four");
    todo4.style.display = "none";

    todo1.style.display = "block";
    todo1.style.opacity = "1";

    todo2.style.display = "none";
    todo3.style.display = "none";

    let divElement = document.createElement("div");
    divElement.id = "note-wrapper-" + id;

    let inputElement = document.createElement("input");
    inputElement.style.width = "50%";
    inputElement.style.height = "50px";
    inputElement.placeholder = "değer ...";
    inputElement.style.borderRadius = "20px";
    inputElement.style.outline = "none";
    inputElement.style.padding = "30px";
    inputElement.style.border = "none";
    inputElement.style.backgroundColor = "#fff"
    inputElement.id = "input-" + id;

    let deleteBtnElement = document.createElement("button");
    deleteBtnElement.className = "btn";
    deleteBtnElement.innerHTML = "&#10006;";
    deleteBtnElement.id = "button-" + id;
    deleteBtnElement.onclick = deleted;
    deleteBtnElement.style.margin = "5px";


    let saveBtnElement = document.createElement("button");
    saveBtnElement.className = "btn";
    saveBtnElement.innerHTML = "&#10004;";
    saveBtnElement.id = "saveButton-" + id;
    saveBtnElement.onclick = save;


    //color added
    let Element = document.getElementById("note");
    Element.style.backgroundColor = "#dbdee7bb";



    id++;

    document.getElementById("note").appendChild(divElement);
    divElement.appendChild(inputElement);
    divElement.appendChild(deleteBtnElement);
    divElement.appendChild(saveBtnElement);


}
function deleted(event) {
    let btnId = event.target.id; //buttun-0
    let id = btnId.split("-")[1];

    let inputEl = document.getElementById("input-" + id);
    inputEl.remove();

    let btnEl = document.getElementById(btnId);
    btnEl.remove();

    let saveButton = document.getElementById("saveButton-" + id);
    saveButton.remove();

    let divElement = document.getElementById("note-wrapper-" + id);
    divElement.remove();



    let inputList = document.querySelectorAll("input");
    console.log(inputList.length);




    //  sıfırsa sil
    if (inputList.length == 0) {


        let divElement = document.getElementById("note");
        divElement.style.backgroundColor = "#fff";

        let todo1 = document.getElementById("todo-one");
        todo1.style.opacity = "0";



    }
    save();


}
function save() {

    let deletedDiv = document.getElementById("save");
    if (deletedDiv) {
        deletedDiv.remove();
    }

    let inputDiv = document.getElementById("note");
    let inputList = inputDiv.querySelectorAll("input");

    let values = [];
    for (var x of inputList) {
        if (!values.includes(x.value)) {
            values.push(x.value);
        }
    }
    console.log(values);

    let divElement = document.createElement("div");
    divElement.id = "save";
    divElement.width = "100%";

    divElement.style.padding = "20px";
    divElement.style.borderRadius = "20px";
    document.getElementById("notes").appendChild(divElement);

    values.forEach(element => {
        let pElement = document.createElement("p");
        pElement.innerHTML = element;
        pElement.style.background = "#dbdee7bb";
        pElement.className = "text-center fw-7 font-lg text-white "
        pElement.style.borderRadius = "20px";
        pElement.style.margin = "10px";
        divElement.appendChild(pElement);

    });

}




// <<<  todo-2  >>>
function addFile() {

    let todo1 = document.getElementById("todo-one");
    let todo2 = document.getElementById("todo-two");
    let todo3 = document.getElementById("todo-three");
    let todo4 = document.getElementById("todo-four");
    todo4.style.display = "none";

    todo1.style.display = "none";
    todo2.style.display = "block";
    todo3.style.display = "none";


    let divElement = document.createElement("div");
    divElement.style.padding = "20px";
    divElement.id = "file-wrapper-" + id;
    divElement.className = "text-center"
    divElement.style.backgroundColor = "#dbdee7bb";
    divElement.style.margin = "5rem";

    let FinputElement = document.createElement("input");
    FinputElement.placeholder = "değer ...";
    FinputElement.style.padding = "30px";
    FinputElement.style.color = "#141414";
    FinputElement.type = "file";
    FinputElement.id = "input-" + id;

    let deleteBtnElement = document.createElement("button");
    deleteBtnElement.className = "btn";
    deleteBtnElement.innerHTML = "&#10006;";
    deleteBtnElement.id = "button-" + id;
    deleteBtnElement.onclick = deletedFile;
    deleteBtnElement.style.margin = "5px";

    let saveBtnElement = document.createElement("button");
    saveBtnElement.className = "btn";
    saveBtnElement.innerHTML = "&#10004;";
    saveBtnElement.id = "saveButton-" + id;
    saveBtnElement.onclick = saveFile;



    let Element = document.getElementById("todo-two");
    // Element.style.backgroundColor="#dbdee7bb";
    id++;

    document.getElementById("todo-two").appendChild(divElement);
    divElement.appendChild(FinputElement);
    divElement.appendChild(deleteBtnElement);
    divElement.appendChild(saveBtnElement);


}
function deletedFile(event) {
    let btnId = event.target.id; //buttun-0
    let id = btnId.split("-")[1];
    let todo2 = document.getElementById("todo-two")

    let inputEl = document.getElementById("input-" + id);
    inputEl.remove();

    let btnEl = document.getElementById(btnId);
    btnEl.remove();

    let saveButton = document.getElementById("saveButton-" + id);
    saveButton.remove();

    let divElement = document.getElementById("file-wrapper-" + id);
    divElement.remove();

}
function saveFile(event) {


    let search = document.getElementById("todo-two");
    let fileInputList = search.querySelectorAll("input");
    let values = [];
    for (var x of fileInputList) {
        if (!values.includes(x.files[0])) {
            values.push(x.files[0]);
        }
    }
    console.log(values);


    //deneme 
    let btnId = event.target.id;
    let id = btnId.split("-")[1];

    let fileInput = document.getElementById("input-" + id);

    let file = fileInput.files[0]; // Seçilen dosya

    let reader = new FileReader();

    reader.onload = function (e) {
        let image = document.createElement("img");
        image.id = "imgFile";
        image.src = e.target.result;
        image.style.width = "200px";
        image.style.borderRadius = "50%";
        image.accept = "image/*";

        let targetDiv = document.getElementById("file-wrapper-" + id); // Resmi eklemek istediğiniz HTML elementinin ID'si
        let existingImage = targetDiv.querySelector("img"); // Önceki resim elementini seç

        if (existingImage) {
            targetDiv.replaceChild(image, existingImage); // Önceki resmi yenisiyle değiştir
        } else {
            targetDiv.appendChild(image); // Önce resim yoksa yeni resmi ekle
        }
    };

    reader.readAsDataURL(file);














}



// <<<  todo-3  >>>
let nameInput = document.createElement("input");
let passwordInpur = document.createElement("input");
let divElement = document.createElement("div");
let saveBtnElement = document.createElement("button");
let loginBtnElement = document.createElement("button");
function register() {

    let todo1 = document.getElementById("todo-one");
    let todo2 = document.getElementById("todo-two");
    let todo3 = document.getElementById("todo-three");
    let todo4 = document.getElementById("todo-four");

    todo1.style.display = "none";
    todo2.style.display = "none";
    todo3.style.display = "block";
    todo4.style.display = "none";


    divElement.id = "register-wrapper";
    divElement.style.backgroundColor = "#e9e9e9";
    divElement.className = "mx-auto text-center"
    divElement.style.width = "800px";
    divElement.style.padding = "5rem";
    divElement.style.borderRadius = "20px";




    //button 
    saveBtnElement.className = "btn mx-auto ";
    saveBtnElement.innerHTML = "img Added";
    saveBtnElement.id = "saveButton-" + id;
    saveBtnElement.onclick = imgAdd;
    saveBtnElement.style.width = "70%"
    saveBtnElement.style.borderRadius = "10px"
    saveBtnElement.style.display = "block"

    loginBtnElement.className = "btn mx-auto ";
    loginBtnElement.innerHTML = "Login ...";
    loginBtnElement.id = "saveButton-" + id;
    // loginBtnElement.onclick = login;
    loginBtnElement.style.width = "70%"
    loginBtnElement.style.borderRadius = "10px"
    loginBtnElement.style.display = "block"
    loginBtnElement.style.margin = "5rem"





    //önceden olusturdum 
    nameInput.style.width = "70%";
    nameInput.style.height = "40px";
    nameInput.id = "nameInput";
    nameInput.style.backgroundColor = "#fff";
    nameInput.placeholder = "UserName...";
    nameInput.style.borderRadius = "5px";
    nameInput.style.border = "none";
    nameInput.style.outline = "none";
    nameInput.style.padding = "30px";
    nameInput.style.margin = "2rem";
    nameInput.type = "text";




    //önceden olusturdum 
    passwordInpur.style.width = "70%";
    passwordInpur.style.height = "40px";
    passwordInpur.id = "passwordInput";
    passwordInpur.style.backgroundColor = "#fff";
    passwordInpur.placeholder = "Password..";
    passwordInpur.style.borderRadius = "5px";
    passwordInpur.style.border = "none";
    passwordInpur.style.outline = "none";
    passwordInpur.style.padding = "30px";
    passwordInpur.style.margin = "2rem";
    passwordInpur.type = "password";

    todo3.appendChild(divElement);
    divElement.appendChild(nameInput);
    divElement.appendChild(passwordInpur);
    divElement.appendChild(saveBtnElement);
    divElement.appendChild(loginBtnElement);

}

function imgAdd() {

    let fileDiv = document.getElementById("register-wrapper");
    let inputElement = document.createElement("input");

    let divImg = document.createElement("div");
    divImg.id = "div-" + id;
    divImg.backgroundColor = "red";


    inputElement.style.width = "70%";
    inputElement.style.height = "50px";
    inputElement.placeholder = "değer ...";
    inputElement.style.borderRadius = "20px";
    inputElement.style.outline = "none";
    inputElement.style.padding = "30px";
    inputElement.style.border = "none";
    inputElement.style.backgroundColor = "#fff"
    inputElement.id = "input-" + id;
    inputElement.type = "file";
    inputElement.style.backgroundColor = "transparent";



    let deleteBtnElement = document.createElement("button");
    deleteBtnElement.className = "btn";
    deleteBtnElement.innerHTML = "&#10006;";
    deleteBtnElement.id = "button-" + id;
    deleteBtnElement.onclick = deletedImgFx;
    deleteBtnElement.style.margin = "3px";

    let saveBtnElement = document.createElement("button");
    saveBtnElement.className = "btn";
    saveBtnElement.innerHTML = "&#10004;";
    saveBtnElement.id = "saveButton-" + id;
    saveBtnElement.onclick = saveImgFx;



    let x = fileDiv.querySelectorAll("div");
    // console.log(x);


    if (x.length < 3) {
        // ilk çocuk olarak ekler 
        fileDiv.insertBefore(divImg, fileDiv.firstChild);
        divImg.appendChild(inputElement);
        divImg.appendChild(deleteBtnElement);
        divImg.appendChild(saveBtnElement);
        id++
    }
    else {
        alert("sadece 3 img eklene bilir");

    }





}

function deletedImgFx(event) {
    // x tıkladıgında divleri ve herseyi sil 
    let btnId = event.target.id; //buttun-0
    let id = btnId.split("-")[1];

    let inputEl = document.getElementById("input-" + id);
    inputEl.remove();

    let btnEl = document.getElementById(btnId);
    btnEl.remove();

    let saveButton = document.getElementById("saveButton-" + id);
    saveButton.remove();

    let deletDiv = document.getElementById("div-" + id);
    deletDiv.remove();


}

function saveImgFx(event) {
    let btnId = event.target.id;
    let id = btnId.split("-")[1];

    let fileInput = document.getElementById("input-" + id);

    let file = fileInput.files[0]; // Seçilen dosya

    let reader = new FileReader();

    reader.onload = function (e) {
        let image = document.createElement("img");
        image.id = "imgFile";
        image.src = e.target.result;
        image.style.width = "200px";
        image.style.borderRadius = "50%";
        image.accept = "image/*";

        let targetDiv = document.getElementById("div-" + id); // Resmi eklemek istediğiniz HTML elementinin ID'si
        let existingImage = targetDiv.querySelector("img"); // Önceki resim elementini seç

        if (existingImage) {
            targetDiv.replaceChild(image, existingImage); // Önceki resmi yenisiyle değiştir
        } else {
            targetDiv.appendChild(image); // Önce resim yoksa yeni resmi ekle
        }
    };

    reader.readAsDataURL(file);
}




// <<<  todo-4  >>>

let todo4 = document.getElementById("todo-4");
todo4.onclick = addTodo;

let todoInput = document.createElement("input");
let todoBtnSave = document.createElement("button");
let todoDivInput = document.createElement("div");


function addTodo() {

    let todo1 = document.getElementById("todo-one");
    let todo2 = document.getElementById("todo-two");
    let todo3 = document.getElementById("todo-three");
    let todo4 = document.getElementById("todo-four");
    todo4.style.display = "block";
    todo1.style.display = "none";
    todo2.style.display = "none";
    todo3.style.display = "none";




    let todoWrapper = document.getElementById("todo-four");
    todoWrapper.style.marginTop = "100px";
    todoWrapper.style.marginBottom = "100px";
    // todoWrapper.style.height = "100vh";
    todoWrapper.style.backgroundColor = "#393939";
    todoWrapper.style.borderRadius = "20px";
    todoWrapper.style.padding = "100px";

    //div
    todoDivInput.id = "todoDivInput-" + id;
    todoDivInput.className = "text-center flex";



    //input
    todoInput.id = "todoInput-" + id;
    todoInput.style.width = "50%";
    todoInput.style.height = "20px";
    todoInput.placeholder = "to do added ...";
    todoInput.style.borderRadius = "20px 0px 0px 20px";
    todoInput.style.outline = "none";
    todoInput.style.padding = "30px";
    todoInput.style.border = "none";
    todoInput.style.backgroundColor = "#fff"
    // todoInput.style.marginRight = "1rem";


    //added
    todoBtnSave.id = "todoBtnSave-" + id;
    todoBtnSave.className = "btn";
    todoBtnSave.style.height = "60px";
    todoBtnSave.style.width = "80px";
    // todoBtnSave.style.margin = "0 2rem";
    todoBtnSave.innerHTML = "&#10004;";
    // todoBtnSave.style.margin = "5px";
    todoBtnSave.onclick = saveTodo;
    todoBtnSave.style.borderRadius = "0px 20px 20px 0px";




    //ilk element ekler
    todoWrapper.insertBefore(todoDivInput, todoWrapper.firstChild);
    todoDivInput.appendChild(todoInput);
    todoDivInput.append(todoBtnSave);

}

function saveTodo() {
    let todoWrapper = document.getElementById("todo-four");

    let todoDivTitle = document.createElement("div");
    let todoTitle = document.createElement("p");
    let todoBtnDiv = document.createElement("div");
    let todoBtnEdit = document.createElement("button");
    let todoBtnDelete = document.createElement("button");



    //tek input-id sabit
    // let saveID = event.target.id;
    // let id = saveID.split("-")[1];
    // console.log(id);
    let values = [];

    let inputSave = document.getElementById("todoInput-" + 0);
    let value = inputSave.value;
    console.log(value);

    //p

    todoTitle.innerHTML = value;
    todoTitle.id = "todoTitle-" + id;
    todoTitle.style.padding = "25px";
    todoTitle.style.width = "100%"
    todoTitle.style.overflow = "hidden";
    todoTitle.style.margin = "20px";


    //div-wrapper
    todoDivTitle.id = "todoDivTitle-" + id;
    todoDivTitle.className = "text-white fw-7 font-lg flex bg-theme-1";
    todoDivTitle.style.justifyContent = "space-between";
    todoDivTitle.style.marginTop = "50px";
    todoDivTitle.style.width = "100%";
    todoDivTitle.style.height = "70%";
    todoDivTitle.style.position = "relative"
    todoDivTitle.style.borderRadius = "20px";


    //ntn-div-wrapper
    todoBtnDiv.id = "todoBtnDiv-" + id;
    todoBtnDiv.style.position = "absolute"
    todoBtnDiv.style.top = "20%";
    todoBtnDiv.style.right = "0";
    todoBtnDiv.style.marginRight = "20px";



    // delet btn
    todoBtnDelete.id = "todoBtnDelete-" + id;
    todoBtnDelete.className = "btn";
    todoBtnDelete.style.backgroundColor = "#fff";
    todoBtnDelete.style.color = "red";
    todoBtnDelete.style.margin = "0 2rem";
    todoBtnDelete.innerHTML = "&#10006;";
    todoBtnDelete.style.margin = "5px";
    todoBtnDelete.onclick = todoBtnDeleteFx;

    //edit btn 
    todoBtnEdit.id = "todoBtnEdit-" + id;
    todoBtnEdit.className = "btn";
    todoBtnEdit.style.margin = "0 2rem";
    todoBtnEdit.innerHTML = "&#9998;";
    todoBtnEdit.style.margin = "5px";
    todoBtnEdit.style.backgroundColor = "#fff";
    todoBtnEdit.style.color = "#23be30";
    todoBtnEdit.onclick = todoBtnEditFx;

    id++

    let wrappertodo = document.getElementById("todo-four");
    let pList = wrappertodo.querySelectorAll("p");
    // console.log("P", pList, pList.length > 0);


    if (value == "") {
        alert("Add a note");
    }


    else if (pList.length == 0) {

        values.push(value);
        todoWrapper.appendChild(todoDivTitle);
        todoDivTitle.append(todoTitle, todoBtnDiv);
        todoBtnDiv.append(todoBtnDelete, todoBtnEdit);
    }

    else if (pList.length > 0) {


        for (var x of pList) {
            values.push(x.innerHTML);
        }

        if (!values.includes(value)) {
            values.push(value);
            todoWrapper.appendChild(todoDivTitle);
            todoDivTitle.append(todoTitle, todoBtnDiv);
            todoBtnDiv.append(todoBtnDelete, todoBtnEdit);

        }
        else {
            alert("I can't add the same value");
            console.log("I can't add the same value");
        }

    }


    inputSave.value = "";

}

function todoBtnDeleteFx(event) {
    //id yakala 
    let deleteID = event.target.id;
    let id = deleteID.split("-")[1];
    console.log(id);

    //silinecekler elmentler 
    let todoDivTitle = document.getElementById("todoDivTitle-" + id);
    let todoTitle = document.getElementById("todoTitle-" + id);
    let todoBtnDiv = document.getElementById("todoBtnDiv-" + id);
    let todoBtnEdit = document.getElementById("todoBtnEdit-" + id);
    let todoBtnDelete = document.getElementById("todoBtnDelete-" + id);

    todoTitle.remove();
    todoBtnDelete.remove();
    todoBtnDiv.remove();
    todoBtnEdit.remove();
    todoDivTitle.remove();
}


function todoBtnEditFx(event) {

    let EditID = event.target.id;
    let id = EditID.split("-")[1];
    console.log(id);

    // tıklanılan değeri getir 
    let todoTitle = document.getElementById("todoTitle-" + id);
    let title = todoTitle.innerHTML;



    let editInput = document.getElementById("todoInput-0");
    editInput.value = title;

    todoBtnDeleteFx(event);

}






//theme-1
let theme1 = document.getElementById("theme-1");
theme1.onclick = themeOne;

function themeOne() {
    document.documentElement.style.setProperty('--theme-1', '#476edb');
}
//theme-2
let theme2 = document.getElementById("theme-2");
theme2.onclick = themeTwo;

function themeTwo() {
    document.documentElement.style.setProperty('--theme-1', '#eb5628');
}
//theme-3
let theme3 = document.getElementById("theme-3");
theme3.onclick = theme;

function theme() {
    document.documentElement.style.setProperty('--theme-1', '#23be30');
}


// Not
// var checkboxes = myList.querySelectorAll("input[type='checkbox']:checked");