/* =========================================================
   SCHOOL WEBSITE — MASTER SCRIPT
   Shared by all HTML pages
   Works with the accompanying style.css
   ========================================================= */

"use strict";

/* =========================================================
   1. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initPageLoader();
    initSharedComponents();
    initHeader();
    initMobileNavigation();
    initScrollProgress();
    initRevealAnimations();
    initCounters();
    initFacilityFilters();
    initFacilityDetails();
    initSmoothScrolling();
    initImageFallbacks();
    initBackToTop();
    initContactForm();
    initActiveNavigation();
});


/* =========================================================
   2. PAGE LOADER
========================================================= */

function initPageLoader() {
    const loader = document.querySelector(".page-loader");

    if (!loader) {
        document.body.classList.add("loaded");
        return;
    }

    const hideLoader = () => {
        loader.classList.add("loaded");
        document.body.classList.add("loaded");

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);
    };

    if (document.readyState === "complete") {
        setTimeout(hideLoader, 450);
    } else {
        window.addEventListener(
            "load",
            () => {
                setTimeout(hideLoader, 450);
            },
            { once: true }
        );
    }

    /* Safety fallback */
    setTimeout(hideLoader, 3500);
}


/* =========================================================
   3. SHARED HEADER / FOOTER
========================================================= */

async function initSharedComponents() {
    const headerTarget =
        document.getElementById("site-header");

    const footerTarget =
        document.getElementById("site-footer");

    if (headerTarget) {
        const loaded = await loadComponent(
            headerTarget,
            "header.html"
        );

        if (!loaded) {
            renderHeader(headerTarget);
        }

        initHeader();
        initMobileNavigation();
        initActiveNavigation();
    }

    if (footerTarget) {
        const loaded = await loadComponent(
            footerTarget,
            "footer.html"
        );

        if (!loaded) {
            renderFooter(footerTarget);
        }
    }
}


async function loadComponent(target, file) {
    try {
        const response = await fetch(file, {
            cache: "no-cache"
        });

        if (!response.ok) {
            return false;
        }

        const html = await response.text();

        if (!html.trim()) {
            return false;
        }

        target.innerHTML = html;

        return true;

    } catch (error) {
        console.warn(
            `Could not load ${file}:`,
            error
        );

        return false;
    }
}


/* =========================================================
   4. FALLBACK HEADER
========================================================= */

function renderHeader(target) {

    target.innerHTML = `
        <header
            class="site-header"
            id="mainHeader"
        >

            <div class="container">

                <a
                    href="index.html"
                    class="logo logo-link"
                    aria-label="School Home"
                >

                    <img
                        src="image/LOGO (2).jpeg"
                        class="school-logo header-logo"
                        alt="Mount Litera Zee School, Raghunathpur, Bhubaneswar"
                        style="width:220px;height:auto;display:block;object-fit:contain;"
                        onerror="this.style.display='none';"
                    >

                </a>


                <button
                    class="menu-toggle mobile-menu-toggle"
                    type="button"
                    aria-label="Open navigation"
                    aria-expanded="false"
                    aria-controls="mainNavigation"
                >

                    <i class="fa-solid fa-bars"></i>

                </button>


                <nav
                    id="mainNavigation"
                    class="main-nav"
                    aria-label="Main navigation"
                >

                    <a href="index.html">
                        Home
                    </a>

                    <a href="about.html">
                        About
                    </a>

                    <a href="academics.html">
                        Academics
                    </a>

                    <a href="admissionx.html">
                        Admissions
                    </a>

                    <a href="facilities.html">
                        Facilities
                    </a>

                    <a href="gallery.html">
                        Gallery
                    </a>

                    <a href="mandatory.html">
                        Mandatory Disclosure
                    </a>

                    <a href="contact.html">
                        Contact
                    </a>

                </nav>

            </div>

        </header>
    `;
}


/* =========================================================
   5. FALLBACK FOOTER
========================================================= */

