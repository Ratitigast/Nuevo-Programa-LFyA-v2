function DetectaT(str) {
  str=str.join();
  str=str.split(",")
  str=str.toString();

  res=str.replace(/[^a-z]/g,'');

  return res;
}
