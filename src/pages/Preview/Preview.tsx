import PreviewCard from "./PreviewCard";
import PreviewHeader from "./PreviewHeader";

const Preview = () => {
    return (
        <div className="bg-white sm:bg-transparent min-h-screen h-full sm:p-4 mb-10 relative">
            <div className="h-[calc(100vh-50vh)] sm:bg-primary rounded-b-2xl absolute top-0 left-0 w-full"></div>

            <div className="relative z-10">
                <PreviewHeader />
                <PreviewCard />
            </div>
        </div>
    );
};

export default Preview;