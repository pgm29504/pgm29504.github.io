let validate = true;

localStorage.setItem("value",JSON.stringify(false));

function collapse(){
    if(!validate){
        localStorage.setItem("value",JSON.stringify(true))
    }
}