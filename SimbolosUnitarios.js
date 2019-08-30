function SimbolosUnitarios(ls_NT){
  var ls_index = new Array();
  ls_index = index_u(this.ls_prod3);

  return ls_index;
}
function index_u(this.ls_prod3){
  this.ls_index_u = new Array();
  for(var i  = 0; i < this.ls_prod3.length; i++){//Se revisan cada regla de cada producción
    var indexes = [];
    for (var j = 0; j < this.ls_prod3[i].length; j++){
      var prod = this.ls_prod3[i][j].toString();//Se toma la regla a analizar
      if(this.ls_prod3[i][j].length == 1 && prod.toUpperCase() == prod){
        indexes.push(j);
      }
    }
    this.ls_index_u.push(indexes);
  }

  return this.ls_index_u;
}
