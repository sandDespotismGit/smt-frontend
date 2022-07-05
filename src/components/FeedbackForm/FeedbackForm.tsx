import React from 'react';
import { VStack, Input, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';

const FeedbackForm = React.memo(() => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">email address</label>
            <Input 
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Button type='submit'>Submit</Button>
        </form>
    );
});
export{};