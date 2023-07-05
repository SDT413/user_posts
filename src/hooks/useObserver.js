import React from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = React.useRef();
    React.useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var c = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(c);
        observer.current.observe(ref.current);
    }, [isLoading]);
}