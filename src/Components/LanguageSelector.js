import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import Cookies from "js-cookie";

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        Cookies.set("language", newLanguage, { expires: 365 });
    };

    return (
        <select
            className="me-sm-3"
            value={language}
            onChange={handleLanguageChange}
        >
            <option value="uk">Українська</option>
            <option value="en">English</option>
        </select>
    );
};

export default LanguageSelector;