import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { OSM } from 'ol/source';
@Component({
  selector: 'app-map',
  templateUrl: './app-map.component.html',
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient) {}
  map!: Map;

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        zoom: 2,
      }),
    });

    this.http.get(`/api/geometry`).subscribe((geoJson: any) => {
      const vectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(geoJson, {
          featureProjection: 'EPSG:3857',
        }),
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
      this.map.addLayer(vectorLayer);
    });
  }
}
