function validation(){
   
   
    let username =document.getElementById('username').value;
    let phone = parseInt(document.getElementById('phone').value);
    let password = document.getElementById('password').value;
    let rpassword = document.getElementById('rpassword').value;
    console.log(username)
    if(username ==""){
        document.getElementById('errorusername').innerHTML="please enter username";
        document.getElementById('username').focus();
        return false;
    }
    else if(!username.includes('@')){
        document.getElementById('errorusername').innerHTML="please enter @ in username field";
        document.getElementById('username').focus();
        return false;
        
    }
    else if(!username.includes('gmail.com')){
        document.getElementById('errorusername').innerHTML="please enter  gmail.com";
        document.getElementById('username').focus();
        return false;
        
    }
    else if(isNaN(phone)){
        document.getElementById('errorusername').innerHTML="";
        document.getElementById('errorphone').innerHTML="please fill mobile number field";
        document.getElementById('phone').focus();
        return false;

    }
   else if(password ==""){
        document.getElementById('errorphone').innerHTML="";
        document.getElementById('errorpassword').innerHTML="please enterpassword";
        document.getElementById('password').focus();
        return false;
    }
    else if(!password.includes('@')){
        document.getElementById('errorphone').innerHTML="";
        document.getElementById('errorpassword').innerHTML="please include special character";
        document.getElementById('password').focus();
        return false;
    }
    else if(rpassword ==""){
        document.getElementById('errorpassword').innerHTML="";
        document.getElementById('errorphone').innerHTML="please enterpassword";
        document.getElementById('password').focus();
        return false;
    }
    else if(!rpassword.includes('@')){
        document.getElementById('errorpassword').innerHTML="";
        document.getElementById('errorrpassword').innerHTML="please include special character";
        document.getElementById('rpassword').focus();
        return false;
    }
  

}