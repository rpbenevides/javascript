num = document.querySelector('input#txtn')
xt = document.querySelector('select#txts')
var a = [ ]

function adicionar(){
    a.push(Number(num.value))
    var b = document.createElement('option')
    b.text = `O valor ${num.value} foi adicionado`
    xt.appendChild(b)
    
}