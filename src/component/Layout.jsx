// File: src/components/Layout.jsx
import React from 'react';
import FormField from './FormField';
import { useNavigate } from 'react-router';

const Layout = ({ fields, onUpdateField, onDeleteField }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full p-4">
            <h2 className="text-xl font-bold mb-4">Form Preview</h2>

            {/* Form Preview */}
            <div className="min-h-[400px] border-2 border-dashed p-5 rounded-md bg-white border-gray-200">
                {fields.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">No fields added</p>
                ) : (
                    <form className="space-y-4">
                        {fields.map((field) => (
                            <FormField
                                key={field.id}
                                field={field}
                                onEdit={() => onUpdateField(field)}
                                onDelete={() => onDeleteField(field.id)}
                            />
                        ))}
                    </form>
                )}
            </div>

            {/* Generate Form Button */}
            <button
                className="mt-5 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                onClick={() => {
                    localStorage.setItem('formFields', JSON.stringify(fields));
                    navigate('/generated-form');
                }}
            >
                Generate Form
            </button>
        </div>
    );
};

export default Layout;
