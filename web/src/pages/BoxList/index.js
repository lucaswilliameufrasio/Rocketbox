import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import api from "../../services/api";

import "./styles.css";
import "../../assets/css/bootstrap.min.css";
import logo from "../../assets/img/logo.svg";

import { distanceInWords } from "date-fns";
import pt from "date-fns/locale/pt";

export default class Main extends Component {
  state = {
    boxes: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await api.get(`boxes/`);

      this.setState({ boxes: response.data });

      this.setState({ loading: false });
    } catch (error) {
      return;
    }
  }

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

  render() {
    return (
      <>
        {this.state.loading ? (
          <div id="loading">
            <strong className="loading-icon">Carregando</strong>
            <FontAwesomeIcon className="margin-left=10px;" icon={faSpinner} />
          </div>
        ) : (
          <div id="main-container">
            <div>
              <Link to="/" className="logo">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div>
              <ul className="list-unstyled">
                {this.state.boxes &&
                  this.state.boxes.map((box) => (
                    <li key={box._id} className="boxInfo">
                      <Link to={`/box/${box._id}`}>
                        <strong>{box.title}</strong>
                      </Link>

                      <span>
                        Criado há{" "}
                        {distanceInWords(box.createdAt, new Date(), {
                          locale: pt,
                        })}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}
