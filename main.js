let normalDate = new Date();
let date = normalDate.toLocaleString();
let userInfo = navigator.userAgent;
let userLanguage = navigator.language;
let hasCanceledRedirect = false;

window.addEventListener('keydown', function (ev) {
    if (ev.altKey && ev.key === 'F7') {
        hasCanceledRedirect = true;
    }
});

let logHistory = JSON.parse(localStorage.getItem('history')) || [];

if (logHistory.length > 50) {
    logHistory.shift();
};

logHistory.push({date, userInfo, userLanguage});
localStorage.setItem('history', JSON.stringify(logHistory));

setTimeout(() => {
    if (!hasCanceledRedirect) {
        window.location.href = "https://google.com";
    } 
}, 1500);