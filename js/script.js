// Raiz absoluta del proyecto, calculada desde la URL de este mismo script (no de la pagina
// que lo incluye), para que los enlaces entre paginas funcionen igual sin importar si se
// abre desde la raiz (index.html) o desde /pages (ej. AirSearch.html), y con file:// o http.
const SITE_ROOT = document.currentScript.src.replace(/js\/script\.js.*$/, '');

// Filtros tipo acordeon (Escalas, Equipaje, Precio, Aerolineas, Horario): se llama
// desde el onclick="toggleSection('...-collapse')" de cada .section-header. Alterna
// la clase .is-collapsed en el contenido y en el header (para rotar el chevron).
window.toggleSection = function (id) {
    const content = document.getElementById(id);
    if (!content) return;
    const header = content.previousElementSibling;

    content.classList.toggle('is-collapsed');
    if (header) header.classList.toggle('is-collapsed');
};

// Listas tipo horarios (.list-toggle-2, ej. .list-itinerario): muestra solo los primeros
// 2 items. Cualquier .btn-toggle-more dentro del mismo .item-tramo revela/oculta el resto
// y alterna su propio texto (.btn-toggle-more-label) e icono (rotacion via .toggle-icon)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-toggle-more').forEach((btn) => {
        const list = btn.closest('.item-tramo')?.querySelector('.list-toggle-2');
        if (!list) return;

        const label = btn.querySelector('.btn-toggle-more-label');

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const expanded = list.classList.toggle('is-expanded');
            btn.classList.toggle('is-expanded', expanded);
            if (label) label.textContent = expanded ? 'Menos horarios' : 'Más horarios';
        });
    });
});

// Modal (tipo Bootstrap): abre con data-toggle="modal" data-target="#id", cierra con
// data-dismiss="modal" dentro del modal, click fuera del modal-dialog o tecla Escape.
// window.openModal/closeModal quedan disponibles para invocarlo tambien desde JS,
// pasando el id del modal (con o sin '#') o el propio elemento .modal.
let activeModalBackdrop = null;

window.openModal = function (target) {
    const modal = typeof target === 'string' ? document.getElementById(target.replace(/^#/, '')) : target;
    if (!modal) return;

    if (!activeModalBackdrop) {
        activeModalBackdrop = document.createElement('div');
        activeModalBackdrop.className = 'modal-backdrop';
        document.body.appendChild(activeModalBackdrop);
    }

    document.body.classList.add('modal-open');
    // Fuerza el reflow antes de agregar .show, para que la transicion de entrada
    // (opacity/transform) se anime en vez de aplicarse de golpe
    activeModalBackdrop.offsetHeight;
    activeModalBackdrop.classList.add('show');
    modal.classList.add('show');
};

window.closeModal = function (target) {
    const modal = typeof target === 'string' ? document.getElementById(target.replace(/^#/, '')) : target;
    if (!modal) return;

    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    if (activeModalBackdrop) {
        activeModalBackdrop.classList.remove('show');
        activeModalBackdrop.remove();
        activeModalBackdrop = null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-toggle="modal"]').forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            window.openModal(trigger.getAttribute('data-target'));
        });
    });

    document.querySelectorAll('[data-dismiss="modal"]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) window.closeModal(modal);
        });
    });

    document.querySelectorAll('.modal').forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeModal(modal);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        document.querySelectorAll('.modal.show').forEach((modal) => window.closeModal(modal));
    });
});

