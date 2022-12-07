import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import "./App.css";

const { chains, provider, webSocketProvider } = configureChains(
  [
    // chain.polygon,
    chain.polygonMumbai,
    // chain.mainnet,
    chain.optimismGoerli,
    chain.arbitrumGoerli,
    chain.goerli,
  ],
  [publicProvider()]
);

const client = createClient({ autoConnect: true, provider, webSocketProvider });

function App() {
  return (
    <div className="bg-background w-screen h-screen overflow-hidden">
      <WagmiConfig client={client}>
        <RouterProvider router={router} />
      </WagmiConfig>
    </div>
  );
}

export default App;
