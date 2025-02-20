import React from 'react';
import {GrDrag} from "react-icons/gr";

const FormField = ({ field, onEdit, onDelete }) => {
    return (
        <div className=" bg-[#081229] p-3 rounded shadow flex flex-row justify-between items-center border-2">
            <div className="flex items-center gap-2">
                <GrDrag className={`text-2xl`}/>
            <label className="block text-2xl text-gray-100">{field.label}</label>

            </div>
            {/*{field.type === 'text' && (*/}
            {/*    // <input*/}
            {/*    //     type="text"*/}
            {/*    //     placeholder={field.placeholder}*/}
            {/*    //     required={field.validation?.required}*/}
            {/*    //     min={field.validation?.min}*/}
            {/*    //     max={field.validation?.max}*/}
            {/*    //     maxLength={field.validation?.maxLength}*/}
            {/*    //     pattern={field.validation?.pattern}*/}
            {/*    //     className="w-full p-2 border rounded"*/}
            {/*    // />*/}
            {/*)}*/}

            {/*{field.type === 'textarea' && (*/}
            {/*    <textarea*/}
            {/*        placeholder={field.placeholder}*/}
            {/*        required={field.validation?.required}*/}
            {/*        className="w-full p-2 border rounded"*/}
            {/*    />*/}
            {/*)}*/}

            {/*{field.type === 'select' && (*/}
            {/*    <select required={field.validation?.required} className="w-full p-2 border rounded">*/}
            {/*        <option value="">Select an option</option>*/}
            {/*        {field.options?.map((option, index) => (*/}
            {/*            <option key={index} value={option}>{option}</option>*/}
            {/*        ))}*/}
            {/*    </select>*/}
            {/*)}*/}

            {/*{field.type === 'checkbox' && (*/}
            {/*    <input type="checkbox" className="w-5 h-5" required={field.validation?.required} />*/}
            {/*)}*/}

            {/*{field.type === 'radio' && field.options?.map((option, index) => (*/}
            {/*    <label key={index} className="block">*/}
            {/*        <input type="radio" name={field.label} value={option} required={field.validation?.required} /> {option}*/}
            {/*    </label>*/}
            {/*))}*/}

            {/* Edit & Delete Buttons */}
            <div className="mt-2 flex space-x-2">
                <button onClick={onEdit} className="px-3 py-1 bg-[#516391] text-white rounded hover:bg-blue-600">
                    Edit
                </button>
                <button onClick={onDelete} className="px-3 py-1 bg-[#516391] text-white rounded hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FormField;
