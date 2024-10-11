import Skeleton from "../Skeleton";

function PhoneMockup() {
    return (
        <div className="flex justify-center h-full items-center">
            <div className="w-[300px] relative">
                <img src={'/phone-mockup.png'} alt="Phone mockup" className="w-full" />

                <div className="absolute top-20 flex flex-col items-center justify-center w-full gap-4">
                    <Skeleton type="rounded" />
                    <Skeleton type="title" className="w-36" />
                    <Skeleton type="subtitle" className="w-24" />

                    <div className="overflow-y-auto h-[290px] space-y-4 mt-4" >
                        <Skeleton type="button" className="w-52" />
                        <Skeleton type="button" className="w-52" />
                        <Skeleton type="button" className="w-52" />
                        <Skeleton type="button" className="w-52" />
                        <Skeleton type="button" className="w-52" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneMockup;


