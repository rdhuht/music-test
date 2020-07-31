/**
 * https://cn.bing.com/images/search?view=detailV2&ccid=l9dEZK%2FU&id=F61A4C46B21B453C56CF18DB947C705537578E72&thid=OIP.l9dEZK_UglhvpS73OkHQAQHaDR&mediaurl=http%3A%2F%2Fzjimg.5054399.com%2Fallimg%2F140327%2F16_140327095151_1.jpg&exph=314&expw=710&q=%e7%b2%89%e5%88%b7%e5%8c%a0%e7%ae%80%e8%b0%b1&simid=608049807282667790&ck=4EA1FF45C329CEF8DAA1C395CB9D881C&selectedindex=5&form=IRPRST&ajaxhist=0&vt=1&first=1&scenario=ImageBasicHover
 * 
 * 粉刷匠
 */
input.onButtonPressed(Button.A, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
}
basic.showIcon(IconNames.Happy)
