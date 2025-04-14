import { useRef, useEffect, useCallback } from "react";

function useDoubleTap(onSingleTap, onDoubleTap, delay = 250) {
    const lastTap = useRef(0);
    const timer = useRef(null);

    const handler = useCallback(
        (e) => {
            e.preventDefault();
            const now = performance.now();
            const timeSinceLastTap = now - lastTap.current;

            if (timeSinceLastTap < delay && lastTap.current !== 0) {
                clearTimeout(timer.current);
                timer.current = null;
                lastTap.current = 0;
                onDoubleTap(e); // double tap
            } else {
                timer.current = setTimeout(() => {
                    onSingleTap(e); // single tap
                    timer.current = null;
                }, delay);
            }

            lastTap.current = now;
        },
        [onSingleTap, onDoubleTap, delay]
    );

    useEffect(() => {
        return () => clearTimeout(timer.current);
    }, []);

    return handler;
}

export default useDoubleTap;
