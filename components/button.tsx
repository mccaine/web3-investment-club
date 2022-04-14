import { useCallback, FC } from "react";
import styled from "styled-components";
import { marginCSS, Margin } from "@components/css";

interface Props {
  title: string;
  item?: any;
  onClick(params?: any): void;
}

const Button: FC<Props & Margin> = ({ title, item, onClick, ...rest }) => {
  const handleOnClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <ButtonBase onClick={handleOnClick} {...rest}>
      {title}
    </ButtonBase>
  );
};

const ButtonBase = styled.button`
  ${marginCSS};
  display: inline-block;
  color: #fff;
  font-size: 1em;
  padding: 6px 16px;
  background-color: #000;
  border-radius: 3rem;
  display: block;
  text-transform: uppercase;
`;

export default Button;
