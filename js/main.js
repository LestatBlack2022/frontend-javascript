const emailMenu   = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu  = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

emailMenu.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toogleMobileMenu)
menuCarritoIcon.addEventListener('click', toogleCarritoMenu)


function toggleDesktopMenu(){
   productDetail.classList.add('inactive')
   desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu(){
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')     
}

function toogleCarritoMenu(){
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.toggle('inactive')
}

const containerProducts = document.querySelector('.cards-container')
const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computer',
    price: 110,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Monitor',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        
        const cardImage = document.createElement('img')
        cardImage.setAttribute('src',product.image)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div')
        
        const infoDivPrice = document.createElement('p')
        infoDivPrice.innerText = '$' + product.price
        const infoDivName = document.createElement('p')
        infoDivName.innerText = product.name

        productInfoDiv.appendChild(infoDivPrice)
        productInfoDiv.appendChild(infoDivName)

        const productInfoFigure = document.createElement('figure')
        const productInfoFigureImg = document.createElement('img')
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productInfoFigureImg)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(cardImage)
        productCard.appendChild(productInfo)
        containerProducts.appendChild(productCard)

    }

    
}

renderProducts(productList)