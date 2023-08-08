import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { RuzeNavigationService, RuzeVerticalNavigationComponent } from '../../../../@ruze/components/navigation';

// Définition d'une interface pour clarifier la structure des langues.
interface LangDefinition {
    id: string;
    label: string;
}

@Component({
    selector       : 'languages',
    templateUrl    : './languages.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'languages'
})
export class LanguagesComponent implements OnInit, OnDestroy
{
    // Utilisation de LangDefinition[] pour une meilleure clarification.
    availableLangs: LangDefinition[];
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _ruzeNavigationService: RuzeNavigationService,
        private _translocoService: TranslocoService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Récupérer les langues disponibles à partir de transloco
        const langs = this._translocoService.getAvailableLangs();

        // Conversion des langues disponibles en LangDefinition[]
        this.availableLangs = Array.isArray(langs[0]) ? 
            langs.map((lang: any) => ({ id: lang[0], label: lang[1] })) :
            langs.map((lang: any) => ({ id: lang, label: lang }));

        // S'abonner aux changements de langue
        this._translocoService.langChanges$.subscribe((activeLang) => {
            this.activeLang = activeLang;
            this._updateNavigation(activeLang);
        });

        // Associer les codes de pays ISO aux langues pour les drapeaux
        this.flagCodes = {
            'en': 'us',
            'tr': 'tr'
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Changer la langue active
     *
     * @param lang
     */
    setActiveLang(lang: string): void
    {
        this._translocoService.setActiveLang(lang);
    }

    /**
     * Fonction trackBy pour les boucles ngFor
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Mettre à jour la navigation en fonction de la langue
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void
    {
        // Pour les besoins de la démonstration, nous mettrons uniquement à jour les noms des tableaux de bord
        // dans la navigation. Vous pouvez aussi remplacer entièrement les données de navigation.
        //
        // Vous pouvez importer les données à partir d'un fichier ou les demander à votre backend.

        // Récupérer le composant -> données de navigation -> élément
        const navComponent = this._ruzeNavigationService.getComponent<RuzeVerticalNavigationComponent>('mainNavigation');

        // Retourner si le composant de navigation n'existe pas
        if ( !navComponent )
        {
            return null;
        }

        // Récupérer les données de navigation
        const navigation = navComponent.navigation;

        // Récupérer l'élément du tableau de bord "Projet" et mettre à jour son titre
        const projectDashboardItem = this._ruzeNavigationService.getItem('dashboards.project', navigation);
        if ( projectDashboardItem )
        {
            this._translocoService.selectTranslate('Project').pipe(take(1))
                .subscribe((translation) => {
                    projectDashboardItem.title = translation;
                    navComponent.refresh();
                });
        }

        // Récupérer l'élément du tableau de bord "Analytique" et mettre à jour son titre
        const analyticsDashboardItem = this._ruzeNavigationService.getItem('dashboards.analytics', navigation);
        if ( analyticsDashboardItem )
        {
            this._translocoService.selectTranslate('Analytics').pipe(take(1))
                .subscribe((translation) => {
                    analyticsDashboardItem.title = translation;
                    navComponent.refresh();
                });
        }
    }
}
