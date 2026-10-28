// Ofertas de vuelos ("Vuelos baratos irrepetibles" en index.html) y su simulacion en
// AirSearch.html. No hay backend: el precio, la aerolinea y las fechas se calculan aqui
// para que se vean "vivos" (las fechas son relativas a hoy y el precio varia un poco
// cada dia), y la misma funcion getOffer() se usa en ambas paginas para que la tarjeta
// del index y el primer resultado de la busqueda (?offer=CODE) siempre coincidan.
(function () {
    const ROOT = document.currentScript.src.replace(/js\/offers\.js.*$/, '');

    // daysOut: dias desde hoy hasta la ida; stay: noches hasta la vuelta
    // cyber: true -> la tarjeta lleva .is-cyber (borde + badge "Cyber Travel", ver styles.css)
    const OFFERS = [
        { type: 'internacional', code: 'EZE', city: 'Buenos Aires', country: 'Argentina', airport: 'Aeropuerto Intl Ministro Pistarini', airline: 'JA', basePrice: 307, daysOut: 29, stay: 8, cyber: true, img: 'img/vuelos/buenos_aires_350x350.webp' },
        { type: 'internacional', code: 'MIA', city: 'Miami', country: 'Estados Unidos De America', airport: 'Aeropuerto Intl De Miami', airline: 'CM', basePrice: 419, daysOut: 41, stay: 10, img: 'img/vuelos/miami_350x350.webp' },
        { type: 'internacional', code: 'JFK', city: 'Nueva York', country: 'Estados Unidos De America', airport: 'Aeropuerto Intl John F. Kennedy', airline: 'DM', basePrice: 525, daysOut: 63, stay: 8, cyber: true, img: 'img/vuelos/nueva_york_350x350.webp' },
        { type: 'internacional', code: 'MAD', city: 'Madrid', country: 'España', airport: 'Aeropuerto Adolfo Suárez Madrid-Barajas', airline: 'PU', basePrice: 742, daysOut: 26, stay: 8, img: 'img/vuelos/madrid_turista_350x350.webp' },
        { type: 'nacional', code: 'AQP', city: 'Arequipa', country: 'Perú', airport: 'Aeropuerto Intl Rodríguez Ballón', airline: 'JA', basePrice: 89, daysOut: 19, stay: 2,cyber: true, img: 'img/vuelos/arequipa_350x350.webp' },
        { type: 'nacional', code: 'PIU', city: 'Piura', country: 'Perú', airport: 'Aeropuerto Cap. FAP Guillermo Concha Iberico', airline: 'JA', basePrice: 91, daysOut: 52, stay: 48,cyber: true, img: 'img/vuelos/piura_350x350.webp' },
        { type: 'nacional', code: 'TPP', city: 'Tarapoto', country: 'Perú', airport: 'Aeropuerto Cadete FAP Guillermo Del Castillo Paredes', airline: 'LA', basePrice: 113, daysOut: 12, stay: 15, img: 'img/vuelos/tarapoto_350x350.webp' },
        { type: 'nacional', code: 'CUZ', city: 'Cusco', country: 'Perú', airport: 'Aeropuerto Intl Alejandro Velasco Astete', airline: 'H2', basePrice: 112, daysOut: 4, stay: 28, img: 'img/vuelos/cusco_350x350.webp' },
    ];

    const AIRLINES = {
        LA: 'LATAM Airlines', H2: 'Sky Airline', JA: 'JetSMART', AV: 'Avianca', CM: 'Copa Airlines',
        AA: 'American Airlines', IB: 'Iberia', PU: 'Plus Ultra', DM: 'Arajet',
    };
    // Aerolineas que "compiten" en los demas resultados (mas caros) de cada tipo de ruta
    const AIRLINE_POOL = {
        internacional: ['LA', 'AV', 'CM', 'AA', 'IB', 'JA', 'H2'],
        nacional: ['LA', 'H2', 'JA'],
    };
    const LOCAL_LOGOS = ['LA', 'H2', 'AA'];

    const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const MONTHS_SHORT = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const DAYS_SHORT = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

    const fmtLong = (d) => `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    const fmtShort = (d) => `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]}`;
    const fmtInput = (d) => `${DAYS_SHORT[d.getDay()]} ${d.getDate()} ${MONTHS_SHORT[d.getMonth()].toLowerCase()} ${d.getFullYear()}`;
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    // Hash simple y estable: mismo texto -> mismo numero (precios estables durante el dia)
    const hash = (str) => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

    const airlineLogo = (iata) => LOCAL_LOGOS.includes(iata) ? `${ROOT}img/${iata}.png` : `https://pics.avs.io/120/120/${iata}.png`;

    const getOffer = (code) => {
        const base = OFFERS.find((o) => o.code === code);
        if (!base) return null;

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const departure = new Date(today);
        departure.setDate(today.getDate() + base.daysOut);
        const ret = new Date(departure);
        ret.setDate(departure.getDate() + base.stay);

        // Variacion diaria de -3% a +3% sobre el precio base
        const dayKey = today.toISOString().slice(0, 10);
        const price = Math.round(base.basePrice * (1 + ((hash(dayKey + code) % 7) - 3) / 100));

        return { ...base, airlineName: AIRLINES[base.airline], price, departure, ret };
    };

    window.FLIGHT_OFFERS = { OFFERS, getOffer };

    // ── Index: tarjetas de ofertas ([data-offers="internacional|nacional"]) ──────────
    const renderOfferCards = () => {
        document.querySelectorAll('[data-offers]').forEach((grid) => {
            grid.innerHTML = OFFERS.filter((o) => o.type === grid.dataset.offers).map((o) => {
                const offer = getOffer(o.code);
                return `
                    <a href="${ROOT}pages/AirSearch.html?offer=${offer.code}" class="item-box w-full flex-c card-product card-flight${offer.cyber ? ' is-cyber' : ''}">
                        <div class="card-flight-img">
                            <img src="${offer.img}" alt="${offer.city}" loading="lazy">
                            <span class="card-flight-badge">Vuelos Baratos</span>
                        </div>
                        <div class="content-item p-4 flex-c gap-2">
                            <h3 class="card-flight-title">${offer.city}</h3>
                            <span class="card-flight-sub">Saliendo de Lima</span>
                            <span class="card-flight-sub">Por ${offer.airlineName}</span>
                            <div class="card-flight-price flex-c">
                                <span class="badge badge-cyber">Cyber Travel</span>
                                <span class="spec-cantidad text-3">Ida y vuelta desde</span>
                                <span class="price">USD ${offer.price}</span>
                                <span class="card-flight-date"><span>Fecha de referencia:</span><br>${fmtLong(offer.departure)} - ${fmtLong(offer.ret)}</span>
                            </div>
                        </div>
                    </a>`;
            }).join('');
        });
    };

    // ── AirSearch: la oferta elegida pasa a ser el primer resultado ─────────────────
    // Se reemplaza en el DOM ya escrito por los partials de itinerario (que vienen con
    // Lima - Miami de ejemplo): ruta, fechas, aerolinea y precios. El primer resultado
    // lleva la aerolinea y precio de la oferta; los demas, otras aerolineas y precios
    // mayores y crecientes (simulando que la oferta es la mejor opcion).
    const replaceText = (root, pairs) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            let text = node.nodeValue;
            pairs.forEach(([from, to]) => { text = text.replace(from, to); });
            if (text !== node.nodeValue) node.nodeValue = text;
        }
    };

    const applyOfferToSearch = (offer) => {
        const dateRange = `${fmtShort(offer.departure)} - ${fmtShort(offer.ret)}`;

        const title = document.querySelectorAll('.header-section h1 span');
        if (title.length >= 2) {
            title[0].textContent = 'Lima';
            title[1].textContent = offer.city;
        }
        const dateLabel = document.querySelector('.header-section h1 + span');
        if (dateLabel) dateLabel.textContent = dateRange;

        // Formulario "Editar busqueda"
        document.querySelectorAll('input[name="DestinationAirportName1"]').forEach((input) => {
            input.value = `${offer.city}, ${offer.country}, ${offer.airport}`;
        });
        document.querySelectorAll('input[name="DepartureDate1"]').forEach((input) => { input.value = fmtInput(offer.departure); });
        document.querySelectorAll('input[name="DepartureDate2"]').forEach((input) => { input.value = fmtInput(offer.ret); });
        document.querySelectorAll('select[data-bind="value: TripType"]').forEach((select) => { select.value = 'roundtrip'; });

        // Filtro de horario
        const scheduleLabel = document.getElementById('schedule-label-0');
        if (scheduleLabel) scheduleLabel.innerHTML = `<b>Ida</b> · Vuelo a ${offer.city}`;
        const scheduleDate = document.querySelector('#schedule-leg-0 .flex-r span:nth-child(2)');
        if (scheduleDate) scheduleDate.textContent = fmtInput(offer.departure);

        // Tarjetas de resultados
        const competitors = AIRLINE_POOL[offer.type].filter((iata) => iata !== offer.airline);
        let price = offer.price;

        document.querySelectorAll('#results-content .flight-result-card').forEach((card, i) => {
            const iata = i === 0 ? offer.airline : competitors[(i - 1) % competitors.length];
            if (i > 0) price += Math.round(offer.price * (0.03 + (hash(offer.code + i) % 9) / 100));

            replaceText(card, [[/\bMIA\b/g, offer.code]]);

            card.querySelectorAll('.item-tramo > span.text-3').forEach((label) => {
                const leg = label.querySelector('b');
                if (leg) label.innerHTML = `<b>${leg.textContent}</b> - ${AIRLINES[iata]}`;
            });
            card.querySelectorAll('img.airline-logo').forEach((img) => {
                img.src = airlineLogo(iata);
                img.alt = AIRLINES[iata];
            });

            const priceLabel = card.querySelector('.content-price .flex-c span');
            if (priceLabel) priceLabel.textContent = 'Precio x 1 pasajero';
            const priceEl = card.querySelector('.content-price b');
            if (priceEl) priceEl.textContent = `USD ${price}`;

            if (i === 0) {
                const badges = card.querySelector('.list-badges');
                if (badges) badges.insertAdjacentHTML('beforeend', '<span class="badge badge-pink flex-r ai-c gap-1"><svg class="bs-icon"><use xlink:href="#i-checkmark"></use></svg>Mejor precio</span>');
            }
        });

        // Modales de detalle de itinerario (ida / vuelta)
        ['modalItinerarioIda', 'modalItinerarioVuelta'].forEach((id, legIndex) => {
            const modal = document.getElementById(id);
            if (!modal) return;
            const legDate = legIndex === 0 ? offer.departure : offer.ret;
            replaceText(modal, [
                [/Vie\. 13 Sep/g, capitalize(`${DAYS_SHORT[legDate.getDay()]}. ${fmtShort(legDate)}`)],
                [/Miami \(MIA\)/g, `${offer.city} (${offer.code})`],
                [/Aeropuerto Internacional de Miami/g, offer.airport],
                [/LATAM Airlines · LA /g, `${offer.airlineName} · ${offer.airline} `],
                [/LATAM Airlines/g, offer.airlineName],
            ]);
            modal.querySelectorAll('img.i-logos').forEach((img) => { img.src = airlineLogo(offer.airline); });
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        renderOfferCards();

        const code = new URLSearchParams(window.location.search).get('offer');
        const offer = code && getOffer(code.toUpperCase());
        if (offer && document.getElementById('results-content')) applyOfferToSearch(offer);
    });
})();
