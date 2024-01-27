'use client'
import { useEffect, useState } from 'react';
import { ConnectionManager } from './(components)/ConnectionManager';
import { ConnectionState } from './(components)/ConnectionState';
import { Events } from './(components)/Events';
import { MyForm } from './(components)/MyForm';
import { socket } from './socket';
export default function App() {
    // const socket = Socket.socket1;
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState<any>([]);
    const [data, setData] = useState<any>([]);
    const [userName, setUserName] = useState<string>("");
    function onConnect() {
        // console.log('data: ', data);
        console.log("connect")
        setIsConnected(true);

    }

    function onDisconnect() {
        setIsConnected(false);
    }

    function onFooEvent(value: any) {
        console.log("on event")
        setFooEvents((previous: any) => [...previous, value]);
    }
    function onUserJoin({ username }: any) {
        console.log('value: ', username);
        setUserName(username);
    }
    useEffect(() => {


        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('event', onFooEvent);
        socket.on('user-joined', onUserJoin)
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('event', onFooEvent);
            socket.off('user-joined', onUserJoin)

        };
    }, []);

    return (
        <div className="App bg-blue-300">
            <ConnectionState isConnected={isConnected} />
            <Events events={fooEvents} name={userName} />
            <ConnectionManager />
            <MyForm />
        </div>
    );
}