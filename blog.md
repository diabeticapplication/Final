---
layout: base.html 
title: Blog Section
pagination:
  data: collections.tools
  size: 500
  alias: tools
---

Here is the collection of the frequently asked questions about diabetics.

{% for tool in tools %}


 <a href="{{ tool.url }}">  {{ tool.data.title }} </a>

{%  endfor %}