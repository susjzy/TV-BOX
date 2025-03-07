var rule = {
    title: 'freeok',
    host: 'https://www.freeok.pro',
    url: '/vod-show/fyclass--------fypage---.html',
    searchUrl: '/so1so/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'Mozilla/5.0',
    },
    class_parse: '.navbar&&ul&&li;a&&Text;a&&href;/(\\d+).html',
    class_exclude: '留言|首页|网盘|',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: 'body&&.scroll-box;.module-poster-item.module-item;.module-poster-item-title&&Text;img&&data-original;.module-item-note&&Text;a&&href',
    double: true,
    一级: 'body&&.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.module-info-tag&&Text",
        "img": ".lazyload&&data-original",
        "desc": ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text",
        "content": ".module-info-introduction&&Text",
        "tabs": ".module-tab-item",
        "lists": ".module-play-list:eq(#id) a"
    },
    搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}