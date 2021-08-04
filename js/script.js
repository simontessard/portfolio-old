
function chbg(element) {
    if (element == 'firstProject') 
    {
        document.getElementById('secondProject').style.filter = "blur(3px)";
        document.getElementById('thirdProject').style.filter = "blur(3px)";
    }
    if (element == 'secondProject') 
    { document.getElementById('firstProject').style.filter = "blur(3px)";
    document.getElementById('thirdProject').style.filter = "blur(3px)"; 
    }
    if (element == 'thirdProject') {
        document.getElementById('firstProject').style.filter = "blur(3px)";
        document.getElementById('secondProject').style.filter = "blur(3px)";
    }
}
    
    
function chbgdefault(element) {
    if (element == 'firstProject') { document.getElementById('secondProject').style.filter = "grayscale(0)";
    document.getElementById('thirdProject').style.filter = "grayscale(0)"; }
    
    if (element == 'secondProject') { document.getElementById('firstProject').style.filter = "grayscale(0)";
    document.getElementById('thirdProject').style.filter = "grayscale(0)"; }

    if (element == 'thirdProject') { document.getElementById('firstProject').style.filter = "grayscale(0)";
    document.getElementById('secondProject').style.filter = "grayscale(0)"; }
}