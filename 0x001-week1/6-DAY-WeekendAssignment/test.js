// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of product objects with initial properties
const productData = [
    {
        name: 'Apple',
        price: 1.2,
        description: 'Fresh red apple',
        quantity: 100,
    },
    {
        name: 'Banana',
        price: 0.5,
        description: 'Ripe yellow banana',
        quantity: 200,
    },
    { name: 'Cherry', price: 2.0, description: 'Sweet cherries', quantity: 0 },
    { name: 'Date', price: 3.0, description: 'Organic dates', quantity: 50 },
    {
        name: 'Elderberry',
        price: 1.5,
        description: 'Wild elderberries',
        quantity: 0,
    },
];

// Create the final products array with productId and availability status
const products = productData.map((product) => {
    // Get the first three characters of the product name
    const namePart = product.name.substring(0, 3);

    // Generate a random number between 1 and 100
    const randomNumber = getRandomNumber(1, 100);

    // Concatenate to create the productId
    const productId = namePart + randomNumber;

    // Determine availability based on quantity
    const availability = product.quantity > 0 ? 'Available' : 'Out of stock';

    // Return the product object with all properties, productId, and availability
    return {
        productName: product.name,
        productId: productId,
        price: product.price,
        description: product.description,
        availability: availability,
    };
});

// Log the products array to the console
console.log(products);
