import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
import "../../assets/css/bootstrap.min.css";
import logo from "../../assets/img/logo.svg";

export default class Main extends Component {
  state = {
    newBox: "",
    loading: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post("boxes", {
      title: this.state.newBox,
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  };

  navigateToBoxList = () => {
    this.props.history.push("/list");
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
          <button type="button" onClick={this.navigateToBoxList}>
            Ver a lista de box
          </button>
        </form>
      </div>
    );
  }
}
