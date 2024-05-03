'use strict'

var images = ['./src/assets/bike1.png', './src/assets/bike2.png', './src/assets/bike3.png', './src/assets/bike4.png', './src/assets/bike5.png']
var indexSlide = 0
var time = 3000

var index = 1
const colorsOne = ['#050505', '#201F1B', '#F4F3EE']
const colorsTwo = ['#01A5B1', '#FF5E1E', '#3A89FF']
const colorsThree = ['#131E2F', '#3F3C37', '#131E2F']
const colorsGradient = ['linear-gradient(180deg, #AEBDD1 0%, #3C495A 100%)', 'linear-gradient(180deg, #3A3933 0%, #201F1B 100%)', 'linear-gradient(180deg, #AEBDD1 0%, #3C495A 100%)']

const colorText = ['#333333', '#7E7A77', '#333333']
const colorH1 = ['#fff', '#fff', '#131E2F']

const changeBackground = () => {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    const btnColor = document.getElementById('btnColor')
    const btnBanner = document.getElementById('btnBanner')
    const line1 = document.getElementById('line')
    const line2 = document.querySelector('.line')
    const arrow = document.querySelector('.fa-chevron-down')
    const boxImg = document.querySelectorAll('.box-img')
    const boxInfo = document.querySelectorAll('.box-info')
    const priceThrough = document.getElementById('priceThrough')
    const h1Modelo = document.getElementById('txt-modelos')

    boxInfo.forEach((box) => {
        box.style.background = colorsThree[index]
    })

    boxImg.forEach((box) => {
        box.style.background = colorsGradient[index]
    })

    main.style.background = colorsOne[index]
    header.style.background = colorsThree[index]
    btnColor.style.background = colorsOne[index]
    line1.style.background = colorsTwo[index]
    line2.style.background = colorsTwo[index]

    btnBanner.style.border = `3px solid ${colorsTwo[index]}`

    arrow.style.color = colorsTwo[index]
    priceThrough.style.color = colorText[index]
    h1Modelo.style.color = colorH1[index]

    btnBanner.addEventListener('mouseleave', () => {
        btnBanner.style.background = 'none'
    })
    btnBanner.addEventListener('mouseenter', () => {
        btnBanner.style.background = colorsTwo[index == 0 ? index + 2 : index - 1]
    })

    if (index == 2) {
        btnColor.style.color = "#000000"
        btnColor.style.border = "2px solid #000000"
        index = 0
    } else {
        btnColor.style.border = "2px solid #ffff"
        btnColor.style.color = "#FFFFFF"
        index++
    }
}

const slideShow = () => {
    const banner = document.getElementById('banner')
    banner.style.opacity = '0'

    setTimeout(() => {
        banner.style.transition = 'opacity 1s'
        banner.style.opacity = '1'
        banner.style.background = `url(${images[indexSlide]})`
    }, 350)

    indexSlide++

    if (indexSlide == images.length) {
        indexSlide = 0
    }

    setTimeout(slideShow, time)
}
slideShow()


