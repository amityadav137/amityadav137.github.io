window.onload = function() {

    document.getElementById("email").onkeyup = () => {
    };

    document.getElementById("password").onkeyup = () => {
    };

    document.getElementById("submit").onclick = () => {
        if(document.getElementById("email").checkValidity() && 
            document.getElementById("pass").checkValidity() )
            alert('Submitted successfully!')
          //  document.getElementById("url").checkValidity())
            
    };
};
