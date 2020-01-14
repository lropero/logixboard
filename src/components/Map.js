/* global google */
import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useObserver } from 'mobx-react-lite'

import { useTheme, useUtils } from 'logixboard/hooks'

const Map = () => {
  const theme = useTheme()
  const utils = useUtils()
  const [map, setMap] = useState()

  const getMarkers = () => {
    if (map && utils.current && utils.markers[utils.current] && Object.keys(utils.markers[utils.current]).length) {
      setTimeout(() => { // Hacky, could be improved (mobx reaction?)
        if (map && utils.current && utils.markers[utils.current] && Object.keys(utils.markers[utils.current]).length) {
          const bounds = new google.maps.LatLngBounds()
          bounds.extend(new google.maps.LatLng(utils.markers[utils.current].destination.lat, utils.markers[utils.current].destination.lng))
          bounds.extend(new google.maps.LatLng(utils.markers[utils.current].origin.lat, utils.markers[utils.current].origin.lng))
          map.fitBounds(bounds)
        }
      }, 10)

      return (
        <>
          <Marker
            clickable={false}
            icon={{
              scaledSize: new google.maps.Size(34, 34),
              url: 'http://icons.iconarchive.com/icons/vexels/office/1024/email-send-icon.png'
            }}
            position={{ lat: utils.markers[utils.current].origin.lat, lng: utils.markers[utils.current].origin.lng }}
          />,
          <Marker
            clickable={false}
            icon={{
              scaledSize: new google.maps.Size(42, 42),
              url: 'https://cdn1.iconfinder.com/data/icons/fitness-sport/512/finish_flag-512.png'
            }}
            position={{ lat: utils.markers[utils.current].destination.lat, lng: utils.markers[utils.current].destination.lng }}
          />
        </>
      )
    }
  }

  const options = {
    backgroundColor: theme.map.water,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    draggable: false,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: theme.map.land
          }
        ]
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: theme.map.textLand
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f5f5'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd'
          }
        ]
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'road',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dadada'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: theme.map.water
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: theme.map.textWater
          }
        ]
      }
    ]
  }

  return useObserver(() => Object.keys(utils.dimensions).length && (
    <LoadScript googleMapsApiKey={utils.config.googleMapsApiKey}>
      <GoogleMap
        center={(utils.current && map && map.getCenter()) || { lat: 10, lng: 0 }}
        clickableIcons={false}
        mapContainerStyle={{ height: utils.dimensions.height - 286, width: utils.dimensions.width }}
        onLoad={(map) => setMap(map)}
        options={options}
        zoom={(utils.current && map && map.getZoom()) || 2.2}
      >{getMarkers()}
      </GoogleMap>
    </LoadScript>
  ))
}

export default Map
