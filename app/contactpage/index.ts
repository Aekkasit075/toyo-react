/// <reference types="@types/google.maps" />

const mapElement = document.querySelector('gmp-map') as any;

async function init() {
    // Request needed libraries.
    const [{ AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('marker'),
        google.maps.importLibrary('maps'),
    ]);

    const priceTag = document.createElement('div');
    priceTag.className = 'price-tag';
    priceTag.textContent = '$2.5M';

    const marker = new AdvancedMarkerElement({
        position: { lat: 37.42, lng: -122.1 },
    });
    marker.append(priceTag);
    mapElement.append(marker);
}
void init();
