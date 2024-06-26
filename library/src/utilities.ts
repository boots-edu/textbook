export function titleCase(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function doFade(target: HTMLElement) {
    target.classList.add("fadeIn");
    target.addEventListener(
        "webkitAnimationEnd",
        () => {
            target.classList.remove("fadeIn");
        },
        true
    );
    target.addEventListener(
        "animationEnd",
        () => {
            target.classList.remove("fadeIn");
        },
        true
    );
}