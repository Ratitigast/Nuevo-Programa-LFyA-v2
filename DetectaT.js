function DetectaT(str) {
  var arr_res = new Array();
  var aux=0;
  var format =/\p{S}/u; ///[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  str_lc=arr_toStrn(str);
  str_spcial=str_lc;
  for(var i=0;i<=str_lc.length;i++){
    c = str_lc.charAt(i);
    if(c==c.toLowerCase()){
      arr_res[aux]=c;
      aux++;
    }
    else if (format.test(c)) {
      arr_res[aux]=c;
      aux++;
    }
  }
  /*res=str_lc.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi);
  //res=res.split("");
  arr_res[0]=res.filter(onlyUnique);
  /*
  res_special=str_spcial.replace(/[!@#$%^&*()_+{};':"|,.<>?]/g,'');
  res_special=res_special.split("");
  arr_res[1]=res_special.filter(onlyUnique);*/

  full_res = arr_toStrn(arr_res);

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
