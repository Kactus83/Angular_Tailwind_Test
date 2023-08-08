import { IsActiveMatchOptions, Params, QueryParamsHandling } from '@angular/router';

export interface RuzeNavigationItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type:
        | 'aside'
        | 'basic'
        | 'collapsable'
        | 'divider'
        | 'group'
        | 'spacer';
    hidden?: (item: RuzeNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    fragment?: string;
    preserveFragment?: boolean;
    queryParams?: Params | null;
    queryParamsHandling?: QueryParamsHandling | null;
    externalLink?: boolean;
    target?:
        | '_blank'
        | '_self'
        | '_parent'
        | '_top'
        | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: RuzeNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: RuzeNavigationItem[];
    meta?: any;
}

export type RuzeVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin';

export type RuzeVerticalNavigationMode =
    | 'over'
    | 'side';

export type RuzeVerticalNavigationPosition =
    | 'left'
    | 'right';
