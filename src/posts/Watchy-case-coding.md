---
title: Watchy case and coding in C++
description: A new $35 case for my Watchy makes it far more comfortable to wear. Now I just need to get more comfortable with C++ for new features
date: 2024-09-12
---

As mentioned in my last post, [I really like the Watchy DIY smartwatch](https://myconscious.stream/blog/Hello-Watchy/). I still don't think it's a viable option for most consumers because it's less of a product and more of a tinkling platform. Sure, it's functional, but only for the basics. I also noted that I had a new case for the watch on order.

The $35 aluminum case arrived and it's great. Not perfect, but still excellent. By swapping over to the new case, Watchy is much thinner and more comfortable. 

{% imagePlaceholder "./src/assets/images/blog/IMG_0902.jpeg", "Watchy cases" %}

Downsides? This case doesn't protect the e-paper screen ribbon cable. And I also had to spring for a new watch band. The included Watchy case measures 24mm between the lugs. The new one is 22mm. That's a small problem easily solved by the pair of 22mm bands I bought on Amazon for roughly $10. 

{% imagePlaceholder "./src/assets/images/blog/IMG_0904.jpeg", "Watchy on wrist with new case and band" %}

There are aluminum Watchy cases that offer more screen protection. They cost $45, which is fine. I opted for the less expensive one because I'd be right back to a bulky watch case with the more protective options.

Armed (🤣) with a thinner smartwatch on my wrist I started tackling one the additional features I want from Watchy. Namely, I want my daily step count data somewhere other than on the watch. Watchy has both WiFi and Bluetooth but there's no companion phone app. Again, this is more of a DIY platform than a mass-market product.

Watchy already uses its WiFi connection to grab my local weather from OpenWeather. So I know that connection can be used for other functions. I also know I need a place to store my daily step data. I decided to build that first.

So I spent about an hour or so coding up a local web server with NodeJS and Express. I then added a route that reads a basic JSON data file on the server; that file will (for now) keep an array of my daily steps. I seeded the data file with two step totals and then added some code to push a new daily step count to the array.

* (Note that I'm building an MVP, or minimum viable product. Once the basic functionality is working, I'll move the data from a file on the server to a small database, add data analysis / graphs, etc...)*

Effectively, this is a very basic API with a PUT request to add any incoming daily step counts to the data file. It returns the data in JSON format to the web page for testing purposes. To test the API request, I used Postman to push a few random step values and verified the updated web page displaying the JSON data. Succeess!

{% imagePlaceholder "./src/assets/images/blog/Watchy_Steps_API_test.png", "Server API test for Watchy Steps" %}

So I now have an endpoint that Watchy can send my daily steps to over an HTTP PUT request. That means it's time to hit the C++ code. Ugh.

I made some minimal code changes in the Watchy firmware building off two already existing bits of code:

1. Watchy already has code that runs at midnight to reset the step count. I'll have Watchy first send my step count to the server at midnight and then reset the step count on the watch.
2. Watchy sends an HTTP GET request to OpenWeather, so I have a small sense of how an HTTP client works in C++.

{% imagePlaceholder "./src/assets/images/blog/IMG_0160.jpeg", "Watchy code to get weather data over WiFi" %}

Unfortunately, my initial efforts to have Watchy wake up its WiFi radio and send the step count via C++ haven't gone well. I've only spent 30 minutes or so working on it but the code won't compile. Can't say I'm surprised since C++ is out of my comfort zone. 

But I'm not giving up! Over the next few days, I'll do some research and keep plugging away. 

If I can get it working, I'll then refine and refactor as needed on both the Watchy client side and on my server. And I'll also move the server code either to my homelab or to a cheap cloud instance. Once all of that is complete, I'll offer the code as open source to the Watchy community. 🤓
