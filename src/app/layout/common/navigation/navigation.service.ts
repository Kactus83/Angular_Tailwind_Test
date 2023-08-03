import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  links = [
    { path: '', label: 'Accueil' },
    { path: 'test', label: 'Page Test' }
    // Ajouter d'autres liens ici si nécessaire
  ];

  constructor() { }
}
