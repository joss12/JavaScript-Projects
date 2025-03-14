'use client'

import { addEmployee } from '@/app/helpers/actions';
import { useActionState } from 'react';

export default function AddPage() {
    const [state,action,isPending] = useActionState(addEmployee,null)

    return (
     <>
      <h1>Add employee</h1>
      <div>
        <form action={action}>
          <input type="text" className="form-control mb-3" id="fullname"
            placeholder="Enter the fullname" name="fullname"
          />

          <input type="text" className="form-control mb-3" id="position"
            placeholder="Enter the position" name="position"
          />

          <input type="text" className="form-control mb-3" id="age"
            placeholder="Enter the age" name="age"
          />

          <button type="submit" className="btn btn-primary">
            Add employee
          </button>
        </form>
        { isPending && <div>...loading</div> }
        { !state?.success ? 
          <div className="text-danger">
            {state?.message}
          </div>
        :
          <div className="text-success">
            {state?.message}
          </div>
        }
      </div>
     </>
    );
  }
  