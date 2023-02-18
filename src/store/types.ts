import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";

export interface AuthState {
    isAuth: boolean;
    user: IUser | undefined;
    isLoading: boolean;
    error: string;
}

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}



