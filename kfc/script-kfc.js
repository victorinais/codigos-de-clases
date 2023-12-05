function selectTheme() {
    let theme = document.getElementById('select_theme').value;

    if (theme == 'dark') {
        document.getElementById('body').classList.remove('theme-light');
        document.getElementById('body').classList.add('theme-dark');
    } else {
        document.getElementById('body').classList.remove('theme-dark');
        document.getElementById('body').classList.add('theme-light');
    }

}

function selectLanguage() {
    let idioma = document.getElementById("language").value;

    if (idioma == "en") {
        document.getElementById("body").innerHTML = `
        <header>
        <nav>
            <div class="opciones">
                <ol>
                    <li class="uno">menu</li>
                    <li class="dos">promotions</li>
                    <li class="tres">our stores</li>
                </ol>
            </div>
            <div class="seleccionar">
                <select name="" id="language" class="select" onchange="selectLanguage()">
                    <option value="" disabled selected>Select language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
                <select name="" id="select_theme" class="select" onchange="selectTheme()">
                    <option value="" disabled selected>select topic</option>
                    <option value="light">clear</option>
                    <option value="dark">dark</option>
                </select>
            </div>
        </nav>
    </header>
    <main>
        <div class="cont-titulo-1">
            <div class="menu">
                <h2>menu</h2>
            </div>
            <div class="filtrar">
                <h2>filter by</h2>
            </div>
        </div>
        <div class="cont-productos">
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_87_744x744_1699892140.png?d=300x300&format=webp" alt="">
                <p class="price">$17.900</p>
                <h3 class="name">Pop Corn Combo</h3>
                <p class="description">1 Medium Pop Corn (Breaded chicken breast pieces) + 1 Small Potato + 1 PET Soda 400ml</p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_75_744x744_1699892042.png?d=300x300&format=webp" alt="">
                <p class="price">$17.900</p>
                <h3 class="name">Combo 2 Dams</h3>
                <p class="description">2 Chicken Pieces + 1 Small Potato + 1 PET Soda 400ml</p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_90_744x744_1699892235.png?d=300x300&format=webp" alt="">
                <p class="price">$17.900</p>
                <h3 class="name">Combo Strips</h3>
                <p class="description">4 Strips (Breaded Chicken Breast Strips) + 1 Small Potato + 1 PET Soda 400ml + 1 Sauce 2oz</p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_5808_744x744_1699892341.png?d=300x300&format=webp">
                <p class="price">$19.900</p>
                <h3 class="name">Homemade Combo</h3>
                <p class="description">2 Prey + 1 Small Potatoes + 1 Personal Colslaw Salad + 1 Pet Soda 400 Ml</p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_123_744x744_1699892547.png?d=300x300&format=webp">
                <p class="price">$19.900</p>
                <h3 class="name">Classic Twister Combo</h3>
                <p class="description">1 Classic Twister + 1 small potato + 1 PET Soda 400ml</p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_6492_744x744_1699893534.png?d=300x300&format=webp" alt="">
                <p class="price">$19.900</p>
                <h3 class="name">Nuggets Combo</h3>
                <p class="description">10 Nuggets + 1 Small Potato + 1 Pet Soda 400ml + 1 BBQ Sauce + 1 Honey Mustard Sauce</p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_78_744x744_1699892852.png?d=300x300&format=webp" alt="">
                <p class="price">$24.900</p>
                <h3 class="name">Combo 3 Dams</h3>
                <p class="description">3 Chicken Pieces + 1 Small Potato + 1 PET Soda 400ml</p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_72_744x744_1699892924.png?d=300x300&format=webp">
                <p class="price">$35.900</p>
                <h3 class="name">Hot Wings Combo</h3>
                <p class="description">8 Hot Wings (Spicy hot wings are equivalent to a piece of wing) + 1 Small Potato + 1 PET Soda 400ml</p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_6624_744x744_1699974573.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Part And Share Nuggets</h3>
                <p class="description">10 Nuggets + 10 Wings (Spicy hot wings are equivalent to a piece of wing) + 2 Small Potatoes + 2 Pet Sodas 400 ml + 1 BBQ Salads + 1 Honey Mustard Sauce</p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_4723_744x744_1699975469.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Part and Share Christmas</h3>
                <p class="description">2 Chicken Presas + 4 Strips (Breaded Breast Strips) + 5 Nuggets + 2 Small Potatoes + 2 Pet Sodas 400ml + 1 Sweet BBQ Sauce + 4 Churros with Arequipe + 1 Avalanche Oreo</p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_957_744x744_1699893823.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Part And Share Nuggets</h3>
                <p class="description">10 Nuggets + 10 Wings (Spicy hot wings are equivalent to a piece of wing) + 2 Small Potatoes + 2 Pet Sodas 400 ml + 1 BBQ Salads + 1 Honey Mustard Sauce</p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_3305_744x744_1699893949.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Complete Big Box</h3>
                <p class="description">1 Chicken Presa + 3 Hot Wings (Spicy hot wings are equivalent to a piece of wing) + 1 Small Pop Corn. + 1 Small Potato + 1 Personal Cabbage Salad + 1 BBQ Sauce 2oz + 1 PET Soda 400ml</p> 
            </div>
        </div>
    </main>
`
    } else {
        document.getElementById("body").innerHTML = `
        <header>
        <nav>
            <div class="opciones">
                <ol>
                    <li class="uno">menú</li>
                    <li class="dos">promociones</li>
                    <li class="tres">nuestras tiendas</li>
                </ol>
            </div>
            <div class="seleccionar">
                <select name="" id="language" class="select" onchange="selectLanguage()">
                    <option value="" disabled selected>seleccionar idioma</option>
                    <option value="en">inglés</option>
                    <option value="es">español</option>
                </select>
                <select name="" id="select_theme" class="select" onchange="selectTheme()">
                    <option value="" disabled selected>seleccionar tema</option>
                    <option value="light">claro</option>
                    <option value="dark">oscuro</option>
                </select>
            </div>
        </nav>
    </header>
    <main>
        <div class="cont-titulo-1">
            <div class="menu">
                <h2>menú</h2>
            </div>
            <div class="filtrar">
                <h2>filtrar por</h2>
            </div>
        </div>
        <div class="cont-productos">
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_87_744x744_1699892140.png?d=300x300&format=webp">
                <p class="price">$17.900</p>
                <h3 class="name">Combo Pop Corn</h3>
                <p class="description">1 Pop Corn Mediano (Trocitos de pechuga de pollo apanados) + 1 Papa Pequeña + 1 Gaseosa PET 400ml </p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_75_744x744_1699892042.png?d=300x300&format=webp">
                <p class="price">$17.900</p>
                <h3 class="name">Combo 2 Presas</h3>
                <p class="description">2 Presas de Pollo + 1 Papa Pequeña + 1 Gaseosa PET 400ml  </p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_90_744x744_1699892235.png?d=300x300&format=webp" alt="Promo Big Box Kentucky Sándwich Nugget">
                <p class="price">$17.900</p>
                <h3 class="name">Combo Strips</h3>
                <p class="description">4 Strips (Tiras de pechuga de pollo apanadas) + 1 Papa Pequeña + 1 Gaseosa PET 400ml + 1 Salsa 2oz </p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_5808_744x744_1699892341.png?d=300x300&format=webp">
                <p class="price">$19.900</p>
                <h3 class="name">Combo Casero</h3>
                <p class="description">2 Presas+ 1 Papas Pequeñas + 1 Ensalada Colslaw personal+ 1 Gaseosa Pet 400 Ml </p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_123_744x744_1699892547.png?d=300x300&format=webp">
                <p class="price">$19.900</p>
                <h3 class="name">Combo Twister Clasico</h3>
                <p class="description">1 Twister Clásico + 1 papa pequeña+ 1 Gaseosa PET 400ml </p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_6492_744x744_1699893534.png?d=300x300&format=webp" alt="">
                <p class="price">$19.900</p>
                <h3 class="name">Combo Nuggets</h3>
                <p class="description">10 Nuggets + 1 Papa Pequeña + 1 Gaseosa Pet 400ml + 1 Salsa BBQ + 1 Salsa Miel Mostaza </p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_78_744x744_1699892852.png?d=300x300&format=webp" alt="Promo Big Box Kentucky Sándwich Nugget">
                <p class="price">$24.900</p>
                <h3 class="name">Combo 3 Presas</h3>
                <p class="description">3 Presas de Pollo + 1 Papa Pequeña + 1 Gaseosa PET 400ml </p>
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_72_744x744_1699892924.png?d=300x300&format=webp">
                <p class="price">$35.900</p>
                <h3 class="name">Combo Hot Wings</h3>
                <p class="description">8 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Papa Pequeña + 1 Gaseosa PET 400ml </p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_6624_744x744_1699974573.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Parte Y Comparte Nuggets</h3>
                <p class="description">10 Nuggets + 10 Alitas (Las alitas picantes hot wings equivalen a un trozo de ala) + 2 Papas Pequeñas + 2 Gaseosas Pet 400 ml + 1 Salas BBQ + 1 Salsa miel mostaza</p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_4723_744x744_1699975469.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Parte y Comparte Navidad</h3>
                <p class="description">2 Presas de Pollo + 4 Strips (Tiras de pechuga apanadas) + 5 Nuggets + 2 Papas Pequeñas + 2 Gaseosas Pet 400ml + 1 Salsa BBQ Sweet + 4 Churros con Arequipe + 1 Avalancha Oreo</p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_957_744x744_1699893823.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Parte Y Comparte Nuggets</h3>
                <p class="description">10 Nuggets + 10 Alitas (Las alitas picantes hot wings equivalen a un trozo de ala) + 2 Papas Pequeñas + 2 Gaseosas Pet 400 ml + 1 Salas BBQ + 1 Salsa miel mostaza </p> 
            </div>
            <div class="cajas">
                <img src="https://images.getduna.com/5fe6067e-0e11-4869-9118-ad3dcc8765c2/828dd97ac260dbef_domicilio_3305_744x744_1699893949.png?d=300x300&format=webp">
                <p class="price">$39.900</p>
                <h3 class="name">Big Box Completo</h3>
                <p class="description">1 Presa de Pollo + 3 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Pop Corn Peq. + 1 Papa Peq. + 1 Ensalada Col Personal + 1 Salsa BBQ 2oz + 1 Gaseosa PET 400ml</p> 
            </div>
        </div>
    </main>
`
    }
}


