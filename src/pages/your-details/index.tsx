import { useLoaderData } from "react-router-dom"
import type { TUser } from "../../types/user"

export const YourDetails = () => {
    const {name, email, phone, mothersMaidenName, hometown}:TUser = useLoaderData(); 
    
    return(
        <>
            <h2>Your details</h2>
            <div>Your name: {name}</div>
            <div>Your email: {email}</div>
            {phone && <div>Your phone: {phone}</div>}
            {mothersMaidenName && <div>Your mothers maiden name: {mothersMaidenName}</div>}
            {hometown && <div>Your home town: {hometown}</div>}
        </>
    )
}