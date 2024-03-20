const febHolidays = [
    "Dear samiya,",
    "First of all, I love you❤️",
    "MOJI JAAAAAAN YAAAR TUU ",
    "MOJI FUTURE PARTNER YAAR TU ",
    "ANI HA BETA ...",
    "MOJI SHANE SHANE CHADWA CHI MAMA TU🤭",
    "BHEW NAKKHA HAMESHA WATEY ME ",
    "TU JE SRN ALLAH CHALAN PUJE KHALI",
    "FARAK KS PAD NAI AMI KETLE KO DHOUR RAWO 🥰",
    "MOJI SHAANI SHAANI PANDA TU KS RATALI BETI ,",
    "SRF MOJI.... MOJI KS NOI?",
    "AP MERE LIYE FADU HO FADU 😍",
    "MOJE ISLO MILU CHE NAI TU KA BIJI 🥰",
    "KUSHNASIB ME JO MAKA TU MILLI❤️",
    "I'll always do my best to keep you ANGRY HEHEHEHE🥺",
    "I don't want to lose you",
    "ANI BHAROSA BHRAW MAKAA TU JE ALAWA ",
    " KON YOU KO NAKKHA ",
    "HI DUNYA BTTR TU JE PUSUN BATTER ",
    "KON UH EXIST KS KR NI",
    "You're the best baby!! MUNNI ",
    "TU JI TI SMILLE UPPR FIDHA WATEY YAAR ME!",
    "AP KI WO AWAZ ",
    "AP KI WO PIYARI PIYARI BINA LOGIC KI BATE ,",
    "HEYYYYYYYYYYYYYYY",
    "AILI AILI HE DIL KS APLE NAWR KAILI YAAR TU ❤️",
    "This for you,",
    "TU HI MERI JAAAN HEI ",
    "TU HI MRI JAHAAN HEY ",
    "TU HI HAI SAB KUCH MERA❤️",
    "ADHOORA TERE DIN DIL YE MERA ",
    "TU KYU SAMAJTI NAHI YE DIL HE SIRF TEREAAAA",
    "SAMIYAA MOJI JAAAN",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });