import { FocusCards } from './ui/focus-cards';

interface BlenderCollageProps {}
const cards = [
    {
        title: 'Forest Adventure',
        src: '/projects/ecomm.png',
    },
    {
        title: 'Valley of life',
        src: '/projects/ecomm.png',
    },
    {
        title: 'Sala behta hi jayega',
        src: '/projects/ecomm.png',
    },
    {
        title: 'Camping is for pros',
        src: '/projects/ecomm.png',
    },
    {
        title: 'The road not taken',
        src: '/projects/ecomm.png',
    },
    {
        title: 'The First Rule',
        src: '/projects/ecomm.png',
    },
];
const BlenderCollage = ({}: BlenderCollageProps) => {
    return <FocusCards cards={cards} />;
};
export default BlenderCollage;
