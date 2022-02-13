# Class: MultichainProviders

## Table of contents

### Constructors

- [constructor](MultichainProviders.md#constructor)

### Properties

- [chainIdDefault](MultichainProviders.md#chainiddefault)
- [getNonce](MultichainProviders.md#getnonce)
- [providers](MultichainProviders.md#providers)

### Methods

- [call](MultichainProviders.md#call)
- [connect](MultichainProviders.md#connect)
- [estimateGas](MultichainProviders.md#estimategas)
- [getBalance](MultichainProviders.md#getbalance)
- [getBlock](MultichainProviders.md#getblock)
- [getBlockNumber](MultichainProviders.md#getblocknumber)
- [getBlockWithTransactions](MultichainProviders.md#getblockwithtransactions)
- [getCode](MultichainProviders.md#getcode)
- [getFeeData](MultichainProviders.md#getfeedata)
- [getGasPrice](MultichainProviders.md#getgasprice)
- [getLogs](MultichainProviders.md#getlogs)
- [getLogsDecoded](MultichainProviders.md#getlogsdecoded)
- [getNetwork](MultichainProviders.md#getnetwork)
- [getProvider](MultichainProviders.md#getprovider)
- [getResolver](MultichainProviders.md#getresolver)
- [getStorageAt](MultichainProviders.md#getstorageat)
- [getTransaction](MultichainProviders.md#gettransaction)
- [getTransactionCount](MultichainProviders.md#gettransactioncount)
- [getTransactionReceipt](MultichainProviders.md#gettransactionreceipt)
- [getTransactions](MultichainProviders.md#gettransactions)
- [lookupAddress](MultichainProviders.md#lookupaddress)
- [resolveName](MultichainProviders.md#resolvename)
- [sendTransaction](MultichainProviders.md#sendtransaction)
- [waitForTransaction](MultichainProviders.md#waitfortransaction)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MultichainProviders**(`chainId?`, `urlOrKey?`, `type?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |
| `urlOrKey?` | `string` |
| `type?` | `string` |

#### Defined in

[MultichainProviders.ts:19](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L19)

## Properties

### <a id="chainiddefault" name="chainiddefault"></a> chainIdDefault

• **chainIdDefault**: `number` = `1`

#### Defined in

[MultichainProviders.ts:13](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L13)

___

### <a id="getnonce" name="getnonce"></a> getNonce

• **getNonce**: (`address`: `string`, `chainId`: `number`) => `Promise`<`number`\>

#### Type declaration

▸ (`address`, `chainId`): `Promise`<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `number` |

##### Returns

`Promise`<`number`\>

#### Defined in

[MultichainProviders.ts:113](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L113)

___

### <a id="providers" name="providers"></a> providers

• **providers**: `ProviderList` = `{}`

#### Defined in

[MultichainProviders.ts:14](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L14)

## Methods

### <a id="call" name="call"></a> call

▸ **call**(`transaction`, `chainId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |
| `chainId` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[MultichainProviders.ts:161](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L161)

___

### <a id="connect" name="connect"></a> connect

▸ **connect**(`chainId`, `urlOrKey`, `type?`): `void` \| `Provider`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chainId` | `number` | `undefined` |
| `urlOrKey` | `string` | `undefined` |
| `type` | `string` | `'jsonrpc'` |

#### Returns

`void` \| `Provider`

#### Defined in

[MultichainProviders.ts:33](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L33)

___

### <a id="estimategas" name="estimategas"></a> estimateGas

▸ **estimateGas**(`transaction`, `chainId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |
| `chainId` | `number` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[MultichainProviders.ts:165](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L165)

___

### <a id="getbalance" name="getbalance"></a> getBalance

▸ **getBalance**(`address`, `chainId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[MultichainProviders.ts:97](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L97)

___

### <a id="getblock" name="getblock"></a> getBlock

▸ **getBlock**(`block`, `chainId`): `Promise`<`Block`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `number` |
| `chainId` | `number` |

#### Returns

`Promise`<`Block`\>

#### Defined in

[MultichainProviders.ts:116](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L116)

___

### <a id="getblocknumber" name="getblocknumber"></a> getBlockNumber

▸ **getBlockNumber**(`chainId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

[MultichainProviders.ts:148](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L148)

___

### <a id="getblockwithtransactions" name="getblockwithtransactions"></a> getBlockWithTransactions

▸ **getBlockWithTransactions**(`block`, `chainId`): `Promise`<`Block`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `number` |
| `chainId` | `number` |

#### Returns

`Promise`<`Block`\>

#### Defined in

[MultichainProviders.ts:120](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L120)

___

### <a id="getcode" name="getcode"></a> getCode

▸ **getCode**(`address`, `chainId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[MultichainProviders.ts:101](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L101)

___

### <a id="getfeedata" name="getfeedata"></a> getFeeData

▸ **getFeeData**(`chainId`): `Promise`<`FeeData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<`FeeData`\>

#### Defined in

[MultichainProviders.ts:156](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L156)

___

### <a id="getgasprice" name="getgasprice"></a> getGasPrice

▸ **getGasPrice**(`chainId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[MultichainProviders.ts:152](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L152)

___

### <a id="getlogs" name="getlogs"></a> getLogs

▸ **getLogs**(`filter`, `chainId`): `Promise`<`Log`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Filter` |
| `chainId` | `number` |

#### Returns

`Promise`<`Log`[]\>

#### Defined in

[MultichainProviders.ts:139](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L139)

___

### <a id="getlogsdecoded" name="getlogsdecoded"></a> getLogsDecoded

▸ **getLogsDecoded**(`chainId`, `filter`, `interface_`, `fragment`): `Promise`<{ `log`: `Log` = eventLog; `parsed`: `Result`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `filter` | `Filter` |
| `interface_` | `Interface` |
| `fragment` | `EventFragment` |

#### Returns

`Promise`<{ `log`: `Log` = eventLog; `parsed`: `Result`  }[]\>

#### Defined in

[MultichainProviders.ts:67](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L67)

___

### <a id="getnetwork" name="getnetwork"></a> getNetwork

▸ **getNetwork**(`chainId`): `Promise`<`Network`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<`Network`\>

#### Defined in

[MultichainProviders.ts:144](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L144)

___

### <a id="getprovider" name="getprovider"></a> getProvider

▸ **getProvider**(`chainId`): `Provider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Provider`

#### Defined in

[MultichainProviders.ts:60](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L60)

___

### <a id="getresolver" name="getresolver"></a> getResolver

▸ **getResolver**(`name`, `chainId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultichainProviders.ts:125](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L125)

___

### <a id="getstorageat" name="getstorageat"></a> getStorageAt

▸ **getStorageAt**(`address`, `position`, `chainId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `position` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[MultichainProviders.ts:105](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L105)

___

### <a id="gettransaction" name="gettransaction"></a> getTransaction

▸ **getTransaction**(`hash`, `chainId`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

[MultichainProviders.ts:169](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L169)

___

### <a id="gettransactioncount" name="gettransactioncount"></a> getTransactionCount

▸ **getTransactionCount**(`address`, `chainId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

[MultichainProviders.ts:109](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L109)

___

### <a id="gettransactionreceipt" name="gettransactionreceipt"></a> getTransactionReceipt

▸ **getTransactionReceipt**(`hash`, `chainId`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[MultichainProviders.ts:173](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L173)

___

### <a id="gettransactions" name="gettransactions"></a> getTransactions

▸ **getTransactions**(`chainId`, `address`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `address` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MultichainProviders.ts:83](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L83)

___

### <a id="lookupaddress" name="lookupaddress"></a> lookupAddress

▸ **lookupAddress**(`name`, `chainId`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[MultichainProviders.ts:130](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L130)

___

### <a id="resolvename" name="resolvename"></a> resolveName

▸ **resolveName**(`name`, `chainId`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[MultichainProviders.ts:134](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L134)

___

### <a id="sendtransaction" name="sendtransaction"></a> sendTransaction

▸ **sendTransaction**(`transaction`, `chainId`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |
| `chainId` | `number` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

[MultichainProviders.ts:177](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L177)

___

### <a id="waitfortransaction" name="waitfortransaction"></a> waitForTransaction

▸ **waitForTransaction**(`hash`, `chainId`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[MultichainProviders.ts:181](https://github.com/web3-systems/multichain-client/blob/3c0132e/src/MultichainProviders.ts#L181)
