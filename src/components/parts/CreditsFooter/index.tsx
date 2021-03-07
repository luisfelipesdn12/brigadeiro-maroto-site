import Section from "../../base/Section";
import { CreditsText, CreditsLink } from "./styles";

const CreditsFooter: React.FC = () => {
    return (
        <Section
            bgColor="rgba(123,52,30,0.5)"
            paddingTop="1.5rem"
            paddingBottom="1.5rem"
            paddingLeft=".75rem"
            paddingRight=".75rem"
        >
            <CreditsText>
                Desenvolvido por <CreditsLink href="https://luisfelipesdn12.now.sh/" target="_blank">Luis Felipe</CreditsLink>.
            </CreditsText>
        </Section>
    )
}

export default CreditsFooter;
