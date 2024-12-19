
function triangleCalculator() {
    const base=getInputBaseValueById('triangle-base')
    const height=getHeightValueById('triangle-height')
    const area = 0.5 * base * height;
    const number = isNaN(area) 
    if (number) {
        alert('Please enter valid numbers.')
        return
    }
    const show=getAreaValueById('show-triangle')
    show.innerText =area
   
}