function SimbolosVacios(ls_prod, ls_NT){

  var list_vacio = new Array();//Lista que contendrá los NT que generen vacíos
  var lsprod_empty = new Array();//lista que contendrá aquellas producciones a las que se le harán combinaciones
  this.ls_combinaciones = new Array();
  this.ls_prod3 = new Array();//Lista que guardará las producciones finales
  var pos=0;
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
            if(list_vacio.indexOf(c)!= -1 && !lsprod_empty.includes(prod) && prod.length != 1){//Si el caracter C está en la lista de vacios y la produccion no está
                                                                          //en la lista de producciones a combinar
              lsprod_empty.push(prod);//Se agrega la produccion actual a la lista
              var combinacion = GeneraCombinaciones(prod);//Generaos la combinación de la producción actual
              this.ls_combinaciones.push(combinacion);//Almacenamos cada combinación
            }
          }
        }
      }
    }
    //Imprimimos la lista de vacíos
/*  var newtope = document.createElement("P");
  newtope.innerHTML= " Lista de NT que generan vacíos: "+list_vacio;
  document.getElementById("demo5").appendChild(newtope);
  var newtope = document.createElement("P");
  newtope.innerHTML= " Lista de producciones que contienen los NT de la list_vacio: "+lsprod_empty;
  document.getElementById("demo5").appendChild(newtope);
/*
//Imprime las combinaciones

for (var i=0;i<this.ls_combinaciones.length; i++) {

  var newtope = document.createElement("P");
  newtope.innerHTML= "Tabla de combinaciones "+ i + ": \n";
  document.getElementById("demo5").appendChild(newtope);

  for (var j=0;j<this.ls_combinaciones[i].length; j++) {
    var newtope = document.createElement("P");
    newtope.innerHTML= this.ls_combinaciones[i][j]+ " \n";
    document.getElementById("demo5").appendChild(newtope);
  }
}*/
  for(var i=0; i < ls_prod.length; i++){//Se revisan cada regla de cada producción
      this.ls_prod3[i]=ls_prod[i];//Se guarda la producción actual
      for (var j=0;j<this.ls_combinaciones.length; j++) { //Se comienzan a recorrer todas las combinaciones
        found = this.ls_prod3[i].indexOf(this.ls_combinaciones[j][this.ls_combinaciones[j].length-1]);
        //this.ls_combinaciones[j][this.ls_combinaciones[j].length-1]
        //Esta parte del código retorna el último elemento de las combinaciones, el cual corresponde a la regla sin modificar
        //La regla sin modificar debe de encontrarse dentro de la producción
        //Found retorna el índice donde se encuentre la regla correspondiente
        if(found != -1){//Si se encuentra la regla dentro de la producción
          if(i==pos){//SEGUNDO
            //Si el índice guardado corresponde con la producción actual, quiere decir que encontramos una combinación en una producción anteriormente revisada
            this.ls_prod3[pos].splice(found, 1, this.ls_combinaciones[j]);//Así que agregaremos la combinación a esta producción
            pos=0;//Reiniciamos el identificador de la producción
          }
          this.ls_prod3[this.ls_prod3.length - 1].splice(found, 1, this.ls_combinaciones[j]);//PRIMERO!!!
          //Se sustituye la combinación en el lugar de la regla encontrada
          pos = i; //Guardamos el índice de la producción donde se realizó la sustitución
          i=0;//Reiniciamos el recorrido de las producciones en caso de que se encuentren más combinaciones dentro de la misma producción!
        }
      }
  }

  for(var i=0;i<this.ls_prod3.length;i++){
    for(var j=0;j<this.ls_prod3[i].length;j++){
      var rule=this.ls_prod3[i][j];
      rule=rule.toString();
      this.ls_prod3[i][j] = rule.replace(/#/g,'')
    }
    this.ls_prod3[i]=this.ls_prod3[i].join();
    this.ls_prod3[i]=this.ls_prod3[i].split(",");
    this.ls_prod3[i]=this.ls_prod3[i].filter(Boolean);
    this.ls_prod3[i]=this.ls_prod3[i].filter(onlyUnique);
  }

  document.getElementById("demo6").innerHTML = "Símbolos vacíos:\n ";

  for(var i=0;i<ls_NT.length;i++){
    var newtope = document.createElement("P");
    newtope.innerHTML= ls_NT[i]+" := "+this.ls_prod3[i]+"\n";
    document.getElementById("demo6").appendChild(newtope);
  }

SimbolosUnitarios(ls_NT);
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
