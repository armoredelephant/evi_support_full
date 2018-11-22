import React from 'react';

import axios from 'axios';

export const axiosGet = uri => {
    return axios.get(uri).then( response => response.data);
}
