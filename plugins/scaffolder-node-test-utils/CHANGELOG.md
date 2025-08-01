# @backstage/plugin-scaffolder-node-test-utils

## 0.3.2-next.0

### Patch Changes

- 812485c: Add step info to scaffolder action context to access the step id and name.
- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.11.0-next.0
  - @backstage/backend-test-utils@1.7.1-next.0
  - @backstage/backend-plugin-api@1.4.2-next.0
  - @backstage/types@1.2.1

## 0.3.1

### Patch Changes

- dbde180: An internal refactor which adds additional types to experimental checkpoints
- Updated dependencies
  - @backstage/backend-test-utils@1.7.0
  - @backstage/plugin-scaffolder-node@0.10.0
  - @backstage/backend-plugin-api@1.4.1

## 0.3.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.10.0-next.2

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@1.4.1-next.0
  - @backstage/backend-test-utils@1.7.0-next.1
  - @backstage/plugin-scaffolder-node@0.9.1-next.1

## 0.3.1-next.0

### Patch Changes

- dbde180: An internal refactor which adds additional types to experimental checkpoints
- Updated dependencies
  - @backstage/backend-test-utils@1.7.0-next.0
  - @backstage/plugin-scaffolder-node@0.9.1-next.0
  - @backstage/backend-plugin-api@1.4.0
  - @backstage/types@1.2.1

## 0.3.0

### Minor Changes

- 3cea7ee: **BREAKING CHANGES**

  Because of the removal of the `logStream` property to the `ActionsContext` this has been removed from the `createMockActionContext` method.

  You can remove this as it's no longer supported in the scaffolder actions.

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.9.0
  - @backstage/backend-test-utils@1.6.0
  - @backstage/backend-plugin-api@1.4.0
  - @backstage/types@1.2.1

## 0.3.0-next.2

### Minor Changes

- 3cea7ee: **BREAKING CHANGES**

  Because of the removal of the `logStream` property to the `ActionsContext` this has been removed from the `createMockActionContext` method.

  You can remove this as it's no longer supported in the scaffolder actions.

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.9.0-next.2
  - @backstage/backend-test-utils@1.6.0-next.2
  - @backstage/backend-plugin-api@1.4.0-next.1
  - @backstage/types@1.2.1

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.3-next.1
  - @backstage/backend-plugin-api@1.4.0-next.1
  - @backstage/backend-test-utils@1.6.0-next.1
  - @backstage/types@1.2.1

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.3-next.0
  - @backstage/backend-test-utils@1.6.0-next.0
  - @backstage/backend-plugin-api@1.4.0-next.0

## 0.2.2

### Patch Changes

- b27c48d: Include optional `user` in `createMockActionContext`
- Updated dependencies
  - @backstage/backend-plugin-api@1.3.1
  - @backstage/backend-test-utils@1.5.0
  - @backstage/plugin-scaffolder-node@0.8.2
  - @backstage/types@1.2.1

## 0.2.2-next.3

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.2-next.3
  - @backstage/backend-plugin-api@1.3.1-next.2
  - @backstage/backend-test-utils@1.5.0-next.3
  - @backstage/types@1.2.1

## 0.2.2-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.2-next.2
  - @backstage/backend-test-utils@1.5.0-next.2
  - @backstage/backend-plugin-api@1.3.1-next.1
  - @backstage/types@1.2.1

## 0.2.2-next.1

### Patch Changes

- b27c48d: Include optional `user` in `createMockActionContext`
- Updated dependencies
  - @backstage/backend-plugin-api@1.3.1-next.1
  - @backstage/plugin-scaffolder-node@0.8.2-next.1
  - @backstage/backend-test-utils@1.5.0-next.1
  - @backstage/types@1.2.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.5.0-next.0
  - @backstage/plugin-scaffolder-node@0.8.2-next.0
  - @backstage/backend-plugin-api@1.3.1-next.0
  - @backstage/types@1.2.1

