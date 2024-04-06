import React, { useState, forwardRef } from "react";
// import "@/components/Input/Input.css";
import eyeOff from '@/images/eye-off.svg'
import eyeOn from '@/images/eye-on.svg'
import Image from "next/image";

interface InputProps {
    type: "text" | "password";
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, placeholder, onChange, onBlur, value, name, error }, ref) => {
        const [inputType, setInputType] = useState<string>(type);
        const inputContainerClassName = `input-container ${
            error ? "error" : ""
        }`;

        const toggleVisibility = () => {
            setInputType((prevType) =>
                prevType === "password" ? "text" : "password"
            );
        };

        return (
            <div className="input-wrapper">
                <div className={inputContainerClassName}>
                    <input
                        ref={ref}
                        type={inputType}
                        name={name}
                        placeholder={placeholder}
                        value={value || ""}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="input-field"
                    />

                    {type === "password" && (
                        <div
                            onClick={toggleVisibility}
                            className="password-toggle"
                        >
                            <Image
                                src={
                                    inputType === "password"
                                        ? eyeOff
                                        : eyeOn
                                }
                                alt="Toggle Password Visibility"
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

export default Input;