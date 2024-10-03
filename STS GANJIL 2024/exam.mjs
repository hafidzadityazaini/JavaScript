function kelompokkanBilangan(bilangan) {
  if (bilangan % 2 === 0) {
      if (bilangan % 4 === 0) {
          return 'Bilangan genap dan bisa dibagi 4';
      } else {
          return 'Bilangan genap tetapi tidak bisa dibagi 4';
      }
  } else {
      return 'Bilangan ganjil';
  }
}

module.exports = kelompokkanBilangan;