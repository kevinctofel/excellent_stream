---
title: "Email in the terminal like it's 1993"
date: 2023-12-04
description: My quest to greatly reduce the use of a mouse or trackpad took a half-step forward this weekend. I'm using email in the Terminal.
---
My quest to greatly reduce the use of a mouse or trackpad took a half-step forward this weekend. I don't recall which of the folks I follow on Mastodon mentioned it, but someone pointed out [Mutt](http://www.mutt.org/). That was later followed with a vote for [Neomutt](https://neomutt.org/).

These are both terminal based email clients. In 2023!

![Neomutt](/img/Neomutt.png)

## Mutt and Neomutt setup ##

I futzed with Mutt for a bit but found Neomutt worked a bit better for my specific needs and configuration. I also like that Neomutt included some features that required effort to use with Mutt

For most people, Mutt should be simple enough to configure. You need the IMAP and SMTP settings from your email provider. Pop those into a Mutt configuration file and you're on your way. There are also a ton of Mutt features you can add or configure.

Of course, I'm not "most people". I'm an oddball, having migrated away from 12 years of Gmail usage in 2020. I switched over to a paid Proton Mail account. The main draw of Proton is that your mail is fully encrypted and stored on servers in Switzerland. It's considered a more private, secure email service in general.

With that privacy comes some "gotchas" when using anything but the Proton Mail desktop or web client. Namely, I had to install the Proton Mail Bridge for Linux on my machine. The Bridge acts an an intermediary to encrypt and decrypt all email. Neomutt configuration was minimal with the Bridge settings.

## Why use email in the terminal? ##

I'm sure many who look at the images of my new-old mail client are wondering why anyone would subject themselves to this. The main answer is speed. While you can use keyboard shortcuts in most email clients today, there's something to be said about terminal apps that build upon existing legacy keybindings. 

I can navigate very quickly through my mail queue using the 'j' and 'k' keybinds from Vim, for example. No mouse, no trackpad, no arrow keys (although those work too). So my hands are always in the ready position to type.

A secondary benefit would be that a terminal client is using far fewer resources than a modern web client or desktop app. But if you have enough horsepower under the hood of your computer, that's less of an issue.

## There are some problems ##

While I'm loving the speed experience of using Neomutt, it's not all peaches and cream. Most of the world uses HTML-based email. And that's not going to work in the terminal by default. Thankfully, Neomutt includes a feature to open any HTML mail in a browser tab. I configured Neomutt to use my browser of choice for this case; you can set it to whatever browser you use.

When I open an email in Neomutt and it's in HTML, I tap the 'v' key on my keyboard. This opens up a browser tab with the email contents. It's then two keyboard taps to close the tab and get back to Neomutt. This doesn't take long, obviously but if you're used to a seamless email experience, this isn't it.

![HTML-email](/img/HTML-email.png)

Another issue I have is more of a challenge in setting up an address book. Abook came recommended and I was able to install it without any issues. It's a terminal based contacts app that integrates with Neomutt. 

Since my contacts are in Proton Mail, I had to download and decrypt them. Not a problem as Proton Mail makes that easy. In about 30 seconds, I had a standard .vcf file. And there's an abook command to import may file formats for contacts, including .vcf, into an address book.

![abook](/img/abook.png)

I must be doing something wrong because after running the command, I still have an empty address book. I'll be working on solving that issue in the coming days.

Short of that, I'm really liking this setup for my mail. Thanks to the Proton Mail Bridge, which is set to run upon boot up, my mail is still secure and private. I'm less focused on checking email and more focused on getting work done. And when I need to triage or reply to messages, I'm doing so fast. 

Even if it doesn't look as pretty.


