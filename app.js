// ดึง HTML Elements
const heroGrid = document.getElementById('heroGrid');
const searchInput = document.getElementById('searchInput');
const elementFilter = document.getElementById('elementFilter');
const modal = document.getElementById('heroModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

// ฟังก์ชันสร้างการ์ดแสดงผลตัวละคร
function renderHeroes(heroes) {
    heroGrid.innerHTML = '';
    
    if (heroes.length === 0) {
        heroGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">ไม่พบข้อมูลตัวละคร</p>';
        return;
    }

    heroes.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.onclick = () => openModal(hero);

        card.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}">
            <h3>${hero.name}</h3>
            <div>
                <span class="badge">${hero.element}</span>
                <span class="badge">${hero.role}</span>
            </div>
        `;
        heroGrid.appendChild(card);
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

// ฟังก์ชันเปิด Modal แสดงรายละเอียด
function openModal(hero) {
    let skillsHTML = hero.skills.map(skill => `
        <div style="margin-top: 0.8rem; background: #1f1f1f; padding: 0.5rem; border-radius: 4px;">
            <strong style="color: #ffd700;">[${skill.type}] ${skill.name}</strong>
            <p style="margin: 0.3rem 0 0 0; font-size: 0.9rem;">${skill.desc}</p>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <h2 style="color: #ffd700; margin-top: 0;">${hero.name}</h2>
        <p><strong>ธาตุ:</strong> ${hero.element} | <strong>สาย:</strong> ${hero.role}</p>
        <p>${hero.description}</p>
        <h3>สกิลตัวละคร</h3>
        ${skillsHTML}
    `;
    modal.style.display = 'flex';
}

// Event Listeners
searchInput.addEventListener('input', filterHeroes);
elementFilter.addEventListener('change', filterHeroes);
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// โหลดข้อมูลครั้งแรกเมื่อเปิดหน้าเว็บ
renderHeroes(heroesData);