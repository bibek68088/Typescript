import { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
}

/** old ways fucntional components */
export const Section = ({children, title = "My Sub headings"}: 
SectionProps) => {
return(
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
)
}
