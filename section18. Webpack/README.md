## Webpack 설정

1. entity : (string) 번들링을 시작 할 애플리케이션의 시작점 지저
2. module : (object) sass, js, css 파일이나 정적 에셋을 만났을 때의 규칙을 지정한다.

   - test: 규칙을 정하고자 하는 파일의 이름 및 확장자에 대한 정규식
   - use : 해당 파일에 대한 수행하고자 하는 규칙
   - exclude : 규칙 수행 중 제외하고자 하는 파일 | 폴더

3. resolve : Webpack 의 리졸브 할 수 있는 확장자의 리스트
4. output : 번들된 파일의 내보내기 위치 및 이름 지정
5. plugins : 번들 수행 시 사용하고자 하는 추가 기능을 정의
6. devtool : 개발 단계에서 번들링 이후 실제 웹 페이지에서 소스 및 디버깅을 수행할 수 있도록 정의
   - tsconfig 에서 sourceMap 옵션을 활성화 해주어야 한다.

#### Webpack-dev-server

실제로 번들링을 하지 않고 메모리상에 번들링을 한다.
개발 단계에서 주로 사용.
HTTP 서버와 번들링을 합친 package.
Webpack.config.js output 설정에서 번들링 될 위치를 추가해주어야 한다.
