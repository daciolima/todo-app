import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/page_header";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    // conf this para que a this da função handleAdd realmente esteja no contexto do Todo
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = { description: "", list: [] };

    this.refresh();
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      // e = evento, target= A tag html(input) e value = É o valor dentro da tag.
      description: e.target.value,
    });
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) =>
        this.setState({ ...this.state, description, list: resp.data })
      );
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleClear() {
    this.refresh();
  }

  handleAdd() {
    const description = this.state.description;
    // axios pega o valor da propriedade description já anterada pelo função handleChange e injeta no banco
    // e retorna após o response a função refresh().
    axios.post(URL, { description }).then((resp) => this.refresh());
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((resp) => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((resp) => this.refresh(this.state.description));
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((resp) => this.refresh(this.state.description));
  }

  render() {
    return (
      <div>
        <PageHeader name="tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsPending={this.handleMarkAsPending}
          handleMarkAsDone={this.handleMarkAsDone}
        />
      </div>
    );
  }
}
