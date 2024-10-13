import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

 //const socket = io.connect("http://localhost:8000");

const Chat = () => {
  const { search } = useLocation();
  const [params, setParams] = useState({});

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));

    console.log(searchParams);
    setParams(searchParams);
    socket("join", searchParams);
  }, [search]);

  return <div>Chat</div>;
};

export default Chat;
