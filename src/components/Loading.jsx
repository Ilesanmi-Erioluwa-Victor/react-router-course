import React from "react";

function Delayed({ children, wait = 500 }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeOut = window.setTimeout(() => {
      
    }, wait)

    return () =>
  }, [])

  return show === true ? children : null
}

export const Loading = () => {
  return (
    <Delayed>
      <div className="loading center"></div>;
    </Delayed>
  );
 
};
