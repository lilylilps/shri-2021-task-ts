import { backgroundColors, effects, fontColors, Reset } from './model';
function addColor(text: string, color: keyof typeof fontColors | keyof typeof backgroundColors, isBackground = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}

function getEffects(effectList: Effect[]) {
    return effectList.map((effect: Effect) => effects[effect]).join('');
}

type Effect = keyof typeof effects;

type Options = {
    font?: keyof typeof fontColors,
    background?: keyof typeof backgroundColors,
    effects?: Effect[],
}

export function color(text: string, options: Options) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
