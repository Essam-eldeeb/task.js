let taskinput = document.getElementById("inputdata");
let addbtn= document.getElementById("addbtn");
let notask = document.getElementById("notask");
let alltasks= document.getElementById("alltasks");
let button = document.getElementById("remove")
let div = document.getElementsByClassName("delet")

let addtask = ()=>{
    taskdata=taskinput.value;
    if(taskdata.trim() == ""  || taskinput.value.length < 3){
      if(taskdata.trim()==""){      alert("you must inter data");
    }
    if(taskinput.value.length<3){
      alert("you must inter data bigger than 3 letter")
    }
    }else{   
      notask.remove();

       alltasks.innerHTML+=`<div class="alert alert-info delet" > ${taskdata}
    <buttom  id="remove" class="btn btn-danger float-right p-1 remove">remove</buttom>
    </div>`


    }
    // // alltasks.innerText=taskdata;
    // newdiv=document.createElement("div");
    // // newdiv.classlist = "alert alert-danger";

    
    // newdiv.setAttribute("class","alert alert-info");
    // deletbtn=document.createElement("button");
    // // deletbtn.classList="btn btn-danger";
    // deletbtn.setAttribute("class","btn btn-danger");
    // newdiv.append(deletbtn)

    // deletbtn.append("remove");
    // newdiv.append(taskdata);
    // alltasks.append(newdiv)
}


  addbtn.addEventListener("click",addtask);

  // button.onclick= function(){
  //   alltasks.remove();
  // }

  let removedata = ()=>{
   alltasks.innerText= ""
  }

  button.addEventListener("click",removedata)
