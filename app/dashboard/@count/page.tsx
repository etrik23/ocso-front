import axios from "axios";
import { cookies, headers } from 'next/headers';

const TOKEN_NAME = 'token';

const CountPage = async () => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const countLocations = await axios.get("http://127.0.0.1:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const cantidad = countLocations?.data?.length;
    return `Hay: ${cantidad} tienda${cantidad >1 ? "s": ""}`;
}

export default CountPage;