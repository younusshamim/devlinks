import { Button } from "@/components/ui/button";

const FormFooter = () => {
    return (
        <>
            <hr className="mb-5 border-2 border-gray-100" />

            <div className="px-6 md:text-end">
                <div className="md:inline-flex">
                    <Button type="submit" >
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};

export default FormFooter;