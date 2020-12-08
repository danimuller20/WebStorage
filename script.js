window.onload = function () {
  let body = document.querySelector('#main-content');
let paragraph = document.querySelectorAll('.paragraph');

function changeBackgroundColor(colors) {
  body.style.backgroundColor = colors;
  localStorage.setItem('backgroundColor', colors);

}

function changeFontColor(color) {
  body.style.color = color;
  localStorage.setItem('color', color);
}

function changeFontSize(size) {
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.fontSize = size;
  }
  localStorage.setItem('fontSize', size);
}

function setSpaceBetweenLines(height) {
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.lineHeight = height;
  }
  localStorage.setItem('lineHeight', height);
}

function setFontFamily(family) {
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.fontFamily = family;
  }
}

let backgroundColorChanges = document.querySelectorAll('#backgound-color>button');
for (let index = 0; index < backgroundColorChanges.length; index += 1) {
  backgroundColorChanges[index].addEventListener('click', function(event) {
    changeBackgroundColor(event.target.innerHTML)
  })
}

let fontColorChanges = document.querySelectorAll('#color-font>button');
for (let index = 0; index < fontColorChanges.length; index += 1) {
  fontColorChanges[index].addEventListener('click', function(event) {
    changeFontColor(event.target.innerHTML)
  })
}

let fontSizeChanges = document.querySelectorAll('#font-size>button');
for (let index = 0; index < fontSizeChanges.length; index += 1) {
  fontSizeChanges[index].addEventListener('click', function(event) {
    changeFontSize(event.target.innerHTML)
  })
}

let setLineHeigt = document.querySelectorAll('#line-heigt>button');
for (let index = 0; index < setLineHeigt.length; index +=1) {
  setLineHeigt[index].addEventListener('click', function(event) {
    setSpaceBetweenLines(event.target.innerHTML)
  })
}

let fontFamily = document.querySelectorAll('#font-family>button');
for (let index = 0; index < fontFamily.length; index += 1) {
  fontFamily[index].addEventListener('click', function(event) {
    setFontFamily(event.target.innerHTML)
  })
}

function boot () {
  let backgroundColor = localStorage.getItem('backgroundColor');
  if (backgroundColor) {
    changeBackgroundColor(backgroundColor);
  }

  let fontColor = localStorage.getItem('color');
  if (fontColor) {
    changeFontColor(fontColor);
  }

  let fontSize = localStorage.getItem('fontSize');
  if (fontSize) {
    changeFontSize(fontSize);
  }

  let spaceLines = localStorage.getItem('lineHeight');
  if (spaceLines) {
    setSpaceBetweenLines(spaceLines)
  }

  let fontFamily = localStorage.getItem('fontFamily');
  if (fontFamily) {
    setFontFamily(fontFamily)
  }
}

boot ()
}