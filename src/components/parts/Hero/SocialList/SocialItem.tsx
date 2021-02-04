import { SocialItemWrapper } from "./styles";

export interface SocialNetwork {
    url: string;
    image_url?: string;
}

interface SocialItemProps {
    name: string;
    socialNetwork: SocialNetwork;
}

const SocialItem: React.FC<SocialItemProps> = ({ name, socialNetwork }) => {
    return (
        <SocialItemWrapper>
            <a href={socialNetwork.url} target="_blank" rel="noopener noreferrer">
                <img src={socialNetwork.image_url} alt={`${name} logo`} />
            </a>
        </SocialItemWrapper>
    )
}

export default SocialItem;
