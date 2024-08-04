// Mobx
import { makeAutoObservable } from "mobx";

// Interfaces
import { IDataError } from "../interfaces/interface";

// Mobx-store
class DataErrorStore {

    isOpenWInErr = false;

    dataError: IDataError = {
        titleErr: "",
        messageErr: ""
    };

    constructor() {
        makeAutoObservable(this);
    };

    setDataError = (data: IDataError) => {
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
const dataErrPass = new DataErrorStore();

export { dataErrPass };