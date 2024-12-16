---
title: Week in review - Dec. 15, 2024
description: New web interface for the second brain, moving domains and functional programming challenges
date: 2024-12-15
---

## Back to a regular work schedule

After two full weeks off, I went back for 32 hours this week. That really boosts my step count as I average between 4.5 and 7 miles of walking during a shift. But it also tires me out. I come home at 1pm, 2pm, or in one case, 4pm, after work and have zero energy to do the things I **want** to do.

I'm not sure how to mitigate this. Is it afternoon coffee? A short, 90 minute after work nap and hope for enough of a recharge to tinker? I don't know the answer but I have to find one. 

---

## Making the second brain more portable

I'm thrilled with the value I'm getting from journaling (mostly) daily on my personal site. Yes, it's now my personal site as I switched from a Cloudflare development site to [my own domain for hosting the second brain](https://www.kctofel.com). Chalk up at least one "to do" item done this week. I still want to add long-form content to the mix so I have an all-in-one destination for my personal knowledge, journal entries and longform thoughts.

I also want a simple way to capture notes when away from my computer. My phone is the obvious choice here. So I resurrected some old code I put together last year for a Github CMS interface and hooked it up to my second brain site.

{% imagePlaceholder "./src/assets/images/blog/IMG_1137.jpeg", "Web interface for second brain notes" %}

You can see the two test notes I created using this interface: They're just text, converted to Markdown and sent to a specific folder in a Github repo for now. It's ugly as sin but functionally it works as an MVP, or minimum viable product. 

{% imagePlaceholder "./src/assets/images/blog/IMG_1138.jpeg", "Test note published" %}

I do have to alter where I save the text notes because I just shipped them into the December folder of my Journal entries for testing. Thinking a "Notes" or "Inbox" folder to hold these is the way to go. So I'll keep working on that this week.

Think I'll call this small utility "GitDatNote". 🤓

---

## Replacing a wireless charging system

As a minimialist, I don't buy much. Like, at all. However, the wireless charger for my Apple devices broke a few months ago. So after a little research, I dropped $60 on this ESR Qi2 3-in-1 device. And I love it.

{% imagePlaceholder "./src/assets/images/blog/IMG_0226.jpeg", "New wireless charger" %}

You don't see the phone in the above image for two reasons. First, I wanted to highlight the small fan holes on the charger, which quietly keep the phone cooler. This lets the Qi2 charging pad maintain its fastest wireless transfer rate. Second, I used my phone to take the photo. 😉

Aside from the fast, quiet phone charging, this model charges my AirPods Pro case and my Apple Watch. And there's what might be the most interesting aspect of this charger. It has a USB-C port where the watch charging pad goes. Included in the package was a small charging pad with a male USB-C port that plugs into the main charger here. When traveling, I can take that part with me and plug it in to any USB-C port to charge my watch. Clever and useful!

{% imagePlaceholder "./src/assets/images/blog/IMG_0227.jpeg", "New wireless charger" %}

---

## I'm not functional with functional programming

After completing my Asteroids in Python assignment for class last week, I turned to the next lesson. It's on Functional Programming (FP). And I get the overall concept of FP: Keeping data immutable.

Yet, for the first coding assignment, I'm struggling. The example code returns an error because it's attempting to mutate a tuple in in Python and tuples are immutable.

{% imagePlaceholder "./src/assets/images/blog/IMG_0228.jpeg", "Functional programming assignment" %}

I only spent about an hour on the assignment and it was frustrating. Any of my coding efforts to create and append to a new tuple have resulted in errors. Obviously, I'm not sure why, or I wouldn't be writing about it. So my plan tomorrow is to tackle this again after taking some time off from the problem.


## Ideas, Projects and upcoming To-Do’s:

    [ ] Work on Wishlist application
    [X] Move the second brain content to my personal domain.
    [ ] Investigage the difference between notes and articles using Eleventy Notes to see if this can all be tied together.
    [ ] Draft out a simple web clipping service I can create and self host)
    [X] Start building a web app to save thoughts to this Github repo
    [ ] Modify web app for note capture to save notes in a central folder.
