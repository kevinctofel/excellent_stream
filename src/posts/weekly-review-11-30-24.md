--- 
title: Week in review - Nov. 30, 2024
description: I manually rebuilt a Wordpress server, installed a Linux system snapshot tool and spent discretionary income for the first time this month.
date: 2024-11-30                                    
---    

### Back to blogging

For some reason, I haven't felt like writing in a long time. In my head, I miss it. But in practice, I haven't seem enthusiastic to actually write. I spent some time this past week thinking about why that is and came up with a few reasons. 

I won't get into them right now. Suffice it to say, I'm rethinking my tools, my workflows and how I spend my time. 

During that process, I came up with "work in progress" approach to capture daily notes. Rather than commit to sharing useful bits from those daily writings, I'm trying a week ending summary; hence, this post. More to follow on the system as it evolves.

### A deeper dive into Wordpress

This week started with a website that was down. Obviously, a plethora of sites go down on a regular basis even though that's not what we want. The diffence in this particular instance? It was a website I helped implement for a neighbor.

I worked with a talented web designer, who is also a friend of this neighbor, to setup a low-cost Wordpress site back in July. My neighbor was paying around $300 a year for the site from a managed provider. I set up a $5 monthly Linode server and we made the switch.

Unfortunately, for some unknown reason, the entire MySQL database for the site was empty this week. Very strange! Working with backup data, we restored the site but not before I rebuilt everything from scratch on the server side.

I used Linode's automated system to get Ubuntu 22.04.1 LTS on the server but opted not to use the one-click Wordpress install as I did back in June. That meant manually installing and configuring Apache, PHP, MySQL, and then Wordpress. With the server and software working, we restored the Wordpress backup and tweaked a few minor anomolies. Lastly, I installed Certbot to secure a new SSL cert as the old one had expired anyway.

Long story short: It took about 6 hours to restore the site, but now I'm confident it's running optimally. And just to be safe, we added Linode's server backup service for $2 a month. Just in case.

### Backing up my Linux systems

The site outage and restoration process got me thinking about my own personal systems. So I installed [Timeshift](https://github.com/linuxmint/timeshift) on both my Linux laptop and my Linux desktop. This open source solution is now maintained by the Linux Mint folks as it is included with their distro. But anyone can use it. 

Effectively, it captures periodic snapshots of my systems (even my Home directory if I want) in case I ever need to restore things. I like it so far but I do wish I could save the backups on my homelab server. 

Unfortunately, Timeshift doesn't support network drives. I'll either use another file sync solution to offload the local backups to my homelab server or I'll look into other solutions entirely. Either way, I have a minimal solution in place for now.

### My personal search engine

Speaking of my homelab, I've been using TrueNas lately. It's fine but I may switch back to Unraid. Regardless of that, I installed an instance of [SearXNG](https://docs.searxng.org/), which is a private personal search engine. 

Technically, SearXNG is a metasearch engine, capable of getting search results from over four dozen engines. When I search, for example, I'm getting consolidated, real time results from Google, Bing, Wikipedia and a few other places that I selected in the SearXNG configuration. 

The best part? None of my search queries are associated with me, making this a lot more private. Big tech isn't getting any personal data to create a profile on me.
 
Additionally, there are no ads or trackers in the results. When I search on my instance of SearXNG, my server makes API queries to the various engines and renders only the infomation I'm looking for. 

{% imagePlaceholder "./src/assets/images/blog/personal_search.png", "SearXNG running in a browser from my homelab server" %}

I already have a domain for my homelab apps, so I set this up on a subdomain called "search". I also configured a [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) so I can access my personal search engine from any device on any network.

A few friends and my son also use it; Cloudflare has a nice authentication process to limit users. I'd open it up publicly if I was running this in the cloud, but since it's running at home, I've limited access.

### Programming in Python

A few weeks go, I started an assigment at [Boot.dev](https://boot.dev/) where I learn more about Python and back-end systems. This one is actually a fun one: Creating a simplified version of the classic Asteroids video game in Python!

I stepped away from this challenge for two weeks where I left off with decent progress. I had the player and random asteroids rendering at 60fps, for example. (The asteriods are just circles; remember this is a simplified version.)

Keyboard controls were working to rotate or move the player around. And I had collision detection between the player and asteroids implemented. When the player collides with any asteroid object, the game ends.

The next step, and where I picked up this week, was to implement bullets. It took longer than I expected but I did get it working on a basic level. Pressing the space bar shoots a bullet in the player facing direction. Holding the space bar shoots a stream of bullets, limited to one every 0.3 seconds. 


{% imagePlaceholder "./src/assets/images/blog/Asteroid_bullets.png", "Asteroids player shooting bullets" %}

With the holidays this week, that's as far as I got. So bullets pass right through asteriods at the moment. Next step is to reuse the collision detection code between bullet objects and asteroid objects. 

### Entertainment

- Binged Season 2 of The Big Bang Theory. The cultural references in the early seasons are comical because the series started in the era of flip-phones, MySpace and early Twitter.
- Played a bit of the original Assassin's Creed: The Director's Cut game. It took a while to get the controller setup working properly. Using [x360ce](https://www.x360ce.com/) did the trick.
- Started reading ["Building a Second Brain" by Tiago Forte](https://www.buildingasecondbrain.com/book) on my Onyx Boox Palma.
- Enjoyed the holiday lights event at [Longwood Gardens](https://longwoodgardens.org/y) with the family.

{% imagePlaceholder "./src/assets/images/blog/Longwood_Gardens.JPEG", "Holiday lights at night in Longwood Gardens" %}


### Ideas, Projects and upcoming To-Do's:
- Switch homelab from TrueNas to Unraid mainly because I found Unraid easier to use and it offers more apps / containers.
- Finish Asteroids in Python
- Work on Wishlist application
- Look into using Obsidian as the front end for blog posts going forward. [Simple setup and explanation video here](https://youtu.be/vHKuy7BqMMM?si=Hfr60OBTVuc6gu4L).
