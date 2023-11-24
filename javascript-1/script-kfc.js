function selectLanguage(){
    let idioma = document.getElementById("language").value;

    if (idioma == "es"){
        document.getElementById("id-menu").innerText = "menú";
    }else {
        document.getElementById("id-menu").innerText = "menu";
    }
}

function selectTheme(){
    var theme = document.getElementById('select_theme').value;

    if(theme == 'dark'){
        document.getElementById('body').classList.remove('theme-light');
        document.getElementById('body').classList.add('theme-dark');
    }else{
        document.getElementById('body').classList.remove('theme-dark');
        document.getElementById('body').classList.add('theme-light');
    }
}