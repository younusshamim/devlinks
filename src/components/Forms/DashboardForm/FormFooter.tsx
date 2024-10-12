import { Button } from "@/components/ui/button";
import { useProfile } from "@/context/ProfileContext";
import { AiOutlineLoading } from "react-icons/ai";

const FormFooter = () => {
    const { saving } = useProfile();
    return (
        <>
            <hr className="mb-5 border-2 border-gray-100" />

            <div className="px-6 md:text-end">
                <div className="md:inline-flex">
                    <Button type="submit" disabled={saving} iconBefore={saving ? <AiOutlineLoading className="animate-spin" /> : null} className="w-full sm:w-fit">
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};

export default FormFooter;