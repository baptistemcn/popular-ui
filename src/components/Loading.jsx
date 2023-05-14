/* eslint-disable react/prop-types */
import * as React from "react";

const style = {
  fontSize: "32px",
  position: "absolute",
  left: "0",
  right: "0",
  marginTop: "20px",
  textAlign: "center",
};

class Delayed extends React.Component {
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

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.text,
    };
  }

  componentDidMount() {
    const { speed, text } = this.props;

    this.interval = window.setInterval(() => {
      this.state.content === text + "..."
        ? this.setState({ context: text })
        : this.setState(({ content }) => ({ content: content + "." }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Delayed>
        <p style={style}>{this.state.content}</p>
      </Delayed>
    );
  }
}

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
