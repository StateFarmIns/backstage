---
id: catalog-customization
title: Catalog Customization
description: How to add custom filters or interface elements to the Backstage software catalog
---

The Backstage software catalog comes with a default `CatalogIndexPage` to filter and find catalog entities. This is already set up by default by `@backstage/create-app`. If you want to change the default index page - to set the initially selected filter, adjust columns, add actions, or to add a custom filter to the catalog - the following sections will show you how.

## Pagination

Initial support for pagination of the `CatalogIndexPage` was added in v1.21.0 of Backstage, so make sure you are on that version or newer to use this feature. To enable pagination you simply need to pass in the `pagination` prop like this:

```tsx title="packages/app/src/App.tsx"
<Route path="/catalog" element={<CatalogIndexPage pagination />} />
```

## Initially Selected Filter

By default, the initially selected filter defaults to Owned. If you are still building up your catalog this may show an empty list to start. If you would prefer this to show All as the default, here's how you can make that change:

```tsx title="packages/app/src/App.tsx"
<Route
  path="/catalog"
  element={<CatalogIndexPage initiallySelectedFilter="all" />}
/>
```

Possible options are: owned, starred, or all

## Initially Selected Kind

By default, the initially selected Kind when viewing the Catalog is Component, but you may have reasons that you want this to be different. Let's say at your Organization they would like it to always default to Domain, here's how you would do that:

```tsx title="packages/app/src/App.tsx"
<Route path="/catalog" element={<CatalogIndexPage initialKind="domain" />} />
```

Possible options are all the [default Kinds](system-model.md) as well as any custom Kinds that you have added.

## Owner Picker Mode

The Owner filter by default will only contain a list of Users and/or Groups that actually own an entity in the Catalog, now you may have reason to change this. Here's how:

```tsx title="packages/app/src/App.tsx"
<Route path="/catalog" element={<CatalogIndexPage ownerPickerMode="all" />} />
```

Possible options are: owners-only or all

## Table Options

