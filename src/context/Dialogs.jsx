import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

const DialogContext = createContext(undefined);

export const DialogProvider = ({ children }) => {
    const [openDialogs, setOpenDialogs] = useState([]);

    const openDialog = (dialogKey) => {
        setOpenDialogs((prev) => [...prev, dialogKey]);
        window.history.pushState({ dialogKey }, "");
    };

    // * This to Close all open Dialogs
    const closeDialog = () => {
        setOpenDialogs((prev) => {
            if (prev.length > 0) {
                const newDialogs = [...prev];
                newDialogs.pop();
                return newDialogs;
            }
            return prev;
        });
        window.history.back();
    };

    const closeSpecificDialog = (dialogKey) => {
        setOpenDialogs((prev) => prev.filter((key) => key !== dialogKey));
    };

    useEffect(() => {
        const handlePopState = () => {
            setOpenDialogs((prev) => {
                if (prev.length > 0) {
                    const newDialogs = [...prev];
                    newDialogs.pop();
                    return newDialogs;
                }
                return prev;
            });
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    return (
        <DialogContext.Provider value={{ openDialogs, openDialog, closeDialog, closeSpecificDialog }}>
            {children}
        </DialogContext.Provider>
    );
};

export const useDialog = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialog must be used within a DialogProvider");
    }
    return context;
};
