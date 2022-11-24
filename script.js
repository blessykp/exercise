function validateForm() {
    let first_name = document.forms["registration"]["fname"].value;
    let last_name =document.forms["registration"]["lname"].value;
    let email=document.forms["registration"]["email"].value;
    let password=document.forms["registration"]["password"].value;
    let confirm_password=document.forms["registration"]["confirmpassword"].value;
    console.log(first_name)
    if (first_name == "") {
      alert(" First Name must be filled out");
      return false;
    }
    if (last_name==""){
      alert("Last Name must be filled out");
      return false;
    }
    if (email==""){
      alert("Email must be filled out");
      return false;
    }
    if (password==""){
      alert("Password must be filled out");
      return false;
    }
    if (confirm_password==""){
      alert("Please confirm your password");
      return false;
    }
  }