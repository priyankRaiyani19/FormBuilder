import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputCreator from '../component/InputCreator';
import Layout from '../component/Layout';

const HomePage = () => {
    const [fields, setFields] = useState([]);
    const [editingField, setEditingField] = useState(null);
    const navigate = useNavigate();

    const handleAddField = (newField) => {
        if (editingField) {
            setFields(fields.map(field => field.id === editingField.id ? newField : field));
            setEditingField(null);
        } else {
            setFields([...fields, { ...newField, id: Date.now() }]);
        }
    };

    const handleEditField = (field) => {
        setEditingField(field);
    };




    const handleDeleteField = (fieldId) => {
        setFields(fields.filter(field => field.id !== fieldId));
    };

    const handleGenerateForm = () => {
        navigate('/generated-form', { state: { fields } });
    };

    return (
        <div className="mx-auto p-4 w-full min-h-screen bg-[#001F3F] text-gray-100 gap-8 flex flex-col">
            <h1 className="lg:text-[3.438rem] text-5xl font-bold mb-4 text-center text-[#DBD8E3]">Form Builder</h1>

            {/* Input Creator */}
            <div className="w-full bg-[#001F3F] p-5 border-2 text-white rounded-lg">
                <InputCreator onAddField={handleAddField} editingField={editingField} setEditingField={setEditingField} />
            </div>

            {/* Layout */}
            <div className=" w-full bg-[#001F3F] p-5 border-2 text-white rounded-lg">
                <Layout
                    fields={fields}
                    onEditField={handleEditField}
                    onDeleteField={handleDeleteField}

                />
                {/* Generate Form Button */}
                {fields.length > 0 && (
                    <div className="flex justify-center mt-4">
                        <button onClick={handleGenerateForm} className="px-6 py-3 text-xl font-bold bg-[#9290C3] text-white rounded">
                            Generate Form
                        </button>
                    </div>
                )}
            </div>


        </div>
    );
};

export default HomePage;