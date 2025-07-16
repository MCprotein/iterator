반복자(iterator) 패턴 -> GoF의 객체지향 디자인 패턴 중 하나

map, filter, reduce, take, etc.: iterator helper function

지연 평가(lazy evaluation): 필요할 때마다 값을 하나씩 꺼냄

Generator: 반복자 패턴인 iterator를 명령형 코드로 구현하고 생성할 수 있는 도구
yield 키워드가 있는 지점까지 실행하고 값을 반환하고 일시 중지하는 과정을 반복

yield\*: generator function안에서 iterable을 순회하며 해당 iterable이 제공하는 요소들을 순차적으로 반환하도록 해준다.

iteration protocol: 자바스크립트의 규약

iterable: iterator를 반환하는 `[Symbol.iterator]() {return {next() {}}}` 메소드를 가진 객체

IterableIterator: Iterator이면서 동시에 Iterable인 값

꼬리 호출 최적화 (tail call optimization, TCO): 함수가 반환될 때 마지막으로 호출되는 함수가 재귀 호출이면 가능

- 다만, ES6 스펙에 포함된 꼬리 호출 최적화를 V8 엔진에서 지원하지 않아 스택 오버플로우의 위험이 있다.

현대 언어가 언어 레벨 설계에서 상속을 자제하고 인터페이스(혹은 프로토콜, 트레이트 등)를 적극적으로 활용한다.

반복자 패턴과 이터레이터를 지원하느 ㄴ헬퍼 함수들이 상속이 아닌 인터페이스로 설계된 이유

- 자바스트립트나 타입스크립트의 표준 라이브러리에서 Array를 상속받은 내장 클래스는 없다.
- Map, Set, NodeList 등의 자료구조들도ㅓ Array를 상속받지 않는다.
- 모두 다른 자료구조이며 각각 고유 특성과 동작을 갖도록 설계되었기 때문이다.
-
