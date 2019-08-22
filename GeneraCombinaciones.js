function GeneraCombinaciones(prod){
  var indice = 0,j=0,prod_combinada = [];//indice almacenará el número de NT que contiene la regla
                                        //j será quien recorra el arreglo de combinaciones
  combinaciones = new Array(); //Almmacenará los arreglos de combinaciones
  for (var k = 0; k < prod.length; k++){ //Se recorrerá la regla para contar el número de NT que existen
    var c = prod.charAt(k);
        cUpCase = c.toUpperCase();
    if(c == cUpCase){
      indice++;
    }
  }
  combinaciones = TablaVerdad(indice);//Dependiendo el número de NT, se realizarán las posibles combinaciones

  prod_copy = prod.toString();//Guardamos una copia de la regla actual para volverla a usar en cada combinación posible

  for(var i=0;i<combinaciones.length;i++){ //Se realizarán las i posibles combinaciones...
      for (var k = 0; k < prod.length; k++){//...mientras se recorre la regla para aplicar los cambios de acuerdo a la tabla de combinaciones
        var c = prod.charAt(k);
            cUpCase = c.toUpperCase();
        if(c == cUpCase && combinaciones[i][j]==0){//Si detectamos un NT y la tabla indica un 0
            prod = prod.replace(c,'#');//Sustituimos el NT por el símbolo de vacío
            j++;//Avanzamos a la siguiente combinacion dentro del arreglo i
          }
        else if(c == cUpCase && combinaciones[i][j]==1){//Si detectamos un NT y la tabla indica un 1
            j++;//No afectamos a la regla y solo avanzamos a la siguiente combinacion dentro del arreglo i
          }
        }
      prod_combinada.push(prod); //Una vez recorrida la regla, la guardamos en el arreglo de combinaciones
      j=0;//Reiniciamos el contador
      prod=prod_copy;//Cargamos la copia de la regla para aplicarle la siguiente combinación
    }

  return prod_combinada;
}
