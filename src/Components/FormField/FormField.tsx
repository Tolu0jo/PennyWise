import React, { InputHTMLAttributes } from 'react';
import { FieldWrapper, Label, FormInput } from './FormField.styled';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    
}

const FormField: React.FC<FormFieldProps> = ({ label, ...props }) => {
    return (
    <FieldWrapper>
        <Label>
            {label}
        </Label>
        <FormInput { ...props } />
    </FieldWrapper>
    );
};

export default FormField;