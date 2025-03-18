

import axios from "axios";
const api=axios.create({
  baseURL:'https://text-translator2.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '48e3874d31msh893db55a223d108p1bc7b0jsn27645e0f6dad',
    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
  },
});

export default api;


