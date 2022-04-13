import ModalWindowStatusStore from "./ModalWindowStatusStore";
import LogInStatusStore from "./LogInStatusStore";

export class RootStore {

    modalWindowStatusStore: ModalWindowStatusStore
    logInStatusStore: LogInStatusStore

    constructor() {
        this.modalWindowStatusStore = new ModalWindowStatusStore();
        this.logInStatusStore = new LogInStatusStore()
    }

}
