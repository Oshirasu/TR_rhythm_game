local floatActive = false
local floatTimer = 0
local floatSpeed = 1.5
local floatRange = 12

local baseBFY = nil
local baseDADY = nil

function onEvent(name, value1, value2)
    if name == 'Float Characters' then
        if string.lower(string.gsub(value1 or '', '%s+', '')) == 'on' then
            floatActive = true
            floatTimer = 0

            baseBFY = getProperty('boyfriend.y')
            baseDADY = getProperty('dad.y')

            if value2 ~= nil and value2 ~= '' then
                local params = split(value2, ",")
                floatSpeed = tonumber(params[1]) or 1.5
                floatRange = tonumber(params[2]) or 12
            end

        elseif string.lower(string.gsub(value1 or '', '%s+', '')) == 'off' then
            floatActive = false
            if baseBFY and baseDADY then
                setProperty('boyfriend.y', baseBFY)
                setProperty('dad.y', baseDADY)
            end
        end
    end
end

function onUpdate(elapsed)
    if floatActive and baseBFY and baseDADY then
        floatTimer = floatTimer + elapsed * floatSpeed
        local offset = math.sin(floatTimer) * floatRange

        setProperty('boyfriend.y', baseBFY + offset)
        setProperty('dad.y', baseDADY + offset)
    end
end

function split(inputstr, sep)
    if sep == nil then sep = "," end
    local t = {}
    for str in string.gmatch(inputstr, "([^" .. sep .. "]+)") do
        table.insert(t, str)
    end
    return t
end
