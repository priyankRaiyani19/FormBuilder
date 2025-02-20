import React, {useState} from 'react';
import {options} from "../data/options";

const InputCreator = ({onAddField}) => {
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
        const {name, value, type, checked} = e.target;
        if (type === 'checkbox') {
            setField({...field, validation: {...field.validation, [name]: checked}});
        } else {
            setField({...field, [name]: value});
        }
    };

    const handleValidationChange = (e) => {
        const {name, value, type, checked} = e.target;
        setField({
            ...field,
            validation: {...field.validation, [name]: type === 'checkbox' ? checked : value},
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddField({...field, id: Date.now()});
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
        <div className="w-full  bg-[#081229]  p-5 text-white rounded-lg">
            <div className={`flex text-white items-center justify-center gap-4`}>
                <hr className={`text-gray-500 w-full `}/>
                <h2 className="lg:text-3xl text-xl font-bold min-w-fit ">Layout</h2>
                <hr className={`text-gray-500 w-full `}/>
            </div>
            <div className="p-4  text-white rounded-lg">

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className={` scroll-auto  flex flex-col gap-[1rem]`}>
                        <label className="block font-medium text-xl">Field Type:</label>
                        <select name="type" value={field.type} onChange={handleChange}
                                className="w-full p-3 border rounded text-black text-2xl font-semibold ">

                            {options.map(ele => (
                                <option key={ele.id} value={ele.value}>{ele.text}</option>
                            ))
                            }
                        </select>
                    </div>

                    <div className={`text-white flex flex-col gap-[1rem]`}>
                        <label className="block font-medium text-xl">Name:</label>
                        <input type="text" name="label" required={true} placeholder={"Enter name of field"}
                               value={field.label} onChange={handleChange}
                               className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                    </div>

                    <div className={`text-white flex flex-col gap-[1rem]`}>
                        <label className="block font-medium text-xl">Placeholder:</label>
                        <input type="text" name="placeholder" required={true} value={field.placeholder}
                               onChange={handleChange} placeholder={"Enter placeholder"}
                               className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                    </div>
                    <div className={`text-white flex items-center gap-[1rem] text-[1.5rem]`}>
                        <input type="checkbox" id={"showvalid"} defaultChecked={false}
                               className={`w-[2rem] h-[2rem] checked:text-green-600 `}
                               onChange={() => setShowValidation(!showValidation)}/>
                        <label htmlFor="showvalid">Show Validation</label>
                    </div>
                    {showValidation && (
                        <div className="p-3 border rounded bg-gray-800 font-bold text-gray-100 flex flex-col ">
                            <label className="font-medium text-xl flex items-center gap-[1rem] py-3">
                                <input type="checkbox" name="required" checked={field.validation.required}
                                       onChange={handleValidationChange}
                                       className={`text-gray-800 w-[1rem] h-[1rem]`}/> Required
                            </label>
                            <div className="flex flex-col gap-[1rem]">
                                <label className="block font-medium text-xl">Min:</label>
                                <input type="number" name="min" value={field.validation.min}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                            </div>
                            <div>
                                <label className="block font-medium text-xl">Max:</label>
                                <input type="number" name="max" value={field.validation.max}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                            </div>
                            <div>
                                <label className="block font-medium text-xl">Max Length:</label>
                                <input type="number" name="maxLength" value={field.validation.maxLength}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                            </div>
                            <div>
                                <label className="block font-medium text-xl">Pattern:</label>
                                <input type="text" name="pattern" value={field.validation.pattern}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-xl font-semibold"/>
                            </div>
                        </div>
                    )}
                    <button type="submit"
                            className="px-4 py-5 text-xl font-bold  w-full bg-[#ec5990] text-white rounded">Add Field
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputCreator;
