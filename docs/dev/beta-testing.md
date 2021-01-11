---
id: beta-testing
title: So you want to run some pre-release software?
sidebar_label: Beta testing
---

We often need the community's help to test new applications. As the whole toolset is tracked in git, you can try new features quite easily.

:::warning Watch the fuck out!
Please make sure you only do this if you know what you're doing. A poorly written installer could easily destroy your entire machine beyond any hope of repair. If you do not know how you would get out of a completely broken install, do not attempt these steps!
:::

Anyway, if you're courageous enough, here's how you can test the latest and coolest stuff!

## The branch checkout dance

There are two types branches you might want to test. One that is made by the swizzin team, and one that is made on a repository forked from swizzin.

As soon as you're on the branch you need to be on, you just keep using `box` just like you usually would. Just watch out for `box update`s! read more about those [below](#preventing-updates).

### Branches on the swizzin repo

You can run the following quick set of commands

```bash
cd /etc/swizzin
sudo git fetch --all
sudo git checkout <branchname>
```

### Branches from any fork

Now this is a little more hands-on as you need to add the remote fork to your repository, but this can be done quite easily with the GitHub CLI tool.

You can install it quite easily by installing it from the [instructions here](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-apt)

After installing, make sure to run the following, and make sure to use the `HTTPs` mechanism when asked.

```bash
gh auth login
```

When you've got that done, you can just go browse to the specific PR you'd like to test, and find the `gh` code to use it in the "Open In" menu. This code will look like this for example

```bash
gh pr checkout 401
```

## Getting back to the master/stable branch

All you need to do is run `box update`, and you will be back right on track!

**HOWEVER**, none of the changes you made to swizzin can be undone. Make sure to remove any other apps or features which are not supported on the main repo, and reinstall them again when they're merged, or if there have been new commits on the beta branch since you updated.

If you are unsure what is safe to do, please ask the author of the branch to provide you with instructions on how to get back.

### Preventing updates
If you'd like to make sure that you do not go back to the master branch until you are ready, please read the [section on updating](setup#updating-mechanisms).