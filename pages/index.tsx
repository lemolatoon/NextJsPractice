import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { hello } from "../src/canvas";

const Index: NextPage = () => {
  const [count, setCount] = useState<number>(0);
  const [msg, setMsg] = useState<string>("No Message");

  function buttonOnChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setMsg(event.target.value);
  }

  return (
    <>
      <h1>Hello Next.js</h1>
      <h2>{count}</h2>
      <h2>
        Here is input message you typed:<br></br>
        {msg}
      </h2>
      <button
        onClick={() => {
          setCount(count + 1);
          hello();
        }}
      >
        count
      </button>
      <br></br>
      <form>
        <input type="text" onChange={buttonOnChanged}></input>
      </form>
      <br></br>
      <Link href="./second">second</Link>
    </>
  );
};

export default Index;
