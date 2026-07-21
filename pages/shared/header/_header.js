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
            <a href="${root}index.html">
                <picture>
                    <source srcset="${root}img/logo-mvdv-blanco-new.png" type="image/png">
                    <img class="max-w-40" src="${root}img/logo-mvdv-blanco-new.png" alt="Logo Mevoydeviaje.com">
                </picture>
            </a>
            <div class="line-vertical"></div>
            <picture class="max-sm:hidden">
                <source srcset="${root}img/logo-continental-blanco.png" type="image/png">
                <img class="max-w-15" src="${root}img/logo-continental-blanco.png" alt="Logo Mevoydeviaje.com">
            </picture>
        </div>
        <div class="flex-r gap-2 c-white">
            <select name="idioma" id="idioma" class="btn-moneda max-md:text-3">
                <option value="es">US Dollar</option>
                <option value="en">SOL</option>
            </select>
            <button class="user-account-link ct-user-account-btn ico-account flex-r ai-c gap-1 btn btn-default-outline p-2-3-2-3 border-r-3" type="button">
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
})();
