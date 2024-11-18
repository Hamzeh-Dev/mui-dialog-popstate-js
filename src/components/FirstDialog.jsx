
import React from "react";
import Dialog from "@mui/material/Dialog";

import { useDialog } from "../context/Dialogs";

const FirstDialog = () => {
  const { openDialogs, openDialog, closeSpecificDialog } = useDialog();

  return (
    <div>
      <button className="btn btn-info btn-wide text-white" onClick={() => openDialog("firstDialog")}>Open Main Dialog</button>
      <Dialog 
        open={openDialogs.includes("firstDialog")} 
        onClose={() => closeSpecificDialog("firstDialog")}
        fullScreen
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-5 text-center">
          <h2>First Dialog</h2>
          <p className="w-4/5">Try popstate the Dialog from mobile browser</p>
          <button className="btn btn-info btn-wide text-white"  onClick={() => openDialog("subDialog")}>
            Open Sub Dialog
          </button>
          <button className="btn btn-error btn-wide text-white" onClick={() => closeSpecificDialog("firstDialog")}>Close</button>
        </div>
      </Dialog>
    </div>
  );
};

export default FirstDialog;
