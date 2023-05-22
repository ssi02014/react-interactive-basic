# 💻 react-interactive-basic

## Mouse Basic

### client, offset, page, screen 차이

![다운로드](https://user-images.githubusercontent.com/64779472/236664447-d834ddb6-309d-4539-91de-0c01e96a5711.png)

<br />

### 부드러운 움직임을 위한 requestAnimationFrame

- requestAnimationFrame은 브라우저가 제공하는 API 중 하나로, 웹 애니메이션을 부드럽게 처리하기 위해 사용됩니다. 이 함수를 호출하면, 브라우저는 다음 repaint 이전에 requestAnimationFrame에 넘겨준 콜백 함수를 실행한다.
  - 참고로 요즘 모던 웹 브라우저는 보통 `1초당 60회 정도의 리페인트를 실행한다.`
  - 그리고 사람은 `1초에 60개의 프레임`을 볼 수 있다고 한다. 그 이상의 프레임을 더 찍어내더라도 사람이 느끼기엔 거의 차이가 없다는 말이다. 그래서 자바스크립트로 애니메이션을 구현할때도 1초에 60프레임정도를 찍어내면 된다. 그 말은, 1프레임을 찍어내는데 `16.6ms(1000ms / 60frame)`를 넘겨서는 안된다는 말이다.
- requestAnimationFrame을 사용하면, 브라우저의 repaint 주기에 맞춰 애니메이션을 업데이트할 수 있다.
- requestAnimationFrame 함수는 콜백 함수를 호출하기 전에 `requestId`라는 숫자 값을 반환합니다. 이 값은 `cancelAnimationFrame` 함수를 호출할 때 사용된다.
- cancelAnimationFrame 함수를 호출하면, requestAnimationFrame 함수가 반환한 `requestId`에 해당하는 콜백 함수를 실행하지 않고 취소합니다. 이 함수를 사용하여, 더 이상 필요하지 않은 애니메이션을 중지할 수 있다.
- 아래 예제는 아주 기본적인 사용법이며, requestAnimationFrame는 `재귀 함수`처럼 사용된다.

<br />

```tsx
// 리액트에서 아주 기본적인 예
const requestRef = useRef<number | null>(null);

useEffect(() => {
  const update = () => {
    /* ... */
    requestRef.current = requestAnimationFrame(update); // 재귀처럼 사용
  };

  requestRef.current = requestAnimationFrame(update);

  return () => {
    // 애니메이션 중지
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
  };
}, []);
```

<br />

### setInterval보다 requestAnimationFrame이 더 좋은 이유

- 브라우저가 repaint 이전에 애니메이션 코드를 실행시킴으로써 애니메이션이 더 부드럽게 동작한다.
- setInterval이나 setTimeout은 `프레임을 신경쓰지 않고 동작한다.` 인자로 주어진 정확한 시간 간격마다 코드를 실행하므로, 프레임과 동기화되지 않을 수 있고, 따라서 애니메이션의 부드러움을 보장하지 않을 수 있다.
  - 만약에 애니메이션 코드가 엄청 복잡해서 실행하는데 `50ms`가 걸린다고 해보자. 그럼 16.6ms동안 프레임을 찍어내지 못했기 때문에 화면이 뚝뚝 끊기는듯한 현상이 발생한다.

<br />

### 애니메이션 left, top과 같은 속성보다 transform(translate[3d]) 속성 활용하는 것이 좋음

- 왜? transform과 translate의 장점은 `GPU 가속`을 통해 하드웨어 가속을 받을 수 있어 성능 면에서 이점이 있다.
- transform을 사용하면 레이아웃을 다시 계산할 필요가 없다 즉, `reflow`를 방지해 웹 성능 개선에 도움이 될 수 있습니다.

<br />
