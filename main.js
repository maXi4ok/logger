let logHistory = JSON.parse(localStorage.getItem('history')) || [];
let normalDate = new Date();
let date = normalDate.toLocaleString();
let userInfo = navigator.userAgent;
let cancelRedirect = false;
        
if (logHistory.length > 50) {
    logHistory.shift();
};

logHistory.push({date, userInfo});
localStorage.setItem('history', JSON.stringify(logHistory));
window.addEventListener('keydown', function (ev) {
    if (ev.altKey && ev.key === 'F7') {
        cancelRedirect = true;
    }
});
setTimeout(() => {
    if (!cancelRedirect) {
        window.location.href = "https://google.com";
    } 
}, 1500);