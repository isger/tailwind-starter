import React from 'react';
import _config from "../config/_config";
import {ThemeToggle} from "./ThemeToggle";

const Navigation = () => {
    return (
        <nav className="py-4 px-8 md:max-w-screen-xl border-b-2 border-gray-200 bg-white font-semibold flex flex-row">

            <a className="mx-auto md:mx-0">
                <h1 className='text-3xl'>{_config.site.name}</h1>
                <h2 className='text-md text-gray-800'>{_config.site.subtitle}</h2>
            </a>

            <ThemeToggle />

        </nav>
    )
}

export default Navigation;