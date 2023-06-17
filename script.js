let reset = document.getElementById("reset")
reset.addEventListener("click", function () {
    document.getElementsByTagName("select")[0].value = ""
    document.getElementsByTagName("textarea")[0].value = ""
})

let img = document.getElementsByTagName("img")[0]

img.addEventListener("mouseout", function () {
    img.style.transition = 'width 0.5s, height 0.5s, rotate 0.5s'
    img.style.width = `8%`
    img.style.rotate = '0deg'
})


img.addEventListener("mouseover", function () {
    img.style.transition = 'width 0.5s, height 0.5s, rotate 0.5s'
    img.style.width = `9%`
    img.style.rotate = '5deg'
})
