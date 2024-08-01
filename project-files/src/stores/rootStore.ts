// Mobx
import { makeAutoObservable } from "mobx";

// Classes
import { UserStore } from "./userStore/userStore";

class RootStore {
    userStore;

    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore
    };
};

const rootStore = new RootStore();
export { rootStore };