import React from 'react';
import classNames from 'classnames';

const menuItems = ['History', 'Recent', 'Tables'];
const tab = 'History';

const Menu = () => {
    return (
        <div className='flex flex-row justify-between bg-white shadow overflow-hidden py-3'>
            <ul className="inline-flex items-center text-lg mx-auto">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={classNames({
                            'mx-2 px-6 py-3 cursor-pointer': true,
                            'border-b-4 border-gray-800': tab === item
                        })}>
                        <button>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;