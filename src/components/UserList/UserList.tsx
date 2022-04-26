import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, selectUserList } from "../features/userSlice";

interface Props {}

export const UserList = () => {
  let users = useSelector(selectUserList);
  let dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
    dispatch(getUserList() as any);
  }, [dispatch]);

  return (
    <div>
      User LIst
      <button>get list</button>
    </div>
  );
};
