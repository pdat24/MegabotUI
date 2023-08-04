function fireAnimation(callback, element, threshold = 0.5) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                }
            });
        },
        { threshold }
    );
    observer.observe(element);
}
