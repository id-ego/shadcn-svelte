---
title: shadcn-svelte
description: shadcn-svelte CLI를 사용하여 프로젝트에 컴포넌트를 추가하세요.
---

<script>
	import PMExecute from "$lib/components/pm-execute.svelte";
</script>

## init

새 프로젝트의 의존성을 초기화하려면 `init` 명령을 사용하세요.

`init` 명령은 의존성을 설치하고, `cn` 유틸리티를 추가하며, 프로젝트에 필요한 CSS 변수를 생성합니다.

<PMExecute command="shadcn-svelte@latest init" />

`components.json`을 설정하기 위한 몇 가지 질문이 표시됩니다:

```txt showLineNumbers
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/routes/layout.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

**옵션**

```bash
Usage: shadcn-svelte init [options]

initialize your project and install dependencies

Options:
  -c, --cwd <path>           the working directory (default: the current directory)
  -o, --overwrite            overwrite existing files (default: false)
  --no-deps                  disable adding & installing dependencies
  --skip-preflight           ignore preflight checks and continue (default: false)
  --base-color <name>        the base color for the components (choices: "slate", "gray", "zinc",
                             "neutral", "stone")
  --css <path>               path to the global CSS file
  --components-alias <path>  import alias for components
  --lib-alias <path>         import alias for lib
  --utils-alias <path>       import alias for utils
  --hooks-alias <path>       import alias for hooks
  --ui-alias <path>          import alias for ui
  --proxy <proxy>            fetch items from registry using a proxy
  -h, --help                 display help for command
```

---

## add

프로젝트에 컴포넌트와 의존성을 추가하려면 `add` 명령을 사용하세요.

<PMExecute command="shadcn-svelte@latest add [component]" />

**옵션**

```bash
Usage: shadcn-svelte add [options] [components...]

add components to your project

Arguments:
  components         the components to add or a url to the component

Options:
  -c, --cwd <path>   the working directory (default: the current directory)
  --no-deps         skips adding & installing package dependencies
  --skip-preflight  ignore preflight checks and continue (default: false)
  -a, --all         install all components to your project (default: false)
  -y, --yes         skip confirmation prompt (default: false)
  -o, --overwrite   overwrite existing files (default: false)
  --proxy <proxy>   fetch components from registry using a proxy
  -h, --help        display help for command
```

---

## registry build

레지스트리 JSON 파일을 생성하려면 `registry build` 명령을 사용하세요.

<PMExecute command="shadcn-svelte@latest registry build [registry.json]" />

이 명령은 `registry.json` 파일을 읽어 레지스트리 JSON 파일들을 `static/r` 디렉토리에 생성합니다.

**옵션**

```bash
Usage: shadcn-svelte registry build [options] [registry]

build components for a shadcn-svelte registry

Arguments:
  registry             path to registry.json file (default: ./registry.json)

Options:
  -c, --cwd <path>     the working directory (default: the current directory)
  -o, --output <path>  destination directory for json files (default: ./static/r)
  -h, --help           display help for command
```

---

## 외부 요청

### 프록시

`shadcn-svelte` 레지스트리에서 가져올 때 프록시를 사용할 수 있습니다. `HTTP_PROXY` 또는 `http_proxy` 환경 변수가 설정되어 있으면, 하위 요청 라이브러리가 프록시 설정을 준수합니다.

```bash
HTTP_PROXY="<proxy-url>" npx shadcn-svelte@latest init
```
