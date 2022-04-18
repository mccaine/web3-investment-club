import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useData } from "@contexts/dataContext";
import { settings } from "@utils/settings";
import Logo from "@components/logo";
import Button from "@components/button";
import Box from "@components/box";

function Navbar() {
  const router = useRouter();
  const { account, connect, isMember, isStakeholder, loading } = useData();

  const handleConnect = useCallback(async () => {
    await connect();
  }, [connect]);

  const TabNav = () => {
    return (
      <nav className="w-full h-16 m-auto max-w-5xl flex justify-center">
        <div className="flex flex-row justify-between items-center h-full">
          {account && (
            <div className="flex flex-row items-center justify-center h-full">
              <TabButton title="Proposals" isActive={router.asPath === "/proposals"} url={"/proposals"} />
              {isMember && (
                <TabButton
                  title="Create Proposal"
                  isActive={router.asPath === "/create-proposal"}
                  url={"/create-proposal"}
                />
              )}
              {isMember && (
                <TabButton
                  title="Stakeholder Lounge"
                  isActive={router.asPath === "/stakeholder-lounge"}
                  url={"/stakeholder-lounge "}
                />
              )}
              {isStakeholder && (
                <TabButton title="Investments" isActive={router.asPath === "/investments"} url={"/investments"} />
              )}
            </div>
          )}
        </div>
      </nav>
    );
  };

  return (
    <>
      <Container>
        <Box
          as="nav"
          px={4}
          py={1}
          sx={css`
            max-width: 1600px;
            min-height: 64px;
            display: flex;
            width: 100%;
            align-items: center;

            background-color: #fff;
            margin: 0 auto;
          `}
        >
          <Box
            sx={css`
              display: flex;
              justify-content: space-between;
              width: 100%;
            `}
          >
            <div className="flex flex-row">
              <Link href="/" passHref>
                <Logo />
              </Link>
            </div>

            {account ? (
              <Button onClick={() => {}} title={account.substr(0, 10)} />
            ) : (
              <Button onClick={handleConnect} title={loading ? "loading..." : "connect"} />
            )}
          </Box>
        </Box>
        {isMember && <TabNav />}
      </Container>
      <Spacing isMember={isMember} />
    </>
  );
}

const Container = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Spacing = styled.div<{ isMember: boolean }>`
  width: 100%;
  height: ${({ isMember }) => (isMember ? 128 : 64)}px;
`;

export default Navbar;

const TabButton = ({ title, isActive, url }: { title: string; isActive: boolean; url: string }) => {
  return (
    <Link href={url} passHref>
      <div
        className={`h-full px-3 flex items-center border-b-2 font-semibold hover:border-blue-700 hover:text-blue-700 cursor-pointer ${
          isActive ? "border-blue-700 text-blue-700 text-base font-semibold" : "border-white text-gray-400 text-base"
        }`}
      >
        <span>{title}</span>
      </div>
    </Link>
  );
};
