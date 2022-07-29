---
title: 프로젝트 캄브리아 - Quest Pro 유출
date: 2022-07-29 22:29:49 +0900
categories: [디바이스, VR]
tags: [Meta, Project Cambria, Quest Pro]
---
원본 기사 : [Project Cambria: Meta Quest Pro launch date, pricing, specifications and CAD renders surface](https://www.notebookcheck.net/Project-Cambria-Meta-Quest-Pro-launch-date-pricing-specifications-and-CAD-renders-surface.637049.0.html)  
[https://sadlyinreality.com/](https://sadlyinreality.com/)  
이 글은 원문의 기사를 번역하고, 필자의 의견을 덧붙여서 작성되었습니다. -- 수정중..

# 프로젝트 캄브리아

[Brad Lynch](https://sadlyinreality.com/)는 Meta의 차세대 VR 헤드셋의 코드명인 [프로젝트 캄브리아](https://it.donga.com/102183/)에 대한 자신의 '최종 분석'을 제공했습니다. 각종 메체에서  출사가는 &#36;1,000 ~ &#36;1,500 정도로 예상되며, 컨트롤러는 &#36;300정도에 충전기를 포함하여 따로 번들로 판메되어 Quest 2와 호환될것으로 보입니다. 하지만[Brad Lynch](https://sadlyinreality.com/)는 드라이버 문제로 
Quest 2와의 호환은 어려워 보인다고 주장합니다.

소문에 따르면 2021은 10월 28일에 [Meta Connect](https://meta-connect.io/)에서 Quest Pro와 컨트롤러를 공개할 예정입니다. 10월 25일에 정식 출시된다고 합니다.

# 스펙

## Meta Quest Pro 해드셋
- Qualcomm Snapdragon XR2 5G SoC
- 12 GB LPDDR5 RAM
- 256 GB storage
- Dual Tianjin-3 QLED panels
    - 2,160 x 2,160 per eye (1,800 x 1,920 rendered per eye)
    - 향상된 색영역을 위한 [Quantum Dot layer](https://www.samsungdisplay.com/kor/tech/quantum-dot.jsp)
    - [local dimming](https://news.lgdisplay.com/kr/2016/01/local-dimming/) 을 위한 MiniLED 백라이트 (점광원 백라이트)
    - FoV 향상을 위한 21도 꺾인 배치 [Counter-rotated Display]({{page.url}}#counter-rotated-display)
    - 커스텀 펜케이크 렌즈
- 10 개의 센서와 Mixed Reality를 위한 IR Depth Projector
- (2) "Canyon" – 640 x 480 (IOT, 위치트레킹, 핸드트레킹)
- (2) "Glacier" – 1,280 x 1,024 (Depth, 패스스루, 위치트레킹, 핸드트레킹)
- (1) “Teton” – 2,328 x 1,748 (16 MP RGB 패스스루 오버레이)
- (5) “Esker” – 400 x 400 (페이셜트레킹, 아이트레킹)
- WiFi 6E 호환
- 향상된 공간 오디오
- 5,000 mAh 리튬이온 배터리 (충전도커 이용)

## Quest Pro 컨트롤러(코드명 Starlet)

- Qualcomm 662 SoC
- 독립형 6 DoF 추적을 위한 3개의 IR 카메라
- 비분리형 3,200mAh 배터리
- HD 햅틱(핸들당 여러 액추에이터)
- 압력 센서

# Meta Quest Pro 해드셋

## 페이셜트레킹, 아이트레킹

유출된 CAD파일과 각 센서들의 위치를 찾아보았습니다.

아이트래킹 시스템의 경우 모든 센서와 IR LED는 아이컵에 존제합니다.

> ![Esker-eye.png]()

페이셜트레킹시스템의 경우 모든 센서와 IR LED는 HMD 하우징 아래의 노즈 갭 옆과 양쪽 렌즈 중앙의 근접센서 근처에 있습니다.

|  |  |
|--|--|
| ![Esker-face1.png]() | ![Esker-face2.png]() |

## Counter-rotated Display

디스플레이를 아래의 사진처럼 꺾인 배치하게 될 경우 일반적인 배치에 비하여 더 높은 FOV를 얻을 수 있게 되며, 노즈 갭을 더 여유롭게 가질 수 있어서 인체공학적으로 설계가 가능해집니다. 또한 슈퍼 샘플링/앤티 앨리어싱과 같은 후처리 과정에서의 아티팩트를 숨길수 있습니다.

> ![미국 특허 11343486](https://sadlyinreality.com/wp-content/uploads/2022/07/image-1.png)
> 미국 특허 11343486(Valve Corporation 제출)

## VR 에어브릿지

[VR 에어브릿지](https://twitter.com/SadlyItsBradley/status/1516793140916723722?s=20&t=ljaGZ6KlQPZpDmN6hwmcqA)가 적용될 예정으로 예상되며, 기존의 공유기를 이용한 에어링크와 달리, USB동글형테로 무선연결을 구현해, 기존 에어링크 설정 시, 생기는 여러 문제점이 해결될 것으로 보입니다.

# Starlet 컨트롤러

|  |  |
|--|--|
| ![Starlet](https://sadlyinreality.com/wp-content/uploads/2022/07/D5F55E14-CDEA-4239-BE4A-C02E0899AAF9_1_102_o-1024x699.jpeg) | ![Starlet배터리](https://sadlyinreality.com/wp-content/uploads/2022/07/image-9.png) |

Starlet 컨트롤러는 IR카메라를 이용해서 공간추적을 하기 때문에 Snapdragon 662와 같은 온보드 SoC가 탑제 되있어 기존의 AA 배터리로는 감당이 불가능해 도킹 충전식 3200mAh 배터리를 사용합니다.  
컨트롤러 측면에서 도커충전기를 위한 3개의 접점을 볼 수 있습니다.

> ![도크](https://sadlyinreality.com/wp-content/uploads/2022/07/image-7-1024x613.png)

여러 햅틱 컨트롤러로 고품질 햅틱을 구현합니다.

- 반응성 진동을 위한 메인 트리거 내부에 LRA 액추에이터
- 핀칭 피드백을 위한 엄지 받침대 아래에 LRA 액추에이터
- 배터리 근처 핸들에 있는 하나의 VCM 액추에이터(고품질 진동 햅틱

> ![액추에이터](https://sadlyinreality.com/wp-content/uploads/2022/07/image-8-1024x787.png)
> 메인 트리거 내의 LRA 액추에이터 및 위치/힘 센서

Cambria 컨트롤러에는 핸들 바닥에 센서 "혼합 현실 또는 VR의 책상에 그리기"와 관련이 있다고 추측했습니다.

> ![압력센서](https://sadlyinreality.com/wp-content/uploads/2022/07/image-6.png)
> Starlet 바닥에 압력 센서가 있습니다.

[The Final Meta Quest Pro Analysis](https://sadlyinreality.com/the-final-meta-quest-pro-analysis/)