import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:5000/api/',
})

export const profilePath = "profile?mail=test"
export const loginPath = "auth/login"