'use client';
import { useParams, useSearchParams } from 'next/navigation';
import CvEn from '../CvEn';
import CvEs from '../CvEs';
import { useEffect, useState } from 'react';

const CvPage = () => {
    const params = useParams();

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    console.log(params);
    if (params.lang === 'en') {
        return <CvEn />;
    } else if (params.lang === 'es') {
        return <CvEs />;
    }
};
export default CvPage;
