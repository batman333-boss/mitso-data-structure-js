export default class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Добавляет элемент на вершину стека
   * @param {*} element
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * Удаляет и возвращает верхний элемент стека
   * @return {*}
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Возвращает верхний элемент, не удаляя его
   * @return {*}
   */
  peek() {
    return this.items[this.items.length - 1];
  }
}

