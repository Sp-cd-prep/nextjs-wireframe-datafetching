import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Flight Booking</div>
      <Link href="/booking/flight/airIndia">Air India</Link>
      <br />
      <Link href="/booking/flight/indigo">IndiGO</Link>
      <br />
      <Link href="/booking/flight/spiceget">Spice Get</Link>
      <br />
    </>
  );
};

export default page;
