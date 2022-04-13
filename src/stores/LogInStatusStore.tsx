import { action, observable, makeObservable } from 'mobx'
import { LogInStatus } from '../utils/LogInStatus'

export default class LogInStatusStore {

    @observable
    logInStatus: LogInStatus

    constructor() {
        this.logInStatus = LogInStatus.LOGOUT
        makeObservable(this)
    }
    
    @action
    public triggerLogIn = () => {
        this.logInStatus = LogInStatus.LOGIN;
    }


}