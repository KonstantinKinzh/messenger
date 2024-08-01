import { UserMetadata } from "firebase/auth";

export interface IDataActiveUser {
    uid: string;
    email: string | null;
    emailVerified: boolean;
    metadata: UserMetadata;
    token: string;
};