
function triangleCalculator() {
    const base=getInputBaseValueById('triangle-base')
    const height=getHeightValueById('triangle-height')
    const area = 0.5 * base * height;
   
    const show=getAreaValueById('show-triangle')
    show.innerText =area
   
}