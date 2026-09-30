// ดึง HTML Elements
const heroGrid = document.getElementById('heroGrid');
const searchInput = document.getElementById('searchInput');
const elementFilter = document.getElementById('elementFilter');

// เรียกใช้ Modal Controller ของ Bootstrap 5
const heroModalElement = document.getElementById('heroModal');
const bsModal = new bootstrap.Modal(heroModalElement);

// ฟังก์ชันสร้างการ์ดแสดงผลตัวละคร
function renderHeroes(heroes) {
    heroGrid.innerHTML = '';
    
    if (heroes.length === 0) {
        heroGrid.innerHTML = `
            <div class="col-12 text-center text-muted py-5">
                <h4>ไม่พบข้อมูลตัวละครที่ค้นหา</h4>
            </div>`;
        return;
    }

    heroes.forEach(hero => {
        const col = document.createElement('div');
        col.className = 'col';
        col.onclick = () => openModal(hero);

        // เลือกสี Badge ตามประเภทธาตุ
        let elementBadgeColor = 'bg-secondary';
        if (hero.element === 'Light') elementBadgeColor = 'bg-warning text-dark';
        if (hero.element === 'Fire') elementBadgeColor = 'bg-danger';
        if (hero.element === 'Dark') elementBadgeColor = 'bg-dark border border-light';

        col.innerHTML = `
            <div class="card bg-secondary bg-gradient text-light h-100 border-0 shadow-sm hero-card">
                <img src="${hero.image}" class="card-img-top p-2 rounded" alt="${hero.name}">
                <div class="card-body text-center">
                    <h5 class="card-title text-warning fw-bold mb-2">${hero.name}</h5>
                    <div class="d-flex justify-content-center gap-1">
                        <span class="badge ${elementBadgeColor}">${hero.element}</span>
                        <span class="badge bg-info text-dark">${hero.role}</span>
                    </div>
                </div>
            </div>
        `;
        heroGrid.appendChild(col);
    });
}

// ฟังก์ชันค้นหาและกรองข้อมูล
function filterHeroes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedElement = elementFilter.value;

    const filtered = heroesData.filter(hero => {
        const matchesName = hero.name.toLowerCase().includes(searchTerm);
        const matchesElement = selectedElement === 'All' || hero.element === selectedElement;
        return matchesName && matchesElement;
    });

    renderHeroes(filtered);
}

// ฟังก์ชันเปิด Modal แสดงรายละเอียดตัวละครและสกิล
function openModal(hero) {
    document.getElementById('modalHeroName').innerText = hero.name;

    let skillsHTML = hero.skills.map(skill => `
        <div class="p-3 mb-2 skill-box rounded">
            <div class="d-flex justify-content-between align-items-center mb-1">
                <strong class="text-warning">${skill.name}</strong>
                <span class="badge bg-outline-light border">${skill.type}</span>
            </div>
            <p class="m-0 small text-light-50">${skill.desc}</p>
        </div>
    `).join('');

    document.getElementById('modalBody').innerHTML = `
        <div class="text-center mb-3">
            <img src="${hero.image}" class="img-fluid rounded border border-warning" style="max-height: 180px;">
        </div>
        <p class="mb-1"><strong>ธาตุ:</strong> ${hero.element} | <strong>สาย:</strong> ${hero.role}</p>
        <p class="small text-light-50 mb-3">${hero.description}</p>
        <h6 class="text-info fw-bold mb-2">รายละเอียดสกิล</h6>
        ${skillsHTML}
    `;

    bsModal.show(); // เปิด Pop-up Modal ของ Bootstrap
}

// Event Listeners สำหรับระบบค้นหา
searchInput.addEventListener('input', filterHeroes);
elementFilter.addEventListener('change', filterHeroes);

// แสดงผลครั้งแรกเมื่อเปิดเว็บ
renderHeroes(heroesData);