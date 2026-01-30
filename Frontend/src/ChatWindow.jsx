import "./ChatWindow.css";
import Chat from "./chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext } from "react";
function ChatWindow() {

const { prompt, setPrompt, reply, setReply, currThreadId } = useContext(MyContext);

const getReply = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      message: prompt,
      threadId: currThreadId
    }
  };

  try {
    await fetch("http://localhost:8080/api/chat");
  } catch (err) {
    console.log(err);
  }
};

const providerValues = {
  prompt, setPrompt,
  reply, setReply,
};

  return (
    <div className="chatWindow">
      <div className="navbar">
        <span>
          GPTflow <i className="fa-solid fa-chevron-down"></i>
        </span>
        <div className="userIconDiv">
          <span className="userIcon">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </div>

      <Chat />

      <div className="chatInput">
        <div className="inputBox">
          <input placeholder="Ask anything"
          value={prompt}
onChange={(e) => setPrompt(e.target.value)}

          
          
          />
          <div id="submit" onClick={getReply}>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>

        <p className="info">
          GPTflow can make mistakes. Check important info. See Cookie Preferences.
        </p>
      </div>
    </div>
  );
}

export default ChatWindow;
