import { useProfile } from "@/context/ProfileContext";
import PlatformsData from "@/data/platforms.data";
import LinkPreviewButton from "../LinkPreviewButton";
import Skeleton from "../Skeleton";

function PhoneMockup() {
    const { profileDetails, customizeLinks, loading } = useProfile();

    return (
        <div className="flex justify-center h-full">
            <div className="w-[300px] relative mt-10">
                <img src={'/phone-mockup.png'} alt="Phone mockup" className="w-full" />

                <div className="absolute top-20 flex flex-col items-center justify-center w-full gap-4">
                    {loading || !profileDetails.picture ? (
                        <Skeleton type="rounded" />
                    ) : (
                        <img
                            src={profileDetails.picture}
                            alt="Profile"
                            className="rounded-full h-[90px] w-[90px] object-cover"
                        />
                    )}

                    {loading || !profileDetails.firstName || !profileDetails.lastName ? (
                        <Skeleton type="title" className="w-36" />
                    ) : (
                        <h1 className="text-2xl font-bold">
                            {profileDetails.firstName} {profileDetails.lastName}
                        </h1>
                    )}

                    {loading || !profileDetails.email ? (
                        <Skeleton type="subtitle" className="w-24" />
                    ) : (
                        <p className="text-sm text-gray-500">{profileDetails.email}</p>
                    )}

                    <div className="overflow-y-auto h-[290px] space-y-4 mt-4">
                        {customizeLinks.map((platform, index) => {
                            const platformData = PlatformsData.find(
                                p => p.name.toLowerCase() === platform.name.toLowerCase()
                            );
                            return platformData ? (
                                <LinkPreviewButton
                                    key={platform.name}
                                    platform={platformData}
                                    link={platform.link}
                                    className="my-4 w-52"
                                />
                            ) : (
                                <Skeleton key={`skeleton-${index}`} type="button" className="w-52" />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneMockup;