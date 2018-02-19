const validScrollDepths = [
    25,
    50,
    75,
    100
]

const throttle = (callback, threshhold = 250) => {
    let last
    let deferTimer
    
    return (...args) => {
        const now = Date.now()

        if (last && now < last + threshhold) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(() => {
                last = now
                callback(...args)
            }, threshhold)
        }
        else {
            last = now
            callback(...args)
        }
    }
}

const getPercentageScrolled = () => {
    const scrollHeight = Math.round(window.scrollY)
    const bodyHeight = Math.round(document.body.clientHeight - window.innerHeight)

    return Math.round((scrollHeight / bodyHeight) * 100)
}

const getScrollDepth = percentageScrolled => {
    for (let i = 0; i < validScrollDepths.length; i++) {
        const depth = validScrollDepths[i]

        if (percentageScrolled >= depth) {
            validScrollDepths.splice(i, 1)
            return depth
        }
    }
    return false
}

const windowScrollHandler = callback => {
    const scrollDepth = getPercentageScrolled()
    const depth = getScrollDepth(scrollDepth)

    if (depth) {
        callback(depth)
    }
}

const onScrollDepth = callback => {
    const throttledInstance = throttle(() => windowScrollHandler(callback), 50)

    window.onscroll = () => throttledInstance()
}

onScrollDepth(depth => console.log(`You\'re at ${depth}% of the page`))