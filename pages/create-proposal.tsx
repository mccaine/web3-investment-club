import Head from "next/head";
import { FormEvent, useState } from "react";
import Navbar from "../components/navbar";
import { ProposalList } from "../components/proposalList";
import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [image, setImage] = useState<File | null>();
  const { createProposal } = useData();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var id;
    if (image) {
      let formData = new FormData();
      formData.append("image", image);
      var res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });
      var data = await res.json();
      id = data.id;
    }
    await createProposal({
      title,
      description,
      amount,
      recipient,
      imageId: id ?? "",
    });
    setTitle("");
    setDescription("");
    setAmount("");
    setRecipient("");
    setImage(null);
  };

  const { isMember, isStakeholder, loading } = useData();
  if (loading) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>BlueAbel Venture Club</title>
        <meta name="description" content="Decentralized Venture Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {isMember && (
        <main className="w-full flex flex-col py-4 flex-grow max-w-5xl items-center">
          <div className="w-3/4 border-2 border-blue-600 rounded-xl p-3 mt-10">
            <div className="flex flex-col justify-center">
              <span className="text-xl text-center">Create a new Proposal</span>
              <p className="mt-4">
                You have to stake 0.05 MATIC to create an investment proposal.
              </p>
              <p className="text-sm mb-4">
                If the proposal is accepted, you will be refunded. If the proposal is rejected then your staked coins will go to Club&apos;s treasury.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="my-2 w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                  placeholder="Title"
                  autoComplete="off"
                  required
                />
                <textarea
                  placeholder="Describe your project here"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="my-2 w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                ></textarea>
                <input
                  type="file"
                  name="proposal-image"
                  onChange={(e) =>
                    setImage(e.target.files?.length ? e.target.files[0] : null)
                  }
                />
                <input
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="my-2 w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                  placeholder="Funding Receiver's Address"
                  autoComplete="off"
                  required
                />

                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="my-2 w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                  placeholder="Funding Amount"
                  autoComplete="off"
                  required
                />

                <button
                  className="mt-3 px-3 py-2 rounded-xl bg-blue-600 text-white"
                  type="submit"
                >
                  Create Proposal
                </button>
              </form>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
