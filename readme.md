반복자(iterator) 패턴 -> GoF의 객체지향 디자인 패턴 중 하나

map, filter, reduce, take, etc.: iterator helper function

지연 평가(lazy evaluation): 필요할 때마다 값을 하나씩 꺼냄

Generator: 반복자 패턴인 iterator를 명령형 코드로 구현하고 생성할 수 있는 도구
yield 키워드가 있는 지점까지 실행하고 값을 반환하고 일시 중지하는 과정을 반복

yield\*: generator function안에서 iterable을 순회하며 해당 iterable이 제공하는 요소들을 순차적으로 반환하도록 해준다.

iteration protocol: 자바스크립트의 규약

iterable: iterator를 반환하는 `[Symbol.iterator]() {return {next() {}}}` 메소드를 가진 객체

IterableIterator: Iterator이면서 동시에 Iterable인 값
