import React from 'react';
import axios from 'axios';

const ImageUploader = (options) => {
    const API_HOST_URL = process.env.API_URL;
    const contentType = {}
    axios.post(`${API_HOST_URL}/api/dashboard/post-image`, options, )
}

export default ImageUploader;