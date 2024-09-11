function calcular(){
    var calc= document.getElementById("num")
    var tab= document.getElementById("res")
    
    var n= Number(calc.value);
    var result = '';
    for(var c= 1; c <= 10; c++){
    result+=`${c} x ${n} = ${c * n}</br>`;
    
    };
    tab.innerHTML=result
}