import axios from 'axios'

export const createUserConfig = user => {
  console.log(user)
  if(user) {
    console.log(`Bearer ${user.accessToken}`)
  return axios.create({
    headers: {
      'Authorization': `Bearer ${user.accessToken}`
    },
    responseType: 'json'
  })
  }
}

export const findById = (arr, id) => {
  for (let el of arr) {
    if (el.id === id) {
      return el
    }
  }
}