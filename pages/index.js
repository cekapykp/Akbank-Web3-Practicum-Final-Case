import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Post from "../components/Post";

//Gerekli olacak kütüphaneler -- Yapımda
import instagramjson from "../build/contracts/Instagram.json";
import { instagramaddress } from "../config.js";
import axios from "axios";
import {
  useMoralisFile,
  useWeb3ExecuteFunction,
  useMoralis,
} from "react-moralis";

export default function Home() {
  return <div>Yapımda</div>;
}
