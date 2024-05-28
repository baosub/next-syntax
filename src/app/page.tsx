import { log } from "console"

async function getData() {
  const res = await fetch('https://jsonplaceholder.org/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
  
  
}

 
export default async function Page() {
  const data = await getData()
 console.log(data);
 
  return <main></main>
}