---
title: "Moving my Linux Home directory to a second SSD"
date: 2023-11-26
description: Linux Home directory eating up an SSD? Here's how to move it to another one.
youtube: true
---
I ran out of space on my laptop's internal SSD over the weekend. Most of the storage is used by my Home directory. Ugh.

Luckily, I'm running Linux on a 2021 Dell XPS 15, which is generally fantastic. And it has two NVMe slots inside. Even better: it's simple to crack open the laptop and add a second SSD drive. 

I actually had a second one installed already. In addition to the 250 GB SSD for the operating system, I have a 512 GB SSD decided to Steam games. However, I stopped playing Steam games on the XPS 15 once I bought a Steam Deck last year.

So... I have 512 GB of storage space I can reclaim on the Dell. Using the included gnome-disk-utility Linux app on my Dell, I formatted the second SSD. And then I proceeded to make a copy of my Home directory on the second SSD.

Honestly, I wasn't sure exactly how to do this, although I had a high level understanding of the process. Thankfully, one of [my favorite Linux YouTubers](https://www.youtube.com/@DistroTube) shared the step-by-step approach:

{% youtube 'tEnnEhziLn8' %}

I admit I was a bit scared. With Linux, your Home directory is your identity with your personal memories, as it were. And yet, by following the steps in the video, the process went flawlessly.

I went from having a 250 GB SSD with under a gigabyte free to having 221 GB free after moving my Home directory. 

{% imagePlaceholder "./src/assets/images/blog/Main_SSD.png", "My main hard drive" %}

And I still have tons of room on the SSD with the Home directory as well.

{% imagePlaceholder "./src/assets/images/blog/Home_dir.png", "My home directory" %}

I probably should have just set the Dell XPS 15 up with two drives this way in the first place. That would have avoided the semi-scary situation. It's OK though. I'm all sorted now.

