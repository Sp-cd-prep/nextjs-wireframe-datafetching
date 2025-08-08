"use client"
import Link from "next/link";
import {useParams,useRouter} from "next/navigation"
const page = () => {
  const {slug}= useParams();
  const router = useRouter()
  return (
    <>
    <h3>Dynamic Routing </h3>
    <h1>Flight Name: {slug}</h1>
    <Link href="/booking/flight">Back</Link>
    {/* <button onClick={()=>router.push("/booking/flight")}>Back</button> */}
    </>
  )
}

export default page