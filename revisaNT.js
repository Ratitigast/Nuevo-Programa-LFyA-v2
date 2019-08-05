function revisaNT(){
//Esta functión revisará las producciones de los NT generadores, buscando si alguna
//de las reglas de la produccion CONTIENE ÚNICAMENTE TERMINALES.
  this.ls_nt1=new Array(); //Lista NT1 en la que se guardarán los NT que cumplan con tener una regla de únicamente Terminales
  this.ls_prod1=new Array(); //Lista P1 en la que se guardarán los símbolos Terminales que se identificaron
                            //JUNTO CON El NÚMERO DE NT AL QUE PERTENECE

  for(var i=0;i<this.ls_prod.length;i++){ //El límite es el tamaño de NT que generan producciones
    for(var j=0;j<this.ls_prod[i].length;j++){ //El límite es el tamaño de cada producción

      notlowercase=this.ls_prod[i][j].toString(); //Pasamos el contenido a string para poder realizar la conversión y la comparación
      lowercased=notlowercase.toLowerCase(); //Realizamos la conversión del contenido a mínusculas

      if(notlowercase==lowercased){ // Si el contenido son minúsculas, identificamos una regla con únicamente TERMINALES
        this.ls_nt1[i]=this.ls_nt[i];
        this.ls_prod1.push([this.ls_prod[i][j],i]);}
    }
  }

  this.ls_nt1=this.ls_nt1.filter(Boolean); //Eliminamos vacíos, 0, undefined,...

  document.getElementById("demo3").innerHTML = "Lista de NT1: "+ this.ls_nt1;
  document.getElementById("demo4").innerHTML = "Lista de P1: "+ this.ls_prod1;
}
