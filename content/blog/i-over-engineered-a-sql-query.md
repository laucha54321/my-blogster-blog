---
external: false
title: "I Over-Engineered a SQL Query (And Almost Didn't Stop)"
description: "How a simple database comparison turned into a meta-programming nightmare—and what saved me."
date: 2025-10-28
heroImage: "/images/Screenshot 2025-10-28 180350.webp"
---
> You'd think it's obvious when you become the villain. You picture a maniacal laugh, a dramatic reveal. But in engineering, evil is boring. It just sounds like 'best practices' and 'scalability'.

It started with a straightforward task: comparing two messy databases to see if they were syncing correctly. I was just going to write a SQL query. What could possibly go wrong?

At work, I'm part of the commercial team doing tech-related tasks- we have a separate IT department though, so it's not like I am doing development.

The databases were messy-different structures, same kind of data, but modeled in completely different ways. I chose Python and DuckDB for the job.

The data came from reports, so it was already unnormalized. My job was to match rows from each system and see if they aligned… straightforward and simple. I got to work: loaded the data, aligned the structures, built a mini data warehouse. So far, so good.

But then I started thinking-what if the column names change in the future? I should probably make this flexible. So I added a JSON file to parameterize the column names…

That was smart. 

That was fine.

If I had stopped JSONing at that point, everything would have been okay,
it was great JSONing up to that point.

But it didn't end there…

I realized something: I'd probably need to chain queries together. Some of the structures were repeating, and the logic varied.

So I thought, why not take this further? Instead of just executing a list of queries, I could create a JSON file that defines each query type and its parameters.

It felt…  elegant.

It felt scalable. 

It felt like I was building a powerful engine, not just a simple tool. I started solving problems I didn't have. I went with that idea-and I got it to work. Honestly, I'm pretty proud of it. For a while, it worked surprisingly well.

That is, until the next requirement arrived: comparing multiple parameters at once. This broke… pretty much everything. My elegant system only supported simple equality checks between two columns. It was never built for this.

And you can probably see where this is going.

So I started down the only path that seemed viable….

Writing a function that could dynamically generate the SQL query I needed, injecting parameters from the JSON. 

It sounded clever. 

It sounded scalable. 

It sounded like I was building a house of cards.

So I started building the JSON parser. Like one does. 
Started to get some errors on the screen like expected. 

Fixed the first error, another one popped up. Fixed that one, changed the JSON, and it broke, fixed that too. 

I hear a teams message sound: - Hey are you done with the query?

It was my boss, my thought starting to rush. 

Can I tell him I am doing a querying system? - The voice in my mind said.

Hmmm I am not sure I can tell him that, he would not understand…

But why? 

Hmmm… Because he wants results. 

But that is what you are doing right? - My mind voiced asked.

Not right now, no. But once I get this working…. 

I see the clock I had been debugging for hours. 

It became so painful it forced clarity. Staring at my mess of errors, I realized; I wasn't a visionary. I was an employee who thought he had too much time to spare but was actually on a schedule. 

So I stepped back from the brink. I backed off.

I kept the simple JSON config for what it was good for-parameterizing column names-and for the complex comparison, I wrote a dedicated, straightforward SQL query. It was clear, it was robust, and it took me thirty minutes.

The lesson wasn't "never abstract." It was: know when to stop. Thirty minutes. The monster was just a SQL query all along.
In the end, the real failure wasn't over-engineering - it was not knowing when to stop. My time-consuming 'scalable engine' was defeated by a thirty-minute SQL query.