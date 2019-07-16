function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


// Slider

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// Home Button Function

let home = () =>{
  document.getElementById(`home`).style.display =  `block`
  document.getElementById(`about`).style.display =  `none`
  document.getElementById(`contact`).style.display =  `none`
  document.getElementById(`attendance`).style.display =  `none`
  document.getElementById(`card`).style.display =  `none`


}

let attend = () =>{
  document.getElementById(`home`).style.display =  `none`
  document.getElementById(`about`).style.display =  `none`
  document.getElementById(`contact`).style.display =  `none`
  document.getElementById(`attendance`).style.display =  `block`
  document.getElementById(`card`).style.display =  `none`

}


// About Us Function 

let about = () =>{
  document.getElementById(`home`).style.display =  `none`
  document.getElementById(`about`).style.display =  `block`
  document.getElementById(`contact`).style.display =  `none`
  document.getElementById(`attendance`).style.display =  `none`
  document.getElementById(`card`).style.display =  `none`


}


// Contact Us Function 

let contact = () =>{
  document.getElementById(`home`).style.display =  `none`
  document.getElementById(`about`).style.display =  `none`
  document.getElementById(`contact`).style.display =  `block`
  document.getElementById(`attendance`).style.display =  `none`
  document.getElementById(`card`).style.display =  `none`


}


// Attendance Fucntion

let attendance = () => {
  document.getElementById(`home`).style.display =  `none`
  document.getElementById(`about`).style.display =  `none`
  document.getElementById(`contact`).style.display =  `none`
  document.getElementById(`attendance`).style.display =  `block`
  document.getElementById(`card`).style.display =  `none`


}

let ai = () => {
  document.getElementById(`home`).style.display =  `none`
  document.getElementById(`about`).style.display =  `none`
  document.getElementById(`contact`).style.display =  `none`
  document.getElementById(`attendance`).style.display =  `none`
  document.getElementById(`card`).style.display =  `block`
}


let bc = () => {
  document.getElementById(`home`).style.display =  `none`
  document.getElementById(`about`).style.display =  `none`
  document.getElementById(`contact`).style.display =  `none`
  document.getElementById(`attendance`).style.display =  `none`
  document.getElementById(`card`).style.display =  `block`



}


let cc = () => {
  document.getElementById(`home`).style.display =  `none`
  document.getElementById(`about`).style.display =  `none`
  document.getElementById(`contact`).style.display =  `none`
  document.getElementById(`attendance`).style.display =  `none`
  document.getElementById(`card`).style.display =  `block`

}


// Add Student Button

let add = ()=> {
  document.getElementById(`create`).style.display =  `none`
  document.getElementById(`add_New`).style.display =  `block`
}

// Create class

let create = ()=> {
  document.getElementById(`create`).style.display =  `block`
  document.getElementById(`add_New`).style.display =  `none`
}

// Firebase Programming
let database = firebase.database().ref(`/`);

let create_Class = () => {
  let className = document.getElementById(`class`).value;
  let date = document.getElementById(`date`).value;
  let time = document.getElementById(`time`).value;
  let batch = document.getElementById(`batch`).value;

  // validation

  if(className.length === 0){
    alert(`Please fill This field`)
  }
  else if(date.length === 0){
    alert(`Please fill This field`)    
  }
  else if(time.length === 0){
    alert(`Please fill This field`)    
  }
  else if(batch.length === 0){
    alert(`Please fill This field`)    
  }
  else{
    let total_Students =["free"];
    let classObj = {
      className : className,
      date : date,
      time : time,
      batch : batch,
      total_Students : total_Students
    }
    database.child(`saylani-attendance`).push(classObj);
    console.log(classObj)
  }

}


// For adding Students
let add_Student = () => {
  let stud_Name = document.getElementById(`stud_name`).value;
  let fName = document.getElementById(`stud_fName`).value;
  let stud_Class = document.getElementById(`stud_Class`).value;
  let stud_batch = document.getElementById(`stud_batch`).value;

  // validation

  if(stud_Name.length === 0){
    alert(`Please fill This field`)
  }
  else if(fName.length === 0){
    alert(`Please fill This field`)    
  }
  else if(stud_Class.length === 0){
    alert(`Please fill This field`)    
  }
  else if(stud_batch.length === 0){
    alert(`Please fill This field`)    
  }
  else{
    let students_Obj = {
      stud_Name : stud_Name,
      fName : fName,
      stud_Class : stud_Class,
      stud_batch : stud_batch,
    }

    database.child(`saylani-attendance`).push(students_Obj);

    

   
  }
  database.child(`saylani-attendance`).on(`child_added`);

    

}




















// var find = curry(function (db, id) {
// 	var obj = db.get(id);
// 	if(obj === null) {
// 		throw new Error('Object not found!');
// 	}
// 	return obj;
// });

// var csv =(student) => {
// 	return `${student.ssn}, ${student.firstname}, ${student.lastname}`;
// };

// var append = curry(function (elementId, info) {
// 	document.querySelector(elementId).innerHTML = info;
// });
// var showStudent = run( append('#student-info'), csv, find(db) );


// showStudent('444-44-4444');