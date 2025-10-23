import { ListNode } from '../extensions/list-node.js';
export default class Queue {
  constructor() {
    this.head = null; // первый элемент (начало очереди)
    this.tail = null; // последний элемент (конец очереди)
  }

  /**
   * Возвращает базовый связанный список
   * @return {Object | null}
   */
  getUnderlyingList() {
    return this.head;
  }

  /**
   * Добавляет элемент в конец очереди
   * @param {*} value
   */
  enqueue(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  /**
   * Удаляет и возвращает элемент из начала очереди
   * @return {*}
   */
  dequeue() {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null; // если очередь опустела
    }

    return value;
  }
}
