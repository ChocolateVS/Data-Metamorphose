var checked = true;
function menu(num){
    var dec = document.getElementById("checkbox_1").checked;
    var bin = document.getElementById("checkbox_2").checked;
    var asc = document.getElementById("checkbox_3").checked;
    var char = document.getElementById("checkbox_4").checked;
    var hex = document.getElementById("checkbox_5").checked;
    var encr = document.getElementById("checkbox_6").checked;
    var decr = document.getElementById("checkbox_7").checked;
    var rgb = document.getElementById("checkbox_8").checked;
    var color = document.getElementById("checkbox_9").checked;
    if (num == 10 && checked == true) {
        document.getElementById("checkbox_1").checked = false;
        document.getElementById("checkbox_2").checked = false;
        document.getElementById("checkbox_3").checked = false;
        document.getElementById("checkbox_4").checked = false;
        document.getElementById("checkbox_5").checked = false;
        document.getElementById("checkbox_6").checked = false;
        document.getElementById("checkbox_7").checked = false;
        document.getElementById("checkbox_8").checked = false;
        document.getElementById("checkbox_9").checked = false;
        checked = false;
        
        document.getElementById("bitBinDec").style.display="none";
        document.getElementById("binDec").style.display="none";
        document.getElementById("binAsc").style.display="none";
        document.getElementById("decBin").style.display="none";
        document.getElementById("decHEX").style.display="none";
        document.getElementById("charAsc").style.display="none";
        document.getElementById("ascChar").style.display="none";
        document.getElementById("ascBin").style.display="none";
        document.getElementById("charBin").style.display="none";
        document.getElementById("shift").style.display="none";
        document.getElementById("rotShift").style.display="none";
        document.getElementById("shiftAscii").style.display="none";
        document.getElementById("rgbHEX").style.display="none";
        document.getElementById("hexRGB").style.display="none";
        document.getElementById("randomColor").style.display="none";
        
        return;
    } 
    if (num == 10 && checked == false) {
        document.getElementById("checkbox_1").checked = true;
        document.getElementById("checkbox_2").checked = true;
        document.getElementById("checkbox_3").checked = true;
        document.getElementById("checkbox_4").checked = true;
        document.getElementById("checkbox_5").checked = true;
        document.getElementById("checkbox_6").checked = true;
        document.getElementById("checkbox_7").checked = true;
        document.getElementById("checkbox_8").checked = true;
        document.getElementById("checkbox_9").checked = true;
        checked = true;
        
        document.getElementById("bitBinDec").style.display="block";
        document.getElementById("binDec").style.display="block";
        document.getElementById("binAsc").style.display="block";
        document.getElementById("decBin").style.display="block";
        document.getElementById("decHEX").style.display="block";
        document.getElementById("charAsc").style.display="block";
        document.getElementById("ascChar").style.display="block";
        document.getElementById("ascBin").style.display="block";
        document.getElementById("charBin").style.display="block";
        document.getElementById("shift").style.display="block";
        document.getElementById("rotShift").style.display="block";
        document.getElementById("shiftAscii").style.display="block";
        document.getElementById("rgbHEX").style.display="block";
        document.getElementById("hexRGB").style.display="block";
        document.getElementById("randomColor").style.display="block";
        
        return;
    }
    if (dec && num == 1) {
        console.log("DEC VIS");
        document.getElementById("bitBinDec").style.display="block";
        document.getElementById("binDec").style.display="block";
        document.getElementById("decBin").style.display="block";
        document.getElementById("decHEX").style.display="block";
    }else if (!dec && num ==1){
        console.log("DEC INVIS");
        document.getElementById("bitBinDec").style.display="none";
        document.getElementById("binDec").style.display="none";
        document.getElementById("decBin").style.display="none";
        document.getElementById("decHEX").style.display="none";
    }
    
    if (bin && num == 2) {
        console.log("BIN VIS");
        document.getElementById("bitBinDec").style.display="block";
        document.getElementById("binDec").style.display="block";
        document.getElementById("binAsc").style.display="block";
        document.getElementById("decBin").style.display="block";
        document.getElementById("ascBin").style.display="block";
        document.getElementById("charBin").style.display="block";
    }else if (!bin && num == 2){
        console.log("BIN INVIS");
        document.getElementById("bitBinDec").style.display="none";
        document.getElementById("binDec").style.display="none";
        document.getElementById("binAsc").style.display="none";
        document.getElementById("decBin").style.display="none";
        document.getElementById("ascBin").style.display="none";
        document.getElementById("charBin").style.display="none";
    }
    
    if (asc && num == 3) {
        document.getElementById("binAsc").style.display="block";
        document.getElementById("charAsc").style.display="block";
        document.getElementById("ascChar").style.display="block";
        document.getElementById("ascBin").style.display="block";
    }else if (!asc && num == 3){
        document.getElementById("binAsc").style.display="none";
        document.getElementById("charAsc").style.display="none";
        document.getElementById("ascChar").style.display="none";
        document.getElementById("ascBin").style.display="none";
    }
    
    if (char && num == 4) {
        document.getElementById("charAsc").style.display="block";
        document.getElementById("ascChar").style.display="block";
        document.getElementById("charBin").style.display="block";
    }else if (!char && num == 4){
        document.getElementById("charAsc").style.display="none";
        document.getElementById("ascChar").style.display="none";
        document.getElementById("charBin").style.display="none";
    }
    
    if (hex && num == 5) {
        document.getElementById("decHEX").style.display="block";
        document.getElementById("rgbHEX").style.display="block";
        document.getElementById("hexRGB").style.display="block";
    }else if (!hex && num == 5){
        document.getElementById("decHEX").style.display="none";
        document.getElementById("rgbHEX").style.display="none";
        document.getElementById("hexRGB").style.display="none";
    }
    
    if (encr && num == 6) {
        document.getElementById("shift").style.display="block";
        document.getElementById("rotShift").style.display="block";
        document.getElementById("shiftAscii").style.display="block";
    }else if (!encr && num == 6){
        document.getElementById("shift").style.display="none";
        document.getElementById("rotShift").style.display="none";
        document.getElementById("shiftAscii").style.display="none";
    }
    
    if (decr && num == 7) {
        document.getElementById("shift").style.display="block";
        document.getElementById("rotShift").style.display="block";
        document.getElementById("shiftAscii").style.display="block";
    }else if (!decr && num == 7){
        document.getElementById("shift").style.display="none";
        document.getElementById("rotShift").style.display="none";
        document.getElementById("shiftAscii").style.display="none";
    }
    
    if (rgb && num == 8) {
        document.getElementById("rgbHEX").style.display="block";
        document.getElementById("hexRGB").style.display="block";
    }else if (!rgb && num == 8){
        document.getElementById("rgbHEX").style.display="none";
        document.getElementById("hexRGB").style.display="none";
    }
    
    if (color && num == 9) {
        document.getElementById("randomColor").style.display="block";
        document.getElementById("rgbHEX").style.display="block";
        document.getElementById("hexRGB").style.display="block";
    }else if (!color && num == 9){
        document.getElementById("randomColor").style.display="none";
        document.getElementById("rgbHEX").style.display="none";
        document.getElementById("hexRGB").style.display="none";
    }
}
