import Link from 'next/link';
/**This is a sample component. Replace JSX code with your own header code */
export default function Header() {
    return (
        <div className="fixed top-0 w-full bg-white shadow-md">
            <div className="px-6 py-3 border">
                <div className="flex justify-between">
                    <Link href='/'>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                            <span className="ml-2 font-semibold text-[#252C32]">What a Market</span>
                        </div>
                    </Link>

                    <div className="flex flex-1 ml-6 gap-x-3">
                        <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <span className="text-sm font-medium">Categories</span>
                        </div>

                        <input type="text" className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" />
                    </div>

                    <div className="flex ml-2">
                        <div className="flex items-center px-4 py-2 rounded-md cursor-pointer gap-x-1 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">Orders</span>
                        </div>

                        <div className="flex items-center px-4 py-2 rounded-md cursor-pointer gap-x-1 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">Favorites</span>
                        </div>

                        <div className="flex items-center px-4 py-2 rounded-md cursor-pointer gap-x-1 hover:bg-gray-100">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <span className="absolute flex items-center justify-center w-4 h-4 p-2 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">3</span>
                        </div>
                        <span className="text-sm font-medium">Cart</span>
                        </div>

                        <div className="flex items-center px-4 py-2 ml-2 border rounded-md cursor-pointer gap-x-1 hover:bg-gray-100">
                        <span className="text-sm font-medium">Sign in</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex px-2 py-1 gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">California</span>
                    </div>

                    <div className="flex gap-x-8">
                        <Link href='/best-sellers' className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Best seller</Link>
                        <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">New Releases</span>
                        <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Books</span>
                        <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Computers</span>
                        <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Fashion</span>
                        <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Health</span>
                        <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Pharmacy</span>
                        <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Toys & Games</span>
                    </div>

                    <span className="px-2 py-1 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100">Becoma a seller</span>
                </div>
            </div>
        </div>
    )
}