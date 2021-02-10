import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Map, tileLayer, marker } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: Map;
  newMarker: any;
  address: string[];

  constructor(private router: Router) { }



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
    this.map.locate({ setView: true }).on("locationfound", (e: any) => {
      this.newMarker = marker([e.latitude, e.longitude], {
        draggable:
          true
      }).addTo(this.map);
      this.newMarker.bindPopup("You are located here!").openPopup();

      this.newMarker.on("dragend", () => {
        const position = this.newMarker.getLatLng();
      });
    });
  }


  goBack() {
    this.router.navigate(["home"]);


  }



}
