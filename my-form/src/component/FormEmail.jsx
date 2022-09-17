import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const emailSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short').max(50, 'Too Long').required('required'),
    email: Yup.string().email('Invalid email').required('Required')
});

const FormEmail = () => (
    <div id="login">
        <p className="login__title">Mail Form</p>
        <Formik
            initialValues={{ email: '', title: '' }}
            validationSchema={emailSchema}
            onSubmit={value => {
                if(value.title && value.email){
                    alert('Success!')
                }
            }}
        >
            {
                ({ errors, touched }) => (
                    <Form style={{width:'100%'}}>
                        <p>To</p>
                        <Field name="email" className={errors.email && touched.email ? 'input__erorr' : null} />
                        {errors.email && touched.email ? (<p className="error">{errors.email}</p>) : null}

                        <p>Title</p>
                        <Field name="title" className={errors.title && touched.title ? 'input__erorr' : ''}/>
                        {errors.title && touched.title ? (<p className="error">{errors.title}</p>) : null}

                        <p>Message</p><br />
                        <textarea cols="30"></textarea>

                        <Field type="file" name="file" />
                        <button className="btn" type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
)
export default FormEmail