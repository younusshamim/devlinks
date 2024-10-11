import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import PlatformsData from "@/data/platforms.data";
import { FaArrowRight, FaRegUser } from "react-icons/fa";


const Preview = () => {
    return (
        <>
            <div className="h-[calc(100vh-50vh)] p-4 space-y-4 bg-primary rounded-b-2xl">
                <Section className="flex items-center justify-between">
                    <Button variant="outline">Back to Editor</Button>
                    <Button>Share Link</Button>
                </Section >
            </div>

            <div className="flex justify-center -mt-36 mb-10">
                <Section className="p-10 rounded-xl shadow-2xl min-h-80 w-80 flex flex-col items-center space-y-3">
                    <div className="w-[100px] h-[100px] border-4 border-primary rounded-full">
                        <FaRegUser className="w-full h-full p-6 text-primary/50" />
                    </div>
                    <h1 className="text-2xl font-bold ">Ben Wright</h1>
                    <p className="text-sm text-gray-500">ben@example.com</p>

                    <div className="space-y-3 pt-5 w-full">
                        {PlatformsData.map((platform, index) => (
                            <Button
                                key={platform.name + index}
                                className={`w-full active:opacity-90`}
                                style={{ backgroundColor: platform.background, color: platform.foreground }}
                                iconBefore={<platform.Icon />}
                                iconAfter={<FaArrowRight className="text-[10px]" />}
                            >
                                {platform.name}
                            </Button>
                        ))}

                    </div>
                </Section>
            </div>
        </>
    );
};

export default Preview;