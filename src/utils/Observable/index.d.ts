export default interface IObservable<T> {
  emit: (event: T) => void,
  subscribe: (event: T) => void,
}
