# Changelog

## 3.1.0 (2025-07-24)

Full Changelog: [v3.0.3...v3.1.0](https://github.com/bem-team/bem-sdk-typescript/compare/v3.0.3...v3.1.0)

### Features

* **client:** add support for endpoint-specific base URLs ([990a58a](https://github.com/bem-team/bem-sdk-typescript/commit/990a58a19806153e7bee48bfca5dd16614770faf))
* **mcp:** fallback for void-typed methods ([137ebf4](https://github.com/bem-team/bem-sdk-typescript/commit/137ebf429194594738c859619ba52fd48e19895d))
* **mcp:** implement support for binary responses ([ba97acb](https://github.com/bem-team/bem-sdk-typescript/commit/ba97acb06e2713f03cf425adbdec8c2d467cde09))
* **mcp:** set X-Stainless-MCP header ([74f3001](https://github.com/bem-team/bem-sdk-typescript/commit/74f3001bf00ecbf8a046d5896759c6fdbb2eeae5))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([514da01](https://github.com/bem-team/bem-sdk-typescript/commit/514da01a63ce02ade84809aaa6fa52ce01eebad7))
* **client:** explicitly copy fetch in withOptions ([19f64e0](https://github.com/bem-team/bem-sdk-typescript/commit/19f64e0d00cdab5a011a5b9661a9d522bd48d63a))
* **client:** get fetchOptions type more reliably ([1a83516](https://github.com/bem-team/bem-sdk-typescript/commit/1a8351630995d927003ab462572ea41e261498f1))
* **mcp:** include required section for top-level properties and support naming transformations ([406e70f](https://github.com/bem-team/bem-sdk-typescript/commit/406e70f5fb9790c8803f63c28fea0b2053c720d3))
* **mcp:** support jq filtering on cloudflare workers ([ae815f5](https://github.com/bem-team/bem-sdk-typescript/commit/ae815f51725609d625a2ef668a58bb2374a036cf))
* publish script — handle NPM errors correctly ([43797b4](https://github.com/bem-team/bem-sdk-typescript/commit/43797b41782573645d854dfe22b8a1957c1263b1))


### Chores

* add docs to RequestOptions type ([94e532b](https://github.com/bem-team/bem-sdk-typescript/commit/94e532b3f6218f77fd42f109c88e475e03220309))
* adjust eslint.config.mjs ignore pattern ([8700d02](https://github.com/bem-team/bem-sdk-typescript/commit/8700d022d05d840db8b003a864c333343939e46a))
* avoid type error in certain environments ([5f8bddd](https://github.com/bem-team/bem-sdk-typescript/commit/5f8bdddb34f845a98e1e9a460241245f63f25edc))
* **ci:** enable for pull requests ([ca5e404](https://github.com/bem-team/bem-sdk-typescript/commit/ca5e404efea17bf331b3751a8485fe4d8177cbf8))
* **ci:** only run for pushes and fork pull requests ([be2e183](https://github.com/bem-team/bem-sdk-typescript/commit/be2e183fc980a761be903cd512359b6a4866d25b))
* **client:** improve path param validation ([f23e59e](https://github.com/bem-team/bem-sdk-typescript/commit/f23e59eec3b837243dca77559c1015adc78678a1))
* **client:** refactor imports ([769e531](https://github.com/bem-team/bem-sdk-typescript/commit/769e531f14f3c98d49d33763f2563b91895dca60))
* **deps:** bump eslint-plugin-prettier ([3060078](https://github.com/bem-team/bem-sdk-typescript/commit/306007808ac2f09cfdac8a26d90a87946aed3a92))
* **docs:** use top-level-await in example snippets ([c75950f](https://github.com/bem-team/bem-sdk-typescript/commit/c75950f9ac5b04c924d328e62ca7ccdcd82afadb))
* **internal:** add pure annotations, make base APIResource abstract ([f36d1bd](https://github.com/bem-team/bem-sdk-typescript/commit/f36d1bd3588215bf46d08af1631ffd8f91b6df51))
* **internal:** codegen related update ([9031cf2](https://github.com/bem-team/bem-sdk-typescript/commit/9031cf2737b28d90c395018d46f65d597aca511f))
* **internal:** codegen related update ([d9f35e7](https://github.com/bem-team/bem-sdk-typescript/commit/d9f35e7377630b2b29dceada577460d96cf60474))
* **internal:** fix readablestream types in node 20 ([47f329a](https://github.com/bem-team/bem-sdk-typescript/commit/47f329a08efb4ff0aba2793e46f0f90efc4726b9))
* **internal:** update jest config ([e886a12](https://github.com/bem-team/bem-sdk-typescript/commit/e886a124e6568acf298673cacb6494498d243c19))
* make some internal functions async ([8a5c33f](https://github.com/bem-team/bem-sdk-typescript/commit/8a5c33fe492439545d297216cf8a7da4cef6620d))
* **mcp:** formatting ([a1a51bc](https://github.com/bem-team/bem-sdk-typescript/commit/a1a51bc76ea6a7d0a98c7f4dd9b846367e7db6a2))
* **mcp:** provides high-level initMcpServer function and exports known clients ([083831f](https://github.com/bem-team/bem-sdk-typescript/commit/083831f26d93b6309749a68286f3b689c2a9f466))
* **mcp:** rework imports in tools ([0813f4f](https://github.com/bem-team/bem-sdk-typescript/commit/0813f4fe6a48d5929d4322f74388d7e23efd106e))
* **readme:** update badges ([ce7ad43](https://github.com/bem-team/bem-sdk-typescript/commit/ce7ad43298026691d56e0ebb7ae9231989666751))
* **readme:** use better example snippet for undocumented params ([af9aa8b](https://github.com/bem-team/bem-sdk-typescript/commit/af9aa8bfd5dd5bde8e71b1a2b7ec75ea4384b990))
* **ts:** reorder package.json imports ([be2c977](https://github.com/bem-team/bem-sdk-typescript/commit/be2c977336615aef61cf98c8ece3d4cd27411766))

## 3.0.3 (2025-05-30)

Full Changelog: [v3.0.2...v3.0.3](https://github.com/bem-team/bem-sdk-typescript/compare/v3.0.2...v3.0.3)

### Bug Fixes

* compat with more runtimes ([04a4f21](https://github.com/bem-team/bem-sdk-typescript/commit/04a4f21f416d5d2e9356ed363c6c11ba145c1cfc))

## 3.0.2 (2025-05-29)

Full Changelog: [v3.0.1...v3.0.2](https://github.com/bem-team/bem-sdk-typescript/compare/v3.0.1...v3.0.2)

### Chores

* configure new SDK language ([7e479a6](https://github.com/bem-team/bem-sdk-typescript/commit/7e479a68c18d10d3b2acbf0590d32b51af04d6e7))

## 3.0.1 (2025-05-29)

Full Changelog: [v3.0.0...v3.0.1](https://github.com/bem-team/bem-sdk-typescript/compare/v3.0.0...v3.0.1)

### Chores

* update SDK settings ([db15c40](https://github.com/bem-team/bem-sdk-typescript/commit/db15c404b69081398614e77dde66f214de70f34d))

## 3.0.0 (2025-05-29)

Full Changelog: [v0.1.0-alpha.1...v3.0.0](https://github.com/bem-team/bem-sdk-typescript/compare/v0.1.0-alpha.1...v3.0.0)

### Features

* **api:** update via SDK Studio ([50b81a7](https://github.com/bem-team/bem-sdk-typescript/commit/50b81a78a2c9979a549d24facb7f13755417855a))
* **api:** update via SDK Studio ([76289a6](https://github.com/bem-team/bem-sdk-typescript/commit/76289a64332a46a07cad991d4b856c54d24d1512))
* **api:** update via SDK Studio ([6772dcc](https://github.com/bem-team/bem-sdk-typescript/commit/6772dcc21b7d5fcd360a8ee718467161fda10937))
* **api:** update via SDK Studio ([63ea24e](https://github.com/bem-team/bem-sdk-typescript/commit/63ea24e1bbfccd44307566223a4b4a3a3fbe4ffe))


### Chores

* update SDK settings ([0bce9d1](https://github.com/bem-team/bem-sdk-typescript/commit/0bce9d1566e10eaff197318164687e451e35ac6e))

## 0.1.0-alpha.1 (2025-05-29)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/bem-team/bem-sdk-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([811605d](https://github.com/bem-team/bem-sdk-typescript/commit/811605d039a6c276e79bde427badd2ccab80e2c9))
* **api:** update via SDK Studio ([8a02ade](https://github.com/bem-team/bem-sdk-typescript/commit/8a02adef93183a0d63cb52059f35b97d5a75f760))
* **api:** update via SDK Studio ([0045653](https://github.com/bem-team/bem-sdk-typescript/commit/0045653c1f22e4d84ff8a29c2902f888557113a0))


### Chores

* update SDK settings ([4b8ba28](https://github.com/bem-team/bem-sdk-typescript/commit/4b8ba284dee461b6e7ac52afa200b61568b2c23e))
