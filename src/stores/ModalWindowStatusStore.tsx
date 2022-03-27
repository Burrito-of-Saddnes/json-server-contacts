import { action, observable, makeObservable } from 'mobx'
import { ModalWindowStatus } from '../utils/ModalWindowStatus'

export default class ModalWindowStatusStore {

    @observable
    modalWindowStatus: ModalWindowStatus

    constructor() {
        this.modalWindowStatus = ModalWindowStatus.HIDE
        makeObservable(this)
    }
    
    @action
    public triggerUpdate = () => {
        this.modalWindowStatus = ModalWindowStatus.UPDATE;
    }

    @action
    public triggerCreate = () => {
        this.modalWindowStatus = ModalWindowStatus.CREATE;

    }

    @action
    public triggerDisabled = () => {
        this.modalWindowStatus = ModalWindowStatus.HIDE;
    } 

}