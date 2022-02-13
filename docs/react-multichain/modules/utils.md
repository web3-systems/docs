# Namespace: utils

## Table of contents

### Functions

- [compareNonceToInboundTransactionsCount](utils.md#comparenoncetoinboundtransactionscount)
- [compareNonceToOutboundTransactionsCount](utils.md#comparenoncetooutboundtransactionscount)
- [compareNonceToTotalTransactionsCount](utils.md#comparenoncetototaltransactionscount)
- [createAccountTransasctionsFilter](utils.md#createaccounttransasctionsfilter)
- [destructureClientsAndValidate](utils.md#destructureclientsandvalidate)
- [initializeMultichains](utils.md#initializemultichains)
- [isCacheValid](utils.md#iscachevalid)
- [isHookMetaFailure](utils.md#ishookmetafailure)
- [isHookMetaSuccess](utils.md#ishookmetasuccess)

## Functions

### <a id="comparenoncetoinboundtransactionscount" name="comparenoncetoinboundtransactionscount"></a> compareNonceToInboundTransactionsCount

▸ **compareNonceToInboundTransactionsCount**(`nonce`, `inboundTransactionCount`, `cachedTotal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce` | `number` |
| `inboundTransactionCount` | `number` |
| `cachedTotal` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/react-multichain/src/utils/compareNonceToInboundTransactionsCount.ts:1](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/compareNonceToInboundTransactionsCount.ts#L1)

___

### <a id="comparenoncetooutboundtransactionscount" name="comparenoncetooutboundtransactionscount"></a> compareNonceToOutboundTransactionsCount

▸ **compareNonceToOutboundTransactionsCount**(`nonce`, `transactionCount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce` | `number` |
| `transactionCount` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/react-multichain/src/utils/compareNonceToOutboundTransactionsCount.ts:1](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/compareNonceToOutboundTransactionsCount.ts#L1)

___

### <a id="comparenoncetototaltransactionscount" name="comparenoncetototaltransactionscount"></a> compareNonceToTotalTransactionsCount

▸ **compareNonceToTotalTransactionsCount**(`nonce`, `allTransactionCount`, `inboundCountCached`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce` | `number` |
| `allTransactionCount` | `number` |
| `inboundCountCached` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/react-multichain/src/utils/compareNonceToTotalTransactionsCount.ts:1](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/compareNonceToTotalTransactionsCount.ts#L1)

___

### <a id="createaccounttransasctionsfilter" name="createaccounttransasctionsfilter"></a> createAccountTransasctionsFilter

▸ **createAccountTransasctionsFilter**(`address`, `type`): { `$and`: `undefined` ; `$or`: `undefined` ; `from`: { `$eq`: `string` = address }  } \| { `$and`: ({ `from`: `undefined` ; `to`: { `$eq`: `string` = address }  } \| { `from`: { `$ne`: `string` = address } ; `to`: `undefined`  })[] ; `$or`: `undefined` ; `from`: `undefined`  } \| { `$and`: ({ `from`: `undefined` ; `to`: { `$eq`: `string` = address }  } \| { `from`: { `$eq`: `string` = address } ; `to`: `undefined`  })[] ; `$or`: `undefined` ; `from`: `undefined`  } \| { `$and`: `undefined` ; `$or`: ({ `from`: { `$contains`: `string` = address } ; `to`: `undefined`  } \| { `from`: `undefined` ; `to`: { `$contains`: `string` = address }  })[] ; `from`: `undefined`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `type` | ``"from"`` \| ``"to"`` \| ``"self"`` \| ``"all"`` |

#### Returns

{ `$and`: `undefined` ; `$or`: `undefined` ; `from`: { `$eq`: `string` = address }  } \| { `$and`: ({ `from`: `undefined` ; `to`: { `$eq`: `string` = address }  } \| { `from`: { `$ne`: `string` = address } ; `to`: `undefined`  })[] ; `$or`: `undefined` ; `from`: `undefined`  } \| { `$and`: ({ `from`: `undefined` ; `to`: { `$eq`: `string` = address }  } \| { `from`: { `$eq`: `string` = address } ; `to`: `undefined`  })[] ; `$or`: `undefined` ; `from`: `undefined`  } \| { `$and`: `undefined` ; `$or`: ({ `from`: { `$contains`: `string` = address } ; `to`: `undefined`  } \| { `from`: `undefined` ; `to`: { `$contains`: `string` = address }  })[] ; `from`: `undefined`  }

#### Defined in

[packages/react-multichain/src/utils/createAccountTransasctionsFilter.ts:1](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/createAccountTransasctionsFilter.ts#L1)

___

### <a id="destructureclientsandvalidate" name="destructureclientsandvalidate"></a> destructureClientsAndValidate

▸ **destructureClientsAndValidate**(`clients`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clients` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `databaseClient` | `any` |
| `providerClient` | `any` |
| `scannerClient` | `any` |

#### Defined in

packages/react-multichain/src/utils/destructureClientsAndValidate.ts:1

___

### <a id="initializemultichains" name="initializemultichains"></a> initializeMultichains

▸ **initializeMultichains**(`scanners`, `providers`, `_databases`, `chains?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanners` | `any` |
| `providers` | `any` |
| `_databases` | `any` |
| `chains?` | [`ChainsConfig`](../interfaces/ChainsConfig.md)[] |

#### Returns

`void`

#### Defined in

[packages/react-multichain/src/utils/initializeMultichains.ts:3](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/initializeMultichains.ts#L3)

___

### <a id="iscachevalid" name="iscachevalid"></a> isCacheValid

▸ **isCacheValid**(`filter?`, `nonce`, `txCount`, `accountMeta`): `boolean`

**`name`** isCacheValid

**`description`** Compares nonce, transactions count, and account metadata to determin cache validity.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filter` | ``"from"`` \| ``"to"`` \| ``"self"`` \| ``"all"`` | `'from'` |
| `nonce` | `number` | `undefined` |
| `txCount` | `number` | `undefined` |
| `accountMeta` | `any` | `undefined` |

#### Returns

`boolean`

boolean Cache validity status

#### Defined in

[packages/react-multichain/src/utils/isCacheValid.ts:14](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/isCacheValid.ts#L14)

___

### <a id="ishookmetafailure" name="ishookmetafailure"></a> isHookMetaFailure

▸ **isHookMetaFailure**(`meta`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`HookState`](../interfaces/HookState.md) |

#### Returns

`boolean`

#### Defined in

[packages/react-multichain/src/utils/isHookMetaFailure.ts:3](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/isHookMetaFailure.ts#L3)

___

### <a id="ishookmetasuccess" name="ishookmetasuccess"></a> isHookMetaSuccess

▸ **isHookMetaSuccess**(`meta`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`HookState`](../interfaces/HookState.md) |

#### Returns

`boolean`

#### Defined in

[packages/react-multichain/src/utils/isHookMetaSuccess.ts:3](https://github.com/web3-systems/react-multichain/blob/b697018/src/utils/isHookMetaSuccess.ts#L3)