function renderFooter(target) {

    const year =
        new Date().getFullYear();

    target.innerHTML = `

        <footer class="site-footer">

            <div class="footer-container">

                <div class="footer-grid">


                    <div>

                        <a
                            href="index.html"
                            class="footer-logo"
                        >

                            <img
                                src="image/logo.jpeg"
                                class="school-logo footer-logo-image"
                                alt="Mount Litera Zee School, Raghunathpur, Bhubaneswar"
                                style="width:260px;height:auto;display:block;object-fit:contain;"
                                onerror="this.style.display='none';"
                            >


                        </a>

                        <p>
                            Building confident learners
                            through knowledge, character,
                            creativity and responsible
                            citizenship.
                        </p>

                    </div>


                    <div>

                        <h3 class="footer-title">
                            Quick Links
                        </h3>

                        <ul class="footer-links">

                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="about.html">
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a href="academics.html">
                                    Academics
                                </a>
                            </li>

                            <li>
                                <a href="admission.html">
                                    Admissions
                                </a>
                            </li>

                        </ul>

                    </div>


                    <div>

                        <h3 class="footer-title">
                            Explore
                        </h3>

                        <ul class="footer-links">

                            <li>
                                <a href="facilities.html">
                                    Facilities
                                </a>
                            </li>

                            <li>
                                <a href="gallery.html">
                                    Gallery
                                </a>
                            </li>

                            <li>
                                <a href="mandatory.html">
                                    Mandatory Disclosure
                                </a>
                            </li>

                            <li>
                                <a href="contact.html">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>


                    <div>

                        <h3 class="footer-title">
                            Contact
                        </h3>

                        <ul class="footer-links">

                            <li>
                                <a href="contact.html">
                                    Get in touch with us
                                </a>
                            </li>

                            <li>
                                <span>
                                    School Office
                                </span>
                            </li>

                            <li>
                                <span>
                                    Monday – Saturday
                                </span>
                            </li>

                        </ul>

                    </div>


                </div>


                <div class="footer-bottom">

                    <p>
                        © ${year} Our School.
                        All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    `;
}


/* =========================================================
   6. HEADER SCROLL EFFECT
========================================================= */

function initHeader() {

    const header =
        document.querySelector("#mainHeader") ||
        document.querySelector(".site-header") ||
        document.querySelector(".main-header");

    if (!header) return;


    const updateHeader = () => {

        if (window.scrollY > 25) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );
        }
    };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );
}


/* =========================================================
   7. MOBILE NAVIGATION
========================================================= */

function initMobileNavigation() {

    const toggle =
        document.querySelector(
            ".menu-toggle"
        ) ||
        document.querySelector(
            ".mobile-menu-toggle"
        );


    const nav =
        document.querySelector(
            ".main-nav"
        ) ||
        document.querySelector(
            ".nav-menu"
        );


    if (!toggle || !nav) {
        return;
    }


    if (
        toggle.dataset.navigationReady ===
        "true"
    ) {
        return;
    }


    toggle.dataset.navigationReady =
        "true";


    toggle.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle(
                    "open"
                );


            nav.classList.toggle(
                "active",
                isOpen
            );


            toggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            toggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );


            const icon =
                toggle.querySelector("i");


            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );
            }


            document.body.classList.toggle(
                "no-scroll",
                isOpen &&
                window.innerWidth <= 760
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    closeMobileNavigation(
                        toggle,
                        nav
                    );

                }
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                window.innerWidth > 760 ||
                !nav.classList.contains(
                    "open"
                )
            ) {
                return;
            }


            if (
                !nav.contains(event.target) &&
                !toggle.contains(event.target)
            ) {

                closeMobileNavigation(
                    toggle,
                    nav
                );
            }

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 760) {

                closeMobileNavigation(
                    toggle,
                    nav
                );

            }

        }
    );
}


function closeMobileNavigation(
    toggle,
    nav
) {

    nav.classList.remove(
        "open",
        "active"
    );


    toggle.setAttribute(
        "aria-expanded",
        "false"
    );


    toggle.setAttribute(
        "aria-label",
        "Open navigation"
    );


    const icon =
        toggle.querySelector("i");


    if (icon) {

        icon.classList.add(
            "fa-bars"
        );

        icon.classList.remove(
            "fa-xmark"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );
}


/* =========================================================
   8. SCROLL PROGRESS
========================================================= */

function initScrollProgress() {

    const progress =
        document.querySelector(
            ".scroll-progress"
        );


    if (!progress) return;


    let ticking = false;


    const updateProgress = () => {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        const percentage =
            documentHeight > 0
                ? (
                    scrollTop /
                    documentHeight
                ) * 100
                : 0;


        progress.style.width =
            `${Math.min(
                100,
                Math.max(
                    0,
                    percentage
                )
            )}%`;


        ticking = false;
    };


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                requestAnimationFrame(
                    updateProgress
                );

                ticking = true;
            }

        },
        {
            passive: true
        }
    );


    updateProgress();
}


