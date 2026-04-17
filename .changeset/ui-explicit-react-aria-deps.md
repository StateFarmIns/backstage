---
'@backstage/ui': patch
---

Added `@react-aria/interactions`, `@react-stately/layout`, `@react-stately/overlays`, and `@react-types/table` as explicit dependencies, since they are imported directly but were previously only resolved as transitive dependencies of `react-aria-components`.
