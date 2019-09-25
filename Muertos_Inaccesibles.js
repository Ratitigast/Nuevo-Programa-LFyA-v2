//var lista_2; //Lista de producciones del segundo algortimo

function Muertos_Inaccesibles(flag){
  var act = false;
//Esta functión revisará las producciones de los NT generadores, buscando si alguna
//de las reglas de la produccion CONTIENE ÚNICAMENTE TERMINALES.
  this.ls_nt1=new Array(); //Lista NT1 en la que se guardarán los NT que cumplan con tener una regla de únicamente Terminales
  this.ls_prod1=new Array(); //Lista P1 en la que se guardarán los símbolos Terminales que se identificaron
                            //por cada NT1

  var aux=0;
  var ls_aux=new Array();//Guardará las reglas conformadas únicamente por terminales
  var term = new Array();

  for(var i=0;i<this.ls_prod.length;i++){ //El límite es el tamaño de NT que generan producciones
    for(var j=0;j<this.ls_prod[i].length;j++){ //El límite es el tamaño de cada producción

      notlowercase=this.ls_prod[i][j].toString(); //Pasamos el contenido a string para poder realizar la conversión y la comparación
      lowercased=notlowercase.toLowerCase(); //Realizamos la conversión del contenido a mínusculas

      if(notlowercase==lowercased){ // Si el contenido son minúsculas, identificamos una regla con únicamente TERMINALES
        this.ls_nt1[i]=this.ls_nt[i];
        ls_aux[aux]=this.ls_prod[i][j];
        aux++;
        for(var k = 0; k < notlowercase.length; k++){
            term.push(notlowercase.charAt(k));
        }
      }
      else if(notlowercase != notlowercase.toUpperCase()){
        for(var k = 0; k < notlowercase.length; k++){
          c = notlowercase.charAt(k);
          if(c == c.toLowerCase())
            if(!term.includes(c))
              term.push(c);
        }
      }
    }
    this.ls_prod1[i]=ls_aux;
    ls_aux=[]; //Vaciamos el arreglo para que guarde las nuevas reglas de la siguiente produccion
  }

  var lista = new Array(); //Lista de producciones primer algoritmo

  var nt_n = new Array(); // Lista de no terminales auxiliar


  for(var i = 0; i < ls_prod.length; i++)
    lista.push(new Array()); //Inicializa la lista de producciones con sub listas de acuerdo al numero de No Terminales con producciones
  do{
    act = false; // Bandera para saber si se modifico o no la lista nt_n
    for(var i = 0; i < ls_prod.length; i++ ){ // Para cada No terminal que tiene producciones
      for(var j = 0; j < ls_prod[i].length; j++){ // Para cada produccion
        var prod = this.ls_prod[i][j].toString(); // Produccion
        var tam = prod.length;
        if(prod != ""){ // Reduce la complejidad de busqueda
          if (prod == prod.toLowerCase()){ // Validamos si es una produccion solo de terminales
            lista[i].push(prod); // agregamos a la lista del primer algortimo en la posicion correspondiente la produccion
            ls_prod[i][j]= ""; // Se asigna como cadena vacia para no volver a considerar la produccion en el analisis
            if(!nt_n.includes(ls_nt[i])){ // Si el No terminal que genera la produccion no esta contenido en lista, lo agrega, evvitando repeticiones
              nt_n.push(ls_nt[i]);
              act = true; // Activamos la bandera, indicando cambios en la lista
            }
          }
          else{ // Si la produccion contiene tanto NT como T
            var cuentain=0,cuentaup=0;
            for(var k = 0; k <prod.length; k++ ){
              var c = prod.charAt(k);//Se toma el caracter actual de la regla
                  d = c.toUpperCase();//Pasamos el elemento a mayúsculas
              if(this.ls_nt.includes(c)){
                cuentain++;
              }
              if(c==d){
                cuentaup++;
              }
            }
            if(cuentain == cuentaup && !lista[i].includes(prod)){
              lista[i].push(prod);
              ls_prod[i][j]= "";
              if(!nt_n.includes(ls_nt[i])){
                nt_n.push(ls_nt[i]);
                act = true;
              }
            }
            /*for(var k = 0; k < nt_n.length; k++){ //Para cada elemento en la lista de No Terminales con producciones que generan solo terminales
              if(prod.includes(nt_n[k]) && !lista[i].includes(prod)){ // Si prod incluye algun simbolo de nt_n (podemos llegar a algun terminal) agregamos la produccion a la lista en la posicion correspondiente
                lista[i].push(prod);
                ls_prod[i][j]= "";
                if(!nt_n.includes(ls_nt[i])){
                  nt_n.push(ls_nt[i]);
                  act = true;
                }
              }
            }*/
          }
        }
      }
    }
    console.log(lista);

  } while(act);




  this.ls_nt1=this.ls_nt1.filter(Boolean); //Eliminamos vacíos, 0, undefined,...
  this.ls_prod1= this.ls_prod1.map(it => it.filter(_ => true)).filter(sub => sub.length);


  /*
  document.getElementById("demo3").innerHTML = "Lista de NT1: "+ this.ls_nt1;
  document.getElementById("demo4").innerHTML = "Lista de T1: "+ this.ls_prod1;
  //Mostramos la lista P1
let newArr = this.ls_prod1.map((v, i) => v.splice(0, 0, this.ls_nt1[i],':=') && v)
  var newtope = document.createElement("P");
  newtope.innerHTML="Lista P1 "+newArr;
  document.getElementById("demo4").appendChild(newtope);*/
  if(flag!=1){var print = "demo3";}
  else{var print = "demo8";}
  document.getElementById(print).innerHTML = "Resultado Símbolos muertos:\n ";

  lT=DetectaT(lista,print);

  for(var i=0;i<lista.length;i++){
    var newtope = document.createElement("P");
    newtope.innerHTML= ls_nt[i]+" := "+lista[i]+"\n";
    document.getElementById(print).appendChild(newtope);
  }

  lista = SimbolosInaccesibles(lista, ls_nt.slice(),flag);

}

