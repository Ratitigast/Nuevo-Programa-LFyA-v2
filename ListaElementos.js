function ListaElementos(nt_list,str, print) {

  var arr_res = new Array();
  var aux=0;
  var format =/[^a-zA-Z0–9_]/i; ///[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  this.str_lc=arr_toStrn(str);

  for(var i=0;i<=str_lc.length;i++){
    c = this.str_lc.charAt(i);
    if(c==c.toLowerCase()){
      arr_res[aux]=c;
      aux++;
    }
    else if (format.test(c)) {
      arr_res[aux]=c;
      aux++;
    }
  }

  full_res = arr_toStrn(arr_res);
  var ntprint= arr_toStrn(nt_list);

  var newtope = document.createElement("P");
  newtope.innerHTML= "Lista de Terminales: \n"+full_res;
  document.getElementById(print).appendChild(newtope);

  var newtope = document.createElement("P");
  newtope.innerHTML= "Lista de No Terminales: \n"+ ntprint;
  document.getElementById(print).appendChild(newtope);

  var newtope = document.createElement("P");
  newtope.innerHTML= "Símbolo Inicial: \n"+nt_list[0];
  document.getElementById(print).appendChild(newtope);

  return full_res;
}
function arr_toStrn(str){

  str=str.join();
  str=str.split(",")
  str=str.filter(Boolean);
  str=str.filter(onlyUnique);
  str=str.toString();

  return str;

}
