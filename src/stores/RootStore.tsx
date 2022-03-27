import ModalWindowStatusStore from "./ModalWindowStatusStore";

export class RootStore {

    modalWindowStatusStore: ModalWindowStatusStore

    constructor() {
        this.modalWindowStatusStore = new ModalWindowStatusStore();
    }

}
