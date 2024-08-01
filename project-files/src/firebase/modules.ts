import "./firebase";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const db = getDatabase();
export const auth = getAuth();
export const storage = getStorage();