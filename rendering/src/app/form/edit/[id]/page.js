import EditForm from "@/components/edit_form";

async function getEmployee(ID){
  const res = await fetch(`http://localhost:3004/employees/${ID}`);
  if(!res.ok){
    throw new Error('Could not find employee')
  }
  return res.json();
}

export default async function EditPage({params}) {
  const ID = (await params).id;
  const employee = await getEmployee(ID);

  return (
    <>
     <EditForm employee={employee}/>
    </>
  );
}
  