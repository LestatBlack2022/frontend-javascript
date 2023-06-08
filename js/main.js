const emailMenu   = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu  = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCarContainer = document.querySelector('#shoppingCarContainer')
const productDitailContainer = document.querySelector('#productDetail')
const containerProducts = document.querySelector('.cards-container')


emailMenu.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toogleMobileMenu)
menuCarritoIcon.addEventListener('click', toogleCarritoMenu)
const productList = []



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

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        productCard.setAttribute('data-sku', product.id)
        
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
    productDitailContainer.innerHTML = ''

    /*Se obtiene el indentificado del producto seleccionado*/
    const productSku = this.parentElement.getAttribute('data-sku')
    const productSearch = productList.filter(function (producto) { return producto.id == productSku; })

    /*Se crea el elemento dinamico a partir de ProductList*/
    const productDetailClose = document.createElement('div')
    productDetailClose.classList.add('product-detail-close')
    const productDetailCloseImg = document.createElement('img')
    productDetailCloseImg.setAttribute('src', '/icons/icon_close.png')
    productDetailClose.appendChild(productDetailCloseImg)
    productDetailClose.addEventListener('click', toogleProductDetail)

    const productDitailContainerImg = document.createElement('img')
    productDitailContainerImg.setAttribute('src', productSearch[0].image)
    
    const productDetailProductInfo = document.createElement('div')
    productDetailProductInfo.classList.add('product-info') 
    
    const productDetailProductInfoPrice = document.createElement('p')
    productDetailProductInfoPrice.innerText = '$' + productSearch[0].price
    
    const productDetailProductInfoName = document.createElement('p')
    productDetailProductInfoName.innerText = productSearch[0].name
    
    const productDetailProductInfoDescripcion = document.createElement('p')
    productDetailProductInfoDescripcion.innerText = productSearch[0].description

    productDetailProductInfo.appendChild(productDetailProductInfoPrice)
    productDetailProductInfo.appendChild(productDetailProductInfoName)
    productDetailProductInfo.appendChild(productDetailProductInfoDescripcion)

    const productDetailProductInfoButton = document.createElement('button')
    productDetailProductInfoButton.classList.add('primary-button','add-to-cart-button') 
    productDetailProductInfoButton.innerText = 'Add to cart'

    productDitailContainer.appendChild(productDetailClose)
    productDitailContainer.appendChild(productDitailContainerImg)
    productDitailContainer.appendChild(productDetailProductInfo)
    productDitailContainer.appendChild(productDetailProductInfoButton)  
}

function getProductList(productList){
    let url = "https://practica.liax.com.mx/imagenes.php"

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {

            for (product of data) {
                productList.push({
                    name: product.nombre,
                    price: product.precio,
                    image: product.imagen,
                    description: product.descripcion,
                    id: product.id_registro        
                })
            }
            
            renderProducts(productList)
    })
    .catch(function(error) {
        console.log(error);
    });
}

getProductList(productList)

