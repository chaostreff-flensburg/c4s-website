---
title: Utopia Still
subtitle: Glimpse into a positive vision of the future frozen in time, where cars, the climate crisis and capitalism are only a distant memory.
medium: 3D diorama
authors: Jonas Laugs
license: CC BY 4.0
lang: [original, en]
id: utopia-still
---

<video src="/{{ id }}/UtopiaStill-06-Video-Flythrough-01.mp4" controls></video>

## Description

This project is part of [an exhibition](https://42.ccc.de/) for the 38c3, the congress of the [Chaos Computer Club](https://www.ccc.de/), celebrating it's [42nd birthday.](https://de.wikipedia.org/wiki/Chaos_Computer_Club#Gr%C3%BCndung) It's theme was creating, positive, chaotic (in line with the club's ethics ^ _ ^) visions of the future and this something close to my heart since we don't get many of those.
So I wanted to explore a vision of living in a city that is a bit more in harmony with nature and the people (and animals, insects etc). I love nature a lot but I do live in the city and I think humanity will largery live in cities in the future (there's just so many of us ^ _ ^), so is there a way we can all exist together?
I knew I could not animate characters in the amount of time we had, so I decided to do a still(frame), a moment frozen in time of a positive future, a kind of 3d-diorama you can explore. If I had an infinite amount of time (and was actually able to write code + __ +) I'd love to have been able to switch between a dystopic city (basically what we have now in most cities, cars everywhere, very little nature or places for people to come together) but we decided that I should focus on the utopia – since as I said they're very rare), so I only implemented little climpses of a dystopic past that was overcome here and there in my work.

## Downloads

- Download the executable: [Linux](/{{ id }}/UtopiaStill-0.2-241004-01-Linux.x86_64.zip)/[macOS](/{{ id }}/UtopiaStill-0.2-241004-01-MacOS.zip)/[Windows](/{{ id }}/UtopiaStill-0.2-241004-01-Win.zip)
- [Source code](/{{ id }}/UtopiaStill-Source.zip)

## Instructions

Theoretically it should be possible to just download [Blender](https://www.blender.org/) and  [Godot](https://godotengine.org/) and point the latter to the Godot project folder (UtopiaStill-06-Godotproject). You probably also need to [make Godot able to handle the .blend files](https://docs.godotengine.org/en/4.1/tutorials/assets_pipeline/importing_scenes.html). The „Workfiles“ folder is for other (Krita, Inkscape etc.) files I don't want cluttering up the Godot folder.

Anyway, I hope you have fun and or learn something (I certainly did ^ _ ^), if you have comments or tips, I'd be happy to hear from you via:

- post@jfml.eu
- @jfml@mastodon.art

## Lessons learned

- Godot is really cool, I love the „everything is a node/scene“ concept!
- In hindsight I should have rigged the character(s), it would probably have been a looot less work then arranging the vertices.
- When you use a mirror modifier to make make a character, it uv-unwraps on the same place on the texture, so you textures all are mirrored as well + _ +
- Always use Smart UV Unwrap in Blender instead of UV Unwrap (even if it is a mess) since it has Island Margin. If you don't you need to get rid of the tiny lines on seams by hand …
- Stuff appears on the wrong backside of the model while texture drawing? Faces are inside! (Strg-Shift-N)

## Credits

### Thanks a lot to:

- [Chaos Computer Club](https://www.ccc.de/)
- [Godot](https://godotengine.org/)
- [Blender](https://www.blender.org/)
- [Krita](https://krita.org/)
- [Inkscape](https://inkscape.org/)

#### Assets from Sketchfab (RIP):

- Bee by DuongNganAnh: https://sketchfab.com/3d-models/bee-d424a36fc81a49308afc9dfbab53b24d
- Car Pack 1 (adapted) by buh: https://sketchfab.com/3d-models/car-pack-1-6d5fe4b9b8744afe9eb4616c4444886f
- Cargo Bike, Tricycle (carrito de tamales)(adapted) by V-Enterprises: https://sketchfab.com/3d-models/cargo-bike-tricycle-carrito-de-tamales-e3b9e94152994d8ca9f685fd1fdfae68
- Chonky Cat Trio by Kanna-Nakajima: https://sketchfab.com/3d-models/chonky-cat-trio-d9a2d94179384803af7456d633283496
- Coffee cup with plate by Elen: https://sketchfab.com/3d-models/coffee-cup-with-plate-c3132a723f434ce2b94e2e563420ef7a
- Folding Chair by Jeremy E. Grayson: https://sketchfab.com/3d-models/folding-chair-low-poly-54bd0acd7c524d678128367a25a0f504
- Fruit Veg Market by Francesco Coldesina: https://sketchfab.com/3d-models/fruit-veg-market-cf9d11b27bf7478a857a6abcbbb00cd3
- Game Ready Wind Turbine (Animated) by ThomasRedfern12: https://sketchfab.com/3d-models/game-ready-wind-turbine-animated-72cf2bacbe3e4bb9901280be9ce96514
- Inktober 02 - Mindless (bird) by Lilly!: https://sketchfab.com/3d-models/inktober-02-mindless-48c3236cb1ca4d0e945397de66d70f92
- Isuzu Erga Mio bus by own.guest: https://sketchfab.com/3d-models/isuzu-erga-mio-bus-050e8acd0bbc4da0902a8a874ef10fca
- Maize Corn Plant by gilles.schaeck: https://sketchfab.com/3d-models/maize-corn-plant-5fd3b104d8104519b061469c365d4974
- New bike by Kreems: https://sketchfab.com/3d-models/new-bike-8a62eee05dd7443f88f190cf2c234529
- Skateboard by putreffato: https://sketchfab.com/3d-models/skateboard-3bbb47e70e8f4adb916a02f0804ee99e
- Sketch Cat (adapted) by katarkhei: https://sketchfab.com/3d-models/sketch-cat-79c1321b05ca47b79ee3111ff449518e
- Tomato Plant by zvanstone: https://sketchfab.com/3d-models/tomato-plant-e0b559690e384fc0a9f3a05913f609c4
- Tram (国鉄キハ32形気動車 KIHA 32 Diesel) by own.guest: https://sketchfab.com/3d-models/32-kiha-32-diesel-95c5d6515ff04092987d698ab2c8442a
- Vertical Wind Turbines by Nadja May: https://sketchfab.com/3d-models/vertical-wind-turbines-66d8b5b8830648cf84e3411d765e1320
- Watering Can by Katherina: https://sketchfab.com/3d-models/watering-can-3f6dee60aa044f4b8cbb3fc6d6d31fe5
- Wheelchair from Poly by Google by IronEqual: https://sketchfab.com/3d-models/wheelchair-from-poly-by-google-52432f571f904785832062171cca0f9c

Here's a [collection:](https://sketchfab.com/jfml/collections/utopia-c86e424bc9744eb8acc97c7431e03408) I did not use all of the assets but the one's I used should be in there (as long a Sketchfab still exists …).

***

### Godot Plugins:
- [Spatial Gardener](https://github.com/dreadpon/godot_spatial_gardener) by Dreadpon
- [Debug Menu](https://github.com/godot-extended-libraries/godot-debug-menu) by Calinou

***
### Other Assets:
- Texture – [SolarPanel002_4K-JPG from AmbientCG](https://ambientcg.com/view?id=SolarPanel002)
- [Water / Glass (Easy Realistic Water In Godot Tutorial) by Majikayo Games](https://youtu.be/ZgpgwbJGe78)
- [3D-Movement / First Person Controller (probably + __ + ) by rbarongr](https://github.com/rbarongr/GodotFirstPersonController)
- Emoji by [Openemoji](https://openmoji.org)

### Metaverse, the cool kind:
- Posters: „Dis_abled Disruption Drabbles” by Lena Richter et al
- Wall-Mural by fantheoryonreality
- Game on laptop: „Cubetopia“ by ???