// Collapse tipo Bootstrap: cualquier [data-toggle="collapse"] data-target="#id" (o un
// selector CSS que matchee varios elementos) alterna la clase .show en el/los target(s),
// animando su alto de 0 al alto real del contenido y viceversa (.collapsing, ver
// styles.css). Generico: no esta atado a ningun feature en particular, se puede usar
// en cualquier parte del sitio agregando el mismo par de atributos.
document.addEventListener('DOMContentLoaded', () => {
    const expandCollapse = (target) => {
        target.classList.add('collapsing', 'show');
        const fullHeight = target.scrollHeight;
        target.style.height = '0px';
        target.offsetHeight; // reflow: confirma el 0px antes de animar al alto real
        requestAnimationFrame(() => {
            target.style.height = `${fullHeight}px`;
        });
        target.addEventListener('transitionend', function handler(e) {
            if (e.propertyName !== 'height' || e.target !== target) return;
            target.classList.remove('collapsing');
            target.style.height = '';
            target.removeEventListener('transitionend', handler);
        });

        // Curva de precios en mobile (<1024px): la columna de titulos (.price-calendar-corner/
        // .price-calendar-head-row) queda fija via CSS (position:sticky), solo el contenido
        // scrollea horizontalmente. Al desplegarse, centra esa columna con scroll en la fecha
        // actualmente buscada (.is-selected), ya que representa el dia actual
        if (window.innerWidth < 1024) {
            const calendar = target.querySelector('.price-calendar');
            const selectedCell = calendar && calendar.querySelector('.price-calendar-cell.is-selected');
            if (calendar && selectedCell) {
                requestAnimationFrame(() => {
                    const calendarRect = calendar.getBoundingClientRect();
                    const cellRect = selectedCell.getBoundingClientRect();
                    const offset = cellRect.left + cellRect.width / 2 - calendarRect.left
                        + calendar.scrollLeft - calendarRect.width / 2;
                    calendar.scrollLeft = Math.max(0, offset);
                });
            }
        }
    };

    const collapseCollapse = (target) => {
        target.style.height = `${target.scrollHeight}px`;
        target.offsetHeight; // reflow: fija el alto actual antes de animar a 0
        target.classList.add('collapsing');
        requestAnimationFrame(() => {
            target.style.height = '0px';
        });
        target.addEventListener('transitionend', function handler(e) {
            if (e.propertyName !== 'height' || e.target !== target) return;
            target.classList.remove('collapsing', 'show');
            target.style.height = '';
            target.removeEventListener('transitionend', handler);
        });
    };

    document.querySelectorAll('[data-toggle="collapse"]').forEach((trigger) => {
        const selector = trigger.getAttribute('data-target');
        const targets = selector ? document.querySelectorAll(selector) : [];
        if (!targets.length) return;

        const isShown = targets[0].classList.contains('show');
        trigger.setAttribute('aria-expanded', String(isShown));
        trigger.classList.toggle('active', isShown);

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const willShow = !targets[0].classList.contains('show');

            // Se turnan: los triggers de collapse que comparten el mismo contenedor directo
            // (ej. "Tabla precios" / "Curvas precios") son mutuamente excluyentes, asi que al
            // abrir uno se cierra cualquier otro que este abierto en ese mismo grupo
            if (willShow) {
                trigger.parentElement.querySelectorAll('[data-toggle="collapse"]').forEach((sibling) => {
                    if (sibling === trigger) return;
                    const siblingSelector = sibling.getAttribute('data-target');
                    const siblingTargets = siblingSelector ? document.querySelectorAll(siblingSelector) : [];
                    siblingTargets.forEach((siblingTarget) => {
                        if (siblingTarget.classList.contains('show')) collapseCollapse(siblingTarget);
                    });
                    sibling.classList.remove('active');
                    sibling.setAttribute('aria-expanded', 'false');
                });
            }

            targets.forEach((target) => {
                if (target.classList.contains('show')) {
                    collapseCollapse(target);
                } else {
                    expandCollapse(target);
                }
            });
            trigger.setAttribute('aria-expanded', String(willShow));
            trigger.classList.toggle('active', willShow);
        });
    });
});

// Tabs simples (ej. "Añadir maletas" separado por tramo Ida/Vuelta): un boton
// [data-tab-target="id"] activa el .tab-panel con ese id y oculta a sus hermanos,
// dentro del contenedor que agrupa tanto los botones como los paneles
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tab-target]').forEach((tabBtn) => {
        tabBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabsGroup = tabBtn.parentElement;
            const panelsContainer = tabsGroup.parentElement;

            tabsGroup.querySelectorAll('[data-tab-target]').forEach((btn) => btn.classList.remove('active'));
            tabBtn.classList.add('active');

            panelsContainer.querySelectorAll('.tab-panel').forEach((panel) => {
                panel.style.display = panel.id === tabBtn.dataset.tabTarget ? '' : 'none';
            });
        });
    });
});

