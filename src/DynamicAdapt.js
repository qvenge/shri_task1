function indexInParent(parent, element) {
  return [...parent.children].indexOf(element);
}

export default class DynamicAdapt {
  constructor() {
    this.init();
  }

  init() {
    // массив объектов
    this.elemsData = [];
    this.daClassname = '_dynamic_adapt_';
    // массив DOM-элементов
    this.elems = [...document.querySelectorAll('[data-da]')];

    const castPlace = (place) => {
      let castedPlace = place.trim();
      if (place === 'first' || place === 'last') return place;
      castedPlace = parseInt(place, 10);
      if (Number.isNaN(castedPlace)) return 'last';
      return castedPlace;
    };

    // наполнение оbjects объктами
    this.elems.forEach((node) => {
      const [destSelector, media, place] = node.dataset.da.split(',');
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentElement;
      оbject.destination = document.querySelector(`${destSelector.trim()}`);
      оbject.media = media.trim();
      оbject.place = castPlace(place ?? 'last');
      оbject.index = indexInParent(оbject.parent, оbject.element);
      this.elemsData.push(оbject);
    });
    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    this.elemsData.forEach((data) => {
      const matchMedia = window.matchMedia(data.media);
      matchMedia.addEventListener('change', this.mediaHandler.bind(this, data));
    });
  }

  // Основная функция
  mediaHandler(elemData, matchMedia) {
    if (matchMedia.matches) {
      elemData.index = indexInParent(elemData.parent, elemData.index);
      this.moveTo(elemData);
    } else if (elemData.element.classList.contains(this.daClassname)) {
      this.moveBack(elemData);
    }
  }

  // Функция перемещения
  moveTo({ place, element, destination }) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.append(element);
      return;
    }
    if (place === 'first') {
      destination.prepend(element);
      return;
    }
    destination.children[place].before(element);
  }

  // Функция возврата
  moveBack({ parent, element, index }) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }
}
