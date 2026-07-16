const CONFIG = {
    breakpoints: [
        // ── Breakpoints originales (NO modificar) ────────────────────────────
        { prefijo: 'xs',     query: '(max-width: 550px)' },
        { prefijo: 'sm',     query: '(max-width: 767px)' },
        { prefijo: 'md',     query: '(min-width: 768px) and (max-width: 1023px)' },
        { prefijo: 'md-max', query: '(max-width: 1023px)' },
        { prefijo: 'lg',     query: '(min-width: 1024px)' },
        { prefijo: 'xl',     query: '(min-width: 1400px)' },
        { prefijo: 'xg',     query: '(min-width: 1600px)' },

        // ── max-{bp}: hasta el límite superior del breakpoint ─────────────────
        // Uso: max-xs:hidden  max-sm:flex-c  max-md:p-4  max-lg:w-full  max-xl:gap-3
        { prefijo: 'max-xs', query: '(max-width: 550px)' },
        { prefijo: 'max-sm', query: '(max-width: 767px)' },
        { prefijo: 'max-md', query: '(max-width: 1023px)' },
        { prefijo: 'max-lg', query: '(max-width: 1399px)' },
        { prefijo: 'max-xl', query: '(max-width: 1599px)' },

        // ── min-{bp}: desde el límite inferior del breakpoint ─────────────────
        // Uso: min-sm:flex-r  min-md:grid  min-lg:gap-5  min-xl:text-5  min-xg:w-full
        { prefijo: 'min-sm', query: '(min-width: 551px)' },
        { prefijo: 'min-md', query: '(min-width: 768px)' },
        { prefijo: 'min-lg', query: '(min-width: 1024px)' },
        { prefijo: 'min-xl', query: '(min-width: 1400px)' },
        { prefijo: 'min-xg', query: '(min-width: 1600px)' }
    ],

    clasesMap: {
        'p': 'padding',
        'px': ['padding-left', 'padding-right'],
        'py': ['padding-top', 'padding-bottom'],
        'pt': 'padding-top',
        'pr': 'padding-right',
        'pb': 'padding-bottom',
        'pl': 'padding-left',
        'm': 'margin',
        'mx': ['margin-left', 'margin-right'],
        'my': ['margin-top', 'margin-bottom'],
        'mt': 'margin-top',
        'mr': 'margin-right',
        'mb': 'margin-bottom',
        'ml': 'margin-left',
        'gap': 'gap',
        'gap-x': 'column-gap',
        'gap-y': 'row-gap',
        'grid': 'display',
        'cl': 'grid-template-columns',
        'rw': 'grid-template-rows',
        'span': 'grid-column',
        'col-start': 'grid-column-start',
        'col-end': 'grid-column-end',
        'row-span': 'grid-row',
        'row-start': 'grid-row-start',
        'row-end': 'grid-row-end',
        'flex': 'display',
        'flex-r': ['display', 'flex-direction'],
        'flex-c': ['display', 'flex-direction'],
        'flex-r-revert': ['display', 'flex-direction'],
        'flex-c-revert': ['display', 'flex-direction'],
        'wrap': 'flex-wrap',
        'nowrap': 'flex-wrap',
        'wrap-revert': 'flex-wrap',
        'grow': 'flex-grow',
        'jc-c': 'justify-content',
        'jc-b': 'justify-content',
        'jc-a': 'justify-content',
        'jc-e': 'justify-content',
        'jc-l': 'justify-content',
        'jc-r': 'justify-content',
        'ai-c': 'align-items',
        'ai-l': 'align-items',
        'ai-r': 'align-items',
        'ai-s': 'align-items',
        'as-c': 'align-self',
        'as-l': 'align-self',
        'as-r': 'align-self',
        'as-s': 'align-self',
        'absolute': 'position',
        'relative': 'position',
        'fixed': 'position',
        'static': 'position',
        'sticky': 'position',
        'top': 'top',
        'left': 'left',
        'right': 'right',
        'bottom': 'bottom',
        'hide': 'display',
        'w': 'width',
        'min-w': 'min-width',
        'max-w': 'max-width',
        'w-responsive': 'width',
        'h': 'height',
        'min-h': 'min-height',
        'max-h': 'max-height',
        'size': ['width', 'height'],
        'text': 'font-size',
        'text-c': 'text-align',
        'text-l': 'text-align',
        'text-r': 'text-align',
        'text-j': 'text-align',
        'text-i': 'text-align',
        'text-wrap': 'text-wrap',
        'font': 'font-weight',
        'border': 'border-width',
        'border-t': 'border-top',
        'border-b': 'border-bottom',
        'border-l': 'border-left',
        'border-ri': 'border-right',
        'border-r': 'border-radius',
        'rounded': 'border-radius',
        'opacity': 'opacity',
        'z': 'z-index',
        'block': 'display',
        'inline': 'display',
        'inline-block': 'display',
        'hidden': 'display',
        'overflow': 'overflow',
        'overflow-x': 'overflow-x',
        'overflow-y': 'overflow-y',
        'cursor': 'cursor',
        'leading': 'line-height',
        'translate-x': 'transform',
        'translate-y': 'transform',
        'rotate': 'transform',
        'scale': 'transform',
        'scale-x': 'transform',
        'scale-y': 'transform',
        'skew-x': 'transform',
        'skew-y': 'transform',
        'uppercase': 'text-transform',
        'lowercase': 'text-transform',
        'capitalize': 'text-transform',
        'normal-case': 'text-transform',
        'border-none': 'border'
    },

    valoresEspeciales: {
        'grid': 'grid',
        'flex': 'flex',
        'flex-r': ['flex', 'row'],
        'flex-c': ['flex', 'column'],
        'flex-r-revert': ['flex', 'row-reverse'],
        'flex-c-revert': ['flex', 'column-reverse'],
        'wrap': 'wrap',
        'nowrap': 'nowrap',
        'wrap-revert': 'wrap-reverse',
        'jc-c': 'center',
        'jc-b': 'space-between',
        'jc-a': 'space-around',
        'jc-e': 'space-evenly',
        'jc-l': 'flex-start',
        'jc-r': 'flex-end',
        'ai-c': 'center',
        'ai-l': 'flex-start',
        'ai-r': 'flex-end',
        'ai-s': 'stretch',
        'as-c': 'center',
        'as-l': 'flex-start',
        'as-r': 'flex-end',
        'as-s': 'stretch',
        'absolute': 'absolute',
        'relative': 'relative',
        'fixed': 'fixed',
        'static': 'static',
        'sticky': 'sticky',
        'hide': 'none',
        'w-auto': 'auto',
        'w-full': '100%',
        'w-screen': '100vw',
        'w-min': 'min-content',
        'w-max': 'max-content',
        'w-fit': 'fit-content',
        'h-auto': 'auto',
        'h-full': '100%',
        'h-screen': '100vh',
        'h-min': 'min-content',
        'h-max': 'max-content',
        'h-fit': 'fit-content',
        'size-full': '100%',
        'block': 'block',
        'inline': 'inline',
        'inline-block': 'inline-block',
        'hidden': 'none',
        'overflow-auto': 'auto',
        'overflow-hidden': 'hidden',
        'overflow-visible': 'visible',
        'overflow-scroll': 'scroll',
        'cursor-pointer': 'pointer',
        'cursor-default': 'default',
        'cursor-text': 'text',
        'cursor-move': 'move',
        'cursor-not-allowed': 'not-allowed',
        'font-thin': '100',
        'font-light': '300',
        'font-normal': '400',
        'font-medium': '500',
        'font-semibold': '600',
        'font-bold': '700',
        'font-extrabold': '800',
        'font-black': '900',
        'text-c': 'center',
        'text-l': 'start',
        'text-r': 'end',
        'text-j': 'justify',
        'text-i': 'initial',
        'text-wrap-wrap': 'wrap',
        'text-wrap-nowrap': 'nowrap',
        'text-wrap-balance': 'balance',
        'text-wrap-pretty': 'pretty',
        'text-wrap-stable': 'stable',
        'opacity-0': '0',
        'opacity-25': '0.25',
        'opacity-50': '0.5',
        'opacity-75': '0.75',
        'opacity-100': '1',
        'leading-none': '1',
        'leading-tight': '1.25',
        'leading-snug': '1.375',
        'leading-normal': '1.5',
        'leading-relaxed': '1.625',
        'leading-loose': '2',
        'uppercase': 'uppercase',
        'lowercase': 'lowercase',
        'capitalize': 'capitalize',
        'normal-case': 'none',
        'border-none': 'none'
    },

    clasesComplejas: {
        'w-responsive': `
            width: 100%;
            padding: 0 1rem;
            margin: auto;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            .w-responsive {
                padding: 0 1.5rem;
            }
        }
        @media (min-width: 1024px) {
            .w-responsive {
                width: 1024px;
                padding: 0;
            }
        }
        @media (min-width: 1400px) {
            .w-responsive {
                width: 1200px;
            }
        }`
    },

    valorToCSS: (claseNum, tipo = '', claseCompleta = '') => {
        if (CONFIG.valoresEspeciales[claseCompleta]) {
            return CONFIG.valoresEspeciales[claseCompleta];
        }

        // Para clases responsive (sm:flex-c), claseCompleta incluye el prefijo
        // pero valoresEspeciales solo tiene la clave base (flex-c)
        const claseBase = claseNum ? `${tipo}-${claseNum}` : tipo;
        if (claseBase !== claseCompleta && CONFIG.valoresEspeciales[claseBase]) {
            return CONFIG.valoresEspeciales[claseBase];
        }

        if (CONFIG.clasesComplejas && CONFIG.clasesComplejas[tipo]) {
            return null;
        }

        if (!esValorValidoParaTipo(claseNum, tipo)) {
            return null;
        }

        switch (tipo) {
            case 'z':
                return claseNum;

            case 'cl': {
                if (claseNum === 'auto') return 'auto';
                if (claseNum === 'min')  return 'min-content';
                if (claseNum === 'max')  return 'max-content';
                if (claseNum.startsWith('fit-')) {
                    const minw = convertirValorDimension(claseNum.slice(4), 'w') || (parseInt(claseNum.slice(4)) * 0.25 + 'rem');
                    return `repeat(auto-fit, minmax(${minw}, 1fr))`;
                }
                if (claseNum.startsWith('fill-')) {
                    const minw = convertirValorDimension(claseNum.slice(5), 'w') || (parseInt(claseNum.slice(5)) * 0.25 + 'rem');
                    return `repeat(auto-fill, minmax(${minw}, 1fr))`;
                }
                return `repeat(${parseInt(claseNum)}, minmax(0, 1fr))`;
            }

            case 'rw': {
                if (claseNum === 'none') return 'none';
                if (claseNum === 'auto') return 'auto';
                return `repeat(${parseInt(claseNum)}, minmax(0, 1fr))`;
            }

            case 'span':
                return `span ${claseNum} / span ${claseNum}`;

            case 'col-start':
            case 'col-end':
            case 'row-start':
            case 'row-end':
                return claseNum === 'auto' ? 'auto' : String(parseInt(claseNum));

            case 'row-span':
                if (claseNum === 'full') return '1 / -1';
                return `span ${claseNum} / span ${claseNum}`;

            case 'top':
            case 'left':
            case 'right':
            case 'bottom':
                return convertirValorDimension(claseNum, tipo);

            case 'translate-x': {
                const v = convertirValorDimension(claseNum, 'w');
                return v ? `translateX(${v})` : null;
            }
            case 'translate-y': {
                const v = convertirValorDimension(claseNum, 'h');
                return v ? `translateY(${v})` : null;
            }
            case 'rotate': {
                if (claseNum === '0') return 'rotate(0deg)';
                const deg = parseFloat(claseNum);
                return isNaN(deg) ? null : `rotate(${deg}deg)`;
            }
            case 'scale': {
                const s = parseFloat(claseNum);
                return isNaN(s) ? null : `scale(${s / 100})`;
            }
            case 'scale-x': {
                const sx = parseFloat(claseNum);
                return isNaN(sx) ? null : `scaleX(${sx / 100})`;
            }
            case 'scale-y': {
                const sy = parseFloat(claseNum);
                return isNaN(sy) ? null : `scaleY(${sy / 100})`;
            }
            case 'skew-x': {
                if (claseNum === '0') return 'skewX(0deg)';
                const skx = parseFloat(claseNum);
                return isNaN(skx) ? null : `skewX(${skx}deg)`;
            }
            case 'skew-y': {
                if (claseNum === '0') return 'skewY(0deg)';
                const sky = parseFloat(claseNum);
                return isNaN(sky) ? null : `skewY(${sky}deg)`;
            }

            case 'gap':
            case 'gap-x':
            case 'gap-y':
                return (parseFloat(claseNum) * 0.25) + 'em';

            case 'border': {
                if (claseNum === '0') return '0';
                const partsB = claseNum.split('-');
                if (partsB.length === 2)
                    return (partsB[0] === '0' ? '0' : partsB[0] + 'px') + ' ' + partsB[1];
                if (partsB.length === 4)
                    return partsB.map(v => v === '0' ? '0' : v + 'px').join(' ');
                return claseNum + 'px';
            }

            case 'border-t':
            case 'border-b':
            case 'border-l':
            case 'border-ri':
                if (claseNum === '0') return '0';
                return claseNum + 'px solid';

            case 'border-r': {
                if (claseNum === '0') return '0';
                const corners = claseNum.split('-');
                if (corners.length === 4) {
                    return corners.map(v => v === '0' ? '0' : (parseFloat(v) * 0.25) + 'em').join(' ');
                }
                return (parseFloat(claseNum) * 0.25) + 'em';
            }

            case 'rounded':
                if (claseNum === 'full') return '9999px';
                return (parseFloat(claseNum) * 0.25) + 'rem';

            case 'text':
                return (parseFloat(claseNum) * 0.25) + 'rem';

            case 'w':
            case 'min-w':
            case 'max-w':
            case 'h':
            case 'min-h':
            case 'max-h':
            case 'size':
                return convertirValorDimension(claseNum, tipo);

            case 'p': {
                if (claseNum === '0') return '0';
                const partsP = claseNum.split('-');
                if (partsP.length === 4)
                    return partsP.map(v => v === '0' ? '0' : (parseFloat(v) * 0.25) + 'em').join(' ');
                return (parseFloat(claseNum) * 0.25) + 'em';
            }

            case 'm': {
                if (claseNum === '0' || claseNum === 'auto') return claseNum;
                const partsM = claseNum.split('-');
                if (partsM.length === 4)
                    return partsM.map(v => v === '0' ? '0' : (parseFloat(v) * 0.25) + 'em').join(' ');
                return (parseFloat(claseNum) * 0.25) + 'em';
            }

            case 'px':
            case 'py':
            case 'pt':
            case 'pr':
            case 'pb':
            case 'pl':
            case 'mx':
            case 'my':
            case 'mt':
            case 'mr':
            case 'mb':
            case 'ml':
                if (claseNum === '0' || claseNum === 'auto') return claseNum;
                return (parseFloat(claseNum) * 0.25) + 'em';

            case 'font': {
                if (/^\d+$/.test(claseNum)) return claseNum;
                const pesos = {
                    'thin': '100', 'light': '300', 'normal': '400',
                    'medium': '500', 'semibold': '600', 'bold': '700',
                    'extrabold': '800', 'black': '900'
                };
                return pesos[claseNum] || '400';
            }

            case 'opacity': {
                const opacidades = { '0': '0', '25': '0.25', '50': '0.5', '75': '0.75', '100': '1' };
                return opacidades[claseNum] || claseNum;
            }

            case 'leading': {
                const nombresLeading = { 'none': '1', 'tight': '1.25', 'snug': '1.375', 'normal': '1.5', 'relaxed': '1.625', 'loose': '2' };
                if (nombresLeading[claseNum]) return nombresLeading[claseNum];
                if (claseNum === '0') return '0';
                const numLeading = parseFloat(claseNum);
                if (!isNaN(numLeading)) return (numLeading * 0.25) + 'rem';
                return null;
            }

            case 'overflow':
            case 'overflow-x':
            case 'overflow-y':
            case 'cursor':
                return claseNum;
            case 'grow':
                return claseNum || '1';

            default:
                if (claseNum === '0') return '0';
                const num = parseFloat(claseNum);
                if (!isNaN(num)) return (num * 0.25) + 'em';
                return claseNum;
        }
    }
};

