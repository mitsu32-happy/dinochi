// zukan.js
// フォルダ構成：
//   bgm/bgm_zukan.mp3
//   se/click.mp3, se/open.mp3
//   img/dinos/◯◯idle.png
//   img/ui/bg_stone.jpg

(() => {
  const STORAGE_KEY = "zukan_dino_state_v1";

  // BGM / SE
  const bgm = new Audio("bgm/bgm_zukan.mp3");
  bgm.loop = true;
  bgm.volume = 0.4;

  const seClick = new Audio("se/click.mp3");
  const seOpen = new Audio("se/open.mp3");

  function playSE(audio) {
    try {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch (e) {
      console.warn(e);
    }
  }

  // カテゴリ推定
  function getCategory(d) {
    if (d.isOriginal) return "original";
    if (d.group && d.group.includes("海棲爬虫類")) return "marine";
    if (d.group && d.group.includes("原始恐竜")) return "primitive";

    const cls = d.classification || "";
    const grp = d.group || "";

    if (cls.includes("獣脚") || grp.includes("獣脚類")) return "theropod";
    if (cls.includes("竜脚")) return "sauropod";
    if (cls.includes("鳥脚")) return "ornithopod";
    if (cls.includes("角竜")) return "ceratopsia";
    if (cls.includes("鎧竜") || cls.includes("剣竜") || grp.includes("鎧竜・剣竜"))
      return "armored";
    if (cls.includes("翼竜")) return "pterosaur";
    if (
      cls.includes("首長竜") ||
      cls.includes("魚竜") ||
      cls.includes("古代魚") ||
      cls.includes("古生代") ||
      cls.includes("単弓類") ||
      cls.includes("海棲カメ")
    )
      return "marine";
    if (cls.includes("原始") || cls.includes("初期")) return "primitive";

    return "theropod";
  }

  // ステート復元
  function loadState() {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return;
    try {
      const arr = JSON.parse(json);
      const map = new Map(arr.map((x) => [x.id, x]));
      DINOS_ALL.forEach((d) => {
        const s = map.get(d.id);
        if (s) {
          d.owned = !!s.owned;
          d.raised = !!s.raised;
        }
      });
    } catch (e) {
      console.warn("state load error", e);
    }
  }

  function saveState() {
    const arr = DINOS_ALL.map((d) => ({
      id: d.id,
      owned: !!d.owned,
      raised: !!d.raised,
    }));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (e) {
      console.warn("state save error", e);
    }
  }

  // フィルタ状態
  let currentCategory = "all";
  let currentRarity = "all";

  // 初期化
  window.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupFilters();
    setupDebug();
    setupBgmUi();
    setupDetailUi();
    renderGrid();
  });

  function setupFilters() {
    const categoryRoot = document.getElementById("categoryFilter");
    const rarityRoot = document.getElementById("rarityFilter");

    categoryRoot.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-category]");
      if (!btn) return;
      currentCategory = btn.dataset.category;
      [...categoryRoot.querySelectorAll(".chip")].forEach((b) =>
        b.classList.toggle("chip-active", b === btn)
      );
      playSE(seClick);
      renderGrid();
    });

    rarityRoot.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-rarity]");
      if (!btn) return;
      currentRarity = btn.dataset.rarity;
      [...rarityRoot.querySelectorAll(".chip")].forEach((b) =>
        b.classList.toggle("chip-active", b === btn)
      );
      playSE(seClick);
      renderGrid();
    });
  }

  function passesFilters(d) {
    // category
    if (currentCategory !== "all") {
      if (getCategory(d) !== currentCategory) return false;
    }
    // rarity
    if (currentRarity !== "all") {
      if (d.rarity !== currentRarity) return false;
    }
    return true;
  }

  function renderGrid() {
    const root = document.getElementById("zukanGrid");
    root.innerHTML = "";

    DINOS_ALL.forEach((d) => {
      if (!passesFilters(d)) return;

      const encountered = d.owned || d.raised;

      const card = document.createElement("div");
      card.className = `zukan-card card-rarity-${d.rarity}${
        encountered ? "" : " card-unknown"
      }`;
      card.dataset.id = d.id;

      const rarityStars =
        d.rarity === "N"
          ? "★"
          : d.rarity === "R"
          ? "★★"
          : d.rarity === "SR"
          ? "★★★"
          : d.rarity === "UR"
          ? "★★★★"
          : "★★★★★";

      card.innerHTML = `
        <div class="card-rarity-badge">
          <span class="card-rarity-stars">${rarityStars}</span>
          <span> ${d.rarity}</span>
        </div>
        <div class="zukan-card-image-wrapper">
          <img class="zukan-card-image"
               src="${encountered ? d.image : "img/ui/unknown_silhouette.png"}"
               alt="${encountered ? d.name : "UNKNOWN"}">
        </div>
        <div class="zukan-card-name">${
          encountered ? d.name : "UNKNOWN"
        }</div>
        <div class="zukan-card-sub">${
          encountered ? d.group || "" : "？？？"
        }</div>
      `;

      card.addEventListener("click", () => {
        playSE(seOpen);
        if (encountered) {
          openDetail(d);
        } else {
          openDetail({
            name: "？？？",
            image: "img/ui/unknown_silhouette.png",
            classification: "",
            habitat: "",
            era: "",
            size: "",
            description: "まだ出会っていない恐竜のようだ…",
            trivia: "",
            comment: "",
          });
        }
      });

      root.appendChild(card);
    });
  }

  // 詳細UI
  function setupDetailUi() {
    const overlay = document.getElementById("detailOverlay");
    const closeBtn = document.getElementById("detailClose");

    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.add("hidden");
      }
    });
  }

  function openDetail(d) {
    const overlay = document.getElementById("detailOverlay");
    overlay.classList.remove("hidden");

    document.getElementById("detailImage").src = d.image || "";
    document.getElementById("detailName").textContent = d.name || "";
    document.getElementById("detailMeta").textContent =
      (d.classification || "") +
      (d.habitat ? " / 生息地: " + d.habitat : "");
    document.getElementById("detailEra").textContent = d.era
      ? "時代: " + d.era
      : "";
    document.getElementById("detailSize").textContent = d.size
      ? "サイズ: " + d.size
      : "";
    document.getElementById("detailDesc").textContent = d.description || "";
    document.getElementById("detailTrivia").textContent = d.trivia
      ? "豆知識: " + d.trivia
      : "";
    document.getElementById("detailComment").textContent = d.comment
      ? "ひとこと: " + d.comment
      : "";
  }

  // デバッグ
  function setupDebug() {
    const toggle = document.getElementById("debugToggle");
    const panel = document.getElementById("debugPanel");
    const close = document.getElementById("debugClose");

    toggle.addEventListener("click", () => {
      panel.classList.toggle("visible");
      playSE(seClick);
    });

    close.addEventListener("click", () => {
      panel.classList.remove("visible");
    });

    panel.addEventListener("click", (e) => {
      const btn = e.target.closest(".debug-btn");
      if (!btn) return;
      const mode = btn.dataset.debug;
      playSE(seClick);

      if (mode === "allOwned") {
        DINOS_ALL.forEach((d) => {
          d.owned = true;
        });
      } else if (mode === "allRaised") {
        DINOS_ALL.forEach((d) => {
          d.owned = true;
          d.raised = true;
        });
      } else if (mode === "reset") {
        DINOS_ALL.forEach((d) => {
          d.owned = false;
          d.raised = false;
        });
      }
      saveState();
      renderGrid();
    });
  }

  // BGM UI
  function setupBgmUi() {
    const toggle = document.getElementById("bgmToggle");
    const volume = document.getElementById("bgmVolume");

    let isOn = true;

    const setLabel = () => {
      toggle.textContent = isOn ? "BGM ON" : "BGM OFF";
      toggle.classList.toggle("bgm-off", !isOn);
    };

    setLabel();

    // 最初はユーザー操作が入るまで play されないように
    let started = false;

    toggle.addEventListener("click", () => {
      isOn = !isOn;
      setLabel();
      playSE(seClick);

      if (isOn) {
        if (!started) {
          started = true;
        }
        bgm.play().catch(() => {});
      } else {
        bgm.pause();
      }
    });

    volume.addEventListener("input", () => {
      bgm.volume = parseFloat(volume.value || "0.4");
    });
  }
})();
