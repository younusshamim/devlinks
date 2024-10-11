import { PuffLoader } from "react-spinners";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="flex flex-col items-center justify-center space-y-4">
                <PuffLoader color="#4B5563" size={60} speedMultiplier={1.5} />
                <p className="text-gray-700 text-lg font-semibold">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default PageLoader;
