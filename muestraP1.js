Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

function muestraP1(){

  var idProd = new Array();


  for(var i=0;i<this.ls_prod1.length;i++){
    for(var j=0;j<this.ls_prod1[i].length;j++){

      idProd.push(this.ls_prod1[i][j+1]);

      if (this.ls_prod1[i][j+1]==idProd[i]){

      }

    }
  }

  idProd=idProd.unique().filter(function(e){ return e === 0 || e });


/*  var newP = document.createElement("P");
  newP.innerHTML=idProd;
  document.getElementById("demo4").appendChild(newP);*/
}
