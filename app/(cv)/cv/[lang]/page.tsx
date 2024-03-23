'use client';
import { useParams, useSearchParams } from 'next/navigation';
import CvEn from '../CvEn';
import CvEs from '../CvEs';

const CvPage = () => {
    const params = useParams();
    console.log(params);
    if (params.lang === 'en') {
        return <CvEn />;
    } else if (params.lang === 'es') {
        return <CvEs />;
    }
};
export default CvPage;
