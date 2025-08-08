import {redirect} from 'next/navigation';

export default async function UserSite({params}){

    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users)

    const user = users.find(u=>u.username===params.username)

    if(!user){
        return <h1>User Not found</h1>
    }

    redirect(`https://${user.website}`);

}