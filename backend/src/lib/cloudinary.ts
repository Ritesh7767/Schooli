import { v2 as cloudinary } from 'cloudinary';

const cloudinaryConfig = async function() {

    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUD_API_SECRET 
    });
    
}

export default cloudinaryConfig