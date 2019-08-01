function revisaNT(){

  this.ls_nt1=new Array();
  this.ls_prod1=new Array();

  for(var i=0;i<this.ls_prod.length;i++){
    for(var j=0;j<this.ls_prod[i].length;j++){

      notlowercase=this.ls_prod[i][j].toString();
      lowercased=notlowercase.toLowerCase();

      if(notlowercase==lowercased){
        this.ls_nt1[i]=this.ls_nt[i];
        this.ls_prod1.push([this.ls_prod[i][j],i]);}
    }
  }

  this.ls_nt1=this.ls_nt1.filter(Boolean);

  document.getElementById("demo3").innerHTML = "Lista de NT1: "+ this.ls_nt1;
  document.getElementById("demo4").innerHTML = "Lista de P1: "+ this.ls_prod1;
}
