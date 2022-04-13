import Head from "../components/head";
import { CreateMember } from "../components/createMember";
import Navbar from "../components/navbar";
import { ProposalList } from "../components/proposalList";
import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { isMember, loading, account } = useData();

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
        <div className="text-2xl font-bold text-gray-500">
          Please connect Metamask Wallet
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Head />
      <Navbar />

      {!isMember && <CreateMember />}
      {isMember && <ProposalList />}
    </div>
  );
}
