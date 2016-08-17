
//var makerURL="https://maker.ifttt.com/trigger/Elite/with/key/kc5QT0DaSbPGw6Kva6132jsGZq1CCgav41xoq_krImr"
//var makerURL="https://maker.ifttt.com/trigger/Contact/with/key/kc5QT0DaSbPGw6Kva6132jsGZq1CCgav41xoq_krImr";
var makerURL = "https://maker.ifttt.com/trigger/Emailcontact/with/key/bVa-POeyeE3xqxlgBcelRWXM9Bm79vZo_UqWcjQDWR2";

function submitIt(){
    var name = $("#Name").val();
    var mail = $("#Email").val();
    var msg = $("#Message").val();
    
    var sendoff={
        "value1": name,
        "value2": mail,
        "value3":msg
    }
    
    $.post(makerURL,sendoff);
    
    $("#Name").val("");
    $("#Email").val("");
    $("#Message").val("");
}