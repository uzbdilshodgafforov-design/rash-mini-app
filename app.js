document.addEventListener("DOMContentLoaded", function () {

    const content = document.getElementById("content");

    const teacherBtn = document.getElementById("teacherBtn");
    const studentBtn = document.getElementById("studentBtn");
    const guideBtn = document.getElementById("guideBtn");

    teacherBtn.addEventListener("click", function () {
        content.innerHTML = `
            <h3>👨‍🏫 O‘qituvchi bo‘limi</h3>
            <p>Evalbee Excel faylini yuklang</p>
            <button id="excelBtn">📂 Excel yuklash</button>
        `;
    });

    studentBtn.addEventListener("click", function () {
        content.innerHTML = `
            <h3>👨‍🎓 O‘quvchi bo‘limi</h3>
            <p>Bu yerda test ishlanadi</p>
        `;
    });

    guideBtn.addEventListener("click", function () {
        content.innerHTML = `
            <h3>📘 Qo‘llanma</h3>
            <p>Bu yerga keyin video qo‘shiladi</p>
        `;
    });

});
