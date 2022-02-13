# Class: TransactionDescription

[JsonFragment](../modules/JsonFragment.md).TransactionDescription

## Hierarchy

- `Description`<[`TransactionDescription`](JsonFragment.TransactionDescription.md)\>

  ↳ **`TransactionDescription`**

## Table of contents

### Constructors

- [constructor](JsonFragment.TransactionDescription.md#constructor)

### Properties

- [args](JsonFragment.TransactionDescription.md#args)
- [functionFragment](JsonFragment.TransactionDescription.md#functionfragment)
- [name](JsonFragment.TransactionDescription.md#name)
- [sighash](JsonFragment.TransactionDescription.md#sighash)
- [signature](JsonFragment.TransactionDescription.md#signature)
- [value](JsonFragment.TransactionDescription.md#value)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new TransactionDescription**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.args` | [`Result`](../interfaces/JsonFragment.Result.md) |
| `info.functionFragment` | [`FunctionFragment`](JsonFragment.FunctionFragment.md) |
| `info.name` | `string` |
| `info.sighash` | `string` |
| `info.signature` | `string` |
| `info.value` | `BigNumber` |

#### Inherited from

Description<TransactionDescription\>.constructor

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:13

## Properties

### <a id="args" name="args"></a> args

• `Readonly` **args**: [`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:18

___

### <a id="functionfragment" name="functionfragment"></a> functionFragment

• `Readonly` **functionFragment**: [`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:16

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:17

___

### <a id="sighash" name="sighash"></a> sighash

• `Readonly` **sighash**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:20

___

### <a id="signature" name="signature"></a> signature

• `Readonly` **signature**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:19

___

### <a id="value" name="value"></a> value

• `Readonly` **value**: `BigNumber`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:21
