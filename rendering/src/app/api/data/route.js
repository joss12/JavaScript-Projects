import { cookies, headers } from "next/headers";

export async function GET(){
   const cookieStore = cookies()
   const token = (await cookieStore).get('token');
   const auth = (await headers()).get('Authorization')
   const type = (await headers()).get('Content-Type')
   console.log(auth, type)

    const res = await fetch('http://localhost:3004/employees', {
        next:{revalidate:30}
    });

    const employees = await res.json();
    return Response.json(employees,{
        status: 200,
        headers:{'Set-cookie':'token=Bearer jefwergfw'}
    })
}


export async function POST(request){
    const data = await request.json();
    const res = await fetch(`http://localhost:3004/employees`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });

    if(!res.ok){
        return Response.json(res.statusText,{
            status:res.status
        })
    }

    return Response.json('ok', {status:200})
}