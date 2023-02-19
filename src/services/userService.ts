import { get } from './apiService';
import { env_var } from '../config/env';
import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

// export const getGuestsList = async function () {
//   return await get(`${env_var.BASE_URL}users`);
// };
export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./guests.json')
    }
}