import { FC } from "react";
import styled from "styled-components";

import { device } from "@theme/index";
import { footer_menu } from "@utils/settings";

const Menu: FC = () => {
  return (
    <Container>
      <Column>
        <ul>
          {footer_menu.map((el) => {
            if (el.active) {
              return (
                <MenuItem key={el.id}>
                  <MenuButton href={el.url} target="_blank">
                    {el.title}
                  </MenuButton>
                </MenuItem>
              );
            }
          })}
        </ul>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

const Column = styled.div`
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  flex-wrap: wrap;
  @media ${device.sm} {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
  }
  @media ${device.md} {
    flex-basis: 33%;
    flex-grow: 0;
    max-width: 33%;
  }
`;

const MenuItem = styled.li`
  list-style: none;
`;

const MenuButton = styled.a`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
  display: inline-block;
  padding: 0 0 16px;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.5px;
  font-weight: 500;
  min-width: 80px;
`;

export default Menu;
