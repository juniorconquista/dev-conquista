export default {
    dark: true,
    primary: {
        default: '#25262A',
        dark: '#25262A',
        light: '#f69263',
        contrast: '#ffffff',
    },
    secondary: {
        default: '#da13fd',
        dark: '#da13fd',
        light: '#453935',
        contrast: '#1B2B3A',
    },
    danger: {
        default: '#ff6961',
        dark: '#ff261b',
        light: '#ffbdb9',
        contrast: '#ffffff',
    },
    success: {
        default: '#0E9d51',
        dark: '#0a753c',
        light: '#10bc60',
        contrast: '#ffffff',
    },
    warning: {
        default: '#ffb143',
        dark: '#e4902c',
        light: '#ffd868',
        contrast: '#ffffff',
    },
    info: {
        default: '#0ea7a7',
        dark: '#0a7676',
        light: '#11d4d4',
        contrast: '#ffffff',
    },
    grays: {
        default: '#9ba8b2',
        dark: '#4b4b4b',
        light: '#eeeeef',
        contrast: '#f5f5f5',
    },
    background: {
        default: '#ffffff',
        dark: '#2D2E32',
    },
    get text(): string {
        return this.dark ? '#f5f7f7' : '#ABACAF';
    },
};
