import React, { useEffect } from 'react';
import { useForm } from './useForm';
const MyHook = () => {
    const [values, handleChange] = useForm({ email: "", password: "" });
    useEffect(() => {
        console.log("empty array render on load");
    }, []);
    useEffect(() => {
        console.log(" when password change render");
    }, [values.password]);
    return (
        <div>
            <h1>hellos from hooks</h1>
            <input name="email" value={values.email} onChange={handleChange}>

            </input>
            <input type="password"
                name="password"
                value={values.password}
                onChange={handleChange}>
            </input>
        </div >
    );
};
export default MyHook;