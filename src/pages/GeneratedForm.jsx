import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import renderField from "../component/renderFiled";

const GeneratedForm = () => {
    const [fields, setFields] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const savedFields = localStorage.getItem('formFields');
        if (savedFields) {
            setFields(JSON.parse(savedFields));
        }
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="mx-auto my-auto p-6 h-full min-h-[100vh] bg-[#081229] shadow-md text-white">
            <h1 className="text-5xl w-full text-center font-bold mb-6">Your Form</h1>
            {fields.length === 0 ? (
                <p className="text-gray-500">No form fields found. Please go back and create your form.</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto max-w-[50vw] justify-center p-10'>
                    {fields.map(field => renderField(field, register, errors))}
                    <button
                        type="submit"
                        className="mt-6 px-6 py-3 mx-auto text-xl border-red-600 border-4 bg-[#ec5990] text-white font-medium rounded hover:bg-[#ff0096] transition-colors"
                    >
                        Submit Form
                    </button>
                </form>
            )}
        </div>
    );
};
export default GeneratedForm;


