import React from 'react'
import '../App.css';
import { useFormik } from 'formik'

const initialValues =   {
    name:'',
    pnumber:'',
    email:'',
    anumber:'',
    pannumber:'',
    afile:'',
    pfile:'',
    challan:''
}

const onSubmit = values =>{
    console.log("form data" , values)
}

const validate = values =>{

    let errors ={}

    if(!values.name){
        errors.name = "This Field is required"
    }

    if(!values.pnumber){
        errors.pnumber = "This Field is required"
    }

    if(!values.email){
        errors.email = "This Field is required"
    }

    if(!values.anumber){
        errors.anumber = "This Field is required"
    }

    if(!values.pannumber){
        errors.pannumber = "This Field is required"
    }
    return errors

    // if(!values.afile){
    //     errors.afile = "This Field is required"
    // }

    // if(!values.pfile){
    //     errors.pfile = "This Field is required"
    // }

    // if(!values.challan){
    //     errors.challan = "This Field is required"
    // }
}

function FormComponent() {

    const formik = useFormik({
        initialValues ,
        onSubmit ,
        validate 

    })

    // console.log("visited",formik.touched)

  

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>

            <div className='form-control'>
            <label>Name</label>
            <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
            {formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
            </div>
           

            <div className='form-control'>
            <label>Phone Number</label>
            <input type="number" id="pnumber" name="pnumber" onChange={formik.handleChange} value={formik.values.pnumber} onBlur={formik.handleBlur}/>
            { formik.touched.pnumber && formik.errors.pnumber ? <div className='error'>{formik.errors.pnumber}</div> : null}
            </div>

            <div className='form-control'>
            <label>Email</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
            { formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
              </div>

            <div className='form-control'>
            <label>Adhaar Number</label>
            <input type="number" id="anumber" name="anumber" onChange={formik.handleChange} value={formik.values.anumber} onBlur={formik.handleBlur} />
            { formik.touched.anumber && formik.errors.anumber ? <div className='error'>{formik.errors.anumber}</div> : null}
             </div >

             <div className='form-control'>
            <label>Pan Card Number</label>
            <input type="text" id="pannumber" name="pannumber" onChange={formik.handleChange} value={formik.values.pannumber} onBlur={formik.handleBlur} />
            { formik.touched.pannumber && formik.errors.pannumber ? <div className='error'>{formik.errors.pannumber}</div> : null}
            </div >

            <div className='form-control'>
            <label>Adhaar PDF</label>
            <input type="file" id="afile" name="afile" onChange={formik.handleChange} value={formik.values.afile} />
            {/* {formik.errors.afile ? <div className='error'>{formik.errors.afile}</div> : null} */}
            </div>

            <div className='form-control'>
            <label>Pan Card PDF</label>
            <input type="file" id="pfile" name="pfile" onChange={formik.handleChange} value={formik.values.pfile} />
            {/* {formik.errors.pfile ? <div className='error'>{formik.errors.pfile}</div> : null} */}
            </div>

            <div className='form-control'>
            <label>Challan image</label>
            <input type="file" id="challan" name="challan" onChange={formik.handleChange} value={formik.values.challan} />
            {/* {formik.errors.challan ? <div className='error'>{formik.errors.challan}</div> : null} */}
            </div>

            <button id='sbtn' type="submit">Submit</button>

        </form>
    </div>
  )
}

export default FormComponent