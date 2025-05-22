/**
 * @description Queries the DOM for the first element with a matching selector
 * @param {string} selector 
 * @returns {HTMLElement}
 */
export function select(selector) {
  return document.querySelector(selector);
}


/**
 * @description Queries the DOM for the element with the id {id}
 * @param {string} selector 
 * @returns {HTMLElement}
 */
export function getById(selector) {
  return document.getElementById(selector);
}

/**
 * @param {HTMLElement} child
 */
export function switchOnClass(child) {
  if (child.classList.contains('on')) {
    child.classList.remove('on');
    child.classList.add('off');
  } else {
    child.classList.remove('off');
    child.classList.add('on');
  }
}