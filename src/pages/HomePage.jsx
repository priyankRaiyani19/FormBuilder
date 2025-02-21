import React, {useState} from 'react';
import InputCreator from '../component/InputCreator';
import Layout from '../component/Layout';

const HomePage = () => {
    const [fields, setFields] = useState([]);


    const handleAddField = (newField) => {
        setFields([...fields, {...newField, id: Date.now()}]);
    };


    const handleUpdateField = (updatedField) => {
        setFields(fields.map(field => field.id === updatedField.id ? updatedField : field));
    };


    const handleDeleteField = (fieldId) => {
        setFields(fields.filter(field => field.id !== fieldId));
    };

    return (
        <div className=" mx-auto p-4 w-full min-h-screen bg-[#001F3F]  text-gray-00">
            <h1 className="lg:text-[3.438rem] text-5xl font-bold mb-4 text-center text-[#DBD8E3] ">Form Builder</h1>

                {/* Input Creator  */}
                <div className={`w-full p-5`} >
                    <InputCreator onAddField={handleAddField}/>
                </div>
                {/* LayOut */}
                <div className={`w-full p-5`}>
                    <Layout
                        fields={fields}
                        onUpdateField={handleUpdateField}
                        onDeleteField={handleDeleteField}
                    />
                </div>

        </div>
    );
};

export default HomePage;