## 0.2.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.1
  - @backstage/backend-plugin-api@1.3.0
  - @backstage/backend-test-utils@1.4.0
  - @backstage/types@1.2.1

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@1.2.1
  - @backstage/backend-test-utils@1.3.2-next.2
  - @backstage/types@1.2.1
  - @backstage/plugin-scaffolder-node@0.8.1-next.1

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.1-next.1
  - @backstage/backend-test-utils@1.3.2-next.1
  - @backstage/backend-plugin-api@1.2.1
  - @backstage/types@1.2.1

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.1-next.0
  - @backstage/backend-test-utils@1.3.2-next.0
  - @backstage/backend-plugin-api@1.2.1
  - @backstage/types@1.2.1

## 0.2.0

### Minor Changes

- 36677bb: Use update `createTemplateAction` kinds

### Patch Changes

- 09cf038: Got rid of most `@backstage/backend-common` usages
- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.0
  - @backstage/backend-test-utils@1.3.1
  - @backstage/backend-plugin-api@1.2.1
  - @backstage/types@1.2.1

## 0.2.0-next.2

### Minor Changes

- 36677bb: Use update `createTemplateAction` kinds

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.8.0-next.2
  - @backstage/backend-test-utils@1.3.1-next.2
  - @backstage/backend-plugin-api@1.2.1-next.1
  - @backstage/types@1.2.1

## 0.1.20-next.1

### Patch Changes

- 09cf038: Got rid of most `@backstage/backend-common` usages
- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.7.1-next.1
  - @backstage/backend-plugin-api@1.2.1-next.1
  - @backstage/backend-test-utils@1.3.1-next.1
  - @backstage/types@1.2.1

## 0.1.20-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.3.1-next.0
  - @backstage/plugin-scaffolder-node@0.7.1-next.0

## 0.1.19

### Patch Changes

- 7ec0a5a: Changing the default behaviour of the checkpoint in createMockActionContext. It will reduce the code boilerplate in the tests where checkpoint is used.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.
- Updated dependencies
  - @backstage/backend-test-utils@1.3.0
  - @backstage/plugin-scaffolder-node@0.7.0
  - @backstage/types@1.2.1

## 0.1.19-next.3

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.3.0-next.3
  - @backstage/plugin-scaffolder-node@0.7.0-next.2
  - @backstage/types@1.2.1

## 0.1.19-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.3.0-next.2
  - @backstage/types@1.2.1
  - @backstage/plugin-scaffolder-node@0.7.0-next.1

## 0.1.19-next.1

### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.
- Updated dependencies
  - @backstage/backend-test-utils@1.3.0-next.1
  - @backstage/types@1.2.1
  - @backstage/plugin-scaffolder-node@0.7.0-next.0

## 0.1.19-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.3.0-next.0
  - @backstage/plugin-scaffolder-node@0.7.0-next.0
  - @backstage/types@1.2.1

## 0.1.18

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.6.3
  - @backstage/types@1.2.1
  - @backstage/backend-test-utils@1.2.1

## 0.1.18-next.1

### Patch Changes

- Updated dependencies
  - @backstage/types@1.2.1-next.0
  - @backstage/backend-test-utils@1.2.1-next.1
  - @backstage/plugin-scaffolder-node@0.6.3-next.1

## 0.1.18-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.6.3-next.0
  - @backstage/backend-test-utils@1.2.1-next.0
  - @backstage/types@1.2.0

## 0.1.17

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.2.0
  - @backstage/plugin-scaffolder-node@0.6.2
  - @backstage/types@1.2.0

## 0.1.17-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.2.0-next.2
  - @backstage/plugin-scaffolder-node@0.6.2-next.2
  - @backstage/types@1.2.0

## 0.1.17-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.6.2-next.1
  - @backstage/backend-test-utils@1.2.0-next.1
  - @backstage/types@1.2.0

