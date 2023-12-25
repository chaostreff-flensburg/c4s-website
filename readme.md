# C4S Website

![build](https://github.com/chaostreff-flensburg/c4s-website/actions/workflows/build-and-deploy.yml/badge.svg)

Repo der Webseite des Call for Stories. [Live Version](https://42.ccc.de/). Gebaut mit [Lume](https://lume.land/) auf Basis von [Deno](https://deno.com).

## Framework Setup

Development
```bash
deno task serve
```

Production
```bash
deno task build
```

## start local with docker

```yaml
docker-compose -p c4s up -d
```

---

Made with ♡ at [Chaostreff Flensburg](https://chaos.social/chaos_fl) |
[License](./LICENSE)
