import { useState } from "react";

import "./styles.css";
import emojis from "./emoji-db";

export default function App() {
  const [emojiInput, setEmojiInput] = useState("");
  const [emojiPreview, setEmojiPreview] = useState("🪖");
  const [emojiResult, setEmojiResult] = useState(
    "Translation will appear here"
  );

  const onEmojiClickHandler = (emojiKey) => {
    setEmojiInput("");
    setEmojiPreview(emojiKey);
    setEmojiResult(emojis[emojiKey]);
  };

  const onInputChangeHandler = (event) => {
    const value = event.target.value;
    setEmojiInput(value);
    setEmojiPreview(value);
    if (value in emojis) {
      setEmojiResult(emojis[value]);
    } else {
      setEmojiResult("This emoji is not available in our database");
    }
  };

  const emojiList = Object.keys(emojis).map((emoji) => (
    <li key={emoji} onClick={() => onEmojiClickHandler(emoji)}>
      {emoji}
    </li>
  ));

  return (
    <div className="App">
      <h1>Emoji Detector</h1>
      <input
        onChange={onInputChangeHandler}
        value={emojiInput}
        placeholder="Search your emoji"
      />
      <h2>{emojiPreview}</h2>
      <h3>{emojiResult}</h3>
      {/* {emojiList} */}
      <ul className="emojis">{emojiList}</ul>
    </div>
  );
}

// Code Snipet To Extract Emojis From https://emojipedia.org/people/
// var emojis = {};
// Array.from(document.querySelectorAll(".emoji-list li"))
//   .map((emote) => {
//     var clone = emote.querySelector("a").cloneNode(true);
//     clone.removeChild(clone.querySelector(".emoji"));
//     return {
//       [emote
//         .querySelector(".emoji")
//         .textContent.trim()]: clone.textContent.trim()
//     };
//   })
//   .forEach((emoji) => (emojis = { ...emojis, ...emoji }));
// console.log(JSON.stringify(emojis));
