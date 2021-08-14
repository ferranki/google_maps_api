import AutocompleteLocationService from "./autoCompleteLocationService";

export default new AutocompleteLocationService(new window.google.maps.places.AutocompleteService());