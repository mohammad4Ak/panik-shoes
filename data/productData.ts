export interface Product {
    id: number
    name: string
    image: string
    rating: number
    originalPrice: number
    discountedPrice: number
    discount: number
    isNew: boolean
}

export const products: Product[] = [
    {
        id: 1,
        name: '#کتونی\n' +
            'کیفیت تضمینی👉\n' +
            'دارای کف طبی 👉\n' +
            'دور دوخت       👉\n' +
            'سبک و راحت',
        image: 'images/products/1.jpg',
        rating: 5,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: true
    },
    {
        id: 2,
        name: 'کفش سالومون مردانه و زنانه Salomon LAB مدل XT-6',
        image: 'images/products/2.jpg',
        rating: 4,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: false
    },
    {
        id: 3,
        name: 'کفش سالومون LAB مردانه و زنانه مدل XT-6',
        image: 'images/products/3.jpg',
        rating: 3,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: true
    },
    {
        id: 4,
        name: 'کفش سالومون مردانه و زنانه Salomon LAB مدل XT-6',
        image: 'images/products/4.jpg',
        rating: 2,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: false
    },
    // Add more products as needed
]

export const products2: Product[] = [
    {
        id: 1,
        name: '#کتونی\n' +
            'کیفیت چینی👉\n' +
            'دارای کف طبی 👉\n' +
            'سبک و راحت',
        image: 'images/products/5.webp',
        rating: 5,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: true
    },
    {
        id: 2,
        name: 'کفش سالومون مردانه و زنانه Salomon LAB مدل XT-6',
        image: 'images/products/6.webp',
        rating: 4,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: false
    },
    {
        id: 3,
        name: 'کفش سالومون LAB مردانه و زنانه مدل XT-6',
        image: 'images/products/7.webp',
        rating: 3,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: true
    },
    {
        id: 4,
        name: 'کفش سالومون مردانه و زنانه Salomon LAB مدل XT-6',
        image: 'images/products/8.webp',
        rating: 2,
        originalPrice: 3900000,
        discountedPrice: 2730000,
        discount: 30,
        isNew: false
    },
    // Add more products as needed
]
