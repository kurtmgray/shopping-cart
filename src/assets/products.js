import uniqid from 'uniqid'
import status_sml from './img/status_sml.jpeg'
import status from './img/status.jpeg'
import altitude_sml from './img/altitude_sml.jpeg'
import altitude from './img/altitude.jpeg'
import optic_sml from './img/optic_sml.jpeg'
import optic from './img/optic.jpeg'
import bronson_sml from './img/bronson_sml.jpeg'
import bronson from './img/bronson.jpeg'

const products = [
    {
        category: 'All-Mountain',
        brand: 'Specialized',
        model: 'Status 160 2021',
        size: 'S3',
        imgSmall: status_sml,
        img: status, 
        price: 3899,
        stock: 3,
        id: uniqid() 
    },
    {

        category: 'Enduro',   
        brand: 'Rocky Mountain',
        model: 'Altitude Alloy 50 2022',
        size: 'Medium',
        imgSmall: altitude_sml,
        img: altitude, 
        price: 4499,
        stock: 1, 
        id: uniqid() 
    },
    {
        category: 'Trail',
        brand: 'Norco',
        model: 'Optic C3 2021',
        size: 'Medium',
        imgSmall: optic_sml,
        img: optic, 
        price: 3799,
        stock: 2, 
        id: uniqid() 
    },
    {
        category: 'All-Mountain',
        brand: 'Santa Cruz',
        model: 'Bronson MX CC AXS 2022',
        size: 'Large',
        imgSmall: bronson_sml,
        img: bronson, 
        price: 8999,
        stock: 1,
        id: uniqid() 
    },
]

export default products