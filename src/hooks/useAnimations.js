import { useEffect, useRef, useState } from 'react';

// Hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isVisible];
};

// Stagger delay calculator for lists
export const getStaggerDelay = (index, baseDelay = 0.1) => ({
    animationDelay: `${index * baseDelay}s`,
});
