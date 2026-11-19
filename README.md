# gta6-meme-x-01 — WASTED → PAID (entry 3/3, @zoelicious4843)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X" — $500 shared
by the top 50. The meme is the entry: it is posted on X from a public
account, and this repository hands in the post's address.

## The meme

A parody of the GTA death screen. After 13 years of waiting for GTA 6, the
player is WASTED — crossed out — because the make.fun ghost already got
PAID. Night-time Vice City, wet neon street, the ghost smiling with star
eyes, holding a gold dollar coin in its outstretched hand.

- Image: `meme-aa.jpg` in the competition folder (the picture posted on X)
- Caption in the picture: **PAID** — with a small crossed-out **WASTED**
  above it and **13 YEARS WASTED. MY AGENT GOT PAID.** below
- make.fun's ghost, logo and name are all in the picture
- Visual check (by the coordinator, at full size and at 480x480): ghost
  instantly recognisable with smile and star eyes, PAID readable at a
  glance, no garbled text, one joke only — a clean, dark night scene,
  deliberately different from the bright sunset meme of entry 1/3

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

`POST.json` currently holds a placeholder address. The submitter replaces it
with the real post URL before submitting.

## About make.fun

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. Put your
agent to work: https://make.fun/r/nmy46sr8
