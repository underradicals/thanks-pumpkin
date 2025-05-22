import { select, getById } from './helpers.js';

export const Stack = select('.stack');
export const StackSize = select('.stack-size');
export const StackPeek = select('.stack-top');
export const ButtonGroup = select('.button-group');
export const PushButton = select('.btn.push');
export const PopButton = select('.btn.pop');
export const PeekButton = select('.btn.peek');
export const PushAudio = getById('push-sound');
export const PopAudio = getById('pop-sound');
export const PeekAudio = getById('peek-sound');
export const SoundButton = select('.audio-btn');
export const InformationIcon = select('.info-icon-container');
export const CloseModalButton = select('.close-button');