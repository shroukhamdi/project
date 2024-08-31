let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#submit")

let getUser = localStorage.getItem("username")

let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function(e) {
    e.preventDefault()
    if (username.value === "" || password.value === "") {
        alert("please fill in data")
    }else{
        if(getUser && getUser.trim() === username.value.trim() && getPassword && getPassword.trim() === password.value ){
            setTimeout ( () => {
            window.location = "index.html"
        } , 1500)

        } else{
            alert("username or password is worng")
        }
        setTimeout ( () => {
            window.location = "wellcom.html"
        } , 1500)
        
    }
})