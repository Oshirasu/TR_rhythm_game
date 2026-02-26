function onEvent(name, value1, value2)
    if name == 'Show Image FHUD' then
        local imageName = value1
        local action = string.lower(value2 or '')

        if action == 'on' then
            if not luaSpriteExists('eventImage') then
                makeLuaSprite('eventImage', imageName, 0, 0)
                setObjectCamera('eventImage', 'other')
                setScrollFactor('eventImage', 0, 0)
                addLuaSprite('eventImage', true)
            end
        elseif action == 'off' then
            if luaSpriteExists('eventImage') then
                removeLuaSprite('eventImage', true)
            end
        end
    end
end
