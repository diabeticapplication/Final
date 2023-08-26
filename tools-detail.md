---
pagination:
  data: tools
  size: 1
  alias: tool   
  addAllPagesToCollections: true
tags: tools
layout: base.html
permalink: "blog/{{ tool.Meta | slugify }}/"  
templateEngineOverride: md, liquid
eleventyComputed:
  title: "{{ tool.Meta }}"
---

{{ tool.Text}}
