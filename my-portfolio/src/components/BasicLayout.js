

export default function BasicLayout({ children }) {
    return (
        <div className="md:min-h-screen flex flex-col lg:flex-row w-full max-w-full px-2 py-2  sm:px-2 2xl:px-[12%] bg-gray-50 sm:min-h-0">
            <div className="flex-1 flex items-center justify-center bg-white">
                    {children}
            </div>
        </div>
    );
}
