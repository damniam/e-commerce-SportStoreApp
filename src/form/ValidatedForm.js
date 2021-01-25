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

  render() {
    return <div></div>;
  }
}

export default ValidatedForm;
