function agregarInputs(){
  var table = document.getElementById("myTable");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cellint = row.insertCell();
  var cell2 = row.insertCell();

  var entrada=document.createElement('input');  //Crea un elemento de etiqueta <input>
  entrada.type='text';  //Incluye el atributo "type" al elemento <input>
  entrada.placeholder='No terminal';  //Incluye el atributo "placeholder" al elemento <input>
  entrada.setAttribute("name","nt");
  entrada.setAttribute("onKeyUp","limitText(this,1);");
  entrada.setAttribute("onKeyDown","limitText(this,1);");
  entrada.setAttribute("pattern","[A-Z]*");
  entrada.setAttribute("oninvalid","alert('Ingresa solo una letra mayúscula');");

  cell1.appendChild(entrada); //Agrega el elemento <input> a la tabla
	var hlght = document.createElement('h5');
	var symbl = document.createTextNode(":=");
	hlght.appendChild(symbl);
  cellint.appendChild(hlght); //Agrega el elemento <input> a la tabla
//Mismo proceso que el anterior; esta vez para las producciones
  var entrada2=document.createElement('input');  //Crea un elemento de etiqueta <input>
  entrada2.type='text';  //Incluye el atributo "type" al elemento <input>
  entrada2.placeholder='Producción';  //Incluye el atributo "placeholder" al elemento <input>
  entrada2.setAttribute("name","produccion");

  cell2.appendChild(entrada2); //Agrega el elemento <input> a la tabla

}
function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
}