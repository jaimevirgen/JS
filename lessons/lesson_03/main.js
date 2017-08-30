

var reOrder = document.getElementById('ReOrder');
var addBtn = document.getElementById('addNewInteger');
var listElement = document.getElementById("originalList");
var listOfNumbers = [1,100,20,300,17,69];

// attach original list of numbers to input box
listElement.appendChild(document.createTextNode(listOfNumbers));


reOrder.addEventListener('click', function(){

    reOrder(listOfNumbers);

});

addBtn.addEventListener('click', function(){

    // Get Text from input
    // then add to listOfNumbers
    // then re-Order with new number list
    // update the h4 displayed list of numbers in correct order

    reOrder(listOfNumbers);

});


function reOrder(arrayList) {

    // logic to order Any given array list of integers
    // *return* given new array in correct order from smallest to largest integer


}