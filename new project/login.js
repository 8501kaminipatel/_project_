function checkPass(){
    
    let dataa = localStorage.getItem("data");

    
    if (dataa) {
       
        let dataArray = JSON.parse(dataa);

        
        dataArray.forEach(function(user) {
           
            
            console.log("Email: " + user.s_email); 
            console.log("Password: " + user.s_password); 
           
        });
        
    } else {
        console.log("No data found in localStorage.");
    }
}

    







function checkLogin() {
 
    let inputEmail = document.getElementById('email').value;
    let inputPassword = document.getElementById('password').value;

   
    let dataa = localStorage.getItem("data");

    if (!inputEmail || !inputPassword) {
        alert("Please fill in both email and password fields.");
        return; // Exit the function
    }
    

    if (dataa) {
        let dataArray = JSON.parse(dataa);

        let userFound = false;

        dataArray.forEach(function(user) {
           
            if (user.s_email === inputEmail && user.s_password === inputPassword) {
                userFound = true;
                alert("Login successful!"); 
                window.location.href = "index.html";
            }
        });
             if  (!userFound) {
            alert("Invalid email or password!"); 
        }
    } else {
        alert("No user data found in localStorage.");
    }
}













