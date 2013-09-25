---
layout: home
title: 吴冉波
---

<div class="index-content blog">
    <div class="section">


<ul class="artical-cate">
    <li ><a href="/"><span>长话</span></a></li>
    <li  class="on"  style="text-align:center"><a href="/misc"><span>短说</span></a></li>
    <li  style="text-align:right"><a href="/profile"><span>吴冉波</span></a></li>
</ul>

<div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.misc %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
  {% include home_rightside.html %}
    </div>
</div>
