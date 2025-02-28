const texto = 'A continuación se muestran dos ejemplos de juicio con su determinación VERDADERA O FALSA, con base a argumento \nUn poligono es la unión de segmentos de recta y es:  (V) \nEste juicio es  verdadero con base a la Revista National Geographic España (2024). \n Los Juicios se  determinan por verdadero o falso según corresponda el contenido (argumento). Estos juicios pueden oponerse entre sí, dándole  el nombre de CUADRO DE OPOSICIÓN  con base a Gutierrez (2022). \nEl Cuadro de oposición se visualiza gráficamente de la siguiente manera y lo conforman  cuatro letras con base a Rendón E y Gonzalez E (2025). En el  cuadro de oposición, podrás ubicar cuatro tipos de letra  de acuerdo a cada tipo de juicio para poder  oponerlos entre cada extremo es decir, la relación opuesta que hay entre ellos.\nLa relación que hay entre los extremos ( letras) se denominan de la siguiente manera con base a Villegas (2009).\nOPOSICIÓN \n1.	Las contrarias se identifican cuando ambos juicios son universales y sólo difieren en su cualidad. A/E\n2.	Las subcontrarias cuando los juicios se explican como particulares y difieren por la cualidad. I/O\n3.	Las contradictorias cuando los juicios difieren en calidad y cantidad. A/O, E/I\n4.	Las subalternas se expresan cuando ambos juicios tienen la misma cualidad, pero difieren en cantidad. A/I , E/O\nToda magia es ilusión:  Se ubica en la letra A porque expresa el cuantificador Todo		\n2.	Algunos magos son habilies   se ubica en la letra I porque expresa algunos 		\n3.	Ningun mago es astuto se ubica en la letra E porque expresa ningun\n4.	Algunos magos no son inteligentes se ubica en la letra O porque expresa algunos \nEn  este RDD tuviste la oportunidad de identificar el tema de juicios de acuerdo a su determinación VERDADERA O FALSA,  cuya   intención  es colocar la idea en el llamado cuadro de oposición, en   el siguiente  RDD encontraras el tema de simbolización de proposiciones.';


function leerTexto() {
    if ('speechSynthesis' in window) {
        let mensaje = new SpeechSynthesisUtterance(texto);
        mensaje.lang = 'es-ES';
        window.speechSynthesis.speak(mensaje);
    }
}

document.addEventListener("scroll", function leerAlHacerScroll() {
    leerTexto();
    document.removeEventListener("scroll", leerAlHacerScroll);
});