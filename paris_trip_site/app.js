(function () {
  const data = window.TRIP_DATA;
  const root = document.getElementById("app");
  const view = document.body.dataset.view;
  const themeRoot = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const daysToggle = document.getElementById("days-toggle");

  if (!root || !data) return;

  function getTheme() {
    return themeRoot.dataset.theme === "light" ? "light" : "dark";
  }

  function nextThemeLabel(theme) {
    return theme === "dark" ? "Светлая тема" : "Тёмная тема";
  }

  function applyTheme(theme) {
    themeRoot.dataset.theme = theme;

    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      const label = themeToggle.querySelector(".theme-toggle-text");
      if (label) label.textContent = nextThemeLabel(theme);
    }

    try {
      localStorage.setItem("paris-theme", theme);
    } catch (error) {
      // Ignore storage issues and keep the selected theme for the current page only.
    }
  }

  function mapUrl(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  function isoDate(day) {
    const [dayPart, monthPart] = day.dateLabel.split(" ");
    const monthMap = {
      января: "01",
      февраля: "02",
      марта: "03",
      апреля: "04",
      мая: "05",
      июня: "06",
      июля: "07",
      августа: "08",
      сентября: "09",
      октября: "10",
      ноября: "11",
      декабря: "12"
    };

    return `2026-${monthMap[monthPart]}-${String(dayPart).padStart(2, "0")}`;
  }

  function weatherLabel(code) {
    if (code === 0) return "Ясно";
    if (code === 1) return "Почти ясно";
    if (code === 2) return "Переменная облачность";
    if (code === 3) return "Пасмурно";
    if ([45, 48].includes(code)) return "Туман";
    if ([51, 53, 55, 56, 57].includes(code)) return "Морось";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Дождь";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "Снег";
    if ([95, 96, 99].includes(code)) return "Гроза";
    return "Переменные условия";
  }

  function uvLabel(value) {
    if (value < 3) return "Низкий";
    if (value < 6) return "Умеренный";
    if (value < 8) return "Высокий";
    if (value < 11) return "Очень высокий";
    return "Экстремальный";
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function linkButtons(place) {
    const links = [];

    if (place.official) {
      links.push(
        `<a class="link-button primary" href="${place.official}" target="_blank" rel="noreferrer">Оф. сайт</a>`
      );
    }

    if (place.mapsQuery) {
      links.push(
        `<a class="link-button" href="${mapUrl(place.mapsQuery)}" target="_blank" rel="noreferrer">Google Maps</a>`
      );
    }

    return links.join("");
  }

  function renderDetours(day) {
    if (!day.detours || !day.detours.length) return "";

    return `
      <section class="section-card">
        <h3>По пути и на обратной дороге</h3>
        <div class="timeline">
          ${day.detours
            .map(
              (place) => `
                <div class="timeline-item">
                  <div class="timeline-content timeline-content-wide">
                    <h4>${escapeHtml(place.name)}</h4>
                    <p>${escapeHtml(place.note)}</p>
                    <div class="day-links">${linkButtons(place)}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  const dayImages = {
    "day-23":
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-24":
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-25":
      "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-26":
      "https://images.unsplash.com/photo-1508050919630-b135583b29ab?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-27":
      "https://images.unsplash.com/photo-1524396309943-e03f5249f002?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-28":
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-29":
      "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-30":
      "https://images.unsplash.com/photo-1722718136570-b0ad04a9ad12?auto=format&fit=crop&fm=jpg&q=80&w=1600",
    "day-01":
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&fm=jpg&q=80&w=1600"
  };

  function dayImageStyle(dayId) {
    const image = dayImages[dayId];
    if (!image) return "";
    return ` style="--day-image: url('${escapeHtml(image)}')"`;
  }

  function renderHero() {
    const dayCount = data.days.length;
    const bigDays = data.days.filter((day) =>
      day.title.includes("Лувр") || day.title.includes("Версаль") || day.title.includes("Dior")
    ).length;

    return `
      <section class="page-wrap">
        <section class="hero reveal">
          <div class="hero-grid">
            <div>
              <span class="eyebrow">Париж для двоих</span>
              <h1>${escapeHtml(data.meta.title)}</h1>
              <p class="hero-lead">
                ${escapeHtml(data.meta.dateRange)}. База — ${escapeHtml(data.meta.hotel)}.
                Этот гид собран так, чтобы поездка ощущалась лёгкой: с красивыми прогулками,
                хорошим кофе, большими точками вроде Лувра и Dior и спокойным запасом воздуха между ними.
              </p>
            </div>
            <aside class="hero-sidebar">
              <div class="stats">
                <div class="stat">
                  <strong>${dayCount} дней</strong>
                  <span>${escapeHtml(data.meta.dateRange)}</span>
                </div>
                <div class="stat">
                  <strong>${bigDays} ключевых дня</strong>
                  <span>Лувр, Dior, Версаль</span>
                </div>
                <div class="stat">
                  <strong>Маршрут для двоих</strong>
                  <span>${escapeHtml(data.meta.travelStyle)}</span>
                </div>
                <div class="stat">
                  <strong>Общественный транспорт</strong>
                  <span>метро, пешком, RER</span>
                </div>
              </div>
              <div class="hero-note">
                <strong>База и логистика</strong>
                <div>${escapeHtml(data.meta.arrival)}</div>
                <div>${escapeHtml(data.meta.departure)}</div>
                <div class="route-links" style="margin-top:10px;">
                  <a class="link-button" href="${mapUrl(data.meta.hotelMapsQuery)}" target="_blank" rel="noreferrer">Отель в Maps</a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section class="panel reveal">
          <div class="panel-header">
            <div>
              <h2>Ритм поездки</h2>
              <p>Коротко: как устроен маршрут, чтобы дни были насыщенными, но не утомляющими.</p>
            </div>
          </div>
          <div class="edit-grid">
            <div class="edit-box">
              <h3>Логика программы</h3>
              <ul class="clean-list">
                ${data.meta.principles.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </div>
            <div class="edit-box">
              <h3>Как пользоваться</h3>
              <p class="muted">Есть подробная и короткая версия маршрута, а в каждом важном слоте можно открыть спокойные альтернативы по настроению.</p>
            </div>
          </div>
        </section>
    `;
  }

  function renderGallery() {
    if (!data.meta.gallery || !data.meta.gallery.length) return "";

    return `
      <section class="panel reveal">
        <div class="panel-header">
          <div>
            <h2>Настроение поездки</h2>
            <p>Немного визуального воздуха между логистикой и маршрутами.</p>
          </div>
        </div>
        <div class="photo-grid">
          ${data.meta.gallery
            .map(
              (photo) => `
                <figure class="photo-card">
                  <img src="${photo.image}" alt="${escapeHtml(photo.title)}" loading="lazy">
                  <figcaption>
                    <strong>${escapeHtml(photo.title)}</strong>
                    <a href="${photo.creditUrl}" target="_blank" rel="noreferrer">${escapeHtml(photo.credit)}</a>
                  </figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderRoomFood() {
    const roomFood = data.meta.roomFood;
    if (!roomFood) return "";

    return `
      <section class="panel reveal">
        <div class="panel-header">
          <div>
            <h2>${escapeHtml(roomFood.title)}</h2>
            <p>${escapeHtml(roomFood.intro)}</p>
          </div>
        </div>
        <div class="comfort-grid">
          <section class="section-card">
            <h3>Что купить рядом с отелем</h3>
            <div class="timeline">
              ${roomFood.stores
                .map(
                  (store) => `
                    <div class="timeline-item">
                      <div class="timeline-time">store</div>
                      <div class="timeline-content">
                        <h4>${escapeHtml(store.name)}</h4>
                        <p>${escapeHtml(store.note)}</p>
                        <div class="day-links">${linkButtons(store)}</div>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>
          <section class="section-card">
            <h3>Доставка в номер</h3>
            <div class="timeline">
              ${roomFood.deliveryApps
                .map(
                  (app) => `
                    <div class="timeline-item">
                      <div class="timeline-time">app</div>
                      <div class="timeline-content">
                        <h4>${escapeHtml(app.name)}</h4>
                        <p>${escapeHtml(app.note)}</p>
                        <div class="day-links">${linkButtons(app)}</div>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
            <div class="note-list">
              ${roomFood.suggestions.map((item) => `<div class="soft-note">${escapeHtml(item)}</div>`).join("")}
            </div>
          </section>
        </div>
      </section>
    `;
  }

  function renderAlternativeGroup(group) {
    return `
      <section class="alt-group">
        <h5>${escapeHtml(group.title)}</h5>
        <div class="alt-items">
          ${group.items
            .map(
              (item) => `
                <article class="alt-item">
                  <strong>${escapeHtml(item.name)}</strong>
                  <p>${escapeHtml(item.note)}</p>
                  <div class="day-links">${linkButtons(item)}</div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderAlternatives(item) {
    if (!item.alternatives || !item.alternatives.length) return "";

    return `
      <details class="alt-panel">
        <summary>Альтернативы на этот слот</summary>
        <div class="alt-grid">
          ${item.alternatives.map(renderAlternativeGroup).join("")}
        </div>
      </details>
    `;
  }

  function renderJumpNav() {
    return `
      <section class="panel reveal">
        <div class="panel-header">
          <div>
            <h2>Прыжки по дням</h2>
            <p>Открывайте нужный день сразу и не прокручивайте вручную весь маршрут.</p>
          </div>
        </div>
        <div class="jump-nav">
          ${data.days
            .map(
              (day) =>
                `<a class="jump-link" href="#${day.id}">${escapeHtml(day.shortLabel)} · ${escapeHtml(day.title)}</a>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderDaysDrawer() {
    return `
      <div class="days-drawer-backdrop" id="days-drawer-backdrop" hidden></div>
      <aside class="days-drawer" id="days-drawer" aria-hidden="true">
        <div class="days-drawer-head">
          <strong>Дни маршрута</strong>
          <button type="button" class="days-drawer-close" id="days-drawer-close" aria-label="Закрыть меню">✕</button>
        </div>
        <div class="days-drawer-list">
          ${data.days
            .map(
              (day) => `
                <a class="days-drawer-link" href="#${day.id}" data-day-drawer-link>
                  <span>${escapeHtml(day.shortLabel)}</span>
                  <strong>${escapeHtml(day.title)}</strong>
                </a>
              `
            )
            .join("")}
        </div>
      </aside>
    `;
  }

  function renderCurrentDayIndicator() {
    const firstDay = data.days[0];

    return `
      <div class="current-day-indicator reveal" id="current-day-indicator" aria-live="polite">
        <div class="current-day-head">
          <span class="current-day-label">Сейчас</span>
          <div class="current-day-actions">
            <button type="button" class="day-nav-button" data-day-nav="-1" aria-label="Предыдущий день">↑</button>
            <button type="button" class="day-nav-button" data-day-nav="1" aria-label="Следующий день">↓</button>
          </div>
        </div>
        <strong>${escapeHtml(firstDay.dateLabel)}</strong>
        <span>${escapeHtml(firstDay.title)}</span>
      </div>
    `;
  }

  function renderWeatherCard(day) {
    const date = isoDate(day);

    return `
      <section class="weather-card" data-weather-date="${date}">
        <div class="weather-head">
          <strong>Погода</strong>
        </div>
        <div class="weather-main">
          <div class="weather-temp">--° / --°</div>
          <div class="weather-summary">Загрузка прогноза...</div>
        </div>
        <div class="weather-stats">
          <span class="weather-pill">Осадки: --</span>
          <span class="weather-pill">UV: --</span>
        </div>
      </section>
    `;
  }

  function renderDay(day) {
    return `
      <article class="day-card reveal" id="${day.id}">
        <div class="day-top has-image"${dayImageStyle(day.id)}>
          <div class="day-title-wrap">
            <div class="day-kicker">${escapeHtml(day.dateLabel)} · ${escapeHtml(day.weekday)}</div>
            <h2>${escapeHtml(day.title)}</h2>
            <p>${escapeHtml(day.summary)}</p>
            <div class="day-vibe-inline"><strong>Ритм дня:</strong> ${escapeHtml(day.vibe)}</div>
          </div>
          <aside class="day-meta">
            ${renderWeatherCard(day)}
            <div class="meta-card">
              <strong>Когда идти</strong>
              <div class="muted">${escapeHtml(day.bestWindow)}</div>
            </div>
          </aside>
        </div>

        <div class="day-body">
          <section class="section-card">
            <h3>Короткие ориентиры</h3>
            <ul class="clean-list">
              <li><strong>Логистика:</strong> ${escapeHtml(day.transit)}</li>
              <li><strong>Бронь:</strong> ${escapeHtml(day.booking)}</li>
              ${
                day.mustVisit && day.mustVisit.length
                  ? day.mustVisit
                      .map((item) => `<li><strong>Must-visit:</strong> ${escapeHtml(item)}</li>`)
                      .join("")
                  : ""
              }
              ${day.returnPlan ? `<li><strong>Возвращение:</strong> ${escapeHtml(day.returnPlan)}</li>` : ""}
              ${day.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
            </ul>
          </section>

          ${renderDetours(day)}
        </div>

        <section class="section-card" style="margin-top:20px;">
          <h3>План по времени</h3>
          <div class="timeline">
            ${day.schedule
              .map(
                (item) => `
                  <div class="timeline-item">
                    <div class="timeline-time">${escapeHtml(item.time)}</div>
                    <div class="timeline-content">
                      <h4>${escapeHtml(item.label)}</h4>
                      <div class="meta-list">
                        <span class="mini-pill">🚇 ${escapeHtml(item.transit)}</span>
                        <span class="mini-pill">⏳ ${escapeHtml(item.duration)}</span>
                        <span class="mini-pill">🎟️ ${escapeHtml(item.booking)}</span>
                      </div>
                      <p>${escapeHtml(item.description)}</p>
                      <div class="day-links">${linkButtons(item.place)}</div>
                      ${renderAlternatives(item)}
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
      </article>
    `;
  }

  function renderDetailed() {
    return `
      ${renderHero()}
      ${renderGallery()}
      ${renderCurrentDayIndicator()}
      ${renderJumpNav()}

      <section class="day-stack">
        ${data.days.map(renderDay).join("")}
      </section>

      ${renderRoomFood()}

      <section class="panel reveal" style="margin-top:22px;">
        <div class="panel-header">
          <div>
            <h2>Что бронировать заранее</h2>
            <p>Без лишних резервов на всё подряд: только то, что реально влияет на маршрут.</p>
          </div>
        </div>
        <div class="chips">
          ${data.meta.bookingChecklist.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
        </div>
      </section>

      <div class="footer-note reveal">
        Источники для логики маршрута: локальные гайды проекта, официальный график ключевых музеев и сайтов вроде Louvre, La Galerie Dior, Notre-Dame, Versailles, Fondation Azzedine Alaïa, Merci и Marin Montagut.
      </div>
      </section>
    `;
  }

  function compactRows() {
    return data.days
      .map((day) =>
        day.schedule
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(day.shortLabel)}<br><span class="muted">${escapeHtml(day.weekday)}</span></td>
                <td>${escapeHtml(item.time)}</td>
                <td>
                  <strong>${escapeHtml(item.label)}</strong>
                  <span class="muted">${escapeHtml(item.description)}</span>
                  <div class="route-links">${linkButtons(item.place)}</div>
                  ${renderAlternatives(item)}
                </td>
                <td>${escapeHtml(item.transit)}</td>
                <td>${escapeHtml(item.duration)}</td>
                <td>${escapeHtml(item.booking)}</td>
              </tr>
            `
          )
          .join("")
      )
      .join("");
  }

  function compactCards() {
    return data.days
      .map(
        (day) => `
          <article class="compact-card reveal has-image" id="${day.id}"${dayImageStyle(day.id)}>
            <h2>${escapeHtml(day.dateLabel)} · ${escapeHtml(day.weekday)}</h2>
            <p class="muted" style="margin-top:0;">${escapeHtml(day.title)}</p>
            <ul>
              ${day.schedule
                .map(
                  (item) => `
                    <li>
                      <strong>${escapeHtml(item.time)} — ${escapeHtml(item.label)}</strong><br>
                      <span class="muted">${escapeHtml(item.transit)} · ${escapeHtml(item.duration)} · бронь: ${escapeHtml(item.booking)}</span>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </article>
        `
      )
      .join("");
  }

  function renderCompact() {
    return `
      <section class="panel reveal compact-intro">
        <div class="panel-header">
          <div>
            <h2>Краткий маршрут</h2>
            <p>${escapeHtml(data.meta.dateRange)} · ${escapeHtml(data.meta.hotel)}</p>
          </div>
        </div>
        <div class="chips">
          <span class="chip">${data.days.length} дней</span>
          <span class="chip">Лувр · Dior · Версаль</span>
          <span class="chip">Метро, пешком, RER</span>
        </div>
      </section>

      <section class="compact-layout">
        <section class="panel reveal">
          <div class="panel-header">
            <div>
              <h2>По дням</h2>
              <p>Короткая версия маршрута: что делать, в каком ритме и что держать в голове.</p>
            </div>
          </div>
          <div class="compact-cards-grid">
            ${compactCards()}
          </div>
        </section>

        <section class="panel reveal">
          <div class="panel-header">
            <div>
              <h2>Главное</h2>
              <p>Короткие ориентиры перед выходом.</p>
            </div>
          </div>
          <ul class="clean-list">
            <li>На Лувр, Dior и Версаль лучше иметь слот заранее.</li>
            <li>Монмартр в субботу имеет смысл только ранним утром.</li>
            <li>Воскресенье специально оставлено прогулочным и гибким.</li>
            <li>Кораблик по Сене держите как красивую опцию по погоде, а не как жёсткий долг.</li>
            <li>Если в течение дня захочется сменить ритм, открывайте альтернативы внутри нужного слота.</li>
          </ul>
        </section>

        ${renderRoomFood()}
      </section>

      <div class="footer-note reveal">
        Подробная версия помогает прожить день целиком, а короткая остаётся удобной шпаргалкой на ходу.
      </div>
    `;
  }

  root.innerHTML = `
    <div class="page-wrap">
      ${renderDaysDrawer()}
      ${view === "compact" ? renderCompact() : renderDetailed()}
    </div>
  `;

  applyTheme(getTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(getTheme() === "dark" ? "light" : "dark");
    });
  }

  const daysDrawer = document.getElementById("days-drawer");
  const daysDrawerBackdrop = document.getElementById("days-drawer-backdrop");
  const daysDrawerClose = document.getElementById("days-drawer-close");
  const daysDrawerLinks = Array.from(document.querySelectorAll("[data-day-drawer-link]"));

  function setDaysDrawer(open) {
    if (!daysDrawer || !daysDrawerBackdrop) return;
    daysDrawer.setAttribute("aria-hidden", open ? "false" : "true");
    daysDrawerBackdrop.hidden = !open;
    document.body.classList.toggle("drawer-open", open);
    if (daysToggle) daysToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (daysToggle && daysDrawer && daysDrawerBackdrop) {
    daysToggle.setAttribute("aria-expanded", "false");
    daysToggle.addEventListener("click", () => setDaysDrawer(true));
    daysDrawerBackdrop.addEventListener("click", () => setDaysDrawer(false));
    if (daysDrawerClose) daysDrawerClose.addEventListener("click", () => setDaysDrawer(false));
    daysDrawerLinks.forEach((link) => {
      link.addEventListener("click", () => setDaysDrawer(false));
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setDaysDrawer(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) setDaysDrawer(false);
    });
  }

  if (view === "detailed") {
    const indicator = document.getElementById("current-day-indicator");
    const dayNodes = Array.from(document.querySelectorAll(".day-card"));

    if (indicator && dayNodes.length) {
      const strong = indicator.querySelector("strong");
      const text = indicator.querySelector("span:last-child");
      const navButtons = Array.from(indicator.querySelectorAll(".day-nav-button"));
      let activeIndex = 0;

      function updateCurrentDay() {
        const threshold = window.innerHeight * 0.28;
        let activeDay = dayNodes[0];

        dayNodes.forEach((node) => {
          const rect = node.getBoundingClientRect();
          if (rect.top <= threshold) activeDay = node;
        });

        const day = data.days.find((item) => item.id === activeDay.id);
        if (!day) return;
        activeIndex = data.days.findIndex((item) => item.id === activeDay.id);

        if (strong) strong.textContent = day.dateLabel;
        if (text) text.textContent = day.title;

        navButtons.forEach((button) => {
          const direction = Number(button.dataset.dayNav);
          const targetIndex = activeIndex + direction;
          button.disabled = targetIndex < 0 || targetIndex >= dayNodes.length;
        });
      }

      updateCurrentDay();
      window.addEventListener("scroll", updateCurrentDay, { passive: true });
      window.addEventListener("resize", updateCurrentDay);

      navButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = Number(button.dataset.dayNav);
          const targetNode = dayNodes[activeIndex + direction];
          if (!targetNode) return;

          targetNode.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  }

  if (view === "detailed" && window.fetch && data.meta.weather) {
    const weatherDates = data.days.map(isoDate);
    const startDate = weatherDates[0];
    const endDate = weatherDates[weatherDates.length - 1];
    const { latitude, longitude, timezone } = data.meta.weather;
    const weatherUrl =
      `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max` +
      `&timezone=${encodeURIComponent(timezone)}&start_date=${startDate}&end_date=${endDate}`;

    fetch(weatherUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
        return response.json();
      })
      .then((payload) => {
        const daily = payload.daily;
        if (!daily || !daily.time) return;

        const byDate = new Map(
          daily.time.map((date, index) => [
            date,
            {
              code: daily.weather_code?.[index],
              tempMax: daily.temperature_2m_max?.[index],
              tempMin: daily.temperature_2m_min?.[index],
              precipitation: daily.precipitation_sum?.[index],
              uv: daily.uv_index_max?.[index]
            }
          ])
        );

        document.querySelectorAll(".weather-card").forEach((card) => {
          const date = card.dataset.weatherDate;
          const forecast = byDate.get(date);
          if (!forecast) {
            card.classList.add("weather-error");
            card.querySelector(".weather-summary").textContent = "Прогноз пока недоступен";
            return;
          }

          const summary = weatherLabel(forecast.code);
          const uvValue = Number(forecast.uv ?? 0);
          const precipitation = Number(forecast.precipitation ?? 0);
          const tempMax = Math.round(Number(forecast.tempMax ?? 0));
          const tempMin = Math.round(Number(forecast.tempMin ?? 0));

          card.classList.add("weather-ready");
          card.querySelector(".weather-temp").textContent = `${tempMin}° / ${tempMax}°`;
          card.querySelector(".weather-summary").textContent = summary;
          card.querySelector(".weather-pill:nth-child(1)").textContent = `Осадки: ${precipitation.toFixed(1)} мм`;
          card.querySelector(".weather-pill:nth-child(2)").textContent = `UV: ${uvValue.toFixed(0)} · ${uvLabel(uvValue)}`;
        });
      })
      .catch(() => {
        document.querySelectorAll(".weather-card").forEach((card) => {
          card.classList.add("weather-error");
          card.querySelector(".weather-summary").textContent = "Не удалось загрузить прогноз";
        });
      });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
})();
