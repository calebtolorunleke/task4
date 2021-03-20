let userName=document.getElementById("textUsername")
let uemail=document.getElementById("textemail")
let password=document.getElementById("textpassword")
let conPwd=document.getElementById("textconPwd")
let form=document.getElementById("form");

function validateInput(){
    //check username is empty
    if(userName.value.trim()===""){
        onError(userName,"User Name Cannot be empty");       
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
            else{
                onSuccess(email);
            }
        }
    }
}

    //password
    if(conPwd.value,trim()===""){
        onError(pwd,"user Name cannot be empty");
    }else{
        onSuccess(pwd);
    }
    if(conpwd.value.trim()===""){
        onError(conPwd,"User Name cannot be empty");
    }else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm Password not matching")
        }
        onSuccess(conPwd);
    }

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput
});

function onSuccess(input,input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input message){
    let parent=userName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hideen"
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email){

}