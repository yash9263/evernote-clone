export default function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {func.apply(this, args);}, timeout)
    }
};

export function removeHTML(str) {
    return str.replace(/<[^]*>?/gm, '');
}