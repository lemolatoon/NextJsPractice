import { NextPage } from "next";

let i = 0;

const Index: NextPage = () => {

    return <button onClick={() => alert("clicked")}>Hello Next.js</button>
}

function inc() {
    i++;
}




export default Index;