import React from "react";
import ThemeContext from "../context/ThemeContext";

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {({ night, onToggleTheme }) => (
          <WrappedComponent
            {...props}
            night={night}
            onToggleTheme={onToggleTheme}
          />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
