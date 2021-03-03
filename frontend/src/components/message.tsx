import React from "react";
import { Alert } from "react-bootstrap";

interface interfaceProps {
  variant: string;
  children: any;
}

const Message = (props: interfaceProps) => {
  const { variant, children } = props;

  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
