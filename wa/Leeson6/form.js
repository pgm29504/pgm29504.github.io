let Form = document.getElementById("Form")

function error(the , nd){
    document.querySelector(the).innerHTML = nd
}

let user = localStorage.getItem("user");
let userlist = []
if(user){
    userlist = JSON.parse(localStorage.getItem("user"));
}

Form.onsubmit = function(e){
    e.preventDefault();

    error("#emailerror","");
    error("#passworderror","")


    let email = Form.email.value;
    let password = Form.password.value;


    let validate = true;

    if(!email){
        error("#emailerror", "*Email is required");
        validate = false;
        alert("Wrong email ")

    }
    if(!password){
        error("#passworderror", "*Password is required") ;
        validate = false;
        alert("Wrong password")
    }
    if(validate){
            location.assign("./collapse.html");
            let user = {
                email: email,
                password: password,
            }
            userlist.push(user);
            localStorage.setItem("user",JSON.stringify (userlist))
    }

}
