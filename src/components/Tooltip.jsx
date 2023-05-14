/* eslint-disable react/prop-types */
import * as React from "react";

const container = {
  position: "relative",
  display: "flex",
};

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hovering: true });
  }

  mouseOut() {
    this.setState({ hovering: false });
  }

  render() {
    const { hovering } = this.state;
    const { children, element } = this.props;

    return (
      <div
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        style={container}
      >
        {hovering === true && element}
        {children}
      </div>
    );
  }
}