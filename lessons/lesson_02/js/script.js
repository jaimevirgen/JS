var addBtn = document.getElementById('addButton');

addBtn.addEventListener('click', function(){

    var ul = document.getElementById("todoList");
    var li = document.createElement("li");
    var inputVal = document.getElementById('addItemInput').value;
    li.appendChild(document.createTextNode(inputVal));
    ul.appendChild(li);

});
