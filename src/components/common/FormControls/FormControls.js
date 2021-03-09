import React from "react";
import styles from "./FormControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input,meta,el, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError? styles.error: "")}>
            <div>
                {React.createElement(el, {...input, ...props})}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl el={"textarea"} {...props}/>
}
export const Input = (props) => {
    return <FormControl el={"input"} {...props}/>
}
export const createField =(placeholder,name,validators,component, props={}, text="") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}/> {text}
    </div>
)