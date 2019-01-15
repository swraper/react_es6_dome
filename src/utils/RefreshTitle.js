function refreshTitle (title) {
    if (!title) return;
    document.title = title;
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
        const iframe = document.createElement('iframe');
        iframe.src = '../assets/images/favicon.ico';
        iframe.style.display = 'none';
        iframe.onload = () => {
            setTimeout(() => {
                iframe.remove();
            }, 9);
        };
        document.body.appendChild(iframe);
    }
}

export default refreshTitle;
