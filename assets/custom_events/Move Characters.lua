function onEvent(name, value1, value2)
    if name == 'Move Characters' then
        local character = value1
        local posX = tonumber(value2)

        if posX == nil then return end

        local targetGroup = ''

        if character == 'dad' then
            targetGroup = 'dadGroup'
        elseif character == 'bf' or character == 'boyfriend' then
            targetGroup = 'boyfriendGroup'
        elseif character == 'gf' then
            targetGroup = 'gfGroup'
        end

        if targetGroup ~= '' then
            doTweenX('move' .. targetGroup, targetGroup, posX, 0.4, 'cubeOut')
        end
    end
end