## 0.1.16-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.2.0-next.0
  - @backstage/plugin-scaffolder-node@0.6.1-next.0
  - @backstage/types@1.2.0

## 0.1.15

### Patch Changes

- Updated dependencies
  - @backstage/types@1.2.0
  - @backstage/backend-test-utils@1.1.0
  - @backstage/plugin-scaffolder-node@0.6.0

## 0.1.15-next.3

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.1.0-next.3
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.5.1-next.3

## 0.1.15-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.1.0-next.2
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.5.1-next.2

## 0.1.15-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.0.3-next.1
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.5.1-next.1

## 0.1.15-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.0.3-next.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.5.1-next.0

## 0.1.13

### Patch Changes

- e969dc7: Move `@types/react` to a peer dependency.
- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @backstage/backend-test-utils@1.0.1
  - @backstage/plugin-scaffolder-node@0.5.0
  - @backstage/types@1.1.1

## 0.1.13-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@1.0.1-next.2
  - @backstage/plugin-scaffolder-node@0.5.0-next.2
  - @backstage/types@1.1.1

## 0.1.13-next.1

### Patch Changes

- e969dc7: Move `@types/react` to a peer dependency.
- Updated dependencies
  - @backstage/backend-test-utils@1.0.1-next.1
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.5.0-next.1

## 0.1.13-next.0

### Patch Changes

- 094eaa3: Remove references to in-repo backend-common
- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.5.0-next.0
  - @backstage/backend-test-utils@1.0.1-next.0
  - @backstage/types@1.1.1

## 0.1.12

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.25.0
  - @backstage/backend-test-utils@1.0.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.11

## 0.1.12-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.25.0-next.2
  - @backstage/backend-test-utils@1.0.0-next.2
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.11-next.2

## 0.1.12-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.25.0-next.1
  - @backstage/backend-test-utils@0.6.0-next.1
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.11-next.1

## 0.1.12-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.25.0-next.0
  - @backstage/backend-test-utils@0.6.0-next.0
  - @backstage/plugin-scaffolder-node@0.4.11-next.0
  - @backstage/types@1.1.1

## 0.1.10

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.24.0
  - @backstage/backend-test-utils@0.5.0
  - @backstage/plugin-scaffolder-node@0.4.9
  - @backstage/types@1.1.1

## 0.1.10-next.3

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.23.4-next.3
  - @backstage/backend-test-utils@0.4.5-next.3
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.9-next.3

## 0.1.10-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@0.4.5-next.2
  - @backstage/plugin-scaffolder-node@0.4.9-next.2
  - @backstage/backend-common@0.23.4-next.2
  - @backstage/types@1.1.1

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.23.4-next.1
  - @backstage/backend-test-utils@0.4.5-next.1
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.9-next.1

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.23.4-next.0
  - @backstage/backend-test-utils@0.4.5-next.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.9-next.0

## 0.1.9

### Patch Changes

- 54429b5: Filename and imports correction for mockActionContext.ts
- Updated dependencies
  - @backstage/backend-test-utils@0.4.4
  - @backstage/backend-common@0.23.3
  - @backstage/plugin-scaffolder-node@0.4.8
  - @backstage/types@1.1.1

## 0.1.9-next.1

### Patch Changes

- 54429b5: Filename and imports correction for mockActionContext.ts
- Updated dependencies
  - @backstage/backend-test-utils@0.4.4-next.1
  - @backstage/backend-common@0.23.3-next.1
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.8-next.1

## 0.1.8-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.23.2-next.0
  - @backstage/plugin-scaffolder-node@0.4.7-next.0
  - @backstage/backend-test-utils@0.4.3-next.0
  - @backstage/types@1.1.1

## 0.1.5

### Patch Changes

- 6a576dc: Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @backstage/backend-common@0.23.0
  - @backstage/backend-test-utils@0.4.0
  - @backstage/plugin-scaffolder-node@0.4.5
  - @backstage/types@1.1.1

