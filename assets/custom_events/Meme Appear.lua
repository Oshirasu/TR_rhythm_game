local memeSprite = 'memeCry'
local targetX = -1150
local targetY = -200
local speed = 0.6
local scaleX = 0.3
local scaleY = 0.3

function onCreate()
    precacheImage('meme')
end

function onEvent(name, value1, value2)
    if name == 'Meme Appear' then
        if value1 == 'on' then
            if not luaSpriteExists(memeSprite) then
                makeLuaSprite(memeSprite, 'meme', -1100, targetY)
                setScrollFactor(memeSprite, 1, 1)
                setObjectCamera(memeSprite, 'game')
                scaleObject(memeSprite, scaleX, scaleY)
                addLuaSprite(memeSprite, false)
            end

            setProperty(memeSprite .. '.visible', true)
            doTweenX('memeIn', memeSprite, targetX, speed, 'circOut')

        elseif value1 == 'off' then
            if luaSpriteExists(memeSprite) then
                removeLuaSprite(memeSprite, true)
            end
        end
    end
end
