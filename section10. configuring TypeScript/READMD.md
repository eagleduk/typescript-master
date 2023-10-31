tsc `?target` : 해당 파일 또는 폴더를 한번만 컴파일 한다.
tsc( -w | --watch) `?target` : 해당 파일 또는 폴더 내에 있는 파일이 변경되면 자동으로 컴파일 한다.

[files](https://www.typescriptlang.org/tsconfig#files)
: Array. 컴파일 대상을 선택한다.

[include](https://www.typescriptlang.org/tsconfig#include)
: Array. 컴파일 대상을 선택한다. 직접 입력 또는 패턴입력으로 가능하다.

[exclude](https://www.typescriptlang.org/tsconfig#exclude)
: Array. 컴파일 제외 대상을 선택한다. 직접 입력 또는 패턴입력으로 가능하다.
: 기본값으로 `node_modules` 가 포함된다.
: exclude 옵션을 사용했다면, `node_modules` 도 다시 추가 해야 한다.

[outDir](https://www.typescriptlang.org/tsconfig#outDir)
: 컴파일된 파일을 내보내는 위치

[target](https://www.typescriptlang.org/tsconfig#target)
: 컴파일 결과에 대한 ES 버전

[strict](https://www.typescriptlang.org/tsconfig#strict)
: 타입 검사를 엄격하게 수행 또는 비수행

allowJS : TypeScript 프로그램 일부에 JavaScript 파일을 사용할 수 있게 된다.
checkJS : TypeScript 가 오류를 보고할 수 있다.
sourceMap : TypeScript 에 소스맵의 생성 여부 지시
noEmit : 타입검사는 계속 하면서 파일을 컴파일 하지 않는다.
noEmitOnError : 컴파일 도중 에러가 발생하면 새로운 파일(JS)을 만들지 않는다.
