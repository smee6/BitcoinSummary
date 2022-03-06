# BitcoinSummary - coinMonitor (가제/작업중)

(Demo): https://smee6.github.io/BitcoinSummary/

자바스크립트를 본격적으로 공부하고 처음 만들어 보는 개인 프로젝트.

Key 없는 Api들을 이용해서 코인 가격 시세와 주식정보를 한번에 볼 수 있는 사이트를 구현.

"그냥 하나 켜두면 그럴듯 한" 사이트를 만드는게 목표. 카페에서 개발하다가 이 사이트 켜두고 가면

"오~ 저 사람 슈퍼컴퓨터디도스간첩해커인가봐~~ 정말 무섭다" 할만한 클리쉐 가득한 디자인/컬러셋 사용.

<이 사이트의 용도>

1. 내 잔고 확인하면서 스트레스 안받고 그냥 컴팩트하게 내가 궁금한 시세들 한번에 확인

2. 개발할때 옆에 켜놓으면 그럴듯 해 보임

<수정사항>

2022.3.6 중복코드는 함수로 묶어주기

2022.3.4 레이아웃 확정 => 로직들은 일단 돌아갈수 있게만 하드코딩 / skeleton box들 대충 추가해줌

2022.3.2 레이아웃,css 얼추끝냄


<필수적으로 추가할 것>

1. 서버에서 Api 못받아오거나 할 때 쿠키에 저장되어있는 숫자로 표시해줌

2. 중복 코드 함수화

<해야할 것, 위에 있는 것 보다는 덜 급함>

1. 분석,뉴스피드 탭 추가

2. DB 추가

3. 재미있는 움직임

4. 차트 추가

5. 로그인 기능 추가

6. 리드미

7. css,레이아웃 수정

8. 코드 리팩토링



<좀 천천히 할 일>

1. 웹소켓을 써봐야 해. 너무 15초마다 깜빡거려서 옛날 사이트 같음

2. 좀더 지저분하게 꽉 채웠으면 좋겠음 . 의도적으로 좀 조잡한 디자인을 원해



![image](https://user-images.githubusercontent.com/65226760/156519567-60689d8b-5bd1-4297-afb8-1d3dab6dd926.png)


1. 업비트와 해외거래소 Api를 실시간으로 받아와서 클라이언트에서 간단한 수식을 사용해서 index지수나 특정 지표들을 계산하여 보여줌.

2. VanillaJS만 이용해서 제작

3. 실제로 본인이 필요한 서비스를 간단하게 구현하는 것이 목표.

4. CSS flex를 이용해 반응형으로 제작.
