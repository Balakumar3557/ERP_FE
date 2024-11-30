import { useEffect } from 'react';

const FontAwesomeLoader = () => {
    useEffect(() => {
        const loadFontAwesomeKit = () => {
            const script = document.createElement('script');
            script.src = "https://kit.fontawesome.com/60f5b4e38e.js"; // Replace with your actual kit URL
            script.crossOrigin = "anonymous";
            script.onload = () => {
                console.log("Font Awesome kit loaded successfully.");
            };
            script.onerror = () => {
                console.error("Error loading Font Awesome kit. Falling back to CDN.");
                loadFallbackCDN(); // Fallback to free CDN if the kit fails
            };
            document.body.appendChild(script);

            return () => {
                if (script) {
                    document.body.removeChild(script);
                }
            };
        };

        const loadFallbackCDN = () => {
            const cdnScript = document.createElement('script');
            cdnScript.src = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js"; // Use the appropriate version
            cdnScript.crossOrigin = "anonymous";
            cdnScript.onload = () => {
                console.log("Font Awesome CDN loaded successfully.");
            };
            cdnScript.onerror = () => {
                console.error("Error loading Font Awesome from CDN.");
            };
            document.body.appendChild(cdnScript);
        };

        // Load Font Awesome
        loadFontAwesomeKit();
    }, []);

    return null;
};

export default FontAwesomeLoader;
