const tarotCards = [
    { name: "愚者", number: "0", icon: "🃏", meaning: "新的开始、冒险、纯真、自由。你正站在新的起点，充满无限可能。放下恐惧，信任你的直觉，勇敢地迈出第一步。" },
    { name: "魔术师", number: "I", icon: "🎭", meaning: "创造力、技能、意志力、行动力。你拥有实现目标所需的所有资源和能力。现在是展现你才华的最佳时机。" },
    { name: "女祭司", number: "II", icon: "🌙", meaning: "直觉、潜意识、神秘、智慧。倾听内心的声音，相信你的直觉。答案隐藏在表面之下，需要静心去发现。" },
    { name: "皇后", number: "III", icon: "👑", meaning: "丰饶、母性、创造力、自然。像大地母亲一样，你拥有创造和孕育的能力。享受生活中的美好，培养你的创造力。" },
    { name: "皇帝", number: "IV", icon: "🦁", meaning: "权威、结构、控制、领导力。建立秩序和规则，承担责任。运用你的领导力，创造稳定的环境。" },
    { name: "教皇", number: "V", icon: "📿", meaning: "传统、信仰、指引、智慧。寻求智慧的指引，尊重传统和经验。在导师的帮助下，找到你的人生方向。" },
    { name: "恋人", number: "VI", icon: "💕", meaning: "爱、关系、选择、和谐。你面临着重要的选择，跟随你的心去决定。无论选择哪条路，都要承担相应的责任。" },
    { name: "战车", number: "VII", icon: "⚔️", meaning: "胜利、意志力、决心、行动。通过坚定的意志和努力，你将获得成功。保持专注，克服一切障碍。" },
    { name: "力量", number: "VIII", icon: "🦋", meaning: "勇气、耐心、同情、内在力量。真正的力量来自内心的平静和坚持。用温柔和智慧化解冲突。" },
    { name: "隐士", number: "IX", icon: "🏔️", meaning: "内省、智慧、孤独、指引。在宁静中寻找答案，通过内省获得深刻的洞察。暂时的孤独是必要的。" },
    { name: "命运之轮", number: "X", icon: "🎡", meaning: "命运、周期、变化、转折。生活充满了起伏，接受命运带来的变化。每个结束都是新的开始。" },
    { name: "正义", number: "XI", icon: "⚖️", meaning: "公平、真相、因果、平衡。你的行为会产生相应的后果。寻求真相，做出公正的判断。" },
    { name: "倒吊人", number: "XII", icon: "🙃", meaning: "牺牲、新视角、等待、放下。有时候我们需要暂停，以全新的视角看待问题。放下执念，让事情自然发展。" },
    { name: "死神", number: "XIII", icon: "💀", meaning: "结束、转变、重生、释放。某事物的结束是另一些事物的开始。拥抱变化，让过去成为过去。" },
    { name: "节制", number: "XIV", icon: "🌈", meaning: "平衡、耐心、适度、和谐。寻找生活的平衡点，不要过度。耐心和适度将带给你长久的幸福。" },
    { name: "恶魔", number: "XV", icon: "😈", meaning: "束缚、欲望、物质、成瘾。你被某些东西束缚着，可能是欲望、恐惧或习惯。认识到这些束缚，寻找自由。" },
    { name: "高塔", number: "XVI", icon: "⚡", meaning: "突变、灾难、启示、重建。突如其来的变化打破了旧的结构。虽然痛苦，但这可能是必要的成长。" },
    { name: "星星", number: "XVII", icon: "⭐", meaning: "希望、灵感、平静、治愈。黑暗之后总会有光明。保持希望，相信美好的未来即将到来。" },
    { name: "月亮", number: "XVIII", icon: "🌙", meaning: "幻象、恐惧、直觉、潜意识。事情并不像表面看起来那样。相信你的直觉，不要被幻象迷惑。" },
    { name: "太阳", number: "XIX", icon: "☀️", meaning: "快乐、成功、活力、清晰。这是一个非常积极的牌，预示着幸福和成功。享受这美好的时光。" },
    { name: "审判", number: "XX", icon: "📯", meaning: "重生、觉醒、决定、召唤。是时候做出重要的决定了。倾听内心的召唤，迎接新的开始。" },
    { name: "世界", number: "XXI", icon: "🌍", meaning: "完成、成就、圆满、新循环。一个重要的阶段已经完成，你取得了巨大的成就。准备迎接新的旅程吧！" }
];