function SimbolosInaccesibles(ls_prod, ls_NT,flag){ //Recibe la lista de producciones generadas del algortimo de Eliminacion de Muertos y la lista de NT
  var lista_2 = new Array();
  var queue = new Array(); // Cola para almacenar los NT que deben ser visitados (se maneja por indices)
  this.ls_nt2 = new Array();
  queue.push(0); // Por defecto el indice 0 corresponde al simbolo inicial
  var i = 0, a = 0; // var auxiliar, que contendra el indice a visitar
  this.ls_nt2[0] = ls_NT[0];
  ls_NT[0] = ""; // Marcamos como visitado el NT con el primer indice

  do{
    i = queue[0]; // Desencolamos el primer elemento en la cola
    queue.shift();
      lista_2.push(ls_prod[i]); // Agregamos todas las producciones correspondiente al terminal
      for (var j = 0; j < ls_prod[i].length; j++){ // Para cada produccion
        var prod = ls_prod[i][j].toString();
        if(prod != prod.toLowerCase()){ // Si es la union de NT y T
          for (var k = 0; k < prod.length; k++){ // Para cada simbolo
            var c = prod.charAt(k);
            if(c == c.toUpperCase() && ls_NT.includes(c)){ // Valida que el Simbolo corresponda a un NT y que no este incluido en la lista de No Terminales
              var m = ls_NT.indexOf(c); // obtemos el indice correspondiente al NT
              queue.push(m);
              this.ls_nt2.push(ls_NT[m]);
              ls_NT[m] = ""; // Marcamos como visitado el Simbolo NT
            }
          }
        }
      }
  }while(queue.length != 0); // Mientras no se agregen elementos a la cola, es decir NT que visitar
  console.log("alg 2");
  console.log(lista_2);

  if(flag!=1){var print = "demo4";}
  else{var print = "demo9";}

  document.getElementById(print).innerHTML = "Resultado Símbolos inaccesibles:\n ";
  lT=DetectaT(lista_2,print);
  for(var i=0;i<lista_2.length;i++){
    var newtope = document.createElement("P");
    newtope.innerHTML= this.ls_nt2[i]+" := "+lista_2[i]+"\n";
    document.getElementById(print).appendChild(newtope);
  }

  if(flag!=1){SimbolosVacios(lista_2, this.ls_nt2);}



  return lista_2;

}
