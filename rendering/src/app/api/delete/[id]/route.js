


export async function DELETE(request, { params }) {
    const ID = (await params).id;
    const res = await fetch(`http://localhost:3004/employees/${ID}`, {
        method: 'DELETE'
    })

    if(!res.ok){
        return Response.json(res.statusText,{
            status:res.status
        })
    }
    return Response.json('Delete', {status:200})
}