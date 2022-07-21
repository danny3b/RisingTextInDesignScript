
var myDialog = app.dialogs.add({name:"Enter value",canCancel:true});
with(myDialog){
    with(dialogColumns.add()){
        var myPointSizeField = measurementEditboxes.add({editValue:2, editUnits:MeasurementUnits.points});
    }
}
var myResult = myDialog.show();
if(myResult == true){
    var myPointSize = myPointSizeField.editValue;
    myDialog.destroy();
}
else{
    myDialog.destroy();
}

var sel = app.selection;
if(sel.length) {
    for(a = 0; a < sel.length; a++) {
        var frame = sel[a];
        if(frame.constructor.name == 'TextFrame') {
            for (var i = 0; i < frame.parentStory.characters.length; i++) {
                if(i == 0) {
                    frame.parentStory.characters[i].pointSize = frame.parentStory.characters[i].pointSize+myPointSize;
                } else {
                    frame.parentStory.characters[i].pointSize = frame.parentStory.characters[i-1].pointSize+myPointSize;
                }
            }
        }
    }
}
