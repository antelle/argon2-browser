import React, { useState } from "react";
import "./App.css";
const argon2 = require('argon2-browser')

function App() {
  const [passwd, setPassword] = useState();
  const [salt, setSalt] = useState();
  const [timeCost, setTime] = useState(3);
  const [memory, setMemory] = useState(4096);
  const [thread, setThread] = useState(1);
  const [hashLen, setHashLen] = useState(32);

  const handleSubmit = async e => {
    e.preventDefault();
    argon2.hash({ pass: passwd, salt: salt, time: timeCost, mem: memory, parallelism: thread,
        hashLen: hashLen, type: argon2.ArgonType.Argon2id})
        .then(h => console.log(h.hash, h.hashHex, h.encoded))
        .catch(e => console.error(e.message, e.code))
  }
  return (
    <div className="login-wrapper">
    <form onSubmit={handleSubmit}>
      <label>
        <p>Password</p>
        <input value={passwd} type="passwd" onChange={e => setPassword(e.target.value)}/>
      </label>
      <label>
        <p>Salt</p>
        <input value={salt} type="salt" onChange={e => setSalt(e.target.value)}/>
      </label>
      <label>
        <p>Time</p>
        <input value={timeCost} type="timeCost" onChange={e => setTime(e.target.value)}/>
      </label>
      <label>
        <p>Memory</p>
        <input value={memory} type="memory" onChange={e => setMemory(e.target.value)}/>
      </label>
      <label>
        <p>Thread</p>
        <input value={thread} type="thread" onChange={e => setThread(e.target.value)}/>
      </label>
      <label>
        <p>Hash Length</p>
        <input value="hashLen" type="hashLen" onChange={e => setHashLen(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default App;
