import { getServerSession } from "next-auth";
import { Backend_URL } from "./Constants";
import { authOptions } from "./auth";

interface httpProps {
    method: string
    url: string
    request?: any
}

async function fetchWithBearerToken(url: string, options?: RequestInit, request?: any) {
    try {
        const session = await getServerSession(authOptions); // Lấy session nếu cần

        const response = await fetch(Backend_URL + url, {
            method: options?.method ?? 'GET',
            body: JSON.stringify(request),
            headers: {
                authorization: `Bearer ${session?.backendTokens.accessToken}`,
                'Content-Type': 'application/json',
            },
            ...options,
        }).then((response) => response.json());

        return response;
    } catch (error) {
        console.log('error: ', error);
        throw error; // Re-throw error để xử lý ở nơi gọi hàm
    }
}

export { fetchWithBearerToken }