// Badge de resultado destacado (.filter-badge, impreso oculto en cada tarjeta por los
// partials _itinerary*): sigue al tab activo de .content-actions (Recomendado/Más
// barato/Más rápido/Cyber). Por ahora no hay orden/filtrado real por tramo, asi que
// el destacado siempre es la primera tarjeta de #results-content; al cambiar de tab
// se le actualiza el texto (y el color, rojo si es "Cyber", azul en cualquier otro
// caso). El badge-pink "Últimos asientos disponibles" es independiente de esto
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.content-actions a');
    const resultsContainer = document.getElementById('results-content');
    if (!tabs.length || !resultsContainer) return;

    const updateFilterBadge = () => {
        const activeTab = document.querySelector('.content-actions a.active');
        const isCyber = activeTab ? activeTab.classList.contains('outline-cyber') : false;
        const label = activeTab ? activeTab.textContent.trim() : '';

        document.querySelectorAll('.flight-result-card').forEach((card) => {
            card.classList.remove('is-recommended');
            const badge = card.querySelector('.filter-badge');
            if (badge) badge.hidden = true;
        });

        const firstCard = resultsContainer.querySelector('.flight-result-card');
        const badge = firstCard && firstCard.querySelector('.filter-badge');
        if (!firstCard || !badge) return;

        firstCard.classList.add('is-recommended');
        badge.hidden = false;
        badge.classList.toggle('badge-red', isCyber);
        badge.classList.toggle('badge-blue', !isCyber);

        const labelEl = badge.querySelector('.filter-badge-label');
        if (labelEl) labelEl.textContent = label;
    };

    // Al cambiar de tab: como no hay filtrado/orden real todavia, se simula un segundo
    // de carga (mismas tarjetas .skeleton-card que usa el revelado incremental de abajo)
    // antes de volver a mostrar los resultados con el badge ya actualizado
    const FILTER_LOADING_DELAY = 1000;

    const createSkeletonCard = () => {
        const card = document.createElement('div');
        card.className = 'flight-result-card skeleton-card filter-loading-skeleton flex-r ai-c gap-3';
        card.innerHTML = `
            <div class="skeleton skeleton-circle"></div>
            <div class="flex-c gap-2 flex-1">
                <div class="skeleton skeleton-line skeleton-line-lg"></div>
                <div class="skeleton skeleton-line skeleton-line-sm"></div>
            </div>
            <div class="skeleton skeleton-line skeleton-line-price"></div>
        `;
        return card;
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            if (tab.classList.contains('active')) return;

            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');

            const skeletons = [createSkeletonCard(), createSkeletonCard(), createSkeletonCard()];
            resultsContainer.classList.add('is-filtering');
            resultsContainer.prepend(...skeletons);

            setTimeout(() => {
                skeletons.forEach((skeleton) => skeleton.remove());
                resultsContainer.classList.remove('is-filtering');
                updateFilterBadge();
            }, FILTER_LOADING_DELAY);
        });
    });

    updateFilterBadge();
});

// Revelado incremental de resultados (#results-content): muestra los primeros
// BATCH_SIZE .flight-result-card y revela BATCH_SIZE mas cada vez que el scroll
// llega al sentinel al final de la lista. Antes de revelarlos, simula LOADING_DELAY
// de carga (estilo Facebook) insertando tarjetas .skeleton-card, hasta mostrarlos todos
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('results-content');
    if (!container) return;

    const BATCH_SIZE = 5;
    const LOADING_DELAY = 2000;
    const cards = [...container.querySelectorAll('.flight-result-card')];
    if (cards.length <= BATCH_SIZE) return;

    cards.forEach((card, i) => {
        if (i >= BATCH_SIZE) card.classList.add('is-hidden-batch');
    });

    const sentinel = document.createElement('div');
    sentinel.className = 'results-sentinel';
    container.appendChild(sentinel);

    const createSkeletonCard = () => {
        const card = document.createElement('div');
        card.className = 'flight-result-card skeleton-card flex-r ai-c gap-3';
        card.innerHTML = `
            <div class="skeleton skeleton-circle"></div>
            <div class="flex-c gap-2 flex-1">
                <div class="skeleton skeleton-line skeleton-line-lg"></div>
                <div class="skeleton skeleton-line skeleton-line-sm"></div>
            </div>
            <div class="skeleton skeleton-line skeleton-line-price"></div>
        `;
        return card;
    };

    let revealed = BATCH_SIZE;
    let isLoading = false;

    const observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting || isLoading) return;
        isLoading = true;

        const nextBatch = cards.slice(revealed, revealed + BATCH_SIZE);
        const placeholders = nextBatch.map(createSkeletonCard);
        placeholders.forEach((placeholder) => container.insertBefore(placeholder, sentinel));

        setTimeout(() => {
            placeholders.forEach((placeholder) => placeholder.remove());
            nextBatch.forEach((card) => card.classList.remove('is-hidden-batch'));
            revealed += BATCH_SIZE;
            isLoading = false;

            if (revealed >= cards.length) {
                observer.disconnect();
                sentinel.remove();
            }
        }, LOADING_DELAY);
    }, { rootMargin: '200px' });

    observer.observe(sentinel);
});

