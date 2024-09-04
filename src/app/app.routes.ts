import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: 'map',
        loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'markers',
        loadComponent: () => import('./pages/markers/markers.page').then( m => m.MarkersPage)
      },
      {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'results',
    loadComponent: () => import('./pages/results/results.page').then( m => m.ResultsPage)
  },
  {
    path: 'marker',
    loadComponent: () => import('./pages/marker/marker.page').then( m => m.MarkerPage)
  },
  {
    path: 'video',
    loadComponent: () => import('./pages/video/video.page').then( m => m.VideoPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
];
