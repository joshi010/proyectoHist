let btn = document.querySelector('.bet');
let sig = document.querySelector('#siguiente');
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

let arimg = ['./sources/images/PNA-1.jpg','./sources/images/planSanLuis.jpg', './sources/images/inicio-rev.jpg', './sources/images/porfirioAdios.jpg', './sources/images/primerasEl.jpg', './sources/images/planAyala.jpg', './sources/images/decenaTragica.jpg', './sources/images/asesinatoFIM.jpg', './sources/images/planDeGuadalupe.jpg', './sources/images/unionPanchoVilla.jpg', './sources/images/huertaSeVa.jpg', './sources/images/convencionAguas.jpg', './sources/images/batallaDeCelaya.jpg', './sources/images/constitucion1915.jpg'];

let arfch = ['22 de mayo de 1909', '5 de octubre de 1910', '20 de noviembre 1910', '25 de mayo de 1911', '6 de noviembre de 1911', '28 de noviembre de 1911', '9 de febrero de 1913', '22 de febrero de 1913', '26 de marzo de 1913', '29 de septiembre de 1913', '15 de julio de 1914', '10 de octubre de 1914', '13 de abril de 1915', '5 de febrero de 1917'];

let artxt = ['Se crea el Partido Nacional Antirreeleccionista(PNA) por iniciativa de Francisco I. Madero.',
                'Se proclama el plan de San Luis, Francisco I. Madero.', 
                'Con el fin de acabar con el gobierno reeleccionista de Porfirio Díaz, Francisco I. Madero lideró un levantamiento armado que significó el inicio de la Revolución Mexicana.',
                'Debido a la presión social y política, Porfirio Díaz abandona el poder, tan solo seis días después, el 31 de mayo sale del país junto con su familia hacía París.',
                'Se celebraron las primeras elecciones democráticas presidenciales. Francisco I. Madero resultó electo.',
                'Al no cumplir sus promesas, Emiliano Zapata (el Caudillo del Sur) lanzó el Plan de Ayala, en el que desconocía el gobierno de Madero y se declaraba un nuevo movimiento armado.',
                'Comenzó la etapa conocida como “Decena Trágica”, al mismo tiempo de esto, Félix Díaz y Manuel Mondragón encabezaron un Golpe de Estado que terminó derrocando al gobierno de Madero, y la llegada de Victoriano Huerta a la presidencia.',
                'Francisco I. Madero y su vicepresidente fueron detenidos con la promesa de que iban a ser exiliados, pero en esta fecha mataron a los dos.',
                'Venustiano Carranza, no estando conforme con el gobierno Huertista, proclama el Plan de Guadalupe, en el que se declara la creación del Ejército.',
                'Pancho Villa y la División del Norte se unieron al Ejército Constitucionalista de Venustiano Carranza.',
                'El Ejército Constitucionalista logró vencer a Huerta, y este se exilió en los Estados Unidos.',
                'Tuvo lugar la Convención de Aguascalientes en la que se pusieron de acuerdo los villistas y constitucionalistas, al igual que eligieron como presidente provisional a Eulalio Gutiérrez. Sin embargo, la Convención fracasó.',
                'Las tropas de Álvaro Obregón consiguieron la victoria sobre las fuerzas de Francisco Villa en Celaya. Se asumió el triunfo de Obregón durante la Revolución Mexicana.',
                'La Constitución de 1917 fue promulgada, y este hecho se considera como el evento que puso fin a la Revolución Mexicana.',
            
            ]


siguiente.onclick = () => {

    if(pos < arfch.length){
      pos++;  
    }

    if(pos == 1){
        id1.style.color = 'white';
    } else if(pos >= 1 && pos <= 2){
        id2.style.color = 'white';
    } else if(pos > 3 && pos <= 5){
        id3.style.color = 'white';
    } else if(pos > 6 && pos <= 10){
        id4.style.color = 'white';
    } else if(pos > 10 && pos <= 12){
        id5.style.color = 'white';
    } else if(pos > 12 && pos <= 13){
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


