// Partial del header. Calcula la raiz del proyecto a partir de la URL del propio
// script (funciona con file:// abierto desde cualquier carpeta, y con http en cualquier profundidad),
// para que las imagenes siempre resuelvan sin importar desde que pagina se incluya este partial.
(function () {
    var scriptUrl = document.currentScript.src;
    var root = scriptUrl.replace(/pages\/shared\/header\/_header\.js.*$/, '');

    document.write(`
<header class="bg-header h-fit">
    <section class="w-responsive p-2.5 flex-r gap-3 jc-b ai-c py-2">
        <h1 class="hidden">Mevoydeviaje.com</h1>
        <div class="flex-r gap-3 ai-c">
            <button type="button" class="menu-movil-abrir" aria-label="Abrir menú" aria-controls="menu-movil" aria-expanded="false">
                <svg class="bs-icon"><use xlink:href="#i-menu-deep"></use></svg>
            </button>
            <div id="menu-movil" class="menu-movil" hidden>
                <div class="menu-movil-fondo" data-menu-movil-cerrar></div>
                <nav class="menu-movil-panel" aria-label="Menú">
                    <div class="menu-movil-cabecera">
                        <span class="menu-movil-marca">Menú</span>
                        <button type="button" class="menu-movil-cerrar" aria-label="Cerrar menú" data-menu-movil-cerrar>
                            <svg class="bs-icon"><use xlink:href="#i-close"></use></svg>
                        </button>
                    </div>
                    <section class="menu-movil-seccion">
                        <p class="menu-movil-titulo">Mi cuenta</p>
                        <p class="menu-movil-hola"><svg class="bs-icon"><use xlink:href="#i-user"></use></svg>Hola Admin</p>
                        <a class="menu-movil-link" href="#">Mi cuenta</a>
                        <a class="menu-movil-link" href="#">Órdenes</a>
                        <a class="menu-movil-link" href="#">Cerrar sesión</a>
                    </section>
                    <section class="menu-movil-seccion">
                        <p class="menu-movil-titulo">Moneda</p>
                        <div class="menu-movil-monedas">
                            <a class="menu-movil-moneda activa" aria-current="true" href="#" data-moneda="es">
                                <svg class="bs-logos"><use xlink:href="#i-use"></use></svg> US Dollar
                            </a>
                            <a class="menu-movil-moneda" href="#" data-moneda="en">
                                <svg class="bs-logos"><use xlink:href="#i-peru"></use></svg> Nuevo Sol
                            </a>
                        </div>
                    </section>
                </nav>
            </div>
            <a href="${root}index.html">
                <picture>
                    <source srcset="${root}img/logo-mvdv-blanco-new.png" type="image/png">
                    <img class="max-w-40 header-logo-mvdv" src="${root}img/logo-mvdv-blanco-new.png" alt="Logo Mevoydeviaje.com">
                </picture>
            </a>
            <div class="line-vertical"></div>
            <picture>
                <source srcset="${root}img/logo-continental-blanco.png" type="image/png">
                <img class="max-w-15 header-logo-ct" src="${root}img/logo-continental-blanco.png" alt="Logo Mevoydeviaje.com">
            </picture>
        </div>
        <div class="flex-r gap-2 c-white">
            <select name="idioma" id="idioma" class="btn-moneda header-moneda max-md:text-3">
                <option value="es">US Dollar</option>
                <option value="en">SOL</option>
            </select>
            <button class="header-cuenta user-account-link ct-user-account-btn ico-account flex-r ai-c gap-1 btn btn-default-outline p-2-3-2-3 border-r-3" type="button">
                <svg class="bs-icon"><use xlink:href="#i-user"></use></svg>
                <span class="max-sm:hidden">Hola Admin</span>
                <svg class="bs-icon sm:hidden"><use xlink:href="#i-dots-vertical"></use></svg>
            </button>
            <a class="flex-r gap-1 ai-c" type="button">
                <svg class="bs-icon text-5 m-0"><use xlink:href="#i-carrito"></use></svg>
                <span class="a-cyber text-2.5 px-2 border-r-3">1</span>
            </a>
        </div>
    </section>
    <div class="w-responsive line-horizontal-header"></div>
    <section class="content-nav w-responsive flex-r py-2">
        <nav class="w-fit m-auto">
            <div class="flex-r gap-3 m-auto w-fit" >
                <a class="a-cyber py-1.5 px-5 c-white" href="#">Cyber</a>
                <a class="py-1.5 px-4 c-white" href="#">Vuelos</a>
                <a class="py-1.5 px-4 c-white" href="#">Paquetes</a>
            </div>
        </nav>
    </section>
</header>
`);

    // Menu hamburguesa (solo mobile, < 768px; ver .menu-movil en styles.css): igual que
    // mevoydeviaje.com, en mobile la moneda y la cuenta salen del header y van en un
    // panel lateral. El panel se quita del flujo con [hidden] y se anima con .abierto.
    var menu = document.getElementById('menu-movil');
    var abrir = document.querySelector('.menu-movil-abrir');
    var moneda = document.getElementById('idioma');

    function setMenu(abierto) {
        abrir.setAttribute('aria-expanded', abierto);
        document.documentElement.classList.toggle('menu-movil-abierto', abierto);
        if (abierto) {
            menu.hidden = false;
            requestAnimationFrame(function () { menu.classList.add('abierto'); });
        } else {
            menu.classList.remove('abierto');
            setTimeout(function () { if (!menu.classList.contains('abierto')) menu.hidden = true; }, 250);
        }
    }

    abrir.addEventListener('click', function () { setMenu(true); });
    menu.addEventListener('click', function (e) {
        if (e.target.closest('[data-menu-movil-cerrar]')) setMenu(false);

        // Las monedas del panel replican el <select> del header (y viceversa)
        var opcion = e.target.closest('[data-moneda]');
        if (!opcion) return;
        e.preventDefault();
        moneda.value = opcion.dataset.moneda;
        moneda.dispatchEvent(new Event('change', { bubbles: true }));
        setMenu(false);
    });
    moneda.addEventListener('change', function () {
        menu.querySelectorAll('[data-moneda]').forEach(function (a) {
            var activa = a.dataset.moneda === moneda.value;
            a.classList.toggle('activa', activa);
            if (activa) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('abierto')) setMenu(false);
    });
})();
