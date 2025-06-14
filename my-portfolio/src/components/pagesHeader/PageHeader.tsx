import { headerStyle } from "./pagesHeaderStyle"
import { pageHeaders } from "@/app/portfolio-content/pageheader-content"

type PageType = keyof typeof pageHeaders;

interface PageHeaderProps {
    page: PageType;
}

export default function PageHeader({ page }: PageHeaderProps) {

    const { title, description } = pageHeaders[page]
    return (
        <div className={headerStyle.serviceheader}>
            <h1 className={headerStyle.head1}>{title}</h1>
            <p className={headerStyle.serviceTitle}>
                {description}
            </p>
        </div>
    )
}