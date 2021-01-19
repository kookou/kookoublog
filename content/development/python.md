---
title: "python pandas 기초"
metaTitle: "python pandas 기초"
metaDescription: "python pandas 기초"
---
#### python pandas 기초

|옵션|default|설명|
|------|---|---|
|sep|’,’|자료의 구분 기준을 설정|
|header|‘infer’|첫행을 열이름으로 쓸 것인지|
|names|-|열이름을 리스트로 입력해 줄 수있다. (header=None으로 자동 설정)|
|index_col|None|특정 열이름으로 인덱스를 지정|
|prefix|-|eader가 없는 경우, ‘V’를 넣으면, V0,V1순으로 열이름 부여|
|dtype|-|개별 열 또는 모든 열의 타입을 지정(e.g ‘str’, {‘a’: np.float64, ‘c’: ‘Int64’})|
|na_values|-|결측값으로 인식할 문자열 지정|
|keep_default_na|True|결측값(NaN)을 포함할지 여부 결정|
|na_filter|True|결측값 탐지|
|skip_blank_lines|True|빈줄은 결측값으로 판단하지 않고 건너뜀|
|encoding|-|참고|
|nrow|-|읽을 파일 행(row)의 수|
