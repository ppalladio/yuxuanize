import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface StackIconProps {
    logo: string;
    logoText: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
}

const StackIcon = ({ logo, logoText, tooltipPosition = 'bottom', className }: StackIconProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger>
                    <Avatar className={className}>
                        <AvatarImage src={`/StackLogos/${logo} `} alt={logoText} />
                        <AvatarFallback className="capitalize">{logoText}</AvatarFallback>
                    </Avatar>
                </TooltipTrigger>
                <TooltipContent side={tooltipPosition}>
                    <p className="capitalize">{logoText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default StackIcon;
