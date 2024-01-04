---
title: "Looking at Helix over Neovim"
date: 2023-11-30
description: I'm moving from VS Code to the Terminal and Helix looks hot! Great out of the box functionality to get you going.
youtube: true
---
Recently, I shared on Mastodon that I was making an effort to [reduce, if not eliminate, my mouse and trackpad usage](https://hachyderm.io/@kevinctofel/111467329889511725). Every time your hands leave the keyboard, that's time you're not typing. And it adds up over time.

To that end, I stopped using VS Code and [migrated over to Neovim in my terminal](https://hachyderm.io/@kevinctofel/111466987217762124). While I find the configuration of Neovim daunting, LazyVim goes a long way to mitigate that. It doesn't hurt that there's a great [LazyVim kickstarter on GitHub](https://github.com/folke/kickstart.nvim) to configure most of the important features.

<!-- excerpt -->

Just as I was getting settled into Neovim, I heard about [Helix](https://helix-editor.com/). Like Neovim it's a Vi/Vim like text editor. And it's still in the works. But after a few days of using it, I'm leaning towards Helix right now.

{% youtube 'tGYvUXYN-c0', 'Alberto Ballesteros - Artista Sin Obra' %}

For starters, Helix is built in Rust. Aside from impoved memory protection, Rust apps are fast apps. I haven't noticed much in the way of speed differences but then again, I'm not working with thousands of lines of code.

Right out of the box, Helix has many great base features. So I'm spending less time learning how to configure it. Of course, being a work in progress means it doesn't have as many features. There's no plug-in support yet, for example. Still, most of what I added to Neovim via plugins is already there in Helix. I just need basic features to get my work done.

![Helix editor](/img/helix-editor-example-two.png)

Support for the Language Server Protocol is there, so you can get code autocompletion and a limited number of code snippet support. Auto-closing character pairs, such as for brackets and braces is there. Treesitter parsing is supported as is file and word fuzzy finding, similar to Telescope on Neovim. No, there's not much more than that without plugins, but I don't need much more personally.

At the moment, Helix is meeting my minimal needs, keeping my hands busier and simple to use. I think, for now, it's where my development work will continue.

