// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "auto",
        });
    });
});

(function () {
    "use strict";

    // Helper function to sanitize props for WebEngage
    function sanitizeWebEngageProps(props) {
        if (!props || typeof props !== "object") return {};
        const sanitized = {};
        for (const key in props) {
            const value = props[key];
            if (
                value != null &&
                value !== "" &&
                !key.startsWith("$") &&
                !key.startsWith("ss_")
            ) {
                if (typeof value === "string" && value.length > 1000) {
                    sanitized[key] = value.substring(0, 1000);
                } else {
                    sanitized[key] = value;
                }
            }
        }
        return sanitized;
    }

    function showToast(message, type = "info") {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll(".toast");
        existingToasts.forEach((toast) => toast.remove());

        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Show toast
        setTimeout(() => toast.classList.add("show"), 100);

        // Auto-hide after 5 seconds
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }

    // Initialize when DOM and window are ready
    function initialize() {
        if (typeof window === "undefined") {
            return;
        }

        // Parse URL to extract username and slug from pattern /username/page/slug
        let username = null;

        if (
            typeof window !== "undefined" &&
            window.location &&
            window.location.pathname
        ) {
            const pathMatch = window.location.pathname.match(
                new RegExp("^/([^/]+)/page/([^/]+)"),
            );
            if (pathMatch) {
                username = pathMatch[1]; // Extract username from URL
                slug = pathMatch[2]; // Extract slug from URL
            }
        }
    }

    // Initialize when DOM is ready
    if (typeof document !== "undefined") {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initialize);
        } else {
            // Use setTimeout to ensure window is fully available
            setTimeout(initialize, 0);
        }
    }
})();
