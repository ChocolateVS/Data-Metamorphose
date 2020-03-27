////////////MENU///////////
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
    }else if (!encr && num == 6){
        document.getElementById("shift").style.display="none";
    }
    
    if (decr && num == 7) {
        document.getElementById("shift").style.display="block";
    }else if (!decr && num == 7){
        document.getElementById("shift").style.display="none";
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

////////////8 BIT BINARY TO DECIMAL////////////
function bitBinaryToDecimal() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num4 = document.getElementById("num4").value;
    var num8 = document.getElementById("num8").value;
    var num16 = document.getElementById("num16").value;
    var num32 = document.getElementById("num32").value;
    var num64 = document.getElementById("num64").value;

    var dec = (num64 * Math.pow(2,6)) + (num32 * Math.pow(2,5)) + (num16 * Math.pow(2,4)) + (num8 * Math.pow(2,3)) + (num4 * Math.pow(2,2)) + (num2 * Math.pow(2,1)) + (num1 * Math.pow(2,0)); 
    document.getElementById("result").innerHTML = dec;
}

////////////Binary to Decimal////////////
function binaryToDec() {
    var binary = document.getElementById("anyBinary").value;
    var result = calculateAny(binary);
    if (result >= 0) {
        document.getElementById("resultAny").innerHTML = result;
    }
}

////////////Binary to Ascii////////////
function binToAscii() {
    var binary = document.getElementById("binAscii").value;
    var result = calculateAny(binary);
    if (result >= 0) {
        var char = String.fromCharCode(result);
        document.getElementById("resultBinAscii").innerHTML = char;
    }
}

////////////Decimal To Binary////////////
function decToBin() {
    var decimal = document.getElementById("anyDecimal").value;      
    var number = parseInt(decimal);
    dec = (number).toString(2);
    document.getElementById("resultBin").innerHTML = dec;    
}

////////////Decimal To Binary////////////
function decToHEX() {
    var decimal = document.getElementById("anyHEX").value;      
    var number = parseInt(decimal);
    dec = ((number).toString(16)).toUpperCase();
    document.getElementById("resultDecHEX").innerHTML = dec;    
}

////////////CHARACTER CODE TO ASCII CHARACTER////////////
function charCodeToAscii() {
    var number = document.getElementById("asciiChar").value;
    var char = String.fromCharCode(number);
    document.getElementById("resultAsciiChar").innerHTML = char;
}

////////////ASCII CHARACTER TO CHARACTER CODE////////////
function asciiToCharCode() {
    var char = document.getElementById("asciiCode").value;
    var codes;
    var code = char.charCodeAt();
    document.getElementById("resultAsciiCode").innerHTML = code;
}

////////////ASCII CHARACTER TO BINARY////////////
function asciiToBin(){
    var char = document.getElementById("anyAscii").value;
    var codes;
    var code = char.charCodeAt();
    var number = parseInt(code);
    dec = (number).toString(2);
    document.getElementById("resultAsciiBin").innerHTML = dec;
}
                                                          
////////////CHARACTER CODE TO BINARY////////////
function charCodeToBin(){
    var decimal = document.getElementById("anyCharCode").value;   
    var number = parseInt(decimal);
    dec = (number).toString(2);
    document.getElementById("resultCharBin").innerHTML = dec;  
}

////////////STANDARD CAESER CIPHER////////////
function standardCaeser(){
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var letterArr = letters.split(''); 
    var shift = document.getElementById("shiftStandard").value;
    var text = document.getElementById("caeserStandard").value;
    var textLower = text.toLowerCase();
    var chars = textLower.split('');
    var letter = /^[A-Za-z]+$/;
    var shifted = '';
    var cont = true;
    if (!text.match(letter)) {
        alert("Please enter only characters (a-z/A-Z)");
        cont = false;
    } 
    if (cont) {
        chars.forEach(element => {
            var charShift = parseInt(letterArr.indexOf(element)) + parseInt(shift);
            var character = letters.charAt(charShift%26);
            shifted = shifted + character;
        });
        print = "Lower: " + shifted + ', ' + "Upper: " + shifted.toUpperCase();
        document.getElementById("resultStandard").innerHTML = print;
    }
}

