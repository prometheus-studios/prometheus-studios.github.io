---
title: QOM Format
author: stygigoth
date: "2022-09-26-23-37" # UTC timestamp
layout: blog
para: Now introducing to the Prometheus Studios suite, the humble Quite OK Model Format. QOMF is a modification to the wonderful QOI Format to extrapolate to 3d space.
---

<script>
  import LineBreak from '../../../components/line-break.svelte';
  import DoubleLineBreak from '../../../components/double-line-break.svelte';
</script>

# {title}

<DoubleLineBreak />

{ para }

<LineBreak />

In addition to making significant performance boosts over other methods of storing block/item model/texture information, QOMF helps guide Prometheus's artistic goals. Simple, but in a good way. Every block using the format will be confined to its own 16^3 texels, without rotation.

<LineBreak />

Not only does the format provide a performance increase and artistic guidance, it also has even *more* features! For instance, specific texels will be able to have different light emissions, even in the same block!

<LineBreak />

For now, the only downside is that it isn't exactly [human-readable](https://www.dropbox.com/scl/fi/m9x3g2m2l8xhwbo0bp6fn/The-Quite-OK-Model-Format.paper?dl=0&rlkey=rbtnjyy2cjrss6tqzztyvb0sh). Though we hope to remedy this by making our own public QOM editor (only $free.99)!