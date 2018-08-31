export default interface IObservable<T> {
  emit: (event: T) => void,
  subscribe: (callback: (data: T) => void) => number,
  unsubscribe: (subscribtionId: number) => void,
}
