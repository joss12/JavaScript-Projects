import Link from "next/link";
import { headers, cookies} from "next/headers";


// export const dynamic = 'force-dynamic';
// export const revalidate = 5;

async function getEmployees(){

  const cookiesStore = await cookies();
  // console.log(cookiesStore.get('some-cookie'))
  // console.log(cookiesStore.getAll().map((cookies)=>{return cookies}))
  // console.log(cookiesStore.has('some-cookie'))
  // cookiesStore.set('name', 'value', {secure:true})
  // cookiesStore.delete('some-cookie')

  // const headersList = (await headers())
  // const userAuth = headersList.entries();
  // headersList.forEach((value, key)=>{
  //   console.log(value, '=', key)
  // })

  // const hasHeader = headersList.has('Content-Type')
  // console.log(headersList.keys())
  // console.log(headersList.values())

  const res = await fetch(`http://localhost:3004/employees`);
  if(!res.ok){
    throw new Error('Could not find employees')
  }
  return res.json();
}


export default async function Home() {
  const employees = await getEmployees();
  const showEmployees = employees.map(employee=>(
    <div key={employee.id} className="col">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            {employee.fullname}
          </h3>
          <p className="card-text">{employee.position}</p>
          <p className="card-text">{employee.age}</p>
          <Link href={`/employees/${employee.id}`} className="btn btn-primary">Go to employee</Link>
        </div>
      </div>
    </div>
  ));


  return (
   <>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {showEmployees}
    </div>

   </>
  );
}