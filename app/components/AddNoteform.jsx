'use client'
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const AddNoteForm = () => {

    const handleSubmit = (values)=>{
        console.log(values)
    }
    const initVal = {
        title:"",
        body:""
    }
    const formValidation = Yup.object().shape({
        title:Yup.string().required("Your note must have a title").min(4,"At least 4 characters").max(20,"max of 20 characters"),
        body:Yup.string().required("Write a Note").min(5,"At least 5 characters")
        
    })
  return (
    <main className='bg-white flex items-center justify-center'>
        <div className='w-[50rem] h-fit rounded-md bg-gray-100'>
            <h1 className='uppercase text-3xl text-grey-800 font-bold text-center p-7 lg:p-7 lg:4xl'>Add Note</h1>
        
            <Formik initialValues={initVal} onSubmit={handleSubmit} validationSchema={formValidation}>
                <Form className='p-4 flex flex-col gap-4 justify-center items-center'>
                    <Field type="text" name= "title" placeholder="title" className='w-full outline-none border-none h-10 text-lg rounded-lg p-5'/>
                    <ErrorMessage name="title" componrent={'p'} className='text-red-500 text-sm'/>
                    <Field as="textarea" name= "body" placeholder="Write Note" className='w-full outline-none border-none text-lg rounded-lg p-5 h-32'/>
                    <ErrorMessage name="body" componrent={'p'} className='text-red-500 text-sm'/>
                    <button type="submit" className='uppercase font-bold py-2 px-3 border-black border-[1px] max-lg:w-full text-center'>ADD NOTE</button>
                </Form>
            </Formik>
        </div>
        
    </main>
  )
}

export default AddNoteForm
