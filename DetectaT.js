function DetectaT(str) {
  str=str.join();
  str=str.split(",")
  
  str.replace( /[^A-Z]/g, '' );
    return (/[a-z]/.test(str));
}