const TIPOS_NEGATIVOS = new Set([
    'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml',
    'top', 'left', 'right', 'bottom',
    'z', 'gap', 'gap-x', 'gap-y',
    'translate-x', 'translate-y', 'rotate', 'skew-x', 'skew-y'
]);

const TIPOS_TRANSFORM = new Set([
    'translate-x', 'translate-y', 'rotate', 'scale', 'scale-x', 'scale-y', 'skew-x', 'skew-y'
]);

const CACHE = {
    cssGenerado: new Map(),
    parsedClases: new Map(),
    limpiar() {
        this.cssGenerado.clear();
        this.parsedClases.clear();
    }
};

function convertirValorDimension(claseNum, tipo) {
    const valoresEspeciales = {
        'auto': 'auto', 'full': '100%', 'screen': '100vw',
        'min': 'min-content', 'max': 'max-content', 'fit': 'fit-content'
    };

    if (valoresEspeciales[claseNum]) return valoresEspeciales[claseNum];

    if (claseNum.includes('/')) {
        const [a, b] = claseNum.split('/');
        const num = parseFloat(a), den = parseFloat(b);
        if (!isNaN(num) && !isNaN(den) && den !== 0) {
            return `${(num / den) * 100}%`;
        }
        return null;
    }

    const regexUnidad = /^(\d+(\.\d+)?)(px|rem|em|%|vw|vh)$/;
    if (regexUnidad.test(claseNum)) return claseNum;

    const num = parseFloat(claseNum);
    if (!isNaN(num)) {
        if (claseNum.length > 4) return null;
        if (num > 999) return (999 * 0.25) + 'rem';
        return (num * 0.25) + 'rem';
    }

    return null;
}

