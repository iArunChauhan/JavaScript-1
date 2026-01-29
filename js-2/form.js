    



    const form = document.getElementById('myform')

        form.addEventListener("submit", function(event){

            event.preventDefault();
            
            const name = document.getElementById('name').value

            const email = document.getElementById('email').value

            console.log("Name: "+name," Email: "+email);

         

            alert("data is submitted")

        })