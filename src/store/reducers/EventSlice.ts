import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { EventState } from '../types';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';
import UserService from '../../services/userService';

const initialState: EventState = {
    events: [],
    guests: []
}


export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setGuests: (state, action: PayloadAction<IUser[]>) => {
      return {
        ...state,
        guests: action.payload,
      };
    },
    setEvents: (state, action: PayloadAction<IEvent[]>) => {
      return {
        ...state,
        events: action.payload,
      };
    },
  },
});

export interface AuthPayload {
  username: string;
  password: string;
}


export const EventActionCreators = {
  
    fetchGuests: () =>  async (dispatch: any) => {
        try {
            const response = await UserService.getUsers()
            dispatch(setGuests(response.data));
        } catch (e) {
            console.log(e);
        }
    },
    createEvent: (event: IEvent) =>  async (dispatch: any) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string | null) => async (dispatch: any) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch(setEvents(currentUserEvents));
        } catch (e) {
            console.log(e)
        }
    }
}

export const { setGuests, setEvents } = eventSlice.actions;
export const selectAuthentication = (state: RootState) => state.authReducer;

export default eventSlice.reducer;