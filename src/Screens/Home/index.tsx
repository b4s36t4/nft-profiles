import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useAccount } from "wagmi";

import Logo from "../../assets/logo.svg";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";

const Home = () => {
  const { address } = useAccount();

  //   const router = useRout
  useEffect(() => {
    if (address) {
      redirect("/dashboard");
    }
  }, [address]);
  return (
    <div className="mx-8">
      <img src={Logo} className={"w-36 h-32"} />
      <div className="flex justify-between items-start">
        <p className="mt-2 tracking-widest text-7xl w-8/12 leading-snug">
          Start your Web3 Journey Here.!!!
        </p>
        <img
          src={Image1}
          alt={"An Example NFT"}
          className={"rounded-[500px] w-[350px] h-[450px] -mt-24"}
        />
      </div>
      <p className="mt-3 text-4xl w-10/12">
        It’s High time that we share our social presence, and we help you reach
        there.!
      </p>
      <div className="-mx-10 flex justify-between items-center">
        <img
          src={Image2}
          alt={"An Example NFT"}
          className={"rounded-[440px] w-[270px] h-[150px] -ml-16"}
        />
        <button className="bg-buttonBackground py-3 px-12 text-2xl text-white">
          Start Now
        </button>
        <img
          src={Image3}
          alt={"An Example NFT"}
          className={"rounded-[500px] w-[330px] h-[205px] -mr-8"}
        />
      </div>
    </div>
  );
};

export default Home;
