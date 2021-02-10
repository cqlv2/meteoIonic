import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Map, tileLayer, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: Map;
  newMarker: any;
  address: string[];

  constructor(private geoL: Geolocation, private router: Router) { }



  ngOnInit() { }

  // The below function is added
  ionViewDidEnter() {
    this.loadMap();
  }

  // The below function is added
  loadMap() {
    this.map = new Map("mapId").setView([46.6311634, 3.0599573], 5);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: 'Map data © <a  href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>' })
      .addTo(this.map);
  }

  locatePosition() {
  

    this.geoL.getCurrentPosition().then(coordonee => {

      if (!!this.newMarker){
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
