import Link from 'next/link'
import { createuser } from '../lib/api'
export default function Home() {
  return (
    <div className="container">
        Snipcode functions 
        <button onClick={()=>{
            createuser()
        }}>create user</button>

        <Link href="/api/hello"><a>hello api endpoint</a></Link><br/>
     
    </div>
  )
}