/* if(idioma == "en"){
        let texto = [
             {
                nombre : "hamburguersa 1",
                description : "asdkjadhjsad",
                price : "sadskahd",
                img : "asdasdasd"
             },
             {
                nombre : "hamburguersa 1",
                description : "asdkjadhjsad",
                price : "sadskahd",
                img : "asdasdasd"
             },
             {
                nombre : "hamburguersa 1",
                description : "asdkjadhjsad",
                price : "sadskahd",
                img : "asdasdasd"
             },
             {
                nombre : "hamburguersa 1",
                description : "asdkjadhjsad",
                price : "sadskahd",
                img : "asdasdasd"
             },


        ]
    }else{
        let texto = [
            {
               nombre : "hamburguer 1",
               description : "englis",
               price : "englis",
               img : "asdasdasd"
            },
            {
               nombre : "hamburguersa 1",
               description : "asdkjadhjsad",
               price : "sadskahd",
               img : "asdasdasd"
            },
            {
               nombre : "hamburguersa 1",
               description : "asdkjadhjsad",
               price : "sadskahd",
               img : "asdasdasd"
            },
            {
               nombre : "hamburguersa 1",
               description : "asdkjadhjsad",
               price : "sadskahd",
               img : "asdasdasd"
            },


       ]
    }
    texto.array.forEach(element => { 

}); */