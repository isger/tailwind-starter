import React from "react";
import Navigation from "./components/Navigation";
import PlatformSelection from "./components/PlayerSearch/PlatformSelection";
import Menu from "./components/Menu";

class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <div className='max-h-screen max-w-screen-xl bg-gray-100 h-screen'>
               <Navigation />
               <main className='flex flex-col'>

                   <Menu />

                   <div className='m-2 p-6 bg-white shadow-md rounded-md'>
                       <h1 className='text-xl px-1 pb-2 font-semibold'>Player history</h1>
                       <div className='border border-gray-200 rounded-md'>
                           <input className='p-4 my-1 w-full text-lg placeholder-gray-500 focus:outline-none' placeholder='LoganPaul123'/>
                       </div>
                       <PlatformSelection />
                       <button className='w-full my-1 bg-gray-800 text-white rounded-md p-4 text-xl'>Search</button>
                   </div>
               </main>
            </div>
        );
    }
}

export default App;