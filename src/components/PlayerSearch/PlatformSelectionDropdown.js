import React from 'react';

const PlatformSelectionDropdown = (props) => {

    if(!props.showDropdown) {
        return null;
    }

    if(props.showDropdown) {
        return (
        <div
            className="shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
            <div className="flex flex-col w-full">
                <div className="cursor-pointer w-full border-gray-100 rounded-t border-b
            hover:bg-teal-100">
                    <div
                        className="flex w-full items-center p-6 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
                        <div className="w-full items-center flex">
                            <div className="mx-2 leading-6 text-xl">Battle.net</div>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer w-full border-gray-100 border-b
            hover:bg-teal-100">
                    <div
                        className="flex w-full items-center p-6 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 border-teal-600">
                        <div className="w-full items-center flex">
                            <div className="mx-2 leading-6 text-xl">Activision</div>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer w-full border-gray-100 rounded-b
            hover:bg-teal-100">
                    <div
                        className="flex w-full items-center p-6 pl-2 border-transparent bg-white border-l-2 relative  hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
                        <div className="w-full items-center flex">
                            <div className="mx-2 leading-6 text-xl">Playstation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default PlatformSelectionDropdown;