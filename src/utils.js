export function normalizeNumToString(num) {
    if (typeof num !== 'number') return '';
    return num > 9 ? num : '0' + num;
}

export function getSeconds(seconds) {
    return normalizeNumToString(seconds % 60);
}

export function getMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const result = minutes >= 60 ? minutes % 60 : minutes;
    return normalizeNumToString(result);
}

export function getHours(seconds) {
    return normalizeNumToString(Math.floor(seconds / 3600));
}