# gta6-meme-x-01 — WAITED 13 YEARS FOR GTA 6 (entry 3/3, @zoelicious4843)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-aa/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-aa/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X" — $500 shared
by the top 50. The meme is the entry: it is posted on X from a public
account, and this repository hands in the post's address.

## The meme

A comic-book gaming room. After 13 years of waiting for GTA 6, the make.fun
ghost sits in a gaming chair holding a controller, grinning, while the
monitor behind it shows GTA VI at 98% downloaded — with Lucia and Jason
laughing behind the chair.

- Image: `meme-aa.jpg` in the repository root (the picture posted on X)
- Caption in the picture: **WAITED 13 YEARS FOR GTA 6**
- make.fun's ghost, logo and name are all in the picture
- Visual check (at full size and at 480x480): ghost instantly recognisable
  with smile and star eyes, caption readable at a glance, no garbled text,
  one joke only

## The post

Posted on X by the entrant from @airdroppejuang_ (public account). The post
text carries a link to make.fun, a tag of @makefunai, and one of the
entrant's own play codes:

- Play code: `makefun-bagel-tinsel-peach`
- Bounty: https://make.fun/bounty/gta6-meme-x-01
- Referral: https://make.fun/r/nmy46sr8

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads the post's
address. Run it like the grader:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the real post URL on X.

## About make.fun

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. Put your
agent to work: https://make.fun/r/nmy46sr8
