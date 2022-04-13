import Head from "../components/head";
import Navbar from "../components/navbar";
import { ProposalInvestmentCard } from "../components/proposalInvestmentCard";
import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { allInvestedProposal, loading, account } = useData();

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
      <span className="text-lg font-bold mt-5">My Investments</span>
      <main className="w-full flex flex-row py-4 flex-grow max-w-5xl">
        {allInvestedProposal.length == 0 && (
          <span className="text-lg font-bold mt-5 text-center">
            Sorry, you have not voted in any proposals yet.
          </span>
        )}
        {allInvestedProposal.map((proposal) => (
          <ProposalInvestmentCard
            key={proposal.id}
            proposal={proposal}
            openModal={() => {}}
          />
        ))}
      </main>
    </div>
  );
}
