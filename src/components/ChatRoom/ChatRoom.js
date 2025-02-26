import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../../firebase';
import { collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
 function ChatRoom() {
  const [user] = useAuthState(auth); // Track authenticated user
  const messagesRef = collection(firestore, 'messages'); // Reference to the 'messages' collection
  const q = query(messagesRef, orderBy('createdAt'), limit(25)); // Query for the last 25 messages
  const [messages, loading, error] = useCollectionData(q); // Fetch messages

  const [formValue, setFormValue] = useState(''); // State for the input field
  const dummy = useRef(); // Reference for auto-scrolling

  const sendMessage = async (e) => {
    e.preventDefault();

    if (formValue.trim() === '') return; // Don't send empty messages

    const { uid, displayName, photoURL } = user; // Get user info

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      displayName,
      photoURL,
    });

    setFormValue(''); // Clear the input field
    dummy.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the bottom
  };

  if (loading) {
    return <div>Loading chat...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="chat-room">
      <main>
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
        <div ref={dummy}></div> {/* Dummy div for auto-scrolling */}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </div>
  );
}

function ChatMessage({ message }) {
  const { text, uid, displayName, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://via.placeholder.com/150'} alt="User Avatar" />
      <div>
        <p>{displayName}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChatRoom;