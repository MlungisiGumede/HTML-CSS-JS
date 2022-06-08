//make a variable first with array
var ModuleInfo = [];
var TaskArray = []
var TodoArray = [];

var ModKey = "Modules";

//create function to add customers making the button work

function AddModule() {
    var ModuleCode = document.querySelector("#ModuleCode").value;
    // created variable that uses queryselector could have used getelementbyID 
    console.log(ModuleCode);
    var ModuleLecturer = document.querySelector("#ModuleLecturer").value;
    console.log(ModuleLecturer);
    // created variable that uses queryselector could have used getelementbyID 

    document.querySelector("#ModuleCode").value = "";


    document.querySelector("#ModuleLecturer").value = "";

    var Timestamp = Date.now(); // get timestamp
    //Built in function to push data into the table
    ModuleInfo.push({ stamp: Timestamp, Code: ModuleCode, Lecturer: ModuleLecturer });

    console.log(ModuleInfo);
    // why is data not being pushed in?
    // document.getElementById("") = "modTableBody";
    AddTable();
}

function AddTable() {

    var Tablebody = document.querySelector('#modTableBody');
    Tablebody.innerHTML = "";
    for (var i = 0; i < ModuleInfo.length; i++) {
        Tablebody.innerHTML +=
            `<tr>
        <td> ${ModuleInfo[i].Code}</td>
        <td>${ModuleInfo[i].Lecturer}</td>
      
        </tr>`

    }
}

function AddTask() {

    var TaskName = document.querySelector("#TaskName").value;

    console.log(TaskName);

    var TaskDate = document.querySelector("#TaskDueDate").value;
    console.log(TaskDate);

    document.querySelector("#TaskName").value = "";

    document.querySelector("#TaskDueDate").value = "";

    TaskArray.push({ task_name: TaskName, task_date: TaskDate });
    console.log(TaskArray);

    AddTableTask();

}

function AddTableTask() {
    var TablebodyTask = document.querySelector('#TaskTableBody');
    TablebodyTask.innerHTML = "";

    for (var j = 0; j < TaskArray.length; j++) {
        TablebodyTask.innerHTML +=
            `<tr>
        <td> ${TaskArray[j].task_name}</td>
        <td>${TaskArray[j].task_date}</td>
      
        </tr>`

    }
}



function AddTodoList() {

    var ModuleCode = document.querySelector("#ModuleCode").value;
    // created variable that uses queryselector could have used getelementbyID 
    console.log(ModuleCode);
 
   var populatedrop =  document.getElementById("ModuleCode");

   populatedrop.innerHTML = "Option1";
   console.log(populatedrop);



    var TaskName = document.querySelector("#TaskName").value;

    console.log(TaskName);


    var TaskDate = document.querySelector("#TaskDueDate").value;
    console.log(TaskDate);

    var Description = document.querySelector("#Description").value;
    console.log(Description);


    document.querySelector("#ModuleCode").value = "";


    document.querySelector("#TaskName").value = "";

    document.querySelector("#TaskDueDate").value = "";


    document.querySelector("#Description").value = "";


    TodoArray.push({ Code: ModuleCode, task_name: TaskName, Descr: Description, task_date: TaskDate })
    console.log(TodoArray);

    AddTodoTable();

}

function AddTodoTable() {

    var TablebodyTodo = document.querySelector('#TaskTableBodyTodo');
    TablebodyTodo.innerHTML = "";

    for (var k = 0; k < TodoArray.length; k++) {

        TablebodyTodo.innerHTML +=
            `<tr>
        <td>${ModuleInfo[k].Code}</td>
        <td>${TaskArray[k].task_name} </td>
        <td>${TodoArray[k].Descr}</td>
        <td>${TaskArray[k].task_date} </td>
      
        </tr>`

    }


}