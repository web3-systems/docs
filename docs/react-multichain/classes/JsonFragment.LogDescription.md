# Class: LogDescription

[JsonFragment](../modules/JsonFragment.md).LogDescription

## Hierarchy

- `Description`<[`LogDescription`](JsonFragment.LogDescription.md)\>

  ↳ **`LogDescription`**

## Table of contents

### Constructors

- [constructor](JsonFragment.LogDescription.md#constructor)

### Properties

- [args](JsonFragment.LogDescription.md#args)
- [eventFragment](JsonFragment.LogDescription.md#eventfragment)
- [name](JsonFragment.LogDescription.md#name)
- [signature](JsonFragment.LogDescription.md#signature)
- [topic](JsonFragment.LogDescription.md#topic)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new LogDescription**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.args` | [`Result`](../interfaces/JsonFragment.Result.md) |
| `info.eventFragment` | [`EventFragment`](JsonFragment.EventFragment.md) |
| `info.name` | `string` |
| `info.signature` | `string` |
| `info.topic` | `string` |

#### Inherited from

Description<LogDescription\>.constructor

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:13

## Properties

### <a id="args" name="args"></a> args

• `Readonly` **args**: [`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:13

___

### <a id="eventfragment" name="eventfragment"></a> eventFragment

• `Readonly` **eventFragment**: [`EventFragment`](JsonFragment.EventFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:9

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:10

___

### <a id="signature" name="signature"></a> signature

• `Readonly` **signature**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:11

___

### <a id="topic" name="topic"></a> topic

• `Readonly` **topic**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:12
