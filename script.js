gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.fade-section').forEach(section => {
    const elems = section.querySelectorAll('.fade-in');
    // Set starting params for sections
    gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
    });
    
    ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'bottom 30%',
        markers: true,
        onEnter: () => gsap.to(elems, {
                y: 0,
                opacity: 1,
            }),
        onLeave: () => gsap.to(elems, {
                y: -50,
                opacity: 0,
            }),
        onEnterBack: () => gsap.to(elems, {
                y: 0,
                opacity: 1,
            }),
        onLeaveBack: () => gsap.to(elems, {
                y: 50,
                opacity: 0,
            }),
    });
})