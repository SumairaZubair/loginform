const inputs = document.querySelectorAll("input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function btn(){
	var email =document.getElementById("mail").value
	var pswd1 =document.getElementById("pswd").value
	if(email==="...@gmail.com"&&pswd1===Number){
		alert("success")
		
	}
	else{
		alert ("Try again")
	}
}
function btn2(){
	var email2 =document.getElementById("email").value
	var pswd2 =document.getElementById("pswd2").value
	var user  = document.getElementById("mail2").value
	if(email2 ==="...@gmail.com" && pswd2 === Number && user === " " ){
		alert("signup complete")
	}
	else{
		alert ("signup uncomplete ")
	}
}
let link = document.getElementById("block");
	let hideShow = document.getElementById("loginform");
	let signupContent = document.getElementById("other");
	link.addEventListener("click" , function(){
		
		if(hideShow.style.display === "block"){
			hideShow.style.display = "none"
			signupContent.style.display = "block"
		}else{
			hideShow.style.display === "block"
			signupContent.style.display = "none"

		}
	})
	let link2 = document.getElementById("none");
	let hideShow2 = document.getElementById("other");
	let loginContent = document.getElementById("loginform");

	link2.addEventListener("click" , function(){
		if(hideShow2.style.display === "block"){
			hideShow2.style.display = "none"
			loginContent.style.display = "block"

		}else{
			hideShow2.style.display === "none"
			loginContent.style.display = "block"
		}
	})
var users = [ ];
function btn2(){
	var email =document.getElementById("email").value ;
	var password =document.getElementById("pswd2").value;
	var nam = document.getElementById("mail2").value;
	var user ={
		Email:email,
		password:password,
		UserName:nam
	};
	if(user){
		users.push(user)
	localStorage.setItem("userData", JSON.stringify(users));
	// console.log(data)
	// localStorage.setItem("user" , JSON.stringify(user));
	}
	let isExist = false
  users.filter((value =>{
	if(value.Email === user.Email){
		isExist = true
	}
}))
if(isExist){

	alert("this user is already exist")
}
}
// if(user){
	// 	window.location.replace('dashboard.html')}
	// else{
	// 	alert("create an account")
	// }

// const userData = JSON.parse(localStorage.getItem("userData"));
// console.log(userData)}
function btn(){
 var email = document.getElementById("mail").value;
 var password = document.getElementById("pswd").value;
//  debugger;
let userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);
// debugger;
let success = false
let tryAgain = false
 userData.filter((value)=>{
	if(value.password == password && value.Email == email){
		// window.location.replace('dashboard.html')
		success = true
	}else if(value.password !== password || value.Email !== email){
		tryAgain = true
	}}
 )
  if(success){
	alert("succesfull")
 }else if(tryAgain){
	alert("try again")
 }}



// debugger;
// const formSec = document.getElementById("loginform");
// const signSec = document.getElementById("signupform");
// const signBtn = document.getElementById("login-btn2")
// const loginBtn = document.getElementById("login-btn");
// const dashboard = document.getElementById("dashboard");
// const backButton = document.getElementById('backButton');
// loginBtn.addEventListener('click', showDashboard);
// signBtn.addEventListener('click',showDashboard);
// backButton.addEventListener('click', goBackToLogin);
// function showDashboard() {
// 	formSec.style.display = 'none';
// 	dashboard.style.display = 'block';
//   }
//   function showDashboard() {
// 	signSec.style.display = 'none';
// 	dashboard.style.display = 'block';
//   }
//   function goBackToLogin() {
// 	dashboard.style.display = 'none';
// 	formSec.style.display = 'block';
//   }
//   function goBackToLogin() {
// 	dashboard.style.display = 'none';
// 	signSec.style.display = 'block';
//   }






					// <div class="login-content" id="first" style="display: block;">

//  var users ; [];

// 		let users = [
// 			name = document.getElementById("mail").value,
// 			pswd1 = document.getElementById("pswd").value
		
// 		]
// 		user = JSON.stringify(users)
// 		console.log(user);

// 		var users = [ ];
// 		function btn(){
// 			var email =document.getElementById("mail").value 
// 			var pswd =document.getElementById("pswd").// 			var email =document.getElementById("mail").value 

// 			console.log(email);
// 			console.log(pswd);
		
// 		var user={
// 			email: email,
// 			pswd:pswd
			
// 		}
// 		console.log(user)
// 		 users.push(user)
// 		 console.log(users)

