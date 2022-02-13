# Interface: Hook

## Table of contents

### Properties

- [event](Hook.md#event)

### Methods

- [callback](Hook.md#callback)

## Properties

### <a id="event" name="event"></a> event

• **event**: ``"insert"`` \| ``"update"`` \| ``"remove"`` \| ``"findAndRemove"`` \| ``"findAndUpdate"``

#### Defined in

[packages/multichain-database/src/types.ts:34](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/types.ts#L34)

## Methods

### <a id="callback" name="callback"></a> callback

▸ **callback**(`collection`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `data?` | `any` |

#### Returns

`void`

#### Defined in

[packages/multichain-database/src/types.ts:35](https://github.com/web3-systems/multichain-in-memory-database/blob/625f1cd/src/types.ts#L35)
