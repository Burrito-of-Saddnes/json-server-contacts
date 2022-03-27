import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import ModalWindowStatusStore from "../stores/ModalWindowStatusStore";
import { ModalWindowStatus } from "../utils/ModalWindowStatus";

interface UpdateListProps {
  modalWindowStatusStore?: ModalWindowStatusStore;
  elementId?: string;
  handleUpdateOpen?: (event: React.MouseEvent) => void;
  singledata?: {
      name: string;
      phone: string;
  };
  updateList?: any;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

@inject("modalWindowStatusStore")
@observer
export default class UpdateList extends Component<UpdateListProps, {}> {
  render() {
    const { modalWindowStatusStore, elementId, handleUpdateOpen, singledata, updateList, handleChange } = this.props
    return (
      <>
        <button
          type="button"
          disabled={false}
          className="btn btn-primary"
          onClick={handleUpdateOpen}
        >
          Update!
        </button>
        <div className={`ModalClose ${ modalWindowStatusStore?.modalWindowStatus === ModalWindowStatus.UPDATE ? "Modal" : ""}`}>
          <div className="ModalContainer">
            <input type="text"
              placeholder="name"
              name="name"
              className="form-control"
              value={singledata!.name}
              onChange={handleChange}>
            </input>
            <input type="text"
                placeholder="phone"
                name="phone"
                className="form-control"
                value={singledata!.phone}
                onChange={handleChange}>
            </input>
            <button type="button"
              className="btn btn-primary"
              disabled={false}
              onClick={(event)=>updateList(event,elementId)}
            >
              Update!
            </button>
          </div>
        </div>
      </> 
    )        
  }
}
