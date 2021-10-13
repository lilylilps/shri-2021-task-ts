import { color } from './colors';
import { markdown } from './md';
import { backgroundColors, effects, fontColors } from './model';

type Effect = keyof typeof effects;

type Options = {
    font?: keyof typeof fontColors,
    background?: keyof typeof backgroundColors,
    effects?: Effect[],
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string
}

export function style(text: string, options: Options) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
