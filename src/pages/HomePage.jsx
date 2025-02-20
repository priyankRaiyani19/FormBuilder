import React, {useState} from 'react';
import InputCreator from '../component/InputCreator';
import Layout from '../component/Layout';

const HomePage = () => {
    const [fields, setFields] = useState([]);

    // Add new field
    const handleAddField = (newField) => {
        setFields([...fields, {...newField, id: Date.now()}]);
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
        <div className=" mx-auto p-4 w-full min-h-screen bg-[#081229] text-gray-00">
            <h1 className="lg:text-[3.438rem] text-5xl font-bold mb-4 text-center text-white">Form Builder</h1>
            <div className="flex  gap-[2rem] lg:flex-row flex-col">
                {/* Input Creator  */}
                <div className={`w-full`} >
                    <InputCreator onAddField={handleAddField}/>
                </div>
                {/* LayOut */}
                <div className={`w-full`}>
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
