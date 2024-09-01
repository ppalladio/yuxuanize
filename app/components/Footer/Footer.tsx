import { Fan, Flower, Sparkle } from 'lucide-react';

const Footer = () => {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-purple-500 flex flex-row w-full justify-around items-center">
            <Sparkle />
            <Flower />
            <Fan />
            <Flower />
            <Sparkle />
        </div>
    );
};
export default Footer;
