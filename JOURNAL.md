# Journal

This is the journal in the making of Corny. Although I didn't write this daily during the making process, I was able to recall everything using the discussion on [Absolem Discord](https://discord.gg/mCHnwwtC) and with my friend `Huntercook`.

### 28/05/2025: 1 hour spent

I went by this [video](https://youtu.be/7UXsD7nSfDY?si=z_oIVIhKWSw-gox2) on [Youtube](https://youtube.com) about how to make your own keyboard. Kinda suprised how cool and personalized it was, I decided to use it for my [Hack club High way project](https://highway.hackclub.com/). As a Linux nerd and love how you can DIY everything for your own, I dived into the world of keyboards.

It was the first day so I just check over some resources for the project. Highly recommended you take a look over the link `Christian Selig` put under his video as it helped me a lot the days after:

1. Parst list: https://christianselig.com/2024/07/caldera-keyboard/
2. The files required to create the keyboard: https://github.com/christianselig/caldera-keyboard
3. Flatfootfox tutorial (Highly recommended, everything in here was follow along this tutorial): https://flatfootfox.com/ergogen-introduction/

Furthermore, I also watched this [video](https://www.youtube.com/watch?v=7LyziNdFlew) understand the simple concept of a keyboard: How matrix works, how you can use diodes to predict the signal, how you can use ergogen to get the basic plate outline, ... etc

---

### 29/05/2025: 1 hours spent

First, I followed the `Flatfootfox` tutorial to understad and create simple board as the `Ergogen` docs is very poor written.
However, I skiped the most important part `Unit` because I didn't really understand it that much. Also quite struggle with the whole `points` thing so I decided to use the default config by `Ergogen`

| Raw                      | Keys                               |
| ------------------------ | ---------------------------------- |
| ![](/assets/default.png) | ![](/assets/default_with_keys.png) |

But as we can see, there are only 3 rows of keys which mean I would not have the number row which means this config isn't really suit my style of typing so I had to create a new one but the tweaking process gave me a basic understand of how `Erogen` setup key, rows and colums work

---

### 29/05/2025: 3 hours spent

I spent the whole afternoon and evening working on this to create the proper layout of the keyboard and came up with the second version of the layout this has 4 rows (for the number row)
and I also added another column for the functional keys such as `TAB`, `Shift`, ...

![](/assets/layoutV2.png)

However I still can not find space for a lot of other keys like `FN` - crucial because I only have the number row, `Enter`, `Alt`. Moreover, some punctuation keys are also missing (especialy the curly braces) and there are no space for the arrow keys.

I was left with 2 options:

1. Add more keys
2. Create another layer of keys (Which has to be done later using zmk-config)

But obviously, this keyboard was made for me to feel comfortable with, not with style and creating another layer of keys in software means I would have to spent a lot more time learning the new keyboard which has extra learning curves and also make it difficult for me if I have to use a normal one. So we go with the first option - add more keys

This was really a pain in the ass because it took me a while to figure out where to put the new keys. But I see that there are plenty of space under the _pinky, ring and middle_ finger columns so I decided to put 3 more keys under there (which works perfectly for the arrow keys!)

![](/assets/arrow.png)

This 3 keys allowed me to have a much cleaner board with only 3 keys still being abandoned `FN` and the 2 curly braces which were solved by adding 2 more keys each next to the inner row before I decided to remove the `CAPSLOCK` to make space for the `FN` - who use `CAPSLOCK` btw. the upper key of the 2 keys I just added was also removed because the board looked nice now

![](/assets/final.png)

P/s: At the time I also tried to use some **splay** but gave the idea up cuz the board was kinda big

---

### 30/05/2025: 4 hours spent

The layout was done and now come to the hardest part in my opinion. Adding the electronics. At first all of the layout was finished inside `https://ergogen.cache.works`. However, this generator is kinda suck because you can not add your external footprints to the config. So I moved to `https://ergogen.ceoloide.com` which allows you to use your own footprints or using the external `ceoloide/...` footprints - which is much better (in my opinion).

> Despite of the assist by `Ergogen`, everytime I wanted to modify anything, I would have to change the config -> Install the `.kicad_pcb` file -> open it inside **KiCAD** again and again.

It was very time consuming and boring task.

I started with defining the matrix for the keyboard (You have to add the `MCU` of your keyboard and check the pins before specify which key goes to pin no ...). During working on this I also figured that you have to create the layout for you `MCU` also

![](/assets/first_pcb.png)

So what I added while doing this:

1. MCU - nice!nano
2. The powerswitch
3. The reset switch
4. The battery swich
5. Headphone jack to connect 2 side

And yes you didn't hear it wrong. Doing all of this took me 4 hours of modify the config + install the file + take a look if everything is fine + start tracing some of the important components to make sure I can route them perfectly. It did drive me crazy at some point

---

### 01/06/2025: 1 hours spent

I asked people on Discord to help me check the connection and got some really good advices.

![alt text](/assets/advice.png) - yes I almost burnt my keyboard alive just by wanting to connect them using the headphone jack

So I removed the `battery switch` and the `headphone jack` in order to protect the board.
After that I spent some time start connecting everything together and faced some really big problem with my design like: not reserving enough space for the other parts and traces.

Took me a while going back and forth between the config and the actual PCBs but I finished wiring for the first time ever. It was a total mess because I didn't know about the thru hole stuff

![alt text](/assets/pcb_first_wired.png)

The left side had the same appearance but it was a great start when I had some basic idea behind the concept

---

### 02/06/2025: 2 hours spent

I started redo everything on the PCBs and had a pretty neat appearance now.
I added some padding to the keyboard outline so my traces have more spacing.

But after that I realized I made the dumbest mistake a human ever could: In the config file, instead of matching the thumb keys with `P10` pin, I left them as `Pten` at the lastest refractor without fixing which means I have to redo everything again =(((. The power switch was also kinda off when place on the outside of the board so I had to move it back a bit (I just do it inside `KiCAD` without edit the config lol)

> Disclaimer: I did fix the config later

![](/assets/left_plate.png)

But after that everythign was really nice and I finshed the right plate beautifully

---

### 04/06/2025: 2 hours spent

Making the case inside was an absolute pain. I cannot do it at all, even after following the tutorial
I tried my best tweaking, figuring things out but this is the best I could get.

![alt text](/assets/ergogen_case.png)

So I decided to convert it from `.jscad` to `.stl` then import it inside OnShape and flip the board around, delete the unused parts the make the other case.

After that I imported everything into `JLCPCB` to get the bills.
I also started finiding the suitable parts and converting them between VND and USD to make the BOM file

---

### 05/06/2025:

I submitted the project to hack club and waiting for the result

---

### 06/06/205:

Acon said he need the `.step` file so I convert the `.stl` to `.step` and added some image to the PCBs

---

### 07/06/2025: 2 hours

The project is in pending because the case can be generated. So I started drawing the case myselft in OnShape.

I imported the `.DXF` outline files into OnShape making the simple case as the one I had already. But I still had to add some hex nut from other project cuz I can not make one myself but I think it suit the whole design.

I sparked an idea. My friend once sent me a picture of his keyboard that has a velcro strap to his leg

![](/assets/velcro.png)

So I decided to do that same. It was a long journey of measuring and connecting points in OnShape but I created a simple version of it

---

### 08/06/2025

Fnished the leftside and started working on the right side while I found a better way to remove the hole for the velcro strap. Redo it again but this time it was much faster since I can make use of the first hole I created without having to remeasure everything again and again.
This is the result: a clean 0.3mmx0.3mm hanging bar for the strap

![](/assets/hole.png)

Next I also found that some keyboards have a wrist rest connected to them but obviously if there are 2 wrist rest pad merged with the keyboard, my velcro idea is useless since nobody want a big ass wrist rest lay on the lap.

So I started to find a way for me to have a detachable wrist rest. There are many ways for you to have something plug in and out but I think magnet is the most usable and fashion way. So I created a simple 5x3x1.2cm pad with some rounding (I wanted it to be tilted be I couldn't do it in Onshape)

![](/assets/wrist_rest.png)

The wrist rest doesn't really match my first idea but I think it still look nice and great
You can stick them together or just simply use the keyboard without the wrist rest!
