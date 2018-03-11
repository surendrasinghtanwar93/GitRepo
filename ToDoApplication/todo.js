
function addTask(){
    var textInput = document.getElementById("tb1");

    console.log("textinputqqqqqqqqqqqq",textInput.value);

    if(textInput.value == undefined || textInput.value==""){
        console.log(textInput.value);
        alert("Please enter any value");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = checkBoxChange;

    var label = document.createElement("label");
    label.innerText = textInput.value;

    var inputbox = document.createElement("input");
    inputbox.type = "text";
    inputbox.disabled = true;

    var edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.onclick = editTask;
    edit.className = "edit";

    var delete1 = document.createElement("button");
    delete1.innerText = "Delete";
    delete1.onclick = deleteTask;

    var ul = document.getElementById("incompletdTask");

    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(inputbox);
    li.appendChild(edit);
    li.appendChild(delete1);

    textInput.value = "";
}

function deleteTask(){
    console.log(this);
    var listIt = this.parentNode;

    console.log("Delete button clicked");
    console.log(listIt);

    var ul = listIt.parentNode;
    console.log(ul);

    ul.removeChild(listIt);
}

function editTask(){
    var listIt = this.parentNode;
    var editButton=listIt.querySelector('.edit');

    console.log(listIt);
    if (editButton.innerText==="Edit"){
        // console.log("edit button clicked");
        var editInput=listIt.querySelector('input[type=text]');
        var label = listIt.querySelector('label');

        console.log(editInput, "label", label.innerText, "editInput.innerText",editInput.innerText, "editButton", editButton, editButton.innerText);
        editInput.disabled = false;
        editInput.value = label.innerText;
        editButton.innerText = "Save";
    } else if(editButton.innerText==="Save"){
        console.log("save button clicked");

        var editInput=listIt.querySelector('input[type=text]');
        var label = listIt.querySelector('label');

        editInput.disabled = true;
        label.innerText = editInput.value;
        editInput.value = "";
        editButton.innerText = "Edit";

    }
}

function checkBoxChange(){
    console.log("checkbox clicked", this.checked);
    var cbList = this.parentNode;

    if (this.checked){
        var completdTask = document.getElementById("completdTask");
        completdTask.appendChild(cbList);
    } else {
        console.log("task not over");
        var completdTask = document.getElementById("incompletdTask");
        completdTask.appendChild(cbList);
    }
}

var addButton = document.getElementById("inButton1");

addButton.onclick = addTask;


var deleteList = document.getElementsByClassName("delete");
// console.log("qqqqqqqqq",deleteList, deleteList.length);

 for (var i=0; i< deleteList.length; i++){
    //  console.log("wwwwwwwwww",i,deleteList[i]);

     deleteList[i].onclick = deleteTask;
 }

 var editList = document.getElementsByClassName("edit");
//  console.log("11111111111",editList, editList.length);

 for (var i=0; i< editList.length; i++){
    //  console.log("22222222222",i,editList[i]);

     editList[i].onclick = editTask;
 }

 var cb1 = document.getElementsByClassName("cb");
 
 for (var i=0; i< cb1.length; i++){
    //  console.log("22222222222",i,editList[i]);

    cb1[i].onchange = checkBoxChange;
 }