// Total a pagar (#modalAddLuggage, footer, id="fare-selected-price"): precio base del
// vuelo (tomado de la tarjeta .flight-result-card cuyo "Añadir Maletas" abrio el modal)
// + el extra por persona de la tarifa seleccionada x cantidad de pasajeros. Clic en
// "Seleccionar" marca esa .fare-card como .is-selected (revela el indicador
// "Seleccionado" via CSS, desmarca a las demas del mismo .fare-cards) y recalcula el
// total; el total tambien se recalcula al abrir el modal (con Basic ya marcada por defecto)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalAddLuggage');
    const totalEl = document.getElementById('fare-selected-price');
    const paxEl = document.getElementById('fare-total-pax');
    if (!modal || !totalEl) return;

    let basePrice = 0;
    let passengers = 2;

    const recalcTotal = () => {
        const selectedCard = modal.querySelector('.fare-card.is-selected');
        const perPersonEl = selectedCard && selectedCard.querySelector('.fare-card-body .text-6');
        const perPerson = perPersonEl ? parseInt(perPersonEl.textContent.replace(/\D/g, ''), 10) || 0 : 0;

        totalEl.textContent = `US$ ${basePrice + perPerson * passengers}`;
        if (paxEl) paxEl.textContent = passengers;
    };

    document.querySelectorAll('[data-target="#modalAddLuggage"]').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const card = trigger.closest('.flight-result-card');
            const priceEl = card && card.querySelector('.content-price b');
            // Ojo: no seleccionar por ".text-3.5" (el punto rompe el selector CSS, se
            // interpreta como otra clase ".5"); se toma el primer span dentro de
            // .content-price .flex-c (el texto "Precio x N pasajeros")
            const paxLabel = card && card.querySelector('.content-price .flex-c span');

            basePrice = priceEl ? parseInt(priceEl.textContent.replace(/\D/g, ''), 10) || 0 : 0;
            passengers = paxLabel ? parseInt(paxLabel.textContent.replace(/\D/g, ''), 10) || 2 : 2;
            recalcTotal();
        });
    });

    document.querySelectorAll('[data-fare-select]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.fare-card');
            const group = card.closest('.fare-cards');

            group.querySelectorAll('.fare-card').forEach((c) => c.classList.remove('is-selected'));
            card.classList.add('is-selected');

            recalcTotal();
        });
    });
});

// Carrusel de tarifas (desktop, #modalAddLuggage): las flechas .fare-carousel-prev/next
// desplazan el track .fare-cards el ancho de una tarjeta + gap; scroll-snap (CSS) hace
// que quede alineada. En mobile las flechas estan ocultas (ver styles.css)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fare-carousel').forEach((carousel) => {
        const track = carousel.querySelector('.fare-cards');
        const prevBtn = carousel.querySelector('.fare-carousel-prev');
        const nextBtn = carousel.querySelector('.fare-carousel-next');
        if (!track || !prevBtn || !nextBtn) return;

        const scrollByCard = (dir) => {
            const card = track.querySelector('.fare-card');
            if (!card) return;
            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
        };

        prevBtn.addEventListener('click', () => scrollByCard(-1));
        nextBtn.addEventListener('click', () => scrollByCard(1));
    });
});

