/**
 * VERİ MADENCİLİĞİ ATÖLYE ÇALIŞMASI - UYGULAMA MANTIĞI & ETKİLEŞİM YÖNETİMİ
 * Single Page Application Controller (Vanilla JS ES6+)
 */

// ==========================================================================
// SADE & ŞIK VEKTÖREL SVG İKON HARİTASI (AI EMOJİLERİNDEN ARINDIRILMIŞ)
// ==========================================================================
const SVG_ICONS = {
  seismic: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4v18M13 10l3-2v13"/><line x1="2" y1="13" x2="6" y2="13"/><polyline points="8 12 10 9 12 15 14 11 16 13"/></svg>`,
  robot: `<svg class="ui-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 15h.01M16 15h.01M9 19h6"/></svg>`,
  scraping: `<svg class="ui-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><polyline points="15 9 18 6 21 9"/></svg>`,
  turnover: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  social: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="13" y2="13"/></svg>`,
  pharma: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M10 2v7.31L4.17 19.46A2 2 0 0 0 5.89 22h12.22a2 2 0 0 0 1.72-2.54L14 9.31V2h-4z"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="7" y1="16" x2="17" y2="16"/></svg>`,
  eco: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`,
  freight: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.26.59 4.37 1.62 6"/><path d="M12 10V4m-3 3h6"/></svg>`,
  clickstream: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M3 3l7 18 3-7 7-3L3 3z"/><path d="M13 13l6 6"/></svg>`,
  retail: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  lock: `<svg class="ui-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  unlock: `<svg class="ui-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  check: `<svg class="ui-icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg class="ui-icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  alert: `<svg class="ui-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  sun: `<svg class="ui-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg class="ui-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  copy: `<svg class="ui-icon" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
};

function getSvgIcon(name, extraClass = "") {
  const raw = SVG_ICONS[name] || SVG_ICONS.retail;
  if (!extraClass) return raw;
  return raw.replace('class="ui-icon"', `class="ui-icon ${extraClass}"`);
}

// ==========================================================================
// SABİTLER VE BAŞLANGIÇ DURUMU (STATE)
// ==========================================================================
const TOTAL_GROUPS = 10;
const SCENARIOS_PER_GROUP = 3;
const TEACHER_PASSWORD = "vm2627"; // Öğretmen modu gizli şifresi

const STORAGE_KEYS = {
  ASSIGNMENTS: "mining_workshop_assignments_v4",
  SUBMISSIONS: "mining_workshop_submissions_v4",
  EVALUATIONS: "mining_workshop_evaluations_v4",
  TEACHER_UNLOCKED: "mining_workshop_teacher_unlocked_v4",
  THEME: "mining_workshop_theme_v5"
};

const state = {
  currentGroupId: 1,
  currentScenarioId: 1,
  assignments: {}, // { 1: [id1, id2, id3], 2: [...] }
  submissions: {}, // { "group_1": { "scenario_1": { isLocked: true, ... } } }
  evaluations: {}, // { "group_1": { "scenario_1": { score: 3, ... } } }
  isTeacherMode: false,
  autoSaveTimer: null,
  theme: "dark"
};

// ==========================================================================
// KURA ÇEKME VE ADİL DAĞITIM MOTORU (FAIR BALANCED SHUFFLE)
// ==========================================================================

function generateFairScenarioAssignments() {
  const scenarioIds = SCENARIOS.map(s => s.id);
  let attempts = 0;
  const maxAttempts = 100;

  while (attempts < maxAttempts) {
    attempts++;
    let pool = [...scenarioIds, ...scenarioIds, ...scenarioIds];
    
    // Fisher-Yates Karıştırma
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const assignments = {};
    let valid = true;

    for (let g = 1; g <= TOTAL_GROUPS; g++) {
      const groupScenarios = new Set();
      const remainingPool = [...pool];
      for (let i = 0; i < remainingPool.length; i++) {
        const candidate = remainingPool[i];
        if (!groupScenarios.has(candidate)) {
          groupScenarios.add(candidate);
          const poolIdx = pool.indexOf(candidate);
          if (poolIdx > -1) pool.splice(poolIdx, 1);
        }
        if (groupScenarios.size === SCENARIOS_PER_GROUP) break;
      }

      if (groupScenarios.size !== SCENARIOS_PER_GROUP) {
        valid = false;
        break;
      }
      assignments[g] = Array.from(groupScenarios).sort((a, b) => a - b);
    }

    if (valid) return assignments;
  }

  // Güvenli yedek
  const fallbackAssignments = {};
  for (let g = 1; g <= TOTAL_GROUPS; g++) {
    const shuffled = [...scenarioIds].sort(() => 0.5 - Math.random());
    fallbackAssignments[g] = shuffled.slice(0, SCENARIOS_PER_GROUP).sort((a, b) => a - b);
  }
  return fallbackAssignments;
}

// ==========================================================================
// YEREL DEPOLAMA (LOCALSTORAGE) YÖNETİMİ
// ==========================================================================

function loadFromStorage() {
  try {
    const savedAssignments = localStorage.getItem(STORAGE_KEYS.ASSIGNMENTS);
    if (savedAssignments) {
      state.assignments = JSON.parse(savedAssignments);
    } else {
      state.assignments = generateFairScenarioAssignments();
      saveAssignmentsToStorage();
    }

    const savedSubmissions = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
    if (savedSubmissions) {
      state.submissions = JSON.parse(savedSubmissions);
    } else {
      state.submissions = {};
    }

    const savedEvaluations = localStorage.getItem(STORAGE_KEYS.EVALUATIONS);
    if (savedEvaluations) {
      state.evaluations = JSON.parse(savedEvaluations);
    } else {
      state.evaluations = {};
    }

    const teacherUnlocked = sessionStorage.getItem(STORAGE_KEYS.TEACHER_UNLOCKED);
    state.isTeacherMode = teacherUnlocked === "true";

  } catch (err) {
    console.warn("Storage yükleme hatası, varsayılan kura oluşturuluyor:", err);
    state.assignments = generateFairScenarioAssignments();
    state.submissions = {};
    state.evaluations = {};
  }
}

function saveAssignmentsToStorage() {
  localStorage.setItem(STORAGE_KEYS.ASSIGNMENTS, JSON.stringify(state.assignments));
}

function saveSubmissionsToStorage() {
  localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(state.submissions));
}

function saveEvaluationsToStorage() {
  localStorage.setItem(STORAGE_KEYS.EVALUATIONS, JSON.stringify(state.evaluations));
}

// ==========================================================================
// FORM SEÇENEKLERİNİ BAŞLATMA
// ==========================================================================

function populateFormOptions() {
  // 1. Veri Kaynağı
  const selectSource = document.getElementById("selectDataSource");
  selectSource.innerHTML = '<option value="" disabled selected>-- Veri Kaynağını Seçiniz --</option>';
  
  CRITERIA_OPTIONS.dataSources.forEach(groupItem => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = groupItem.group;
    groupItem.options.forEach(opt => {
      const optionEl = document.createElement("option");
      optionEl.value = opt;
      optionEl.textContent = opt;
      optgroup.appendChild(optionEl);
    });
    selectSource.appendChild(optgroup);
  });

  // 2. Biçimsel Sınıflandırma Radio
  const formatRadioGroup = document.getElementById("formatRadioGroup");
  formatRadioGroup.innerHTML = "";
  CRITERIA_OPTIONS.structuralFormats.forEach((item, index) => {
    const radioId = `format_radio_${index}`;
    const labelEl = document.createElement("label");
    labelEl.className = "radio-pill-item";
    labelEl.htmlFor = radioId;
    labelEl.innerHTML = `
      <input type="radio" name="structuralFormat" id="${radioId}" value="${item.value}">
      <div class="radio-pill-text">
        <span class="radio-pill-title">${item.label}</span>
        <span class="radio-pill-sub">${item.desc}</span>
      </div>
    `;
    formatRadioGroup.appendChild(labelEl);
  });

  formatRadioGroup.addEventListener("change", () => {
    if (isCurrentScenarioLocked()) return;
    document.querySelectorAll(".radio-pill-item").forEach(el => el.classList.remove("selected"));
    const checked = formatRadioGroup.querySelector('input[type="radio"]:checked');
    if (checked) {
      checked.closest(".radio-pill-item").classList.add("selected");
    }
    triggerAutoSave();
    evaluateTeacherKeyLive();
  });

  // 3. Veri Türü
  const selectType = document.getElementById("selectDataType");
  selectType.innerHTML = '<option value="" disabled selected>-- Veri Türünü Seçiniz --</option>';
  CRITERIA_OPTIONS.dataTypes.forEach(item => {
    const optionEl = document.createElement("option");
    optionEl.value = item.value;
    optionEl.textContent = `${item.label} — ${item.desc}`;
    selectType.appendChild(optionEl);
  });

  // 4. Analitik Türü
  const selectAnalytics = document.getElementById("selectAnalyticsType");
  selectAnalytics.innerHTML = '<option value="" disabled selected>-- Analitik Türünü Seçiniz --</option>';
  CRITERIA_OPTIONS.analyticsTypes.forEach(item => {
    const optionEl = document.createElement("option");
    optionEl.value = item.value;
    optionEl.textContent = `${item.label} (${item.question})`;
    selectAnalytics.appendChild(optionEl);
  });
}

