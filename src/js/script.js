'use strict'

let index = 1
const colorsOne= ['#000000', '#201F1B', '#F4F3EE']
const colorsTwo = ['#01A5B1', '#FF5E1E', '#3A89FF']
const colorsThree = ['#131E2F', '#3F3C37', '#131E2F']

const changeBackground = () => {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    const btnColor = document.getElementById('btn-color')

    main.style.background = colorsOne[index]
    header.style.background = colorsTwo[index]
    btnColor.style.background = colorsOne[index]
    

    if (index == 2){
        btnColor.style.color = "#000000"
        btnColor.style.border = "2px solid #000000" ;
        index = 0
    }else {
        btnColor.style.border = "2px solid #ffff" ;
        btnColor.style.color = "#FFFFFF"
        index++
    }
}