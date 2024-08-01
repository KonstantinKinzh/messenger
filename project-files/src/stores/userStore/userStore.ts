// Mobx
import { makeAutoObservable } from "mobx";

// Interface
import { IDataActiveUser } from "./interface";

class UserStore {

    dataActiveUser: IDataActiveUser = {
        uid: "",
        email: "",
        emailVerified: false,
        metadata: {},
        token: "",
    };

    constructor() {
        makeAutoObservable(this);
    };

    setToken = (dataActiveUser: IDataActiveUser) => {
        this.dataActiveUser = dataActiveUser;
    };
};

export { UserStore };