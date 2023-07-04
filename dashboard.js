let aa = JSON.parse(localStorage.getItem("userData"));
let getElemnt = document.getElementById("userDisplay"); 

aa.map((value)=>{
    getElemnt.textContent = 'logged in as ' + value.UserName ;
    

})

document.getElementById('backButton').addEventListener('click', () => {
    // let userData = JSON.parse(localStorage.getItem("userData"));
    localStorage.removeItem('userData')
    window.location.replace('index.html')});