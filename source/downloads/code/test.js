#target Photoshop

// fixer les préférences sur pixels
var originalRulerUnits = app.preferences.rulerUnits
app.preferences.rulerUnits = Units.PIXELS


if(app.documents.length < 1){  
    alert("Il n'y a pas de document ouvert! ");   
}else{  
   var document = app.activeDocument; 
}  
//sauvegarde de l'etat initial
var history = document.activeHistoryState;


//.---------------------------------------------------------------
var filename = prompt ("Entrer le nom du fichier que vous souhaiter sauvegarder", "","Nom du fichier :");
var creditphoto = prompt ("Entrer le crédit photo","","Crédit photo :");
var extension = creditphoto.split('.').pop();
var s = ("_77px_");
if(creditphoto.split('.').lenght <= 1){
    extention = 'jpg';
    creditphoto += '.jpg';
    }
var totalfilename = filename.concat((s)+creditphoto);
var file = new File('/L/web/' + totalfilename  );
var options = new ExportOptionsSaveForWeb();
options.quality = 70;
options.format = SaveDocumentType.JPEG;
options.JPEG
document.exportDocument(file, ExportType.SAVEFORWEB, options);

//recuperation de l'etat initial
document.activeHistoryState = history;
// restaurer les préférences a l'origine
app.preferences.rulerUnits = originalRulerUnits
//----------------------------------------------------
 