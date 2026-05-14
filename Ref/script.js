const btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    const permission = await window.Notification.requestPermission();
    if (permission === 'denied') {
        console.log('Permission was denied!');
    } else if (permission === 'granted') {
        console.log('Permission was given!');
    }
});

if ('Notification' in window) {
    if (window.Notification.permission === 'granted') {
        new window.Notification('Test Notification');
    }
}