function generarCSSResponsiveParaClaseCompleja(claseCompleta, tipo) {
    const cacheKey = `compleja_resp_${claseCompleta}`;
    if (CACHE.cssGenerado.has(cacheKey)) return CACHE.cssGenerado.get(cacheKey);

    const selector = `.${claseCompleta.replace(/:/g, '\\:').replace(/\./g, '\\.')}`;
    let css = null;

    if (tipo === 'w-responsive') {
        const bp = claseCompleta.split(':')[0];
        const esFixed = bp === 'lg' || bp === 'xl';
        const widths  = { lg: '1024px', xl: '1400px' };
        const paddings = { xs: '0 1rem', sm: '0 1rem', md: '0 1.5rem', lg: '0', xl: '0' };
        const width = esFixed ? widths[bp] : '100%';
        const pad   = paddings[bp] || '0 1rem';
        css = `${selector} { width: ${width}; padding: ${pad}; margin: auto; }`;
    }

    if (css) CACHE.cssGenerado.set(cacheKey, css);
    return css;
}

function generarCSSParaClaseCompleja(claseCompleta, tipo) {
    const cacheKey = `compleja_${claseCompleta}`;
    if (CACHE.cssGenerado.has(cacheKey)) return CACHE.cssGenerado.get(cacheKey);

    const cssComplejo = CONFIG.clasesComplejas[tipo];
    if (!cssComplejo) return null;

    let css = cssComplejo;
    if (!css.trim().startsWith('.')) {
        css = `.${claseCompleta.replace(/\./g, '\\.')} { ${css}`;
    }

    CACHE.cssGenerado.set(cacheKey, css);
    return css;
}

