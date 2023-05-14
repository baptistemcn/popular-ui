/* eslint-disable react/prop-types */
import * as React from "react";

export default class Delayed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.setState({ show: true });
    }, this.props.wait);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  render() {
    return this.state.show === true ? this.props.children : null;
  }
}

Delayed.defaultProps = {
  wait: 500,
};
