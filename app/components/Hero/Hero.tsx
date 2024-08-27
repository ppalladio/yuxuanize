import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import IconGroup from '../IconGroup/IconGroup';

interface Props {}
const Hero = (props: Props) => {
    return (
        <div className="h-screen pt-20 ">
            <div className="flex-col flex items-stretch justify-center">
                <TextHoverEffect text="Yuxuan" />
                <IconGroup />
            </div>
        </div>
    );
};
export default Hero;
