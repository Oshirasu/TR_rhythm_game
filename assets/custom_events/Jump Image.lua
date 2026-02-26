function onEvent(name, value1, value2)
    if name == 'Jump Image' then
        if value1 == nil or value1 == '' then return end

        local imageTag = 'pop_' .. value1

        if not luaSpriteExists(imageTag) then
            makeLuaSprite(imageTag, value1, 0, 0)
            setObjectCamera(imageTag, 'camHUD')
            addLuaSprite(imageTag, true)

            local imgW = getProperty(imageTag .. '.width')
            local imgH = getProperty(imageTag .. '.height')

            local maxW = screenWidth * 1.0
            local maxH = screenHeight * 1.0

            local scale = math.min(maxW / imgW, maxH / imgH, 1.0)
            scaleObject(imageTag, scale, scale)

            imgW = imgW * scale
            imgH = imgH * scale

            local posX = (screenWidth - imgW) / 2
            local posY = screenHeight

            setProperty(imageTag .. '.x', posX)
            setProperty(imageTag .. '.y', posY)
            setProperty(imageTag .. '.alpha', 1)
        end

        local jumpY = screenHeight / 2 - 340
        doTweenY(imageTag .. '_up', imageTag, jumpY, 0.2, 'circOut')

        runTimer(imageTag .. '_fall', 0.25)
    end
end

function onTimerCompleted(tag)
    if tag:find('_fall') then
        local imageTag = tag:gsub('_fall', '')
        doTweenY(imageTag .. '_down', imageTag, screenHeight, 0.18, 'circIn')
        runTimer(imageTag .. '_remove', 0.25)
    elseif tag:find('_remove') then
        local imageTag = tag:gsub('_remove', '')
        removeLuaSprite(imageTag, true)
    end
end

function luaSpriteExists(tag)
    return getProperty(tag .. '.x') ~= nil
end
