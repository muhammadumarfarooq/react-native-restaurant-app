import axios from 'axios';

const baseURL = "https://api.yelp.com/v3/businesses";
const apiKey = "2vqSWjaSykQfA_HvQfOHXI7M7MXLgE0Bj8vKubvqcsdsuhL0ryApIxgmDrqxOvyPKtG8Zz1kLJWEfSJfz-3negyPc3IZv1nN2FFhncxljjaRiMwkYl79nqTk0RlRX3Yx";

export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
});
