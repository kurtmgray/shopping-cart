import uniqid from 'uniqid'

const products = [
    {
        category: 'All-Mountain',
        brand: 'Specialized',
        model: 'Status 160 2021',
        size: 'S3',
        imgSmall: './data/img/status_sml.jpeg',
        img:'./data/img/status.jpeg', 
        price: '$3,899',
        stock: '3',
        id: uniqid() 
    },
    {

        category: 'Enduro',   
        brand: 'Rocky Mountain',
        model: 'Altitude Alloy 50 2022',
        size: 'Medium',
        imgSmall: './data/img/altitude_sml.jpeg',
        img:'./data/img/altitude.jpeg', 
        price: '$4,499',
        stock: '1', 
        id: uniqid() 
    },
    {
        category: 'Trail',
        brand: 'Norco',
        model: 'Optic C3 2021',
        size: 'Medium',
        imgSmall: './data/img/optic_sml.jpeg',
        img:'./data/img/optic.jpeg', 
        price: '$3,799',
        stock: '2', 
        id: uniqid() 
    },
    {
        category: 'All-Mountain',
        brand: 'Santa Cruz',
        model: 'Bronson MX CC AXS 2022',
        size: 'Large',
        imgSmall: './data/img/bronson_sml.jpeg',
        img:'./data/img/bronson.jpeg', 
        price: '$8,999',
        stock: '1',
        id: uniqid() 
    },
]

export default products