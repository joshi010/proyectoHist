let btn = document.querySelector('.bet');
let sig = document.querySelector('#siguiente');
let gl = document.querySelector('#galeria');
const jumbo = document.querySelector('.jumbotron');
const subT = document.querySelector('.segund');
const minDisp = document.querySelector('.disap');

btn.onclick = () => {
    console.log('hola');
    jumbo.classList.toggle('disap');
    subT.classList.toggle('nada');
    btn.classList.toggle('boton-trans');

}


let pos = 1;
let atr = document.querySelector('.atras');
let fch = document.querySelector('.fecha');
let desc = document.querySelector('.desc');
let imgs = document.querySelector('.change');

let id1 = document.querySelector('#t2');
let id2 = document.querySelector('#t3');
let id3 = document.querySelector('#t4');
let id4 = document.querySelector('#t5');
let id5 = document.querySelector('#t6');
let id6 = document.querySelector('#t7');
let id7 = document.querySelector('#t8');

let arimg = ['./sources/images/PNA-1.jpg','./sources/images/planSanLuis.jpg', './sources/images/inicio-rev.jpg', './sources/images/porfirioAdios.jpg', './sources/images/primerasEl.jpg', './sources/images/planAyala.jpg', './sources/images/decenaTragica.jpg', './sources/images/asesinatoFIM.jpg', './sources/images/planDeGuadalupe.jpg', './sources/images/unionPanchoVilla.jpg', './sources/images/panchoToma.png', './sources/images/huertaSeVa.jpg', './sources/images/entradaTruinf.jpg', './sources/images/convencionAguas.jpg', './sources/images/veracruz.jpg', './sources/images/reinicio.jpg', './sources/images/batallaDeCelaya.jpg', './sources/images/constitucion1915.jpg'];

let arfch = ['22 de mayo de 1909', '5 de octubre de 1910', '20 de noviembre 1910', '25 de mayo de 1911', '6 de noviembre de 1911', '28 de noviembre de 1911', '9 de febrero de 1913', '22 de febrero de 1913', '26 de marzo de 1913', '29 de septiembre de 1913','2 de octubre de 1913', '15 de julio de 1914', '10 de agosto de 1914', '10 de octubre de 1914', 'diciembre de 1914', 'Marzo 1915', '6 de abril 1915', '5 de febrero de 1917'];

let artxt = ['Se crea el Partido Nacional Antirreeleccionista(PNA) por iniciativa de Francisco I. Madero.',
                'Se proclama el plan de San Luis, Francisco I. Madero.', 
                'El movimiento de la Revolución mexicana empieza con el Plan de San Luis el cual llama al pueblo a levantarse en armas para acabar con la dictadura de Díaz. Su lema era “Sufragio efectivo, no reelección.',
                'Debido a la presión social y política, Porfirio Díaz abandona el poder, tan solo seis días después, el 31 de mayo sale del país junto con su familia hacía París.',
                'Se celebraron las primeras elecciones democráticas presidenciales. Francisco I. Madero resultó electo.',
                'Al no cumplir sus promesas, Emiliano Zapata (el Caudillo del Sur) lanzó el Plan de Ayala, en el que desconocía el gobierno de Madero y se declaraba un nuevo movimiento armado.',
                'Comenzó la etapa conocida como “Decena Trágica”, al mismo tiempo de esto, Félix Díaz y Manuel Mondragón encabezaron un Golpe de Estado que terminó derrocando al gobierno de Madero, y la llegada de Victoriano Huerta a la presidencia.',
                'Francisco I. Madero y su vicepresidente fueron detenidos con la promesa de que iban a ser exiliados, pero en esta fecha mataron a los dos.',
                'Venustiano Carranza, no estando conforme con el gobierno Huertista, proclama el Plan de Guadalupe, en el que se declara la creación del Ejército.',
                'Pancho Villa y la División del Norte se unieron al Ejército Constitucionalista de Venustiano Carranza.',
                'El general Francisco Villa toma Torreón y es ratificado como comandante de la División del Norte.',
                'El Ejército Constitucionalista logró vencer a Huerta, y este se exilió en los Estados Unidos.',
                'Álvaro Obregón firmó con Eduardo Iturbide el los acuerdos de Teoloyucan. Establecía la entrada del Ejército Constitucionalista en la capital y las condiciones de rendición y disolución del derrotado ejército de Victoriano Huerta, Obregón entró en Ciudad de México.',
                'Tuvo lugar la Convención de Aguascalientes en la que se pusieron de acuerdo los villistas y constitucionalistas, al igual que eligieron como presidente provisional a Eulalio Gutiérrez. Sin embargo, la Convención fracasó.',
                'Carranza establece su oficina en Veracruz y declara al Puerto capital interina del país. Villa y Zapata se reúnen en la Ciudad de México para apoyar a la Convención.',
                'El Ejército Convencionista reinicia los ataques. Las tropas constitucionalistas son forzadas a retirarse de la Ciudad de México. Francisco Villa controla en la mayor parte del norte de México.',
                'En Celaya inicia la más sangrienta batalla de la Revolución, entre la División del Norte villista y el Ejército Constitucionalista de Obregón. Villa es derrotado pero organiza un segunda ataque',
                'La Constitución de 1917 fue promulgada, y este hecho se considera como el evento que puso fin a la Revolución Mexicana.',
            
            ]


siguiente.onclick = () => {

    if(pos < arfch.length){
      pos++;  
    } else{
        gl.style.display = 'block';
        siguiente.style.display = 'none';
    }

    if(pos == 1){
        id1.style.color = 'white';
    } else if(pos >= 1 && pos <= 2){
        id2.style.color = 'white';
    } else if(pos > 3 && pos <= 5){
        id3.style.color = 'white';
    } else if(pos > 6 && pos <= 10){
        id4.style.color = 'white';
    } else if(pos > 11 && pos <= 15){
        id5.style.color = 'white';
    } else if(pos > 15 && pos <= 17){
        id6.style.color = 'white';
    } else if(pos > 12){
        id7.style.color = 'white';
    }


    
    if(pos >= 1){
        atr.style.display = 'block';
        imgs.src = arimg[pos-1];
        fch.innerHTML = arfch[pos-1];
        desc.innerHTML = artxt[pos-1];
    }
}

atr.onclick = () => {
    gl.style.display = 'none';
    siguiente.style.display = 'block';

    if(pos > 0){
        pos--;
    }


    if(pos > 0){
        atr.style.display = 'block';
        imgs.src = arimg[pos-1];
        fch.innerHTML = arfch[pos-1];
        desc.innerHTML = artxt[pos-1];
    }
}

gl.onclick = () =>{
    window.open('./galeria.html')
}



