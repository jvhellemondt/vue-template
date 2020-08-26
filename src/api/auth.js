import axios from 'axios'

const ROOT_URL = 'https://api.mocki.io'

export default {
  login() {
    const querystring = {
      email: 'me@jvh.one',
      password: 'SuperDuperPasswordDelux123',
      response_type: 'access_token',
    }

    return axios.post(`${ROOT_URL}/v1/eca8c416`, querystring)
  },
}
