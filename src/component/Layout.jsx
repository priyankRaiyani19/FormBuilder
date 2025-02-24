import React from "react";
import FormField from "./FormField";

const Layout = ({ fields, onEditField, onDeleteField }) => {
    return (
        <div className="">
            <h2 className="text-3xl font-bold w-full text-center  text-[#DBD8E3]">Form Preview</h2>
            <div className="space-y-4 mt-4">
                {fields.map((field) => (
                    <FormField
                        key={field.id}
                        field={field}
                        onEdit={() => onEditField(field)}
                        onDelete={() => onDeleteField(field.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Layout;
