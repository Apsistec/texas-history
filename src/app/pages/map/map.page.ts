import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class MapPage implements OnInit {
  constructor() {}

  async ngOnInit() {
    await this.requestLocationPermission();
    await this.getCurrentLocation();
  }

  async requestLocationPermission() {
    try {
      await Geolocation.requestPermissions();
      console.log('Location permission granted');
    } catch (error) {
      console.error('Error requesting location permission', error);
    }
  }

  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      console.log('Current position:', position);
      // Here you would typically update your map with the current location
    } catch (error) {
      console.error('Error getting current position', error);
    }
  }
}
