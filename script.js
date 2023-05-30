function myalert(){
	alert("Hello World!");
}

function myconfirm(){
	let save= confirm("Are you sure you want to save this data?");
}

function myprompt(){
	let name= prompt("Enter your name");
}

// If else example

function ifElse(){
    let age = prompt("Enter your Age");
    if (age == null || age == ""){
         alert("Please enter your age!");
     } else {
         alert("Your age is :" + age);
      }
 }

 function ifElifElse(){
 	let age = prompt("Enter your Age");
    if (age == null || age == ""){
         alert("Please enter your age!");
     } else if (age > 18) {
         alert("Your are an adult");
      }
      else{
      	alert("You are still young")
      }
 }

function nested(){
        let yourAge = prompt("What is your your age?");


    if (yourAge >= 18) { 
       let gender = prompt("What is your gender? (M/F)");

      if (gender.toUpperCase()=="M"){
        alert("You are allowed to grow your beard or mustaches.");
      }

    else if (gender.toUpperCase() == "F"){
        alert("You are allowed to wear makeup.");
      } 
      else {
        alert("Invalid gender input.");
      }
    } 

    else if (yourAge < 18){
      let gender = prompt("What is your gender? (M/F)");

      if (gender.toUpperCase()=="F"){
        alert("You are not allowed to wear earrings.");
      } 
      else if (gender.toUpperCase() == "F"){
        alert("You are not allowed to wear short skirts.");
      } 
      else {
        alert("Invalid gender input.");
      }
    }

    else{
      alert("Invalid yourAge input");
    }
}


//arithmetic examples

function Addition() {
	let x = parseInt(prompt("Enter First Integer:"));
	let y = parseInt(prompt("Enter Second Integer:"));
	alert(x + y);
}

 function Subtraction() {
    let x = parseInt(prompt("Enter First Integer:"));
    let y = parseInt(prompt("Enter Second Integer:"));
    alert(x - y);
    }

function Multiplication() {
    let x = parseInt(prompt("Enter First Integer:"));
    let y = parseInt(prompt("Enter Second Integer:"));
    alert(x * y);
    }

function Division() {
    let x = parseInt(prompt("Enter First Integer:"));
    let y = parseInt(prompt("Enter Second Integer:"));
    alert(x / y);
    }

// function mypush(){
//   let color = ['Pink', 'Purple', 'Gray'];
//   color.push("White");
//   alert(color);
// }

// function mypop(){
//   let color = ['Pink', 'Purple', 'Gray'];
//   color.pop();
//   alert(color);
// }

// function myunshift(){
//   let color = ['Pink', 'Purple', 'Gray'];
//   color.unshift("Black");
//   alert(color);
// }

// function myshift(){
//   let color = ['Pink', 'Purple', 'Gray'];
//   color.shift();
//  alert(color);
  
// }



let myArray = ['Ford', 'Volvo'];

function addItem() {

  console.log(myArray.length);

  if (myArray.length < 10){
    let input = document.getElementById("input").value;
    myArray.push(input);
  }
  else{
    alert("You cannot add, Maximum limit reached!");
  }
  
  displayList();
}


function removeFirst() {
  myArray.shift();
  displayList();
}

function removeLast() {
  myArray.pop();
  displayList();
}

function addFirst(){
        const newBrand= prompt("Insert new brand to the first");
        myArray.unshift(newBrand);
       displayList();
}



function addLast(){
        const newBrand= prompt("Insert new brand to the last");
        myArray.push(newBrand);
     displayList();
}


function displayList() {
  let list = document.getElementById("myList");
  list.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(myArray[i]));
    list.appendChild(item);
  }
}


displayList();






























































