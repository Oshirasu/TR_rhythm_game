function onEvent(name, value1, value2)
    if name == 'Hurt Player' then
        local damage = tonumber(value1) or 0.1 

        local currentHealth = getProperty('health')

        local newHealth = math.max(0.05, currentHealth - damage)

        setProperty('health', newHealth)
    end
end
