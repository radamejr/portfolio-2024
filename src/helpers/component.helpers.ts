export const handleClick = (url: string, email?: boolean) => {
    window.open(url, email ? '_self' : "_blank");
};