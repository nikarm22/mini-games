// Utils
import { uniqueIdGenerator } from '../../utils/index';

export default class Observable<T> {
  private observers: { [key: string]: (data: T) => void } = {};

  public emit(data: T) {
    Object.values(this.observers).forEach(callback => callback(data));
  }

  public subscribe(callback: (data: T) => void) {
    const subscribtionId = uniqueIdGenerator();
    this.observers[subscribtionId] = callback;
    return subscribtionId;
  }

  public unsubscribe(subscribtionId: number) {
    delete this.observers[subscribtionId];
  }
}
