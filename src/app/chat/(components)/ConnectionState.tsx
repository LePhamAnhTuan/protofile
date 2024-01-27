import React from 'react'

export function ConnectionState({ isConnected }: any) {
    console.log('isConnected: ', isConnected);
    return <p>State: {'' + isConnected}</p>;
}