/* =========================================================
   9. SCROLL REVEAL
========================================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) {
        return;
    }


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "active",
                    "is-visible"
                );

            }
        );

        return;
    }


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "active",
                    "is-visible"
                );

            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active",
                                "is-visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -60px 0px"
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );
}


/* =========================================================
   10. ANIMATED COUNTERS
========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    if (!counters.length) {
        return;
    }


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        counters.forEach(
            counter => {

                counter.textContent =
                    counter.dataset.target ||
                    "0";

            }
        );

        return;
    }


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        counters.forEach(
            counter => {

                counter.textContent =
                    counter.dataset.target ||
                    "0";

            }
        );

        return;
    }


    const animateCounter =
        counter => {

            if (
                counter.dataset.counted ===
                "true"
            ) {
                return;
            }


            counter.dataset.counted =
                "true";


            const target =
                parseFloat(
                    counter.dataset.target ||
                    "0"
                );


            const duration =
                1500;


            const startTime =
                performance.now();


            const update =
                currentTime => {

                    const elapsed =
                        currentTime -
                        startTime;


                    const progress =
                        Math.min(
                            elapsed /
                            duration,
                            1
                        );


                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    const value =
                        target * eased;


                    counter.textContent =
                        Number.isInteger(
                            target
                        )
                            ? Math.round(
                                value
                            )
                            : value.toFixed(
                                1
                            );


                    if (
                        progress < 1
                    ) {

                        requestAnimationFrame(
                            update
                        );

                    } else {

                        counter.textContent =
                            Number.isInteger(
                                target
                            )
                                ? target
                                : target.toFixed(
                                    1
                                );

                    }

                };


            requestAnimationFrame(
                update
            );
        };


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            animateCounter(
                                entry.target
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.6
            }
        );


    counters.forEach(
        counter => {

            observer.observe(
                counter
            );

        }
    );
}


/* =========================================================
   11. FACILITY FILTERS
========================================================= */

function initFacilityFilters() {

    const filters =
        document.querySelectorAll(
            ".facility-filter"
        );


    const cards =
        document.querySelectorAll(
            ".facility-card[data-category]"
        );


    if (
        !filters.length ||
        !cards.length
    ) {
        return;
    }


    filters.forEach(
        filter => {

            filter.addEventListener(
                "click",
                () => {

                    const selected =
                        filter.dataset.filter ||
                        "all";


                    filters.forEach(
                        item => {

                            item.classList.toggle(
                                "active",
                                item === filter
                            );

                        }
                    );


                    cards.forEach(
                        card => {

                            const category =
                                card.dataset.category ||
                                "";


                            const shouldShow =
                                selected === "all" ||
                                category === selected;


                            if (shouldShow) {

                                card.hidden = false;


                                requestAnimationFrame(
                                    () => {

                                        card.style.opacity =
                                            "1";

                                        card.style.transform =
                                            "translateY(0)";

                                        card.style.pointerEvents =
                                            "auto";

                                    }
                                );

                            } else {

                                card.style.opacity =
                                    "0";

                                card.style.transform =
                                    "translateY(15px)";

                                card.style.pointerEvents =
                                    "none";


                                setTimeout(
                                    () => {

                                        if (
                                            filter.dataset.filter !==
                                            selected
                                        ) {
                                            return;
                                        }

                                        card.hidden =
                                            true;

                                    },
                                    300
                                );
                            }

                        }
                    );

                }
            );

        }
    );
}


/* =========================================================
   12. FACILITY DETAILS
========================================================= */

