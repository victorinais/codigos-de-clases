let auth = sessionStorage.getItem('auth');
        let nombre = sessionStorage.getItem('nombre');
        document.getElementById('nombre').innerText = nombre;
        if(auth != 1){
            location.href = "index.html";
        }