function onEvent(name, value1, value2)
    if name == 'DarkenScreen' then
        local fadeSpeed = tonumber(value2) or 0.5

        if value1 == 'on' then
            if not luaSpriteExists('darkOverlay') then
                makeLuaSprite('darkOverlay', '', 0, 0)
                makeGraphic('darkOverlay', screenWidth, screenHeight, '000000')
                setObjectCamera('darkOverlay', 'camOther')
                setProperty('darkOverlay.alpha', 0)
                addLuaSprite('darkOverlay', true)
            end

            doTweenAlpha('fadeInDark', 'darkOverlay', 1, fadeSpeed, 'linear')

        elseif value1 == 'off' then
            if luaSpriteExists('darkOverlay') then
                setProperty('darkOverlay.alpha', 0)
            end
        end
    end
end
