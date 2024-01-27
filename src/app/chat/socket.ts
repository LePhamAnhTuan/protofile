import { Backend_URL, Frontend_URL } from "@/lib/Constants";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { getToken } from "next-auth/jwt"
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const socket = io(`${Backend_URL}`, {
    autoConnect: false,
    extraHeaders: {
        Authorization: `Bearer ${Frontend_URL}`
    }
});
// export const getServerSideProps: GetServerSideProps = async (
//     context: GetServerSidePropsContext
// ) => {
//     const session = await getServerSession(context.req, context.res, authOptions);
//     console.log('session: ', session);

//     return {
//         props: { session }
//     };
// };
