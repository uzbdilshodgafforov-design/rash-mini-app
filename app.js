const tg = window.Telegram.WebApp;
tg.expand();

const content = document.getElementById("content");

function openTeacher() {
    content.innerHTML = `
        <h3>👨‍🏫 O‘qituvchi bo‘limi</h3>
        <p>Evalbee Excel faylini yuklash uchun tugmani bosing</p>
        <button onclick="requestExcel()">📂 Excel yuklash</button>
    `;
}

function requestExcel() {
    tg.sendData(JSON.stringify({
        action: "upload_excel"
    }));
}


function openStudent() {
    content.innerHTML = `
        <h3>👨‍🎓 O‘quvchi bo‘limi</h3>
        <p>Bu yerda testlar bo‘ladi</p>
        <p>(40 ta A/B/C/D + 5 ta yozma)</p>
    `;
}

function openGuide() {
    content.innerHTML = `
        <h3>📘 Qo‘llanma</h3>
        <p>Bu bo‘limga keyin video joylanadi</p>
    `;
}