// ==========================================================================
// RENDER MOTORU (RENDER ENGINE)
// ==========================================================================

function renderGroupButtons() {
  const container = document.getElementById("groupButtonsRow");
  container.innerHTML = "";

  for (let g = 1; g <= TOTAL_GROUPS; g++) {
    const assignedIds = state.assignments[g] || [];
    const groupKey = `group_${g}`;
    const groupData = state.submissions[groupKey] || {};
    
    let lockedCount = 0;
    assignedIds.forEach(id => {
      if (groupData[`scenario_${id}`] && groupData[`scenario_${id}`].isLocked) {
        lockedCount++;
      }
    });

    const isAllCompleted = lockedCount === SCENARIOS_PER_GROUP;
    const isActive = g === state.currentGroupId;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `group-btn ${isActive ? "active" : ""} ${isAllCompleted ? "completed-all" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
    btn.innerHTML = `
      <span class="group-btn-title">Grup ${g}</span>
      <span class="group-badge-count" title="${lockedCount}/${SCENARIOS_PER_GROUP} senaryo kilitlendi">${lockedCount}/${SCENARIOS_PER_GROUP}</span>
    `;

    btn.addEventListener("click", () => switchGroup(g));
    container.appendChild(btn);
  }

  updateHeaderStatus();
}

function renderAssignedCards() {
  const grid = document.getElementById("assignedCardsGrid");
  const heading = document.getElementById("assignedHeaderTitle");
  heading.textContent = `Grup ${state.currentGroupId} İçin Kurada Çıkan 3 Senaryo:`;

  grid.innerHTML = "";
  const assignedIds = state.assignments[state.currentGroupId] || [];
  const groupKey = `group_${state.currentGroupId}`;
  const groupData = state.submissions[groupKey] || {};
  const evalData = state.evaluations[groupKey] || {};

  assignedIds.forEach((scenarioId, index) => {
    const scenario = SCENARIOS.find(s => s.id === scenarioId);
    if (!scenario) return;

    const sub = groupData[`scenario_${scenarioId}`];
    const isLocked = sub && sub.isLocked;
    const hasEval = evalData[`scenario_${scenarioId}`] !== undefined;
    const isActive = scenarioId === state.currentScenarioId;

    let statusText = "Taslak / Bekliyor";
    let statusClass = "status-empty";
    if (isLocked) {
      const score = hasEval ? `${evalData[`scenario_${scenarioId}`].score}/4` : "✓";
      statusText = `Kilitlendi (${score})`;
      statusClass = "status-filled";
    } else if (isScenarioFilled(sub)) {
      statusText = "Dolduruldu";
      statusClass = "status-empty";
    }

    const card = document.createElement("div");
    card.className = `scenario-card-item ${isActive ? "active" : ""}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <div class="card-top-row">
        <span class="card-icon">${getSvgIcon(scenario.icon, "ui-icon-md")}</span>
        <span class="card-status-badge ${statusClass}">
          ${statusText}
        </span>
      </div>
      <div class="card-body">
        <span class="card-scenario-tag">${index + 1}. Görev • Senaryo #${scenario.id}</span>
        <h4 class="card-title">${scenario.title}</h4>
        <span class="card-sector">${scenario.sector}</span>
      </div>
      <div class="card-footer">
        <span>${scenario.badge}</span>
        <span>${isActive ? "Seçili" : "İncele"}</span>
      </div>
    `;

    card.addEventListener("click", () => switchScenario(scenarioId));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        switchScenario(scenarioId);
      }
    });

    grid.appendChild(card);
  });
}

function renderCurrentScenario() {
  const scenario = SCENARIOS.find(s => s.id === state.currentScenarioId);
  if (!scenario) return;

  document.getElementById("scenarioIcon").innerHTML = getSvgIcon(scenario.icon, "ui-icon-lg");
  document.getElementById("scenarioTitle").textContent = `Senaryo ${scenario.id}: ${scenario.title}`;
  document.getElementById("scenarioSector").textContent = `${scenario.sector} • ${scenario.badge}`;
  document.getElementById("scenarioDescription").textContent = scenario.context;

  const metaBadges = document.getElementById("scenarioMetaBadges");
  metaBadges.innerHTML = `
    <span class="section-step-num cyber-step">ID: #${scenario.id}</span>
    <span class="section-step-num cyber-step">${scenario.sector}</span>
  `;

  const formTarget = document.getElementById("formCurrentTargetBadge");
  formTarget.textContent = `Grup ${state.currentGroupId} • Senaryo #${scenario.id}: ${scenario.title}`;

  // Tablo
  const thead = document.getElementById("dataTableHead");
  const tbody = document.getElementById("dataTableBody");

  thead.innerHTML = `
    <tr>
      <th style="width: 45px;">#</th>
      ${scenario.columns.map(col => `<th>${col}</th>`).join("")}
    </tr>
  `;

  tbody.innerHTML = "";
  scenario.rows.forEach((row, rIdx) => {
    const tr = document.createElement("tr");
    let rowCellsHtml = `<td style="color: var(--text-dim); font-weight: 700;">${rIdx + 1}</td>`;
    
    row.forEach((cellVal, cIdx) => {
      const isLastCol = cIdx === row.length - 1;
      let cellFormatted = cellVal;

      if (isLastCol) {
        const valLower = String(cellVal).toLowerCase();
        let badgeClass = "neutral";
        if (valLower.includes("kritik") || valLower.includes("alarm") || valLower.includes("hata") || valLower.includes("sağlıksız") || valLower.includes("aşırı")) {
          badgeClass = "danger";
        } else if (valLower.includes("dikkat") || valLower.includes("uyarı") || valLower.includes("orta") || valLower.includes("gecikme") || valLower.includes("hassas")) {
          badgeClass = "warning";
        } else if (valLower.includes("normal") || valLower.includes("iyi") || valLower.includes("başarılı") || valLower.includes("zamanında") || valLower.includes("dönüşüm")) {
          badgeClass = "success";
        }
        cellFormatted = `<span class="cell-badge ${badgeClass}">${cellVal}</span>`;
      }

      rowCellsHtml += `<td>${cellFormatted}</td>`;
    });

    tr.innerHTML = rowCellsHtml;
    tbody.appendChild(tr);
  });

  loadFormForCurrentSelection();
}

/**
 * Mevcut senaryonun kilitli olup olmadığını kontrol eder.
 */
function isCurrentScenarioLocked() {
  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;
  const sub = state.submissions[groupKey] && state.submissions[groupKey][scenarioKey];
  return !!(sub && sub.isLocked);
}

/**
 * Formu kilitli veya açık moduna göre günceller.
 */
function updateFormLockUI(isLocked) {
  const lockedBanner = document.getElementById("lockedFormBanner");
  const teacherUnlockBtn = document.getElementById("btnTeacherUnlockForm");
  const checkBtnText = document.getElementById("btnCheckText");
  const checkBtnIcon = document.getElementById("btnCheckIcon");
  const checkActionTitle = document.getElementById("checkActionTitle");
  const checkActionDesc = document.getElementById("checkActionDesc");
  const saveBtn = document.getElementById("btnSaveAnswers");
  const clearBtn = document.getElementById("btnClearForm");
  const resultsCard = document.getElementById("selfCheckResultsCard");

  const inputs = [
    document.getElementById("selectDataSource"),
    document.getElementById("selectDataType"),
    document.getElementById("selectAnalyticsType"),
    document.getElementById("inputVebbData"),
    document.getElementById("inputVebbInfo"),
    document.getElementById("inputVebbInsight"),
    document.getElementById("inputVebbWisdom")
  ];
  const formatRadios = document.querySelectorAll('input[name="structuralFormat"]');

  if (isLocked) {
    document.body.classList.add("form-locked");
    lockedBanner.style.display = "flex";
    
    // Eğer hoca modu açıksa kilidi açma butonunu göster
    teacherUnlockBtn.style.display = state.isTeacherMode ? "inline-flex" : "none";

    inputs.forEach(input => {
      input.disabled = true;
      if (input.tagName === "TEXTAREA") input.readOnly = true;
    });
    formatRadios.forEach(r => r.disabled = true);

    checkBtnText.textContent = "Değerlendirme & Hata Analizini Gör";
    checkBtnIcon.innerHTML = getSvgIcon("clipboard");
    checkActionTitle.textContent = "Cevaplar Kaydedildi ve Kilitlendi";
    checkActionDesc.innerHTML = "Bu senaryo için cevaplarınız dondurulmuştur (tekrar doldurma engellenmiştir). <strong>Değerlendirme sonucunu ve yanlışların gerekçelerini</strong> dilediğiniz zaman inceleyebilirsiniz.";

    saveBtn.disabled = true;
    clearBtn.disabled = true;

    // Otomatik olarak değerlendirmeyi çalıştır veya açık tut
    renderEvaluationResults();
  } else {
    document.body.classList.remove("form-locked");
    lockedBanner.style.display = "none";
    teacherUnlockBtn.style.display = "none";

    inputs.forEach(input => {
      input.disabled = false;
      if (input.tagName === "TEXTAREA") input.readOnly = false;
    });
    formatRadios.forEach(r => r.disabled = false);

    checkBtnText.textContent = "Cevapları Kaydet & Kontrol Et";
    checkBtnIcon.innerHTML = getSvgIcon("lock");
    checkActionTitle.textContent = "Cevapları Kaydet, Kilitle & Kontrol Et";
    checkActionDesc.innerHTML = "Tüm alanları doldurduktan sonra bu butona basınız. <strong>Cevaplarınız sisteme kaydedilerek kilitlenecektir</strong> (tekrar doldurma ve değiştirme engellenir) ve anlık doğruluk/hata analiziniz açılacaktır.";

    saveBtn.disabled = false;
    clearBtn.disabled = false;
    resultsCard.style.display = "none";
  }

  evaluateTeacherKeyLive();
}

function loadFormForCurrentSelection() {
  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;
  const savedData = (state.submissions[groupKey] && state.submissions[groupKey][scenarioKey]) || {};

  document.getElementById("selectDataSource").value = savedData.dataSource || "";

  const formatRadios = document.querySelectorAll('input[name="structuralFormat"]');
  formatRadios.forEach(r => {
    r.checked = r.value === savedData.structuralFormat;
  });
  document.querySelectorAll(".radio-pill-item").forEach(el => el.classList.remove("selected"));
  const checkedRadio = document.querySelector('input[name="structuralFormat"]:checked');
  if (checkedRadio) {
    checkedRadio.closest(".radio-pill-item").classList.add("selected");
  }

  document.getElementById("selectDataType").value = savedData.dataType || "";
  document.getElementById("selectAnalyticsType").value = savedData.analyticsType || "";

  document.getElementById("inputVebbData").value = savedData.vebbData || "";
  document.getElementById("inputVebbInfo").value = savedData.vebbInfo || "";
  document.getElementById("inputVebbInsight").value = savedData.vebbInsight || "";
  document.getElementById("inputVebbWisdom").value = savedData.vebbWisdom || "";

  const statusMsg = document.getElementById("saveStatusMsg");
  if (savedData.savedAt) {
    const timeFormatted = new Date(savedData.savedAt).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    statusMsg.textContent = `${savedData.isLocked ? "🔒 Kesin Kilitli" : "Taslak Kayıt"}: ${timeFormatted} (Grup ${state.currentGroupId} • Senaryo #${state.currentScenarioId})`;
  } else {
    statusMsg.textContent = "Bu senaryo henüz kaydedilmedi.";
  }

  updateFormLockUI(!!savedData.isLocked);
}

function readCurrentFormData() {
  const selectedFormat = document.querySelector('input[name="structuralFormat"]:checked');
  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;
  const prevSub = (state.submissions[groupKey] && state.submissions[groupKey][scenarioKey]) || {};

  return {
    dataSource: document.getElementById("selectDataSource").value || "",
    structuralFormat: selectedFormat ? selectedFormat.value : "",
    dataType: document.getElementById("selectDataType").value || "",
    analyticsType: document.getElementById("selectAnalyticsType").value || "",
    vebbData: document.getElementById("inputVebbData").value.trim(),
    vebbInfo: document.getElementById("inputVebbInfo").value.trim(),
    vebbInsight: document.getElementById("inputVebbInsight").value.trim(),
    vebbWisdom: document.getElementById("inputVebbWisdom").value.trim(),
    isLocked: !!prevSub.isLocked,
    savedAt: new Date().toISOString()
  };
}

function isScenarioFilled(submission) {
  if (!submission) return false;
  let score = 0;
  if (submission.dataSource) score++;
  if (submission.structuralFormat) score++;
  if (submission.dataType) score++;
  if (submission.analyticsType) score++;
  if (submission.vebbData && submission.vebbData.length > 5) score++;
  if (submission.vebbInfo && submission.vebbInfo.length > 5) score++;
  if (submission.vebbInsight && submission.vebbInsight.length > 5) score++;
  if (submission.vebbWisdom && submission.vebbWisdom.length > 5) score++;
  return score >= 4;
}

function updateHeaderStatus() {
  const assignedIds = state.assignments[state.currentGroupId] || [];
  const groupKey = `group_${state.currentGroupId}`;
  const groupData = state.submissions[groupKey] || {};

  let locked = 0;
  assignedIds.forEach(id => {
    if (groupData[`scenario_${id}`] && groupData[`scenario_${id}`].isLocked) {
      locked++;
    }
  });

  const textEl = document.getElementById("completionStatusText");
  const pillEl = document.getElementById("completionStatusPill");
  textEl.textContent = `Grup ${state.currentGroupId}: ${locked} / ${SCENARIOS_PER_GROUP} Kilitlendi`;

  if (locked === SCENARIOS_PER_GROUP) {
    pillEl.classList.add("completed");
  } else {
    pillEl.classList.remove("completed");
  }
}

// ==========================================================================
// GEÇİŞ VE SEÇİM EYLEMLERİ
// ==========================================================================

function switchGroup(newGroupId) {
  if (newGroupId === state.currentGroupId) return;
  if (!isCurrentScenarioLocked()) {
    saveCurrentForm(false);
  }
  state.currentGroupId = newGroupId;

  const assigned = state.assignments[newGroupId] || [];
  if (assigned.length > 0) {
    state.currentScenarioId = assigned[0];
  }

  renderGroupButtons();
  renderAssignedCards();
  renderCurrentScenario();
  showToast(`Grup ${newGroupId} seçildi.`, "info");
}

function switchScenario(newScenarioId) {
  if (newScenarioId === state.currentScenarioId) return;
  if (!isCurrentScenarioLocked()) {
    saveCurrentForm(false);
  }
  state.currentScenarioId = newScenarioId;

  renderAssignedCards();
  renderCurrentScenario();
}

// ==========================================================================
// KAYIT VE KİLİTLEME İŞLEMLERİ
// ==========================================================================

function saveCurrentForm(notify = true) {
  if (isCurrentScenarioLocked()) {
    if (notify) showToast("Bu senaryo kilitlendiği için taslak kaydedilemez.", "warning");
    return;
  }

  const formData = readCurrentFormData();
  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;

  if (!state.submissions[groupKey]) state.submissions[groupKey] = {};
  state.submissions[groupKey][scenarioKey] = formData;
  saveSubmissionsToStorage();

  renderGroupButtons();
  renderAssignedCards();

  const statusMsg = document.getElementById("saveStatusMsg");
  const timeFormatted = new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
  statusMsg.textContent = `Taslak Kaydedildi: ${timeFormatted} (Grup ${state.currentGroupId} • Senaryo #${state.currentScenarioId})`;

  if (notify) {
    showToast(`Grup ${state.currentGroupId} - Senaryo ${state.currentScenarioId} taslağı kaydedildi!`, "success");
  }

  evaluateTeacherKeyLive();
}

function triggerAutoSave() {
  if (isCurrentScenarioLocked()) return;
  clearTimeout(state.autoSaveTimer);
  state.autoSaveTimer = setTimeout(() => {
    saveCurrentForm(false);
  }, 750);
}

// ==========================================================================
// KESİN GÖNDERME VE KONTROL (SUBMIT & LOCK WORKFLOW)
// ==========================================================================

function handleCheckButtonClick() {
  const isLocked = isCurrentScenarioLocked();
  const resultsCard = document.getElementById("selfCheckResultsCard");

  // Eğer zaten kilitliyse, kartın açık/kapalı durumunu değiştir veya kaydır
  if (isLocked) {
    if (resultsCard.style.display === "none") {
      renderEvaluationResults();
      resultsCard.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      resultsCard.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Cevaplarınız zaten kilitlenmiş durumda. Değerlendirmeyi aşağıda inceleyebilirsiniz.", "info");
    }
    return;
  }

  // Henüz kilitli değilse: Form dolu mu kontrol et
  const currentForm = readCurrentFormData();
  if (!currentForm.dataSource || !currentForm.structuralFormat || !currentForm.dataType || !currentForm.analyticsType) {
    showToast("Lütfen göndermeden önce 4 temel kriteri de seçiniz!", "warning");
    return;
  }

  if (!currentForm.vebbData && !currentForm.vebbInfo && !currentForm.vebbInsight && !currentForm.vebbWisdom) {
    showToast("Lütfen VEBB piramidindeki alanları da doldurunuz!", "warning");
    return;
  }

  // Kullanıcıdan kesin onay al (Tekrar doldurma olmaması için kilitlenecektir)
  const confirmMsg = "DİKKAT: Cevaplarınızı kaydettiğinizde bu senaryo KİLİTLENECEK ve bir daha değiştirilemeyecektir (tekrar doldurma engellenir).\n\nCevaplarınızı kesin olarak sisteme kaydedip kilitli değerlendirme ve hata analizini görmek istiyor musunuz?";
  if (!confirm(confirmMsg)) {
    return;
  }

  // Kilitle ve Kaydet
  currentForm.isLocked = true;
  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;
  if (!state.submissions[groupKey]) state.submissions[groupKey] = {};
  state.submissions[groupKey][scenarioKey] = currentForm;
  saveSubmissionsToStorage();

  // Arayüzü kilitli duruma geçir
  updateFormLockUI(true);
  renderGroupButtons();
  renderAssignedCards();

  // Sonuçları render et
  renderEvaluationResults();

  showToast("Cevaplarınız başarıyla kaydedildi, kilitlendi ve kontrol edildi! (Tekrar doldurma engellendi)", "success");
}

function unlockCurrentScenarioByTeacher() {
  if (!state.isTeacherMode) {
    showToast("Bu işlem sadece öğretmen yetkisiyle yapılabilir.", "warning");
    return;
  }

  if (confirm(`Grup ${state.currentGroupId} için Senaryo #${state.currentScenarioId} kilidini açmak ve öğrencilerin yeniden düzenlemesine izin vermek istiyor musunuz?`)) {
    const groupKey = `group_${state.currentGroupId}`;
    const scenarioKey = `scenario_${state.currentScenarioId}`;
    if (state.submissions[groupKey] && state.submissions[groupKey][scenarioKey]) {
      state.submissions[groupKey][scenarioKey].isLocked = false;
      saveSubmissionsToStorage();
    }
    if (state.evaluations[groupKey] && state.evaluations[groupKey][scenarioKey]) {
      delete state.evaluations[groupKey][scenarioKey];
      saveEvaluationsToStorage();
    }

    updateFormLockUI(false);
    renderGroupButtons();
    renderAssignedCards();
    showToast("Senaryo kilidi açıldı. Düzenleme tekrar aktif.", "info");
  }
}

/**
 * Değerlendirme sonuçlarını ve eğitsel hata gerekçelerini basar.
 */
function renderEvaluationResults() {
  const scenario = SCENARIOS.find(s => s.id === state.currentScenarioId);
  if (!scenario || !scenario.answerKey || !scenario.explanations) return;

  const currentForm = readCurrentFormData();
  const key = scenario.answerKey;
  const exp = scenario.explanations;

  let correctCount = 0;
  const totalCriteria = 4;

  const sourceIsExact = currentForm.dataSource === key.dataSource;
  const sourceIsAlt = key.dataSourceAlternatives && key.dataSourceAlternatives.includes(currentForm.dataSource);
  const sourceIsOk = sourceIsExact || sourceIsAlt;
  if (sourceIsOk) correctCount++;

  const formatIsExact = currentForm.structuralFormat === key.structuralFormat;
  const formatIsAlt = key.structuralFormatAlternatives && key.structuralFormatAlternatives.includes(currentForm.structuralFormat);
  const formatIsOk = formatIsExact || formatIsAlt;
  if (formatIsOk) correctCount++;

  const typeIsExact = currentForm.dataType === key.dataType;
  const typeIsAlt = key.dataTypeAlternatives && key.dataTypeAlternatives.includes(currentForm.dataType);
  const typeIsOk = typeIsExact || typeIsAlt;
  if (typeIsOk) correctCount++;

  const analyticsIsExact = currentForm.analyticsType === key.analyticsType;
  const analyticsIsAlt = key.analyticsTypeAlternatives && key.analyticsTypeAlternatives.includes(currentForm.analyticsType);
  const analyticsIsOk = analyticsIsExact || analyticsIsAlt;
  if (analyticsIsOk) correctCount++;

  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;
  if (!state.evaluations[groupKey]) state.evaluations[groupKey] = {};
  state.evaluations[groupKey][scenarioKey] = {
    score: correctCount,
    checkedAt: new Date().toISOString()
  };
  saveEvaluationsToStorage();

  const resultsCard = document.getElementById("selfCheckResultsCard");
  const scoreBadge = document.getElementById("checkScoreBadge");
  const statusText = document.getElementById("checkScoreStatusText");
  const itemsGrid = document.getElementById("feedbackItemsGrid");
  const vebbBox = document.getElementById("vebbSelfEvalBox");

  scoreBadge.textContent = `${correctCount} / ${totalCriteria} Kriter Doğru`;
  if (correctCount === 4) {
    statusText.textContent = "🎉 Mükemmel Analiz! Tüm analitik kriterleri eksiksiz bildiniz.";
    scoreBadge.style.borderColor = "rgba(16, 185, 129, 0.6)";
    scoreBadge.style.color = "#34d399";
  } else if (correctCount >= 2) {
    statusText.textContent = "👍 İyi Düzeyde! Hata gerekçelerini okuyarak kavramları pekiştiriniz.";
    scoreBadge.style.borderColor = "rgba(245, 158, 11, 0.6)";
    scoreBadge.style.color = "#fbbf24";
  } else {
    statusText.textContent = "⚠️ Kavram Yanılgıları Mevcut! Yanlışların neden yanlış olduğunu dikkatle okuyunuz.";
    scoreBadge.style.borderColor = "rgba(244, 63, 94, 0.6)";
    scoreBadge.style.color = "#fb7185";
  }

  itemsGrid.innerHTML = `
    <!-- 1. Veri Kaynağı -->
    <div class="feedback-card ${sourceIsOk ? (sourceIsExact ? 'correct' : 'partial') : 'incorrect'}">
      <div class="feedback-head">
        <span>1. Veri Kaynağı</span>
        <span class="${sourceIsOk ? (sourceIsExact ? 'feedback-tag-correct' : 'feedback-tag-partial') : 'feedback-tag-incorrect'}">
          ${sourceIsOk ? (sourceIsExact ? '✓ Doğru Seçim' : 'Alternatif Kabul') : 'Hatalı Seçim'}
        </span>
      </div>
      <div class="feedback-choices-row">
        <span class="choice-user"><strong>Sizin Seçiminiz:</strong> ${currentForm.dataSource || '(Boş)'}</span>
        <span class="choice-correct"><strong>Doğru Kriter:</strong> ${key.dataSource}</span>
      </div>
      <div class="feedback-reason-box">
        <strong>${sourceIsOk ? 'Doğruluk Gerekçesi:' : 'Neden Yanlış ve Doğrusunun Nedeni:'}</strong>
        ${exp.whySource}
      </div>
      ${!sourceIsOk && exp.commonMistakes ? `<div class="feedback-mistake-hint"><strong>Önemli Tuzak:</strong> ${exp.commonMistakes}</div>` : ''}
    </div>

    <!-- 2. Biçimsel Sınıflandırma -->
    <div class="feedback-card ${formatIsOk ? (formatIsExact ? 'correct' : 'partial') : 'incorrect'}">
      <div class="feedback-head">
        <span>2. Biçimsel Sınıflandırma</span>
        <span class="${formatIsOk ? (formatIsExact ? 'feedback-tag-correct' : 'feedback-tag-partial') : 'feedback-tag-incorrect'}">
          ${formatIsOk ? (formatIsExact ? '✓ Doğru Seçim' : 'Alternatif Kabul') : 'Hatalı Seçim'}
        </span>
      </div>
      <div class="feedback-choices-row">
        <span class="choice-user"><strong>Sizin Seçiminiz:</strong> ${currentForm.structuralFormat || '(Boş)'}</span>
        <span class="choice-correct"><strong>Doğru Kriter:</strong> ${key.structuralFormat}</span>
      </div>
      <div class="feedback-reason-box">
        <strong>${formatIsOk ? 'Doğruluk Gerekçesi:' : 'Neden Yanlış ve Doğrusunun Nedeni:'}</strong>
        ${exp.whyFormat}
      </div>
    </div>

    <!-- 3. Veri Türü -->
    <div class="feedback-card ${typeIsOk ? (typeIsExact ? 'correct' : 'partial') : 'incorrect'}">
      <div class="feedback-head">
        <span>3. Veri Türü</span>
        <span class="${typeIsOk ? (typeIsExact ? 'feedback-tag-correct' : 'feedback-tag-partial') : 'feedback-tag-incorrect'}">
          ${typeIsOk ? (typeIsExact ? '✓ Doğru Seçim' : 'Alternatif Kabul') : 'Hatalı Seçim'}
        </span>
      </div>
      <div class="feedback-choices-row">
        <span class="choice-user"><strong>Sizin Seçiminiz:</strong> ${currentForm.dataType || '(Boş)'}</span>
        <span class="choice-correct"><strong>Doğru Kriter:</strong> ${key.dataType}</span>
      </div>
      <div class="feedback-reason-box">
        <strong>${typeIsOk ? 'Doğruluk Gerekçesi:' : 'Neden Yanlış ve Doğrusunun Nedeni:'}</strong>
        ${exp.whyType}
      </div>
    </div>

    <!-- 4. Analitik Türü -->
    <div class="feedback-card ${analyticsIsOk ? (analyticsIsExact ? 'correct' : 'partial') : 'incorrect'}">
      <div class="feedback-head">
        <span>4. Analitik Türü</span>
        <span class="${analyticsIsOk ? (analyticsIsExact ? 'feedback-tag-correct' : 'feedback-tag-partial') : 'feedback-tag-incorrect'}">
          ${analyticsIsOk ? (analyticsIsExact ? '✓ Doğru Seçim' : 'Alternatif Kabul') : 'Hatalı Seçim'}
        </span>
      </div>
      <div class="feedback-choices-row">
        <span class="choice-user"><strong>Sizin Seçiminiz:</strong> ${currentForm.analyticsType || '(Boş)'}</span>
        <span class="choice-correct"><strong>Doğru Kriter:</strong> ${key.analyticsType}</span>
      </div>
      <div class="feedback-reason-box">
        <strong>${analyticsIsOk ? 'Doğruluk Gerekçesi:' : 'Neden Yanlış ve Doğrusunun Nedeni:'}</strong>
        ${exp.whyAnalytics}
      </div>
    </div>
  `;

  vebbBox.innerHTML = `
    <div class="vebb-eval-title">
      <span>VEBB Piramidi Model Çözüm Rehberi (Kendi Cevaplarınızla Kıyaslayınız)</span>
    </div>

    <div class="vebb-eval-step-item">
      <strong>1. VERİ (Data) İdeal Çözümü:</strong>
      <p style="color:#cbd5e1; margin-bottom: 0.25rem;">${key.vebb.veri}</p>
      <div style="font-size:0.75rem; color:#94a3b8;">
        <em>Sizin Yazdığınız:</em> "${currentForm.vebbData || '<span style=\'color:#fca5a5;\'>Henüz veri basamağını doldurmadınız.</span>'}"
      </div>
    </div>

    <div class="vebb-eval-step-item">
      <strong>2. BİLGİ / ENFORMASYON (Information) İdeal Çözümü:</strong>
      <p style="color:#cbd5e1; margin-bottom: 0.25rem;">${key.vebb.bilgi}</p>
      <div style="font-size:0.75rem; color:#94a3b8;">
        <em>Sizin Yazdığınız:</em> "${currentForm.vebbInfo || '<span style=\'color:#fca5a5;\'>Henüz enformasyon basamağını doldurmadınız.</span>'}"
      </div>
    </div>

    <div class="vebb-eval-step-item">
      <strong>3. İÇGÖRÜ (Insight) İdeal Çözümü:</strong>
      <p style="color:#cbd5e1; margin-bottom: 0.25rem;">${key.vebb.icgoru}</p>
      <div style="font-size:0.75rem; color:#94a3b8;">
        <em>Sizin Yazdığınız:</em> "${currentForm.vebbInsight || '<span style=\'color:#fca5a5;\'>Henüz içgörü basamağını doldurmadınız.</span>'}"
      </div>
    </div>

    <div class="vebb-eval-step-item">
      <strong>4. BİLGELİK (Wisdom) İdeal Çözümü:</strong>
      <p style="color:#cbd5e1; margin-bottom: 0.25rem;">${key.vebb.bilgelik}</p>
      <div style="font-size:0.75rem; color:#94a3b8;">
        <em>Sizin Yazdığınız:</em> "${currentForm.vebbWisdom || '<span style=\'color:#fca5a5;\'>Henüz bilgelik basamağını doldurmadınız.</span>'}"
      </div>
    </div>
  `;

  resultsCard.style.display = "flex";
}

// ==========================================================================
// HOCA MODU (TEACHER MODE)
// ==========================================================================

function toggleTeacherMode() {
  if (state.isTeacherMode) {
    state.isTeacherMode = false;
    sessionStorage.removeItem(STORAGE_KEYS.TEACHER_UNLOCKED);
    updateTeacherModeUI();
    showToast("Hoca Modu kapatıldı.", "info");
  } else {
    openTeacherPasswordModal();
  }
}

function openTeacherPasswordModal() {
  const modal = document.getElementById("teacherPasswordModal");
  const input = document.getElementById("teacherPasswordInput");
  const errBox = document.getElementById("teacherModalError");
  input.value = "";
  errBox.style.display = "none";
  modal.style.display = "flex";
  setTimeout(() => input.focus(), 100);
}

function closeTeacherPasswordModal() {
  document.getElementById("teacherPasswordModal").style.display = "none";
}

function submitTeacherPassword() {
  const input = document.getElementById("teacherPasswordInput");
  const errBox = document.getElementById("teacherModalError");
  const enteredPass = input.value.trim();

  if (enteredPass === TEACHER_PASSWORD) {
    state.isTeacherMode = true;
    sessionStorage.setItem(STORAGE_KEYS.TEACHER_UNLOCKED, "true");
    closeTeacherPasswordModal();
    updateTeacherModeUI();
    showToast("Hoca Modu aktif! Resmi yanıt anahtarı açıldı.", "success");
  } else {
    errBox.textContent = "Hatalı şifre! Erişim reddedildi.";
    errBox.style.display = "block";
    input.focus();
  }
}

function updateTeacherModeUI() {
  const btn = document.getElementById("btnToggleTeacherMode");
  const btnText = document.getElementById("teacherBtnText");
  const unlockBtn = document.getElementById("btnTeacherUnlockForm");

  if (state.isTeacherMode) {
    btn.classList.add("active");
    btnText.textContent = "Hoca Modu (Açık)";
    btn.querySelector(".icon").innerHTML = getSvgIcon("unlock");
    if (isCurrentScenarioLocked()) unlockBtn.style.display = "inline-flex";
  } else {
    btn.classList.remove("active");
    btnText.textContent = "Hoca Modu";
    btn.querySelector(".icon").innerHTML = getSvgIcon("lock");
    unlockBtn.style.display = "none";
  }

  evaluateTeacherKeyLive();
}

function evaluateTeacherKeyLive() {
  const teacherBoxes = [
    document.getElementById("teacherAnsSource"),
    document.getElementById("teacherAnsFormat"),
    document.getElementById("teacherAnsType"),
    document.getElementById("teacherAnsAnalytics"),
    document.getElementById("teacherBoxData"),
    document.getElementById("teacherBoxInfo"),
    document.getElementById("teacherBoxInsight"),
    document.getElementById("teacherBoxWisdom")
  ];

  if (!state.isTeacherMode) {
    teacherBoxes.forEach(b => { if (b) b.style.display = "none"; });
    return;
  }

  const scenario = SCENARIOS.find(s => s.id === state.currentScenarioId);
  if (!scenario || !scenario.answerKey) return;

  const key = scenario.answerKey;
  const currentForm = readCurrentFormData();

  // 1. Kaynak
  const boxSource = document.getElementById("teacherAnsSource");
  boxSource.style.display = "flex";
  const isSourceExact = currentForm.dataSource === key.dataSource;
  const isSourceAlt = key.dataSourceAlternatives && key.dataSourceAlternatives.includes(currentForm.dataSource);
  let evalSourceBadge = `<span class="solution-eval-pill eval-mismatch">Farklı Seçim</span>`;
  if (isSourceExact) evalSourceBadge = `<span class="solution-eval-pill eval-match">✓ Tam Eşleşme</span>`;
  else if (isSourceAlt) evalSourceBadge = `<span class="solution-eval-pill eval-partial">🆗 Alternatif Kabul</span>`;

  boxSource.innerHTML = `
    <div class="solution-badge-head">
      <span>Model Cevap: Veri Kaynağı</span>
      ${evalSourceBadge}
    </div>
    <div class="solution-badge-val">${key.dataSource}</div>
    ${key.dataSourceAlternatives ? `<div style="font-size:0.72rem; color:#6ee7b7;">Kabul Edilebilir: ${key.dataSourceAlternatives.join(", ")}</div>` : ""}
  `;

  // 2. Biçim
  const boxFormat = document.getElementById("teacherAnsFormat");
  boxFormat.style.display = "flex";
  const isFormatExact = currentForm.structuralFormat === key.structuralFormat;
  const isFormatAlt = key.structuralFormatAlternatives && key.structuralFormatAlternatives.includes(currentForm.structuralFormat);
  let evalFormatBadge = `<span class="solution-eval-pill eval-mismatch">Farklı Seçim</span>`;
  if (isFormatExact) evalFormatBadge = `<span class="solution-eval-pill eval-match">✓ Tam Eşleşme</span>`;
  else if (isFormatAlt) evalFormatBadge = `<span class="solution-eval-pill eval-partial">🆗 Alternatif Kabul</span>`;

  boxFormat.innerHTML = `
    <div class="solution-badge-head">
      <span>Model Cevap: Biçimsel Sınıflandırma</span>
      ${evalFormatBadge}
    </div>
    <div class="solution-badge-val">${key.structuralFormat}</div>
  `;

  // 3. Tür
  const boxType = document.getElementById("teacherAnsType");
  boxType.style.display = "flex";
  const isTypeExact = currentForm.dataType === key.dataType;
  const isTypeAlt = key.dataTypeAlternatives && key.dataTypeAlternatives.includes(currentForm.dataType);
  let evalTypeBadge = `<span class="solution-eval-pill eval-mismatch">Farklı Seçim</span>`;
  if (isTypeExact) evalTypeBadge = `<span class="solution-eval-pill eval-match">✓ Tam Eşleşme</span>`;
  else if (isTypeAlt) evalTypeBadge = `<span class="solution-eval-pill eval-partial">🆗 Alternatif Kabul</span>`;

  boxType.innerHTML = `
    <div class="solution-badge-head">
      <span>Model Cevap: Veri Türü</span>
      ${evalTypeBadge}
    </div>
    <div class="solution-badge-val">${key.dataType}</div>
    ${key.dataTypeAlternatives ? `<div style="font-size:0.72rem; color:#6ee7b7;">Kabul Edilebilir: ${key.dataTypeAlternatives.join(", ")}</div>` : ""}
  `;

  // 4. Analitik
  const boxAnalytics = document.getElementById("teacherAnsAnalytics");
  boxAnalytics.style.display = "flex";
  const isAnalyticsExact = currentForm.analyticsType === key.analyticsType;
  const isAnalyticsAlt = key.analyticsTypeAlternatives && key.analyticsTypeAlternatives.includes(currentForm.analyticsType);
  let evalAnalyticsBadge = `<span class="solution-eval-pill eval-mismatch">Farklı Seçim</span>`;
  if (isAnalyticsExact) evalAnalyticsBadge = `<span class="solution-eval-pill eval-match">✓ Tam Eşleşme</span>`;
  else if (isAnalyticsAlt) evalAnalyticsBadge = `<span class="solution-eval-pill eval-partial">🆗 Alternatif Kabul</span>`;

  boxAnalytics.innerHTML = `
    <div class="solution-badge-head">
      <span>Model Cevap: Analitik Türü</span>
      ${evalAnalyticsBadge}
    </div>
    <div class="solution-badge-val">${key.analyticsType}</div>
    ${key.analyticsTypeAlternatives ? `<div style="font-size:0.72rem; color:#6ee7b7;">Kabul Edilebilir: ${key.analyticsTypeAlternatives.join(", ")}</div>` : ""}
  `;

  // VEBB Model Cevapları
  const boxData = document.getElementById("teacherBoxData");
  boxData.style.display = "block";
  boxData.innerHTML = `<strong>Model Veri Tanımı (Hoca):</strong> ${key.vebb.veri}`;

  const boxInfo = document.getElementById("teacherBoxInfo");
  boxInfo.style.display = "block";
  boxInfo.innerHTML = `<strong>Model Enformasyon / Bilgi (Hoca):</strong> ${key.vebb.bilgi}`;

  const boxInsight = document.getElementById("teacherBoxInsight");
  boxInsight.style.display = "block";
  boxInsight.innerHTML = `<strong>Model Kök Neden İçgörüsü (Hoca):</strong> ${key.vebb.icgoru}`;

  const boxWisdom = document.getElementById("teacherBoxWisdom");
  boxWisdom.style.display = "block";
  boxWisdom.innerHTML = `<strong>Model Bilgelik / Aksiyon (Hoca):</strong> ${key.vebb.bilgelik}`;
}

// ==========================================================================
// DIŞA AKTARMA (EXPORT) MODÜLLERİ
// ==========================================================================

function exportJson() {
  const currentScenario = SCENARIOS.find(s => s.id === state.currentScenarioId);
  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;
  const currentSubmission = (state.submissions[groupKey] && state.submissions[groupKey][scenarioKey]) || {};

  const exportPayload = {
    metadata: {
      platform: "Veri Madenciliği - Veri Türleri ve Kaynakları Atölyesi",
      exportDate: new Date().toISOString(),
      groupId: state.currentGroupId,
      assignedScenarios: state.assignments[state.currentGroupId]
    },
    activeScenario: {
      id: currentScenario.id,
      title: currentScenario.title,
      sector: currentScenario.sector,
      context: currentScenario.context
    },
    studentSubmission: currentSubmission,
    evaluation: (state.evaluations[groupKey] && state.evaluations[groupKey][scenarioKey]) || null,
    allGroupSubmissions: state.submissions[groupKey] || {}
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
  downloadBlob(blob, `Grup_${state.currentGroupId}_Senaryo_${state.currentScenarioId}_Raporu.json`);
  showToast("JSON raporu başarıyla indirildi.", "success");
}

function exportTxtReport() {
  const currentScenario = SCENARIOS.find(s => s.id === state.currentScenarioId);
  const groupKey = `group_${state.currentGroupId}`;
  const scenarioKey = `scenario_${state.currentScenarioId}`;
  const currentSubmission = (state.submissions[groupKey] && state.submissions[groupKey][scenarioKey]) || {};
  const isLocked = !!currentSubmission.isLocked;

  let txt = `===============================================================================\n`;
  txt += `        VERİ MADENCİLİĞİ VE VERİ TÜRLERİ ATÖLYE ÇALIŞMASI RAPORU\n`;
  txt += `===============================================================================\n\n`;
  txt += `Grup No          : Grup ${state.currentGroupId}\n`;
  txt += `Senaryo          : Senaryo #${currentScenario.id} - ${currentScenario.title}\n`;
  txt += `Sektör           : ${currentScenario.sector}\n`;
  txt += `Durum            : ${isLocked ? "KESİN KİLİTLİ VE GÖNDERİLDİ" : "TASLAK AŞAMASINDA"}\n`;
  txt += `Tarih            : ${new Date().toLocaleString("tr-TR")}\n`;
  txt += `Grubun Senaryoları: ${state.assignments[state.currentGroupId].map(id => `Senaryo ${id}`).join(", ")}\n\n`;

  txt += `-------------------------------------------------------------------------------\n`;
  txt += `1. SENARYO BAĞLAMI VE PROBLEM TANIMI\n`;
  txt += `-------------------------------------------------------------------------------\n`;
  txt += `${currentScenario.context}\n\n`;

  txt += `-------------------------------------------------------------------------------\n`;
  txt += `2. ÖĞRENCİ KRİTER SINIFLANDIRMASI\n`;
  txt += `-------------------------------------------------------------------------------\n`;
  txt += `* Veri Kaynağı            : ${currentSubmission.dataSource || "Doldurulmadı"}\n`;
  txt += `* Biçimsel Sınıflandırma  : ${currentSubmission.structuralFormat || "Doldurulmadı"}\n`;
  txt += `* Veri Türü               : ${currentSubmission.dataType || "Doldurulmadı"}\n`;
  txt += `* Analitik Türü          : ${currentSubmission.analyticsType || "Doldurulmadı"}\n\n`;

  txt += `-------------------------------------------------------------------------------\n`;
  txt += `3. VEBB (DIKW) KARAR PİRAMİDİ ANALİZİ\n`;
  txt += `-------------------------------------------------------------------------------\n`;
  txt += `[1] VERİ (Ham Kayıtlar & Ölçümler):\n`;
  txt += `${currentSubmission.vebbData || "(Doldurulmadı)"}\n\n`;

  txt += `[2] BİLGİ / ENFORMASYON (Özet & Örüntü):\n`;
  txt += `${currentSubmission.vebbInfo || "(Doldurulmadı)"}\n\n`;

  txt += `[3] İÇGÖRÜ (Kök Neden & Mekanizma):\n`;
  txt += `${currentSubmission.vebbInsight || "(Doldurulmadı)"}\n\n`;

  txt += `[4] BİLGELİK (Alınacak Stratejik Aksiyon & Karar):\n`;
  txt += `${currentSubmission.vebbWisdom || "(Doldurulmadı)"}\n\n`;

  if (state.isTeacherMode) {
    txt += `-------------------------------------------------------------------------------\n`;
    txt += `4. HOCA MODEL YANIT ANAHTARI (ÖĞRETMEN NOTLARI)\n`;
    txt += `-------------------------------------------------------------------------------\n`;
    txt += `Model Veri Kaynağı    : ${currentScenario.answerKey.dataSource}\n`;
    txt += `Model Biçim           : ${currentScenario.answerKey.structuralFormat}\n`;
    txt += `Model Veri Türü       : ${currentScenario.answerKey.dataType}\n`;
    txt += `Model Analitik Türü   : ${currentScenario.answerKey.analyticsType}\n\n`;
    txt += `Model VEBB - Veri     : ${currentScenario.answerKey.vebb.veri}\n`;
    txt += `Model VEBB - Bilgi    : ${currentScenario.answerKey.vebb.bilgi}\n`;
    txt += `Model VEBB - İçgörü   : ${currentScenario.answerKey.vebb.icgoru}\n`;
    txt += `Model VEBB - Bilgelik : ${currentScenario.answerKey.vebb.bilgelik}\n\n`;
  }

  txt += `===============================================================================\n`;
  txt += `Rapor Sonu - Sistem Tarafından Üretilmiştir.\n`;

  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, `Grup_${state.currentGroupId}_Senaryo_${state.currentScenarioId}_Calisma_Raporu.txt`);
  showToast("TXT teslim raporu başarıyla indirildi.", "success");
}

function printReport() {
  window.print();
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// ==========================================================================
// KURA MATRİSİ MODALI
// ==========================================================================


// ==========================================================================
// TEMA YÖNETİMİ (AÇIK / KOYU TEMA)
// ==========================================================================

function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
  applyTheme(saved);
}

function applyTheme(themeName) {
  state.theme = themeName;
  localStorage.setItem(STORAGE_KEYS.THEME, themeName);
  const iconEl = document.getElementById("themeIcon");
  const textEl = document.getElementById("themeText");

  if (themeName === "light") {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
    if (iconEl) iconEl.innerHTML = getSvgIcon("moon");
    if (textEl) textEl.textContent = "Koyu Tema";
  } else {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
    if (iconEl) iconEl.innerHTML = getSvgIcon("sun");
    if (textEl) textEl.textContent = "Açık Tema";
  }
}

function toggleTheme() {
  const nextTheme = state.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  showToast(nextTheme === "light" ? "Açık temaya geçildi." : "Koyu temaya geçildi.", "info");
}

// ==========================================================================
// KONU LİSTESİ & 10 SENARYO KATALOĞU MOTORU
// ==========================================================================

function openTopicCatalogModal() {
  renderTopicCatalogCards();
  renderMatrixTable();
  setCatalogTab("topics");
  document.getElementById("matrixModal").style.display = "flex";
}

function setCatalogTab(tabName) {
  const btnTopics = document.getElementById("tabBtnTopicsList");
  const btnMatrix = document.getElementById("tabBtnMatrixTable");
  const viewTopics = document.getElementById("viewTopicsList");
  const viewMatrix = document.getElementById("viewMatrixTable");

  if (!btnTopics || !btnMatrix || !viewTopics || !viewMatrix) return;

  if (tabName === "topics") {
    btnTopics.classList.add("active");
    btnMatrix.classList.remove("active");
    viewTopics.style.display = "block";
    viewMatrix.style.display = "none";
  } else {
    btnTopics.classList.remove("active");
    btnMatrix.classList.add("active");
    viewTopics.style.display = "none";
    viewMatrix.style.display = "block";
  }
}

function renderTopicCatalogCards() {
  const container = document.getElementById("topicCatalogGrid");
  if (!container) return;
  container.innerHTML = "";

  SCENARIOS.forEach(sc => {
    const assignedGroups = [];
    for (let g = 1; g <= TOTAL_GROUPS; g++) {
      if (state.assignments[g] && state.assignments[g].includes(sc.id)) {
        assignedGroups.push(g);
      }
    }

    const card = document.createElement("div");
    card.className = "topic-catalog-card";
    card.innerHTML = `
      <div class="topic-card-header">
        <div class="topic-card-icon-wrap">
          ${getSvgIcon(sc.icon, "ui-icon-md")}
        </div>
        <div class="topic-card-meta">
          <span class="topic-card-sector-tag">${sc.sector}</span>
          <h4 class="topic-card-title">Senaryo #${sc.id}: ${sc.title}</h4>
        </div>
      </div>
      <p class="topic-card-desc">${sc.description}</p>
      <div class="topic-card-footer">
        <span class="topic-assigned-groups-pill">
          Atanan: ${assignedGroups.length > 0 ? assignedGroups.map(g => `Grup ${g}`).join(", ") : "Henüz atanmadı"}
        </span>
        <button type="button" class="btn-open-topic" data-scenario-id="${sc.id}">
          ${getSvgIcon("copy", "ui-icon-xs")}
          <span>Bu Konuyu İncele</span>
        </button>
      </div>
    `;

    card.querySelector(".btn-open-topic").addEventListener("click", () => {
      selectTopicFromCatalog(sc.id);
    });

    container.appendChild(card);
  });
}

function selectTopicFromCatalog(scenarioId) {
  let targetGroup = state.currentGroupId;
  const currentAssigned = state.assignments[state.currentGroupId] || [];
  if (!currentAssigned.includes(scenarioId)) {
    for (let g = 1; g <= TOTAL_GROUPS; g++) {
      if (state.assignments[g] && state.assignments[g].includes(scenarioId)) {
        targetGroup = g;
        break;
      }
    }
    if (targetGroup !== state.currentGroupId) {
      state.currentGroupId = targetGroup;
      renderGroupButtons();
      renderAssignedCards();
    }
  }

  switchScenario(scenarioId);
  closeMatrixModal();
  const sec = document.getElementById("scenarioSection");
  if (sec) sec.scrollIntoView({ behavior: "smooth" });
  showToast(`Senaryo #${scenarioId} (Grup ${state.currentGroupId}) inceleme ekranında açıldı.`, "info");
}

function renderMatrixTable() {
  const tbody = document.getElementById("matrixTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  for (let g = 1; g <= TOTAL_GROUPS; g++) {
    const assigned = state.assignments[g] || [];
    const groupKey = `group_${g}`;
    const groupData = state.submissions[groupKey] || {};

    let lockedCount = 0;
    assigned.forEach(id => {
      if (groupData[`scenario_${id}`] && groupData[`scenario_${id}`].isLocked) lockedCount++;
    });

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>Grup ${g}</strong></td>
      ${assigned.map(id => {
        const sc = SCENARIOS.find(s => s.id === id);
        const isL = groupData[`scenario_${id}`] && groupData[`scenario_${id}`].isLocked;
        return `<td>${sc ? `${getSvgIcon(sc.icon, "ui-icon-xs")} #${sc.id} ${sc.title}` : `#${id}`} ${isL ? '🔒' : ''}</td>`;
      }).join("")}
      <td>
        <span class="cell-badge ${lockedCount === SCENARIOS_PER_GROUP ? "success" : (lockedCount > 0 ? "warning" : "neutral")}">
          ${lockedCount} / ${SCENARIOS_PER_GROUP} Kilitlendi
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  }
}

function openMatrixModal() {
  openTopicCatalogModal();
  return;

  const tbody = document.getElementById("matrixTableBody");
  tbody.innerHTML = "";

  for (let g = 1; g <= TOTAL_GROUPS; g++) {
    const assigned = state.assignments[g] || [];
    const groupKey = `group_${g}`;
    const groupData = state.submissions[groupKey] || {};

    let lockedCount = 0;
    assigned.forEach(id => {
      if (groupData[`scenario_${id}`] && groupData[`scenario_${id}`].isLocked) lockedCount++;
    });

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong style="color: #fff; font-family: var(--font-heading);">Grup ${g}</strong></td>
      ${assigned.map(id => {
        const sc = SCENARIOS.find(s => s.id === id);
        const isL = groupData[`scenario_${id}`] && groupData[`scenario_${id}`].isLocked;
        return `<td>${sc ? `${sc.icon} #${sc.id} ${sc.title}` : `#${id}`} ${isL ? '🔒' : ''}</td>`;
      }).join("")}
      <td>
        <span class="cell-badge ${lockedCount === SCENARIOS_PER_GROUP ? "success" : (lockedCount > 0 ? "warning" : "neutral")}">
          ${lockedCount} / ${SCENARIOS_PER_GROUP} Kilitlendi
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  }

  document.getElementById("matrixModal").style.display = "flex";
}

function closeMatrixModal() {
  document.getElementById("matrixModal").style.display = "none";
}

// ==========================================================================
// YARDIMCI BİLEŞENLER
// ==========================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : (type === "warning" ? "⚠" : "ℹ")}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

function copyTableJson() {
  const scenario = SCENARIOS.find(s => s.id === state.currentScenarioId);
  if (!scenario) return;

  const tableData = scenario.rows.map(row => {
    const obj = {};
    scenario.columns.forEach((col, idx) => {
      obj[col] = row[idx];
    });
    return obj;
  });

  const text = JSON.stringify(tableData, null, 2);
  navigator.clipboard.writeText(text).then(() => {
    showToast("10 satırlık veri tablosu JSON formatında panoya kopyalandı!", "success");
  }).catch(() => {
    showToast("Panoya kopyalama başarısız oldu.", "warning");
  });
}

function clearFormConfirm() {
  if (isCurrentScenarioLocked()) {
    showToast("Kilitli senaryo formu temizlenemez.", "warning");
    return;
  }

  if (confirm(`Grup ${state.currentGroupId} için Senaryo #${state.currentScenarioId} taslağını temizlemek istediğinizden emin misiniz?`)) {
    document.getElementById("selectDataSource").value = "";
    document.querySelectorAll('input[name="structuralFormat"]').forEach(r => r.checked = false);
    document.querySelectorAll(".radio-pill-item").forEach(el => el.classList.remove("selected"));
    document.getElementById("selectDataType").value = "";
    document.getElementById("selectAnalyticsType").value = "";
    document.getElementById("inputVebbData").value = "";
    document.getElementById("inputVebbInfo").value = "";
    document.getElementById("inputVebbInsight").value = "";
    document.getElementById("inputVebbWisdom").value = "";

    saveCurrentForm(false);
    showToast("Form taslağı temizlendi.", "info");
  }
}

function shuffleDrawConfirm() {
  if (confirm("DİKKAT: Senaryolar yeniden karılacak ve 10 gruba yeni 3'er senaryo atanacaktır. Devam etmek istiyor musunuz?")) {
    state.assignments = generateFairScenarioAssignments();
    saveAssignmentsToStorage();

    const assigned = state.assignments[state.currentGroupId] || [];
    if (assigned.length > 0) {
      state.currentScenarioId = assigned[0];
    }

    renderGroupButtons();
    renderAssignedCards();
    renderCurrentScenario();
    showToast("🎲 Kura çekildi! 10 gruba adil ve yeni senaryolar başarıyla dağıtıldı.", "success");
  }
}

// ==========================================================================
// ETKİNLİK DİNLEYİCİLERİ VE BAŞLATMA
// ==========================================================================

function setupEventListeners() {
  // Tema Toggle
  const themeBtn = document.getElementById("btnToggleTheme");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // Konu Kataloğu Sekme ve Buton Dinleyicileri
  const tabTopics = document.getElementById("tabBtnTopicsList");
  if (tabTopics) tabTopics.addEventListener("click", () => setCatalogTab("topics"));
  const tabMatrix = document.getElementById("tabBtnMatrixTable");
  if (tabMatrix) tabMatrix.addEventListener("click", () => setCatalogTab("matrix"));

  const btnOpenSec = document.getElementById("btnOpenTopicsCatalogSec");
  if (btnOpenSec) btnOpenSec.addEventListener("click", openTopicCatalogModal);

  const btnShuffle = document.getElementById("btnShuffleDraw");
  if (btnShuffle) btnShuffle.addEventListener("click", shuffleDrawConfirm);

  document.getElementById("btnAllGroupsMatrix").addEventListener("click", openMatrixModal);
  document.getElementById("btnCloseMatrixModal").addEventListener("click", closeMatrixModal);
  document.getElementById("btnCloseMatrixModalBtn").addEventListener("click", closeMatrixModal);
  document.getElementById("btnExportMatrixJson").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state.assignments, null, 2)], { type: "application/json" });
    downloadBlob(blob, "Sinif_Kura_Dagitim_Matrisi.json");
  });

  document.getElementById("btnToggleTeacherMode").addEventListener("click", toggleTeacherMode);
  document.getElementById("btnCloseTeacherModal").addEventListener("click", closeTeacherPasswordModal);
  document.getElementById("btnCancelTeacherModal").addEventListener("click", closeTeacherPasswordModal);
  document.getElementById("btnSubmitTeacherPassword").addEventListener("click", submitTeacherPassword);
  document.getElementById("teacherPasswordInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitTeacherPassword();
  });

  // Kilit açma butonu (Öğretmen)
  document.getElementById("btnTeacherUnlockForm").addEventListener("click", unlockCurrentScenarioByTeacher);

  // Kesin Gönder & Kontrol Et butonu
  document.getElementById("btnCheckScenarioAnswers").addEventListener("click", handleCheckButtonClick);
  document.getElementById("btnCloseFeedbackPanel").addEventListener("click", () => {
    document.getElementById("selfCheckResultsCard").style.display = "none";
  });

  document.getElementById("btnSaveAnswers").addEventListener("click", () => saveCurrentForm(true));
  document.getElementById("btnClearForm").addEventListener("click", clearFormConfirm);
  document.getElementById("btnCopyTableJson").addEventListener("click", copyTableJson);

  const exportToggle = document.getElementById("btnExportMenuToggle");
  const exportMenu = document.getElementById("exportMenuDropdown");
  exportToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    exportMenu.classList.toggle("show");
  });
  document.addEventListener("click", () => {
    exportMenu.classList.remove("show");
  });
  document.getElementById("btnExportJson").addEventListener("click", exportJson);
  document.getElementById("btnExportTxt").addEventListener("click", exportTxtReport);
  document.getElementById("btnPrintReport").addEventListener("click", printReport);

  const autoSaveInputs = [
    document.getElementById("selectDataSource"),
    document.getElementById("selectDataType"),
    document.getElementById("selectAnalyticsType"),
    document.getElementById("inputVebbData"),
    document.getElementById("inputVebbInfo"),
    document.getElementById("inputVebbInsight"),
    document.getElementById("inputVebbWisdom")
  ];

  autoSaveInputs.forEach(input => {
    input.addEventListener("input", triggerAutoSave);
    input.addEventListener("change", () => {
      triggerAutoSave();
      evaluateTeacherKeyLive();
    });
  });

  const levelData = document.querySelector(".pyramid-data");
  const levelInfo = document.querySelector(".pyramid-info");
  const levelInsight = document.querySelector(".pyramid-insight");
  const levelWisdom = document.querySelector(".pyramid-wisdom");

  const inputData = document.getElementById("inputVebbData");
  const inputInfo = document.getElementById("inputVebbInfo");
  const inputInsight = document.getElementById("inputVebbInsight");
  const inputWisdom = document.getElementById("inputVebbWisdom");

  if (levelData) levelData.addEventListener("click", () => inputData.focus());
  if (levelInfo) levelInfo.addEventListener("click", () => inputInfo.focus());
  if (levelInsight) levelInsight.addEventListener("click", () => inputInsight.focus());
  if (levelWisdom) levelWisdom.addEventListener("click", () => inputWisdom.focus());

  const pairFocus = (inputEl, levelEl) => {
    if (!inputEl || !levelEl) return;
    inputEl.addEventListener("focus", () => levelEl.classList.add("active"));
    inputEl.addEventListener("blur", () => levelEl.classList.remove("active"));
  };
  pairFocus(inputData, levelData);
  pairFocus(inputInfo, levelInfo);
  pairFocus(inputInsight, levelInsight);
  pairFocus(inputWisdom, levelWisdom);
}

// ==========================================================================
// UYGULAMA BAŞLATICI
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
  const mainHeader = document.getElementById("mainHeader");
  if (mainHeader) {
    mainHeader.style.setProperty("position", "relative", "important");
    mainHeader.style.setProperty("top", "auto", "important");
  }
  initTheme();
  loadFromStorage();
  populateFormOptions();

  const assigned = state.assignments[state.currentGroupId] || [];
  if (assigned.length > 0) {
    state.currentScenarioId = assigned[0];
  }

  renderGroupButtons();
  renderAssignedCards();
  renderCurrentScenario();
  updateTeacherModeUI();
  setupEventListeners();

  console.log("Veri Madenciliği Lab v4 başlatıldı.");
});
