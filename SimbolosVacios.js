function SimbolosVacios(ls_prod, ls_NT){

  var list_vacio = new Array();//Lista que contendrá los NT que generen vacíos
  var lsprod_empty = new Array();//lista que contendrá aquellas producciones a las que se le harán combinaciones
  var ls_prod3 = new Array();//Lista que guardará las producciones finales

  for(var i  = 0; i < ls_prod.length; i++){//Revisa aquellas producciones que contengan el símbolo de vacío
      if(ls_prod[i].indexOf('#') != -1){
        list_vacio.push(ls_NT[i]);//Se guardan los NT correspondientes a aquellas producciones que tenían el símbolo de vacío
    }
  }

    for(var i  = 0; i < ls_prod.length; i++){//Se revisan cada regla de cada producción
      for (var j = 0; j < ls_prod[i].length; j++){
        var prod = ls_prod[i][j].toString();//Se toma la regla a analizar
        var nt = ls_NT[i].toString();//Se toma el NT correspondiente a la producción
        if(prod != prod.toLowerCase()){//Si la producción no contiene Terminales, quiere decir que solo contiene NT potenciales a crear vacíos
          for (var k = 0; k < prod.length; k++){//Analizamos cada elemento de esa regla
            var c = prod.charAt(k);//Se toma el caracter actual de la regla
                c = c.toUpperCase();//Pasamos el elemento a mayúsculas
            if(list_vacio.indexOf(c) != -1 && list_vacio.indexOf(nt) == -1){//Si el caracter C y el símbolo NT no están en la lista de vacíos
              list_vacio.push(nt);//  Agregamos el símbolo NT a la lista de vacíos, por generar una regla que produce vacíos
              i=0;j=0;//Al haber agregado un NT a la lista, tenemos que regresar a revisar otravez las producciones
            }
            if(list_vacio.indexOf(c)!= -1 && !lsprod_empty.includes(prod)){//Si el caracter C está en la lista de vacios y la produccion no está
                                                                          //en la lista de producciones a combinar
              lsprod_empty.push(prod);//Se agrega la produccion actual a la lista
              //GeneraCombinaciones(prod)
            }
          }
        }
      }
    }
    //Imprimimos la lista de vacíos
  var newtope = document.createElement("P");
  newtope.innerHTML= " Lista de NT que generan vacíos: "+list_vacio;
  document.getElementById("demo5").appendChild(newtope);
  TablaVerdad(3);
}
