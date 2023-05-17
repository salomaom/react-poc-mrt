import { useEffect, useRef } from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

const useRTClient = () => {
  const connectionRef = useRef<HubConnection | null>(null);

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl(import.meta.env.MRT_REAL_TIME_URL)
      .build();

    connection
      .start()
      .then(() => {
        console.log("Real time connection established.");
      })
      .catch((error) => {
        console.error("Error establishing real time connection:", error);
      });

    connectionRef.current = connection;

    return () => {
      if (connectionRef.current) {
        connectionRef.current.stop();
      }
    };
  }, []);

  return connectionRef.current;
};

export default useRTClient;
