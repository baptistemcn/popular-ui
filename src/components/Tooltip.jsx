/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Hover from "./Hover";

const container = {
  position: "relative",
  display: "flex",
};

export default function Tooltip({ children, element }) {
  return (
    <Hover>
      {(hovering) => {
        return (
          <div style={container}>
            {hovering === true && element}
            {children}
          </div>
        );
      }}
    </Hover>
  );
}
