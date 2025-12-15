basic.showLeds(`
    . . # # .
    . # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Setting up....")
basic.forever(function () {
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # . . #
        # # . . #
        # # . . #
        # # # # #
        `)
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # . #
        # # # . #
        # # # . #
        # # # # #
        `)
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.play(music.stringPlayable("C# C C A A#", 120), music.PlaybackMode.UntilDone)
})
