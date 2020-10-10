import React from "react";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <HashLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default LoadingComponent;