function initFacilityDetails() {

    const links =
        document.querySelectorAll(
            ".facility-link[data-facility]"
        );


    const details =
        document.querySelector(
            "#facility-details"
        );


    if (
        !links.length ||
        !details
    ) {
        return;
    }


    const title =
        details.querySelector(
            "[data-detail-title]"
        );


    const description =
        details.querySelector(
            "[data-detail-description]"
        );


    const label =
        details.querySelector(
            "[data-detail-label]"
        );


    const icon =
        details.querySelector(
            "[data-detail-icon]"
        );


    const data = {

        "smart-classroom": {

            label:
                "Academic Facility",

            title:
                "Smart Classrooms",

            description:
                "Technology-enabled learning spaces designed to support interactive teaching, visual learning and engaging classroom experiences.",

            icon:
                "fa-chalkboard-user"
        },


        "science-lab": {

            label:
                "Academic Facility",

            title:
                "Science Laboratory",

            description:
                "A practical learning environment where students can observe, experiment and develop scientific thinking through hands-on activities.",

            icon:
                "fa-flask"
        },


        "library": {

            label:
                "Learning Facility",

            title:
                "School Library",

            description:
                "A calm reading and learning space supporting independent study, research, reading habits and access to educational resources.",

            icon:
                "fa-book-open"
        },


        "computer-lab": {

            label:
                "Technology Facility",

            title:
                "Computer Laboratory",

            description:
                "A technology-focused learning environment supporting digital literacy, computer education and responsible use of technology.",

            icon:
                "fa-computer"
        },


        "sports": {

            label:
                "Student Activity",

            title:
                "Sports & Games",

            description:
                "Spaces for physical activity that encourage fitness, teamwork, discipline, confidence and healthy competition.",

            icon:
                "fa-futbol"
        },


        "art": {

            label:
                "Creative Facility",

            title:
                "Art Room",

            description:
                "A creative space where students can explore visual expression, imagination, design and artistic skills.",

            icon:
                "fa-palette"
        },


        "transport": {

            label:
                "Safety & Support",

            title:
                "School Transport",

            description:
                "Transport services may be available for students depending on school routes and operational arrangements.",

            icon:
                "fa-bus"
        },


        "safety": {

            label:
                "Safety & Wellbeing",

            title:
                "Campus Safety",

            description:
                "Safety-focused arrangements designed to support a secure, comfortable and student-friendly learning environment.",

            icon:
                "fa-shield-halved"
        }

    };


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const key =
                        link.dataset.facility;


                    const item =
                        data[key];


                    if (!item) {
                        return;
                    }


                    event.preventDefault();


                    if (label) {

                        label.textContent =
                            item.label;
                    }


                    if (title) {

                        title.textContent =
                            item.title;
                    }


                    if (description) {

                        description.textContent =
                            item.description;
                    }


                    if (icon) {

                        icon.className =
                            `fa-solid ${item.icon}`;

                    }


                    details.classList.remove(
                        "detail-changing"
                    );


                    void details.offsetWidth;


                    details.classList.add(
                        "detail-changing"
                    );


                    details.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }
            );

        }
    );
}


/* =========================================================
   13. SMOOTH INTERNAL LINKS
========================================================= */

function initSmoothScrolling() {

    document.addEventListener(
        "click",
        event => {

            const link =
                event.target.closest(
                    'a[href^="#"]'
                );


            if (!link) {
                return;
            }


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                !href ||
                href === "#" ||
                href.length < 2
            ) {
                return;
            }


            const target =
                document.querySelector(
                    href
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            if (
                window.history &&
                window.history.replaceState
            ) {

                window.history.replaceState(
                    null,
                    "",
                    href
                );
            }

        }
    );
}


/* =========================================================
   14. IMAGE FALLBACKS
========================================================= */

function initImageFallbacks() {

    const images =
        document.querySelectorAll(
            "img[data-fallback]"
        );


    images.forEach(
        img => {

            img.addEventListener(
                "error",
                () => {

                    const fallback =
                        img.dataset.fallback;


                    if (
                        fallback &&
                        img.src !== fallback
                    ) {

                        img.src =
                            fallback;

                    }

                },
                {
                    once: true
                }
            );

        }
    );


    document
        .querySelectorAll("img")
        .forEach(
            img => {

                if (
                    img.complete &&
                    img.naturalWidth === 0 &&
                    img.dataset.fallback
                ) {

                    img.src =
                        img.dataset.fallback;
                }

            }
        );
}


/* =========================================================
   15. BACK TO TOP
========================================================= */

function initBackToTop() {

    let button =
        document.querySelector(
            "#backToTop"
        ) ||
        document.querySelector(
            ".back-to-top"
        );


    if (!button) {

        button =
            document.createElement(
                "button"
            );


        button.id =
            "backToTop";


        button.className =
            "back-to-top";


        button.type =
            "button";


        button.setAttribute(
            "aria-label",
            "Back to top"
        );


        button.innerHTML =
            '<i class="fa-solid fa-arrow-up"></i>';


        document.body.appendChild(
            button
        );
    }


    if (
        button.dataset.backTopReady ===
        "true"
    ) {
        return;
    }


    button.dataset.backTopReady =
        "true";


    const update = () => {

        const show =
            window.scrollY > 500;


        button.classList.toggle(
            "show",
            show
        );


        button.classList.toggle(
            "visible",
            show
        );

    };


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );


    update();


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );
}


/* =========================================================
   16. CONTACT FORM
========================================================= */

