// Mobx
import { makeAutoObservable } from "mobx";

// Interfaces
import { TDataError } from "../types/types"

// Mobx-store
class DataErrorStore {

    isOpenWInErr = false;

    dataError: TDataError = {
        titleErr: "",
        messageErr: ""
    };

    constructor() {
        makeAutoObservable(this);
    };

    setDataError = (data: TDataError) => {
        this.dataError = data;
        this.isOpenWInErr = true;
    };

    hideWinError = () => {
        this.dataError = {
            titleErr: "",
            messageErr: ""
        };
        this.isOpenWInErr = false;
    };
};

// Instances
const dataErrRegister = new DataErrorStore();
const dataErrAuth = new DataErrorStore();

export { dataErrRegister, dataErrAuth };