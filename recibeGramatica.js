function recibeGramatica(){
  var table= document.getElementById("myTable")
  var nt = table.getElementsByClassName("nt");
  var prod=document.getElementsByClassName("produccion");

    this.ls_nt=new Array();
    this.ls_prod=new Array();



  for (var i=0;i<nt.length;i++)
  {
      this.ls_nt[i]=nt[i].value;
  }
  for (var i=0;i<prod.length;i++)
  {
      temp=prod[i].value.split("|");
      this.ls_prod[i]=temp;
  }

  this.ls_nt=this.ls_nt.filter(Boolean);
  this.ls_prod=this.ls_prod.filter(Boolean);

  document.getElementById("demo").innerHTML = "Lista de NT: "+ this.ls_nt;
  document.getElementById("demo2").innerHTML = "Lista de producciones: "+ this.ls_prod;
}
