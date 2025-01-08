
function triangleCalculator() {
    const base=getInputBaseValueById('triangle-base')
    const height=getHeightValueById('triangle-height')
    const area = 0.5 * base * height;
    const number = isNaN(area) 
    if (number) {
      
        return
    }
   
    const show=getAreaValueById('show-triangle')
    show.innerText =area
   
}

function rectangleCalculator() {
    const width=getInputBaseValueById('rectangle-width')
    const length=getHeightValueById('rectangle-lenght')
    const area =  width * length;
   
    const number = isNaN(area) 
    if (number) {
      
        return
    }
   
    const show=getAreaValueById('show-rectangle')
    show.innerText =area
   
}


function parallelogramCalculator() {
    const base=getInputBaseValueById('parallelogram-base')
    const height=getHeightValueById('parallelogram-height')
    const area =  base * height;
   
    const number = isNaN(area) 
    if (number) {
      
        return
    }
   
    const show=getAreaValueById('show-parallelogram')
    show.innerText =area
   
}
function rhombusCalculator() {
    const base=getInputBaseValueById('rhombus-base')
    const height=getHeightValueById('rhombus-height')
    const area = 0.5 * base * height;
   
    const number = isNaN(area) 
    if (number) {
      
        return
    }
   
    const show=getAreaValueById('show-rhombus')
    show.innerText =area
   
}
function pentagonCalculator() {
    const base=getInputBaseValueById('pentagon-base')
    const height=getHeightValueById('pentagon-height')
    const area = 0.5 * base * height;
   
    const number = isNaN(area) 
    if (number) {
      
        return
    }
   
    const show=getAreaValueById('show-pentagon')
    show.innerText =area
   
}
function ellipseCalculator() {
    const base=getInputBaseValueById('ellipse-base')
    const height=getHeightValueById('ellipse-height')
    const area = 3.14 * base * height;
   
    const number = isNaN(area) 
    if (number) {
      
        return
    }
   
    const show=getAreaValueById('show-ellipse')
    show.innerText =area;
   
}
