# C4S Website

![build](https://github.com/chaostreff-flensburg/c4s-website/actions/workflows/build-and-deploy.yml/badge.svg)

Repo of the Call for Stories website. [Live Version](https://42.ccc.de/). Built with [Lume](https://lume.land/) on the basis of [Deno](https://deno.com).

## Framework Setup

Note: On first build, Lume will need to download a couple of GB of static media files. Please be patient. :)

Development
```bash
deno task serve
```

Production
```bash
deno task build
```

## Start local with docker

```yaml
docker-compose -p c4s up -d
```

---

Made with ♡ at [Chaostreff Flensburg](https://chaos.social/chaos_fl) |
[License](./LICENSE)
