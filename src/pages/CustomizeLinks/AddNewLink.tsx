import { Button } from "@/components/ui/button";

const AddNewLink = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button variant="outline" className="w-full" onClick={onClick}>
            + Add new link
        </Button>
    );
};

export default AddNewLink;