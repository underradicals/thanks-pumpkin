import { get, increment, decrement, soundOff, soundOn } from './store.js';
import { switchOnClass } from './helpers.js';

const PushButtonEvent = new CustomEvent('push');
const PopButtonEvent = new CustomEvent('pop');
const PeekButtonEvent = new CustomEvent('peek');
const MuteButtonEvent = new CustomEvent('mute');

export function HandlePushButtonEvent(PushButton, StackSize, Stack, PushAudio) {
  return () => {
    increment();
    PushButton.setAttribute('disabled', 'true');

    if (get('sound') === true) {
      PushAudio.play();
    }
    StackSize.firstElementChild.textContent = get('nextNumber');
    var span = document.createElement('span');
    var textNode = document.createTextNode(get('nextNumber'));
    span.append(textNode);
    span.classList.add('brick');
    span.classList.add('animate-down');
    Stack.insertAdjacentElement('afterbegin', span);
    setTimeout(() => {
      PushButton.removeAttribute('disabled');
    }, 1000);
  }
}

export function HandlePopButtonEvent(PopButton, StackSize, Stack, PopAudio) {
  return () => {
    if (get('nextNumber') === 0) return;
    PopButton.setAttribute('disabled', 'true');
    decrement();
    if (get('sound') === true) {
      PopAudio.play();
    }
    StackSize.firstElementChild.textContent = get('nextNumber');
    const firstChild = Stack.firstElementChild;
    firstChild.classList.remove('animate-down');
    firstChild.classList.add('animate-up');
    setTimeout(() => {
      Stack.removeChild(firstChild);
      PopButton.removeAttribute('disabled');
    }, 1000);
  }
}

export function HandlePeekButtonEvent(Stack, StackPeek, PeekAudio) {
  return () => {
    if (Stack.children.length === 0) {
      StackPeek.firstElementChild.textContent = '―'
      return;
    }
    if (get('sound') === true) {
      PeekAudio.play();
    }
    StackPeek.firstElementChild.textContent = Stack.firstElementChild.textContent;
  }
}

export function HandleButtonGroupClick(PushButton, PopButton, PeekButton, SoundButton) {
  return (event) => {
    const target = event.target;

    if (target.classList.contains('push')) {
      PushButton.dispatchEvent(PushButtonEvent);
    }

    if (target.classList.contains('pop')) {
      PopButton.dispatchEvent(PopButtonEvent);
    }

    if (target.classList.contains('peek')) {
      PeekButton.dispatchEvent(PeekButtonEvent);
    }

    if (target.localName === 'path' && target.parentElement.classList.contains('audio')
      || target.localName === 'svg' && target.parentElement.classList.contains('audio-btn')
      || target.localName === 'button' && target.classList.contains('audio-btn')) {
      SoundButton.dispatchEvent(MuteButtonEvent);
    }
  }
}

export function HandleMuteButtonEvent(SoundButton) {
  return () => {
    console.dir(SoundButton);
    const firstChild = SoundButton.firstElementChild;
    const secondChild = SoundButton.lastElementChild;
    switchOnClass(firstChild);
    switchOnClass(secondChild);
    if (get('sound')) {
      soundOff();
    } else {
      soundOn();
    }
  }
}

export function HandleOpenModalEvent() {
  const modal = document.querySelector('dialog');
  modal.showModal();
}

export function HandleCloseModalEvent() {
  const modal = document.querySelector('dialog');
  modal.close();
}