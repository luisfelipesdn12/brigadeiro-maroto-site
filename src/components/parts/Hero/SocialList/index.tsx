import { SocialListWrapper } from "./styles";
import SocialItem from "./SocialItem";

interface SocialListProps {
    socialNetworks: object;
}

const SocialList: React.FC<SocialListProps> = ({ socialNetworks }) => {
    return (
        <SocialListWrapper>
            {Object.keys(socialNetworks).map(name =>
                <SocialItem key={name} name={name} socialNetwork={socialNetworks[name]} />
            )}
        </SocialListWrapper>
    )
}

export default SocialList;
