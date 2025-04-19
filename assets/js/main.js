$(window).on('load', function () {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 600);
    });

    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    /* common  */
    let wordSplit = new SplitType("[data-split='true']", {
        types: "words",
    })

    // hover 
    $(".item").each(function () {
        $(this).hover(
            function () {
                $(this).siblings().addClass("hover-effect")
            },
            function () {
                $(this).siblings().removeClass("hover-effect")
            }
        )
    })

    // fixed-nav
    gsap.matchMedia().add("(max-width: 1023px)", function () {
        gsap.fromTo(".fixed-nav", {
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: ".sc-shirt",
                start: "0% 0%",
                end: "100% 100%",
                scrub: true,
                // markers: true,
                onEnter: () => {
                    gsap.to(".fixed-nav", {
                        opacity: 1
                    })
                },
                onLeave: () => {
                    gsap.to(".fixed-nav", {
                        opacity: 0
                    })
                }
            },
            ease: "power2.out"
        })
    })

    // sc-shirt
    gsap.matchMedia().add("(min-width: 1024px)", function () {
        gsap.to(".sc-shirt .sticky-before", {
            scrollTrigger: {
                trigger: ".sc-shirt .guide-group .bg",
                start: "0% 0%",
                end: "100% 0%",
                scrub: true,
                // markers: true,
            },
            yPercent: -100,
        })
        gsap.to(".sc-shirt .sticky-before .title", {
            scrollTrigger: {
                trigger: ".sc-shirt .meet-group",
                start: "50% 0%",
                end: "100% 0%",
                scrub: true,
                // markers: true,
            },
            scale: 0.75,
        }, ">")

        new SplitType("[data-split='true']", {
            types: "words",
            tagName: "span"
        });

        shirtMotion = gsap.timeline({
            scrollTrigger: {
                trigger: ".guide-group",
                start: "0% 0%",
                end: "100% 100%",
                scrub: true,
                // markers: true,
            }
        });

        shirtMotion
            .fromTo(".guide-1 .bg", {
                scale: 2,
            }, {
                scrollTrigger: {
                    trigger: ".guide-group",
                    start: "0% 50%",
                    end: "25% 100%",
                    scrub: true,
                    // markers: true,
                },
                scale: 1,
                ease: "power2.out"
            })

            .fromTo(".fixed-nav .col-1", {
                    opacity: 1,
                    xPercent: -100
                }, {
                    opacity: 1,
                    xPercent: 0,
                    duration: 0.1,
                    ease: "power2.out"
                },
                "<"
            )
            .fromTo(".fixed-nav .col-2", {
                    opacity: 1,
                    xPercent: 100
                }, {
                    opacity: 1,
                    xPercent: 0,
                    duration: 0.1,
                    ease: "power2.out"
                },
                "<"
            )

            .fromTo("#header .logo-area", {
                opacity: 1,
                xPercent: -125
            }, {
                opacity: 1,
                xPercent: 0,
                duration: 0.1,
                ease: "power2.out"
            }, )
            .fromTo("#header .util-area", {
                    opacity: 1,
                    xPercent: 125
                }, {
                    opacity: 1,
                    xPercent: 0,
                    duration: 0.1,
                    ease: "power2.out"
                },
                "<"
            )

            .to(".guide-1", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.15)
            .to(".guide-2", {
                opacity: 1,
                duration: 0.15,
                ease: "power2.out"
            }, 0.15)
            .to(".guide-2", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.3)
            .to(".guide-3", {
                opacity: 1,
                duration: 0.15,
                ease: "power2.out"
            }, 0.3)
            .to(".guide-3", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.45)
            .to(".guide-4", {
                opacity: 1,
                duration: 0.15,
                ease: "power2.out"
            }, 0.45)
            .to(".guide-4", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.6)
            .to(".guide-5", {
                opacity: 1,
                duration: 0.15,
                ease: "power2.out"
            }, 0.6)
            .to(".guide-5", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.875)
            .to(".guide-6", {
                opacity: 1,
                duration: 0.15,
                ease: "power2.out"
            }, 0.75)
            .to(".guide-6", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.9)

            .to(".guide-5 .bg", {
                scale: 2,
                transformOrigin: "bottom center",
                willChange: "transform",
                ease: "power2.out"
            }, 0.75)

            .fromTo(".guide-7", {
                opacity: 1,
                xPercent: 100
            }, {
                opacity: 1,
                xPercent: 0,
                duration: 0.3,
                ease: "power2.out"
            }, 0.95)

            .to(".guide-1 .detail .word, .guide-1 .line .word", {
                opacity: () => gsap.utils.random(0, 1),
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.05) 
            .to(".guide-1 .detail .word, .guide-1 .line .word", {
                opacity: 1,
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.07) 
            .to(".guide-1 .detail, .guide-1 .line", {
                opacity: 1,
                duration: 0.15,
                stagger: 0.01,
                ease: "power2.out",
            }, 0.075)
            .to(".guide-1 .detail, .guide-1 .line", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.15)

            .to(".guide-2 .detail .word, .guide-2 .line .word", {
                opacity: () => gsap.utils.random(0, 1),
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.2) 
            .to(".guide-2 .detail .word, .guide-2 .line .word", {
                opacity: 1,
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.220) 
            .to(".guide-2 .detail, .guide-2 .line", {
                opacity: 1,
                duration: 0.15,
                stagger: 0.01,
                ease: "power2.out"
            }, 0.225)
            .to(".guide-2 .detail, .guide-2 .line", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.3)

            .to(".guide-3 .detail .word, .guide-3 .line .word", {
                opacity: () => gsap.utils.random(0, 1),
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.35) 
            .to(".guide-3 .detail .word, .guide-3 .line .word", {
                opacity: 1,
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.370) 
            .to(".guide-3 .detail, .guide-3 .line", {
                opacity: 1,
                duration: 0.15,
                stagger: 0.01,
                ease: "power2.out"
            }, 0.375)
            .to(".guide-3 .detail, .guide-3 .line", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.45)

            .to(".guide-4 .detail .word, .guide-4 .line .word", {
                opacity: () => gsap.utils.random(0, 1),
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.5) 
            .to(".guide-4 .detail .word, .guide-4 .line .word", {
                opacity: 1,
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.520) 
            .to(".guide-4 .detail, .guide-4 .line", {
                opacity: 1,
                duration: 0.15,
                stagger: 0.01,
                ease: "power2.out"
            }, 0.525)
            .to(".guide-4 .detail, .guide-4 .line", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.6)

            .to(".guide-5 .detail .word, .guide-5 .line .word", {
                opacity: () => gsap.utils.random(0, 1),
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.65) 
            .to(".guide-5 .detail .word, .guide-5 .line .word", {
                opacity: 1,
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.670)
            .to(".guide-5 .detail", {
                opacity: 1,
                duration: 0.15,
                stagger: 0.01,
                ease: "power2.out"
            }, 0.675)
            .to(".guide-5 .detail", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.75)

            .to(".guide-6 .detail .word, .guide-6 .line .word", {
                opacity: () => gsap.utils.random(0, 1),
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.775) 
            .to(".guide-6 .detail .word, .guide-6 .line .word", {
                opacity: 1,
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.795) 
            .to(".guide-6 .detail", {
                opacity: 1,
                duration: 0.15,
                stagger: 0.01,
                ease: "power2.out"
            }, 0.8)
            .to(".guide-6 .detail", {
                opacity: 0,
                duration: 0.15,
                ease: "power2.out"
            }, 0.875)

            .to(".guide-7 .detail .word, .guide-7 .line .word", {
                opacity: () => gsap.utils.random(0, 1),
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.925) 
            .to(".guide-7 .detail .word, .guide-7 .line .word", {
                opacity: 1,
                stagger: 0.01,
                duration: 0.15,
                ease: "power2.out"
            }, 0.945) 
            .to(".guide-7 .detail", {
                opacity: 1,
                duration: 0.15,
                stagger: 0.01,
                ease: "power2.out"
            }, 0.95)

            .to(".fixed-nav .col-1", {
                opacity: 1,
                xPercent: -100,
                duration: 0.1,
                ease: "power2.out"
            })
            .to(".fixed-nav .col-2", {
                opacity: 1,
                xPercent: 100,
                duration: 0.1,
                ease: "power2.out"
            }, "<")
    })

    gsap.matchMedia().add("(max-width: 1023px)", function () {
        $(".guide").each(function () {
            // data-motion="true" 
            $(this).find("[data-motion='true']").each(function () {
                gsap.fromTo($(this), {
                    yPercent: 0,
                    opacity: 0
                }, {
                    yPercent: 20,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: $(this)[0],
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            // data-scale="true" 
            $(this).find("[data-scale='true']").each(function () {
                gsap.fromTo($(this), {
                    scale: 1.2,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: $(this)[0],
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        });
    })

    // sc-size
    gsap.matchMedia().add("(min-width: 768px)", function () {
        gsap.fromTo(".sc-size .bg-group", {
            scale: 2,
        }, { 
            scrollTrigger: {
                trigger: ".sc-size",
                start: "30% 50%",
                end: "100% 100%",
                scrub: true,
                // markers: true, 
                onEnter: () => {
                    $(".sc-size").addClass("bg-effect");
                    $(".sc-size .text-group").addClass("text-effect");
                    $(".sc-size .text-group .btn-add").addClass("btn-effect");
                },
                onLeaveBack: () => {
                    $(".sc-size").removeClass("bg-effect");
                    $(".sc-size .text-group").removeClass("text-effect");
                    $(".sc-size .text-group .btn-add").removeClass("btn-effect");
                },
            },
            scale: 1,
            ease: "none",
        })
    })


    // sc-detail 
    gsap.matchMedia().add("(min-width: 1024px)", function () {
        detailMotion = gsap.timeline({
            scrollTrigger: {
                trigger: ".sc-detail",
                start: "0% 50%",
                end: "100% 100%",
                scrub: true,
                // markers: true,
            },
        })

        detailMotion
            .to(".sc-detail .content-wrapper", {
                scale: 0.75,
                ease: "none"
            })
            .fromTo(".fixed-nav .col-1", {
                    opacity: 0,
                    xPercent: -100
                }, {
                    opacity: 1,
                    xPercent: 0,
                    ease: "ease-in-out"
                },
                "<"
            )
            .fromTo(".fixed-nav .col-2", {
                    opacity: 0,
                    xPercent: 100
                }, {
                    opacity: 1,
                    xPercent: 0,
                    ease: "ease-in-out"
                },
                "<"
            )
    })

    const detailImage = document.querySelector(".sc-detail .bg img");
    const zoomLens = document.querySelector(".sc-detail .zoom-lens");
    const contentWrapper = document.querySelector(".sc-detail .content-wrapper");
    
    detailImage.addEventListener("mousemove", (e) => {
        zoomLens.style.display = 'block';
    
        const rect = detailImage.getBoundingClientRect();
        const wrapperRect = contentWrapper.getBoundingClientRect();
        const scale = 2;
    
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
    
        const lensX = e.clientX - wrapperRect.left;
        const lensY = e.clientY - wrapperRect.top;
    
        zoomLens.style.left = `${lensX}px`;
        zoomLens.style.top = `${lensY}px`;
    
        zoomLens.style.backgroundImage = `url(${detailImage.src})`;
        zoomLens.style.backgroundSize = `${rect.width * scale}px ${rect.height * scale}px`;
        zoomLens.style.backgroundPosition = `-${offsetX * scale - zoomLens.offsetWidth / 2}px -${offsetY * scale - zoomLens.offsetHeight / 2}px`;
    });
    
    detailImage.addEventListener("mouseleave", () => {
        zoomLens.style.display = 'none';
    });

    // footer
    gsap.fromTo("#footer .bg", {
        scale: 1.25
    }, {
        scrollTrigger: {
            trigger: "#footer",
            start: "0% 50%",
            end: "100% 10%",
            scrub: true,
            // markers: true,
        },
        scale: 1,
        ease: "none"
    })
})