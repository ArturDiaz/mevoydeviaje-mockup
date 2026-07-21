// Partial: formulario de busqueda de vuelos (form-search), inyectado inline via document.write
document.write(`
        <section class="post-slider form-search relative z-1">
            <div class="flight-search-container w-full">
                <div class="content-form flex-c lg:grid cl-10 gap-2">
                    <div class="trip-type-section">
                        <span class="text-3">Tramo</span>
                        <select data-bind="value: TripType" class="input-text">
                            <option value="oneway">Solo ida</option>
                            <option value="roundtrip">Ida y vuelta</option>
                            <option value="multipoint">Multidestino</option>
                        </select>
                    </div>
                    
                    <div class="flex-c gap-4 span-7">
    
                        <!-- Tramo 1 -->
                        <div class="flight-row">
                            <div class="flight-inputs-container flex-c lg:flex-r gap-2 ai-r relative">
                                <div class="flight-input-wrapper w-full">
                                    <span class="text-3">Origen</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="OriginAirportName1" placeholder="Origen" value="Lima, Perú, Aeropuerto Jorge Chávez" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el origen" data-bind="value: OriginAirportName1, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="4f4a3547-12bb-cc52-db99-39921afb600e_listbox"><span unselectable="on" class="k-clear-value" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <button type="button" class="btn-return btn-default border-none p-2 flex-c ai-c" data-leg="1" data-bind="click: swapAirports">
                                    <svg class="bs-icon"  class="bs-icon text-4"><use xlink:href="#i-arrow-horizontal"></use></svg>
                                </button>
                                <div class="flight-input-wrapper w-full">
                                    <span class="text-3">Destino</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="DestinationAirportName1" placeholder="Destino" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el destino" data-bind="value: DestinationAirportName1, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="8f4a1488-938a-0803-9c5a-084243f7877f_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper w-full">
                                    <span class="text-3" data-bind="text: leg1DateLabel">Fecha ida</span>
                                    <div class="input-date">
                                        <span class="k-datepicker k-input btn-float w-full k-input-solid k-input-md k-rounded-md" style=""><input class="w-full k-input-inner" name="DepartureDate1" placeholder="Fecha ida" data-role="datepicker" data-format="ddd d MMM yyyy" data-required-if="" data-required-msg="Seleccione una fecha de salida" data-bind="value: DepartureDate1" inputmode="text" type="text" role="combobox" aria-expanded="false" aria-haspopup="grid" autocomplete="off" aria-disabled="false" aria-readonly="false"><button aria-label="select" tabindex="-1" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base" type="button" role="button"><span class="k-icon k-svg-icon k-svg-i-calendar k-button-icon"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg></span></button></span>
                                        <div id="calendar-DepartureDate1" class="content-float calendar-float" data-label="Ida" data-next-calendar="calendar-DepartureDate2">
                                            <div class="calendar">
                                                <div class="calendar-header flex-r jc-b ai-c">
                                                    <button type="button" class="calendar-nav" aria-label="Mes anterior">
                                                        <svg class="bs-icon"><use xlink:href="#i-chevron-left"></use></svg>
                                                    </button>
                                                    <span class="calendar-title">Julio 2026</span>
                                                    <button type="button" class="calendar-nav" aria-label="Mes siguiente">
                                                        <svg class="bs-icon"><use xlink:href="#i-chevron-right"></use></svg>
                                                    </button>
                                                </div>
                                                <div class="calendar-weekdays">
                                                    <span>DO</span><span>LU</span><span>MA</span><span>MI</span><span>JU</span><span>VI</span><span>SA</span>
                                                </div>
                                                <div class="calendar-days">
                                                    <span class="calendar-day is-empty"></span>
                                                    <span class="calendar-day is-today" data-date="2026-07-13">13</span>
                                                    <span class="calendar-day is-selected" data-date="2026-07-14">14<small>Ida</small></span>
                                                    <span class="calendar-day" data-date="2026-07-15">15</span>
                                                    <span class="calendar-day" data-date="2026-07-16">16</span>
                                                    <span class="calendar-day" data-date="2026-07-17">17</span>
                                                    <span class="calendar-day" data-date="2026-07-18">18</span>

                                                    <span class="calendar-day" data-date="2026-07-19">19</span>
                                                    <span class="calendar-day" data-date="2026-07-20">20</span>
                                                    <span class="calendar-day" data-date="2026-07-21">21</span>
                                                    <span class="calendar-day" data-date="2026-07-22">22</span>
                                                    <span class="calendar-day" data-date="2026-07-23">23</span>
                                                    <span class="calendar-day" data-date="2026-07-24">24</span>
                                                    <span class="calendar-day" data-date="2026-07-25">25</span>

                                                    <span class="calendar-day" data-date="2026-07-26">26</span>
                                                    <span class="calendar-day" data-date="2026-07-27">27</span>
                                                    <span class="calendar-day" data-date="2026-07-28">28</span>
                                                    <span class="calendar-day" data-date="2026-07-29">29</span>
                                                    <span class="calendar-day" data-date="2026-07-30">30</span>
                                                    <span class="calendar-day" data-date="2026-07-31">31</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-01">1</span>

                                                    <span class="calendar-day is-outside" data-date="2026-08-02">2</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-03">3</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-04">4</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-05">5</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-06">6</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-07">7</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-08">8</span>
                                                </div>
                                                <div class="calendar-footer">lunes, 13 de Julio de 2026</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Fecha vuelta — solo roundtrip -->
                                <div class="flight-input-wrapper w-full" style="" data-bind="visible: isRoundTrip">
                                    <span class="text-3">Fecha vuelta</span>
                                    <div class="input-date">
                                        <span class="k-datepicker k-input btn-float w-full k-input-solid k-input-md k-rounded-md" style=""><input class="w-full k-input-inner" name="DepartureDate2" placeholder="Fecha vuelta" data-role="datepicker" data-format="ddd d MMM yyyy" data-required-if="" data-required-msg="Seleccione una fecha de vuelta" data-bind="value: DepartureDate2, enabled: isRoundTrip" inputmode="text" type="text" role="combobox" aria-expanded="false" aria-haspopup="grid" autocomplete="off" aria-disabled="false" aria-readonly="false"><button aria-label="select" tabindex="-1" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base" type="button" role="button"><span class="k-icon k-svg-icon k-svg-i-calendar k-button-icon"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg></span></button></span>
                                        <div id="calendar-DepartureDate2" class="content-float calendar-float" data-label="Vuelta">
                                            <div class="calendar">
                                                <div class="calendar-header flex-r jc-b ai-c">
                                                    <button type="button" class="calendar-nav" aria-label="Mes anterior">
                                                        <svg class="bs-icon"><use xlink:href="#i-chevron-left"></use></svg>
                                                    </button>
                                                    <span class="calendar-title">Julio 2026</span>
                                                    <button type="button" class="calendar-nav" aria-label="Mes siguiente">
                                                        <svg class="bs-icon"><use xlink:href="#i-chevron-right"></use></svg>
                                                    </button>
                                                </div>
                                                <div class="calendar-weekdays">
                                                    <span>DO</span><span>LU</span><span>MA</span><span>MI</span><span>JU</span><span>VI</span><span>SA</span>
                                                </div>
                                                <div class="calendar-days">
                                                    <span class="calendar-day is-empty"></span>
                                                    <span class="calendar-day is-today" data-date="2026-07-13">13</span>
                                                    <span class="calendar-day" data-date="2026-07-14">14</span>
                                                    <span class="calendar-day" data-date="2026-07-15">15</span>
                                                    <span class="calendar-day" data-date="2026-07-16">16</span>
                                                    <span class="calendar-day" data-date="2026-07-17">17</span>
                                                    <span class="calendar-day" data-date="2026-07-18">18</span>

                                                    <span class="calendar-day" data-date="2026-07-19">19</span>
                                                    <span class="calendar-day" data-date="2026-07-20">20</span>
                                                    <span class="calendar-day" data-date="2026-07-21">21</span>
                                                    <span class="calendar-day" data-date="2026-07-22">22</span>
                                                    <span class="calendar-day" data-date="2026-07-23">23</span>
                                                    <span class="calendar-day" data-date="2026-07-24">24</span>
                                                    <span class="calendar-day" data-date="2026-07-25">25</span>

                                                    <span class="calendar-day" data-date="2026-07-26">26</span>
                                                    <span class="calendar-day" data-date="2026-07-27">27</span>
                                                    <span class="calendar-day" data-date="2026-07-28">28</span>
                                                    <span class="calendar-day" data-date="2026-07-29">29</span>
                                                    <span class="calendar-day" data-date="2026-07-30">30</span>
                                                    <span class="calendar-day" data-date="2026-07-31">31</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-01">1</span>

                                                    <span class="calendar-day is-outside" data-date="2026-08-02">2</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-03">3</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-04">4</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-05">5</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-06">6</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-07">7</span>
                                                    <span class="calendar-day is-outside" data-date="2026-08-08">8</span>
                                                </div>
                                                <div class="calendar-footer">lunes, 13 de Julio de 2026</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <!-- Tramo 2 -->
                        <div class="flight-row" style="display:none;" data-bind="visible: isMultipoint">
                            <div class="flight-inputs-container flex-c lg:flex-r gap-3 ai-r relative">
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Origen</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="OriginAirportName2" placeholder="Origen" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el origen" data-bind="value: OriginAirportName2, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="cdc5667a-6576-fecc-9294-125807b112db_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Destino</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="DestinationAirportName2" placeholder="Destino" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el destino" data-bind="value: DestinationAirportName2, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="37a8e2f1-ff7a-734a-c30e-0a826db09cba_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Fecha salida</span>
                                    <div class="input-date">
                                        <span class="k-datepicker k-input k-input-solid k-input-md k-rounded-md k-disabled" style=""><input type="text" name="DepartureDate2" placeholder="Fecha salida" data-role="datepicker" data-format="ddd d MMM yyyy" data-required-if="" data-required-msg="Seleccione una fecha de salida" data-bind="value: DepartureDate2, enabled: isMultipoint" inputmode="text" class="k-input-inner" role="combobox" aria-expanded="false" aria-haspopup="grid" autocomplete="off" aria-disabled="true" aria-readonly="false" disabled="disabled"><button aria-label="select" tabindex="-1" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base" type="button" role="button"><span class="k-icon k-svg-icon k-svg-i-calendar k-button-icon"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg></span></button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <!-- Tramo 3 -->
                        <div class="flight-row" style="display:none;" data-bind="visible: showLeg3">
                            <div class="flight-inputs-container flex-c lg:flex-r gap-3 ai-r relative">
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Origen</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="OriginAirportName3" placeholder="Origen" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el origen" data-bind="value: OriginAirportName3, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="4dcbd6d5-11d2-f568-7d4b-cbad9c1db857_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Destino</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="DestinationAirportName3" placeholder="Destino" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el destino" data-bind="value: DestinationAirportName3, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="492497d8-a8bf-ed8b-acdc-50beb7155de2_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Fecha salida</span>
                                    <div class="input-date">
                                        <span class="k-datepicker k-input w-full k-input-solid k-input-md k-rounded-md" style=""><input class="w-full k-input-inner" name="DepartureDate3" placeholder="Fecha salida" data-role="datepicker" data-format="ddd d MMM yyyy" data-required-if="" data-required-msg="Seleccione una fecha de salida" data-bind="value: DepartureDate3" inputmode="text" type="text" role="combobox" aria-expanded="false" aria-haspopup="grid" autocomplete="off" aria-disabled="false" aria-readonly="false"><button aria-label="select" tabindex="-1" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base" type="button" role="button"><span class="k-icon k-svg-icon k-svg-i-calendar k-button-icon"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg></span></button></span>
                                    </div>
                                </div>
                                <div class="flight-buttons-container lg:-mr-6 absolute -right-6">
                                    <button type="button" class="btn-leg btn-add btn-i" data-bind="click: addLeg, visible: canAddFromLeg3" style="display: none;">
                                        <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-plus"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <!-- Tramo 4 -->
                        <div class="flight-row" style="display:none;" data-bind="visible: showLeg4">
                            <div class="flight-inputs-container flex-c lg:flex-r gap-3 ai-r relative">
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Origen</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="OriginAirportName4" placeholder="Origen" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el origen" data-bind="value: OriginAirportName4, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="77278ad8-e064-84ca-5ba6-89b6c3e2e110_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Destino</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="DestinationAirportName4" placeholder="Destino" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el destino" data-bind="value: DestinationAirportName4, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="bdadc419-9dd8-a0aa-2f46-bb933039f6d7_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Fecha salida</span>
                                    <div class="input-date">
                                        <span class="k-datepicker k-input k-input-solid k-input-md k-rounded-md" style=""><input name="DepartureDate4" placeholder="Fecha salida" data-role="datepicker" data-format="ddd d MMM yyyy" data-required-if="" data-required-msg="Seleccione una fecha de salida" data-bind="value: DepartureDate4" inputmode="text" type="text" class="k-input-inner" role="combobox" aria-expanded="false" aria-haspopup="grid" autocomplete="off" aria-disabled="false" aria-readonly="false"><button aria-label="select" tabindex="-1" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base" type="button" role="button"><span class="k-icon k-svg-icon k-svg-i-calendar k-button-icon"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg></span></button></span>
                                    </div>
                                </div>
                                <div class="flight-buttons-container lg:-mr-6 flex-r gap-2 ai-c absolute left-full ml-3">
                                    <button type="button" class="btn-leg btn-remove btn-i" data-bind="click: removeLeg, visible: canRemoveFromLeg4" style="display: none;">
                                        <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-minus"></use></svg>
                                    </button>
                                    <button type="button" class="btn-leg btn-add btn-i" data-bind="click: addLeg, visible: canAddFromLeg4" style="display: none;">
                                        <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-plus"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <!-- Tramo 5 -->
                        <div class="flight-row" style="display:none;" data-bind="visible: showLeg5">
                            <div class="flight-inputs-container flex-c lg:flex-r gap-3 ai-r relative">
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Origen</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="OriginAirportName5" placeholder="Origen" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el origen" data-bind="value: OriginAirportName5, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="d02b2c9b-1720-f9df-d764-01e88b940f53_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Destino</span>
                                    <span tabindex="-1" class="k-autocomplete k-input k-input-solid k-input-md k-rounded-md" style=""><input type="text" name="DestinationAirportName5" placeholder="Destino" data-role="autocomplete" data-text-field="Nombre" data-min-length="3" data-filter="contains" data-source="Flight.airportSource" data-auto-width="true" data-template="_AutocompleteItem" data-group-template="_AutocompleteGroup" data-required-if="" data-required-msg="Complete el destino" data-bind="value: DestinationAirportName5, events: { select: onAirportSelect, change: onAirportChange, filtering: onAirportFiltering }" aria-disabled="false" aria-readonly="false" class="k-input-inner" autocomplete="off" role="combobox" aria-expanded="false" inputmode="text" aria-autocomplete="list" aria-controls="61393a48-fe85-3e90-f681-9fa005f94112_listbox"><span unselectable="on" class="k-clear-value k-hidden" title="clear" role="button" tabindex="-1"><span class="k-icon k-svg-icon k-svg-i-x"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg></span></span></span>
                                </div>
                                <div class="flight-input-wrapper">
                                    <span class="text-3">Fecha salida</span>
                                    <div class="input-date">
                                        <span class="k-datepicker k-input k-input-solid k-input-md k-rounded-md" style=""><input name="DepartureDate5" placeholder="Fecha salida" data-role="datepicker" data-format="ddd d MMM yyyy" data-required-if="" data-required-msg="Seleccione una fecha de salida" data-bind="value: DepartureDate5" inputmode="text" type="text" class="k-input-inner" role="combobox" aria-expanded="false" aria-haspopup="grid" autocomplete="off" aria-disabled="false" aria-readonly="false"><button aria-label="select" tabindex="-1" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base" type="button" role="button"><span class="k-icon k-svg-icon k-svg-i-calendar k-button-icon"><svg class="bs-icon"  viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg></span></button></span>
                                    </div>
                                </div>
                                <div class="flight-buttons-container lg:-mr-6 absolute -right-6">
                                    <button type="button" class="btn-leg btn-remove btn-i" data-bind="click: removeLeg, visible: canRemoveFromLeg5" style="display: none;">
                                        <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-minus"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="content-pasajeros relative h-fit">
                        <span class="text-3">Pasajeros</span>
                        <button class="btn-float input-text" data-bind="text: passengersLabel">1 Persona</button>
                        <div class="content-float min-w-70">
                            <div class="pax-section flex-c gap-3">
                                <div class="pax-row flex-r jc-b gap-5">
                                    <div class="pax-info flex-c">
                                        <span class="pax-label">Adultos</span>
                                        <span class="pax-sublabel text-3">Desde 12 años</span>
                                    </div>
                                    <div class="pax-counter flex-r gap-2 ai-c">
                                        <button type="button" class="btn-default btn-i text-c flex-c px-1.5" data-passenger-field="PassengerInfo.NumberOfAdults" data-bind="click: removePassenger, enabled: canRemoveAdults" disabled="disabled">
                                            <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-minus"></use></svg>
                                        </button>
                                        <span class="pax-count" data-bind="text: PassengerInfo.NumberOfAdults">1</span>
                                        <button type="button" class="btn-default btn-i text-c flex-c px-1.5" data-passenger-field="PassengerInfo.NumberOfAdults" data-bind="click: addPassenger, enabled: canAddPassenger">
                                            <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-plus"></use></svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="pax-row flex-r jc-b gap-5">
                                    <div class="pax-info flex-c">
                                        <span class="pax-label">Menores</span>
                                        <span class="pax-sublabel text-3">De 2 a 11 años</span>
                                    </div>
                                    <div class="pax-counter flex-r gap-2 ai-c">
                                        <button type="button" class="btn-default btn-i text-c flex-c px-1.5" data-passenger-field="PassengerInfo.NumberOfChildren" data-bind="click: removePassenger, enabled: canRemoveChildren" disabled="disabled">
                                            <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-minus"></use></svg>
                                        </button>
                                        <span class="pax-count" data-bind="text: PassengerInfo.NumberOfChildren">0</span>
                                        <button type="button" class="btn-default btn-i text-c flex-c px-1.5" data-passenger-field="PassengerInfo.NumberOfChildren" data-bind="click: addPassenger, enabled: canAddPassenger">
                                            <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-plus"></use></svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="pax-row flex-r jc-b gap-5">
                                    <div class="pax-info flex-c">
                                        <span class="pax-label">Infantes</span>
                                        <span class="pax-sublabel text-3">Hasta 23 meses</span>
                                    </div>
                                    <div class="pax-counter flex-r gap-2 ai-c">
                                        <button type="button" class="btn-default btn-i text-c flex-c px-1.5" data-passenger-field="PassengerInfo.NumberOfInfants" data-bind="click: removePassenger, enabled: canRemoveInfants" disabled="disabled">
                                            <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-minus"></use></svg>
                                        </button>
                                        <span class="pax-count" data-bind="text: PassengerInfo.NumberOfInfants">0</span>
                                        <button type="button" class="btn-default btn-i text-c flex-c px-1.5" data-passenger-field="PassengerInfo.NumberOfInfants" data-bind="click: addPassenger, enabled: canAddPassenger">
                                            <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-plus"></use></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flight-search-footer w-full pt-4">
                        <button type="button" class="btn-search btn btn-primary flex-r ai-c jc-c gap-1 w-full" data-bind="click: searchFlights">
                            <svg class="bs-icon"  class="bs-icon"><use xlink:href="#i-search"></use></svg>
                            <span>Buscar</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

`);
