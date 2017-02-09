var carouselImages = [
  {
    image_url: 'http://desktopography.net/wp-content/uploads/bfi_thumb/hushed_1920x1200-32f5431dh4se5dwk02ct1c.jpg',
    title: 'Hushed',
    photographer_id: 'Michael Withers'
  },
  {
    image_url: 'http://desktopography.net/wp-content/uploads/bfi_thumb/dndln_1920x1200-32f56720k59biqi0157i0w.jpg',
    title: 'Dndln',
    photographer_id: 'Carlos'
  },
  {
    image_url: 'http://desktopography.net/wp-content/uploads/bfi_thumb/open_source_1440x900-1-32awggysvbuw444jyfikn4.jpg',
    title: 'Open Source',
    photographer_id: 'Jerico Santander'
  },
  {
    image_url: 'http://desktopography.net/wp-content/uploads/bfi_thumb/treehugger_1680x1050-32awgq9j4zatrpd2gj73eo.jpg',
    title: 'Treehugger',
    photographer_id: 'Pete Harrison'
  },
  {
    image_url: 'http://desktopography.net/wp-content/uploads/bfi_thumb/dsn_1440x900-32f5578uqrcngwrj99imm8.jpg',
    title: 'DSN',
    photographer_id: 'Marius Bauer'
  }
];


var imageURL = $(carouselImages.map(function (url) { return url.image_url } ))
var index = 0

updateIMG()
function updateIMG () {
  // Should of used a .css() jquery function.
  return $('.container').attr('style', `background-image: url(${imageURL[index]}); transition: background-image .5s ease-in-out;`)
}

function rightClick() {
  if (index >= 4) {
    index = 0
  } else { index += 1 }
  updateIMG()
}

function leftClick() {
  if (index <= 0) {
    index = 4
  } else { index += -1 }
  updateIMG()
}
