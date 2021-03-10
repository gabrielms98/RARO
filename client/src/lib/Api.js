const fetch = require('node-fetch');

export default {
  async getBackgroundImage() {
    const IMAGE_URL = 'https://picsum.photos/650';
    const response = await fetch(IMAGE_URL);

    console.log(response);
    return response;
  },
}
