import { useEffect, useState } from 'react';

export const useScreenSize = () => {

    const [screenSize, setScreenSize] = useState({ height: window.innerHeight, width: window.innerWidth });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenSize({ height: window.innerHeight, width: window.innerWidth });
        })
    }, [])

    const screenType = screenSize.width < 415 && screenSize.height < 916 ? 'mobile' : 'responsive'

    return screenType;
};