function esValorValidoParaTipo(valor, tipo) {
    // Clases keyword-only: nunca aceptan un valor arbitrario
    // (hide-desktop, fixed-foo, wrap-bar, etc. deben ser ignoradas)
    const clasesKeyword = [
        'flex', 'flex-r', 'flex-c', 'flex-r-revert', 'flex-c-revert',
        'grid', 'wrap', 'nowrap', 'wrap-revert',
        'block', 'inline', 'inline-block', 'hidden', 'hide',
        'absolute', 'relative', 'fixed', 'static', 'sticky',
        'w-responsive',
        'uppercase', 'lowercase', 'capitalize', 'normal-case',
        'border-none'
    ];

    if (valor === '') {
        return clasesKeyword.includes(tipo);
    }

    // Si el tipo es keyword-only y llegó con valor → inválido
    if (clasesKeyword.includes(tipo)) return false;

    if (tipo === 'w-responsive') return false;

    if (tipo === 'z') return /^-?\d+$/.test(valor);

    if (['w', 'min-w', 'max-w', 'h', 'min-h', 'max-h', 'size'].includes(tipo)) {
        if (['auto', 'full', 'screen', 'min', 'max', 'fit'].includes(valor)) return true;
        if (valor.includes('/')) {
            const [a, b] = valor.split('/');
            return valor.split('/').length === 2 && !isNaN(parseFloat(a)) &&
                   !isNaN(parseFloat(b)) && parseFloat(b) !== 0;
        }
        return esValorConUnidadValido(valor, tipo);
    }

    if (['top', 'left', 'right', 'bottom'].includes(tipo)) {
        if (['auto', 'full', 'screen', 'min', 'max', 'fit'].includes(valor)) return true;
        if (valor.includes('/')) {
            const [a, b] = valor.split('/');
            return valor.split('/').length === 2 && !isNaN(parseFloat(a)) &&
                   !isNaN(parseFloat(b)) && parseFloat(b) !== 0;
        }
        return esValorConUnidadValido(valor);
    }

    if (['translate-x', 'translate-y'].includes(tipo)) {
        if (['auto', 'full', 'screen', 'min', 'max', 'fit'].includes(valor)) return true;
        if (valor.includes('/')) {
            const [a, b] = valor.split('/');
            return valor.split('/').length === 2 && !isNaN(parseFloat(a)) &&
                   !isNaN(parseFloat(b)) && parseFloat(b) !== 0;
        }
        return esValorConUnidadValido(valor);
    }

    if (['rotate', 'skew-x', 'skew-y'].includes(tipo)) {
        return /^\d+(\.\d+)?$/.test(valor);
    }

    if (['scale', 'scale-x', 'scale-y'].includes(tipo)) {
        return /^\d+(\.\d+)?$/.test(valor);
    }

    // border-r acepta valor único (border-radius) o 4 esquinas (tl-tr-br-bl)
    if (tipo === 'border-r') {
        if (valor === '0') return true;
        if (/^\d+(\.\d+)?$/.test(valor)) return true;
        const corners = valor.split('-');
        return corners.length === 4 && corners.every(v => /^\d+(\.\d+)?$/.test(v));
    }

    const clasesNumericas = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl',
                             'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml',
                             'gap', 'gap-x', 'gap-y', 'text', 'border',
                             'border-t', 'border-b', 'border-l', 'border-ri',
                             'rounded', 'span',
                             'col-start', 'col-end', 'row-span', 'row-start', 'row-end'];
    if (clasesNumericas.includes(tipo)) {
        if (tipo === 'rounded' && valor === 'full') return true;
        // auto es válido para todas las variantes de margin
        if (valor === 'auto' && ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'].includes(tipo)) return true;
        // sintaxis de 4 lados: p-t-r-b-l  m-t-r-b-l  border-t-r-b-l
        if ((tipo === 'p' || tipo === 'm' || tipo === 'border') && valor.includes('-')) {
            const parts = valor.split('-');
            if (tipo === 'border' && parts.length === 2) {
                const BORDER_STYLES = ['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset'];
                return /^\d+(\.\d+)?$/.test(parts[0]) && BORDER_STYLES.includes(parts[1]);
            }
            return parts.length === 4 && parts.every(v => /^\d+(\.\d+)?$/.test(v));
        }
        return /^\d+(\.\d+)?$/.test(valor);
    }

    // cl: número de columnas + auto/min/max + fit-{dim}/fill-{dim}
    if (tipo === 'cl') {
        if (/^\d+$/.test(valor)) return true;
        if (['auto', 'min', 'max'].includes(valor)) return true;
        if (/^(fit|fill)-.+$/.test(valor)) return true;
        return false;
    }

    // rw: número de filas + auto/none
    if (tipo === 'rw') {
        if (/^\d+$/.test(valor)) return true;
        if (['auto', 'none'].includes(valor)) return true;
        return false;
    }

    // Posicionamiento en columnas/filas
    if (['col-start', 'col-end', 'row-start', 'row-end'].includes(tipo)) {
        if (valor === 'auto') return true;
        return /^\d+$/.test(valor) && parseInt(valor) >= 1 && parseInt(valor) <= 13;
    }

    if (tipo === 'row-span') {
        if (valor === 'full') return true;
        return /^\d+$/.test(valor);
    }

    if (tipo === 'font') {
        const pesos = ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'];
        if (pesos.includes(valor)) return true;
        if (/^\d+$/.test(valor)) {
            const n = parseInt(valor);
            return n >= 100 && n <= 900 && n % 100 === 0;
        }
        return false;
    }

    if (tipo === 'opacity') return ['0', '25', '50', '75', '100'].includes(valor);

    if (['overflow', 'overflow-x', 'overflow-y'].includes(tipo)) {
        return ['auto', 'hidden', 'visible', 'scroll'].includes(valor);
    }

    if (tipo === 'cursor') {
        return ['pointer', 'default', 'text', 'move', 'not-allowed'].includes(valor);
    }

    if (tipo === 'text-wrap') {
        return ['wrap', 'nowrap', 'balance', 'pretty', 'stable'].includes(valor);
    }

    if (tipo === 'leading') {
        const nombresLeading = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'];
        if (nombresLeading.includes(valor)) return true;
        return /^\d+(\.\d+)?$/.test(valor);
    }

    return true;
}

