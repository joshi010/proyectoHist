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
                'El movimiento de la Revoluci??n mexicana empieza con el Plan de San Luis el cual llama al pueblo a levantarse en armas para acabar con la dictadura de D??az. Su lema era ???Sufragio efectivo, no reelecci??n.',
                'Debido a la presi??n social y pol??tica, Porfirio D??az abandona el poder, tan solo seis d??as despu??s, el 31 de mayo sale del pa??s junto con su familia hac??a Par??s.',
                'Se celebraron las primeras elecciones democr??ticas presidenciales. Francisco I. Madero result?? electo.',
                'Al no cumplir sus promesas, Emiliano Zapata (el Caudillo del Sur) lanz?? el Plan de Ayala, en el que desconoc??a el gobierno de Madero y se declaraba un nuevo movimiento armado.',
                'Comenz?? la etapa conocida como ???Decena Tr??gica???, al mismo tiempo de esto, F??lix D??az y Manuel Mondrag??n encabezaron un Golpe de Estado que termin?? derrocando al gobierno de Madero, y la llegada de Victoriano Huerta a la presidencia.',
                'Francisco I. Madero y su vicepresidente fueron detenidos con la promesa de que iban a ser exiliados, pero en esta fecha mataron a los dos.',
                'Venustiano Carranza, no estando conforme con el gobierno Huertista, proclama el Plan de Guadalupe, en el que se declara la creaci??n del Ej??rcito.',
                'Pancho Villa y la Divisi??n del Norte se unieron al Ej??rcito Constitucionalista de Venustiano Carranza.',
                'El general Francisco Villa toma Torre??n y es ratificado como comandante de la Divisi??n del Norte.',
                'El Ej??rcito Constitucionalista logr?? vencer a Huerta, y este se exili?? en los Estados Unidos.',
                '??lvaro Obreg??n firm?? con Eduardo Iturbide el los acuerdos de Teoloyucan. Establec??a la entrada del Ej??rcito Constitucionalista en la capital y las condiciones de rendici??n y disoluci??n del derrotado ej??rcito de Victoriano Huerta, Obreg??n entr?? en Ciudad de M??xico.',
                'Tuvo lugar la Convenci??n de Aguascalientes en la que se pusieron de acuerdo los villistas y constitucionalistas, al igual que eligieron como presidente provisional a Eulalio Guti??rrez. Sin embargo, la Convenci??n fracas??.',
                'Carranza establece su oficina en Veracruz y declara al Puerto capital interina del pa??s. Villa y Zapata se re??nen en la Ciudad de M??xico para apoyar a la Convenci??n.',
                'El Ej??rcito Convencionista reinicia los ataques. Las tropas constitucionalistas son forzadas a retirarse de la Ciudad de M??xico. Francisco Villa controla en la mayor parte del norte de M??xico.',
                'En Celaya inicia la m??s sangrienta batalla de la Revoluci??n, entre la Divisi??n del Norte villista y el Ej??rcito Constitucionalista de Obreg??n. Villa es derrotado pero organiza un segunda ataque',
                'La Constituci??n de 1917 fue promulgada, y este hecho se considera como el evento que puso fin a la Revoluci??n Mexicana.',
            
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



