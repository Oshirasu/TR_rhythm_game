function onCreate()
    makeLuaSprite('whiteScreen', '', 0, 0)
    makeGraphic('whiteScreen', screenWidth, screenHeight, 'FFFFFF')
    setObjectCamera('whiteScreen', 'other')
    setProperty('whiteScreen.alpha', 0)
    addLuaSprite('whiteScreen', true)
end

function onEvent(name, value1, value2)
    if name == 'White Screen' then
        local speed = tonumber(value2) or 0.5

        if value1 == 'on' then
            doTweenAlpha('whiteOn', 'whiteScreen', 1, speed, 'linear')
        elseif value1 == 'off' then
            setProperty('whiteScreen.alpha', 0)
        end
    end
end
