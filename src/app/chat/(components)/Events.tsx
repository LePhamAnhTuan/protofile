import React from 'react';

export function Events({ events, name }: any) {
    const { userName } = name
    return (
        <ul>
            <li>{userName ?? ""}</li>
            {
                events.map((event: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) =>
                    <li key={index}>{event}</li>
                )
            }
        </ul>
    );
}