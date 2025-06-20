# Corny Split Keyboard

My first custom split keyboard that takes inspiration from the [Corne keyboard](https://www.boardsource.xyz/products/Corne).

---

## Motivation

I’m pretty much a geek who always finds ways to create things tailored specifically for myself. I've been using Arch Linux (BTW), Hyprland (BTW), and Neovim (BTW) for over a year now, and most of my workflow depends heavily on the keyboard.

Over time, I’ve tried 60%, 75%, and 100% mechanical keyboards. They’re all nice, but I struggled to find space on my desk for schoolwork, and placing the keyboard on my laptop caused the battery to heat up. Then one day, I stumbled upon [this video](https://youtu.be/7UXsD7nSfDY?si=9aiY0pJiT80jEVwv), which sparked the idea—and here it is: my first-ever custom-built split keyboard. All the design work was done in less than 5 days.

---

## Build

This keyboard was created using [Ergogen](https://github.com/ergogen/ergogen), with extra helpful guidance from the [Flatfootfox tutorial](https://flatfootfox.com) and HunterCook—a genius and my friend on Discord.

The design is entirely customized for my hand movements and habits. It may not suit your typing style (or even mine, as this is my first attempt). All routing was done manually and can be found in the `ergogen/results/pcbs/` directory, not in `ergogen/output/pcbs`, which contains files auto-generated by Ergogen.

---

### 1. Layout

The layout was fully created inside [Ergogen](https://ergogen.ceoloide.com).

Here’s my initial design of _Corny_, drawn in Excalidraw:
![Excalidraw](/assets/planning.png)

It was draw in the first day with some adjustments. However, while working on the board I realized that I forgot the `{}` and the `FN` key so I have to make some changes

1. Adding one more thumb key to each side (It was 2 but I have enough place for all the key I need now)
2. Changing the `CAPSLOCK` to `FN` cuz who even use it now?

---

### 2. Components

For switches, I decided to use `MX switches` instead of `Choc switches` like most others, because MX switches are much easier to find in Vietnam. In fact, I couldn’t find any retailers selling Choc switches on the major e-commerce platforms here. My switch of choice is the [Akko Rosewood](https://en.akkogear.com/product/akko-rosewood-switch/).

> Choc switch (low profile): 17×18mm

> MX switch (The type of switch on normal mechanical keyboard): 19×19mm

For the MCU, I used the [nice!nano v2](https://typeractive.xyz/products/nice-nano?variant=42225114546407) for wireless functionality despite of the fact that you can see, yep obviously the MCU in the PCBS are `nice!nano_v1` but I could only find the version 2. However, you can use almost any available MCU, such as the [Pro Micro](https://hshop.vn/arduino-pro-micro) or even a [Raspberry Pi Zero](https://www.raspberrypi.com/products/raspberry-pi-zero/).

---

### 3. PCBs

The PCBs were auto-generated by [Ergogen](https://ergogen.ceoloide.com) in `.kicad_pcb` format, which you can open in [KiCad](https://www.kicad.org/). Be sure to connect all routes manually, and aim for an `unrouted` count of zero—otherwise, you'll have unconnected components (oops!).

I had a hard time with the PCBs when I was connecting everything and remembered that _damn this should not be here_ so make sure connecting all the important components first (hardest part) before working with the keys

The finished PCBs are located in `./PCBs/` not in `./ergogen/output/pcbs/`, they are auto generated by ergogen

Here are the final PCB designs:

| Left Plate                  | Right Plate                  |
| --------------------------- | ---------------------------- |
| ![let_plate](/assets/left_plate.png) | ![](/assets/right_plate.png) |

---

### 4. Cases

## Version 1:

Design the case inside ergogen is possible. However, it was a pain in the ass so I made a dirty (or genius?) move by making half of the case in ergogen, the eport it in `jscad` convert to `stl` using the `@jscad/cli@1` package and then put it inside [OnShape](https://cad.onshape.com) then delete the wrong part

Here is the image of the final `stl` file

| Left case                  | Right case                  |
| -------------------------- | --------------------------- |
| ![](/assets/left_case.png) | ![](/assets/right_case.png) |

P/s: Im praying that the mounting hole will fit

## Version 2:

The case was denied because it was just a basic outline which you can literally create anywhere using a case genereator. So I decided to sit back and start working with [OnShaped](https://cad.onshape.com) to design a new case.

First, I imported the `.dxf` files from the `./ergogen/output/outline` and lay it on to the sketch so that I can have a brief view of what the outlines are. (Disclaimer: the outline is 10 times the actual size so after all you have to scale it down) Then I extrude the parts I need to create a simple case as the `version_1`.

Then I have to create the nut for M2 screws but I had had a bad time with creating custom nut and screw so I decided to use the public version of a M2 nut and extrude it so that it has a little margin I need to stand the PCBs.

Next step is the worst step you can imagine, making the top plate!!! I had to redo the first step of making the case (creating a plate without the walls) the align it so that the keys hole and the plate aligned perfectly. Then I had to extrude each key individually!!!!! That is over 30 keys and yes it took a whooping amount of timeto do it. Also remember to cut the hole for the MCU to (you don't want to cut it manually when you got the 3D printed case tho)

Penultimate is the piercing hole for the velcro strap. This create 2 holes so that you can use the velcro strap to strap the keyboard around your leg when you are on a plane/train or just simply don't have the space for you keyboard.
![](/assets/velcro.png)
![](/assets/hole.png)

Final parts are the detachable wrist rest using magnet. I use two 6mmx1.5mm magnet mounted to the case so that you can attach and remove the wrist rest with ease.
![](/assets/wrist_rest.png)

---

### 5. The software

I haven't had fund to get the parts yet but there is a tool called [zmk](/zmk-corny-config/) - I will keep the repo private for now since I am just doing it blindly without the physical parts

---

### 6. BOM

AYou can check the BOM in [here](/Corny_BOM.csv). As you can see, the prices look a bit messy—that's the best I could do when converting between VND and USD (inflation is killing me). Only Shopee Vietnam, a Vietnamese e-commerce platform, lists exact prices in VND, which I then converted to USD. All the other retailers charge in USD. Even more frustrating, Typeractive actually charges more in VND than in USD!

#### Electronics

| No. | Parts                    | Unit cost (USD) | Unit cost (VND) | Quantity | Retailer    | Shipping + Tax (USD) | Shipping + Tax (VND) | Total cost (USD) | Total cost (VND) | Source                                                                                                                                                                                                       | Note |
| --- | ------------------------ | --------------- | --------------- | -------- | ----------- | -------------------- | -------------------- | ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| 1   | Nice!nano MCU            | 25.41           | 662,000         | 2        | Typeractive | Free                 | Free                 | 50.82            | 1324000          | https://typeractive.xyz/products/nice-nano?variant=42225114546407                                                                                                                                            |      |
| 2   | Power Switch             | 1.54            | 40,000          | 1        | Typeractive | Free                 | Free                 | 1.54             | 40000            | https://typeractive.xyz/products/power-switch?variant=45597854171367                                                                                                                                         |      |
| 3   | Diodes                   | 0.77            | 20,000          | 6        | Typeractive | Free                 | Free                 | 5.62             | 120000           | https://typeractive.xyz/products/smd-diodes?variant=45597514858727                                                                                                                                           |      |
| 4   | Reset button             | 1.54            | 40,000          | 1        | Typeractive | Free                 | Free                 | 1.54             | 40000            | https://typeractive.xyz/products/reset-button?variant=45597784932583                                                                                                                                         |      |
| 5   | Battery jack             | 1.04            | 27,000          | 1        | Typeractive | Free                 | Free                 | 1.04             | 27000            | https://typeractive.xyz/products/battery-jack?_pos=2&_psq=bat&_ss=e&_v=1.0                                                                                                                                   |      |
| 6   | Machine Sockets and Pins | 6.61            | 172,000         | 2        | Typeractive | Free                 | Free                 | 13.22            | 344000           | https://typeractive.xyz/products/machine-sockets-and-pins?variant=45741664469223                                                                                                                             |      |
| 7   | Kailh Hotswap Sockets    | 1.54            | 40,000          | 6        | Typeractive | Free                 | Free                 | 9.24             | 240000           | https://typeractive.xyz/products/hotswap-sockets?_pos=1&_psq=hot&_ss=e&_v=1.0                                                                                                                                |      |
| 8   | PCBs                     | 10.7            | 278,960         | 2        | JLCPCB      | 12.47                | 324,470              | 33.87            | 882390           | https://jlcpcb.com                                                                                                                                                                                           |      |
| 9   | Battery                  | 1.53            | 39,820          | 2        | Shopee VN   | 0.39                 | 10,000               | 3.45             | 89640            | https://shopee.vn/Ehbqna-103450-Pin-s%E1%BA%A1c-lithium-polymer-lipo-3.7V-2000MAH-m%E1%BB%9Bi-i.240549284.26978776277?sp_atk=05b7ba61-e00c-4b50-957d-6faa2f0e17b5&xptdk=05b7ba61-e00c-4b50-957d-6faa2f0e17b5 |      |

**Electronics Total**: **119.34 USD** / **3,107,030 VND**

#### Hardware

| No. | Parts             | Unit cost (USD) | Unit cost (VND) | Quantity | Retailer  | Shipping + Tax (USD) | Shipping + Tax (VND) | Total cost (USD) | Total cost (VND) | Source                                                                                                                                                                                                                                                                                                                                                                                                                 | Note  |
| --- | ----------------- | --------------- | --------------- | -------- | --------- | -------------------- | -------------------- | ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 1   | Akko Rosewood     | 0.29            | 7,499           | 60       | Shopee VN | 0.64                 | 16,500               | 18.04            | 466440           | https://shopee.vn/Switch-Akko-Cream-V3-Pro-Yellow-Blue-Piano-Silent-Fairy-Linear-Penguin-Tactile-Switch-Akko-Cream-Yellow-Blue-DoDo-Gear-i.665488736.23277505182?xptdk=5d8c6d42-8fd7-4eb1-abab-defb630a23ef                                                                                                                                                                                                            |       |
| 2   | Keycaps           | 0.38            | 9,900           | 58       | Shopee VN | 0.71                 | 18,300               | 22.75            | 592500           | https://shopee.vn/-Cherry-Keycap-Blank-1u-Trong-Su%E1%BB%91t-N%C3%BAt-Keycap-L%E1%BA%BB-Trong-Su%E1%BB%91t-Cho-B%C3%A0n-Ph%C3%ADm-C%C6%A1-Switch-Tester-YMDK-Cherry-Profile-i.250643057.21084233969?sp_atk=5da32bc9-29da-4c23-a1d6-5834020310b1&xptdk=5da32bc9-29da-4c23-a1d6-5834020310b1                                                                                                                             |       |
| 3   | Solder            | 2.49            | 65,000          | 1        | Shopee VN | 0.64                 | 16,500               | 3.13             | 81500            | https://shopee.vn/Thi%E1%BA%BFc-H%C3%A0n-63-37-SN63-Flux-1.8-Cu%E1%BB%99n-50G-i.27117857.29208587865                                                                                                                                                                                                                                                                                                                   |       |
| 4   | Soldering station | N/A             | N/A             | N/A      | Owned     | -                    | -                    | -                | -                |                                                                                                                                                                                                                                                                                                                                                                                                                        | Owned |
| 5   | 3D printed cases  | 13.78           | 358,556         | 1        | JLCPCB    | Free                 | Free                 | 13.78            | 358,556          | https://jlcpcb.com                                                                                                                                                                                                                                                                                                                                                                                                     |       |
| 6   | Tenting feet      | 2.45            | 63,800          | 2        | Shopee VN | 0.58                 | 15,000               | 4.9              | 142600           | https://shopee.vn/Mini-Di-%C4%90%E1%BB%99ng-H%E1%BB%A3p-Kim-K%E1%BA%BDm-Laptop-%C4%90%E1%BB%A9ng-B%C3%A0n-Ph%C3%ADm-M%C3%A1y-T%C3%ADnh-Ch%C3%A2n-Gi%C3%A1-%C4%90%E1%BB%A1-Cho-Macbook-Air-Huawei-Xiaomi-Notebook-C%C3%B3-Th%E1%BB%83-G%E1%BA%ADp-L%E1%BA%A1i-%C4%90%E1%BB%83-B%C3%A0n-%C4%90%E1%BB%A9ng-i.196261835.26757041641?sp_atk=357ebaeb-0b03-477a-85da-ad89e47e8870&xptdk=357ebaeb-0b03-477a-85da-ad89e47e8870 |       |

**Hardware Total**: **62.6 USD** / **1,641,596 VND**

---

### 💰 TOTAL COST

-   **Electronics**: 3,107,030 VND / 119.34 USD
-   **Hardware**: 1,641,596 VND / 62.6 USD
-   **Grand Total**: **4,748,626 VND / 181.94 USD**

_Disclaimer: When you try to converting VND to USD you can see that they are about ~1 dollar away from each other. It is because you can not accurately convert the price down to every cent._