function drawCards() {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}

function createCardElement(cardData, index) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const front = document.createElement('div');
    front.className = 'card-face card-front';
    
    const back = document.createElement('div');
    back.className = 'card-face card-back';
    
    // 分开写入，避免模板字符串问题
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    cardImage.textContent = cardData.icon;
    
    const cardName = document.createElement('div');
    cardName.className = 'card-name';
    cardName.textContent = cardData.name;
    
    const cardNumber = document.createElement('div');
    cardNumber.className = 'card-number';
    cardNumber.textContent = cardData.number;
    
    const cardMeaning = document.createElement('div');
    cardMeaning.className = 'card-meaning';
    cardMeaning.textContent = cardData.meaning;
    
    back.appendChild(cardImage);
    back.appendChild(cardName);
    back.appendChild(cardNumber);
    back.appendChild(cardMeaning);
    
    card.appendChild(front);
    card.appendChild(back);
    
    return card;
}

function displayReading(cards) {
    const readingSection = document.getElementById('readingSection');
    const readingContent = document.getElementById('readingContent');
    const positions = ['过去', '现在', '未来'];
    
    let html = '';

 <div class="card-image">${cardData.icon}</div><div class="card-name">${cardData.name}</div><div class="card-number">${cardData.number}</div><div class="card-meaning">${cardData.meaning}</div>; 这行报错
cards.forEach((card, index) => {
html += '<div class="reading-card">';
html += '<h3>' + positions[index] + ' - ' + card.name + ' (' + card.number + ')</h3>';
html += '<p>' + card.meaning + '</p>';
html += '</div>';
});
html += '<div class="reading-card" style="border-left-color: #f4d03f;">';
html += '<h3>🌟 综合解读</h3>';
html += '<p>这三张牌揭示了你的生命旅程。' + cards[0].name + '代表了过去，' + cards[1].name + '反映了现在，' + cards[2].name + '指向未来的可能性。记住，塔罗牌是帮助你认识自我的镜子，而非宿命的预言。</p>';
html += '</div>';
readingContent.innerHTML = html;
readingSection.style.display = 'block';
setTimeout(function() {
    readingSection.scrollIntoView({ behavior: 'smooth' });
}, 2000);
}

async function performReading() {
const drawBtn = document.getElementById('drawBtn');
const slots = [
document.getElementById('slot1'),
document.getElementById('slot2'),
document.getElementById('slot3')
];
drawBtn.disabled = true;
drawBtn.style.opacity = '0.7';
document.getElementById('readingContent').innerHTML = '';
document.getElementById('readingSection').style.display = 'none';
slots.forEach(function(slot) {
    slot.innerHTML = '<div class="card-placeholder"><span class="placeholder-icon">?</span><span class="placeholder-text">抽牌中...</span></div>';
});
await new Promise(function(r) { setTimeout(r, 500); });
const drawnCards = drawCards();
for (let i = 0; i < 3; i++) {
    await new Promise(function(r) { setTimeout(r, 800); });
    
    const cardElement = createCardElement(drawnCards[i], i);
    slots[i].innerHTML = '';
    slots[i].appendChild(cardElement);
    
    await new Promise(function(r) { setTimeout(r, 300); });
    cardElement.classList.add('flipped');
    
    await new Promise(function(r) { setTimeout(r, 800); });
}
await new Promise(function(r) { setTimeout(r, 500); });
displayReading(drawnCards);
drawBtn.disabled = false;
drawBtn.style.opacity = '1';
drawBtn.querySelector('.btn-text').textContent = '再次抽取';
}

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('drawBtn').addEventListener('click', performReading);
document.addEventListener('click', function(e) {
    const card = e.target.closest('.card');
    if (card) {
        card.classList.toggle('flipped');
    }
});
});
