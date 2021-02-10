import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Map, tileLayer, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CityService } from '../core/services/city.service';
import { City } from '../core/models/city.model';
import * as L from 'leaflet.markercluster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: Map;
  newMarker: any;
  address: string[];

  tabSelect: string = "cityinfo";
  cities: City[] = [];
  citySearched: City;

  constructor(private geoLocation: Geolocation, private router: Router, private cityService: CityService) { }



  ngOnInit() {

  }

  segmentChanged(e) {
    this.tabSelect = e.detail.value;
    console.log(this.tabSelect);

  }



  //The below function is added
  ionViewDidEnter() {
    this.loadMap();
  }

  //The below function is added
  loadMap() {
    this.map = new Map("mapId").setView([46.6311634, 3.0599573], 5);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: 'Map data © <a  href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>' })
      .addTo(this.map);
    this.cityService.getCities().subscribe(data => {
      this.cities = data;

      var markersCluster = new L.MarkerClusterGroup();

      data.forEach(city => {
        // var latLng = new L.LatLng(city.latitude, city.longitude);
        // var marker = new L.Marker(latLng, { title: city.cityName });
        let point = marker([city.latitude, city.longitude]);
        point.addEventListener('click', () => this.cityService.sendToCitySubject(city));
        markersCluster.addLayer(point);
      });
        markersCluster.addTo(this.map);
    }, err => console.log(err));


  }

  locatePosition() {


    this.geoLocation.getCurrentPosition().then(coordonee => {

      if (!!this.newMarker) {
        this.newMarker.setLatLng([coordonee.coords.latitude, coordonee.coords.longitude]).update();
      }
      else {
        this.newMarker = marker([coordonee.coords.latitude, coordonee.coords.longitude])
          .addTo(this.map);
        this.newMarker.bindPopup("You are located here!").openPopup();
      }

      this.moveToCity(coordonee.coords.latitude, coordonee.coords.longitude)

    }).catch(e => console.log(e))
  }









  moveToCity(lat: number, lon: number) {
    this.map.setView([lat, lon], 12)
  }

  goBack() {
    this.router.navigate(["home"]);


  }


}
