import React, { useState } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const Messages = ({ currentUser }) => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Type in username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Start Chat</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="75vh"
      userName={currentUser.email}
      userSecret="123456"
      projectID="c79044df-fbd2-477c-a1ca-8d1586aab148"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default Messages;
