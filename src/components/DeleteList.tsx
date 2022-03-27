import React, { Component } from 'react';

interface DeleteListProps {
  elementId?: string;
  deleteList?: any;
}

export default class DeleteList extends Component<DeleteListProps, {}> {
  render() {
    const { elementId, deleteList } = this.props
    return (
      <React.Fragment>
        <button 
          type="button" 
          className="btn btn-info"
          disabled={false}
          onClick={(event)=>deleteList(event,elementId)}
        >
          Delete!
        </button>
      </React.Fragment>
    ) 
  }
}