
import React from 'react';

import FirstDialog from "./FirstDialog";
import SubDialog from "./SubDialog";

const Main = () => {
    return (
        <div className='w-full h-lvh flex flex-col justify-center items-center gap-10 overflow-hidden'>
            <p>Try open the Dialogs</p>

            <FirstDialog />
            <SubDialog />
        </div>
    )
}

export default Main;