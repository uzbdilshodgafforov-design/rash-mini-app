const tg = window.Telegram.WebApp;
tg.expand();

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    document.getElementById("btn-teacher").addEventListener("click", () => {
        content.innerHTML = `
            <h3>👨‍🏫 O‘qituvchi bo‘limi</h3>
            <p>Evalbee Excel faylini yuklash uchun tugmani bosing</p>
            <button id="uploadExcel">📂 Excel yuklash</button>
        `;

        document.getElementById("uploadExcel").addEventListener("click", () => {
            tg.sendData(JSON.stringify({
                action: "upload_excel"
            }));
        });
    });

    document.getElementById("btn-student").addEventListener("click", () => {
        content.innerHTML = "<h3>👨‍🎓 O‘quvchi bo‘limi</h3>";
    });

    document.getElementById("btn-guide").addEventListener("click", () => {
        content.innerHTML = "<h3>📘 Qo‘llanma</h3><p>Keyin video qo‘shiladi</p>";
    });
});
