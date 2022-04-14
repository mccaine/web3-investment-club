declare let window: any;
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import Web3 from "web3";
import DVC from "../abis/dVC.json";
import { settings } from "../utils/settings";
import { Proposal } from "../utils/interface";

interface DataContextProps {
  account: string;
  loading: boolean;
  connect: () => Promise<void>;
  dVc: any;
  allProposals: Proposal[];
  isStakeholder: boolean;
  isMember: boolean;
  currentBal: string;
  allVotes: string[];
  allInvestedProposal: Proposal[];
  createStakeholder: (amount: string) => Promise<void>;
  provideFunds: (id: string, amount: string) => Promise<void>;
  getProposal: (id: string) => Promise<Proposal>;
  vote: (id: string, vote: boolean) => Promise<void>;
  releaseFunding: (id: string) => Promise<void>;
  createProposal: ({
    title,
    description,
    amount,
    recipient,
    imageId,
  }: {
    title: string;
    description: string;
    amount: string;
    recipient: string;
    imageId: string;
  }) => Promise<void>;
}

const DataContext = createContext<DataContextProps>({
  account: "",
  loading: true,
  connect: async () => {},
  dVc: null,
  allProposals: [],
  isStakeholder: false,
  isMember: false,
  currentBal: "",
  allVotes: [],
  allInvestedProposal: [],
  createStakeholder: async (val) => {},
  provideFunds: async (id, amount) => {},
  createProposal: async () => {},
  vote: async () => {},
  releaseFunding: async () => {},
  getProposal: async (val) => {
    return {} as Proposal;
  },
});

export const DataProvider: React.FC = ({ children }) => {
  const data = useProviderData();

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext<DataContextProps>(DataContext);

export const useProviderData = () => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState("");
  const [dVc, setFundingDao] = useState<any>();
  const [allProposals, setAllProposals] = useState<Proposal[]>([]);
  const [isStakeholder, setIsStakeholder] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [currentBal, setCurrentBal] = useState("");
  const [allVotes, setAllVotes] = useState<string[]>([]);
  const [allInvestedProposal, setAllInvestedProposal] = useState<Proposal[]>(
    []
  );

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    if (account) {
      loadBlockchainData()
    }
  },[account])

  const connect = async () => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.request({ method: "eth_requestAccounts" });
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert("Non-Eth browser detected. Please consider using MetaMask.");
        return;
      }
      var allAccounts = await window.web3.eth.getAccounts();
      console.log(allAccounts)
      setAccount(allAccounts[0]);
    } catch(err) {
      console.log("ERROR", err)
    }
  };

  const loadBlockchainData = async () => {
    const networkId = process.env.NEXT_PUBLIC_NETWORK_ID;
    const web3 = window.web3;
    // @ts-ignore
    const dVcData= DVC.networks[networkId];
    if (dVcData) {
      var dVcContract = await new web3.eth.Contract(
        DVC.abi,
        dVcData.address,
      );
      setFundingDao(dVcContract);

      setTimeout(async () => {
       
        var totalProposals = await dVcContract.methods
          .getAllProposals()
          .call({ from: account });
        var tempProposals: Proposal[] = [];
        totalProposals.forEach((item: Proposal) => {
          tempProposals.push(item);
        });
        setAllProposals(tempProposals);
        var isStakeholder = await dVcContract.methods
          .isStakeholder()
          .call({
            from: account,
          });
        console.log(`isStakeholder`, isStakeholder);
        setIsStakeholder(isStakeholder);
        var isMember = await dVcContract.methods.isMember().call({
          from: account,
        });

        console.log(`isMember`, isMember);
        setIsMember(isMember);
        if (isMember && !isStakeholder) {
          var memberBal = await dVcContract.methods.getMemberBal().call({
            from: account,
          });
          setCurrentBal(Web3.utils.fromWei(memberBal, "ether"));
        } else if (isMember && isStakeholder) {
          var stakeholderBal = await dVcContract.methods
            .getStakeholderBal()
            .call({
              from: account,
            });
          setCurrentBal(Web3.utils.fromWei(stakeholderBal, "ether"));
          var votes = await dVcContract.methods.getVotes().call({
            from: account,
          });
          var res = tempProposals.filter((proposal) => {
            const vote = votes.find((vote: string) => vote === proposal.id);
            if (vote) {
              return true;
            }
            return false;
          });
          setAllInvestedProposal(res);
          setAllVotes(votes);
        } else {
          setCurrentBal("");
        }
        setLoading(false);
      }, 1500);
    } else {
      window.alert("TestNet not found");
    }
  };

  const createStakeholder = async (amount: string) => {
    if (amount === "" || amount === "0") {
      toast.error("Please enter valid amount", {});
    }
    console.log(`dVc`, dVc);
    await dVc.methods
      .createStakeholder()
      .send({ from: account, value: Web3.utils.toWei(amount, "ether") });
    loadBlockchainData();
  };

  const createProposal = async ({
    title,
    description,
    amount,
    recipient,
    imageId,
  }: {
    title: string;
    description: string;
    amount: string;
    recipient: string;
    imageId: string;
  }) => {
    if (amount === "" || amount === "0") {
      toast.error("Please enter valid amount", {});
    }
    await dVc.methods
      .createProposal(
        title,
        description,
        recipient,
        Web3.utils.toWei(amount, "ether"),
        imageId
      )
      .send({ from: account, value: Web3.utils.toWei(settings.proposeStake, "ether") });
    loadBlockchainData();
  };

  const getProposal = async (id: string) => {
    var data = await dVc.methods.getProposal(id).call({
      from: account,
    });
    var proposal: Proposal = data;
    return proposal;
  };

  const vote = async (id: string, vote: boolean) => {
    await dVc.methods.vote(id, vote).send({
      from: account,
    });
    loadBlockchainData();
  };

  const provideFunds = async (id: string, amount: string) => {
    await dVc.methods
      .provideFunds(id, Web3.utils.toWei(amount, "ether"))
      .send({
        from: account,
        value: Web3.utils.toWei(amount, "ether"),
      });
    loadBlockchainData();
  };

  const releaseFunding = async (id: string) => {
    await dVc.methods.releaseFunding(id).send({
      from: account,
    });
    loadBlockchainData();
  };

  return {
    account,
    dVc,
    loading,
    allProposals,
    isStakeholder,
    isMember,
    currentBal,
    allVotes,
    allInvestedProposal,
    connect,
    createStakeholder,
    createProposal,
    getProposal,
    provideFunds,
    releaseFunding,
    vote,
  };
};
