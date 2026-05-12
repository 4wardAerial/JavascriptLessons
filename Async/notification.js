export function initBtn() {
    const btn = document.querySelector('[data-btn="noti"]');
    if (!btn) return;

    if (Notification.permission !== 'granted') {
        localStorage.setItem('notifications-enabled', 'false');
    } 
    if (Notification.permission === 'denied') {
        btn.innerText = 'Notificações Bloqueadas';
        btn.disabled = true;
        return;
    }
    let isEnabled = localStorage.getItem('notifications-enabled') === 'true';
    updateInterface();

    btn.addEventListener('click', async () => {
        if (Notification.permission !== 'granted') {
            const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
                alert('Você precisa permitir as notificações no navegador.');
                btn.innerText = 'Notificações Bloqueadas';
                btn.disabled = true;
                return;
            }
        }

        isEnabled = !isEnabled;
        localStorage.setItem('notifications-enabled', isEnabled);
        updateInterface();
    });

    function updateInterface() {
        if (isEnabled && Notification.permission === 'granted') {
            btn.classList.add('active');
            btn.innerText = 'Desativar Notificações';

            clearInterval(notiTimer);
            notiTimer = setInterval(notis, 30000);
        } else {
            btn.classList.remove('active');
            btn.innerText = 'Ativar Notificações';

            clearInterval(notiTimer);
        }
    }
}

export function notis() {
    const notification = new Notification('Notificação irritante kkkkkk');
}

let notiTimer;