// Tabla de precios por aerolinea (#collapseTablaPreciosDesktop): si hay mas de 4
// columnas de aerolineas, se agrega .is-carousel a .price-table-wrap (CSS la vuelve
// scroll horizontal con scroll-snap mostrando 4 a la vez); con 4 o menos queda como
// tabla estatica normal. Las flechas .price-table-prev/next desplazan el track el
// ancho de una columna + gap (mismo patron que .fare-carousel)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.price-table-wrap').forEach((wrap) => {
        const track = wrap.querySelector('.price-table-track');
        if (!track) return;

        const cols = track.querySelectorAll('.price-table-col');
        wrap.classList.toggle('is-carousel', cols.length > 4);

        const prevBtn = wrap.querySelector('.price-table-prev');
        const nextBtn = wrap.querySelector('.price-table-next');
        if (!prevBtn || !nextBtn) return;

        const scrollByCol = (dir) => {
            const col = track.querySelector('.price-table-col');
            if (!col) return;
            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            track.scrollBy({ left: dir * (col.offsetWidth + gap), behavior: 'smooth' });
        };

        prevBtn.addEventListener('click', () => scrollByCol(-1));
        nextBtn.addEventListener('click', () => scrollByCol(1));
    });
});

// Precios clickeables de la tabla comparativa (.price-table-col: Directo/Con Escalas
// por aerolinea) y de la curva de precios (.price-calendar-cell: cada combinacion
// Ida/Vuelta): por el momento, hasta que se defina el flujo real de seleccion,
// cualquier precio clickeado simplemente recarga la pagina. Se ignoran las celdas
// vacias (ej. aerolineas sin vuelo directo)
document.addEventListener('DOMContentLoaded', () => {
    const priceCells = [];

    document.querySelectorAll('.price-table-col').forEach((col) => {
        const cells = col.querySelectorAll('.price-table-cell');
        // cells[0] es el nombre/logo de la aerolinea; cells[1] y cells[2] son Directo/Con Escalas
        priceCells.push(cells[1], cells[2]);
    });

    document.querySelectorAll('.price-calendar-cell').forEach((cell) => {
        priceCells.push(cell);
    });

    priceCells.forEach((cell) => {
        if (!cell || !cell.textContent.trim()) return;
        cell.classList.add('is-clickable-price');
        cell.addEventListener('click', () => location.reload());
    });
});

// .header-section (sticky, top:0): arranca sin fondo/padding, mezclado con la pagina.
// Un sentinel de 1px justo antes de el (.header-section-sentinel) se observa con
// IntersectionObserver; cuando ese sentinel sale del viewport (scroll hacia abajo)
// es porque el sticky ya quedo "pegado" arriba, y ahi se le agrega .is-stuck
// (fondo + padding, ver styles.css). Vuelve a quitarse al scrollear hacia arriba.
document.addEventListener('DOMContentLoaded', () => {
    const sentinel = document.querySelector('.header-section-sentinel');
    const header = document.querySelector('.header-section');
    if (!sentinel || !header) return;

    const observer = new IntersectionObserver(([entry]) => {
        header.classList.toggle('is-stuck', !entry.isIntersecting);
    });
    observer.observe(sentinel);
});

