import LinkPreviewButton from "@/components/LinkPreviewButton";
import Section from "@/components/Section";
import PlatformsData from "@/data/platforms.data";
import { FaRegUser } from "react-icons/fa";

const PreviewCard = () => {
    return (
        <div className="flex justify-center sm:mt-20">
            <Section className="p-10 rounded-xl sm:shadow-2xl min-h-80 h-auto w-full sm:w-80 flex flex-col items-center space-y-3">
                <div className="w-[100px] h-[100px] border-4 border-primary rounded-full">
                    <FaRegUser className="w-full h-full p-6 text-primary/50" />
                </div>

                <h1 className="text-2xl font-bold ">Ben Wright</h1>
                <p className="text-sm text-gray-500">ben@example.com</p>

                <div className="space-y-3 pt-5 w-full">
                    {PlatformsData.map((platform, index) => (
                        <LinkPreviewButton platform={platform} key={platform.name + index} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default PreviewCard;