export default function removeKFromList(l, k) {
  // Удаляем все ведущие узлы, которые равны k
  while (l && l.value === k) {
    l = l.next;
  }

  // Если список стал пустым
  if (!l) return null;

  let current = l;

  // Проходим по списку
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next; // пропускаем узел
    } else {
      current = current.next; // переходим дальше
    }
  }

  return l;
}
