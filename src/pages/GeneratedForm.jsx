// File: src/pages/GeneratedForm.jsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
        alert('Form submitted! Data: ' + JSON.stringify(data, null, 2));
        console.log(data);
    };

    const renderField = (field) => {
        switch (field.type) {
            case 'text':
                return (
                    <div key={field.id} className="mb-4">
                        <label className="block font-medium mb-1">{field.label}</label>
                        <input
                            {...register(`field_${field.id}`, { required: true })}
                            type="text"
                            placeholder={field.placeholder}
                            className={`w-full p-2 border rounded ${
                                errors[`field_${field.id}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors[`field_${field.id}`] && (
                            <p className="text-red-500 text-xs mt-1">This field is required</p>
                        )}
                    </div>
                );
            case 'textarea':
                return (
                    <div key={field.id} className="mb-4">
                        <label className="block font-medium mb-1">{field.label}</label>
                        <textarea
                            {...register(`field_${field.id}`, { required: true })}
                            placeholder={field.placeholder}
                            rows="4"
                            className={`w-full p-2 border rounded ${
                                errors[`field_${field.id}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors[`field_${field.id}`] && (
                            <p className="text-red-500 text-xs mt-1">This field is required</p>
                        )}
                    </div>
                );
            case 'select':
                return (
                    <div key={field.id} className="mb-4">
                        <label className="block font-medium mb-1">{field.label}</label>
                        <select
                            {...register(`field_${field.id}`, { required: true })}
                            className={`w-full p-2 border rounded ${
                                errors[`field_${field.id}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                            <option value="">Select an option</option>
                            {field.options && field.options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                        {errors[`field_${field.id}`] && (
                            <p className="text-red-500 text-xs mt-1">This field is required</p>
                        )}
                    </div>
                );
            case 'checkbox':
                return (
                    <div key={field.id} className="mb-4">
                        <div className="flex items-center">
                            <input
                                {...register(`field_${field.id}`)}
                                type="checkbox"
                                id={`checkbox-${field.id}`}
                                className="h-4 w-4 text-blue-600 mr-2"
                            />
                            <label htmlFor={`checkbox-${field.id}`} className="font-medium">
                                {field.label}
                            </label>
                        </div>
                    </div>
                );
            case 'radio':
                return (
                    <div key={field.id} className="mb-4">
                        <p className="font-medium mb-2">{field.label}</p>
                        <div className="space-y-2">
                            {field.options && field.options.map((option, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        {...register(`field_${field.id}`, { required: true })}
                                        type="radio"
                                        id={`radio-${field.id}-${index}`}
                                        name={`field_${field.id}`}
                                        value={option}
                                        className="h-4 w-4 text-blue-600 mr-2"
                                    />
                                    <label htmlFor={`radio-${field.id}-${index}`}>
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors[`field_${field.id}`] && (
                            <p className="text-red-500 text-xs mt-1">This field is required</p>
                        )}
                    </div>
                );
            default:
                return <p key={field.id}>Unknown field type: {field.type}</p>;
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Generated Form</h1>
            {fields.length === 0 ? (
                <p className="text-gray-500">No form fields found. Please go back and create your form.</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className='flex '>
                    {fields.map(field => renderField(field))}

                    <button
                        type="submit"
                        className="mt-6 px-6 py-3  mx-auto bg-green-500 text-white font-medium rounded hover:bg-green-600 transition-colors"
                    >
                        Submit Form
                    </button>
                </form>
            )}
        </div>
    );
};

export default GeneratedForm;