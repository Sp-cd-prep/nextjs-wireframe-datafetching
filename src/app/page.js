import Navbar from "@/components/Navbar";

export default async function page(){
  const res= await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  return(
    <>
    <Navbar/>
    <h1>Users data</h1>
    <ul>
    {users.map(user=>(
      <li key={user.id}>
       <a href={user.username}>  
        {user.name}
        </a>
      <p>{user.email}</p>
      </li>
    ))}
    </ul>
    </>
  )
}