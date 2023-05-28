import {apiClient} from "../api/chatggapi.js";


export class AuthService {
  static async login(email, password) {
    const {data} = await apiClient.post('/auth/login', {email, password})
    console.log(data)
    return data
  }

}