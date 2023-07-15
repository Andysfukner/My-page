const color0 = getComputedStyle(document.documentElement).getPropertyValue('--color0'); 
const color1 = getComputedStyle(document.documentElement).getPropertyValue('--color1'); 
const color2 = getComputedStyle(document.documentElement).getPropertyValue('--color2'); 
const color3 = getComputedStyle(document.documentElement).getPropertyValue('--color3'); 
const color4 = getComputedStyle(document.documentElement).getPropertyValue('--color4'); 
const color5 = getComputedStyle(document.documentElement).getPropertyValue('--color5'); 

function changeColors() {
document.body.style.setProperty('--color1', '#E1B1B1')
document.body.style.setProperty('--color2', '#AE4B4B')
document.body.style.setProperty('--color3', '#760F0F')
document.body.style.setProperty('--color4', '#490000')
document.body.style.setProperty('--color5', '#1B0000')
}
