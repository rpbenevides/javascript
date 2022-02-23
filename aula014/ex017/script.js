function gerar(){
    nu = document.querySelector('input#numero')
    num = Number(nu.value)
    tab = document.querySelector('select#tab')
    tab.innerHTML = ` `
    for (c = 0; c <=10; c++){
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${c*num}`
        tab.appendChild(item)
    }


}