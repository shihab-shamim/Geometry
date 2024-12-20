
function getInputBaseValueById(inputId) {
    const base=document.getElementById(inputId).value
    const baseFloat=parseFloat(base)
    const number = isNaN(baseFloat) 
    if (number) {
        alert('Please enter your Base.')
        return
    }
   
    return baseFloat

}
function getHeightValueById(inputId) {
    const base=document.getElementById(inputId).value
    const baseFloat=parseFloat(base)
    const number = isNaN(baseFloat) 
    if (number) {
        alert('Please enter your Height.')
        return
    }
  
    return baseFloat

}
function getAreaValueById(inputId){
    const areaValue=document.getElementById(inputId)
    return areaValue
   

}

