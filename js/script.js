// dropdownlar
function openCurrencyDrop() {
    const dropdown = document.querySelector('.currency-select .dropdown')
    dropdown.classList.toggle('block')
}

function openLanguageDrop() {
    const dropdown = document.querySelector('.language .dropdown')
    dropdown.classList.toggle('block')
}

function openBurgerCurrencyDrop() {
    const dropdown = document.querySelector('.addons .currency-select .dropdown')
    dropdown.classList.toggle('block')
}

function openBurgerLanguageDrop() {
    const dropdown = document.querySelector('.addons .language .dropdown')
    dropdown.classList.toggle('block')
}

// color activate in dropdown
function activateColor(item) {
    const dropitems = document.querySelectorAll(".dropitem")
    dropitems.forEach(item => item.classList.remove("purple"))
    item.classList.add("purple")
}

// burger
const burgerMenu = document.querySelector('.burger-menu')
function openBurger() {
    burgerMenu.style.display = 'block'
}
function closeBurger() {
    burgerMenu.style.display = 'none'
}

// checkbox
let data = [
    [
        {
            id: 1,
            name: 'Bloq',
            price: 200

        },
        {
            id: 2,
            name: 'Responsive',
            price: 100

        },
        {
            id: 3,
            name: 'Mesajlaşma',
            price: 50

        },
        {
            id: 4,
            name: 'Qalereya',
            price: 100

        },
        {
            id: 5,
            name: 'Saytda Axtarış',
            price: 100

        },
        {
            id: 6,
            name: 'Rezervasyon',
            price: 400

        },
        {
            id: 7,
            name: 'Analitika / İzləmə',
            price: 50

        },
        {
            id: 8,
            name: 'Üzv girişi /‍‍‍ Profillər',
            price: 400

        },
        {
            id: 9,
            name: 'Forum',
            price: 400

        },
        {
            id: 10,
            name: 'Canlı Söhbət',
            price: 50

        },
        {
            id: 11,
            name: 'Əlaqə Forması',
            price: 100

        },
        {
            id: 12,
            name: 'Xəritə Məlumatı / Geolocation',
            price: 100

        },
        {
            id: 13,
            name: 'Sosial Media inteqrasiyası',
            price: 50

        },
        {
            id: 14,
            name: 'Admin Panel',
            price: 300

        },
    ],
    [
        {
            id: 21,
            name: 'Başlıqlar & Meta',
            price: 200
        },
        {
            id: 22,
            name: 'Açar söz',
            price: 300
        },
        {
            id: 23,
            name: '+20 Qabaqcıl Texnika',
            price: 300
        },
        {
            id: 24,
            name: 'Başlıq Teqləri',
            price: 100
        },
        {
            id: 25,
            name: 'Sitemap',
            price: 100
        },
    ],
    [
        {
            id: 15,
            name: 'Ödəniş',
            price: 200
        },
        {
            id: 16,
            name: 'Səbət',
            price: 500
        },
        {
            id: 17,
            name: 'Məhsullar',
            price: 300
        },
        {
            id: 18,
            name: 'Bəyəndiklərim',
            price: 300
        },
        {
            id: 19,
            name: 'Filtr',
            price: 300
        },
        {
            id: 20,
            name: 'Məhsul Haqqında',
            price: 200
        },
    ]
]

data.map(item => {
    item.map(item => {
        item.flag = true 
    })
})

const addition = document.getElementById("addition")
const trade = document.getElementById("trade")
const find = document.getElementById("find")
const sumAddition = document.getElementById("addition-sum")
const sumSeo = document.getElementById("seo-sum")
const sumE = document.getElementById("e-sum")
const sumCommon = document.getElementById("common-sum")

addition.innerHTML = '0 ₼'
trade.innerHTML = '0 ₼'
find.innerHTML = '0 ₼'
sumAddition.innerHTML = '0 ₼'
sumSeo.innerHTML = '0 ₼'
sumE.innerHTML = '0 ₼'
sumCommon.innerHTML = '0 ₼'

function switchRadio(x) {
    data.forEach(itemArray => {
        itemArray.forEach(item => {
            if (item.id == x) {
                if (item.flag) {
                    if (item.id >= 1 && item.id <= 14) addition.innerHTML = (Number(addition.innerHTML.replace(' ₼', '')) + item.price) + ' ₼'
                    if (item.id >= 15 && item.id <= 20) trade.innerHTML = (Number(trade.innerHTML.replace(' ₼', '')) + item.price) + ' ₼'
                    if (item.id >= 21) find.innerHTML = (Number(find.innerHTML.replace(' ₼', '')) + item.price) + ' ₼'
                    item.flag = false
                } else {
                    if (item.id >= 1 && item.id <= 14) addition.innerHTML = (Number(addition.innerHTML.replace(' ₼', '')) - item.price) + ' ₼'
                    if (item.id >= 15 && item.id <= 20) trade.innerHTML = (Number(trade.innerHTML.replace(' ₼', '')) - item.price) + ' ₼'
                    if (item.id >= 21) find.innerHTML = (Number(find.innerHTML.replace(' ₼', '')) - item.price) + ' ₼'
                    item.flag = true
                }
            }
        })
    })

    sumAddition.innerHTML = addition.innerHTML
    sumSeo.innerHTML = find.innerHTML
    sumE.innerHTML = trade.innerHTML

    sum()
}


const pageS = document.querySelector(".page-s")
const pageCost = document.querySelector(".page-cost")
const pageRange = document.querySelector(".page-range")
const designRange = document.querySelector(".design-range")
const staticSum = document.querySelector(".static-sum")
const logoSum = document.querySelector(".logo-sum")

function range() {
    let currenValue = pageRange.value
    pageS.innerHTML = currenValue       
    pageCost.innerHTML = currenValue*100*designRange.value 
    staticSum.innerHTML = pageCost.innerHTML
    sum()
}
const logoRange = document.querySelector(".logo-range")
const sumLogo = document.querySelector(".sum-logo")
function logoDesign() {
    sumLogo.innerHTML = parseInt(logoRange.value) * 100 - 100
    logoSum.innerHTML = sumLogo.innerHTML
    sum()
}


function sum() {
    const ticaret = Number(sumE.innerHTML.replace(' ₼', ''))
    const seo = Number(sumSeo.innerHTML.replace(' ₼', ''))
    const elave = Number(sumAddition.innerHTML.replace(' ₼', ''))
    const logo = Number(logoSum.innerHTML.replace(' ₼', '')) || 0 
    const staticDesign = Number(staticSum.innerHTML.replace(' ₼', '')) || 0
    
    sumCommon.innerHTML = (ticaret + seo + elave + logo + staticDesign) + ' ₼'
}

// OPen Modal
const bgBlur = document.querySelector('.bg-blur')
function openModal() {
    bgBlur.style.display = 'grid'
}
function closeModal() {
    bgBlur.style.display = 'none'
}


// menu dropdowns

function handleDropdown(x) {
    const dropDesk = x.querySelector('.drop-desk')
    dropDesk.classList.toggle('flex')
}
function handleBurgerDropdown(x) {
    const dropDesk = x.querySelector('.drop-desk')
    dropDesk.classList.toggle('flex')
}