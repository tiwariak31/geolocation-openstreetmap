/// <reference types="@types/googlemaps" />
import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // geocoder = new google.maps.Geocoder();
  // currentLat: any;
  // currentLong: any;
  // address: any = '';
  // pincode: any = '';

  ngOnInit() {
  }

  // myCurrentAddress() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.currentLat = position.coords.latitude;
  //       this.currentLong = position.coords.longitude;
  //       const latlng = { lat: this.currentLat, lng: this.currentLong };
  //       const request = { location: latlng };
  //       this.geocoder.geocode(request, (results, status) => {
  //         if (status === google.maps.GeocoderStatus.OK) {
  //           const result = results[0];
  //           const rsltAdrComponent = result.address_components;
  //           const resultLength = rsltAdrComponent.length;
  //           if (result != null) {
  //             this.address = result['formatted_address'];
  //             console.log('this.address', result);
  //             for (let i = 0; i < resultLength; i++) {
  //               for (let j = 0; j < result.address_components[i].types.length; j++) {
  //                 if (result.address_components[i].types[j] === 'postal_code') {
  //                  this.pincode = result.address_components[i].long_name;
  //                 }
  //               }
  //             }
  //           } else {
  //             alert('No address available!');
  //           }
  //         }
  //       });
  //     });
  //   } else {
  //     alert('Geolocation is not supported by this browser.');
  //   }
  // }
}
