import "./ChatWindow.css";
import Chat from "./chat.jsx";

function ChatWindow() {
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
          <input placeholder="Ask anything" />
          <div id="submit">
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
