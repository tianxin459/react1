import { RootState } from "src/redux/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const apiurl = `https://621c0b91768a4e1020a10fe5.mockapi.io/api/test/test1`;
export const fetchUserList = async () =>
  await axios
    .get(apiurl)
    .then((response) => response)
    .catch((error) => error);

export const getUserList = createAsyncThunk("users/getUserList", async () => {
  console.log("dispatch call getuserlis");
  //   let resp = await fetchUserList();
  let resp = await axios.get<any[]>(apiurl);
  return resp.data;
});

const initialState: any[] = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.fulfilled, (state, action) => {
      console.log("reduce action", action);
      let resp: any[] = action.payload;
      state = resp;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;

export const selectUserList = (state: RootState) => state.users;
