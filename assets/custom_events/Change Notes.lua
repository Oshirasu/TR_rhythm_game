local savedNoteSkin = nil
local savedSplashSkin = nil

function onCreatePost()
    precacheImage('Akage_Notes')
    precacheImage('Akage_Splashes')
    precacheImage('MikuerNotres')
    precacheImage('MikuerSplash')

    for i = 0, getProperty('unspawnNotes.length') - 1 do
        local texture = getPropertyFromGroup('unspawnNotes', i, 'texture')
        if texture ~= nil and texture ~= '' then
            savedNoteSkin = texture
            break
        end
    end

    savedSplashSkin = getPropertyFromClass('NoteSplash', 'texture') or 'noteSplashes'
end

function onEvent(name, value1, value2)
    if name ~= 'Change Notes' then return end

    local noteSkin = (value1 == nil or value1 == '' or value1 == 'default') and savedNoteSkin or value1
    local splashSkin = (value2 == nil or value2 == '' or value2 == 'default') and savedSplashSkin or value2

    for i = 0, getProperty('unspawnNotes.length') - 1 do
        if getPropertyFromGroup('unspawnNotes', i, 'noteType') == '' then
            setPropertyFromGroup('unspawnNotes', i, 'texture', noteSkin)
        end
    end

    for i = 0, getProperty('notes.length') - 1 do
        if getPropertyFromGroup('notes', i, 'noteType') == '' then
            setPropertyFromGroup('notes', i, 'texture', noteSkin)
        end
    end

    for i = 0, 3 do
        setPropertyFromGroup('playerStrums', i, 'texture', noteSkin)
        setPropertyFromGroup('opponentStrums', i, 'texture', noteSkin)
    end

    setPropertyFromClass('NoteSplash', 'texture', splashSkin)
end
