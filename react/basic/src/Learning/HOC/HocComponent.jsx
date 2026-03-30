import React from "react";

function HocComponent(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div className="hoc">
        <WrappedComponent {...props} />;
      </div>
    );
  };
}

export default HocComponent;
