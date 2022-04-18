import { FC, useCallback } from "react";
import styled from "styled-components";

import { marginCSS, paddingCSS, Margin, Padding } from "./css";

type Item = any;

interface Props {
  onClick?: (params?: Item) => Item | void;
  item?: Item;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const ButtonBase: FC<Props & Margin & Padding> = ({ children, onClick, item, href, target, ...rest }) => {
  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick(item);
    }
  }, [item, onClick]);

  if (href) {
    return (
      <ABase href={href} target={target} {...rest}>
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
