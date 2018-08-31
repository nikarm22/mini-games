export enum EventTypes {
  MOUSE,
  KEYBOARD,
  GENERAL,
}

export enum MouseEventTypes {
  LEFT_DOWN,
  LEFT_UP,
  RIGHT_DOWN,
  RIGHT_UP,
  MOVE,
}

export enum KeyboardEventTypes {
  DOWN,
  UP,
}

export interface AbstractEvent {
  type: EventTypes,
  subType: string,
  payload: any,
}

export class AbstractMouseEvent extends AbstractEvent {
  constructor (subType: MouseEventTypes, x: number, y: number) {
    this.type = MOUSE;
    this.subType = subType;
    this.payload = { x, y };
  }
}

export class AbstractKeyboardEvent extends AbstractEvent {
  constructor (subType: KeyboardEventTypes, key: string) {
    this.type = KEYBOARD;
    this.subType = subType;
    this.payload = { key };
  }
}
