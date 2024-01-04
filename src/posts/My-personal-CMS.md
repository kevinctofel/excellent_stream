---
title: "My personal CMS (prototype)"
date: 2023-11-25
description: I decided that since I recently started tinkering with 11ty, I would create a web-based CMS, or content management system, for it.
---
As a developer in training for a while (too long, TBH), I don't have a robust project portfolio. So I decided to rectify that with a personal project. It's possible, although unlikely, others would want to use this project. 

I decided that since I recently started tinkering with [11ty](https://11ty.dev) as an SSG, or static site generator, I would create a web-based CMS, or content management system, for it.

Basically, instead of requiring a GitHub repo of my 11ty blog content locally, writing posts in Markdown, and pushing the post to GitHub, I wanted a web app for this. This way, I could blog from any computer and not need GitHub installed on it.

There are likely several approaches that would work for this, but I decided to use the GitHub API. I don't have enough experience working with external APIs, for starters. And it gives me the opportunity to learn more about asynchronous JavaScript.

So far, I have the bare minimum working. And I do mean *bare* minimum.

Right now, I can click a button to retrieve the file names of the already published blog posts. I can also publish a new blog post although I'm manually adding the front matter to the Markdown file. Removing that limitation is on my TODO list.

But it does work and I feel a little bit of self-accomplishment.

{% imagePlaceholder "./src/assets/images/blog/11tyCMSPrototype.png", "My CMS Prototype" %}

I'm using what I know, and what I want to know for this effort. That means basic web dev bits such as HTML / CSS / JavaScript. (OK, not too much of the CSS yet as you can tell by the atrocious design; I haven't spent any time on that yet.)

I've also taken a React class, so I went with React for some of the components. Maybe not the best choice but it's better than no choice. I didn't want to focus on the stack decisions because that's not going to build me a project for the portfolio.

In any case, I'm going to dogfood this CMS myself going forward. That makes sense since I'm writing it for me. Every post here will be published through my app, unless noted otherwise. 

Oh and speaking of CSS earlier: I haven't done anything to change the look and feel of the blog itself. This is effectively an 11ty base starter with a few color changes I made.