function esValorConUnidadValido(valor) {
    const regex = /^(\d+(\.\d+)?)(px|rem|em|%|vw|vh)?$/;
    if (!regex.test(valor)) return false;
    if (!valor.match(/[a-z%]/i)) return valor.length <= 3;
    return true;
}

function parsearClase(claseCompleta) {
    if (CACHE.parsedClases.has(claseCompleta)) return CACHE.parsedClases.get(claseCompleta);

    let tipo = null, valor = '', esResponsive = false, breakpointPrefijo = '', esImportant = false, esNegativo = false;
    let claseParaParsear = claseCompleta;

    // Soporte para !clase → aplica !important (igual que Tailwind v3)
    if (claseParaParsear.startsWith('!')) {
        esImportant = true;
        claseParaParsear = claseParaParsear.substring(1);
    }

    if (claseParaParsear.includes(':')) {
        esResponsive = true;
        const partes = claseParaParsear.split(':');
        breakpointPrefijo = partes[0];
        claseParaParsear = partes[1];
    }

    // Soporte para -clase → valor negativo (ej: -mt-10, -top-4)
    if (claseParaParsear.startsWith('-')) {
        esNegativo = true;
        claseParaParsear = claseParaParsear.substring(1);
    }

    if (CONFIG.clasesMap[claseParaParsear]) {
        tipo = claseParaParsear;
        valor = '';
    } else {
        const prefijos = Object.keys(CONFIG.clasesMap).sort((a, b) => b.length - a.length);

        for (const prefijo of prefijos) {
            if (claseParaParsear.startsWith(prefijo + '-')) {
                const posibleValor = claseParaParsear.substring(prefijo.length + 1);
                if (esValorValidoParaTipo(posibleValor, prefijo)) {
                    tipo = prefijo;
                    valor = posibleValor;
                    break;
                }
            }
        }
    }

    const resultado = {
        tipo, valor, esResponsive, breakpointPrefijo, esImportant,
        esNegativo: esNegativo && TIPOS_NEGATIVOS.has(tipo),
        claseOriginal: claseParaParsear,
        esValida: tipo !== null && !!CONFIG.clasesMap[tipo]
    };

    CACHE.parsedClases.set(claseCompleta, resultado);
    return resultado;
}

