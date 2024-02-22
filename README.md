# @types/sssh
SSSH 프로젝트들의 타입을 관리하는 프로젝트입니다.

# 네이밍 룰
- Type : T+name
- InterFace : I+name
- Enum : name + Enum
- 추가로 Dto에서 사용할 Type, Interface는 T(or I)+name+Dto

추후 네이밍 룰이 추가 될 수 있습니다.

# 관련 내용
- Entity로 사용하는 경우 Interface로 선언하여 implements 하여 필드를 강제합니다.
- ERD나 TABLE 명세는 ./documents 디렉터리에 저장합니다.
  - ERD : ./documents/ERD/
  - TABLE : ./documents/TABLE/