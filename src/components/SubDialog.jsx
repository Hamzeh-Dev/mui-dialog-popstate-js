
import React from "react";
import Dialog from "@mui/material/Dialog";

import { useDialog } from "../context/Dialogs";

const SubDialog = () => {
    const { openDialogs, closeSpecificDialog } = useDialog();

    return (
        <Dialog 
            open={openDialogs.includes("subDialog")} 
            onClose={() => closeSpecificDialog("subDialog")}
            fullScreen
        >
        <div className="w-full h-full flex flex-col justify-center items-center gap-5 text-center">
            <h2>Sub Dialog</h2>
            <p className="w-4/5">Try popstate the Sub Dialog from mobile browser</p>
            <button className="btn btn-error btn-wide text-white"  onClick={() => closeSpecificDialog("subDialog")}>Close Sub Dialog</button>
        </div>
        </Dialog>
    );
};

export default SubDialog;