function generarCSSParaClase(claseCompleta) {
    if (CACHE.cssGenerado.has(claseCompleta)) return CACHE.cssGenerado.get(claseCompleta);

    const parsed = parsearClase(claseCompleta);
    if (!parsed.esValida) return null;

    const { tipo, valor, esResponsive, esImportant, esNegativo } = parsed;
    const imp = esImportant ? ' !important' : '';

    if (CONFIG.clasesComplejas[tipo]) {
        if (esResponsive) {
            return generarCSSResponsiveParaClaseCompleja(claseCompleta, tipo);
        }
        return generarCSSParaClaseCompleja(claseCompleta, tipo);
    }

    let propiedad = CONFIG.clasesMap[tipo];
    if (tipo === 'border' && valor.includes('-')) {
        const _parts = valor.split('-');
        const BORDER_STYLES = ['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset'];
        if (_parts.length === 2 && BORDER_STYLES.includes(_parts[1])) propiedad = 'border';
    }
    const claseParaValor = esImportant ? claseCompleta.substring(1) : claseCompleta;
    let valorCSS = CONFIG.valorToCSS(valor, tipo, claseParaValor);
    if (valorCSS === null) return null;

    if (esNegativo) {
        if (TIPOS_TRANSFORM.has(tipo)) {
            // Para transforms: negar el valor dentro del paréntesis
            // translateX(1rem) → translateX(-1rem)   rotate(45deg) → rotate(-45deg)
            valorCSS = valorCSS.replace(/\(([^)]+)\)/, (_, inner) => {
                const esZero = /^0(deg|rem|px|em|%|vw|vh)?$/.test(inner);
                return esZero ? `(${inner})` : `(-${inner})`;
            });
        } else {
            valorCSS = Array.isArray(valorCSS)
                ? valorCSS.map(v => (v === '0' ? '0' : `-${v}`))
                : (valorCSS === '0' ? '0' : `-${valorCSS}`);
        }
    }

    const selector = esResponsive
        ? `.${claseCompleta.replace(/:/g, '\\:').replace(/\//g, '\\/').replace(/\./g, '\\.').replace(/^!/, '\\!')}`
        : `.${claseCompleta.replace(/\//g, '\\/').replace(/\./g, '\\.').replace(/^!/, '\\!')}`;

    let reglaCSS = '';

    if (Array.isArray(propiedad)) {
        const reglas = Array.isArray(valorCSS)
            ? propiedad.map((p, i) => `${p}: ${valorCSS[i]}${imp}`)
            : propiedad.map(p => `${p}: ${valorCSS}${imp}`);
        reglaCSS = `${selector} { ${reglas.join('; ')} }`;
    } else {
        reglaCSS = `${selector} { ${propiedad}: ${valorCSS}${imp}; }`;
    }

    CACHE.cssGenerado.set(claseCompleta, reglaCSS);
    return reglaCSS;
}

