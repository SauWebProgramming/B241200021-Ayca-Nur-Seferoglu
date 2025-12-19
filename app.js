const container = document.getElementById('movieContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const modal = document.getElementById('movieModal');
const closeModal = document.querySelector('.close-btn');
const pageTitle = document.getElementById('pageTitle');
const favCountSpan = document.getElementById('favCount');

// Navigasyon Butonları
const homeBtn = document.getElementById('homeBtn');
const favBtn = document.getElementById('favBtn');
// YENİ: Temizle butonu
const clearFavBtn = document.getElementById('clearFavBtn');

let allMovies = [];
let favorites = JSON.parse(localStorage.getItem('myFavorites')) || []; // LocalStorage'dan oku

// 1. Verileri Çek
async function getMovies() {
    try {
        const response = await fetch('movies.json');
        allMovies = await response.json();
        renderMovies(allMovies);
        updateFavCount();
    } catch (error) {
        console.error('Veri hatası:', error);
    }
}

// 2. Ekrana Basma (Kart Oluşturma)
function renderMovies(movies) {
    container.innerHTML = movies.map(movie => `
        <div class="card" onclick="openModal(${movie.id})">
            <span class="rating">${movie.rating}</span>
            <img src="${movie.image}" alt="${movie.title}">
            <div class="card-info">
                <h3>${movie.title}</h3>
                <p>${movie.category} • ${movie.year}</p>
            </div>
        </div>
    `).join('');

    if(movies.length === 0) {
        container.innerHTML = '<p style="color:white; text-align:center;">Henüz listeniz boş.</p>';
    }
}

// 3. Arama ve Filtreleme
function filterMovies() {
    const term = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;

    const sourceList = favBtn.classList.contains('active') 
        ? allMovies.filter(m => favorites.includes(m.id)) 
        : allMovies;

    const filtered = sourceList.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(term);
        const matchesCategory = cat === 'all' || m.category.includes(cat);
        return matchesSearch && matchesCategory;
    });

    renderMovies(filtered);
}

// 4. Detay Modalı
window.openModal = (id) => {
    const movie = allMovies.find(m => m.id === id);
    if(!movie) return;

    document.getElementById('modalImage').src = movie.image;
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalYear').innerText = movie.year;
    document.getElementById('modalRating').innerText = movie.rating;
    document.getElementById('modalCategory').innerText = movie.category;
    document.getElementById('modalDesc').innerText = movie.desc;
    document.getElementById('modalCast').innerText = movie.cast;

    const modalFavBtn = document.getElementById('modalFavBtn');
    updateModalFavButton(id);
    
    modalFavBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(id);
        updateModalFavButton(id);
        
        if(favBtn.classList.contains('active')) {
            showFavorites(); 
        }
    };

    modal.style.display = 'flex';
};

// Favori Ekle/Çıkar
function toggleFavorite(id) {
    if(favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('myFavorites', JSON.stringify(favorites));
    updateFavCount();
    
    // Eğer favoriler sayfasındaysak ve liste boşaldıysa butonu gizle
    if(favBtn.classList.contains('active')) {
         // Eğer son favoriyi sildiysek butonu gizle
         if(favorites.length === 0) {
             clearFavBtn.style.display = 'none';
         }
    }
}

// YENİ: Tüm Favorileri Silme Fonksiyonu
clearFavBtn.addEventListener('click', () => {
    if(confirm("Tüm favorilerinizi silmek istediğinize emin misiniz?")) {
        favorites = []; // Listeyi boşalt
        localStorage.setItem('myFavorites', JSON.stringify(favorites)); // Hafızayı temizle
        updateFavCount(); // Sayacı güncelle
        showFavorites(); // Ekranı yenile
    }
});

function updateModalFavButton(id) {
    const btn = document.getElementById('modalFavBtn');
    if(favorites.includes(id)) {
        btn.innerHTML = '<i class="fa-solid fa-heart"></i> Favorilerden Çıkar';
        btn.classList.add('added');
    } else {
        btn.innerHTML = '<i class="fa-regular fa-heart"></i> Favorilere Ekle';
        btn.classList.remove('added');
    }
}

function updateFavCount() {
    favCountSpan.innerText = `(${favorites.length})`;
}

// Sayfa Geçişleri
function showHome() {
    homeBtn.classList.add('active');
    favBtn.classList.remove('active');
    pageTitle.innerText = "Tüm İçerikler";
    categoryFilter.value = 'all';
    searchInput.value = '';
    
    // Ana sayfada temizle butonunu gizle
    clearFavBtn.style.display = 'none';
    
    renderMovies(allMovies);
}

function showFavorites() {
    homeBtn.classList.remove('active');
    favBtn.classList.add('active');
    pageTitle.innerText = "Favorilerim";
    
    // Eğer favori varsa butonu göster, yoksa gizle
    if(favorites.length > 0) {
        clearFavBtn.style.display = 'flex';
    } else {
        clearFavBtn.style.display = 'none';
    }
    
    const favMovies = allMovies.filter(movie => favorites.includes(movie.id));
    renderMovies(favMovies);
}

searchInput.addEventListener('input', filterMovies);
categoryFilter.addEventListener('change', filterMovies);
homeBtn.addEventListener('click', showHome);
favBtn.addEventListener('click', showFavorites);
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

getMovies();
