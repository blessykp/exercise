function validateForm() {
    let first_name = document.forms["registration"]["fname"].value;
    let last_name =document.forms["registration"]["lname"].value;
    let email=document.forms["registration"]["email"].value;
    let password=document.forms["registration"]["password"].value;                                                                    
    let confirm_password=document.forms["registration"]["confirmpassword"].value;
    console.log(first_name)
    if (first_name.trim() == "") {
      alert(" First Name must be filled out");
      return false;
    }
    if (last_name.trim()==""){
      alert("Last Name must be filled out");
      return false;
    }
    if (email.trim()==""){
      alert("Email must be filled out");
      return false;
    }
    if (password.trim()==""){
      alert("Password must be filled out");
      return false;
    }
    if (confirm_password.trim()==""){
      alert("Please confirm your password");
      return false;
    }
    console.log("first name is ",first_name);
    console.log("last name is",last_name);
    console.log("email is",email);
    
  }  