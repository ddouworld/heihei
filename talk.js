$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小宝宝一定会愿意~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        var audio = document.getElementById("music");
        //播放(继续播放)
        audio.play();
        modal('祝愿杨珊珊同学', A);
    });
});

function A() {
    modal('工作上的烦恼能少一点，每天都能轻松些', B);
}

function B() {
    modal('毕业论文写得顺顺利利，灵感源源不断呀', C);
}

function C() {
    modal('不管忙什么，都愿你每天有份好心情', D);
}

function D() {
    modal('愿你能多些休息的时间，精神满满过每一天', E);
}

function E() {
    modal('周末能彻底放松下来，做些让自己开心的事', F);
}

function F() {
    modal('压力悄悄溜走，快乐常常围绕着你', G);
}

function G() {
    modal('愿你付出的努力都有回报，事事顺心意', H);
}

function H() {
    modal('不管遇到什么，都能保持从容和笑意', I);
}
function I() {
    modal('愿你每天都能被小确幸包围，暖暖的', J)
}
function I() {
    modal('日子过得简简单单，却处处是舒心', J)
}
function I() {
    modal('累了的时候，总有片刻轻松属于你', J)
}
function I() {
    modal('所有难题都能慢慢化解，前路顺顺当当', J)
}
function I() {
    modal('愿你常常笑，天天都有好心情', J)
}

function J() {
    modal('总之呀，祝你一切都好，快乐多一点，烦恼少一点~', function() {
        fireworks();
    });
}
function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
