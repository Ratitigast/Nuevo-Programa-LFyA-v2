function SimbolosUnitarios(ls_NT){
  var ls_NT = ls_NT;
  var ls_index = new Array();
  var saved_pos = new Array();
  //this.ls_nt_u = new Array();
  //this.prod_u = new Array();

  ls_values = index_u(this.ls_prod3,ls_NT);

  this.ls_nt_u = ls_values[1];
  this.prod_u = ls_values[2];

  for(var i = 0; i < this.prod_u.length; i++){
    for(var j = 0; j < this.ls_nt_u.length; j++){
      found = this.prod_u[i].indexOf(this.ls_nt_u[j]);
      if(found != -1){
        this.prod_u.push(this.prod_u[j]);
        sec_found = this.prod_u[j].indexOf(this.ls_nt_u[i]);
        if(sec_found != -1){
          temp = this.prod_u[j];
          temp.push(this.prod_u[i]);
          this.prod_u[i] = temp;
        }
      }
    }
  }


  return ls_index;
}

function index_u(ls_prod3,ls_NT){
  this.ls_index_u = new Array();
  var ls_nt_u = new Array();
  var prod_u = new Array();
  for(var i  = 0; i < ls_prod3.length; i++){//Se revisan cada regla de cada producción
    var indexes = [], rule = [], nt = [];
    for (var j = 0; j < ls_prod3[i].length; j++){
      var prod = ls_prod3[i][j].toString();//Se toma la regla a analizar
      if(ls_prod3[i][j].length == 1 && prod.toUpperCase() == prod){
        indexes.push(j);
        nt.push(ls_NT[i]);
        rule.push(prod);
      }
    }
    this.ls_index_u.push(indexes);
    nt=nt.filter(onlyUnique).join();
    ls_nt_u.push(nt);
    prod_u.push(rule);
  }


  return [this.ls_index_u,ls_nt_u,prod_u];
}
