import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import RenderField from '../component/renderFiled';

const GeneratedForm = () => {
    const location = useLocation();
    const fields = location.state?.fields || [];
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
    };

    return (
        <div className="mx-auto my-auto p-6 h-full min-h-[100vh] bg-[#081229] shadow-md text-white">
            <h1 className="lg:text-5xl text-5xl w-full text-center font-bold mb-6">Your Form</h1>

            {fields.length === 0 ? (
                <p className="text-gray-200 flex min-h-[50vh] text-3xl text-center w-full py-10 items-center justify-center">
                    No form fields found. Please go back and create your form.
                </p>
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col mx-auto max-w-[50vw] justify-center p-10"
                >
                    {fields.map(field => (
                        <RenderField key={field.id} field={field} register={register} errors={errors} />
                    ))}

                    <button
                        type="submit"
                        className="mt-6 px-6 py-3 mx-auto text-xl border-red-600 border-4 bg-[#32407B] text-white font-medium rounded hover:bg-[#46B5D1] transition-colors">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default GeneratedForm;
