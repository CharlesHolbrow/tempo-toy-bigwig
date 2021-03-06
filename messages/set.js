/**
 * @param {Number} loopStart - set the loop start to this beat within the clip.
 * @param {Number} loopLength - set the loop length in beats.
 */
const launcherClipLoop = function(loopStart, loopLength) {
    return {
        address: '/launcher/selected-clip/set-loop',
        args: [
            {
                type: 'f',
                value: loopStart,
            },{
                type: 'f',
                value: loopLength,
            },
        ],
    }
}

/**
 * @param {Number} clipStart - set clip start time. value is in beats
 */
const launcherClipStart = function(clipStart) {
    return {
        address: '/launcher/selected-clip/set-start',
        args: [
            {
                type: 'f',
                value: clipStart,
            },
        ],
    }
}

module.exports = {
    launcherClipLoop,
    launcherClipStart,
}
