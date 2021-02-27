var mainScreen = new Screen("mainScreen", mainLayout, ()=>{
    $$("calc").Element.onclick = calculate;
}).Open()

function calculate(){
    var aM = getV("A");
    var bcM = getV("B & C");
    var dM = getV("D");

    if((aM * bcM * dM) || (aM * bcM * dM) == 0){
        var vumi = (aM - dM) * 0.5;
        var lombo = Math.sqrt((bcM * bcM) - (vumi * vumi));
        console.log("lombo", lombo)
        console.log("vumi", vumi)
        var result = (lombo * vumi) + (lombo * dM);

        $$("result1").Element.innerHTML = "" + result.toFixed(3);
        $$("result2").Element.innerHTML = "" + (result / 435.6).toFixed(3);
    }
}

function getV(id){
    v1 = parseInt($$("textBox1_" + id).Element.value) || 0;
    v2 = parseInt($$("textBox2_" + id).Element.value) || 0;

    return v1 + (v2 / 12);
}