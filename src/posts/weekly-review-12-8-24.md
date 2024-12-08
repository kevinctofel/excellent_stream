---
title: Week in review - Dec. 8, 2024
description: UNRAID and new apps are on my homelab as I move away from "big tech". I also finished coding Asteroids in Python and have new project ideas.
date: 2024-12-08
---

## Back to UNRAID

Last week, I mentioned I was trying TrueNAS on my homelab server. However, I find the UI a bit cumbersome and (at times) non-intuitive. So it was back to UNRAID. For some reason, it took [several attempts to get the server to boot from my UNRAID USB flash drive](https://secondbrain-5us.pages.dev/n/journal/2024/december/12-01-2024/). Eventually I got it working. Sometimes I wish UNRAID would move away from the "run this system on a flash drive" approach.

{% imagePlaceholder "./src/assets/images/blog/IMG_0220.png", "Unraid server" %}

In fact, I'd like to see all of the homelab / NAS server software step it up. Most consumers will never be able to get one of these systems working to their fullest potential. And I get why. Applications aren't simple "one click" installs. Typically, you're looking at a containerized solution, most often with Docker. 

There's **no** way my non-techie friends would understand the configuration options with Docker, no matter how good the accompanying documentation is. This market segment needs to do better to abstract as much of the complexities away to make true home server appliances that more people will buy and use.

OK, soapbox rant over. Let's look at what I installed on my fresh UNRAID device:

- SearXNG, a [private meta-search engine](https://secondbrain-5us.pages.dev/n/software/private-search-engine-with-searxng/) with no tracking or ads.
- Wallabag for web clippings and read-it-later links. I'm not sold on this one yet though.
- Immich, a Google Photos replacement. I [imported my nearly 25,000 images and videos from Google](https://secondbrain-5us.pages.dev/n/journal/2024/december/12-04-2024/), without any isues.

{% imagePlaceholder "./src/assets/images/blog/IMG_0204.png", "Immich photo import" %}

I may try to code my own, simple read-it-later app, which would be good programming practice.

## Asteroids in Python

Speaking of programming, I tackled the last bits of my current coding assignment for class. We're re-creating a simplified version of the classic arcade game, Asteroids, using Python. Last week, I left off trying to figure out collision detection between player bullets and asteroids. That actually wasn't difficult since I already had collision detection code for the player itself and asteroids.

Reusing the same function, but passing bullet objects, did the trick. And then it got difficult. Each of these collisions needed to split large or medium sized asteriods into a pair of smaller ones. A little math and a random number gives direction to the new asteroids. I got this working but each bullet hit was initially spawning bunches of new asteriods, not just two. 
After 30 minutes of debugging, I realized I never _removed_ the initial bullet, so it was continuing to hit the newly spawned asteroids, which... of course, generated even more of them!

{% imagePlaceholder "./src/assets/images/blog/IMG_0218.png", "Asteroids in Python" %}

Long story short, my assignment is complete! I really enjoyed this one as it was both fun and a great learning experience. Now I can check this one off from last week's to-dos.

## Obsidian, Github and my second brain

Also on my to-list last week was to investigate the use of Obsidian and Github for my new second brain. This is where I capture useful information for later reference. I've expanded the idea to include a daily journal. And this latter exercise has been quite helpful. I can easily refer back to the journal entries for this weekly review. I can keep track of my projects and include reference information to keep the project moving forward. And it gives me dedicated downtime each day to reflect on life.

Initially, I set this up using the [11ty static site generator](https://www.11ty.dev). I'm also using [this Eleventy Notes theme](https://eleventy-notes.sandroroth.com), which is highly customizable. 11ty uses Markdown files to create the static HTML pages. Obsidian also leans heavily on Markdown. So the installation of a [Git plugin for Obisidian](https://github.com/Vinzent03/obsidian-git) did the trick. All of my content is stored on Github but I now have Obsidian as a nicer front end to write.

{% imagePlaceholder "./src/assets/images/blog/IMG_0221.png", "Obsidian Git" %}

I'll continue to use this setup daily to see how well it works for me in the long run. I have the second brain site on a developent URL with Cloudflare at the moment. However, this week, I plan to move to my _kctofel.com_ domain. I may even use it to publish articles like this, providing a one-stop destination for journal entries, second brain knowledge and (on the front page) blog posts. Adding that to my weekly to-do list now.

## Ideas, Projects and upcoming To-Do’s:
- [X] Switch homelab from TrueNas to Unraid mainly because I found Unraid easier to use and it offers more apps / containers.
- [X] Finish Asteroids in Python
- [ ] Work on Wishlist application
- [X] Look into using Obsidian as the front end for blog posts going forward. Simple setup and explanation video here.
- [ ] Move the second brain content to my personal domain.
- [ ] Investigage the difference between notes and articles using Eleventy Notes to see if this can all be tied together.
- [ ] Draft out a simple web clipping service I can create and self host)
