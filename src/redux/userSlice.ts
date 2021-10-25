import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface IUserData extends IUserCredentials{
    loading: boolean;
    loggedIn: boolean
}

interface IUserCredentials {
    email: string | null;
    password: string | null;
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async (arg: IUserCredentials) => {
        return await new Promise<IUserCredentials>((resolve) => setTimeout(() => resolve(arg), 2000));
    }
);

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async  (arg: string) => {
        return await new Promise<string>(resolve => setTimeout(() => resolve(arg),800));
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        return await new Promise(resolve => setTimeout(resolve, 500));
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        email: null,
        password: null,
        loggedIn: false,
    } as IUserData,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changePassword.fulfilled, (state, action) => {
                state.password = action.payload;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.password = action.payload.password;
                state.loggedIn = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.email = null;
                state.password = null;
                state.loggedIn = false;
            })
            .addMatcher(action => action.type.endsWith('/pending'), (state) => {
                state.loading = true;
            })
            .addMatcher(action => action.type.endsWith('/fulfilled'), (state) => {
                state.loading = false;
            })
    }
});

export default userSlice.reducer;