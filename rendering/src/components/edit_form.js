'use client'
import { useFormik } from "formik"
import * as Yup from "yup";
import { editEmployee } from "@/app/helpers/actions";
import { useState, useTransition } from "react";

export default function EditForm({employee}){
    const [isPending,startTransition] = useTransition();
    const [error,setError] = useState(null);

    const handleSubmit = async(values) => {
       // const res = await editEmployee(values);
       startTransition(async()=>{
        const {error} = await editEmployee(values);  
        if(error){
            setError(error);
        }
       });
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues:{
            id: employee.id,
            fullname: employee.fullname,
            position: employee.position,
            age: employee.age
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required('Sorry, fullname is required'),
            position: Yup.string().required('Sorry, position is required'),
            age: Yup.string().required('Sorry, age is required')
        }),
        onSubmit:(values)=>{
            /// edit employee
            handleSubmit(values)
        }
    })

    return(
        <>
           <form onSubmit={formik.handleSubmit}>

                <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="fullname"
                    placeholder="Enter the fullname" 
                    name="fullname"
                    {...formik.getFieldProps('fullname')}
                />
                { formik.errors.fullname && formik.touched.fullname ? (
                   <div className="alert alert-warning" role="alert">
                        {formik.errors.fullname}
                   </div>
                ):null}


                <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="position"
                    placeholder="Enter the position" 
                    name="position"
                    {...formik.getFieldProps('position')}
                />
                 { formik.errors.position && formik.touched.position ? (
                   <div className="alert alert-warning" role="alert">
                        {formik.errors.position}
                   </div>
                ):null}

                <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="age"
                    placeholder="Enter the age" 
                    name="age"
                    {...formik.getFieldProps('age')}
                />
                 { formik.errors.age && formik.touched.age ? (
                   <div className="alert alert-warning" role="alert">
                        {formik.errors.age}
                   </div>
                ):null}

                <button type="submit" className="btn btn-primary mb-3">
                    Edit employee
                </button>

                { error ? (
                    <div className="alert alert-danger"  role="alert">
                        {error}
                    </div>
                ):null}

           </form>
        </>
    )
}