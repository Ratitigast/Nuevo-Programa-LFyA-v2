function TablaVerdad(n){

  var m = 1 << n; //1 binario será desplazado 3 unidades a la izquierda. Lo que aignifica 2 ^{3}
  var tabla = new Array();
  for (var i = 0; i < m; i++) {
      var s = i.toString(2); // convert to binary
      s = new Array(n + 1 - s.length).join('0') + s; // pad with zeroes
      tabla.push(s.split(""));
  }

  var newtope = document.createElement("P");
  newtope.innerHTML=" Tabla de verdad \n";
  document.getElementById("demo5").appendChild(newtope);

  for (var i=0;i<tabla.length; i++) {

    var newtope = document.createElement("P");
    newtope.innerHTML= tabla[i]+ " \n";
    document.getElementById("demo5").appendChild(newtope);

  }
}
