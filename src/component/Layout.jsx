import React from 'react';
import FormField from './FormField';
import {useNavigate} from 'react-router';


const Layout = ({fields, onUpdateField, onDeleteField}) => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col   bg-[#081229]  p-5 text-white rounded-lg ">
            <div className={`flex text-white items-center justify-center gap-4 `}>
                <hr className={`text-gray-500 w-full `}/>
                <h2 className="text-3xl font-bold min-w-fit  ">Form Preview</h2>
                <hr className={`text-gray-500 w-full `}/>
            </div>

            {/* Form Preview */}
            <div className=" flex items-center py-10 p-4 rounded-md ">


                {fields.length === 0 ? (
                    <p className="text-gray-100 felx items-center justify-center mx-auto text-3xl text-center py-10">No
                        fields added</p>
                ) : (


                    <form className="w-full flex flex-col gap-5">

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
                className="mt-5 px-4 w-full  flex mx-auto items-center justify-center py-5 bg-[#081229] border-2 border-[#ec5990] text-white rounded font-bold hover:bg-[#083299] transition-colors text-xl"
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
