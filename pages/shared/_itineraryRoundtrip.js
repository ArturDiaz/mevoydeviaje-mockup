// Partial: tarjeta de itinerario "ida y vuelta" con seleccion de horarios (flight-result-card flex-c gap-2)
document.write(`
<div class="flight-result-card flex-c gap-2">
    <div class="flex-c min-md:grid cl-4 gap-4">
        <div class="content-tramos flex-c gap-4 span-3">
            <div class="item-tramo flex-c gap-2">
                <span class="text-3"><b>IDA</b> - LATAM Airlines</span>
                <div class="flex-r gap-3">
                    <div class="airline-logo flex-c ai-c jc-c">
                        <img class=" airline-logo" src="../img/LA.png">
                    </div>
                    <div class="flex-c gap-2 w-full">
                        <div class="list-itinerario flex-c gap-2.5">
                            <span class="text-3.5 flex-r gap-1 ai-c"><input type="radio" name="itinerary-a" id="itinerary-1" checked>
                                <label class="grid cl-4 ai-c gap-3 w-full" for="itinerary-1">
                                    <span class="span-3 ml-2"><b>06:10</b> LIM — <b>12:45</b> MIA · <span class="text-3 min-md:ml-4">1 escala · 5h 20m</span></span>
                                    <div class="flex-r gap-2 ai-c jc-r">
                                        <span class="flex-r ai-r text-5.5 c-scale-300">
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-mochila"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-maleta-mano"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0"><use xlink:href="#i-bodega"></use></svg>
                                        </span>
                                        <a class="btn-detail-itinerary-a" data-toggle="modal" data-target="#modalItinerarioIda"><svg class="bs-icon"><use xlink:href="#i-arrow-bottom"></use></svg></a>
                                    </div>
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-tramo flex-c gap-2">
                <span class="text-3"><b>VUELTA</b> - LATAM Airlines</span>
                <div class="flex-r gap-3">
                    <div class="airline-logo flex-c ai-c jc-c">
                        <img class=" airline-logo" src="../img/LA.png">
                    </div>
                    <div class="flex-c gap-3 w-full">
                        <div class="list-itinerario list-toggle-2 flex-c gap-2.5">
                            <span class="text-3.5 flex-r gap-1 ai-c"><input type="radio" name="itinerary-b" id="itinerary-b1" checked>
                                <label class="grid cl-4 ai-c gap-3 w-full" for="itinerary-b1">
                                    <span class="span-3 ml-2"><b>06:10</b> MIA — <b>12:45</b> LIM <span class="text-3 min-md:ml-4">1 escala · 5h 20m</span></span>
                                    <div class="flex-r gap-2 ai-c jc-r">
                                        <span class="flex-r ai-r text-5.5 c-scale-300">
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-mochila"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-maleta-mano"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0"><use xlink:href="#i-bodega"></use></svg>
                                        </span>
                                        <a class="btn-detail-itinerary-b" data-toggle="modal" data-target="#modalItinerarioVuelta"><svg class="bs-icon"><use xlink:href="#i-arrow-bottom"></use></svg></a>
                                    </div>
                                </label>
                            </span>
                            <span class="text-3.5 flex-r gap-1 ai-c"><input type="radio" name="itinerary-b" id="itinerary-b2">
                                <label class="grid cl-4 ai-c gap-3 w-full" for="itinerary-b2">
                                    <span class="span-3 ml-2"><b>08:10</b> MIA — <b>14:45</b> LIM <span class="text-3 min-md:ml-4">1 escala · 6h 35m</span></span>
                                    <div class="flex-r gap-2 ai-c jc-r">
                                        <span class="flex-r ai-r text-5.5 c-scale-300">
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-mochila"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-maleta-mano"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0"><use xlink:href="#i-bodega"></use></svg>
                                        </span>
                                        <a class="btn-detail-itinerary-b" data-toggle="modal" data-target="#modalItinerarioVuelta"><svg class="bs-icon"><use xlink:href="#i-arrow-bottom"></use></svg></a>
                                    </div>
                                </label>
                            </span>
                            <span class="text-3.5 flex-r gap-1 ai-c"><input type="radio" name="itinerary-b" id="itinerary-b3">
                                <label class="grid cl-4 ai-c gap-3 w-full" for="itinerary-b3">
                                    <span class="span-3 ml-2"><b>16:10</b> MIA — <b>22:45</b> LIM <span class="text-3 min-md:ml-4">1 escala · 6h 35m</span></span>
                                    <div class="flex-r gap-2 ai-c jc-r">
                                        <span class="flex-r ai-r text-5.5 c-scale-300">
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-mochila"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0 c-blue"><use xlink:href="#i-maleta-mano"></use></svg>
                                            <svg class="bs-icon bg-i-default m-0"><use xlink:href="#i-bodega"></use></svg>
                                        </span>
                                        <a class="btn-detail-itinerary-b" data-toggle="modal" data-target="#modalItinerarioVuelta"><svg class="bs-icon"><use xlink:href="#i-arrow-bottom"></use></svg></a>
                                    </div>
                                </label>
                            </span>
                        </div>
                        <div class="btn-action-itinerary flex-r jc-b gap-2">
                            <a class="btn btn-default-outline text-3 flex-r ai-c gap-1 btn-toggle-more"><svg class="bs-icon bg-i-default m-0 toggle-icon"><use xlink:href="#i-plus"></use></svg><span class="btn-toggle-more-label">Mostrar más horarios</span></a>
                            <a id="btn-add-luggage" class="btn btn-default-outline text-3 flex-r ai-c gap-1" data-toggle="modal" data-target="#modalAddLuggage"><svg class="bs-icon bg-i-default m-0"><use xlink:href="#i-plus"></use></svg>Añadir Maletas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-price flex-c gap-2">
            <div class="flex-c">
                <span class="text-3.5">Precio x 2 pasajeros</span>
                <span class="text-5 flex-r ai-c">
                    <a class="btn-info-subtotal" data-toggle="modal" data-target="#modalInfoSubtotal"><svg class="bs-icon"><use xlink:href="#i-info"></use></svg></a>
                    <b>USD 452</b>
                </span>
            </div>
            <div class="list-badges text-3 flex-r gap-2 wrap">
                <span class="badge badge-blue flex-r ai-c gap-1"><svg class="bs-icon"><use xlink:href="#i-check"></use></svg>Recomendado</span>
            </div>
            <div class="flex-r gap-2 mt-2">
                <button class="btn btn-default-outline flex-r ai-c jc-c gap-1"><svg class="bs-icon"><use xlink:href="#i-carrito"></use></svg></button>
                <button class="btn btn-primary w-full">Reservar</button>
            </div>
        </div>
    </div>
</div>
`);