function initContactForm() {

    const forms =
        document.querySelectorAll(
            "form.contact-form, #contactForm"
        );


    forms.forEach(
        form => {

            if (
                form.dataset.formReady ===
                "true"
            ) {
                return;
            }


            form.dataset.formReady =
                "true";


            form.addEventListener(
                "submit",
                event => {

                    const required =
                        form.querySelectorAll(
                            "[required]"
                        );


                    let valid =
                        true;


                    required.forEach(
                        field => {

                            const value =
                                field.value.trim();


                            const invalid =
                                !value ||
                                (
                                    field.type ===
                                    "email" &&
                                    !isValidEmail(
                                        value
                                    )
                                );


                            field.setAttribute(
                                "aria-invalid",
                                String(invalid)
                            );


                            field.classList.toggle(
                                "input-error",
                                invalid
                            );


                            if (invalid) {
                                valid = false;
                            }

                        }
                    );


                    if (!valid) {

                        event.preventDefault();


                        const firstInvalid =
                            form.querySelector(
                                ".input-error"
                            );


                        if (firstInvalid) {

                            firstInvalid.focus();

                        }


                        showFormMessage(
                            form,
                            "Please fill in all required fields correctly.",
                            "error"
                        );


                        return;
                    }


                    const action =
                        form.getAttribute(
                            "action"
                        );


                    if (
                        !action ||
                        action === "#" ||
                        action === ""
                    ) {

                        event.preventDefault();


                        showFormMessage(
                            form,
                            "Your message is ready. Connect this form to your school email or backend to receive submissions.",
                            "success"
                        );
                    }

                }
            );


            form
                .querySelectorAll(
                    "input, textarea, select"
                )
                .forEach(
                    field => {

                        field.addEventListener(
                            "input",
                            () => {

                                field.classList.remove(
                                    "input-error"
                                );


                                field.setAttribute(
                                    "aria-invalid",
                                    "false"
                                );

                            }
                        );

                    }
                );

        }
    );
}


function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


function showFormMessage(
    form,
    message,
    type
) {

    let box =
        form.querySelector(
            ".form-message"
        );


    if (!box) {

        box =
            document.createElement(
                "div"
            );


        box.className =
            "form-message";


        form.prepend(box);
    }


    box.textContent =
        message;


    box.dataset.type =
        type;


    box.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================================================
   17. ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const links =
        document.querySelectorAll(
            ".main-nav a, .nav-menu a, nav a"
        );


    if (!links.length) {
        return;
    }


    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase() ||
        "index.html";


    links.forEach(
        link => {

            const href =
                link.getAttribute(
                    "href"
                );


            if (!href) {
                return;
            }


            const cleanHref =
                href
                    .split("#")[0]
                    .split("?")[0]
                    .toLowerCase();


            const isHome =
                (
                    currentPage === "" ||
                    currentPage === "index.html"
                ) &&
                (
                    cleanHref === "" ||
                    cleanHref === "index.html"
                );


            const isCurrent =
                cleanHref === currentPage;


            link.classList.toggle(
                "active",
                isHome || isCurrent
            );

        }
    );
}


/* =========================================================
   18. HERO PARALLAX
========================================================= */

function initHeroParallax() {

    const shapes =
        document.querySelectorAll(
            ".inner-page-hero .inner-hero-shape"
        );


    if (
        !shapes.length ||
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        return;
    }


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) {
                return;
            }


            requestAnimationFrame(
                () => {

                    const y =
                        window.scrollY;


                    shapes.forEach(
                        (
                            shape,
                            index
                        ) => {

                            const speed =
                                0.04 +
                                index * 0.025;


                            shape.style.translate =
                                `0 ${
                                    y * speed
                                }px`;

                        }
                    );


                    ticking = false;

                }
            );


            ticking = true;

        },
        {
            passive: true
        }
    );
}


/* =========================================================
   19. SUBTLE CARD TILT
========================================================= */

function initCardTilt() {

    if (
        window.innerWidth < 900 ||
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        return;
    }


    const cards =
        document.querySelectorAll(
            ".facility-card, .safety-card, .contact-card"
        );


    cards.forEach(
        card => {

            if (
                card.dataset.tiltReady ===
                "true"
            ) {
                return;
            }


            card.dataset.tiltReady =
                "true";


            card.addEventListener(
                "pointermove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateX =
                        (
                            (y / rect.height) -
                            0.5
                        ) * -3;


                    const rotateY =
                        (
                            (x / rect.width) -
                            0.5
                        ) * 3;


                    card.style.transform =
                        `translateY(-10px)
                         perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "pointerleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );
}


/* =========================================================
   20. RUN OPTIONAL ENHANCEMENTS
========================================================= */

window.addEventListener(
    "load",
    () => {

        initHeroParallax();
        initCardTilt();

    }
);


/* =========================================================
   21. PUBLIC HELPERS
========================================================= */

window.SchoolWebsite = {

    closeMobileNavigation,

    initRevealAnimations,

    initCounters,

    initFacilityFilters,

    initActiveNavigation,

    showFormMessage

};
