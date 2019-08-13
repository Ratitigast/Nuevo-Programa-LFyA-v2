function revisaNT(){
//Esta functión revisará las producciones de los NT generadores, buscando si alguna
//de las reglas de la produccion CONTIENE ÚNICAMENTE TERMINALES.
  this.ls_nt1=new Array(); //Lista NT1 en la que se guardarán los NT que cumplan con tener una regla de únicamente Terminales
  this.ls_prod1=new Array(); //Lista P1 en la que se guardarán los símbolos Terminales que se identificaron
                            //por cada NT1
  this.ls_T=new Array();

  var aux=0,aux1=0,k=0,element;
  var ls_aux=new Array();//Guardará las reglas conformadas únicamente por terminales

  for(var i=0;i<this.ls_prod.length;i++){ //El límite es el tamaño de NT que generan producciones
    for(var j=0;j<this.ls_prod[i].length;j++){ //El límite es el tamaño de cada producción

      notlowercase=this.ls_prod[i][j].toString(); //Pasamos el contenido a string para poder realizar la conversión y la comparación
      lowercased=notlowercase.toLowerCase(); //Realizamos la conversión del contenido a mínusculas
      array_notlowercase=notlowercase.split(" ");

      while(k<array_notlowercase.length){
        element=array_notlowercase[k];
        element=element.toString();element_lowercased=element.toLowerCase();
        if(element == element_lowercased){
          this.ls_T[aux1]=element; aux1++;
        }k++;
      }k=0;

      if(notlowercase==lowercased){ // Si el contenido son minúsculas, identificamos una regla con únicamente TERMINALES
        this.ls_nt1[i]=this.ls_nt[i];
        ls_aux[aux]=this.ls_prod[i][j];
        aux++;}
    }
    this.ls_prod1[i]=ls_aux;
    ls_aux=[]; //Vaciamos el arreglo para que guarde las nuevas reglas de la siguiente produccion
  }

  this.ls_nt1=this.ls_nt1.filter(Boolean); //Eliminamos vacíos, 0, undefined,...
  this.ls_T=this.ls_T.filter(Boolean);
  this.ls_prod1= this.ls_prod1.map(it => it.filter(_ => true)).filter(sub => sub.length);

  document.getElementById("demo3").innerHTML = "Lista de NT1: "+ this.ls_nt1;
  document.getElementById("demo4").innerHTML = "Lista de T1: "+ this.ls_prod1;
  //Mostramos la lista P1
  let newArr = this.ls_prod1.map((v, i) => v.splice(0, 0, this.ls_nt1[i]) && v)
  var newtope = document.createElement("P");
  newtope.innerHTML="Lista P1 "+newArr;
  document.getElementById("demo4").appendChild(newtope);


  var newtope = document.createElement("P");
  newtope.innerHTML="Arreglo de reglas "+this.ls_T;
  document.getElementById("demo4").appendChild(newtope);
}
