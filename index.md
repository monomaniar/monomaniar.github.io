---
layout: home
---

<div class="index-content blog">
    <div class="section">
        <ul class="artical-cate">
            <li class="on"><a href="/"><span>Blog</span></a></li>
            <li style="text-align:right"><a href="/profile"><span>Profile</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.blog %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
    <div class = "rightside">
    <iframe width="100%" height="450" class="share_self"  frameborder="0"
    scrolling="no"
    src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=450&fansRow=1&ptype=0&speed=0&skin=5&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=2120543591&verifier=045e79b4&dpc=1"></iframe>
    <script type="text/javascript"
    src="http://www.douban.com/service/badge/D.o.v.e/?show=collection&amp;n=6&amp;columns=6&amp;hidelogo=yes&amp;cat=book"
    ></script>
    </div>
    </div>
</div>
