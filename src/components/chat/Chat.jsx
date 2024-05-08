import EmojiPicker from "emoji-picker-react";

import "./chat.css";
import { useEffect, useRef, useState } from "react";

function Chat() {
  const [emojiBoxOpen, setEmojiBoxOpen] = useState(false);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const changeEmojiBoxStatus = () => {
    setEmojiBoxOpen((prev) => !prev);
  };

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="chat">
        <div className="top">
          <div className="user">
            <img src="/assets/avatar.png" alt="" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Lorem ipsum dolor sit, amet.</p>
            </div>
          </div>
          <div className="icons">
            <img src="/assets/phone.png" alt="" />
            <img src="/assets/video.png" alt="" />
            <img src="/assets/info.png" alt="" />
          </div>
        </div>
        <div className="middle">
          <div className="message ">
            <img src="/assets/avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <img
                src="https://www.gemoo-resource.com/tools/img/image_urlgenerator_step1@2x.png"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message ">
            <img src="/assets/avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message ">
            <img src="/assets/avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div ref={endRef}></div>
        </div>
        <div className="bottom">
          <div className="icons">
            <img src="/assets/img.png" alt="" className="bottom-icon" />
            <img src="/assets/camera.png" alt="" className="bottom-icon" />
            <img src="/assets/mic.png" alt="" className="bottom-icon" />
          </div>
          <input
            type="text"
            placeholder="Message"
            value={text}
            onChange={handleText}
          />
          <div className="emoji">
            <img
              src="/assets/emoji.png"
              alt=""
              onClick={changeEmojiBoxStatus}
            />
            <div className="picker">
              {emojiBoxOpen && (
                <EmojiPicker
                  onEmojiClick={handleEmoji}
                  searchDisabled
                  lazyLoadEmojis
                  searchPlaceHolder="Search..."
                />
              )}
            </div>
          </div>
          <button className="send-button">Send</button>
        </div>
      </div>
    </>
  );
}

export default Chat;
