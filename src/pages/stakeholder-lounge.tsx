import { useState } from "react";
import MainTemplate from "@templates/Main";
import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { loading, account, createStakeholder, currentBal } = useData();
  const [val, setVal] = useState("");

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="text-2xl font-bold text-gray-500">Loading...</div>
      </div>
    );
  }
  if (!account) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="text-2xl font-bold text-gray-500">Please connect Metamask Wallet</div>
      </div>
    );
  }
  return (
    <MainTemplate>
      <div className={styles.container}>
        <main className="w-screen flex py-4 flex-grow justify-center">
          <div className="w-1/3 border-2 border-blue-600 rounded-xl p-3 mt-10 h-full">
            <div className="flex flex-col justify-center">
              <p className="my-2">
                Current Balance : <span className="text-lg font-bold text-blue-600">{currentBal} MATIC</span>
              </p>
              <input
                type="search"
                name="q"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                className="my-5 w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                placeholder="Amount in MATIC"
                autoComplete="off"
              />
              <button
                className="px-3 py-2 rounded-xl bg-blue-600 text-white"
                onClick={() => {
                  createStakeholder(val).then(() => {
                    setVal("");
                  });
                }}
              >
                Send
              </button>
            </div>
          </div>
        </main>
      </div>
    </MainTemplate>
  );
}
