import { CLOUDINARY_API_SECRET, CLOUDINARY_NAME, CLOUDINARY_API_KEY } from './severConfig.js';
 import  cloudinary from 'cloudinary';


cloudinary.v2.config({
    api_key:CLOUDINARY_API_KEY,
    cloud_name:CLOUDINARY_NAME,
    api_secret:CLOUDINARY_API_SECRET
})

export default cloudinary.v2;