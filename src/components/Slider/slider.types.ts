import { ReactNode } from 'react';

export interface Props {
    items: Array<any>;
    style: any;
    children: ReactNode;
    itemWidth?: 'full' | number;
    visible?: number;
    showButtons?: boolean;
    showCounter?: boolean;
}
