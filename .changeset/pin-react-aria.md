---
'@backstage/ui': patch
'@backstage/plugin-app-visualizer': patch
'@backstage/plugin-app': patch
---

Pinned React Aria dependency ranges to use tilde (`~`) instead of caret (`^`), since React Aria does not strictly follow semver and may ship breaking changes in minor releases.
