<!-- TOC -->

- [1. Mat.zip](#1-matzip)
  - [1.1. Service scenario](#11-service-scenario)
  - [1.2. Architecture](#12-architecture)
  - [1.3. Built by node express generator](#13-built-by-node-express-generator)

<!-- /TOC -->
# 1. Mat.zip

> 한국의 Matzip(맛집)을 찾아서

## 1.1. Service scenario

1. 맵 좌표(위치) 조회

2. 음식점 조회(카테고리로)

   - 맵의 위치(혹은 영역) 기반 음식점 조회
   - 좌표의 음식점 힘들고, 최초 좌표에 지역구 abstraction, 지역구의 음식점을 조회

3. 음식점(Keyword) 음식점 갯수를 한정

   - 별점 기준으로 Sorting 음식점 n개만 가져온다(기준은 가능한 api로 변경될 수 있고)

4. 음식점(Keyword) 기반 instagram crawling(기간을 한정) 을 한다.

   - 음식점 이름이 해시태그인 글의 갯수 처리 (hot place 점수)

5. 음식점(hot place 점수 포함)의  맵에 표시

   - 전체 보여준다 or 하이랭크 음식점만 보여준다
   - 음식점 클릭 시나리오 - 별점 리뷰/최근 instagram 글

6. enhance 음식점 점수 저장(캐쉬), 반응성을 빠르게

## 1.2. Architecture
![image](https://user-images.githubusercontent.com/29352783/113153835-6dbd9480-9272-11eb-9e55-afbf72d7728a.png)

## 1.3. Built by node express generator
```
$ express --view=pug Mat.zip
```

## 참고
convert from html to jade : https://html2jade.org/
naver map api marker example : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=lsw3210&logNo=221993983515
https://navermaps.github.io/maps.js.ncp/docs/tutorial-infowindow-options.example.html