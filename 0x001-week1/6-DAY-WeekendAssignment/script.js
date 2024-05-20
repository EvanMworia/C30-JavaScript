const productsList = [
    {
        productPicture:
            'https://cdn.pixabay.com/photo/2016/01/09/16/28/monitor-1130493_640.png',
        productName: 'Monitor',
        productDescription: '24-inch Frameless Monitor',
        productPrice: 14500,
        quantity: 10,
    },
    {
        productPicture:
            'https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506_1280.jpg',
        productName: 'Mechanical-Keyboard',
        productDescription: '65% Blue Switch Keyboard',
        productPrice: 10500,
        quantity: 12,
    },
    {
        productPicture:
            'https://cdn.pixabay.com/photo/2015/08/18/01/54/computer-893226_640.jpg',
        productName: 'HDMI-Cable',
        productDescription: '3 Meter hdmi cable end-2-end',
        productPrice: 970,
        quantity: 0,
    },
    {
        productPicture:
            'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_640.jpg',
        productName: 'Mouse',
        productDescription: 'Gaming Mouse',
        productPrice: 700,
        quantity: 0,
    },
];

const productInventory = productsList.map((product) => {
    const idFirstPart = product.productName.substring(0, 3);
    const idLastPart = Math.ceil(Math.random() * 1000);
    const productId = idFirstPart + idLastPart;
    const productAvailability =
        product.quantity > 0 ? 'Available' : 'Out of stock';
    return {
        id: productId,
        availability: productAvailability,
        productName: product.productName,
        description: product.productDescription,
        price: product.productPrice,
        image: product.productPicture,
    };
});

let cartItems = [];
const contentArea = document.getElementById('content-area');
function displayItems() {
    let availabilityColor = document.getElementById('availability');
    let htmlRendered = '';
    productInventory.forEach((product) => {
        if (productInventory.length == 0) {
            htmlRendered = `<h2><i>Sorry we are still updating our inventory please come back later</i></h2>`;
        } else {
            let availabilityClass = '';
            // const { availability } = product;

            if (product.availability === 'Available') {
                availabilityClass = 'available';
            }
            if (product.availability === 'Out of stock') {
                availabilityClass = 'out-of-stock';
            }
            htmlRendered += `<div class="product-card">
                    <img
                        src=${product.image}
                        alt="Product Image"
                    />
                    <div class="product-info">
                        <div class="product-name">${product.productName}</div>
                        <div class="product-price">Ksh ${product.price}</div>
                        <div class="product-description">
                        ${product.description}
                        </div>
                        <div class=${availabilityClass}>
                        <p id="availability">${product.availability}</p>
                        </div>
                        <a href="#" class="add-to-cart">Add to Cart</a>
                    </div>
                </div>`;
            console.log(htmlRendered);
        }
    });
    contentArea.innerHTML = htmlRendered;
    const availabilityParagraph = document.getElementById('availability');
    console.log('paragraph -> ', availabilityParagraph);
}
displayItems();
