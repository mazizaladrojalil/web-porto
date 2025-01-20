const portoCardAnimation = {
    hidden: {
        opacity: 0,
        y: 150,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        delay: 0.8,
        duration: 1.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
}

const portoCardImageAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
        delay: 1.4,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
}

const portoCardDescriptionAnimation = {
    hidden: {
        filter: "blur(10px)",
        opacity: 0,
    },
    visible: {
        filter: "blur(0px)",
        opacity: 1,
        transition: {
        delay: 1.8,
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
}

export {portoCardAnimation, portoCardImageAnimation, portoCardDescriptionAnimation}