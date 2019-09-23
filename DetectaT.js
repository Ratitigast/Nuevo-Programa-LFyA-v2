function DetectaT(str) {
  var arr_res = new Array();
  str_lc=arr_toStrn(str);
  str_spcial=str_lc;

  res=str_lc.replace(/^\W/,'');
  res=res.split("");
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
  str=str.toString();

  return str;

}
