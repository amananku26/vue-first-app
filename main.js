var app = new Vue({
    el: '#app',
    data: {
        product: 'Shocks',
        image: 'assets/img1.jpeg',
        inStock: false,
        details: ['80% Cotton', '20% Polyster', 'Mens Wear'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green'
            },
            {
                variantId: 2235,
                variantColor: 'blue'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        }
    }
})