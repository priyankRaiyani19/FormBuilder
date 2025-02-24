import React from 'react';
import { GrDrag } from "react-icons/gr";

const FormField = ({ field, onEdit, onDelete }) => {
    return (
        <div className="bg-[#081229] p-3 rounded shadow flex flex-row justify-between items-center border-2 hover:cursor-move">
            <div className="flex items-center gap-2">
                <GrDrag className="text-2xl cursor-move" />
                <label className="block text-2xl text-gray-100">{field.label}</label>
            </div>

            <div className="mt-2 flex space-x-2">
                <button onClick={() => onEdit(field)} className="px-3 py-1 bg-[#516391] text-white rounded hover:bg-blue-600">
                    Edit
                </button>
                <button onClick={onDelete} className="px-3 py-1 bg-[#516391] text-white rounded hover:bg-red-700">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FormField;
