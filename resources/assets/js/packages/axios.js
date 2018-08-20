import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'http://localhost',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}