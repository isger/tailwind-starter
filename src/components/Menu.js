import React from 'react';
import classNames from 'classnames';

const menuItems = ['Player History', 'Recent Matches', 'Lobby Search'];
const tab = 'Player History';

const Menu = () => {
    return (
        <div className='flex flex-row justify-between bg-white mt-2 mx-2 rounded-md shadow overflow-hidden'>
            <ul className="inline-flex items-center text-mdg mx-auto">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={classNames({
                            'mx-2 px-6 py-3 cursor-pointer': true,
                            'border-b-4 border-opposite': tab === item
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