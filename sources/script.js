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

let arimg = ['./sources/images/1906.png', './sources/images/1909.png', './sources/images/1910.png', './sources/images/1910-1.png', './sources/images/1910-2.png', './sources/images/1911.png', './sources/images/1911-1.png', './sources/images/1911-2.png',];

let arfch = ['1906', '1909', '1910', '1910', '1910', '1911', '1911', '1911'];

let artxt = ['Rebelión de Acayucan: levantamiento armado de la población contra el régimen de Porfirio Díaz en Acayucan, Veracruz. Se le considera un acontecimiento precursor de la Revolución mexicana de 1910.',
            'Huelga de Río Blanco: huelga laboral en la mayor fábrica de hilados y tejidos de Río Blanco en Veracruz. Se pronunció a favor de los patrones, provocando que ese día los obreros se unieran en huelga para exigir mejores condiciones laborales y salariales.',
            '22 de mayo: Francisco Madero funda el partido antirreeleccionista. Los objetivos principales del partido fueron la defensa de la democracia: "Sufragio Efectivo, No Reelección", la perseverancia estricta de la Constitución, la libertad municipal y el respeto a las garantías individuales.',
            '6 de junio: Madero es aprehendido en Monterrey y trasladado a San Luis Potosí. Madero y Roque Estrada fueron acusados de que sus discursos ultrajaron a los funcionarios públicos.',
            '10 de julio: Díaz vuelve a ganar las elecciones presidenciales mientras Madero está en prisión.',
            '5 de octubre: Madero promulga el plan de San Luis tras huir de la cárcel, exhortando a los mexicanos a luchar y establecer elecciones libres y democráticas.',
            '10 de mayo: Pascual Orozco y Pancho Villa toman Ciudad Juárez (victoria Maderista), La toma de Ciudad Juárez por parte de los revolucionarios dio origen a que se pactara la renuncia del general Porfirio Díaz como Presidente de la República, en los Tratados de Ciudad Juárez.',
            ' 21 de mayo: se firman los "Tratados de Ciudad Juárez". En ellos se acordaron las renuncias del presidente Porfirio Díaz y del vicepresidente Ramón Corral, la creación de un gobierno interino presidido por Francisco León de la Barra, quien debería convocar a nuevas elecciones, así como el cese de las hostilidades.',
            '25 de mayo: fin del Porfiriato, Díaz abandona el poder tras 30 años y se exilia en Francia.'

            
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


