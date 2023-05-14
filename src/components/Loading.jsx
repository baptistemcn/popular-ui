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
    return <p style={style}>{this.state.content}</p>;
  }
}

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
