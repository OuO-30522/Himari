const defaultCard = {
    image: "imges/C1.png",
    name: "請抽卡",
    desc: "點擊下方按鈕，看看你的運氣如何。",
    luck: ""
};

const cards = [
    {
        name: "☀️ 太陽 Sun",
        image: "imges/C1.png",
        desc: "核心、生命力、主導權。",
        luck: "運氣象徵｜最好｜行動力、自信與結果彼此相互加成。"
    },
    {
        name: "☿ 水星 Mercury",
        image: "imges/C2.png",
        desc: "思考、學習、溝通。",
        luck: "運氣象徵｜偏好｜資訊與機會很多，只要判斷清楚，就能掌握優勢。"
    },
    {
        name: "♀️ 金星 Venus",
        image: "imges/C3.png",
        desc: "愛、美感與價值。",
        luck: "運氣象徵｜好｜人際與情感帶來助力，但需要真誠與平衡。"
    },
    {
        name: "🌍 地球 Earth",
        image: "imges/C4.png",
        desc: "穩定與日常累積。",
        luck: "運氣象徵｜中性｜沒有劇烈起伏，穩定即是力量。"
    },
    {
        name: "♂️ 火星 Mars",
        image: "imges/C5.png",
        desc: "衝動與行動力。",
        luck: "運氣象徵｜偏差｜行動力強，但衝動容易帶來風險。"
    },
    {
        name: "♃ 木星 Jupiter",
        image: "imges/C6.png",
        desc: "擴張與放大。",
        luck: "運氣象徵｜轉弱｜機會變多，但選錯方向，後果也會被放大。"
    },
    {
        name: "♄ 土星 Saturn",
        image: "imges/C7.png",
        desc: "壓力與考驗。",
        luck: "運氣象徵｜較差｜事情進展緩慢，需要付出努力與時間。"
    },
    {
        name: "♅ 天王星 Uranus",
        image: "imges/C8.png",
        desc: "突變與意外。",
        luck: "運氣象徵｜不穩定｜計畫可能被打亂，變化難以預測。"
    },
    {
        name: "♆ 海王星 Neptune",
        image: "imges/C9.png",
        desc: "迷惘與幻想。",
        luck: "運氣象徵｜偏差｜判斷力下降，容易被誤導。"
    },
    {
        name: "♇ 冥王星 Pluto",
        image: "imges/C10.png",
        desc: "突發事件。",
        luck: "運氣象徵｜最不好｜可能發生意料之外的事件，結果無法提前判斷。"
    }
];

function drawCard() {
    const cardImg = document.getElementById("cardImage");
    cardImg.classList.add("flip");

    setTimeout(() => {
        const card = cards[Math.floor(Math.random() * cards.length)];

        cardImg.src = card.image;
        document.getElementById("cardName").textContent = card.name;
        document.getElementById("cardDesc").textContent = card.desc;
        document.getElementById("cardLuck").textContent = card.luck;

        cardImg.classList.remove("flip");
    }, 600);
}

function resetCard() {
    const cardImg = document.getElementById("cardImage");

    // 強制回到卡背
    cardImg.src = "imges/C0.png";

    // 清除動畫狀態（非常重要）
    cardImg.classList.remove("flip");

    document.getElementById("cardName").textContent = "請抽卡";
    document.getElementById("cardDesc").textContent = "點擊下方按鈕，看看你的運氣如何。";
    document.getElementById("cardLuck").textContent = "";

    // 隱藏返回按鈕
    resetBtn.style.display = "none";
}

