import LinkPreviewButton from "@/components/LinkPreviewButton";
import PageLoader from "@/components/PageLoader";
import Section from "@/components/Section";
import Skeleton from "@/components/Skeleton";
import PlatformsData from "@/data/platforms.data";
import { useGetUser } from "@/hooks/user-hooks";
import { FaRegUser } from "react-icons/fa";
import { useParams } from "react-router-dom";

const PreviewCard = () => {
    const params = useParams();
    const userId = params?.id;

    const { isLoading: fetching, data, error } = useGetUser(userId);
    const userDetails = data?.data;

    if (fetching) return <PageLoader />
    if (error) return <p>Error has occured</p>;

    return (
        <div className="flex justify-center sm:mt-20">
            <Section className="p-10 rounded-xl sm:shadow-2xl min-h-80 h-auto w-full sm:w-80 flex flex-col items-center space-y-3">
                <div className="w-[100px] h-[100px] border-4 border-primary rounded-full flex justify-center items-center">
                    {userDetails?.picture ? <img
                        src={userDetails?.picture}
                        alt="Profile"
                        className="rounded-full h-[90px] w-[90px] object-cover"
                    /> : <FaRegUser className="w-full h-full p-6 text-primary/50" />}
                </div>

                <h1 className="text-2xl font-bold ">{userDetails?.firstName} {userDetails?.lastName}</h1>
                <p className="text-sm text-gray-500">{userDetails?.email}</p>

                <div className="space-y-3 pt-5 w-full">
                    {userDetails?.platforms?.map((platform, index) => {
                        const platformData = PlatformsData.find(
                            p => p.name.toLowerCase() === platform.name.toLowerCase()
                        );
                        return platformData ? (
                            <LinkPreviewButton
                                key={platform.name}
                                platform={platformData}
                                link={platform.link}
                                className="my-4"
                            />
                        ) : (
                            <Skeleton key={`skeleton-${index}`} type="button" className="w-52" />
                        );
                    })}
                </div>
            </Section>
        </div>
    );
};

export default PreviewCard;