// File: src/pages/Home.jsx
import React, { useState } from 'react';
import InputCreator from '../component/InputCreator';
import Layout from '../component/Layout';

const HomePage = () => {
    const [fields, setFields] = useState([]);

    // Add new field
    const handleAddField = (newField) => {
        setFields([...fields, { ...newField, id: Date.now() }]);
    };

    // Update existing field
    const handleUpdateField = (updatedField) => {
        setFields(fields.map(field => field.id === updatedField.id ? updatedField : field));
    };

    // Delete a field
    const handleDeleteField = (fieldId) => {
        setFields(fields.filter(field => field.id !== fieldId));
    };

    return (
        <div className=" mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Form Builder</h1>
            <div className="flex  gap-6">
                {/* Input Creator  */}
               <div>
                   <InputCreator onAddField={handleAddField} />
               </div>
                {/* LayOut */}
               <div>
                   <Layout
                       fields={fields}
                       onUpdateField={handleUpdateField}
                       onDeleteField={handleDeleteField}
                   />
               </div>
            </div>
        </div>
    );
};

export default HomePage;
