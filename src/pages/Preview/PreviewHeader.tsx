import Logo from "@/components/Logo/Logo";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import PageRoutes from "@/config/page-routes";
import { showErrorToast, showSuccessToast } from "@/config/toast-options";
import { useProfile } from "@/context/ProfileContext";
import { Link } from "react-router-dom";

const PreviewHeader = () => {
    const { userDetails } = useProfile()

    const handleShareLink = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                showSuccessToast("Link copied to clipboard!");
            })
            .catch((err) => {
                showErrorToast("Failed to copy link.");
                console.error('Error copying link:', err);
            });
    };

    return (
        <Section className="flex items-center justify-between z-50">
            {userDetails?.email ? <Link to={PageRoutes.customizeLinks}><Button variant="outline">Back to Editor</Button></Link> : <Logo />}

            <Button onClick={handleShareLink}>Share Link</Button>
        </Section>
    );
};

export default PreviewHeader;