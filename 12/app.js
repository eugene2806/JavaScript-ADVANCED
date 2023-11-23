'use strict';

async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        return products.map(product => {
            return new Promise((resolve, reject) => {
                fetch('https://dummyjson.com/products/' + product.id)
                    .then(res => resolve(res.json()))
                    .catch(error => reject(error))
            })
        })
    } catch (error) {
        throw new Error(`ERROR ${error}`);
    }
}

async function race(response) {
    const products = await response;
    return new Promise((resolve, reject) => {
        for(const product of products) {
            product.then(data => resolve(data))
                    .catch(error => reject(error))  
        }
    })
}

async function press() {
    try {
        const res = await race(getProducts());
        console.log(res);

    } catch (error) {
        console.log(error.message);
    }
}
