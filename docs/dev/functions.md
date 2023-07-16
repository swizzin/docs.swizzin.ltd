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

Please check more on this out in the  [structure.md chapter on global.sh](/dev/structure#globals.sh)

#### `swizdb` functions

These functions provide a solution to storing arbitrary information organised by keys peristently on the system. This is achieved with simple files, and not any db software.

The keys can contain slashes in order to define further structure to the database, in a smilar fashion Windows uses registry keys. Therefore, `abc/def` will create a directory called `abc` and store the key `def` in it. You can then retrieve that value under the key `abc/def`.

Available functions are:

- `swizdb set $key $value`
    - Stores the content of `$value` under the `$key`
- `swizdb get $key`
    - Returns the content of `$key`
    - Returns exit code `1` in case the key is not present
- `swizdb path $key`
    - Returns the full system path of the file which stores the content of `$key`
    - Returns exit code `1` in case the key is not present
- `swizdb clear $key`
    - Removes the key and clears its stored value from the filesystem
    - Returns exit code `1` in case the key is not present
- `swizdb list [$key]`
    - Returns a list of present and set full keys
    - Can filter results based on a key "directory".

#### `os` functions

_Documented in the file itself_

#### `user` functions

_Documented in the file itself_

#### Echo functions

_Documented in Contributors.md_

#### Apt functions

_Documented in Contributors.md_

### Functions that need to be `source`d

#### `utils`

This file contains various functionality which is difficult to separate or justify an entire file for. It is **not** included in `globals.sh` by default.

Functions can be moved out of this file and split into their own if it makes sense, but that's a really loose definition and is usually discussed at PR-level. Obviously, if that happens, corrective action needs to be done wherever the functions were used, and the scripts that use it should vaguely be re-tested.

#### Python functions for `pyenv` and `venv`

_Documented inline_

These functions handle the installation of the required python versions and creating virtual environments for applications. Please refer to the existing use of these functions in source code.

#### `tests`

_Documented **thoroughly** inline_

This file contains small tests which will often attempt to guess at best testing values unless supplied (e.g. ports, or baseurls). Please read the inline documentation thoroughly.
