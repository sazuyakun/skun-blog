---
title: 'Making my own AI voice clone'
description: 'A stab at using open source voice synthesis'
order: 1
pubDate: '2026-08-23'
heroImageUrl: '/images/blogs/blog-placeholder.svg'
---

Hello reader! First of all, welcome to my very first blog post. I'm Soham a.k.a `skun`. I'm actually super nervous / excited as I type this, but hope you won't mind some rookie mistakes here and there (this is my personal diary and I promise to not use LLMs to write out my thoughts✌️)

Let's jump straight to the point!

Recently, I have been really fascinated by social media and content creation. I would love to make videos on some of my projects, share some thoughts like I try to do regularly on my linkedin posts (will soon be active, or atleast try to be, on X). Now here are the excuses for the procastination:
- I work at a startup that demands my time; don't worry, I love my job
- I am trying to develop a habit of reading about personal finance... but that's a discussion for tomorrow.
- On weekends, I prioritise socialising, playing video games, honing on my guitar skills and in the small amount of time I have left, I prefer completing my chores.

But here's more...

Coming up with an idea, writing a script for it, recording myself / some form of content, recording the speech to go on my b-rolls, buying gear for high quality content, editing the video...

Even the thought of doing all this `overwhelms` the sh** out of me 😭. But don't worry, I've got a plan! (why would you worry? as if you are desperate for some content by a stupid dev like me, haha)

## The Motivation
Through out my time building / creating stuff, there are a plethora of things I still want to try and fail at. Here are some things I've taken a stab at till now:
- Sketching
- Oil Painting
- Learning Guitar
- Street Photography
- Learning the art of B-roll
- Software development (chosen as my current `Career` track too!)

Here are some things I am dying to take a stab at:
- Content creation (Oh! what a surprise 😂)
- Hardware programming (RASPBERRRRYYY pi)

You can see the problem why it's hard for me to actually bring up time for the `I WANNA TRY THIS` list. There's no clear direction to what I want to do and my thoughts are too generalised.

But I've got a solid plan!

## The Plan
I have come across a concept called `Temptation Bundling`, from this book called `Atomic Habits`. Though this concept is useful for making new habits, I felt that this gives me a clear way to get me into something I wanna try, using things I already am comfortable with (this is like building a habit anyways...)

> **TEMPTATION BUNDLING:**
>
> Combine something you like with something you want to try till you start liking it.
>
> eg. Combine working out with listening to music

Before I start sounding like a `self-help guide`, here's what I want to do:

**Create content using what I already like doing!**

And from the list above, the obvious answer is `SOFTWARE DEVELOPMENT`

## The Steps

<Enter Image Here>

Obvious from the title of the blog, today, we are going to discuss about the `automated voice narration` part!

I did my fair share of research on this topic and came up with the following three options for narration (rated out of 5 ⭐️):

| Idea | Precision | Speed | Cheap |
| --- | --- | --- | --- |
| ElevenLabs | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️ |
| Train a neural net | ⭐️⭐️⭐️⭐️ | ⭐️ | ⭐️ |
| TT5 (One shot) | ⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ |

#### ElevenLabs (Total: 11⭐️)
Will give me really good results, very quickly. But the only problem is, it will cost me. I don't want to spend on another dependency that I can create myself, especially in the age of AI (atleast for now!)

#### Train a neural net (6⭐️)
Forget about this. Neither do I have the infrastructure for this, nor the patience

### WINNER: TT5 One Shot (13⭐️)
Reasons:
- Pretty accurate voice cloning
- I can clone my voice really fast
- Will cost me nothing! (It's open source!)

> **My Specs:**
>
> - 2020 Macbook Pro
> - Apple M1
> - 8 GB Unified Memory
