const name = document.querySelector('.name')
const box = document.querySelector('.box')
const leftTopRadius = document.querySelector('.leftTopRadius')
const rightTopRadius = document.querySelector('.rightTopRadius')
const leftBottomRadius = document.querySelector('.leftBottomRadius')
const rightBottomRadius = document.querySelector('.rightBottomRadius')
const radius = document.querySelector('.radius')

box.style.width = '300px'
box.style.height = '300px'
box.style.backgroundColor = 'red'

const radiusGenerator = () => {
    box.style.borderRadius = `${leftTopRadius.value}% ${rightTopRadius.value}% ${rightBottomRadius.value}% ${leftBottomRadius.value}%`
}

radius.addEventListener('input', () => {
    box.style.borderRadius = `${radius.value}%`
})


leftTopRadius.addEventListener('input', radiusGenerator)
rightTopRadius.addEventListener('input', radiusGenerator)
leftBottomRadius.addEventListener('input', radiusGenerator)
rightBottomRadius.addEventListener('input', radiusGenerator)

console.dir(radius);


// radius.oninput = radiusGenerator