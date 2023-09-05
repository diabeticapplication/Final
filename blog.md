---
layout: base.html 
title: Blog Section
pagination:
  data: collections.tools
  size: 100
  alias: tools
---

Here is the collection of the frequently asked questions about diabetics.
<div>
{% for tool in tools %}


 <a href="{{ tool.url }}">  {{ tool.data.title }} </a>

{%  endfor %}

{% if pagination.href.next %}
<a class="contrast" role="button" href=" {{pagination.href.next}}"> Next </a>

{% endif %}


{% if pagination.href.previous %}
<a class="contrast" role="button" href=" {{pagination.href.next}}"> Previous </a>

{% endif %}
</div>