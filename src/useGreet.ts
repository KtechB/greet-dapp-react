import { ethers, Contract } from "ethers";
import { useEffect, useState } from "react";
import greeterAbi from "./abi/Greeter.json";

export const useGreet = () => {
  const [greet, setGreet] = useState<string>("");
  // metamaskを介してネットワークノードとの通信をするオブジェクトを作成する
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const greetAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // アドレス、ABI, プロバイダを指定してコントラクトオブジェクトを作成
  // コントラクトの状態を変化させる(gas代が必要な）操作をするためには場合はSignerを与える必要がある
  const greetContract = new Contract(
    greetAddress,
    greeterAbi.abi,
    provider
  ).connect(provider.getSigner(0));

  const setGreeting = async (value: string) => {
    // setGreetingメソッドを呼び出し
    greetContract.setGreeting(value);
  };

  // greetを取得して、状態として保持する
  useEffect(() => {
    const fetchData = async () => {
      // greetメソッドを呼び出し
      const greetFetched = await greetContract.greet();
      setGreet(greetFetched);
    };

    fetchData().catch((e) => console.log(e));
  }, [greetContract]);
  return { greet, setGreeting };
};
