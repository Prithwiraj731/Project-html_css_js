function ppi(){
    var h = document.getElementById('height').value;
    var w = document.getElementById('width').value;
    var diag_inch = document.getElementById('d-inch').value;
    var diag_pix = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2));
    var ppi = diag_pix / diag_inch;
    var final_ppi = ppi.toFixed(3);
    document.getElementById('result').innerHTML = "THE PPI IS: " + final_ppi;
}