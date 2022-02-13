# Namespace: JsonFragment

## Table of contents

### Classes

- [AbiCoder](../classes/JsonFragment.AbiCoder.md)
- [ConstructorFragment](../classes/JsonFragment.ConstructorFragment.md)
- [ErrorFragment](../classes/JsonFragment.ErrorFragment.md)
- [EventFragment](../classes/JsonFragment.EventFragment.md)
- [Fragment](../classes/JsonFragment.Fragment.md)
- [FunctionFragment](../classes/JsonFragment.FunctionFragment.md)
- [Indexed](../classes/JsonFragment.Indexed.md)
- [Interface](../classes/JsonFragment.Interface.md)
- [LogDescription](../classes/JsonFragment.LogDescription.md)
- [ParamType](../classes/JsonFragment.ParamType.md)
- [TransactionDescription](../classes/JsonFragment.TransactionDescription.md)

### Interfaces

- [JsonFragment](../interfaces/JsonFragment.JsonFragment-1.md)
- [JsonFragmentType](../interfaces/JsonFragment.JsonFragmentType.md)
- [Result](../interfaces/JsonFragment.Result.md)

### Type aliases

- [CoerceFunc](JsonFragment.md#coercefunc)

### Variables

- [FormatTypes](JsonFragment.md#formattypes)
- [defaultAbiCoder](JsonFragment.md#defaultabicoder)

### Functions

- [checkResultErrors](JsonFragment.md#checkresulterrors)

## Type aliases

### <a id="coercefunc" name="coercefunc"></a> CoerceFunc

Ƭ **CoerceFunc**: (`type`: `string`, `value`: `any`) => `any`

#### Type declaration

▸ (`type`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:4

## Variables

### <a id="formattypes" name="formattypes"></a> FormatTypes

• **FormatTypes**: `Object`

#### Index signature

▪ [name: `string`]: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:20

___

### <a id="defaultabicoder" name="defaultabicoder"></a> defaultAbiCoder

• **defaultAbiCoder**: [`AbiCoder`](../classes/JsonFragment.AbiCoder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:16

## Functions

### <a id="checkresulterrors" name="checkresulterrors"></a> checkResultErrors

▸ **checkResultErrors**(`result`): { `error`: `Error` ; `path`: (`string` \| `number`)[]  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`Result`](../interfaces/JsonFragment.Result.md) |

#### Returns

{ `error`: `Error` ; `path`: (`string` \| `number`)[]  }[]

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:6