The tables used within Backstage are built on top of [`@material-table/core`](https://material-table-core.github.io/) and the `CatalogIndexPage` has a `tableOptions` prop that allows you to customize the underlying table to a certain extent, but there are some hard coded Backstage settings that can't be changed. Here's an example of how to use this prop to disable the search filter field in the table's header:

```tsx title="packages/app/src/App.tsx"
<Route
  path="/catalog"
  element={<CatalogIndexPage tableOptions={{ search: false }} />}
/>
```

There are many options that can be set using `tableOptions`, the full list of settings can be found in the [`@material-table/core` `Options` interface](https://github.com/material-table-core/core/blob/v3.1.0/types/index.d.ts#L323) (this link goes to `v3.1.0` of `@material-table/core` as that is the version currently used by Backstage).

## Customize Columns

The columns you see in the `CatalogIndexPage` were selected to be a good starting point for most, but there may be cases where you would like to add or remove columns from existing or custom Kinds.

### Adding a column to an existing Kind

Suppose we want to add a new User Email column to the `User` kind in the Catalog. We can do this by overriding the `columns` that we pass into the `CatalogIndexPage` component in our `App.tsx`. First, we need to match the entity kind that we want to override, and then define the columns to show:

```tsx title="packages/app/src/App.tsx"
{/* prettier-ignore */ /* highlight-add-start */}
const myColumnsFunc: CatalogTableColumnsFunc = entityListContext => {
  if (entityListContext.filters.kind?.value === 'user') {
    return [
      // Render existing columns
      ...CatalogTable.defaultColumnsFunc(entityListContext),
      // Add new columns here
    ];
  }

  return CatalogTable.defaultColumnsFunc(entityListContext);
};
{/* prettier-ignore */ /* highlight-add-end */}
```

Then, we can implement the `createUserEmailColumn` function and add it to the list of columns. `field` is used to access the data from the entity, while `render` lets us customize how we display the data:

```tsx title="packages/app/src/App.tsx"
{/* highlight-add-start */}
const createUserEmailColumn = (): TableColumn<CatalogTableRow> => ({
  title: 'User Email',
  field: 'entity.spec.profile.email',
  render: ({ entity }) => (
    <OverflowTooltip
      text={entity.spec?.profile?.['email'] || 'N/A'}
      placement="bottom-start"
    />
  ),
});
{/* highlight-add-end */}

const myColumnsFunc: CatalogTableColumnsFunc = entityListContext => {
  if (entityListContext.filters.kind?.value === 'user') {
    return [
      // Render existing columns
      ...CatalogTable.defaultColumnsFunc(entityListContext),
      // Add new columns here
      {/* highlight-add-next-line */}
      createUserEmailColumn(),
    ];
  }

  return CatalogTable.defaultColumnsFunc(entityListContext);
};
```

Finally, we can pass the `myColumnsFunc` to the `CatalogIndexPage` component:

```tsx title="packages/app/src/App.tsx"
const routes = (
  <FlatRoutes>
    <Route
      path="/catalog"
      element={
        <CatalogIndexPage
          pagination={{ mode: 'offset', limit: 20 }}
          {/* highlight-add-next-line */}
          columns={myColumnsFunc}
        />
      }
    />
    {/* Other routes */}
  </FlatRoutes>
)
```

### Adding columns to a custom or specific Kind

Another use case for customization is when adding a custom `Kind`. This feature is available in Backstage >= `v1.23.0`. For example:

```tsx title="packages/app/src/App.tsx"
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
  {/* highlight-add-start */}
  CatalogTable,
  CatalogTableColumnsFunc,
  {/* highlight-add-end */}
} from '@backstage/plugin-catalog';

{/* highlight-add-start */}
const myColumnsFunc: CatalogTableColumnsFunc = entityListContext => {
  if (entityListContext.filters.kind?.value === 'MyKind') {
    return [
      CatalogTable.columns.createNameColumn(),
      CatalogTable.columns.createOwnerColumn(),
    ];
  }

  return CatalogTable.defaultColumnsFunc(entityListContext);
};
{/* highlight-add-end */}

{/* highlight-remove-next-line */}
<Route path="/catalog" element={<CatalogIndexPage />} />
{/* highlight-add-next-line */}
<Route path="/catalog" element={<CatalogIndexPage columns={myColumnsFunc} />} />
```

:::note Note

In the examples above, the contents of the files have been shortened for simplicity.

:::

## Customize Actions

The `CatalogIndexPage` comes with three default actions - view, edit, and star. You might want to add more.

To do this, first you'll need to add `@mui/utils` to your `packages/app/package.json`:

```sh
yarn --cwd packages/app add @mui/utils
```

Then you'll do the following:

```tsx title="packages/app/src/App.tsx"
import {
  AlertDisplay,
  OAuthRequestDialog,
  SignInPage,
  {/* highlight-add-next-line */}
  TableProps,
} from '@backstage/core-components';

import {
  CatalogEntityPage,
  CatalogIndexPage,
  {/* highlight-add-next-line */}
  CatalogTableRow,
  catalogPlugin,
} from '@backstage/plugin-catalog';

{/* highlight-add-start */}
import { Typography } from '@material-ui/core';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { visuallyHidden } from '@mui/utils';
{/* highlight-add-end */}

{/* highlight-add-start */}
const customActions: TableProps<CatalogTableRow>['actions'] = [
  ({ entity }) => {
    const url = 'https://backstage.io/';
    const title = `View - ${entity.metadata.name}`;

    return {
      icon: () => (
        <>
          <Typography style={visuallyHidden}>{title}</Typography>
          <OpenInNew fontSize="small" />
        </>
      ),
      tooltip: title,
      disabled: !url,
      onClick: () => {
        if (!url) return;
        window.open(url, '_blank');
      },
    };
  },
];
{/* highlight-add-end */}

{/* highlight-remove-next-line */}
<Route path="/catalog" element={<CatalogIndexPage />} />
{/* highlight-add-next-line */}
<Route path="/catalog" element={<CatalogIndexPage actions={customActions} />} />
```

:::note Note

In the example above, the contents of `App.tsx` has been shortened for simplicity.

:::

The above customization will override the existing actions. Currently, the only way to keep them and add your own is to also include the existing actions in your array by copying them from the [`defaultActions`](https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/catalog/src/components/CatalogTable/CatalogTable.tsx#L113-L168).

## Customize Filters

There are various ways to customize filters: adjusting the existing filters with props, adding or removing default filters, creating brand-new custom filters, etc. The following sections cover these cases:

### Default Filter Props

There are a set of default filters that you can use, which surface all the props mentioned earlier in this document. Here's how they can be used:

```tsx title="packages/app/src/App.tsx"
import { DefaultFilters } from '@backstage/plugin-catalog-react';

<Route
  path="/catalog"
  element={
    <CatalogIndexPage
      filters={
        <>
          <DefaultFilters
            initialKind="Domain"
            initiallySelectedFilter="all"
            ownerPickerMode="all"
          />
        </>
      }
    />
  }
/>;
```

### Removing Default Filters

If you have reasons not to use the Lifecycle, Tag, and Processing Status filters, here's an example of how to remove them:

```tsx title="packages/app/src/App.tsx"
import {
  EntityKindPicker,
  EntityTypePicker,
  UserListPicker,
  EntityOwnerPicker,
  EntityNamespacePicker,
} from '@backstage/plugin-catalog-react';

<Route
  path="/catalog"
  element={
    <CatalogIndexPage
      filters={
        <>
          <EntityKindPicker />
          <EntityTypePicker />
          <UserListPicker />
          <EntityOwnerPicker />
          <EntityNamespacePicker />
        </>
      }
    />
  }
/>;
```

### Custom Filters

You can add custom filters. For example, suppose that we want to allow filtering by a custom annotation added to entities, `company.com/security-tier`. Here is how we can build a filter to support that need.

First we need to create a new filter that implements the `EntityFilter` interface:

```ts
import { EntityFilter } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';

class EntitySecurityTierFilter implements EntityFilter {
  constructor(readonly values: string[]) {}
  filterEntity(entity: Entity): boolean {
    const tier = entity.metadata.annotations?.['company.com/security-tier'];
    return tier !== undefined && this.values.includes(tier);
  }
}
```

The `EntityFilter` interface permits backend filters, which are passed along to the `catalog-backend` - or frontend filters, which are applied after entities are loaded from the backend.

We'll use this filter to extend the default filters in a type-safe way. Let's create the custom filter shape extending the default somewhere alongside this filter:

```ts
export type CustomFilters = DefaultEntityFilters & {
  securityTiers?: EntitySecurityTierFilter;
};
```

To control this filter, we can create a React component that shows checkboxes for the security tiers. This component will make use of the `useEntityList` hook, which accepts this extended filter type as a [generic](https://www.typescriptlang.org/docs/handbook/2/generics.html) parameter:

```tsx
export const EntitySecurityTierPicker = () => {
  // The securityTiers key is recognized due to the CustomFilter generic
  const {
    filters: { securityTiers },
    updateFilters,
  } = useEntityList<CustomFilters>();

  // Toggles the value, depending on whether it's already selected
  function onChange(value: string) {
    const newTiers = securityTiers?.values.includes(value)
      ? securityTiers.values.filter(tier => tier !== value)
      : [...(securityTiers?.values ?? []), value];
    updateFilters({
      securityTiers: newTiers.length
        ? new EntitySecurityTierFilter(newTiers)
        : undefined,
    });
  }

  const tierOptions = ['1', '2', '3'];
  return (
    <FormControl component="fieldset">
      <Typography variant="button">Security Tier</Typography>
      <FormGroup>
        {tierOptions.map(tier => (
          <FormControlLabel
            key={tier}
            control={
              <Checkbox
                checked={securityTiers?.values.includes(tier)}
                onChange={() => onChange(tier)}
              />
            }
            label={`Tier ${tier}`}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};
```

Now we can add the component to `CatalogIndexPage`:

```tsx title="packages/app/src/App.tsx"
{/* prettier-ignore */ /* highlight-add-start */}
import { DefaultFilters } from '@backstage/plugin-catalog-react';
{/* prettier-ignore */ /* highlight-add-end */}

const routes = (
  <FlatRoutes>
    <Navigate key="/" to="catalog" />
    {/* highlight-remove-next-line */}
    <Route path="/catalog" element={<CatalogIndexPage />} />
    {/* highlight-add-start */}
    <Route
      path="/catalog"
      element={
        <CatalogIndexPage
          filters={
            <>
              <DefaultFilters />
              <EntitySecurityTierPicker />
            </>
          }
        />
      }
    />
    {/* highlight-add-end */}
    {/* ... */}
  </FlatRoutes>
);
```

The same method can be used to customize the _default_ filters with a different interface - for such usage, the generic argument isn't needed since the filter shape remains the same as the default.

## Advanced Customization

For those where none of the above fits their needs you can take the option of creating a fully custom `CatalogIndexPage`.

```tsx title="packages/app/src/components/catalog/CustomCatalogIndex.tsx"
import {
  PageWithHeader,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import { CatalogTable } from '@backstage/plugin-catalog';
import {
  EntityListProvider,
  CatalogFilterLayout,
  EntityKindPicker,
  EntityLifecyclePicker,
  EntityNamespacePicker,
  EntityOwnerPicker,
  EntityProcessingStatusPicker,
  EntityTagPicker,
  EntityTypePicker,
  UserListPicker,
} from '@backstage/plugin-catalog-react';

export const CustomCatalogPage = () => {
  const orgName =
    useApi(configApiRef).getOptionalString('organization.name') ?? 'Backstage';

  return (
    <PageWithHeader title={orgName} themeId="home">
      <Content>
        <ContentHeader title="">
          <SupportButton>All your software catalog entities</SupportButton>
        </ContentHeader>
        <EntityListProvider pagination>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
              <EntityKindPicker />
              <EntityTypePicker />
              <UserListPicker />
              <EntityOwnerPicker />
              <EntityLifecyclePicker />
              <EntityTagPicker />
              <EntityProcessingStatusPicker />
              <EntityNamespacePicker />
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              <CatalogTable />
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </EntityListProvider>
      </Content>
    </PageWithHeader>
  );
};
```

The above is a very basic version of a fully custom `CatalogIndexPage`, you'll want to explore the various props to see what you can all do with them. This was built off the building blocks seen in the [`DefaultCatalogPage`](https://github.com/backstage/backstage/blob/master/plugins/catalog/src/components/CatalogPage/DefaultCatalogPage.tsx)

:::note Note

The catalog index page is designed to have a minimal code footprint to support easy customization, but creating a replica does introduce a possibility of drifting out of date over time. Be sure to check the catalog [CHANGELOG](https://github.com/backstage/backstage/blob/master/plugins/catalog/CHANGELOG.md) periodically.

:::

To use this custom `CatalogIndexPage` which we called `CustomCatalogPage`, you'll need to make the following change:

```tsx title="packages/app/src/App.tsx"
const routes = (
  <FlatRoutes>
    <Navigate key="/" to="catalog" />
    {/* highlight-remove-next-line */}
    <Route path="/catalog" element={<CatalogIndexPage />} />
    {/* highlight-add-start */}
    <Route path="/catalog" element={<CatalogIndexPage />}>
      <CustomCatalogPage />
    </Route>
    {/* highlight-add-end */}
    {/* ... */}
  </FlatRoutes>
);
```

## New Frontend System

This section of the documentation explains how to create and configure catalog extensions in the [new frontend system](../../frontend-system/index.md).

:::warning Warning

This section is a work in progress.

:::

### Entity filters

Many extensions that attach within the catalog entity pages accept a `filter` configuration. The purpose of the `filter` configuration is to select what entities the extension should be applied to or be present on. Many of these extension will have a default filter defined, but you can override it by providing your own. When defining filters in code you can use either a predicate function or a entity predicate query, while in configuration you can only use an entity predicate query.

### Entity predicate queries

The entity predicate syntax is a minimal JSON-based query language for filtering catalog entities. It is loosely inspired by the [MongoDB query syntax](https://www.mongodb.com/docs/manual/tutorial/query-documents/), behaving roughly the same way but with a different set of operators.

The most simple entity predicate is an object expression with key-value mappings where the key is the full dot-separated path to the value in the entity, and the value is the value to do a case insensitive match against. Each entry in this object is evaluated separately, but all of them must match for the overall predicate to result in a match. For example, the following will match any component entities of the type `service`:

```json
{
  "filter": {
    "kind": "component",
    "spec.type": "service"
  }
}
```

Or when utilizing YAML syntax:

```yaml
filter:
  kind: component
  spec.type: service
```

In addition to this basic syntax, entity predicates support logical operators that can be nested and applied around these object expressions. For example, the following will match all components entities that are of type `service` or `website`:

```json
{
  "filter": {
    "$all": [
      {
        "kind": "component"
      },
      {
        "$any": [{ "spec.type": "service" }, { "spec.type": "website" }]
      }
    ]
  }
}
```

Or when utilizing YAML syntax:

```yaml
filter:
  $all:
    - kind: component
    - $any:
        - spec.type: service
        - spec.type: website
```

Finally, entity predicates also support value operators that can be used in place of the values in the object expression. For example, the following is a simpler way to express the previous example:

```json
{
  "filter": {
    {
      "kind": "component",
      "spec.type": { "$in": ["service", "website"] }
    },
  }
}
```

Or when utilizing YAML syntax:

```yaml
filter:
  kind: component
  spec.type:
    $in: [service, website]
```

### Entity predicate logical operators

The following section lists all logical operators for entity predicates.

#### `$all`

The `$all` operator has the following syntax:

```json
{ $all: [ { <expression1> }, { <expression2> }, ...] }
```

The `$all` operator evaluates to `true` if all expressions within the provided array evaluate to `true`. This includes an empty array, which means that `{ "$all": [] }` always evaluates to `true`.

```yaml title="Example usage of $all"
filter:
  $all:
    - kind: component
    - $not:
        spec.type: service
```

#### `$any`

The `$any` operator has the following syntax:

```json
{ $any: [ { <expression1> }, { <expression2> }, ...] }
```

The `$any` operator evaluates to `true` if at least one of the expressions within the provided array evaluate to `true`. This includes an empty array, which means that `{ "$any": [] }` always evaluates to `false`.

```yaml title="Example usage of $any"
filter:
  $any:
    - kind: component
    - metadata.annotations.github.com/project-slug: { $exists: true }
```

#### `$not`

The `$not` operator has the following syntax:

```json
{ $not: { <expression> } }
```

The `$not` operator inverts the result of the provided express. If the expression evaluates to `true` then `$not` will evaluate to false, and the other way around.

```yaml title="Example usage of $not"
filter:
  $not:
    kind: template
```

### Entity predicate value operators

The following section lists all value operators for entity predicates.

#### `$exists`

The `$exists` operator has the following syntax:

```json
{ field: { $exists: <boolean> } }
```

The `$exists` operator will evaluate to `true` if the existence of the value it matches against matches the provided boolean. That is `{ $exists: true }` will evaluate to `true` if and only if the value is defined, and `{ $exists: false }` will evaluate to `true` if and only if the value is not defined.

```yaml title="Example usage of $exists"
filter:
  metadata.annotations.github.com/project-slug: { $exists: true }
```

#### `$in`

The `$in` operator has the following syntax:

```json
{ field: { $in: [ <primitive1>, <primitive2>, ... ] } }
```

The `$in` operator will evaluate to `true` if the value it is matched against is exists within the array of primitives. The comparison is case insensitive and can only be done across primitive values. If the value matched against is an object or array, the operator will always evaluate to `false`.

```yaml title="Example usage of $in"
filter:
  kind:
    $in: [component, api]
```

#### `$contains`

The `$contains` operator has the following syntax:

```json
{ field: { $contains: { <expression> } } }
```

The `$contains` operator will evaluate to `true` if the value it is matched against is an array, and at least one of the elements in the array fully matches the provided expression. If the value matched against is not an array, or if the array is empty, the operator will always evaluate to `false`.

The expression used to match against the array can be any valid entity predicate expression, including logical operators and value operators.

```yaml title="Example usage of $contains"
filter:
  relations:
    $contains:
      type: ownedBy
      target:
        $in: [group:default/admins, group:default/viewers]
```
