# Class: MultiscanClient

## Table of contents

### Constructors

- [constructor](MultiscanClient.md#constructor)

### Properties

- [chainIdDefault](MultiscanClient.md#chainiddefault)
- [clients](MultiscanClient.md#clients)
- [keys](MultiscanClient.md#keys)

### Methods

- [client](MultiscanClient.md#client)
- [connect](MultiscanClient.md#connect)
- [getAccountBalance](MultiscanClient.md#getaccountbalance)
- [getAccountBalanceMulti](MultiscanClient.md#getaccountbalancemulti)
- [getAccountERC20TransferEvents](MultiscanClient.md#getaccounterc20transferevents)
- [getAccountERC721TransferEvents](MultiscanClient.md#getaccounterc721transferevents)
- [getAccountMinedBlocks](MultiscanClient.md#getaccountminedblocks)
- [getAccountTransactions](MultiscanClient.md#getaccounttransactions)
- [getAccountTransactionsInternal](MultiscanClient.md#getaccounttransactionsinternal)
- [getAccountTransactionsInternalByBlockRange](MultiscanClient.md#getaccounttransactionsinternalbyblockrange)
- [getAccountTransactionsInternalByHash](MultiscanClient.md#getaccounttransactionsinternalbyhash)
- [getBlockCountdown](MultiscanClient.md#getblockcountdown)
- [getBlockDailyAvgBlockSize](MultiscanClient.md#getblockdailyavgblocksize)
- [getBlockFromTimestamp](MultiscanClient.md#getblockfromtimestamp)
- [getBlockReward](MultiscanClient.md#getblockreward)
- [getContractAbi](MultiscanClient.md#getcontractabi)
- [getContractSourceCode](MultiscanClient.md#getcontractsourcecode)
- [getExplorer](MultiscanClient.md#getexplorer)
- [getLogs](MultiscanClient.md#getlogs)
- [getStatsTokenSupply](MultiscanClient.md#getstatstokensupply)
- [getTransactionReceiptStatus](MultiscanClient.md#gettransactionreceiptstatus)
- [getTransactionStatus](MultiscanClient.md#gettransactionstatus)
- [setApiKey](MultiscanClient.md#setapikey)
- [setApiKeyByServiceProvider](MultiscanClient.md#setapikeybyserviceprovider)
- [setChainId](MultiscanClient.md#setchainid)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MultiscanClient**(`chainId?`, `apiKey?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |
| `apiKey?` | `string` |

#### Defined in

[MultiscanClient.ts:48](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L48)

## Properties

### <a id="chainiddefault" name="chainiddefault"></a> chainIdDefault

• **chainIdDefault**: `number` = `1`

#### Defined in

[MultiscanClient.ts:44](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L44)

___

### <a id="clients" name="clients"></a> clients

• `Readonly` **clients**: `Clients` = `{}`

#### Defined in

[MultiscanClient.ts:46](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L46)

___

### <a id="keys" name="keys"></a> keys

• `Readonly` **keys**: `ApiKeys` = `{}`

#### Defined in

[MultiscanClient.ts:45](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L45)

## Methods

### <a id="client" name="client"></a> client

▸ **client**(`chainId`, `apiKey`): `AxiosInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `apiKey` | `string` |

#### Returns

`AxiosInstance`

#### Defined in

[MultiscanClient.ts:63](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L63)

___

### <a id="connect" name="connect"></a> connect

▸ **connect**(`chainId`, `apiKey?`): `AxiosInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `apiKey?` | `string` |

#### Returns

`AxiosInstance`

#### Defined in

[MultiscanClient.ts:68](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L68)

___

### <a id="getaccountbalance" name="getaccountbalance"></a> getAccountBalance

▸ **getAccountBalance**(`address`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:103](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L103)

___

### <a id="getaccountbalancemulti" name="getaccountbalancemulti"></a> getAccountBalanceMulti

▸ **getAccountBalanceMulti**(`addressList`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressList` | `string`[] |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:108](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L108)

___

### <a id="getaccounterc20transferevents" name="getaccounterc20transferevents"></a> getAccountERC20TransferEvents

▸ **getAccountERC20TransferEvents**(`contract`, `address`, `config`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `address` | `string` |
| `config` | [`BlockPagination`](../interfaces/BlockPagination.md) |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:151](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L151)

___

### <a id="getaccounterc721transferevents" name="getaccounterc721transferevents"></a> getAccountERC721TransferEvents

▸ **getAccountERC721TransferEvents**(`contract`, `address`, `config`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `address` | `string` |
| `config` | [`BlockPagination`](../interfaces/BlockPagination.md) |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:161](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L161)

___

### <a id="getaccountminedblocks" name="getaccountminedblocks"></a> getAccountMinedBlocks

▸ **getAccountMinedBlocks**(`address`, `config`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `config` | [`AccountMinedBlocksConfig`](../interfaces/AccountMinedBlocksConfig.md) |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:171](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L171)

___

### <a id="getaccounttransactions" name="getaccounttransactions"></a> getAccountTransactions

▸ **getAccountTransactions**(`address`, `config`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `config` | [`BlockPagination`](../interfaces/BlockPagination.md) |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:113](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L113)

___

### <a id="getaccounttransactionsinternal" name="getaccounttransactionsinternal"></a> getAccountTransactionsInternal

▸ **getAccountTransactionsInternal**(`address`, `config`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `config` | [`BlockPagination`](../interfaces/BlockPagination.md) |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:122](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L122)

___

### <a id="getaccounttransactionsinternalbyblockrange" name="getaccounttransactionsinternalbyblockrange"></a> getAccountTransactionsInternalByBlockRange

▸ **getAccountTransactionsInternalByBlockRange**(`startblock`, `endblock`, `config`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `startblock` | `string` |
| `endblock` | `string` |
| `config` | [`BlockPagination`](../interfaces/BlockPagination.md) |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:136](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L136)

___

### <a id="getaccounttransactionsinternalbyhash" name="getaccounttransactionsinternalbyhash"></a> getAccountTransactionsInternalByHash

▸ **getAccountTransactionsInternalByHash**(`txhash`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txhash` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:131](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L131)

___

### <a id="getblockcountdown" name="getblockcountdown"></a> getBlockCountdown

▸ **getBlockCountdown**(`blockno`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockno` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:184](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L184)

___

### <a id="getblockdailyavgblocksize" name="getblockdailyavgblocksize"></a> getBlockDailyAvgBlockSize

▸ **getBlockDailyAvgBlockSize**(`startdate`, `enddate`, `sort?`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startdate` | `string` | `undefined` |
| `enddate` | `string` | `undefined` |
| `sort` | ``"asc"`` \| ``"desc"`` | `'asc'` |
| `chainId?` | `number` | `undefined` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:189](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L189)

___

### <a id="getblockfromtimestamp" name="getblockfromtimestamp"></a> getBlockFromTimestamp

▸ **getBlockFromTimestamp**(`timestamp`, `closest`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `string` |
| `closest` | ``"before"`` \| ``"after"`` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:199](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L199)

___

### <a id="getblockreward" name="getblockreward"></a> getBlockReward

▸ **getBlockReward**(`blockno`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockno` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:208](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L208)

___

### <a id="getcontractabi" name="getcontractabi"></a> getContractAbi

▸ **getContractAbi**(`address`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:217](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L217)

___

### <a id="getcontractsourcecode" name="getcontractsourcecode"></a> getContractSourceCode

▸ **getContractSourceCode**(`address`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:222](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L222)

___

### <a id="getexplorer" name="getexplorer"></a> getExplorer

▸ **getExplorer**(`chainId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |

#### Returns

`void`

#### Defined in

[MultiscanClient.ts:80](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L80)

___

### <a id="getlogs" name="getlogs"></a> getLogs

▸ **getLogs**(`address`, `config`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `config` | `LogsGetConfig` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:231](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L231)

___

### <a id="getstatstokensupply" name="getstatstokensupply"></a> getStatsTokenSupply

▸ **getStatsTokenSupply**(`contractaddress`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractaddress` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:240](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L240)

___

### <a id="gettransactionreceiptstatus" name="gettransactionreceiptstatus"></a> getTransactionReceiptStatus

▸ **getTransactionReceiptStatus**(`address`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:249](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L249)

___

### <a id="gettransactionstatus" name="gettransactionstatus"></a> getTransactionStatus

▸ **getTransactionStatus**(`address`, `chainId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultiscanClient.ts:254](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L254)

___

### <a id="setapikey" name="setapikey"></a> setApiKey

▸ **setApiKey**(`chainId`, `apiKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `apiKey` | `string` |

#### Returns

`void`

#### Defined in

[MultiscanClient.ts:84](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L84)

___

### <a id="setapikeybyserviceprovider" name="setapikeybyserviceprovider"></a> setApiKeyByServiceProvider

▸ **setApiKeyByServiceProvider**(`serviceProvider`, `apiKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProvider` | `string` |
| `apiKey` | `string` |

#### Returns

`void`

#### Defined in

[MultiscanClient.ts:89](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L89)

___

### <a id="setchainid" name="setchainid"></a> setChainId

▸ **setChainId**(`chainId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`void`

#### Defined in

[MultiscanClient.ts:95](https://github.com/web3-systems/multiscan-client/blob/3401c15/src/MultiscanClient.ts#L95)
