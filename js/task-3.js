function getElementWidth(content,padding,border){
    content = Number.parseFloat(content)
    padding = Number.parseFloat(padding)
    border = Number.parseFloat(border)
    return content+padding*2+border*2
}
