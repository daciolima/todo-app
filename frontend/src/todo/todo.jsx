import React, { Component } from "react";

import PageHeader from "../template/page_header";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";

export default (props) => (
  <div>
    <PageHeader name="tarefas" small="Cadastro" />
    <TodoForm />
    <TodoList />
  </div>
);
