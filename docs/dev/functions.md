---
id: functions
title: Functions to streamline our flow
sidebar_label: Functions
---

## Snippets
We are keeping a lot of reusable code in the `.vscode/*.code-snippets` files.

These give you auto-completions within VSCode and its derivatives, and have pre-defined fields which you can tab-through in order to skip to the next ones.

There _should_ be snippets available for all of the functions declared in `global.sh`.
## Functions

:::caution Work in progress!
We don't have this chapter written out fully yet. You can find out what most of these do and how they work in the `contributors.md` file in the main repo
:::

Please make sure to read the [structure](structure.md) documentation in case you intend to make some changes to these files, or introduce some new ones.

### Available from `global.sh`

Please check more on this out in the  [structure.md chapter on global.sh](structure.md#globals.sh)

#### `os` functions
_documented in the file itself_

#### `user` functions
_documented in the file itself_


#### Echo functions
_documented in Contributors.md_


#### Apt functions
_documented in Contributors.md_

### Functions that need to be `source`d


#### `utils`
This file contains various functionality which is difficult to separate or justify an entire file for. It is **not** included in `globals.sh` by default.

Functions can be moved out of this file and split into their own if it makes sense, but that's a really loose definition and is usually discussed at PR-level. Obviously, if that happens, corrective action needs to be done wherever the functions were used, and the scripts that use it should vaguely be re-tested.

#### Python functions for `pyenv` and `venv`