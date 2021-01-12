import React from 'react';
import classNames from "classnames";

const platforms = [{display: 'Xbox', value: 'xbl'}, {display: 'Playstation', value: 'psn'}, {display: 'Battle.net', value: 'battle'}, {display: 'Activision', value: 'acti'}];

const PlatformSelectionDropdown = (props) => {

    if(!props.showDropdown) {
        return null;
    }

    if(props.showDropdown) {
        return (
        <div
            className="shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
            <ul className="flex flex-col w-full">

                {platforms.map((platform, index) => (
                    <li
                        key={index}
                        className={classNames({
                            'cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100': true
                        })}>

                        <div
                            className="flex w-full items-center p-6 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6 text-xl">{platform.display}</div>
                            </div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
    }
}

export default PlatformSelectionDropdown;