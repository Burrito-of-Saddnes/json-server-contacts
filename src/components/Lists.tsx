import React, { Component } from 'react'
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';

interface alldata_args {
    id: string;
    name: string;
    phone: string;
}

interface ListsProps {
    handleUpdateOpen?: (event: React.MouseEvent) => void;
    alldata: Array<alldata_args>;
    singledata?: {
        name: string;
        phone: string;
    };
    updateList?: any;
    deleteList?: any;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default class Lists extends Component<ListsProps, {}> {
    render(){
        const { handleUpdateOpen, alldata, singledata, updateList, deleteList, handleChange } = this.props
        var rows: any = [];
        alldata.forEach((element: any) => {
            rows.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.phone}</td>
                <td>
                    <UpdateList
                        handleUpdateOpen={handleUpdateOpen}
                        elementId={element.id}
                        singledata={singledata}
                        updateList={updateList}
                        handleChange={handleChange}
                    />
                    </td>
                <td>
                    <DeleteList
                        elementId={element.id}
                        deleteList={deleteList}
                    />
                </td>
            </tr>)
        });
        return(
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>phone</th>
                      <th>Update</th>
                      <th>Delete</th>
                  </tr>
              </thead>
            <tbody>{rows}</tbody>
          </table>
        )
    }
}