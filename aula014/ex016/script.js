function contar(){
    var ini = document.querySelector('input#in')
    var fim = document.querySelector('input#fi')
    var pas = document.querySelector('input#pa')
    var res = document.querySelector('div#res')
    var start = Number(ini.value)
    var end = Number(fim.value)
    var passo = Number(pas.value)
    if (start < end){
        for(var n = start; n <= end; n += passo){
            res.innerHTML += `${n} \u{1F449}`}
        }
    else {
        for(var n = start; n >= end; n -= passo){
            res.innerHTML += `${n} \u{1F449}`}
    }
    res.innerHTML +=`\u{1F3C1}`
}
