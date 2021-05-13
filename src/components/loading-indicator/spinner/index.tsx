import React from "react";
import "./spinner.scss";

interface SpinnerProps {
  style?: object;
}

const Spinner: React.FC<SpinnerProps> = ({ style }) => {
  return <div data-testid="spinner" className="spinner" style={style}></div>;
};

export default Spinner;
