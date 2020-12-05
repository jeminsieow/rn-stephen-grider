import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer tTYIQYUE5dJnEQq8f5zwNZk0jEMuAyxMPlEO4cxC0cXYoq48WwUeGdQeJbVECTJrTlLUDxf5-n7I57d274fDm02iqAWx2T4WhcziFZ4Rzp7yo0XtUQRkys0rcbdpX3Yx'
  }
});