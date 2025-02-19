// File: src/components/InputCreator.jsx
import React, { useState } from 'react';

const InputCreator = ({ onAddField }) => {
    const [field, setField] = useState({
        type: 'text',
        label: '',
        placeholder: '',
        validation: {
            required: false,
            max: '',
            min: '',
            maxLength: '',
            pattern: '',
        },
    });
    const [showValidation, setShowValidation] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setField({ ...field, validation: { ...field.validation, [name]: checked } });
        } else {
            setField({ ...field, [name]: value });
        }
    };

    const handleValidationChange = (e) => {
        const { name, value, type, checked } = e.target;
        setField({
            ...field,
            validation: { ...field.validation, [name]: type === 'checkbox' ? checked : value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddField({ ...field, id: Date.now() });
        setField({
            type: 'text',
            label: '',
            placeholder: '',
            validation: {
                required: false,
                max: '',
                min: '',
                maxLength: '',
                pattern: '',
            },
        });
        setShowValidation(false);
    };

    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Create New Field</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Field Type:</label>
                    <select name="type" value={field.type} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="text">Text</option>
                        <option value="textarea">Textarea</option>
                        <option value="number">Number</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Label:</label>
                    <input type="text" name="label" value={field.label} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block font-medium">Placeholder:</label>
                    <input type="text" name="placeholder" value={field.placeholder} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <input type="checkbox" onChange={() => setShowValidation(!showValidation)} /> Enable Validation
                </div>
                {showValidation && (
                    <div className="p-3 border rounded bg-gray-100">
                        <label>
                            <input type="checkbox" name="required" checked={field.validation.required} onChange={handleValidationChange} /> Required
                        </label>
                        <div>
                            <label>Min:</label>
                            <input type="number" name="min" value={field.validation.min} onChange={handleValidationChange} className="w-full p-1 border rounded" />
                        </div>
                        <div>
                            <label>Max:</label>
                            <input type="number" name="max" value={field.validation.max} onChange={handleValidationChange} className="w-full p-1 border rounded" />
                        </div>
                        <div>
                            <label>Max Length:</label>
                            <input type="number" name="maxLength" value={field.validation.maxLength} onChange={handleValidationChange} className="w-full p-1 border rounded" />
                        </div>
                        <div>
                            <label>Pattern:</label>
                            <input type="text" name="pattern" value={field.validation.pattern} onChange={handleValidationChange} className="w-full p-1 border rounded" />
                        </div>
                    </div>
                )}
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Field</button>
            </form>
        </div>
    );
};

export default InputCreator;
