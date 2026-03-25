function setupToggleButtons(buttonSelector, panelSelector, dataKey, panelKey) {
  const buttons = document.querySelectorAll(buttonSelector);
  const panels = document.querySelectorAll(panelSelector);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset[dataKey];
      buttons.forEach((item) => item.classList.remove("is-active"));
      panels.forEach((panel) => panel.classList.remove("is-active"));
      button.classList.add("is-active");
      const panel = document.querySelector(`[data-${panelKey}="${target}"]`);
      if (panel) panel.classList.add("is-active");
    });
  });
}

function setupFlipCards() {
  document.querySelectorAll("[data-flip]").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
}

function setupIntroToggle() {
  const group = document.querySelector('[data-toggle-group="intro"]');
  if (!group) return;

  const buttons = group.querySelectorAll(".toggle-button");
  const panels = document.querySelectorAll(".compare-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      buttons.forEach((item) => item.classList.remove("is-active"));
      panels.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const panel = document.querySelector(`.compare-card[data-panel="${target}"]`);
      if (panel) panel.classList.add("is-active");
    });
  });
}

function setupSectionTracking() {
  const sections = document.querySelectorAll(".reveal-section");
  const navLinks = document.querySelectorAll(".topnav a");
  const notesPanels = document.querySelectorAll(".notes-panel");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: [0.08, 0.18],
      rootMargin: "0px 0px -8% 0px",
    },
  );

  const setActiveSection = () => {
    const viewportAnchor = window.innerHeight * 0.28;
    let activeSection = sections[0];

    sections.forEach((section) => {
      const { top } = section.getBoundingClientRect();
      if (top <= viewportAnchor) {
        activeSection = section;
      }
    });

    const sectionName = activeSection.dataset.sectionName;

    sections.forEach((section) => {
      section.classList.toggle("is-active-section", section === activeSection);
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const shouldHighlight =
        sectionName === "overview" ? href === "#overview" : href === `#${activeSection.id}`;
      link.classList.toggle("is-current", shouldHighlight);
    });

    notesPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.notes === sectionName);
    });
  };

  sections.forEach((section) => revealObserver.observe(section));
  setActiveSection();
  window.addEventListener("scroll", setActiveSection, { passive: true });
  window.addEventListener("resize", setActiveSection);
}

function setupProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (scrollTop / total) * 100 : 0;
    bar.style.width = `${progress}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupNotesDrawer() {
  const toggle = document.getElementById("notes-toggle");
  const close = document.getElementById("notes-close");
  const drawer = document.getElementById("notes-drawer");

  if (!toggle || !close || !drawer) return;

  toggle.addEventListener("click", () => {
    drawer.classList.toggle("is-open");
  });

  close.addEventListener("click", () => {
    drawer.classList.remove("is-open");
  });

  document.addEventListener("click", (event) => {
    const clickedInside = drawer.contains(event.target) || toggle.contains(event.target);
    if (!clickedInside) {
      drawer.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      drawer.classList.remove("is-open");
    }
  });
}

function setupStepCaptions() {
  const groups = {
    workflow: {
      captionId: "workflow-caption",
      text: {
        1: "先告诉它目标，而不是把每一步都替它念出来。",
        2: "它先要搞明白你到底让它做什么，不然勤奋也会跑偏。",
        3: "把整件事拆开，是 Agent 从“会说”变成“会做”的关键一步。",
        4: "真正拉开差距的地方，往往就在它能不能调对工具。",
        5: "不是做完就算数，它还得看自己有没有做歪。",
        6: "会调整，才更像系统；不会调整，就只是动作堆叠。",
        7: "最后才是把结果交还给你，而不是中途就开始自我感动。",
      },
    },
    deployment: {
      captionId: "deployment-caption",
      text: {
        1: "第一眼先看它有没有真的“动起来”，别先被礼貌回复骗了。",
        2: "看它调了什么能力，能帮助你判断这到底是不是 Agent 在工作。",
        3: "能不能闭环，比能不能回一句漂亮话更重要。",
        4: "一旦出错，先分清是脑子、手脚、钥匙还是门出了问题。",
      },
    },
  };

  Object.entries(groups).forEach(([groupName, config]) => {
    const group = document.querySelector(`[data-step-group="${groupName}"]`);
    const caption = document.getElementById(config.captionId);
    if (!group || !caption) return;

    group.querySelectorAll("[data-step]").forEach((button) => {
      button.addEventListener("click", () => {
        const step = button.dataset.step;
        group.querySelectorAll("[data-step]").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        caption.textContent = config.text[step] || "";
      });
    });
  });
}

function setupMatrixFilter() {
  const filters = document.querySelectorAll(".matrix-filter");
  const cells = document.querySelectorAll(".matrix-table [data-row]");
  const labels = document.querySelectorAll(".matrix-row-label");

  if (!filters.length) return;

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const target = filter.dataset.rowFilter;
      filters.forEach((item) => item.classList.remove("is-active"));
      filter.classList.add("is-active");

      cells.forEach((cell) => {
        const active = target === "all" || cell.dataset.row === target;
        cell.classList.toggle("is-active-row", active && target !== "all");
        cell.classList.toggle("is-muted", !active);
      });

      labels.forEach((label) => {
        const row = label.dataset.rowLabel;
        const active = target === "all" || row === target;
        label.classList.toggle("is-active-row", active && target !== "all");
        label.classList.toggle("is-muted", !active);
      });
    });
  });
}

function setupCaseTabs() {
  const groups = [
    {
      tabGroup: "cases",
      panelSelector: ".case-panel",
      key: "case",
      panelAttr: "data-case-panel",
    },
    {
      tabGroup: "soul",
      panelSelector: ".case-panel",
      key: "soul",
      panelAttr: "data-soul-panel",
    },
  ];

  groups.forEach((group) => {
    const tabRoot = document.querySelector(`[data-tab-group="${group.tabGroup}"]`);
    const panelRoot = document.querySelector(`[data-panel-group="${group.tabGroup}"]`);
    if (!tabRoot || !panelRoot) return;

    const tabs = tabRoot.querySelectorAll(".case-tab");
    const panels = panelRoot.querySelectorAll(group.panelSelector);

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset[group.key];
        tabs.forEach((item) => item.classList.remove("is-active"));
        panels.forEach((item) => item.classList.remove("is-active"));
        tab.classList.add("is-active");
        const panel = panelRoot.querySelector(`[${group.panelAttr}="${target}"]`);
        if (panel) panel.classList.add("is-active");
      });
    });
  });
}

setupIntroToggle();
setupToggleButtons(".node-button", ".node-panel", "node", "node-panel");
setupToggleButtons(".config-button", ".config-panel", "config", "config-panel");
setupFlipCards();
setupSectionTracking();
setupProgressBar();
setupNotesDrawer();
setupStepCaptions();
setupMatrixFilter();
setupCaseTabs();