## 0.1.5-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- Updated dependencies
  - @backstage/backend-test-utils@0.4.0-next.3
  - @backstage/plugin-scaffolder-node@0.4.5-next.3
  - @backstage/backend-common@0.23.0-next.3
  - @backstage/types@1.1.1

## 0.1.5-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@0.4.0-next.2
  - @backstage/backend-common@0.23.0-next.2
  - @backstage/plugin-scaffolder-node@0.4.5-next.2
  - @backstage/types@1.1.1

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@0.4.0-next.1
  - @backstage/backend-common@0.23.0-next.1
  - @backstage/plugin-scaffolder-node@0.4.5-next.1

## 0.1.5-next.0

### Patch Changes

- 6a576dc: Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- Updated dependencies
  - @backstage/backend-common@0.22.1-next.0
  - @backstage/backend-test-utils@0.3.9-next.0
  - @backstage/plugin-scaffolder-node@0.4.5-next.0
  - @backstage/types@1.1.1

## 0.1.4

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.22.0
  - @backstage/backend-test-utils@0.3.8
  - @backstage/plugin-scaffolder-node@0.4.4

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.22.0-next.1
  - @backstage/plugin-scaffolder-node@0.4.4-next.1
  - @backstage/backend-test-utils@0.3.8-next.1

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.8-next.0
  - @backstage/backend-test-utils@0.3.8-next.0
  - @backstage/plugin-scaffolder-node@0.4.4-next.0
  - @backstage/types@1.1.1

## 0.1.3

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.7
  - @backstage/backend-test-utils@0.3.7
  - @backstage/plugin-scaffolder-node@0.4.3
  - @backstage/types@1.1.1

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.7-next.1
  - @backstage/backend-test-utils@0.3.7-next.1
  - @backstage/plugin-scaffolder-node@0.4.3-next.1
  - @backstage/types@1.1.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.7-next.0
  - @backstage/backend-test-utils@0.3.7-next.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-node@0.4.3-next.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.6
  - @backstage/backend-test-utils@0.3.6
  - @backstage/plugin-scaffolder-node@0.4.2
  - @backstage/types@1.1.1

## 0.1.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-test-utils@0.3.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/types@1.1.1

## 0.1.0

### Minor Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### Patch Changes

- 2bd1410: Removed unused dependencies
- aa543c9: Add an initiator credentials getter to the default mock context.
- 563dfd0: Fix issue with package bundling, should be `dist/index.cjs.js` instead of `dist/index.esm.js`.
- bbd1fe1: Made "checkpoint" on scaffolder action context non-optional
- Updated dependencies
  - @backstage/backend-test-utils@0.3.4
  - @backstage/plugin-scaffolder-node@0.4.0
  - @backstage/backend-common@0.21.4
  - @backstage/types@1.1.1

## 0.1.0-next.2

### Patch Changes

- 2bd1410: Removed unused dependencies
- 563dfd0: Fix issue with package bundling, should be `dist/index.cjs.js` instead of `dist/index.esm.js`.
- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.0-next.2
  - @backstage/backend-common@0.21.4-next.2
  - @backstage/backend-test-utils@0.3.4-next.2
  - @backstage/types@1.1.1

## 0.1.0-next.1

### Patch Changes

- aa543c9: Add an initiator credentials getter to the default mock context.
- bbd1fe1: Made "checkpoint" on scaffolder action context non-optional
- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.0-next.1
  - @backstage/backend-common@0.21.4-next.1
  - @backstage/backend-test-utils@0.3.4-next.1
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 0.1.0-next.0

### Minor Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### Patch Changes

- Updated dependencies
  - @backstage/backend-test-utils@0.3.3-next.0
  - @backstage/backend-common@0.21.3-next.0
  - @backstage/plugin-scaffolder-node@0.3.3-next.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.1-next.0
