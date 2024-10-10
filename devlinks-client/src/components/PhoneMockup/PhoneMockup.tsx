import Skeleton from "../Skeleton";

function PhoneMockup() {
    return (
        <div className="flex justify-center mt-10">
            <div className="w-[300px] h-auto relative">
                <img src={'/phone-mockup.png'} alt="Phone mockup" className="w-full h-full" />

                <div className="absolute top-20 flex flex-col items-center justify-center w-full ">

                    <Skeleton type="rounded" className="mb-4" />
                    <Skeleton type="title" className="w-36 mb-4" />
                    <Skeleton type="subtitle" className="w-24 mb-4" />

                    <br />

                    <div className="overflow-y-auto h-[270px]" >
                        <Skeleton type="button" className="w-52 mb-4" />
                        <Skeleton type="button" className="w-52 mb-4" />
                        <Skeleton type="button" className="w-52 mb-4" />
                        <Skeleton type="button" className="w-52 mb-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneMockup;


