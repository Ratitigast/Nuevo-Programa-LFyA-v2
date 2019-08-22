function GeneraCombinaciones(prod){
  var indice = 0,j=0,prod_combinada = [];
  combinaciones = new Array();
  for (var k = 0; k < prod.length; k++){//Analizamos cada elemento de esa regla
    var c = prod.charAt(k);//Se toma el caracter actual de la regla
        cUpCase = c.toUpperCase();//Pasamos el elemento a mayúsculas
    if(c == cUpCase){//Si el caracter C y el símbolo NT no están en la lista de vacíos
      indice++;
    }
  }
  combinaciones = TablaVerdad(indice);
  prod_copy = prod.toString();
  for(var i=0;i<combinaciones.length;i++){
      for (var k = 0; k < prod.length; k++){//Analizamos cada elemento de esa regla
        var c = prod.charAt(k);//Se toma el caracter actual de la regla
            cUpCase = c.toUpperCase();//Pasamos el elemento a mayúsculas
        if(c == cUpCase && combinaciones[i][j]==0){//Si el caracter C y el símbolo NT no están en la lista de vacíos
            prod = prod.replace(c,'#');
            j++;
          }
        else if(c == cUpCase && combinaciones[i][j]==1){
            j++;
          }
        }
      prod_combinada.push(prod);
      j=0;
      prod=prod_copy;
    }

  return prod_combinada;
}
