# Class: MultiChainBrowserIndexedDB

**`description`** A class for managing browser IndexedDB database of Web3 Entities (used in sets)

## Hierarchy

- `Dexie`

  ↳ **`MultiChainBrowserIndexedDB`**

## Table of contents

### Constructors

- [constructor](MultiChainBrowserIndexedDB.md#constructor)

### Properties

- [Collection](MultiChainBrowserIndexedDB.md#collection)
- [Table](MultiChainBrowserIndexedDB.md#table)
- [Transaction](MultiChainBrowserIndexedDB.md#transaction)
- [Version](MultiChainBrowserIndexedDB.md#version)
- [WhereClause](MultiChainBrowserIndexedDB.md#whereclause)
- [\_allTables](MultiChainBrowserIndexedDB.md#_alltables)
- [\_dbSchema](MultiChainBrowserIndexedDB.md#_dbschema)
- [accounts](MultiChainBrowserIndexedDB.md#accounts)
- [contracts](MultiChainBrowserIndexedDB.md#contracts)
- [core](MultiChainBrowserIndexedDB.md#core)
- [eventFilters](MultiChainBrowserIndexedDB.md#eventfilters)
- [logs](MultiChainBrowserIndexedDB.md#logs)
- [name](MultiChainBrowserIndexedDB.md#name)
- [on](MultiChainBrowserIndexedDB.md#on)
- [tables](MultiChainBrowserIndexedDB.md#tables)
- [transactionRequests](MultiChainBrowserIndexedDB.md#transactionrequests)
- [transactions](MultiChainBrowserIndexedDB.md#transactions)
- [verno](MultiChainBrowserIndexedDB.md#verno)
- [vip](MultiChainBrowserIndexedDB.md#vip)
- [AbortError](MultiChainBrowserIndexedDB.md#aborterror)
- [BulkError](MultiChainBrowserIndexedDB.md#bulkerror)
- [ConstraintError](MultiChainBrowserIndexedDB.md#constrainterror)
- [DataCloneError](MultiChainBrowserIndexedDB.md#datacloneerror)
- [DataError](MultiChainBrowserIndexedDB.md#dataerror)
- [DatabaseClosedError](MultiChainBrowserIndexedDB.md#databaseclosederror)
- [DexieError](MultiChainBrowserIndexedDB.md#dexieerror)
- [ForeignAwaitError](MultiChainBrowserIndexedDB.md#foreignawaiterror)
- [InternalError](MultiChainBrowserIndexedDB.md#internalerror)
- [InvalidAccessError](MultiChainBrowserIndexedDB.md#invalidaccesserror)
- [InvalidArgumentError](MultiChainBrowserIndexedDB.md#invalidargumenterror)
- [InvalidStateError](MultiChainBrowserIndexedDB.md#invalidstateerror)
- [InvalidTableError](MultiChainBrowserIndexedDB.md#invalidtableerror)
- [MissingAPIError](MultiChainBrowserIndexedDB.md#missingapierror)
- [ModifyError](MultiChainBrowserIndexedDB.md#modifyerror)
- [NoSuchDatabaseError](MultiChainBrowserIndexedDB.md#nosuchdatabaseerror)
- [NotFoundError](MultiChainBrowserIndexedDB.md#notfounderror)
- [OpenFailedError](MultiChainBrowserIndexedDB.md#openfailederror)
- [PrematureCommitError](MultiChainBrowserIndexedDB.md#prematurecommiterror)
- [Promise](MultiChainBrowserIndexedDB.md#promise)
- [QuotaExceededError](MultiChainBrowserIndexedDB.md#quotaexceedederror)
- [ReadOnlyError](MultiChainBrowserIndexedDB.md#readonlyerror)
- [SchemaError](MultiChainBrowserIndexedDB.md#schemaerror)
- [SubTransactionError](MultiChainBrowserIndexedDB.md#subtransactionerror)
- [TimeoutError](MultiChainBrowserIndexedDB.md#timeouterror)
- [TransactionInactiveError](MultiChainBrowserIndexedDB.md#transactioninactiveerror)
- [UnknownError](MultiChainBrowserIndexedDB.md#unknownerror)
- [UnsupportedError](MultiChainBrowserIndexedDB.md#unsupportederror)
- [UpgradeError](MultiChainBrowserIndexedDB.md#upgradeerror)
- [VersionChangeError](MultiChainBrowserIndexedDB.md#versionchangeerror)
- [VersionError](MultiChainBrowserIndexedDB.md#versionerror)
- [addons](MultiChainBrowserIndexedDB.md#addons)
- [currentTransaction](MultiChainBrowserIndexedDB.md#currenttransaction)
- [default](MultiChainBrowserIndexedDB.md#default)
- [dependencies](MultiChainBrowserIndexedDB.md#dependencies)
- [errnames](MultiChainBrowserIndexedDB.md#errnames)
- [maxKey](MultiChainBrowserIndexedDB.md#maxkey)
- [minKey](MultiChainBrowserIndexedDB.md#minkey)
- [on](MultiChainBrowserIndexedDB.md#on)
- [semVer](MultiChainBrowserIndexedDB.md#semver)
- [version](MultiChainBrowserIndexedDB.md#version)

### Methods

- [\_createTransaction](MultiChainBrowserIndexedDB.md#_createtransaction)
- [backendDB](MultiChainBrowserIndexedDB.md#backenddb)
- [close](MultiChainBrowserIndexedDB.md#close)
- [delete](MultiChainBrowserIndexedDB.md#delete)
- [dynamicallyOpened](MultiChainBrowserIndexedDB.md#dynamicallyopened)
- [hasBeenClosed](MultiChainBrowserIndexedDB.md#hasbeenclosed)
- [hasFailed](MultiChainBrowserIndexedDB.md#hasfailed)
- [isOpen](MultiChainBrowserIndexedDB.md#isopen)
- [open](MultiChainBrowserIndexedDB.md#open)
- [table](MultiChainBrowserIndexedDB.md#table)
- [transaction](MultiChainBrowserIndexedDB.md#transaction)
- [unuse](MultiChainBrowserIndexedDB.md#unuse)
- [use](MultiChainBrowserIndexedDB.md#use)
- [version](MultiChainBrowserIndexedDB.md#version)
- [Events](MultiChainBrowserIndexedDB.md#events)
- [asap](MultiChainBrowserIndexedDB.md#asap)
- [deepClone](MultiChainBrowserIndexedDB.md#deepclone)
- [delByKeyPath](MultiChainBrowserIndexedDB.md#delbykeypath)
- [delete](MultiChainBrowserIndexedDB.md#delete)
- [exists](MultiChainBrowserIndexedDB.md#exists)
- [extendObservabilitySet](MultiChainBrowserIndexedDB.md#extendobservabilityset)
- [getByKeyPath](MultiChainBrowserIndexedDB.md#getbykeypath)
- [getDatabaseNames](MultiChainBrowserIndexedDB.md#getdatabasenames)
- [ignoreTransaction](MultiChainBrowserIndexedDB.md#ignoretransaction)
- [liveQuery](MultiChainBrowserIndexedDB.md#livequery)
- [override](MultiChainBrowserIndexedDB.md#override)
- [setByKeyPath](MultiChainBrowserIndexedDB.md#setbykeypath)
- [shallowClone](MultiChainBrowserIndexedDB.md#shallowclone)
- [vip](MultiChainBrowserIndexedDB.md#vip)
- [waitFor](MultiChainBrowserIndexedDB.md#waitfor)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MultiChainBrowserIndexedDB**(`chainId`)

**`description`** Constructor for the MultiChainBrowserIndexedDatabase class that extends Dexie.
             Initializes the database with the name 'evm' and the following tables:
             accounts, contracts, eventFilters, logs, transactionRequests, transactions,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `number` | The chainId of the database. |

#### Overrides

Dexie.constructor

#### Defined in

[packages/multichain-database/src/MultiChainBrowserIndexedDatabase.core.ts:25](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainBrowserIndexedDatabase.core.ts#L25)

## Properties

### <a id="collection" name="collection"></a> Collection

• **Collection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Collection`<`any`, `IndexableType`\> |

#### Inherited from

Dexie.Collection

#### Defined in

node_modules/dexie/dist/dexie.d.ts:784

___

### <a id="table" name="table"></a> Table

• **Table**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Table`<`any`, `IndexableType`\> |

#### Inherited from

Dexie.Table

#### Defined in

node_modules/dexie/dist/dexie.d.ts:772

___

### <a id="transaction" name="transaction"></a> Transaction

• **Transaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Transaction` |

#### Inherited from

Dexie.Transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:781

___

### <a id="version" name="version"></a> Version

• **Version**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Version` |

#### Inherited from

Dexie.Version

#### Defined in

node_modules/dexie/dist/dexie.d.ts:778

___

### <a id="whereclause" name="whereclause"></a> WhereClause

• **WhereClause**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `WhereClause`<`any`, `IndexableType`\> |

#### Inherited from

Dexie.WhereClause

#### Defined in

node_modules/dexie/dist/dexie.d.ts:775

___

### <a id="_alltables" name="_alltables"></a> \_allTables

• `Readonly` **\_allTables**: `Object`

#### Index signature

▪ [name: `string`]: `Table`<`any`, `IndexableType`\>

#### Inherited from

Dexie.\_allTables

#### Defined in

node_modules/dexie/dist/dexie.d.ts:732

___

### <a id="_dbschema" name="_dbschema"></a> \_dbSchema

• **\_dbSchema**: `DbSchema`

#### Inherited from

Dexie.\_dbSchema

#### Defined in

node_modules/dexie/dist/dexie.d.ts:737

___

### <a id="accounts" name="accounts"></a> accounts

• **accounts**: `Table`<[`Account`](../interfaces/Account.md), `string`\>

#### Defined in

[packages/multichain-database/src/MultiChainBrowserIndexedDatabase.core.ts:12](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainBrowserIndexedDatabase.core.ts#L12)

___

### <a id="contracts" name="contracts"></a> contracts

• **contracts**: `Table`<[`Contracts`](../interfaces/Contracts.md), `string`\>

#### Defined in

[packages/multichain-database/src/MultiChainBrowserIndexedDatabase.core.ts:13](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainBrowserIndexedDatabase.core.ts#L13)

___

### <a id="core" name="core"></a> core

• `Readonly` **core**: `DBCore`

#### Inherited from

Dexie.core

#### Defined in

node_modules/dexie/dist/dexie.d.ts:735

___

### <a id="eventfilters" name="eventfilters"></a> eventFilters

• **eventFilters**: `Table`<`FilterByBlockHash`, `string`\>

#### Defined in

[packages/multichain-database/src/MultiChainBrowserIndexedDatabase.core.ts:14](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainBrowserIndexedDatabase.core.ts#L14)

___

### <a id="logs" name="logs"></a> logs

• **logs**: `Table`<`Log`, `string`\>

#### Defined in

[packages/multichain-database/src/MultiChainBrowserIndexedDatabase.core.ts:15](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainBrowserIndexedDatabase.core.ts#L15)

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Inherited from

Dexie.name

#### Defined in

node_modules/dexie/dist/dexie.d.ts:728

___

### <a id="on" name="on"></a> on

• **on**: `DbEvents`

#### Inherited from

Dexie.on

#### Defined in

node_modules/dexie/dist/dexie.d.ts:739

___

### <a id="tables" name="tables"></a> tables

• `Readonly` **tables**: `Table`<`any`, `IndexableType`\>[]

#### Inherited from

Dexie.tables

#### Defined in

node_modules/dexie/dist/dexie.d.ts:729

___

### <a id="transactionrequests" name="transactionrequests"></a> transactionRequests

• **transactionRequests**: `Table`<`TransactionRequest`, `string`\>

#### Defined in

[packages/multichain-database/src/MultiChainBrowserIndexedDatabase.core.ts:16](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainBrowserIndexedDatabase.core.ts#L16)

___

### <a id="transactions" name="transactions"></a> transactions

• **transactions**: `Table`<[`TransactionAndReceipt`](../interfaces/TransactionAndReceipt.md), `string`\>

#### Defined in

[packages/multichain-database/src/MultiChainBrowserIndexedDatabase.core.ts:17](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/MultiChainBrowserIndexedDatabase.core.ts#L17)

___

### <a id="verno" name="verno"></a> verno

• `Readonly` **verno**: `number`

#### Inherited from

Dexie.verno

#### Defined in

node_modules/dexie/dist/dexie.d.ts:730

___

### <a id="vip" name="vip"></a> vip

• `Readonly` **vip**: `Dexie`

#### Inherited from

Dexie.vip

#### Defined in

node_modules/dexie/dist/dexie.d.ts:731

___

### <a id="aborterror" name="aborterror"></a> AbortError

▪ `Static` **AbortError**: `DexieErrorConstructor`

#### Inherited from

Dexie.AbortError

___

### <a id="bulkerror" name="bulkerror"></a> BulkError

▪ `Static` **BulkError**: `BulkErrorConstructor`

#### Inherited from

Dexie.BulkError

#### Defined in

node_modules/dexie/dist/dexie.d.ts:922

___

### <a id="constrainterror" name="constrainterror"></a> ConstraintError

▪ `Static` **ConstraintError**: `DexieErrorConstructor`

#### Inherited from

Dexie.ConstraintError

___

### <a id="datacloneerror" name="datacloneerror"></a> DataCloneError

▪ `Static` **DataCloneError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DataCloneError

___

### <a id="dataerror" name="dataerror"></a> DataError

▪ `Static` **DataError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DataError

___

### <a id="databaseclosederror" name="databaseclosederror"></a> DatabaseClosedError

▪ `Static` **DatabaseClosedError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DatabaseClosedError

___

### <a id="dexieerror" name="dexieerror"></a> DexieError

▪ `Static` **DexieError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DexieError

#### Defined in

node_modules/dexie/dist/dexie.d.ts:920

___

### <a id="foreignawaiterror" name="foreignawaiterror"></a> ForeignAwaitError

▪ `Static` **ForeignAwaitError**: `DexieErrorConstructor`

#### Inherited from

Dexie.ForeignAwaitError

___

### <a id="internalerror" name="internalerror"></a> InternalError

▪ `Static` **InternalError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InternalError

___

### <a id="invalidaccesserror" name="invalidaccesserror"></a> InvalidAccessError

▪ `Static` **InvalidAccessError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidAccessError

___

### <a id="invalidargumenterror" name="invalidargumenterror"></a> InvalidArgumentError

▪ `Static` **InvalidArgumentError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidArgumentError

___

### <a id="invalidstateerror" name="invalidstateerror"></a> InvalidStateError

▪ `Static` **InvalidStateError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidStateError

___

### <a id="invalidtableerror" name="invalidtableerror"></a> InvalidTableError

▪ `Static` **InvalidTableError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidTableError

___

### <a id="missingapierror" name="missingapierror"></a> MissingAPIError

▪ `Static` **MissingAPIError**: `DexieErrorConstructor`

#### Inherited from

Dexie.MissingAPIError

___

### <a id="modifyerror" name="modifyerror"></a> ModifyError

▪ `Static` **ModifyError**: `ModifyErrorConstructor`

#### Inherited from

Dexie.ModifyError

#### Defined in

node_modules/dexie/dist/dexie.d.ts:921

___

### <a id="nosuchdatabaseerror" name="nosuchdatabaseerror"></a> NoSuchDatabaseError

▪ `Static` **NoSuchDatabaseError**: `DexieErrorConstructor`

#### Inherited from

Dexie.NoSuchDatabaseError

___

### <a id="notfounderror" name="notfounderror"></a> NotFoundError

▪ `Static` **NotFoundError**: `DexieErrorConstructor`

#### Inherited from

Dexie.NotFoundError

___

### <a id="openfailederror" name="openfailederror"></a> OpenFailedError

▪ `Static` **OpenFailedError**: `DexieErrorConstructor`

#### Inherited from

Dexie.OpenFailedError

___

### <a id="prematurecommiterror" name="prematurecommiterror"></a> PrematureCommitError

▪ `Static` **PrematureCommitError**: `DexieErrorConstructor`

#### Inherited from

Dexie.PrematureCommitError

___

### <a id="promise" name="promise"></a> Promise

▪ `Static` **Promise**: `PromiseExtendedConstructor`

#### Inherited from

Dexie.Promise

#### Defined in

node_modules/dexie/dist/dexie.d.ts:991

___

### <a id="quotaexceedederror" name="quotaexceedederror"></a> QuotaExceededError

▪ `Static` **QuotaExceededError**: `DexieErrorConstructor`

#### Inherited from

Dexie.QuotaExceededError

___

### <a id="readonlyerror" name="readonlyerror"></a> ReadOnlyError

▪ `Static` **ReadOnlyError**: `DexieErrorConstructor`

#### Inherited from

Dexie.ReadOnlyError

___

### <a id="schemaerror" name="schemaerror"></a> SchemaError

▪ `Static` **SchemaError**: `DexieErrorConstructor`

#### Inherited from

Dexie.SchemaError

___

### <a id="subtransactionerror" name="subtransactionerror"></a> SubTransactionError

▪ `Static` **SubTransactionError**: `DexieErrorConstructor`

#### Inherited from

Dexie.SubTransactionError

___

### <a id="timeouterror" name="timeouterror"></a> TimeoutError

▪ `Static` **TimeoutError**: `DexieErrorConstructor`

#### Inherited from

Dexie.TimeoutError

___

### <a id="transactioninactiveerror" name="transactioninactiveerror"></a> TransactionInactiveError

▪ `Static` **TransactionInactiveError**: `DexieErrorConstructor`

#### Inherited from

Dexie.TransactionInactiveError

___

### <a id="unknownerror" name="unknownerror"></a> UnknownError

▪ `Static` **UnknownError**: `DexieErrorConstructor`

#### Inherited from

Dexie.UnknownError

___

### <a id="unsupportederror" name="unsupportederror"></a> UnsupportedError

▪ `Static` **UnsupportedError**: `DexieErrorConstructor`

#### Inherited from

Dexie.UnsupportedError

___

### <a id="upgradeerror" name="upgradeerror"></a> UpgradeError

▪ `Static` **UpgradeError**: `DexieErrorConstructor`

#### Inherited from

Dexie.UpgradeError

___

### <a id="versionchangeerror" name="versionchangeerror"></a> VersionChangeError

▪ `Static` **VersionChangeError**: `DexieErrorConstructor`

#### Inherited from

Dexie.VersionChangeError

___

### <a id="versionerror" name="versionerror"></a> VersionError

▪ `Static` **VersionError**: `DexieErrorConstructor`

#### Inherited from

Dexie.VersionError

___

### <a id="addons" name="addons"></a> addons

▪ `Static` **addons**: (`db`: `Dexie`) => `void`[]

#### Inherited from

Dexie.addons

#### Defined in

node_modules/dexie/dist/dexie.d.ts:967

___

### <a id="currenttransaction" name="currenttransaction"></a> currentTransaction

▪ `Static` **currentTransaction**: `Transaction`

#### Inherited from

Dexie.currentTransaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:970

___

### <a id="default" name="default"></a> default

▪ `Static` **default**: `Dexie`

#### Inherited from

Dexie.default

#### Defined in

node_modules/dexie/dist/dexie.d.ts:990

___

### <a id="dependencies" name="dependencies"></a> dependencies

▪ `Static` **dependencies**: `DexieDOMDependencies`

#### Inherited from

Dexie.dependencies

#### Defined in

node_modules/dexie/dist/dexie.d.ts:989

___

### <a id="errnames" name="errnames"></a> errnames

▪ `Static` **errnames**: `DexieErrors`

#### Inherited from

Dexie.errnames

#### Defined in

node_modules/dexie/dist/dexie.d.ts:996

___

### <a id="maxkey" name="maxkey"></a> maxKey

▪ `Static` **maxKey**: `string` \| `void`[][]

#### Inherited from

Dexie.maxKey

#### Defined in

node_modules/dexie/dist/dexie.d.ts:985

___

### <a id="minkey" name="minkey"></a> minKey

▪ `Static` **minKey**: `number`

#### Inherited from

Dexie.minKey

#### Defined in

node_modules/dexie/dist/dexie.d.ts:986

___

### <a id="on" name="on"></a> on

▪ `Static` **on**: `GlobalDexieEvents`

#### Inherited from

Dexie.on

#### Defined in

node_modules/dexie/dist/dexie.d.ts:995

___

### <a id="semver" name="semver"></a> semVer

▪ `Static` **semVer**: `string`

#### Inherited from

Dexie.semVer

#### Defined in

node_modules/dexie/dist/dexie.d.ts:969

___

### <a id="version" name="version"></a> version

▪ `Static` **version**: `number`

#### Inherited from

Dexie.version

#### Defined in

node_modules/dexie/dist/dexie.d.ts:968

## Methods

### <a id="_createtransaction" name="_createtransaction"></a> \_createTransaction

▸ **_createTransaction**(`mode`, `storeNames`, `dbschema`, `parentTransaction?`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `IDBTransactionMode` |
| `storeNames` | `ArrayLike`<`string`\> |
| `dbschema` | `DbSchema` |
| `parentTransaction?` | ``null`` \| `Transaction` |

#### Returns

`Transaction`

#### Inherited from

Dexie.\_createTransaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:736

___

### <a id="backenddb" name="backenddb"></a> backendDB

▸ **backendDB**(): `IDBDatabase`

#### Returns

`IDBDatabase`

#### Inherited from

Dexie.backendDB

#### Defined in

node_modules/dexie/dist/dexie.d.ts:760

___

### <a id="close" name="close"></a> close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

Dexie.close

#### Defined in

node_modules/dexie/dist/dexie.d.ts:754

___

### <a id="delete" name="delete"></a> delete

▸ **delete**(): `PromiseExtended`<`void`\>

#### Returns

`PromiseExtended`<`void`\>

#### Inherited from

Dexie.delete

#### Defined in

node_modules/dexie/dist/dexie.d.ts:755

___

### <a id="dynamicallyopened" name="dynamicallyopened"></a> dynamicallyOpened

▸ **dynamicallyOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.dynamicallyOpened

#### Defined in

node_modules/dexie/dist/dexie.d.ts:759

___

### <a id="hasbeenclosed" name="hasbeenclosed"></a> hasBeenClosed

▸ **hasBeenClosed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.hasBeenClosed

#### Defined in

node_modules/dexie/dist/dexie.d.ts:757

___

### <a id="hasfailed" name="hasfailed"></a> hasFailed

▸ **hasFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.hasFailed

#### Defined in

node_modules/dexie/dist/dexie.d.ts:758

___

### <a id="isopen" name="isopen"></a> isOpen

▸ **isOpen**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.isOpen

#### Defined in

node_modules/dexie/dist/dexie.d.ts:756

___

### <a id="open" name="open"></a> open

▸ **open**(): `PromiseExtended`<`Dexie`\>

#### Returns

`PromiseExtended`<`Dexie`\>

#### Inherited from

Dexie.open

#### Defined in

node_modules/dexie/dist/dexie.d.ts:740

___

### <a id="table" name="table"></a> table

▸ **table**<`T`, `TKey`\>(`tableName`): `Table`<`T`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `TKey` | `IndexableType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`Table`<`T`, `TKey`\>

#### Inherited from

Dexie.table

#### Defined in

node_modules/dexie/dist/dexie.d.ts:741

___

### <a id="transaction" name="transaction"></a> transaction

▸ **transaction**<`U`\>(`mode`, `table`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `Table`<`any`, `IndexableType`\> |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:742

▸ **transaction**<`U`\>(`mode`, `table`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:743

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `Table`<`any`, `IndexableType`\> |
| `table2` | `Table`<`any`, `IndexableType`\> |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:744

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` |
| `table2` | `string` |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:745

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `table3`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `Table`<`any`, `IndexableType`\> |
| `table2` | `Table`<`any`, `IndexableType`\> |
| `table3` | `Table`<`any`, `IndexableType`\> |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:746

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `table3`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` |
| `table2` | `string` |
| `table3` | `string` |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:747

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `table3`, `table4`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `Table`<`any`, `IndexableType`\> |
| `table2` | `Table`<`any`, `IndexableType`\> |
| `table3` | `Table`<`any`, `IndexableType`\> |
| `table4` | `Table`<`any`, `IndexableType`\> |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:748

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `table3`, `table4`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` |
| `table2` | `string` |
| `table3` | `string` |
| `table4` | `string` |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:749

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `table3`, `table4`, `table5`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `Table`<`any`, `IndexableType`\> |
| `table2` | `Table`<`any`, `IndexableType`\> |
| `table3` | `Table`<`any`, `IndexableType`\> |
| `table4` | `Table`<`any`, `IndexableType`\> |
| `table5` | `Table`<`any`, `IndexableType`\> |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:750

▸ **transaction**<`U`\>(`mode`, `table`, `table2`, `table3`, `table4`, `table5`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` |
| `table2` | `string` |
| `table3` | `string` |
| `table4` | `string` |
| `table5` | `string` |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:751

▸ **transaction**<`U`\>(`mode`, `tables`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `tables` | `Table`<`any`, `IndexableType`\>[] |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:752

▸ **transaction**<`U`\>(`mode`, `tables`, `scope`): `PromiseExtended`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `tables` | `string`[] |
| `scope` | (`trans`: `Transaction`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`PromiseExtended`<`U`\>

#### Inherited from

Dexie.transaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:753

___

### <a id="unuse" name="unuse"></a> unuse

▸ **unuse**(`__namedParameters`): [`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Middleware`<{ `stack`: ``"dbcore"``  }\> |

#### Returns

[`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Inherited from

Dexie.unuse

#### Defined in

node_modules/dexie/dist/dexie.d.ts:763

▸ **unuse**(`__namedParameters`): [`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.name` | `string` |
| `__namedParameters.stack` | ``"dbcore"`` |

#### Returns

[`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Inherited from

Dexie.unuse

#### Defined in

node_modules/dexie/dist/dexie.d.ts:766

___

### <a id="use" name="use"></a> use

▸ **use**(`middleware`): [`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `Middleware`<`DBCore`\> |

#### Returns

[`MultiChainBrowserIndexedDB`](MultiChainBrowserIndexedDB.md)

#### Inherited from

Dexie.use

#### Defined in

node_modules/dexie/dist/dexie.d.ts:761

___

### <a id="version" name="version"></a> version

▸ **version**(`versionNumber`): `Version`

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionNumber` | `number` |

#### Returns

`Version`

#### Inherited from

Dexie.version

#### Defined in

node_modules/dexie/dist/dexie.d.ts:738

___

### <a id="events" name="events"></a> Events

▸ `Static` **Events**(`ctx?`): `DexieEventSet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx?` | `any` |

#### Returns

`DexieEventSet`

#### Inherited from

Dexie.Events

#### Defined in

node_modules/dexie/dist/dexie.d.ts:994

___

### <a id="asap" name="asap"></a> asap

▸ `Static` **asap**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`void`

#### Inherited from

Dexie.asap

#### Defined in

node_modules/dexie/dist/dexie.d.ts:984

___

### <a id="deepclone" name="deepclone"></a> deepClone

▸ `Static` **deepClone**<`T`\>(`obj`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`T`

#### Inherited from

Dexie.deepClone

#### Defined in

node_modules/dexie/dist/dexie.d.ts:983

___

### <a id="delbykeypath" name="delbykeypath"></a> delByKeyPath

▸ `Static` **delByKeyPath**(`obj`, `keyPath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `keyPath` | `string` |

#### Returns

`void`

#### Inherited from

Dexie.delByKeyPath

#### Defined in

node_modules/dexie/dist/dexie.d.ts:981

___

### <a id="delete" name="delete"></a> delete

▸ `Static` **delete**(`dbName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Dexie.delete

#### Defined in

node_modules/dexie/dist/dexie.d.ts:988

___

### <a id="exists" name="exists"></a> exists

▸ `Static` **exists**(`dbName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

Dexie.exists

#### Defined in

node_modules/dexie/dist/dexie.d.ts:987

___

### <a id="extendobservabilityset" name="extendobservabilityset"></a> extendObservabilitySet

▸ `Static` **extendObservabilitySet**(`target`, `newSet`): `ObservabilitySet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ObservabilitySet` |
| `newSet` | `ObservabilitySet` |

#### Returns

`ObservabilitySet`

#### Inherited from

Dexie.extendObservabilitySet

#### Defined in

node_modules/dexie/dist/dexie.d.ts:977

___

### <a id="getbykeypath" name="getbykeypath"></a> getByKeyPath

▸ `Static` **getByKeyPath**(`obj`, `keyPath`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `keyPath` | `string` |

#### Returns

`any`

#### Inherited from

Dexie.getByKeyPath

#### Defined in

node_modules/dexie/dist/dexie.d.ts:979

___

### <a id="getdatabasenames" name="getdatabasenames"></a> getDatabaseNames

▸ `Static` **getDatabaseNames**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Inherited from

Dexie.getDatabaseNames

#### Defined in

node_modules/dexie/dist/dexie.d.ts:972

▸ `Static` **getDatabaseNames**<`R`\>(`thenShortcut`): `Promise`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thenShortcut` | `ThenShortcut`<`string`[], `R`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

Dexie.getDatabaseNames

#### Defined in

node_modules/dexie/dist/dexie.d.ts:973

___

### <a id="ignoretransaction" name="ignoretransaction"></a> ignoreTransaction

▸ `Static` **ignoreTransaction**<`U`\>(`fn`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `U` |

#### Returns

`U`

#### Inherited from

Dexie.ignoreTransaction

#### Defined in

node_modules/dexie/dist/dexie.d.ts:975

___

### <a id="livequery" name="livequery"></a> liveQuery

▸ `Static` **liveQuery**<`T`\>(`fn`): `Observable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` \| `Promise`<`T`\> |

#### Returns

`Observable`<`T`\>

#### Inherited from

Dexie.liveQuery

#### Defined in

node_modules/dexie/dist/dexie.d.ts:976

___

### <a id="override" name="override"></a> override

▸ `Static` **override**<`F`\>(`origFunc`, `overridedFactory`): `F`

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `origFunc` | `F` |
| `overridedFactory` | (`fn`: `any`) => `any` |

#### Returns

`F`

#### Inherited from

Dexie.override

#### Defined in

node_modules/dexie/dist/dexie.d.ts:978

___

### <a id="setbykeypath" name="setbykeypath"></a> setByKeyPath

▸ `Static` **setByKeyPath**(`obj`, `keyPath`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `keyPath` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

Dexie.setByKeyPath

#### Defined in

node_modules/dexie/dist/dexie.d.ts:980

___

### <a id="shallowclone" name="shallowclone"></a> shallowClone

▸ `Static` **shallowClone**<`T`\>(`obj`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`T`

#### Inherited from

Dexie.shallowClone

#### Defined in

node_modules/dexie/dist/dexie.d.ts:982

___

### <a id="vip" name="vip"></a> vip

▸ `Static` **vip**<`U`\>(`scopeFunction`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeFunction` | () => `U` |

#### Returns

`U`

#### Inherited from

Dexie.vip

#### Defined in

node_modules/dexie/dist/dexie.d.ts:974

___

### <a id="waitfor" name="waitfor"></a> waitFor

▸ `Static` **waitFor**<`T`\>(`promise`, `timeoutMilliseconds?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `T` \| `PromiseLike`<`T`\> |
| `timeoutMilliseconds?` | `number` |

#### Returns

`Promise`<`T`\>

#### Inherited from

Dexie.waitFor

#### Defined in

node_modules/dexie/dist/dexie.d.ts:971
