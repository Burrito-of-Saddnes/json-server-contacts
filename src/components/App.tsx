import React from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";
import { inject, observer } from 'mobx-react';
import ModalWindowStatusStore from "../stores/ModalWindowStatusStore";
import { ModalWindowStatus } from "../utils/ModalWindowStatus";

interface alldata_args {
  id: string;
  name: string;
  phone: string;
}

interface AppProps {
  modalWindowStatusStore?: ModalWindowStatusStore;
  modalWindowStatus?: ModalWindowStatus;
}

interface AppState {
  loading: boolean;
  alldata: Array<alldata_args>;
  singledata: {
    name: string;
    phone: string;
  }
}

@inject("modalWindowStatusStore")
@observer
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        name: "",
        phone: ""
      }
    };
    this.getLists = this.getLists.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateOpen = this.handleUpdateOpen.bind(this);
    this.handleCreateOpen = this.handleCreateOpen.bind(this);
  }

  componentDidMount = () => {
    this.getLists();
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3002/posts")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
    this.props.modalWindowStatusStore?.triggerDisabled();
  }

  handleChange(event: { target: { name: string; value: string; }; }) {
    var name = this.state.singledata.name;
    var phone = this.state.singledata.phone;
    if (event.target.name === "name") name = event.target.value;
    else phone = event.target.value;
    this.setState({
      singledata: {
        name: name,
        phone: phone
      }
    });
  }

  createList() {
    fetch("http://localhost:3002/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      (response: Response) => {
        this.setState({
          singledata: {
            name: "",
            phone: ""
          }
        })
      }
    );
    this.getLists();
  }

  updateList(event: MouseEvent, id: string) {
    fetch("http://localhost:3002/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            name: "",
            phone: ""
          }
        });
        this.getLists();
      });
  }

  deleteList(event: MouseEvent, id: string) {
    fetch("http://localhost:3002/posts/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            name: "",
            phone: ""
          }
        });
        this.getLists();
      });
  }

  handleUpdateOpen() {
    this.props.modalWindowStatusStore?.triggerUpdate();
  }

  handleCreateOpen() {
    this.props.modalWindowStatusStore?.triggerCreate();
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      <Lists
        handleUpdateOpen={this.handleUpdateOpen}
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <div className="container">
        <span className="name-bar">
          <CreateList
            handleCreateOpen={this.handleCreateOpen}
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {listTable}
      </div>
    );
  }
}
export default App;
