new TypeIt("#XJHLCH", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("XJH && LCH")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第一个春节...")
    .pause(3000)
    .go();

new TypeIt('#talkToLCH', {
    lifeLike: true,
    cursorSpeed: 3000,
    waitUntilVisible: true,
    speed: 200
}).go();
