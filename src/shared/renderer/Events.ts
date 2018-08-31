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
  subType: any, // defined in subClasses
  payload: object, // defined in subClasses
}

export class MouseEvent implements AbstractEvent {
  type: EventTypes;
  subType: MouseEventTypes;
  payload: {
    x: number,
    y: number,
  };

  constructor (subType: MouseEventTypes, x: number, y: number) {
    this.type = EventTypes.MOUSE;
    this.subType = subType;
    this.payload = { x, y };
  }
}

export class KeyboardEvent implements AbstractEvent {
  type: EventTypes;
  subType: KeyboardEventTypes;
  payload: { key: string };

  constructor (subType: KeyboardEventTypes, key: string) {
    this.type = EventTypes.KEYBOARD;
    this.subType = subType;
    this.payload = { key };
  }
}
