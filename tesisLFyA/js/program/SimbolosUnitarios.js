function SimbolosUnitarios(ls_NT){
  this.ls_NT_f = ls_NT;
  var ls_index = new Array();
  var saved_pos = new Array();

  var cont =0;
  for(var i = 0; i < this.ls_prod3.length; i++){
    for(var j = 0; j < this.ls_prod3[i].length; j++){
      var prod = this.ls_prod3[i][j].toString();//Se toma la regla a analizar
      var nt = ls_NT[i].toString();//Se toma el NT correspondiente a la producción
      if(prod == prod.toUpperCase()){//Si la producción no contiene Terminales, quiere decir que solo contiene NT potenciales a crear vacíos
        for (var k = 0; k < prod.length; k++){//Analizamos cada elemento de esa regla
          var c = prod.charAt(k);//Se toma el caracter actual de la regla
              if(c==nt){
                cont++;
              }
            }
            if(prod.length==cont){
              this.ls_prod3[i].splice(j,1);
            }
            cont=0;
      }
    }
  }

  ls_values = index_u(this.ls_prod3,ls_NT);

  this.ls_nt_u = ls_values[1];
  this.prod_u = ls_values[2];
  this.ls_prod4 = new Array();

  for(var i = 0; i < this.prod_u.length; i++){
    for(var j = 0; j < this.ls_nt_u.length; j++){
      found = this.prod_u[i].indexOf(this.ls_nt_u[j]);
      if(found != -1){
        temp_arr = this.prod_u[i];
        temp_arr.push(this.prod_u[j]);
        this.prod_u[i] = temp_arr;
        this.prod_u[i] = getTogueter(this.prod_u[i]);

        sec_found = this.prod_u[j].indexOf(this.ls_nt_u[i]);
        if(sec_found != -1){
          temp = this.prod_u[j];
          temp.push(this.prod_u[i]);
          this.prod_u[j] = temp;
          this.prod_u[j] = getTogueter(this.prod_u[j]);
        }

      }
    }
  }
  for(var i = 0; i < this.ls_nt_u.length; i++){
    found_same = this.prod_u[i].indexOf(this.ls_nt_u[i]);
    if(found_same!=-1){this.prod_u[i].splice(found_same,1);}
  }
  this.ls_prod4 = this.ls_prod3;

  for(var i = 0; i < this.ls_index_u.length; i++){
    for (var j = 0; j < this.ls_index_u[i].length; j++){

      found_indexU = this.ls_nt_u.indexOf(this.ls_prod4[i][this.ls_index_u[i][j]]);
      insert_array = this.ls_prod4[i];
      insert_array.push(this.prod_u[found_indexU]);
      this.ls_prod4[i] = insert_array;
      this.ls_prod4[i] = getTogueter(this.ls_prod4[i]);

    }
    this.ls_prod4[i]=this.ls_prod4[i].filter(onlyUnique);
  }

  index_u(this.ls_prod4,ls_NT);

  for(var i = 0; i < this.ls_index_u.length; i++){
    for (var j = 0; j < this.ls_index_u[i].length; j++){
      found_indexP = ls_NT.indexOf(this.ls_prod4[i][this.ls_index_u[i][j]]);
      insert_array = this.ls_prod4[i];
      insert_array.push(this.ls_prod3[found_indexP]);
      this.ls_prod4[i] = insert_array;
      this.ls_prod4[i] = getTogueter(this.ls_prod4[i]);
    }
    this.ls_prod4[i]=this.ls_prod4[i].filter(onlyUnique);
  }

  for(var i  = 0; i < this.ls_prod4.length; i++){//Se revisan cada regla de cada producción

    this.ls_prod4[i] = this.ls_prod4[i].filter( function( el ) {
      return ls_NT.indexOf( el ) < 0;
    } );

  }

  var print = "demo7";
  lT=ListaElementos(ls_NT,this.ls_prod4,print);
  for(var i=0;i<ls_NT.length;i++){
    var newtope = document.createElement("P");
    newtope.innerHTML= ls_NT[i]+" := "+this.ls_prod4[i]+"\n";
    document.getElementById(print).appendChild(newtope);
  }
  this.ls_NT_f = ls_NT;

  var newtope = document.createElement("P");
  document.getElementById(print).appendChild(newtope);
  var flag=1;
  recibeGramatica(flag);
  Muertos_Inaccesibles(flag);

}

function index_u(ls_prodd,ls_NT){
  this.ls_index_u = new Array();
  var ls_nt_u = new Array();
  var prod_u = new Array();
  for(var i  = 0; i < ls_prodd.length; i++){//Se revisan cada regla de cada producción
    var indexes = [], rule = [], nt = [];
    for (var j = 0; j < ls_prodd[i].length; j++){
      var prod = ls_prodd[i][j].toString();//Se toma la regla a analizar
      if(ls_prodd[i][j].length == 1 && prod.toUpperCase() == prod){
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

function getTogueter(array){
  array=array.join();
  array=array.split(",");
  array=array.filter(Boolean);
  array=array.filter(onlyUnique);

  return array;
}
