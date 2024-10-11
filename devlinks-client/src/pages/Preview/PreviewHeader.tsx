import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import PageRoutes from "@/config/page-routes";
import { Link } from "react-router-dom";

const PreviewHeader = () => {
    return (
        <Section className="flex items-center justify-between z-50">
            <Link to={PageRoutes.customizeLinks}><Button variant="outline">Back to Editor</Button></Link>
            <Button>Share Link</Button>
        </Section>
    );
};

export default PreviewHeader;