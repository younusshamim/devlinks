import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const PreviewHeader = () => {
    return (
        <Section className="flex items-center justify-between z-50">
            <Button variant="outline">Back to Editor</Button>
            <Button>Share Link</Button>
        </Section>
    );
};

export default PreviewHeader;