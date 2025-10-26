---
external: false
title: "Microwaving Pizza, Not Your Brain: Smarter Site Blocking with NextDNS"
description: "A straightforward guide to using NextDNS could host for effective and manageable website blocking."
date: 2025-10-17
---

![Microwaving Pizza](/images/8dc953c7-f94d-4575-8148-5058b7408024.webp)

If you're trying to be more intentional with how you spend your time online, blocking certain domain names can help curb mindless scrolling.

Customizing your DNS is one of the easiest ways to do this. It can stop you—or anyone else—from spending two hours refreshing Reddit to see if someone replied to your post wondering why your girlfriend is both stunning and somehow still into you.

Before we dive into the setup, let’s establish a guiding principle: aim for simplicity. DNS-level blocking is powerful, but if overused, it becomes a chore. Choose a setup you can stick with—one that doesn’t require constant tweaking.

For instance, let’s say you’re trying to reduce your time on YouTube. If you still want occasional access—like searching “how to microwave frozen pizza”—then blocking YouTube entirely at the DNS level isn’t the right move. DNS blocking is binary: it’s either fully accessible or completely unreachable. So unless you're ready to give it up entirely, it's better to explore softer restrictions like browser extensions, app timers. 

Okay let's start: 
## 1. Set up your Next DNS Account and Profile
Go to [NextDNS](https://nextdns.io/) and Sign Up. The steps are pretty straight forward. It's actually so easy that you will be confused when you see that the only two fields you need to register is an email and a password. 

Once you register you will see a screen and in the top it will say My First Profile. So right now you already have a custom DNS profile, but we need to customize this profile. This profile will by default have ad and trackers blocklist setup. 
## 2. Blocking websites
To block websites you have two options in NextDNS, either using a "Deny List" or using "Parental Control restrictions'". Both options are useful, and you can decide depending on what you want to achieve. Also both options can be used in conjunction. 

### 2.1 Deny List
On the top Panel you can go to Deny list. There you can setup any domain you want to block. Here's a snapshot of the domains I personally block. Your list will depend on your goals:

![Snapshot](/images/20251017202541.png)

### 2.2 Parental Control
Parental Controls offer less flexibility—you can only toggle predefined sites. As can bee seen here:

![Snapshot](/images/20251017202746.png)

Still, they come with useful features like:
#### Category Blocking
This is exactly what it sound like. It has some categories that you are able to block like for example porn, gambling, dating, privacy, social networks, etc. 

![Snapshot](/images/20251017203232.png)

#### Recreation Time
This feature is surprisingly handy. You can schedule windows of access for blocked categories—perfect for those who want to keep things like adult content off-limits except for, say, Saturday night existential spirals.

![Snapshot](/images/20251017203247.png)


## 3. Blocking Ads
Ads hijack your attention—and sometimes your appetite. You see a burger ad, and two hours later you're ordering Uber Eats.

In the **Privacy** tab, under **Blocklists**, you can add community-maintained lists that block telemetry, ads, malware, and trackers. These work like curated deny lists.

You might think that adding all the lists you can is a good idea, but keep in mind that adds, trackers, and telemetry is integrated into many different process on the websites you visit so some lists might block a lot of things but will also break many sites, so this is a balancing game. 

Sites blocked by mistake will increase the more blocklists you add. So keep that in mind. 

Start small. Pick 2–3 well-maintained lists and test your browsing experience. If sites break, scale back.

Here are the Lists I am using:
* NextDNS Ads & Trackers Blocklist
* AdGuard DNS filter
* OISD
* notracking
* EasyList
* NSABlocklist
* WindowsSpyBlocker (Spy)
* HaGeZi - Multi PRO++

![Snapshot](/images/20251017205427.png)

## 4. How to set it up in your device
Once your profile is configured, it’s time to apply it to your device.

Whether you're on iPhone, Android, Mac, Linux, BSD, Windows, or even a router, go to the **Setup** tab and follow the guide for your platform.

So for this you should go to the Setup Tab in Next DNS and look for the Setup Guide that is appropriate for your Device. 

The only recommendation I will give for this, is try not to use an application. Manual setup is usually cleaner and gives you full control. Avoid installing extra apps unless absolutely necessary—they often come with baggage.


## 999. Bonus
Do you care about privacy? Then there is also a cool tab under the blocklists in the privacy tab that helps you block native telemetry for various systems. I personally use the Windows, and Samsung Blockers. 

These telemetry blockers are great if you're serious about privacy. Just remember: blocking too aggressively can break things, so test and adjust as needed.