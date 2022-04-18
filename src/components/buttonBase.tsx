import { FC, useCallback } from "react";
import styled from "styled-components";

import { marginCSS, paddingCSS, Margin, Padding } from "./css";

type Item = any;

interface Props {
  onClick?: (params?: Item) => Item | void;
  item?: Item;
  href?: string;
}

const ButtonBase: FC<Props & Margin & Padding> = ({ children, onClick, item, href, ...rest }) => {
  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick(item);
    }
  }, [item, onClick]);

  if (href) {
    return (
      <ABase href={href} onClick={handleOnClick} {...rest}>
        {children}
      </ABase>
    );
  } else {
    return (
      <BtnBase onClick={handleOnClick} {...rest}>
        {children}
      </BtnBase>
    );
  }
};

const ABase = styled.a`
  ${marginCSS};
  ${paddingCSS}
  display: inline-block;
  display: block;
`;

const BtnBase = styled.button`
  ${marginCSS};
  ${paddingCSS}
  display: inline-block;
  display: block;
`;

export default ButtonBase;
