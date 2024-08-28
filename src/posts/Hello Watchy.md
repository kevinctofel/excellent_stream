---
title: Hello Watchy
description: After a soldering debacle with an old Pebble, I bought a DIY Watchy smartwatch. It's basic but good.
date: 2024-08-28
---

[Earlier this month](https://myconscious.stream/blog/Minimalism-and-life-update-for-August/), I mentioned that I ordered an original Pebble watch for $22 on eBay. The watch arrived in perfect condition, save for a dead battery. No problem! I'll just spend $18 at iFixit for a replacement, I thought. I got the new battery and attempted to solder it to the Pebble PCB but I ended up ruining the watch. It's a shame, really.

After lamenting over my personal e-waste contribution, I decided to [order a Watchy](https://sqfmi.com/watchy/). It's one of the few spiritual successors to the Pebble and costs around $60. Watchy uses an ESP32 microprocessor and true e-paper display with a 200 x 200 resolution. It's also a watch you put together yourself. Best of all (at least to me) the replaceable battery plugs in directly to the board. 🤣

{% imagePlaceholder "./src/assets/images/blog/IMG_0870.jpeg", "Watchy PCB and battery" %}

Once I connected the battery, the Watchy's display fired right up, albeit in dark mode. You'll notice next to the battery indicator, there's a WiFi icon. Yes, the ESP32 has a WiFi radio. A Bluetooth one as well, but don't get too excited about that. There's no companion phone app to sync data or send notifications over Bluetooth. Again this is a DIY project so additional features and functionality are up to you and/or the Watchy community.

{% imagePlaceholder "./src/assets/images/blog/IMG_0872.jpeg", "Watchy eInk display" %}

That said, I think anyone can put this together. It took me all of 15 minutes with about 10 of them trying to insert the small buttons into their proper slots. The included two piece case is a little fiddly with such small parts. After that, I configured Watchy to connect to my home's wireless network and synchronized the time and date. Done!

{% imagePlaceholder "./src/assets/images/blog/IMG_0877.jpeg", "Watchy working on my wrist" %}

The included case is bit thick for my taste at around 15mm. Early Watchy owners used a simple strap directly on the PCB and wore their device caseless. I do like that minimal look but the whole setup is bit fragile to me. Thankfully, Watchy sells thinner cases and I have one that's around 10mm thin on the way. The [entire Watchy project is open source](https://github.com/sqfmi/Watchy) so you can get CAD files for the hardware and [for the cases](https://github.com/sqfmi/watchy-cases). I don't have a 3D printer, which is why I purchased a case for $35.

{% imagePlaceholder "./src/assets/images/blog/IMG_0878.jpeg", "Watchy thickness on my wrist" %}

Back to the DIY bit now. As [Terence Eden noted in his 2023 Watchy review](https://shkspr.mobi/blog/2023/06/review-watchy-an-eink-watch-full-of-interesting-compromises/), any software modifications require you to *compile your code changes* and upload them to the Watchy over a micro-USB cable. Yeah, this isn't a consumer product. You'll be using the Arduino IDE (or similar application) to modify C++ files. And I haven't touched C++ in two decades. 😱

Still, I like the potential possibilities here. So I grabbed my Linux laptop running Arch (...BTW), installed the Arduino IDE and got to business. I have some ideas on what features I'd like to add on my Watchy but just getting the coding environment setup took me nearly an hour. I kept struggling to get Watchy recognized and connected to the Arduino IDE for quite a while. My eventual solution was to install the python3-pyserial package and my Linux username to the UUCP group. 🙄

Regardless, that let the Arduino IDE connect to the ESP32 board while Watchy was in bootloader mode. Rather than try to code up some new functionality, I decided to make a minor change and switch from dark to light mode on the watch. That was a simple code tweak in one of the C++ files and a good test for modifying and uploading firmware to Watchy. And it went perfectly fine although I had to manually reboot the watch. The Arduino IDE said it sent a reset command but nothing ever happened. That's OK.

{% imagePlaceholder "./src/assets/images/blog/IMG_0880.jpeg", "Watchy in light mode" %}

Some relatively easy(!) immediate changes that I want to make include:
-	Possibly going back to dark mode; the light mode text doesn't look as nice
-	Switching from 24 to 12 hour time
- 	Change the local temperature to Fahrenheit.
-	Use a different font. I'm a fan of JetBrains Mono although I don't know how well it will look or render here

Long term, I'd like to use the Watchy radios to pull other data from a phone or the web. Things like my next calendar event, Mastodon replies, weather advisory notifications or some other interesting bits of information.

If you're a coder that needs a watch with roughly a week's battery life, only want the basics and/or can code up some modifications, I think Watchy is a good fit for your wrist. For normal consumers? I'd say only go for it if you want to learn more about computing and coding. C++ isn't what I'd call 'beginner friendly' so there might be better learning projects out there. The [semi-usable documentation on Watchy's site](https://watchy.sqfmi.com/docs/getting-started/) is another potential gotcha for beginners as well. 

I fit in the first category above and I'm quite happy with this purchase. I've already learned a little more about microcontrollers and C++, although I have a ways to go. Watchy provides me a simple yet practical product to expand my knowledge.