// Floats tipo modal: cualquier .btn-float abre/cierra el .content-float hermano dentro de su mismo contenedor
document.addEventListener('DOMContentLoaded', () => {
    // Boton "Buscar": lleva a AirSearch.html. Esta misma pagina incluye el mismo formulario,
    // asi que buscar de nuevo desde ahi (rebusqueda) vuelve a caer aqui con normalidad.
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            window.location.href = `${SITE_ROOT}pages/AirSearch.html`;
        });
    }

    // Pagina de resultados: muestra el skeleton de toda la pagina (casillas grises)
    // mientras "carga", y a los 4 segundos lo cambia por el contenido real.
    const pageSkeleton = document.getElementById('page-skeleton');
    const mainContent = document.getElementById('main-content');
    if (pageSkeleton && mainContent) {
        setTimeout(() => {
            pageSkeleton.classList.add('skeleton-hidden');
            mainContent.classList.remove('skeleton-hidden');
        }, 4000);
    }

    const closeAllFloats = (except) => {
        document.querySelectorAll('.content-float.active').forEach((panel) => {
            if (panel === except) return;
            panel.classList.remove('active');
            const btn = panel.parentElement.querySelector('.btn-float');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    };

    const openFloat = (panel) => {
        if (!panel) return;
        closeAllFloats(panel);
        panel.classList.add('active');
        const trigger = panel.parentElement.querySelector('.btn-float');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
    };

    document.querySelectorAll('.btn-float').forEach((btn) => {
        const panel = btn.parentElement.querySelector('.content-float');
        if (!panel) return;

        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = panel.classList.contains('active');
            closeAllFloats(isOpen ? null : panel);
            panel.classList.toggle('active', !isOpen);
            btn.setAttribute('aria-expanded', String(!isOpen));
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.content-float') && !e.target.closest('.btn-float')) {
            closeAllFloats();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllFloats();
    });

    // Inputs tipo Kendo (Origen/Destino): boton "x" para limpiar el texto, dentro del input
    document.querySelectorAll('.k-input').forEach((wrapper) => {
        const input = wrapper.querySelector('.k-input-inner');
        const clearBtn = wrapper.querySelector('.k-clear-value');
        if (!input || !clearBtn) return;

        const syncClearVisibility = () => {
            clearBtn.classList.toggle('k-hidden', input.value.trim().length === 0);
        };
        syncClearVisibility();
        input.addEventListener('input', syncClearVisibility);

        clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            input.value = '';
            syncClearVisibility();
            input.focus();
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
    });

    // Boton de intercambio Origen/Destino: va entre ambos .flight-input-wrapper
    document.querySelectorAll('button[data-bind*="swapAirports"]').forEach((btn) => {
        const originInput = btn.previousElementSibling && btn.previousElementSibling.querySelector('.k-input-inner');
        const destInput = btn.nextElementSibling && btn.nextElementSibling.querySelector('.k-input-inner');
        if (!originInput || !destInput) return;

        btn.addEventListener('click', () => {
            const temp = originInput.value;
            originInput.value = destInput.value;
            destInput.value = temp;

            [originInput, destInput].forEach((input) => {
                input.dispatchEvent(new Event('input', { bubbles: true }));
            });
        });
    });

    // Calendarios: elegir un dia actualiza el input, cierra el calendario y abre
    // el siguiente encadenado (ej. Ida -> Vuelta) manteniendo la fecha ya elegida
    const monthsAbbr = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const weekdaysAbbr = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    const formatSelectedDate = (date) =>
        `${weekdaysAbbr[date.getDay()]}. ${date.getDate()} ${monthsAbbr[date.getMonth()]}. ${date.getFullYear()}`;

    const clearRangeShading = (grid) => {
        grid.querySelectorAll('.calendar-day.is-in-range').forEach((cell) => cell.classList.remove('is-in-range'));
    };

    const shadeRange = (grid, fromStr, toStr) => {
        clearRangeShading(grid);
        const from = new Date(`${fromStr}T00:00:00`);
        const to = new Date(`${toStr}T00:00:00`);
        const min = from <= to ? from : to;
        const max = from <= to ? to : from;

        grid.querySelectorAll('.calendar-day[data-date]').forEach((cell) => {
            const current = new Date(`${cell.dataset.date}T00:00:00`);
            if (current > min && current < max) cell.classList.add('is-in-range');
        });
    };

    document.querySelectorAll('.calendar-float').forEach((calendarFloat) => {
        const label = calendarFloat.dataset.label || '';
        const daysGrid = calendarFloat.querySelector('.calendar-days');
        const input = calendarFloat.parentElement.querySelector('.k-input-inner');
        if (!daysGrid) return;

        daysGrid.addEventListener('click', (e) => {
            const day = e.target.closest('.calendar-day');
            if (!day || !day.dataset.date) return;

            daysGrid.querySelectorAll('.calendar-day.is-selected').forEach((selected) => {
                selected.classList.remove('is-selected');
                const tag = selected.querySelector('small');
                if (tag) tag.remove();
            });

            day.classList.add('is-selected');
            if (label) {
                const tag = document.createElement('small');
                tag.textContent = label;
                day.appendChild(tag);
            }

            if (input) {
                input.value = formatSelectedDate(new Date(`${day.dataset.date}T00:00:00`));
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // Si este calendario ya tiene una fecha de Ida de referencia, sombrea el
            // rango entre esa referencia y la fecha de Vuelta recien elegida
            const referenceCell = daysGrid.querySelector('.calendar-day.is-reference');
            if (referenceCell) {
                shadeRange(daysGrid, referenceCell.dataset.date, day.dataset.date);
            }

            const nextCalendar = calendarFloat.dataset.nextCalendar
                ? document.getElementById(calendarFloat.dataset.nextCalendar)
                : null;

            if (nextCalendar) {
                // Marca en el calendario de Vuelta la fecha elegida como Ida, de referencia
                const nextDaysGrid = nextCalendar.querySelector('.calendar-days');
                if (nextDaysGrid) {
                    nextDaysGrid.querySelectorAll('.calendar-day.is-reference').forEach((cell) => {
                        cell.classList.remove('is-reference');
                        const tag = cell.querySelector('small');
                        if (tag && !cell.classList.contains('is-selected')) tag.remove();
                    });

                    const nextReferenceCell = nextDaysGrid.querySelector(`.calendar-day[data-date="${day.dataset.date}"]`);
                    if (nextReferenceCell) {
                        nextReferenceCell.classList.add('is-reference');
                        if (!nextReferenceCell.querySelector('small')) {
                            const tag = document.createElement('small');
                            tag.textContent = 'Ida';
                            nextReferenceCell.appendChild(tag);
                        }

                        const nextSelectedCell = nextDaysGrid.querySelector('.calendar-day.is-selected');
                        if (nextSelectedCell) {
                            shadeRange(nextDaysGrid, nextReferenceCell.dataset.date, nextSelectedCell.dataset.date);
                        } else {
                            clearRangeShading(nextDaysGrid);
                        }
                    } else {
                        clearRangeShading(nextDaysGrid);
                    }
                }

                openFloat(nextCalendar);
            } else {
                closeAllFloats();
            }
        });

        // Vista previa en tiempo real: al pasar el mouse sobre un dia, sombrea el
        // rango entre la fecha de Ida (referencia) y el dia bajo el cursor
        daysGrid.addEventListener('mouseover', (e) => {
            const day = e.target.closest('.calendar-day[data-date]');
            const referenceCell = daysGrid.querySelector('.calendar-day.is-reference');
            if (!day || !referenceCell) return;
            shadeRange(daysGrid, referenceCell.dataset.date, day.dataset.date);
        });

        daysGrid.addEventListener('mouseleave', () => {
            const referenceCell = daysGrid.querySelector('.calendar-day.is-reference');
            const selectedCell = daysGrid.querySelector('.calendar-day.is-selected');
            if (referenceCell && selectedCell) {
                shadeRange(daysGrid, referenceCell.dataset.date, selectedCell.dataset.date);
            } else {
                clearRangeShading(daysGrid);
            }
        });
    });

    // Buscador de Origen/Destino: filtra window.AIRPORTS_DATA desde 3 caracteres.
    // Al seleccionar un destino, recien ahi se abre el calendario de Fecha ida del tramo.
    if (window.AIRPORTS_DATA) {
        const escapeHtml = (str) =>
            str.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

        const highlight = (text, query) => {
            const idx = text.toLowerCase().indexOf(query.toLowerCase());
            if (idx === -1) return escapeHtml(text);
            const before = escapeHtml(text.slice(0, idx));
            const match = escapeHtml(text.slice(idx, idx + query.length));
            const after = escapeHtml(text.slice(idx + query.length));
            return `${before}<mark>${match}</mark>${after}`;
        };

        document.querySelectorAll('.k-autocomplete').forEach((wrapper) => {
            const input = wrapper.querySelector('.k-input-inner');
            if (!input || !wrapper.parentElement) return;

            const isDestination = input.name.startsWith('DestinationAirportName');
            const leg = input.name.replace(/^(Origin|Destination)AirportName/, '');

            const dropdown = document.createElement('div');
            dropdown.className = 'airport-dropdown';
            wrapper.parentElement.appendChild(dropdown);

            const closeDropdown = () => {
                dropdown.classList.remove('active');
                dropdown.innerHTML = '';
            };

            const renderResults = (query) => {
                const matches = window.AIRPORTS_DATA.filter((item) =>
                    `${item.city} ${item.country}`.toLowerCase().includes(query.toLowerCase())
                ).slice(0, 8);

                if (!matches.length) {
                    closeDropdown();
                    return;
                }

                dropdown.innerHTML = matches
                    .map(
                        (item) => `
                    <div class="airport-group">
                        <div class="airport-group-header">${escapeHtml(item.country)} · ${highlight(item.city, query)}</div>
                        <div class="airport-item" data-city="${escapeHtml(item.city)}" data-country="${escapeHtml(item.country)}" data-airport="${escapeHtml(item.airport)}" data-code="${escapeHtml(item.code)}">
                            <svg class="bs-icon"><use xlink:href="#i-plane-r"></use></svg>
                            <span class="airport-item-name">${highlight(item.airport, query)}</span>
                            <span class="airport-item-code">${escapeHtml(item.code)}</span>
                        </div>
                    </div>`
                    )
                    .join('');
                dropdown.classList.add('active');
            };

            input.addEventListener('input', () => {
                const query = input.value.trim();
                if (query.length < 3) {
                    closeDropdown();
                    return;
                }
                renderResults(query);
            });

            input.addEventListener('focus', () => {
                const query = input.value.trim();
                if (query.length >= 3) renderResults(query);
            });

            dropdown.addEventListener('click', (e) => {
                const item = e.target.closest('.airport-item');
                if (!item) return;
                e.stopPropagation();

                input.value = `${item.dataset.city}, ${item.dataset.country}, ${item.dataset.airport}`;
                closeDropdown();
                input.dispatchEvent(new Event('input', { bubbles: true }));

                if (isDestination) {
                    openFloat(document.getElementById(`calendar-DepartureDate${leg}`));
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.k-autocomplete') && !e.target.closest('.airport-dropdown')) {
                document.querySelectorAll('.airport-dropdown.active').forEach((d) => {
                    d.classList.remove('active');
                    d.innerHTML = '';
                });
            }
        });
    }
});

// Contador de pasajeros (.content-pasajeros): los botones +/- de cada fila (Adultos/
// Menores/Infantes, identificados por data-passenger-field) suman/restan su .pax-count
// respetando limites min/max, se deshabilitan al llegar a esos limites, y el total se
// refleja en el boton "Pasajeros" (.btn-float) como "N Persona"/"N Personas"
document.addEventListener('DOMContentLoaded', () => {
    const LIMITS = {
        'PassengerInfo.NumberOfAdults': { min: 1, max: 9 },
        'PassengerInfo.NumberOfChildren': { min: 0, max: 8 },
        'PassengerInfo.NumberOfInfants': { min: 0, max: 8 },
    };

    document.querySelectorAll('.content-pasajeros').forEach((container) => {
        const label = container.querySelector('.btn-float');

        const updateLabel = () => {
            let total = 0;
            container.querySelectorAll('.pax-count').forEach((el) => {
                total += parseInt(el.textContent, 10) || 0;
            });
            if (label) label.textContent = `${total} ${total === 1 ? 'Persona' : 'Personas'}`;
        };

        container.querySelectorAll('.pax-counter').forEach((counter) => {
            const countEl = counter.querySelector('.pax-count');
            const removeBtn = counter.querySelector('[data-bind*="removePassenger"]');
            const addBtn = counter.querySelector('[data-bind*="addPassenger"]');
            if (!countEl || !removeBtn || !addBtn) return;

            const limits = LIMITS[removeBtn.dataset.passengerField] || { min: 0, max: 9 };

            const render = () => {
                const count = parseInt(countEl.textContent, 10) || 0;
                removeBtn.disabled = count <= limits.min;
                addBtn.disabled = count >= limits.max;
            };

            removeBtn.addEventListener('click', () => {
                const count = parseInt(countEl.textContent, 10) || 0;
                if (count <= limits.min) return;
                countEl.textContent = count - 1;
                render();
                updateLabel();
            });

            addBtn.addEventListener('click', () => {
                const count = parseInt(countEl.textContent, 10) || 0;
                if (count >= limits.max) return;
                countEl.textContent = count + 1;
                render();
                updateLabel();
            });

            render();
        });

        updateLabel();
    });
});
