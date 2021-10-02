/* src/App.js */
import "./App.css";
import { useState } from "react";
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");
function App() {
  const [fileUrl, updateFileUrl] = useState(``);
  async function onChange(e) {
    const file = e.target.files[0];
    console.log(e);
    console.log(file);
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      console.log(`url ipfs: ${url}`);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div className="App">
      <h1>IPFS Example</h1>
      <input type="file" onChange={onChange} />
      {fileUrl && <img src={fileUrl} width="600px" />}
    </div>
  );
}
export default App;

// import logo from "./logo.svg";
// import "./App.css";
// /* import the ipfs-http-client library */
// import { create } from "ipfs-http-client";
// import { useEffect, useState } from "react";

// function App() {
//   useEffect(() => {
//     /* Create an instance of the client */
//     const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
//     /* upload the file */
//     // const added = await client.add(file);
//     /* or a string */
//     const added = await client.add("hello world from code!");
//   }, []);
//   return <div className="App"></div>;
// }

// export default App;
