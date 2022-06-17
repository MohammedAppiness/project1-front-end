import React from 'react'
import {Button,Box,TextField } from "@mui/material"
import {Field, Form, Formik } from "formik"
import { number, object,string } from "yup"

const initialValues={
    fullname: "",
    phonenumber:"",
    email:"",
    adharnumber:"",
    pancardnumber:"",
    adhaarpdf:"",
    pancardpdf:"",
    challan:""
}

function FormComponent2() {
  
  return (
 
    
      <div className='form_style' >
    
    <Formik 
            initialValues={initialValues} 
            onSubmit={(values, formikHelpers) =>{
                console.log(values)
                formikHelpers.resetForm();
            }} 
            validationSchema={object({
                fullname: string().required("Please enter your name").min(2,"Name too Short"),
                phonenumber: string().required("Please Enter Your Number").min(5,"Not a valid Number"),
                email: string().required("Please enter your mail").email("Invalid input"),
                adharnumber:string().required("Please enter Your Aadhar Number").min(12,"Aadhar number Should Not be less than 12 Digits"),
                pancardnumber:string().required("Please Enter Your Pan Number")
            })}
            >
        {({errors, isValid, touched, dirty}) =>(
        <Form>

          <h1 id='heading'>Provide Fill All Details</h1>
            <Field 
                name="fullname" 
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Full Name" 
                fullWidth 
                error={Boolean(errors.fullname) && Boolean(touched.fullname)} 
                helperText={Boolean(touched.fullname) && errors.fullname} 
                />

                <Box height={26} />

            <Field 
             name="phonenumber" 
             type="number"
             as={TextField}
             variant="outlined"
             color="primary"
             label="Phone Number" 
             fullWidth 
             error={Boolean(errors.phonenumber) && Boolean(touched.phonenumber)} 
             helperText={Boolean(touched.phonenumber) && errors.phonenumber} 
                />

               <Box height={26} />

            <Field 
            name="email" 
            type="email"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Email" 
            fullWidth 
            error={Boolean(errors.email) && Boolean(touched.email)} 
             helperText={Boolean(touched.email) && errors.email} 
             />

                <Box height={26} />

            <Field 
             name="adharnumber" 
             type="text"
             as={TextField}
             variant="outlined"
             color="primary"
             label="Adhaar Number" 
             fullWidth 
             error={Boolean(errors.adharnumber) && Boolean(touched.adharnumber)} 
             helperText={Boolean(touched.adharnumber) && errors.adharnumber}
             />

              <Box height={26} />

            <Field  
            name="pancardnumber" 
            type="text"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Pan Card Number" 
            fullWidth 
            error={Boolean(errors.pancardnumber) && Boolean(touched.pancardnumber)} 
            helperText={Boolean(touched.pancardnumber) && errors.pancardnumber}
            />

            <Box height={26} />

           <b><label>Adhaar PDF</label></b>
            <Field 
             name="adhaarpdf" 
             type="file"
             as={TextField}
             variant="outlined"
             color="primary"   
             fullWidth />

               <Box height={26} />

            <b><label>Pan Card PDF</label></b>
            <Field 
             name="pancardpdf" 
             type="file"
             as={TextField}
             variant="outlined"
             color="primary"   
             fullWidth />

               <Box height={26} />

           <b><label>Challan Image</label></b>
            <Field 
            name="challan" 
            type="file"
            as={TextField}
            variant="outlined"
            color="primary"   
            fullWidth />

               <Box height={30} />

            <Button 
                 type='submit' 
                 variant='contained'
                 color="primary" 
                 disabled={!dirty || !isValid}
            >
                     Submit
                     </Button>
        </Form>)}
    </Formik>
    
</div>




  )
}

export default FormComponent2
