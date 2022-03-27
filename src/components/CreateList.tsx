import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import ModalWindowStatusStore from "../stores/ModalWindowStatusStore";
import { ModalWindowStatus } from "../utils/ModalWindowStatus";

interface CreateListProps {
  modalWindowStatusStore?: ModalWindowStatusStore;
  handleCreateOpen?: (event: React.MouseEvent) => void;
  createList?: (event: React.MouseEvent) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  singledata?: {
    name: string;
    phone: string;
  }
}

@inject("modalWindowStatusStore")
@observer
export default class CreateList extends Component<CreateListProps, {}> {
  render() {
    const {  modalWindowStatusStore, handleCreateOpen, singledata, createList, handleChange } = this.props
    return (
      <>
        <button
          type="button"
          disabled={false}
          className="btn btn-primary"
          onClick={handleCreateOpen}
        >
          Create
        </button>
        <div className={`ModalClose ${ modalWindowStatusStore?.modalWindowStatus === ModalWindowStatus.CREATE ? "Modal" : ""}`}>
          <div className="ModalContainer">
            <input
              type="text"
              placeholder="name"
              name="name"
              className="form-control"
              value={singledata!.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="phone"
              name="phone"
              className="form-control"
              value={singledata!.phone}
              onChange={handleChange}
            />
            <button 
              type="button"
              className="btn btn-primary"
              disabled={false}
              onClick={createList}
            > 
              Create! 
            </button>    
          </div>
        </div> 
      </>
    );
  }
}