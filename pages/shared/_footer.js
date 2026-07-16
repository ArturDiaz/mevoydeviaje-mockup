// Partial del footer. Solo enlaces/iconos decorativos (href="#"), sin accion real:
// se cablearan mas adelante cuando existan las paginas de destino.
document.write(`
<footer class="bg-white">
    <div class="w-responsive line-horizontal"></div>
    <div class="w-responsive py-7">
        <div class="grid cl-4 max-md:cl-1 gap-6">
            <div class="flex-c gap-3">
                <span class="text-4.5 font-bold">Mi cuenta</span>
                <a class="text-3.5 c-scale-500" href="#">Mi cuenta</a>
                <a class="text-3.5 c-scale-500" href="#">Mis pedidos</a>
                <a class="text-3.5 c-scale-500" href="#">Carrito de compras</a>
            </div>
            <div class="flex-c gap-3">
                <span class="text-4.5 font-bold">Información</span>
                <a class="text-3.5 c-scale-500" href="#">Políticas de privacidad</a>
                <a class="text-3.5 c-scale-500" href="#">Términos y condiciones</a>
                <a class="text-3.5 c-scale-500" href="#">Sobre nosotros</a>
            </div>
            <div class="flex-c gap-3">
                <span class="text-4.5 font-bold">Ayuda</span>
                <a class="text-3.5 c-scale-500" href="#">Atención al cliente</a>
                <a class="text-3.5 c-scale-500" href="#">Preguntas frecuentes</a>
            </div>
            <div class="flex-c gap-3">
                <span class="text-4.5 font-bold">Contáctanos</span>
                <span class="flex-r ai-c gap-2 text-3.5 c-scale-500">
                    <svg class="bs-icon"><use xlink:href="#i-call"></use></svg>
                    +511 616 9080
                </span>
                <span class="flex-r ai-c gap-2 text-3.5 c-scale-500">
                    <svg class="bs-icon"><use xlink:href="#i-location"></use></svg>
                    Av. Canaval y Moreyra 285, Lima, Perú
                </span>
                <span class="text-3.5 font-bold mt-2">Síguenos</span>
                <div class="flex-r gap-2">
                    <a class="btn btn-default-outline flex-c ai-c jc-c p-2" href="#" aria-label="Facebook">
                        <svg class="bs-icon"><use xlink:href="#i-facebook"></use></svg>
                    </a>
                    <a class="btn btn-default-outline flex-c ai-c jc-c p-2" href="#" aria-label="Instagram">
                        <svg class="bs-icon"><use xlink:href="#i-instagram"></use></svg>
                    </a>
                    <a class="btn btn-default-outline flex-c ai-c jc-c p-2" href="#" aria-label="TikTok">
                        <svg class="bs-icon"><use xlink:href="#i-tiktok"></use></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
`);
