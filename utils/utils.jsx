export const riseWithFade = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            easeInOut : [0.6, 0.01, 0.05, 0.95],
            duration: 1,

        }
    }
}


export const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        }
    }
}