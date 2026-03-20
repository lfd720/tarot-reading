const tarotCards = [
    {
        name: "愚者",
        number: "0",
        icon: "🃏",
        meaning: "新的开始、冒险、纯真、自由。你正站在新的起点，充满无限可能。放下恐惧，信任你的直觉，勇敢地迈出第一步。",
        position: "过去"
    },
    {
        name: "魔术师",
        number: "I",
        icon: "🎭",
        meaning: "创造力、技能、意志力、行动力。你拥有实现目标所需的所有资源和能力。现在是展现你才华的最佳时机。",
        position: "现在"
    },
    // ... (共 22 张牌)
];

// 抽牌功能
function drawCards() {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    return selected;
}
