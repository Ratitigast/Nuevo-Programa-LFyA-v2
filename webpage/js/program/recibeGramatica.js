function recibeGramatica(flag){
  var table= document.getElementById("myTable")
  var nt = table.getElementsByClassName("nt"); //Identificamos los No terminales (NT) que tienen producciones
  var prod=document.getElementsByClassName("produccion");//identificamos los elementos de las producciones

    this.ls_nt=new Array(); //Este arreglo contendrá todos los NT
    this.ls_prod=new Array(); //Este arreglo contendrá arreglos de las producciones de cada NT de la siguiente forma:
    /*
    ls_prod[0] = [aA,bB,cC]
    ls_prod[1] = [bB,cC,dD]
     :
     :
    ls_prod[n] = [nN,nN,nN]*/

  for (var i=0;i<nt.length;i++)
  {
      this.ls_nt[i]=nt[i].value;
  }
  for (var i=0;i<prod.length;i++)
  {
      temp=prod[i].value.split("|");
      this.ls_prod[i]=temp;
  }

  //Eliminamos los elementos vacíos,0,undefined,...
  this.ls_nt=this.ls_nt.filter(Boolean);
  this.ls_prod=this.ls_prod.filter(Boolean);

  //Mostramos los elemenos de los arreglos
  //document.getElementById("demo").innerHTML = "Lista de NT: "+ this.ls_nt;
  //document.getElementById("demo2").innerHTML = "Lista de producciones: "+ this.ls_prod;
    if(flag == 1){this.ls_nt=this.ls_NT_f;this.ls_prod = this.ls_prod4;}
}
