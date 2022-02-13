# Class: MultiChainIndexedDBClient

## Table of contents

### Constructors

- [constructor](MultiChainIndexedDBClient.md#constructor)

### Properties

- [chainIdDefault](MultiChainIndexedDBClient.md#chainiddefault)
- [databases](MultiChainIndexedDBClient.md#databases)

### Methods

- [add](MultiChainIndexedDBClient.md#add)
- [bulkAdd](MultiChainIndexedDBClient.md#bulkadd)
- [bulkAddWithKeys](MultiChainIndexedDBClient.md#bulkaddwithkeys)
- [bulkDelete](MultiChainIndexedDBClient.md#bulkdelete)
- [bulkGet](MultiChainIndexedDBClient.md#bulkget)
- [bulkPut](MultiChainIndexedDBClient.md#bulkput)
- [createDatabase](MultiChainIndexedDBClient.md#createdatabase)
- [delete](MultiChainIndexedDBClient.md#delete)
- [each](MultiChainIndexedDBClient.md#each)
- [filter](MultiChainIndexedDBClient.md#filter)
- [get](MultiChainIndexedDBClient.md#get)
- [getDatabase](MultiChainIndexedDBClient.md#getdatabase)
- [getTable](MultiChainIndexedDBClient.md#gettable)
- [listTables](MultiChainIndexedDBClient.md#listtables)
- [put](MultiChainIndexedDBClient.md#put)
- [setChainIdDefault](MultiChainIndexedDBClient.md#setchainiddefault)
- [toArray](MultiChainIndexedDBClient.md#toarray)
- [toCollection](MultiChainIndexedDBClient.md#tocollection)
- [where](MultiChainIndexedDBClient.md#where)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MultiChainIndexedDBClient**(`chainIdDefault?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainIdDefault?` | `number` |

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:9](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L9)

## Properties

### <a id="chainiddefault" name="chainiddefault"></a> chainIdDefault

• **chainIdDefault**: `number` = `1`

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:4](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L4)

___

### <a id="databases" name="databases"></a> databases

• **databases**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: [`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:5](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L5)

## Methods

### <a id="add" name="add"></a> add

▸ **add**(`table`, `documents`, `key`, `chainId?`): `PromiseExtended`<`IndexableType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `documents` | `any` |
| `key` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`IndexableType`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:55](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L55)

___

### <a id="bulkadd" name="bulkadd"></a> bulkAdd

▸ **bulkAdd**(`table`, `documents`, `chainId?`): `PromiseExtended`<`IndexableType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `documents` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`IndexableType`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:60](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L60)

___

### <a id="bulkaddwithkeys" name="bulkaddwithkeys"></a> bulkAddWithKeys

▸ **bulkAddWithKeys**(`table`, `documents`, `keys`, `chainId?`): `PromiseExtended`<`IndexableType` \| `IndexableType`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `documents` | `any` |
| `keys` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`IndexableType` \| `IndexableType`[]\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:65](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L65)

___

### <a id="bulkdelete" name="bulkdelete"></a> bulkDelete

▸ **bulkDelete**(`table`, `keys`, `chainId?`): `PromiseExtended`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `keys` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`void`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:70](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L70)

___

### <a id="bulkget" name="bulkget"></a> bulkGet

▸ **bulkGet**(`table`, `keys`, `chainId?`): `PromiseExtended`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `keys` | `any`[] |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`any`[]\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:75](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L75)

___

### <a id="bulkput" name="bulkput"></a> bulkPut

▸ **bulkPut**(`table`, `documents`, `key`, `chainId?`): `PromiseExtended`<`IndexableType` \| `IndexableType`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `documents` | `any` |
| `key` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`IndexableType` \| `IndexableType`[]\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:80](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L80)

___

### <a id="createdatabase" name="createdatabase"></a> createDatabase

▸ **createDatabase**(`chainId`, `onReady?`): [`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `onReady?` | `Function` |

#### Returns

[`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:23](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L23)

___

### <a id="delete" name="delete"></a> delete

▸ **delete**(`table`, `key`, `chainId?`): `PromiseExtended`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `key` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`void`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:85](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L85)

___

### <a id="each" name="each"></a> each

▸ **each**(`table`, `callback`, `chainId?`): `PromiseExtended`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `callback` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`void`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:90](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L90)

___

### <a id="filter" name="filter"></a> filter

▸ **filter**(`table`, `filterFunction`, `chainId?`): `PromiseExtended`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `filterFunction` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`any`[]\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:95](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L95)

___

### <a id="get" name="get"></a> get

▸ **get**(`table`, `idOrFilterObject`, `chainId?`): `PromiseExtended`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `idOrFilterObject` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`any`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:103](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L103)

___

### <a id="getdatabase" name="getdatabase"></a> getDatabase

▸ **getDatabase**(`chainId?`): [`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

[`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:34](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L34)

___

### <a id="gettable" name="gettable"></a> getTable

▸ **getTable**(`table`, `chainId?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `chainId?` | `number` |

#### Returns

`any`

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:42](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L42)

___

### <a id="listtables" name="listtables"></a> listTables

▸ **listTables**(`chainId?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

`any`

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:47](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L47)

___

### <a id="put" name="put"></a> put

▸ **put**(`table`, `document`, `chainId?`): `PromiseExtended`<`IndexableType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `document` | `any` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`IndexableType`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:108](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L108)

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

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:15](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L15)

___

### <a id="toarray" name="toarray"></a> toArray

▸ **toArray**(`table`, `chainId?`): `PromiseExtended`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `chainId?` | `number` |

#### Returns

`PromiseExtended`<`any`[]\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:113](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L113)

___

### <a id="tocollection" name="tocollection"></a> toCollection

▸ **toCollection**(`table`, `chainId?`): `Collection`<`any`, `IndexableType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `chainId?` | `number` |

#### Returns

`Collection`<`any`, `IndexableType`\>

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:118](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L118)

___

### <a id="where" name="where"></a> where

▸ **where**(`table`, `filter`, `clause`, `chainId?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `filter` | `any` |
| `clause` | [`string`, `any`[]] |
| `chainId?` | `number` |

#### Returns

`any`

#### Defined in

[packages/multichain-database/src/MultiChainIndexedDatabaseClient.ts:123](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainIndexedDatabaseClient.ts#L123)
