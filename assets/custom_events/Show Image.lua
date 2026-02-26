function onEvent(name, value1, value2)
    if name == 'Show Image' then
        local imageName = value1
        local action = string.lower(value2 or '')

        if action == 'on' then
            if not luaSpriteExists('eventImage') then
                makeLuaSprite('eventImage', imageName, 0, 0)
                setObjectCamera('eventImage', 'game')
                setScrollFactor('eventImage', 0, 0)

                local scale = 1.111
                scaleObject('eventImage', scale, scale)

                addLuaSprite('eventImage', true)

                setProperty('eventImage.x', 640 - (getProperty('eventImage.width') / 2))
                setProperty('eventImage.y', 360 - (getProperty('eventImage.height') / 2))
            end
        elseif action == 'off' then
            if luaSpriteExists('eventImage') then
                removeLuaSprite('eventImage', true)
            end
        end
    end
end
