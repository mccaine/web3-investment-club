import { useCallback, FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  item?: any;
  onClick(params?: any): void;
}

const Button: FC<Props> = ({ title, item, onClick }) => {
  const handleOnClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return <ButtonBase onClick={handleOnClick}>{title}</ButtonBase>;
};

const ButtonBase = styled.button`
  display: inline-block;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 6px 16px;
  background-color: #000;
  border-radius: 3rem;
  display: block;
  text-transform: uppercase;
`;

export default Button;
