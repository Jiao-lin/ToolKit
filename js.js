//ESTE SIMULADOR LO QUE HACE ES CALCULAR EL INDICE DE MASA CORPORAL DE UNA PERSONA.

function inputsys(){
    let estilo = document.getElementsByTagName("style");
    estilo[0].innerHTML = ".padre{display: flex; flex-direction: column; align-items: flex-end; justify-content: space-around; height:400px; background-color: #e3e3e3; padding: 40px; color: #060606ab;}"
    let padre = document.getElementsByClassName("padre");

    let input1 = document.createElement("input");
    input1.className = "input1";
    let input2 = document.createElement("input");
    input2.className = "input2";
    let label1 = document.createElement("label"); 
    let label2 = document.createElement("label");
    let botonSub = document.createElement("button");
    botonSub.setAttribute("type","button");

    label1.innerText="Introduzca su peso en Kilogramos";
    label2.innerText="Introduzca su altura en Centimetros";
    botonSub.innerText="CALCULAR";
    input1.setAttribute("placeholder","Ej.120");
    input2.setAttribute("placeholder","Ej.190");
    padre[0].append(label1,input1,label2,input2,botonSub);

    input1.addEventListener('change', function () {
        const x = parseInt(input1.value);
        if (isNaN(x)) {
         estilo[1].innerHTML = '.input1{border:solid red 1px; color:red; outline:none}';
         botonSub.setAttribute("disabled","");
        }else{
            estilo[1].innerHTML = '.input1{border:solid #198754 1px; color:grey; outline:none}';
            botonSub.removeAttribute("disabled","");
        }
      })

      input2.addEventListener('change', function () {
        const y = parseInt(input2.value);
        if (isNaN(y)) {
         estilo[1].innerHTML = '.input2{border:solid red 1px; color:red; outline:none}';
         botonSub.setAttribute("disabled","");
        }else{
            estilo[1].innerHTML = '.input2{border:solid #198754 1px; color:grey; outline:none}';
            botonSub.removeAttribute("disabled","");
        }
      })
      

    botonSub.onclick=()=>{
    
        let cmAmts=parseInt(input2.value) * 0.01;
        let mts2 = cmAmts * cmAmts;
        let resultadoImc= parseInt(input1.value)/mts2;
        let textoTotal = document.createElement("h1");
        textoTotal.innerText = "Su IMC es de "+resultadoImc;
        padre[0].append(textoTotal);
        botonSub.remove();

    };

}
inputsys();
