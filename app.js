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
    content.innerHTML = "<p>O‘quvchi bo‘limi</p>";
}

function openGuide() {
    content.innerHTML = "<p>Qo‘llanma</p>";
}