////////////RGB TO HEX////////////
function rgbToHEX(r,g,b,set){
    var arr = [r, g, b];      
    var hexChar1 = (Math.floor(r / 16)).toString(16);
    var hexChar2 = (r % 16).toString(16);
    var hexChar3 = (Math.floor(g / 16)).toString(16);
    var hexChar4 = (g % 16).toString(16);
    var hexChar5 = (Math.floor(b / 16)).toString(16);
    var hexChar6 = (b % 16).toString(16);
    var hex = '#' + hexChar1 + hexChar2 + hexChar3 + hexChar4 + hexChar5 + hexChar6;
    var rgb = "rgb(" + r + ', ' + g + ', ' + b + ')';
    if (set != 1){
        document.getElementById("resultHEX").innerHTML = hex; 
    }
    if (set == 1){
        var print = "HEX: " + hex + ", " + "RGB: " + rgb;
        document.getElementById("cColor").innerHTML = print;
    }
}

///////////HEX to RGB//////////// 
function HEXtoRGB(set, hexArr, hex) {
    var color;
    if (hexArr.length == 7 && hexArr[0] == '#') {
        color = hex;    
        hexArr.shift();
    }
    else if (hexArr.length == 6){ 
        color = hex;
    }
    var r = (16 * parseInt(hexArr[0], 16)) + parseInt(hexArr[1], 16);
    var g = (16 * parseInt(hexArr[2], 16)) + parseInt(hexArr[3], 16);
    var b = (16 * parseInt(hexArr[4], 16)) + parseInt(hexArr[5], 16);
    var rgb = "rgb(" + r + ', ' + g + ', ' + b + ')';
    if (set != 1){
        document.getElementById("resultRGB").innerHTML = rgb;
    }
    if (set == 1){
        if(!color.includes('#')){
            color = "#" + color;
        }
        var print = "HEX: " + color + ", " + "RGB: " + rgb;
        document.getElementById("cColor").innerHTML = print;
    }
}

////////////Random Background Color////////////
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; 
  }
  var hexArr = color.split('')
  hexArr.shift();
  var r = (16 * parseInt(hexArr[0], 16)) + parseInt(hexArr[1], 16);
  var g = (16 * parseInt(hexArr[2], 16)) + parseInt(hexArr[3], 16);
  var b = (16 * parseInt(hexArr[4], 16)) + parseInt(hexArr[5], 16);
  var rgb = "rgb(" + r + ', ' + g + ', ' + b + ')';

  var print = "HEX: " + color + ", " + "RGB: " + rgb 
  document.getElementById("cColor").innerHTML = print;
  document.body.style.backgroundColor = color;
  return color;
}

////////////Set Background to Hex Value////////////
function setHexColor(hexArr, color){
    if (hexArr.length == 6) {
        var colorSet = "#" + color;
        document.body.style.backgroundColor = colorSet;
    }
    if (hexArr.length == 7 && hexArr[0] == '#') {
        hexArr.shift();
        document.body.style.backgroundColor = color;
    }
    HEXtoRGB(1, hexArr, color);
}

////////////Set Background to Hex Value////////////
function setRGBColor(r,g,b) {
    color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.body.style.backgroundColor = color;
    rgbToHEX(r,g,b,1);
}

////////////Binary Calc////////////
function calculateAny(binary){
    var binaryArr = binary.split('');
    var decimal = 0;
    var exponent = 0;
    var cont = true;
    binaryArr.reverse();
    binaryArr.forEach(element => {
        if (element != '0' && element != '1' && cont == true) {
            alert("Invalid Binary Number");
            cont = false;
        }      
    });
    if (cont == true) {
        binaryArr.forEach(element => {           
            decimal += element*(2**(exponent));
            exponent++;
        });
        return(decimal);
    }
}

////////////FORM CHECKER////////////
var chosen = 0;
function choose(num){
    if (num == 1){
        chosen = 1;
    }
    if (num == 2){
        chosen = 2;
    }
}
function numChosenRGB() {
    var r = document.getElementById("R-HEX").value;
    var g = document.getElementById("G-HEX").value;
    var b = document.getElementById("B-HEX").value;
    if (chosen == 1){
        setRGBColor(r,g,b);
    }
    else {
        rgbToHEX(r,g,b,0);
    }
}
function numChosenHEX() {
    var color = document.getElementById("inputHEX").value;
    var hexArr = color.split('');
    if (hexArr.length == 7 && hexArr[0] != '#') {
        cont = false;
        alert("Please enter a valid hex value eg: '#FFFFFF' or 'FFFFFF'");
    }
    else {
        if (chosen == 1){
            setHexColor(hexArr, color);
        }
        else {
            HEXtoRGB(0, hexArr, color);
        }
    }
}

/*
/CLASSES/
- DEC:      dec
- HEX:      hex
- HEX(color)hexc
- RGB:      rgb
- BINARY:   bin
- ASCII:    asc
- CHARCODE: char
- CIPHER:   dec, enc
- COLOR:    color, rgb, hexc
*/

