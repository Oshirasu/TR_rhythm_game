local bounceActive = false

local defaultBoyfriendY = 0
local defaultOpponentY = 0
local currentBoyfriendY = 0  
local currentOpponentY = 0  

function onEvent(name, value1, value2)
    if name == 'Bounce Characters' then
        if value1 == 'on' then
            bounceActive = true
        elseif value1 == 'off' then
            bounceActive = false
            setProperty('boyfriend.y', currentBoyfriendY)
            setProperty('dad.y', currentOpponentY)
        end
    end
end

function onCreate()
    defaultBoyfriendY = getProperty('boyfriend.y')
    defaultOpponentY = getProperty('dad.y')

    currentBoyfriendY = defaultBoyfriendY
    currentOpponentY = defaultOpponentY
end

function onBeatHit()
    if bounceActive then
        charBounce('boyfriend', 40) -- ⬇️ más profundo
        charBounce('dad', 40)
    end
end

function charBounce(char, amount)
    local defaultY = getProperty(char .. '.y')

    if char == 'boyfriend' then
        currentBoyfriendY = defaultY
    elseif char == 'dad' then
        currentOpponentY = defaultY
    end

    -- Bajada un poco más rápida
    doTweenY(char .. 'BounceDown', char, defaultY + amount, 0.06, 'sineOut')
    
    -- Subida suave al lugar original
    runTimer(char .. 'BounceBack', 0.06, 1)
end

function onTimerCompleted(tag)
    if tag == 'boyfriendBounceBack' then
        doTweenY('boyfriendBack', 'boyfriend', currentBoyfriendY, 0.14, 'sineIn')
    elseif tag == 'dadBounceBack' then
        doTweenY('dadBack', 'dad', currentOpponentY, 0.14, 'sineIn')
    end
end
