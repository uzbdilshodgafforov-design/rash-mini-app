function hideAll() {
    document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
}

function openTeacher() {
    hideAll();
    document.getElementById('teacher').classList.remove('hidden');
}

function openStudent() {
    hideAll();
    document.getElementById('student').classList.remove('hidden');
}

function openGuide() {
    hideAll();
    document.getElementById('guide').classList.remove('hidden');
}

const testDiv = document.getElementById('tests');

for (let i = 1; i <= 40; i++) {
    let q = document.createElement('div');
    q.innerHTML = `
        <p>${i}-savol</p>
        <label><input type="radio" name="q${i}" value="A"> A</label>
        <label><input type="radio" name="q${i}" value="B"> B</label>
        <label><input type="radio" name="q${i}" value="C"> C</label>
        <label><input type="radio" name="q${i}" value="D"> D</label>
    `;
    testDiv.appendChild(q);
}
