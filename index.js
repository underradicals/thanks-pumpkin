import { HandlePushButtonEvent, HandlePopButtonEvent, HandlePeekButtonEvent, HandleMuteButtonEvent, HandleButtonGroupClick, HandleOpenModalEvent, HandleCloseModalEvent } from './scripts/events.js';
import { PushButton, PopButton, PeekButton, Stack, StackPeek, StackSize, PushAudio, PopAudio, PeekAudio, SoundButton, ButtonGroup, InformationIcon, CloseModalButton } from './scripts/elements.js';



addEventListener('DOMContentLoaded', () => {
  function Initialize(PushButton, PopButton, PeekButton, SoundButton) {
    ButtonGroup.addEventListener('click', HandleButtonGroupClick(PushButton, PopButton, PeekButton, SoundButton));
    PushButton.addEventListener('push', HandlePushButtonEvent(PushButton, StackSize, Stack, PushAudio));
    PopButton.addEventListener('pop', HandlePopButtonEvent(PopButton, StackSize, Stack, PopAudio));
    PeekButton.addEventListener('peek', HandlePeekButtonEvent(Stack, StackPeek, PeekAudio));
    SoundButton.addEventListener('mute', HandleMuteButtonEvent(SoundButton));
    InformationIcon.addEventListener('click', HandleOpenModalEvent);
    CloseModalButton.addEventListener('click', HandleCloseModalEvent);
  }

  Initialize(PushButton, PopButton, PeekButton, SoundButton);
});

