import { createContext, useRef, useContext, isValidElement, cloneElement } from "react";

interface DialogContextProps {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    toggleDialog: () => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

function useDialogContext() {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialogContext must be used within a DialogProvider");
    }
    return context;
}

export interface DialogProps {
    children: React.ReactNode;
}

export function Dialog ({children}: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (dialogRef.current === null) return
        if (dialogRef.current.hasAttribute('open')) dialogRef.current.close();
        else dialogRef.current.showModal();
    }

    return (
        <DialogContext.Provider value={{ dialogRef, toggleDialog }}>
            {children}
        </DialogContext.Provider>
    );
}

interface ElementWithOnClick {
    onClick?: (e: React.MouseEvent) => void;
}

interface DialogActionProps {
    children: React.ReactNode;
    asChild?: boolean;
}

function DialogAction({ children, asChild }: DialogActionProps) {
    const { toggleDialog } = useDialogContext();
    if(asChild && isValidElement(children)){
        const originalProps = children.props as ElementWithOnClick
        const originalOnClick = 'onClick' in originalProps ? originalProps.onClick : undefined;
        const newProps = {
            ...originalProps,
            onClick: (e: React.MouseEvent) => {
                if (originalOnClick) {
                    originalOnClick(e);
                }
                toggleDialog();
            }
        }
        return cloneElement(children, newProps);
    }

    return (
        <div onClick={toggleDialog} className="df:cursor-pointer">
            {children}
        </div>
    )
}

export { DialogAction as DialogTrigger, DialogAction as DialogClose };

export interface DialogContentProps {
    children: React.ReactNode;
}

export function DialogContent({ children }: DialogContentProps) {
    const { toggleDialog, dialogRef } = useDialogContext();
    return (
        <dialog ref={dialogRef} onClick={(e) => {
            if (e.currentTarget === e.target) {
                toggleDialog();
            }
        }} className="df:fixed df:my-auto df:mx-auto df:bg-transparent">
            {children}
        </dialog>
        
    )
}