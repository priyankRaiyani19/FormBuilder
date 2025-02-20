import React from "react";

const renderField = (field, register, errors) => {
    switch (field.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'tel':
        case 'url':
        case 'search':
        case 'number':
        case 'time':
        case 'date':
        case 'datetime-local':
        case 'week':
        case 'month':
        case 'range':
            return (
                <div key={field.id} className="mb-4">
                    <label className="block font-semibold text-2xl mb-2">{field.label}</label>
                    <input
                        {...register(`field_${field.id}`, { required: true })}
                        type={field.type}
                        placeholder={field.placeholder}
                        className={`w-full p-2 border rounded ${errors[`field_${field.id}`] ? 'border-red-500 ' : 'border-gray-800 '} text-gray-800 bg-gray-300 text-xl font-semibold`}
                    />
                    {errors[`field_${field.id}`] && (
                        <p className="text-red-500 text-lg mt-1">This field is required</p>
                    )}
                </div>
            );
        case 'textarea':
            return (
                <div key={field.id} className="mb-4">
                    <label className="block font-semibold text-2xl  mb-1">{field.label}</label>
                    <textarea
                        {...register(`field_${field.id}`, { required: true })}
                        placeholder={field.placeholder}
                        rows="4"
                        className={`w-full p-2 border rounded ${errors[`field_${field.id}`] ? 'border-red-500' : 'border-gray-300'} text-gray-800 bg-gray-300 text-xl font-semibold`}
                    />
                    {errors[`field_${field.id}`] && (
                        <p className="text-red-500 text-lg mt-1">This field is required</p>
                    )}
                </div>
            );
        case 'select':
            return (
                <div key={field.id} className="mb-4">
                    <label className="block font-semibold text-2xl mb-1">{field.label}</label>
                    <select
                        {...register(`field_${field.id}`, { required: true })}
                        className={`w-full p-2 border rounded ${errors[`field_${field.id}`] ? 'border-red-500' : 'border-gray-300'} text-gray-800 bg-gray-300 text-xl font-semibold`}
                    >
                        <option value="">Select an option</option>
                        {field.options && field.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                    {errors[`field_${field.id}`] && (
                        <p className="text-red-500 text-lg mt-1">This field is required</p>
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
                            className="h-4 w-4  mr-2 text-gray-800 bg-gray-300 text-xl font-semibold"
                        />
                        <label className="font-medium">{field.label}</label>
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
                                    name={`field_${field.id}`}
                                    value={option}
                                    className="h-4 w-4 mr-2 text-gray-800 bg-gray-300 text-xl font-semibold"
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                    {errors[`field_${field.id}`] && (
                        <p className="text-red-400  mt-1 text-lg">This field is required</p>
                    )}
                </div>
            );
        default:
            return <p key={field.id} className="text-red-500">Unknown field type: {field.type}</p>;
    }
};
export default renderField;