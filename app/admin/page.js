"use client";
import React from "react";
import { useUser } from "../context/useContext";
import { Auth } from "../middlewares/auth";

const admin = () => {
  Auth()
  
  return (
   <></>
  );
};

export default admin;
