var list = document.getElementById("list");

function addtodo(){
    var todo_item = document.getElementById("todo-item");
     //create list item
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value))
    //console.log(li)
     // create delete button
     var deleteButton = document.createElement("button");
     var deltext = document.createTextNode('delete');
     deleteButton.setAttribute("onclick","deleteitems(this)")
     deleteButton.appendChild(deltext);

     li.appendChild(deleteButton);
     
     // create edit button
     var editbtn = document.createElement('button');
     var edittxt = document.createTextNode("Edit");
     editbtn.setAttribute("onclick","editItems()") 

     editbtn.appendChild(edittxt);
     li.appendChild(editbtn);
    // console.log(li)

     list.appendChild(li);
}

function deleteitems(e){
    e.parentNode.remove()
}

function editItems(e) {
  //console.log(e.parentNode,firstChild)


  var value = e.parentNode.firstChild.value
  var editedvalue = prompt("Enter edit value",value)
  e.parentNode.firstChild.nodeValue=editedvalue;
}

function deleteall(){
    list.innerHTML=""
}