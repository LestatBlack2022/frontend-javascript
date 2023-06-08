const emailMenu   = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu  = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCarContainer = document.querySelector('#shoppingCarContainer')
const productDitailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')

emailMenu.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toogleMobileMenu)
menuCarritoIcon.addEventListener('click', toogleCarritoMenu)
productDetailClose.addEventListener('click', toogleProductDetail)

function toogleProductDetail(){
    productDitailContainer.classList.add('inactive')
}

function toggleDesktopMenu(){
   productDitailContainer.classList.add('inactive') 
   shoppingCarContainer.classList.add('inactive')
   desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu(){
    productDitailContainer.classList.add('inactive')
    shoppingCarContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')     
}

function toogleCarritoMenu(){
    productDitailContainer.classList.add('inactive') 
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    shoppingCarContainer.classList.toggle('inactive')
}

const containerProducts = document.querySelector('.cards-container')


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        
        const cardImage = document.createElement('img')
        cardImage.setAttribute('src',product.image)
        cardImage.addEventListener('click', showDetailProduct)
        
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

function showDetailProduct(){
    shoppingCarContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDitailContainer.classList.remove('inactive')
}

function getProductList(){
    let url = "https://practica.liax.com.mx/imagenes.php"

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            const productList = []

            for (product of data) {
                productList.push({
                    name: product.nombre,
                    price: product.precio,
                    image: product.imagen,
                    description: product.descripcion        
                })
            }
            
            renderProducts(productList)
    })
    .catch(function(error) {
        console.log(error);
    });
}

getProductList()

