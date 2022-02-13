# Class: MultichainInMemoryDBClient

## Table of contents

### Constructors

- [constructor](MultichainInMemoryDBClient.md#constructor)

### Properties

- [chainIdDefault](MultichainInMemoryDBClient.md#chainiddefault)
- [databases](MultichainInMemoryDBClient.md#databases)

### Methods

- [addCollection](MultichainInMemoryDBClient.md#addcollection)
- [addCollections](MultichainInMemoryDBClient.md#addcollections)
- [addDynamicView](MultichainInMemoryDBClient.md#adddynamicview)
- [addEventHook](MultichainInMemoryDBClient.md#addeventhook)
- [addEventsHook](MultichainInMemoryDBClient.md#addeventshook)
- [addTransform](MultichainInMemoryDBClient.md#addtransform)
- [count](MultichainInMemoryDBClient.md#count)
- [create](MultichainInMemoryDBClient.md#create)
- [delete](MultichainInMemoryDBClient.md#delete)
- [export](MultichainInMemoryDBClient.md#export)
- [find](MultichainInMemoryDBClient.md#find)
- [findAndRemove](MultichainInMemoryDBClient.md#findandremove)
- [findAndUpdate](MultichainInMemoryDBClient.md#findandupdate)
- [findOne](MultichainInMemoryDBClient.md#findone)
- [get](MultichainInMemoryDBClient.md#get)
- [getCollection](MultichainInMemoryDBClient.md#getcollection)
- [getDocument](MultichainInMemoryDBClient.md#getdocument)
- [getDynamicView](MultichainInMemoryDBClient.md#getdynamicview)
- [getTransform](MultichainInMemoryDBClient.md#gettransform)
- [import](MultichainInMemoryDBClient.md#import)
- [initializeDefaultCollections](MultichainInMemoryDBClient.md#initializedefaultcollections)
- [insert](MultichainInMemoryDBClient.md#insert)
- [listCollections](MultichainInMemoryDBClient.md#listcollections)
- [remove](MultichainInMemoryDBClient.md#remove)
- [save](MultichainInMemoryDBClient.md#save)
- [search](MultichainInMemoryDBClient.md#search)
- [setChainIdDefault](MultichainInMemoryDBClient.md#setchainiddefault)
- [update](MultichainInMemoryDBClient.md#update)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MultichainInMemoryDBClient**(`chainIdDefault?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainIdDefault?` | `number` |
| `options?` | `DatabaseOptions` |

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:28](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L28)

## Properties

### <a id="chainiddefault" name="chainiddefault"></a> chainIdDefault

• **chainIdDefault**: `number` = `1`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:23](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L23)

___

### <a id="databases" name="databases"></a> databases

• **databases**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `Loki`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:24](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L24)

## Methods

### <a id="addcollection" name="addcollection"></a> addCollection

▸ **addCollection**(`collection`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `object` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:116](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L116)

___

### <a id="addcollections" name="addcollections"></a> addCollections

▸ **addCollections**(`collections`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collections` | `any`[] |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:120](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L120)

___

### <a id="adddynamicview" name="adddynamicview"></a> addDynamicView

▸ **addDynamicView**(`collection`, `viewName`, `options`, `chainId?`): `DynamicView`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `viewName` | `string` |
| `options` | `DynamicViewOptions` |
| `chainId?` | `number` |

#### Returns

`DynamicView`<`any`\>

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:137](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L137)

___

### <a id="addeventhook" name="addeventhook"></a> addEventHook

▸ **addEventHook**(`collection`, `event`, `hook`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `event` | `string` |
| `hook` | `any` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:94](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L94)

___

### <a id="addeventshook" name="addeventshook"></a> addEventsHook

▸ **addEventsHook**(`collection`, `hook`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `hook` | `any` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:104](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L104)

___

### <a id="addtransform" name="addtransform"></a> addTransform

▸ **addTransform**(`collection`, `name`, `transform`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `name` | `string` |
| `transform` | `Transform`[] |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:149](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L149)

___

### <a id="count" name="count"></a> count

▸ **count**(`collection`, `chainId?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `chainId?` | `number` |

#### Returns

`number`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:204](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L204)

___

### <a id="create" name="create"></a> create

▸ **create**(`chainId`, `options`): `Loki`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `options` | `DatabaseOptions` |

#### Returns

`Loki`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:44](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L44)

___

### <a id="delete" name="delete"></a> delete

▸ **delete**(`chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:74](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L74)

___

### <a id="export" name="export"></a> export

▸ **export**(`chainId?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

`string`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:59](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L59)

___

### <a id="find" name="find"></a> find

▸ **find**(`collection`, `find`, `chainId?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `find` | [`FindQuery`](../interfaces/FindQuery.md) |
| `chainId?` | `number` |

#### Returns

`any`[]

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:196](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L196)

___

### <a id="findandremove" name="findandremove"></a> findAndRemove

▸ **findAndRemove**(`collection`, `find`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `find` | [`FindQuery`](../interfaces/FindQuery.md) |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:242](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L242)

___

### <a id="findandupdate" name="findandupdate"></a> findAndUpdate

▸ **findAndUpdate**(`collection`, `find`, `updateFunction`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `find` | [`FindQuery`](../interfaces/FindQuery.md) |
| `updateFunction` | `any` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:252](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L252)

___

### <a id="findone" name="findone"></a> findOne

▸ **findOne**(`collection`, `find`, `chainId?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `find` | `any` |
| `chainId?` | `number` |

#### Returns

`any`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:200](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L200)

___

### <a id="get" name="get"></a> get

▸ **get**(`chainId?`): `Loki`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

`Loki`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:64](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L64)

___

### <a id="getcollection" name="getcollection"></a> getCollection

▸ **getCollection**(`collectionName`, `chainId?`): `Collection`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |
| `chainId?` | `number` |

#### Returns

`Collection`<`any`\>

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:125](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L125)

___

### <a id="getdocument" name="getdocument"></a> getDocument

▸ **getDocument**(`collection`, `id`, `returnPosition`, `chainId?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `id` | `number` |
| `returnPosition` | `boolean` |
| `chainId?` | `number` |

#### Returns

`any`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:179](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L179)

___

### <a id="getdynamicview" name="getdynamicview"></a> getDynamicView

▸ **getDynamicView**(`collection`, `name`, `chainId?`): ``null`` \| `DynamicView`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `name` | `string` |
| `chainId?` | `number` |

#### Returns

``null`` \| `DynamicView`<`any`\>

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:188](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L188)

___

### <a id="gettransform" name="gettransform"></a> getTransform

▸ **getTransform**(`collection`, `name`, `chainId?`): `Transform`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `name` | `string` |
| `chainId?` | `number` |

#### Returns

`Transform`[]

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:192](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L192)

___

### <a id="import" name="import"></a> import

▸ **import**(`serializedDb`, `options?`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedDb` | `string` |
| `options` | `object` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:54](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L54)

___

### <a id="initializedefaultcollections" name="initializedefaultcollections"></a> initializeDefaultCollections

▸ **initializeDefaultCollections**(`chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:88](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L88)

___

### <a id="insert" name="insert"></a> insert

▸ **insert**(`collection`, `data`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `data` | `any` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:212](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L212)

___

### <a id="listcollections" name="listcollections"></a> listCollections

▸ **listCollections**(`chainId?`): `Collection`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

`Collection`<`any`\>[]

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:132](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L132)

___

### <a id="remove" name="remove"></a> remove

▸ **remove**(`collection`, `document`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `document` | `any` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:232](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L232)

___

### <a id="save" name="save"></a> save

▸ **save**(`chainId?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |
| `callback?` | `any` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:80](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L80)

___

### <a id="search" name="search"></a> search

▸ **search**(`collection`, `query`, `chainId?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `query` | [`ChainedQuery`](../interfaces/ChainedQuery.md) |
| `chainId?` | `number` |

#### Returns

`any`[]

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:163](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L163)

___

### <a id="setchainiddefault" name="setchainiddefault"></a> setChainIdDefault

▸ **setChainIdDefault**(`chainId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:36](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L36)

___

### <a id="update" name="update"></a> update

▸ **update**(`collection`, `data`, `chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `data` | `any` |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/MultichainInMemoryDatabaseClient.ts:222](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultichainInMemoryDatabaseClient.ts#L222)
