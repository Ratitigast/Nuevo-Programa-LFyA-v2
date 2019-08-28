function SimbolosUnitarios(ls_prod, ls_NT){

}
function index_u(ls_prod){
  this.ls_index_u = new Array();
  for(var i  = 0; i < ls_prod.length; i++){//Se revisan cada regla de cada producción
    for (var j = 0; j < ls_prod[i].length; j++){
      var prod = ls_prod[i][j].toString();//Se toma la regla a analizar
      var indexes = new Array();
      if(prod.length == 1 && prod.toUpperCase == prod){
        indexes.push(j);
      }
    }
    this.ls_index_u.push(indexes);
  }
}
