import { Injectable } from '@angular/core';
import { RuzeDrawerComponent } from './drawer.component';

@Injectable({
    providedIn: 'root'
})
export class RuzeDrawerService
{
    private _componentRegistry: Map<string, RuzeDrawerComponent> = new Map<string, RuzeDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: RuzeDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): RuzeDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
