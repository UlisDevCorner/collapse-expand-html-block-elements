/*
* Collapse or Expand the Content of an
* HTML Block Element
* by clicking in an Icon
* */

export default class CollapseExpand {

  // Private Property: CSS class '.coll-exp-ico'
  #cssClassCollExpIco = document.querySelectorAll('.coll-exp-ico');

  // Runs when class was called
  constructor() {

    // Task when the Page is loaded
    window.onload = () => {

      // Iterate through '.coll-exp-ico' CSS class
      this.#cssClassCollExpIco.forEach((el, i) => {

        const blockElementAfterIcon = this.#cssClassCollExpIco[i].nextElementSibling;

        // If: Coll-Exp-Ico has no CSS class '.show' add the '.hidden' CSS class & the Style max-height to 0
        // Else: Add scroll-height the Element
        if (!el.classList.contains('show')) {
          blockElementAfterIcon.classList.add('hidden');
          blockElementAfterIcon.style.maxHeight = '0'
        } else {
          blockElementAfterIcon.style.maxHeight = `${blockElementAfterIcon.scrollHeight}px`;
        }

      });
    }

    // Call Method: Collapse or Expand the Content by clicking on the Icon
    this.#collExpCnt(this.#cssClassCollExpIco);

  }

  // Private Method: Collapse or Expand the Content by clicking on the Icon
  #collExpCnt(cssClass) {

    // Iterate through the CSS class
    cssClass.forEach((_, i) => {
      cssClass[i].addEventListener('click', function (){

        // Toggle '.show' CSS class of the Icon
        this.classList.toggle('show');

        // Get the CSS class of the next Sibling Element
        const blockElementAfterIcon = this.nextElementSibling;

        // Toggle the '.hidden' CSS class
        blockElementAfterIcon.classList.toggle('hidden');

        // If: CSS class '.show' is set, add the Style of scroll-height to max-height
        // Else: max-height = 0
        blockElementAfterIcon.style.maxHeight = this.classList.contains('show') ?
          `${blockElementAfterIcon.scrollHeight}px` :
          '0';

      });
    });

  }

}