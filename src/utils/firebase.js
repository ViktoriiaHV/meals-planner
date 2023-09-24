import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { dbdata } from "../constants/private/dbkeys";

const firebaseConfig = {
  apiKey: dbdata.apiKey,
  authDomain: dbdata.authDomain,
  projectId: dbdata.projectId,
  storageBucket: dbdata.storageBucket,
  messagingSenderId: dbdata.messagingSenderId,
  appId: dbdata.appId
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);