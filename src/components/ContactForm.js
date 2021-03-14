import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {Formik, Field} from 'formik';
import * as Yup from 'yup';



function ContactForm() {

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (
        <Container className="mt-5">
            <Formik
                initialValues ={{
                   name: '', 
                   email:'',
                   phone:'',
                   message:''
                }}
                validationSchema = { Yup.object({
                    name: Yup.string()
                    .min(3, 'Must be at least 3 characters')
                    .max(15, 'Must be 15 characters or less')
                    .required('required'),
                    email: Yup.string()
                    .email('Invalid email')
                    .required('required'),
                    phone: Yup.string()
                    .required("required")
                    .matches(phoneRegExp, 'Phone number is not valid')
                    .min(10, "to short")
                    .max(10, "to long"),
                    message: Yup.string()
                    .required('required')
                    .min(15,'Message must be at least 15 characters')
                })}
                onSubmit = {(data, {setSubmitting , resetForm}) => {
                    setSubmitting(true);
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    //   }, 3000);
                    console.log("submit", data);
                    setSubmitting(false);
                    resetForm();

                }}
                >
                    
                    {({ errors, touched, values , isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                        <Form  onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor='name'>Name*</Form.Label>
                                <Field 
                                name='name' 
                                className='form-control-lg contact-input' 
                                as ={Form.Control}
                                placeholder="Enter Name" 
                                />

                                {errors.name && touched.name ? (
                                 <div style={{ color: 'red' }}>{errors.name}</div>
                                ) : null}

                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='email'>E-mail*</Form.Label>
                                <Field 
                                name='email' 
                                className='form-control-lg contact-input' 
                                as ={Form.Control}
                                placeholder="Enter E-mail" 
                                />

                                {errors.email && touched.email ? (
                                 <div style={{ color: 'red' }}>{errors.email}</div>
                                ) : null}

                            </Form.Group>
                            <Form.Row>
                                <Form.Group className='w-50'>
                                    <Form.Label htmlFor='phone'>Phone*</Form.Label>
                                    <Field 
                                    name='phone' 
                                    className='form-control-lg contact-input' 
                                    as ={Form.Control}
                                    placeholder="Your Phone Number" 
                                    type="tel"
                                    
                                    />
                                   
                                    {errors.phone && touched.phone ? (
                                    <div style={{ color: 'red' }}>{errors.phone}</div>
                                    ) : null}

                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label htmlFor='message'>Message*</Form.Label>
                                
                                <Form.Control 
                                className='form-control-lg contact-input' 
                                id='message' 
                                name='message' 
                                as='textarea'
                                rows={10}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}

                                />

                                {errors.message && touched.message ? (
                                 <div style={{ color: 'red' }}>{errors.message}</div>
                                ) : null}

                            </Form.Group>
                            <Button className='search-btn' variant="outline-primary" disabled={isSubmitting} type="submit">Submit</Button>
                        </Form>
                        )}
            </Formik>
        </Container>
    );
}

export default ContactForm;
