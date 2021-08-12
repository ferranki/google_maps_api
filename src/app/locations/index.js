import React from 'react'

import MapComponent from '../../infrastructure/components/map';
import AutocompleteLocationSearchFeature from '../../features/AutocompleteLocationSearch';

function Locations () {

  return (
    <>
      <AutocompleteLocationSearchFeature />
      <MapComponent></MapComponent>
    </>
  )
}

export default Locations
