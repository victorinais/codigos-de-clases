function testSelect(){
    var idioma = document.getElementById('select_idioma').value;

    if(idioma == "es"){
        document.getElementById('saludo').innerText = 'Hola Mundo :)';
    }else {
        document.getElementById('saludo').innerText = 'Hello World :)';
    }
 
}


function actualizarTheme(){
    var theme = document.getElementById('select_theme').value;

    if(theme == 'dark'){
        document.getElementById('body').classList.remove('theme-light');
        document.getElementById('body').classList.add('theme-dark');
    }else{
        document.getElementById('body').classList.remove('theme-dark');
        document.getElementById('body').classList.add('theme-light');
    }
}