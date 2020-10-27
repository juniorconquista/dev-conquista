export default function (dark = false) {
    return {
        dark,
        get primary() {
            return {
                default: this.dark ? '#25262A' : '#efefef',
                contrast: this.dark ? '#25262A' : '#efefef',
                dark: '#25262A',
                light: '#efefef',
            };
        },
        get secondary() {
            return {
                default: this.dark ? '#da13fd' : '#da13fd',
                contrast: this.dark ? '#da13fd' : '#25262A',
                dark: '#25262A',
                light: '#da13fd',
            };
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
        get background() {
            return {
                default: this.dark ? '#2D2E32' : '#ffffff',
                dark: '#2D2E32',
                ligth: '#ffffff',
            };
        },
        get text(): string {
            return this.dark ? '#f5f7f7' : '#25262A';
        },
    };
}
