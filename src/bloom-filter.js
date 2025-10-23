export default class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.store = this.createStore(size);
  }

  
  createStore(size) {
    const data = new Array(size).fill(0);

    return {
      getValue(index) {
        return data[index];
      },
      setValue(index, value) {
        data[index] = value;
      },
    };
  }

  // Первая хеш-функция
  hash1(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash + str.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  // Вторая хеш-функция
  hash2(str) {
    let hash = 1;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 17 + str.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Третья хеш-функция
  hash3(str) {
    let hash = 7;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 13 + str.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Получает массив из 3 хеш-значений
  getHashValues(str) {
    return [this.hash1(str), this.hash2(str), this.hash3(str)];
  }

  // Добавляет элемент в фильтр
  insert(str) {
    const values = this.getHashValues(str);
    values.forEach((v) => this.store.setValue(v, 1));
  }

  // Проверяет, возможно ли наличие элемента
  mayContain(str) {
    const values = this.getHashValues(str);
    return values.every((v) => this.store.getValue(v) === 1);
  }
}
