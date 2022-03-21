import { FunctionComponent } from "react";

type Props = {
  text: string;
};

export const TestComponent: FunctionComponent<Props> = (props) => {
  return <h2>{props.text}</h2>;
};
