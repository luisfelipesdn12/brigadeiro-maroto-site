import Section from "../../base/Section";
import Title from "../../base/Title";
import Slogan from "../../base/Slogan";
import Logo from "./Logo";
import SocialList from "./SocialList";
import { data } from "../../../../pages/_app";

const Hero: React.FC = () => {
    return (
        <Section
            padding=".75rem"
            paddingBottom="5rem"
            bgColor="rgba(123, 52, 30, 0.5)"
            bgImageURL="/cacos.webp"
        >
            <Logo />
            <Title
                content={data.name}
                color="#1a202c"
                marginTop="1.5rem"
                marginBottom=".25rem"
            />
            <Slogan
                content={data.slogan}
                color="#2d3748"
            />
            <SocialList
                socialNetworks={data.social}
            />
        </Section>
    )
}

export default Hero;

/*
<h1 id="hero-title" class="uppercase font-bold text-gray-900 text-center mt-6 mb-1 text-4xl">
    Brigadeiro Maroto
</h1>
<p id="hero-sentence" class="text-gray-800 text-center text-3xl">
    Distribuindo Felicidade!
</p>
<ul class="flex justify-center mt-6">
    <li class="w-12 h-12 p-1 m-2 shadow rounded-full bg-white">
        <a href="https://instagram.com/briga_deiromaroto" target="_blank">
            <img src="./assets/instagram.webp" alt="instagram logo">
        </a>
    </li>
    <li class="w-12 h-12 p-2 m-2 shadow rounded-full bg-white">
        <a href="https://www.tiktok.com/@brigadeiromaroto" target="_blank">
            <img src="./assets/tiktok.webp" alt="tiktok logo">
        </a>
    </li>
</ul>
 */
