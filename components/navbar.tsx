import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useData } from "../contexts/dataContext";
import { settings } from "../utils/settings";
import Logo from "@components/logo";
import Button from "@components/button";

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
              <TabButton title="Home" isActive={router.asPath === "/"} url={"/"} />
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
      <nav className="w-full h-16 mt-auto max-w-6xl">
        <div className="flex flex-row justify-between items-center h-full">
          <div className="flex flex-row">
            <Link href="/" passHref>
              <Logo />
            </Link>
            {/* <span className="text-xs bg-blue-500 text-white rounded-lg py-1 px-1 font-bold ml-2">
              {!isMember && !isStakeholder ? "Not a Member" : isStakeholder ? "Stakeholder" : "Member"}
            </span> */}
          </div>

          {account ? (
            <Button onClick={() => {}} title={account.substr(0, 10)} />
          ) : (
            <Button onClick={handleConnect} title={loading ? "loading..." : "connect"} />
          )}
        </div>
      </nav>
      {account && <TabNav />}
    </>
  );
}

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
