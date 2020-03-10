function init(){
    $("#dateDepart").datepicker({
        altFormat: "dd-mm-yy"
      });
    $("#dateRetour").datepicker({
        altFormat: "yy-mm-dd"
      });
}

var ville = new Array("montreal", "new york");

var vol = new Object();
//constructeur de vol
function Vol(origine, destination, prix){
}

function rechercherVolForm(){
    var txtOrigine = document.getElementById("depart");
    var origine = txtOrigine.value;
    var txtDestination = document.getElementById("destination");
    var destination = txtDestination.value;
    var txtNbPassagers = document.getElementById("passagers");    
    var nbPassagers = txtNbPassagers.value;
    var txt = origine + destination + nbPassagers;
    alert(txt);
}