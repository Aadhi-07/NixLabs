import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
    value: string;
}

export default function AnimatedCounter({ value }: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState('0');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        // Parse the number and suffix
        const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
        const suffix = value.replace(/[0-9.]/g, '');

        const controls = animate(0, numericPart, {
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => {
                // Handle decimals if they exist in the original value
                const formatted = value.includes('.')
                    ? latest.toFixed(1)
                    : Math.floor(latest).toString();
                setDisplayValue(formatted + suffix);
            },
        });

        return () => controls.stop();
    }, [value, isInView]);

    return <span ref={ref}>{displayValue}</span>;
}
