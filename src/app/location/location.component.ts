/// <reference types='@types/googlemaps' />
import { Component, OnInit, NgZone } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { SharedService } from '../shared.service';
import { GeneralService } from '../general.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  subject: Subject <any> = new Subject();
  constructor(private zone: NgZone, private gs: GeneralService, private ss: SharedService) {
  }
  //**********to use google api uncomment this line too*******
  // geocoder = new google.maps.Geocoder();
  currentLat: any;
  currentLong: any;
  address: any = '';
  pincode: any = '';
  public showList = false;
  public bankNotListed = false;
  listOfAllLocation: any = [
  ];
  model: any = {

  };

  ngOnInit() {
    this.subject
    .pipe(
      debounceTime(500)
    ).subscribe(() => {
      console.log('api call...');
      this.listOfAllLocation.push(    {
        'id': '7304193',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'Mahipalpur, New Delhi, Delhi',
        'name': 'Mahipalpur',
        'terms': [
          'Mahipalpur',
          'New Delhi',
          'Delhi'
        ],
        'centerPoint': {
          'lat': 28.54374,
          'lng': 77.12819
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      },
      {
        'id': '1261481',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'New Delhi, Delhi, India',
        'name': 'New Delhi',
        'terms': [
          'New Delhi',
          'Delhi',
          'India'
        ],
        'centerPoint': {
          'lat': 28.6139391,
          'lng': 77.2090212
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      },
      {
        'id': 'oyo-locality-19359750',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'Paharganj, New Delhi, Delhi',
        'name': 'Paharganj',
        'terms': [
          'Paharganj',
          'New Delhi',
          'Delhi'
        ],
        'centerPoint': {
          'lat': 28.64804,
          'lng': 77.21299
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      },
      {
        'id': 'google_record_ChIJhTk_iQvNHDoRGcYqI9sIOh4',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'New Digha Sea Beach Road, Purba Medinipur, West Bengal',
        'name': 'New Digha Sea Beach Road',
        'terms': [
          'New Digha Sea Beach Road',
          'Purba Medinipur',
          'West Bengal'
        ],
        'centerPoint': {
          'lat': 21.6196016,
          'lng': 87.5047088
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      },
      {
        'id': 'oyo-locality-14576106',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'New Delhi Railway Station, New Delhi, Delhi',
        'name': 'New Delhi Railway Station',
        'terms': [
          'New Delhi Railway Station',
          'New Delhi',
          'Delhi'
        ],
        'centerPoint': {
          'lat': 28.641384,
          'lng': 77.218483
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      },
      {
        'id': '345234441',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'Karol Bagh, New Delhi, Delhi',
        'name': 'Karol Bagh',
        'terms': [
          'Karol Bagh',
          'New Delhi',
          'Delhi'
        ],
        'centerPoint': {
          'lat': 28.643991,
          'lng': 77.188528
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      },
      {
        'id': 'oyo-locality-16568193',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'Dwarka, New Delhi, Delhi',
        'name': 'Dwarka, New Delhi',
        'terms': [
          'Dwarka',
          'New Delhi',
          'Delhi'
        ],
        'centerPoint': {
          'lat': 28.5921401,
          'lng': 77.0460481
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      },
      {
        'id': 'google_record_ChIJv2O_eUp1AjoRgDkOwOPCvLs',
        'type': 'locations',
        'locationType': 'locality',
        'displayName': 'New Town, Kolkata, West Bengal',
        'name': 'New Town',
        'terms': [
          'New Town',
          'Kolkata',
          'West Bengal'
        ],
        'centerPoint': {
          'lat': 22.5977808,
          'lng': 88.47671679999996
        },
        'searchDataSource': 'INTERNAL',
        'source': 'INLINE',
        'country': {
          'id': 1,
          'name': 'India'
        }
      });
    });
  }

  searchLocation() {
  this.listOfAllLocation = [];
  this.subject.next();
  }
  clearSearch() {
    this.model.location = '';
  }
  selectedFunc(city, index) {
    this.model.location  = city.name;
    this.listOfAllLocation = [];
  }
  focusonbtn() {
    this.showList = true;
  }
  selectedbank(item) {
    this.bankNotListed = item ? false : true;
    this.showList = false;
    // this.selectedBank = item;
    // this.submitBank(item);
    // this.toggleBankList(false);
  }
  close(item) {
    this.showList = false;
  }
  openstreet() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        const url = `https://nominatim.openstreetmap.org/reverse.php?format=json&lat=${this.currentLat}&lon=${this.currentLong}&zoom=16`;
        this.gs.getBitCoin(url).subscribe(res => {
          console.log(res);
          this.address = res['display_name'];
          });
      });
    }
    }
  //*******************this code is for google geolocation*****************
  // showPosition(position) {
  //   console.log(position);
  //   let currentLat;
  //   let currentLong;
  //     currentLat = position.coords.latitude;
  //     currentLong = position.coords.longitude;
  //     const url = `https://nominatim.openstreetmap.org/reverse.php?format=json&lat=${currentLat}&lon=${currentLong}&zoom=16`;
  //     vm.gs.getBitCoin(url).subscribe(res => {
  //       console.log(res);
  //       });
  // }
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
  //             this.zone.run(() => {
  //               this.address = result['formatted_address'];
  //               console.log('this.address', result);
  //               for (let i = 0; i < resultLength; i++) {
  //                 for (let j = 0; j < result.address_components[i].types.length; j++) {
  //                   if (result.address_components[i].types[j] === 'postal_code') {
  //                    this.model['pincode'] = result.address_components[i].long_name;
  //                   }
  //                 }
  //               }
  //             });
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
//*******************this code is for google geolocation*****************
}
