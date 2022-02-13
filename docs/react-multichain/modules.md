# @web3-systems/react-multichain

## Table of contents

### Namespaces

- [IsDatabaseClientReady](modules/IsDatabaseClientReady.md)
- [IsProviderClientReady](modules/IsProviderClientReady.md)
- [IsScannerClientReady](modules/IsScannerClientReady.md)
- [JsonFragment](modules/JsonFragment.md)
- [utils](modules/utils.md)

### Enumerations

- [HookStatus](enums/HookStatus.md)

### Interfaces

- [ABI](interfaces/ABI.md)
- [ChainsConfig](interfaces/ChainsConfig.md)
- [EntityAccount](interfaces/EntityAccount.md)
- [EntityContract](interfaces/EntityContract.md)
- [HookState](interfaces/HookState.md)
- [MultiChainProviderState](interfaces/MultiChainProviderState.md)

### Variables

- [IsDatabaseClientReady](modules.md#isdatabaseclientready)
- [IsProviderClientReady](modules.md#isproviderclientready)
- [IsScannerClientReady](modules.md#isscannerclientready)
- [MultiChainContext](modules.md#multichaincontext)

### Functions

- [DatabaseListCollections](modules.md#databaselistcollections)
- [MultiChainProvider](modules.md#multichainprovider)
- [databaseFind](modules.md#databasefind)
- [databaseInsert](modules.md#databaseinsert)
- [findOrCreateAccount](modules.md#findorcreateaccount)
- [findOrCreateContract](modules.md#findorcreatecontract)
- [useChain](modules.md#usechain)
- [useClients](modules.md#useclients)
- [useClientsInitialized](modules.md#useclientsinitialized)
- [useDatabaseFind](modules.md#usedatabasefind)
- [useDatabaseGetAccounts](modules.md#usedatabasegetaccounts)
- [useDatabaseGetContracts](modules.md#usedatabasegetcontracts)
- [useGetAccountTransactions](modules.md#usegetaccounttransactions)
- [useGetContract](modules.md#usegetcontract)
- [useInitializeDefaultCollections](modules.md#useinitializedefaultcollections)
- [useIsDatabaseClientReady](modules.md#useisdatabaseclientready)
- [useIsProviderClientReady](modules.md#useisproviderclientready)
- [useIsScannerClientReady](modules.md#useisscannerclientready)
- [useMultiChain](modules.md#usemultichain)
- [useOnDatabaseReady](modules.md#useondatabaseready)
- [useSyncHookStates](modules.md#usesynchookstates)

## Variables

### <a id="isdatabaseclientready" name="isdatabaseclientready"></a> IsDatabaseClientReady

• **IsDatabaseClientReady**: `Object`

#### Call signature

▸ (`__namedParameters`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `IsDatabaseClientReadyProps` |

##### Returns

`Element`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultProps` | { `IsReady`: `string` = '🟢'; `NotReady`: `string` = '🔴'; `label`: `string` = 'Database: ' } |
| `defaultProps.IsReady` | `string` |
| `defaultProps.NotReady` | `string` |
| `defaultProps.label` | `string` |

#### Defined in

packages/react-multichain/src/components/IsDatabaseClientReady.tsx:16

___

### <a id="isproviderclientready" name="isproviderclientready"></a> IsProviderClientReady

• **IsProviderClientReady**: `Object`

#### Call signature

▸ (`__namedParameters`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `IsProviderClientReadyProps` |

##### Returns

`Element`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultProps` | { `IsReady`: `string` = '🟢'; `NotReady`: `string` = '🔴'; `label`: `string` = 'Provider: ' } |
| `defaultProps.IsReady` | `string` |
| `defaultProps.NotReady` | `string` |
| `defaultProps.label` | `string` |

#### Defined in

packages/react-multichain/src/components/IsProviderClientReady.tsx:16

___

### <a id="isscannerclientready" name="isscannerclientready"></a> IsScannerClientReady

• **IsScannerClientReady**: `Object`

#### Call signature

▸ (`__namedParameters`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `IsScannerClientReadyProps` |

##### Returns

`Element`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultProps` | { `IsReady`: `string` = '🟢'; `NotReady`: `string` = '🔴'; `label`: `string` = 'Scanner: ' } |
| `defaultProps.IsReady` | `string` |
| `defaultProps.NotReady` | `string` |
| `defaultProps.label` | `string` |

#### Defined in

packages/react-multichain/src/components/IsScannerClientReady.tsx:16

___

### <a id="multichaincontext" name="multichaincontext"></a> MultiChainContext

• **MultiChainContext**: `Context`<{ `isDatabaseClientReady`: `boolean` ; `isProviderClientReady`: `boolean` ; `isReady`: `boolean` ; `isScannerClientReady`: `boolean` ; `observers`: `any` ; `getDatabase`: (`_chainId`: `number`) => `any` ; `getDatabaseClient`: () => `undefined` \| `MultichainInMemoryDatabase` ; `getProvider`: (`_chainId`: `number`) => `any` ; `getProviderClient`: () => `undefined` \| `MultichainProviders` ; `getScanner`: (`_chainId`: `number`) => `any` ; `getScannerClient`: () => `undefined` \| `MultiscanClient`  }\>

#### Defined in

[packages/react-multichain/src/MultiChainContext.ts:9](https://github.com/web3-systems/react-multichain/blob/b697018/src/MultiChainContext.ts#L9)

## Functions

### <a id="databaselistcollections" name="databaselistcollections"></a> DatabaseListCollections

▸ `Const` **DatabaseListCollections**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `DatabaseListCollectionsProps` |

#### Returns

`Element`

#### Defined in

packages/react-multichain/src/components/DatabaseListCollections.tsx:11

___

### <a id="multichainprovider" name="multichainprovider"></a> MultiChainProvider

▸ **MultiChainProvider**(`props`): `ReactNode`

**`name`** MultiChainProvider

**`description`** State management for reads/writes requests across multiple EVM chains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `MultiChainProviderProps` |

#### Returns

`ReactNode`

ReactNode

#### Defined in

[packages/react-multichain/src/MultiChainProvider.tsx:45](https://github.com/web3-systems/react-multichain/blob/b697018/src/MultiChainProvider.tsx#L45)

___

### <a id="databasefind" name="databasefind"></a> databaseFind

▸ **databaseFind**(`databaseClient`, `entity`, `_query`, `_chainId`, `setState`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseClient` | `any` |
| `entity` | `string` |
| `_query` | `any` |
| `_chainId` | `number` |
| `setState` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/react-multichain/src/core/databaseFind.ts:3

___

### <a id="databaseinsert" name="databaseinsert"></a> databaseInsert

▸ **databaseInsert**(`databaseClient`, `collection`, `document`, `chainId`, `setState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseClient` | `any` |
| `collection` | `string` |
| `document` | `any` |
| `chainId` | `number` |
| `setState` | `any` |

#### Returns

`void`

#### Defined in

packages/react-multichain/src/core/databaseInsert.ts:3

___

### <a id="findorcreateaccount" name="findorcreateaccount"></a> findOrCreateAccount

▸ **findOrCreateAccount**(`client`, `address`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `MultichainInMemoryDatabase` |
| `address` | `string` |

#### Returns

`any`

#### Defined in

packages/react-multichain/src/core/findOrCreateAccount.ts:3

___

### <a id="findorcreatecontract" name="findorcreatecontract"></a> findOrCreateContract

▸ **findOrCreateContract**(`client`, `address`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `MultiChainDatabaseClient` |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/react-multichain/src/core/findOrCreateContract.ts:3](https://github.com/web3-systems/react-multichain/blob/b697018/src/core/findOrCreateContract.ts#L3)

___

### <a id="usechain" name="usechain"></a> useChain

▸ **useChain**(`chainId?`): `HookUseChainOutput`

**`name`** useChain

**`description`** Connect to the scanner, provider and database for the given chainId.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chainId` | `number` | `1` |

#### Returns

`HookUseChainOutput`

HookUseChainOutput

#### Defined in

[packages/react-multichain/src/hooks/useChain.ts:21](https://github.com/web3-systems/react-multichain/blob/b697018/src/hooks/useChain.ts#L21)

___

### <a id="useclients" name="useclients"></a> useClients

▸ **useClients**(`chainId?`): `HookUseClientsOutput`

**`name`** useClients

**`description`** Connect to scanner, provider and database class instances.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chainId` | `number` | `1` |

#### Returns

`HookUseClientsOutput`

HookUseClientsOutput

#### Defined in

[packages/react-multichain/src/hooks/useClients.ts:33](https://github.com/web3-systems/react-multichain/blob/b697018/src/hooks/useClients.ts#L33)

___

### <a id="useclientsinitialized" name="useclientsinitialized"></a> useClientsInitialized

▸ **useClientsInitialized**(`clients`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clients` | `any` |

#### Returns

`any`

#### Defined in

packages/react-multichain/src/hooks/useClientsInitialized.ts:3

___

### <a id="usedatabasefind" name="usedatabasefind"></a> useDatabaseFind

▸ **useDatabaseFind**(`entity`, `query`, `chainId?`): `HookUseDatabaseFind`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `query` | `any` |
| `chainId?` | `number` |

#### Returns

`HookUseDatabaseFind`

#### Defined in

packages/react-multichain/src/hooks/useDatabaseFind.ts:21

___

### <a id="usedatabasegetaccounts" name="usedatabasegetaccounts"></a> useDatabaseGetAccounts

▸ **useDatabaseGetAccounts**(`query?`, `chainId?`): `HookUseDatabaseGetAccounts`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `chainId?` | `number` |

#### Returns

`HookUseDatabaseGetAccounts`

#### Defined in

packages/react-multichain/src/hooks/useDatabaseGetAccounts.ts:21

___

### <a id="usedatabasegetcontracts" name="usedatabasegetcontracts"></a> useDatabaseGetContracts

▸ **useDatabaseGetContracts**(`query?`, `chainId?`): `HookUseDatabaseGetContracts`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `chainId?` | `number` |

#### Returns

`HookUseDatabaseGetContracts`

#### Defined in

packages/react-multichain/src/hooks/useDatabaseGetContracts.ts:21

___

### <a id="usegetaccounttransactions" name="usegetaccounttransactions"></a> useGetAccountTransactions

▸ **useGetAccountTransactions**(`address`, `filter?`, `chainId?`): `HookUseGetAccountTransactionsOutput`

**`name`** useGetAccountTransactions

**`description`** Fetch inbound/outbound transactions for an account.

**`dev`** Fetches transactions from the scanner and database clients.
     First checking the cache, then fetching from the scanner if the cache is invalid.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `filter` | ``"from"`` \| ``"to"`` \| ``"self"`` \| ``"all"`` | `'from'` |
| `chainId?` | `number` | `undefined` |

#### Returns

`HookUseGetAccountTransactionsOutput`

#### Defined in

[packages/react-multichain/src/hooks/useGetAccountTransactions.ts:36](https://github.com/web3-systems/react-multichain/blob/b697018/src/hooks/useGetAccountTransactions.ts#L36)

___

### <a id="usegetcontract" name="usegetcontract"></a> useGetContract

▸ **useGetContract**(`address`, `chainId?`): `HookUseGetContractOutput`

**`name`** useGetContract

**`description`** Fetch smart contract

**`dev`** Fetches smart contract from the database and/or scanner clients.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`HookUseGetContractOutput`

#### Defined in

packages/react-multichain/src/hooks/useGetContract.ts:31

___

### <a id="useinitializedefaultcollections" name="useinitializedefaultcollections"></a> useInitializeDefaultCollections

▸ **useInitializeDefaultCollections**(`chainId?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chainId` | `number` | `1` |

#### Returns

`boolean`

#### Defined in

[packages/react-multichain/src/hooks/useInitializeDefaultCollections.ts:16](https://github.com/web3-systems/react-multichain/blob/b697018/src/hooks/useInitializeDefaultCollections.ts#L16)

___

### <a id="useisdatabaseclientready" name="useisdatabaseclientready"></a> useIsDatabaseClientReady

▸ **useIsDatabaseClientReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/react-multichain/src/hooks/useIsDatabaseClientReady.ts:3

___

### <a id="useisproviderclientready" name="useisproviderclientready"></a> useIsProviderClientReady

▸ **useIsProviderClientReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/react-multichain/src/hooks/useIsProviderClientReady.ts:3

___

### <a id="useisscannerclientready" name="useisscannerclientready"></a> useIsScannerClientReady

▸ **useIsScannerClientReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/react-multichain/src/hooks/useIsScannerClientReady.ts:3

___

### <a id="usemultichain" name="usemultichain"></a> useMultiChain

▸ **useMultiChain**(): `React.ContextType`<typeof [`MultiChainContext`](modules.md#multichaincontext)\>

#### Returns

`React.ContextType`<typeof [`MultiChainContext`](modules.md#multichaincontext)\>

#### Defined in

[packages/react-multichain/src/useMultiChain.tsx:5](https://github.com/web3-systems/react-multichain/blob/b697018/src/useMultiChain.tsx#L5)

___

### <a id="useondatabaseready" name="useondatabaseready"></a> useOnDatabaseReady

▸ **useOnDatabaseReady**(`action`, `clientReady`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `Function` |
| `clientReady` | `boolean` |

#### Returns

`void`

#### Defined in

packages/react-multichain/src/hooks/useOnDatabaseReady.ts:5

___

### <a id="usesynchookstates" name="usesynchookstates"></a> useSyncHookStates

▸ **useSyncHookStates**(`setState`, `meta`, `hookState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `setState` | `Function` |
| `meta` | `any` |
| `hookState` | `any` |

#### Returns

`void`

#### Defined in

packages/react-multichain/src/hooks/useSyncHookStates.ts:5
