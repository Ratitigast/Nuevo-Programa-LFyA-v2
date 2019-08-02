function revisaNT(){

  this.ls_nt1=new Array();
  this.ls_prod1=new Array();
  this.aux=0;

  for(var i=0;i<this.ls_prod.length;i++){
    for(var j=0;j<this.ls_prod[i].length;j++){

      notlowercase=this.ls_prod[i][j].toString();
      lowercased=notlowercase.toLowerCase();

      res=revisaT(notlowercase,lowercased,i,j);

      this.ls_nt1[i]=res.nt1;
      this.ls_prod1[res.cont]=res.p1;

    }
  }

  this.ls_nt1=this.ls_nt1.filter(Boolean);

  document.getElementById("demo3").innerHTML = "Lista de NT1: "+ this.ls_nt1;
  document.getElementById("demo4").innerHTML = "Lista de P1: "+ this.ls_prod1;
}
function revisaT(notlowercase,lowercased,i,j){
  var notlowercase=notlowercase;
  var lowercased=lowercased;
  var tempNT=0;
  var tempP= new Array();

  if(notlowercase==lowercased){
    tempNT=this.ls_nt[i];
    tempP.push(this.ls_prod[i][j]);
    this.aux=this.aux+1;
  }
    return{
      nt1: tempNT,
      p1: tempP,
      cont: this.aux,
    };
}
