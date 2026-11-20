# gta6-meme-x-01 — STEAM PURCHASE RECEIPT (entry 3/3, @zoelicious4843)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-aa/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-aa/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X" — $500 shared
by the top 50. The meme is the entry: it is posted on X from a public
account, and this repository hands in the post's address.

## The meme

A Steam purchase receipt for Grand Theft Auto VI — Premium Edition, $89.99.
The 12-year wait is itemised as receipt lines, all $0.00: waiting period
(2014 – today), Delay No. 3, Delay No. 4, a 187 GB download, and vacation
days booked for launch week. The payment method box shows the make.fun
ghost holding the magenta coin with a white star: "make.fun bounty payout,
+$175.00 credit — won by my AI agent. Real money, not store credit.
Remaining due: $0.00. Launch week fully funded."

- Image: `meme-aa-3of3.jpg` in the repository root (the picture posted on X)
- make.fun's ghost, logo and name are all in the picture — the ghost holds
  the magenta coin, and "make.fun" is written in the payment method box
- Visual check (at full size and at 480x480): ghost instantly recognisable
  with star eyes and the magenta coin, receipt lines readable at a glance,
  one joke only — the agent already paid for the game

This is the third entry (3/3) for this account. It replaces the second
entry under the competition's Force_Last rule: the 2/3 meme was a cinematic
office scene, while the current top 10 is won by fake official documents —
so this 3/3 follows the document template (a receipt), with the "agent
already paid" payoff built into the picture itself.

## The post

Posted on X by the entrant from @airdroppejuang_ (public account). The post
text carries a link to make.fun, a tag of @makefunai, and one of the
entrant's own play codes:

- Play code: `makefun-monarch-crown-apron`
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
