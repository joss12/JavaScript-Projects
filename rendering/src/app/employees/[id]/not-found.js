import Link from 'next/link';

export default function EmployeeNotFound(){
    return(
        <div>
            <h1>sorry, employee not found</h1>
            <Link href="/">Back to Home</Link>
        </div>
    )
}