function generarClasesUsadas() {
    const todasClases = [];
    document.querySelectorAll('*').forEach(el => {
        const attr = el.getAttribute('class');
        if (attr) attr.split(' ').forEach(c => { if (c.trim()) todasClases.push(c.trim()); });
    });

    const clasesUnicas = [...new Set(todasClases)];
    const clasesBase = [], clasesResponsive = [];

    clasesUnicas.forEach(clase => {
        const parsed = parsearClase(clase);
        if (!parsed.esValida) return;
        parsed.esResponsive ? clasesResponsive.push(clase) : clasesBase.push(clase);
    });

    let cssBase = '';
    const procesadas = new Set();
    clasesBase.forEach(clase => {
        const css = generarCSSParaClase(clase);
        if (css && !procesadas.has(clase)) {
            cssBase += `${css}\n`;
            procesadas.add(clase);
        }
    });

    const reglasPorBreakpoint = {};
    clasesResponsive.forEach(clase => {
        const css = generarCSSParaClase(clase);
        if (!css) return;
        const bpRaw = clase.split(':')[0];
        const bp = bpRaw.startsWith('!') ? bpRaw.substring(1) : bpRaw;
        const breakpoint = CONFIG.breakpoints.find(b => b.prefijo === bp);
        if (!breakpoint) return;
        if (!reglasPorBreakpoint[breakpoint.query]) reglasPorBreakpoint[breakpoint.query] = new Set();
        reglasPorBreakpoint[breakpoint.query].add(css);
    });

    let cssResponsive = '';
    Object.entries(reglasPorBreakpoint).forEach(([query, reglas]) => {
        cssResponsive += `@media ${query} {\n`;
        reglas.forEach(r => { cssResponsive += `  ${r}\n`; });
        cssResponsive += `}\n`;
    });

    const cssFinal = cssBase + (cssResponsive ? '\n' + cssResponsive : '');

    let estilo = document.getElementById('clases-generadas');
    if (!estilo) {
        estilo = document.createElement('style');
        estilo.id = 'clases-generadas';
        document.head.appendChild(estilo);
    }
    // Usar innerHTML en lugar de textContent: iOS Safari no siempre
    // dispara re-evaluación del CSSOM con textContent en <style> existente.
    if (estilo.innerHTML !== cssFinal) estilo.innerHTML = cssFinal;
}

// Ejecutar inmediatamente (script debe estar al final del <body>)
generarClasesUsadas();
document.documentElement.classList.add('css-ready');

// Segundo pase al finalizar DOMContentLoaded: captura elementos que Kendo
// u otros scripts inicializan de forma diferida. Crítico en iOS Safari donde
// el motor WebKit puede renderizar antes de que el JS de widgets termine.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        generarClasesUsadas();
    });
} else {
    // Ya cargó: forzar un pase extra con micro-delay para capturar widgets Kendo
    Promise.resolve().then(generarClasesUsadas);
}

// Observar cambios dinámicos en el DOM
let debounceTimeout;
const observer = new MutationObserver(() => {
    clearTimeout(debounceTimeout);
    // No se limpia el cache: las reglas ya calculadas se reutilizan,
    // solo se generan CSS para clases nuevas que aparezcan en el DOM
    debounceTimeout = setTimeout(generarClasesUsadas, 100);
});
const target = document.body || document.documentElement;
observer.observe(target, {
  attributes: true,
  attributeFilter: ['class'],
  childList: true,
  subtree: true
});