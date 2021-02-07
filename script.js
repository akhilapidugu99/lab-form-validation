// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName(username){
    if(username==''){
        alert("Please enter username");
        document.form.username.select();
        return false;
    }
    if(!isNaN(username)){
        alert("Please Enter Only Characters");
        document.form.username.select();
        return false;
    }
    if ((username.length < 5) || (username.length > 15)){
        alert("Your Character must be 8 to 15 Character");
        document.form.username.select();
        return false;
    }
    if (!(/^\S{3,}$/.test(document.myForm.username.value))) {
        username.innerHTML =
            'Name cannot contain whitespace';
        return false;
    }
    
    var format= /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if( username.match(format) )
        return false;
    alert("enter correct name");
    return true;
}


// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkMail(email){
        if (/^[a-zA-Z0-9._]+@[a-zA-Z]*+.[a-zA-Z]*/.test(email))
        {
          return (true);
        }else{
          alert("You have entered an invalid email address!")
          return (false);
        }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(password){
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
    if(password.value.match(paswd)) { 
        return true;
    }
    else{ 
        alert('Password must contain atleast one Uppercase, one number and special characters');
        return false;
    }
}
