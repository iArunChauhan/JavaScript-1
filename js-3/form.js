    
function validateForm(){

 let name = document.getElementById("name").value

 let email = document.getElementById("email").value

 let password = document.getElementById("password").value

   if(name==""){
    
     alert("fill the name")

     return false

   }


   let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
   if(!email.match(emailPattern)){

     alert("please valid email")

     return false

   }

   if(password.length<6){
    
     alert("must be at least 6 characters")

     return false
    
   }
  

   return true

}

validateForm()


    
    
  
