import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UseSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.userFetchingSuccess(response.data))
//     } catch (error) {
//         const err = error as Error;
//         dispatch(userSlice.actions.userFetchingError(err.message));
//
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        }
        catch (e){
            return thunkAPI.rejectWithValue('can`t loading users')
        }
    }
)
