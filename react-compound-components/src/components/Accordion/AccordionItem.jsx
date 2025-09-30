import { createContext, useContext } from "react"

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error('AccodionItem-related components must be wrapped by <Accordion.item>.')
    }

    return ctx;
}

export default function AccordionItem({ id, className, children }) {

    return (
        <>
            <AccordionItemContext.Provider value={id}>
                <li className={className}>
                    |{children}
                </li>
            </AccordionItemContext.Provider>
        </>
    )
}