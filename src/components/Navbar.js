// import { usePathname } from "next/navigation";   
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/booking/flight">Flight Booking</Link>
        <Link href="/booking/bus">Bus Booking</Link>
        <Link href="/wireframe">Wireframe-Blog</Link>
        {/* <Link href="/booking/bus">Bus Booking</Link>
        <Link href="/booking/bus">Bus Booking</Link> */}
    </div>
  )
}

export default Navbar