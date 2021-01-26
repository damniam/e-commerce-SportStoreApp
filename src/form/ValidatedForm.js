import React, { Component } from "react";
import { ValidatedError } from "../form/ValidatedError";
import { GetMessages } from "./ValidationMessages";

export class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {},
    };
    this.formElement = {};
  }

  handleSubmit = () => {
    this.setState(
      (state) => {
        const newState = { ...state, validationErrors: {} };
        Object.values(this.formElement).forEach((element) => {
          if (!element.checkValidity()) {
            newState.validationErrors[element.name] = GetMessages(element);
          }
        });
        return newState;
      },
      () => {
        if (Object.keys(this.state.validationErrors).length === 0) {
          const data = Object.assign(
            ...Object.entries(this.formElement).map((element) => ({
              [element[0]]: element[1].value,
            }))
          );
          this.props.submitCallback(data);
        }
      }
    );
  };

  registerRef = (element) => {
    if (element !== null) {
      this.formElement[element.name] = element;
    }
  };

  renderElement = (modelItem) => {
    const name = modelItem.name || modelItem.label.toLowerCase();
    return (
      <div className="form-group" key={modelItem.label}>
        <label>{modelItem.name}</label>
        <ValidatedError errors={this.state.validationErrors[name]} />
        <input
          className="form-control"
          name={name}
          ref={this.registerRef}
          {...this.props.defaultAttributes}
          {...modelItem.attribute}
        />
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.props.formElement.map((m) => this.renderElement(m))}
        <div className="text-center">
          <button
            className="btn btn-secondary m-1"
            onClick={this.props.cancelCallback}
          >
            {this.props.cancelText || "Cancel"}
          </button>
          <button className="btn btn-primary m-1" onClick={this.handleSubmit}>
            {this.props.submitText || "Submit"}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ValidatedForm;
