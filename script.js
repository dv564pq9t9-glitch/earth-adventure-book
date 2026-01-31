const articles = [
    {
        title: "🌏 私がnoteを始めた理由",
        url: "https://note.com/ozone_note369/n/n21529e57d03c",
        image: "assets/article1.png",
        likes: 82,
        summary: "疑わしい情報から離れ、ネット上で「愛と自由」を体現するための実践記録。"
    },
    {
        title: "あなたは何のためにnoteを始めた？",
        url: "https://note.com/ozone_note369/n/n6da555c6137e",
        image: "assets/article2.png",
        likes: 80,
        summary: "デジタル世界での「北極星」を見つけ、自分の物語を共有する真の動機を探る。"
    },
    {
        title: "自己紹介|ワーホリ6年|猫|🇦🇺|AIと共に生きる",
        url: "https://note.com/ozone_note369/n/n2eb63068a2fc",
        image: "assets/article3.png",
        likes: 28,
        summary: "海外生活7年、猫との暮らし、そしてAIとの共生。私の人生の全貌。"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('articles-grid');
    
    // Add scroll listener for navbar or other effects if needed
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Parallax effect for hero
        const hero = document.querySelector('.hero');
        const bg = document.querySelector('.world-bg');
        if (bg) {
            bg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Render articles
    articles.forEach((article, index) => {
        const card = document.createElement('a');
        card.href = article.url;
        card.className = 'article-card';
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        
        // Staggered animation delay
        card.style.animation = `fadeIn 0.5s ease-out ${index * 0.2}s backwards`;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${article.image}" alt="${article.title}" class="card-image">
            </div>
            <div class="card-content">
                <h3 class="card-title">${article.title}</h3>
                <p class="card-summary">${article.summary}</p>
                <div class="card-footer">
                    <span class="read-more">冒険の書を読む ➡</span>
                    <span class="like-count">♥ ${article.likes}</span>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
});
