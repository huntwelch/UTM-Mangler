(function(window) {
    var link = UTMMangler(window.location.toString());
    if (link) {
        window.location = link;
    }
})(window);

function UTMMangler(url) {
    var randomsource = [
        'lemonparty.org',
        'goatse.cx',
        'specialfriedrice.net',
        'bluewaffle.net',
        'meatspin.net',
        'tubgirl.ca',
        'jarsquatter.com'
    ];
    var randomshit = [
        'MonkeySpit',
        'Smut',
        'Filth',
        'Torture',
        'FuckDolphins',
        'FuckMyManager',
        'ZALGO',
        'ItHurtsWhenIPee',
        'SecretHerpes',
        'HateMyJob',
        'NSAIntercept',
        'SuckMyNuts',
        'KillPuppies',
        'TheRoosterCrowsAtMidnight',
        'ILikeLittleBoys',
        'TorturePorn',
        'SalesTeamBitesDonkeyAss',
        'YourMother',
        'BuyABunnyHat',
        'Murica',
        'Drugs',
        'LizardPeople',
        'LAANAA',
        'STELLAAAAAA',
        'DoesThisRagSmellFunny',
        'PhilMcKracken'
    ]

    var original = url;
    var parts = original.split('?');

    if( parts.length != 2 ) {
        return false;
    }

    var url = parts[0];
    var params = parts[1];

    if( params.indexOf('utm_') == -1 ) {
        return false;
    }

    params = params.split('&');

    var param, parts, get, len = params.length;
    while( len-- ) {
        param = params[len];    
        if( param.indexOf('utm') != 0 ) continue;
        try {
            parts = param.split('=');
            if( parts[0] == 'utm_source' ) {
                get = Math.floor((Math.random() * randomsource.length));
                value = randomsource[get];
            } else {
                get = Math.floor((Math.random() * randomshit.length));
                value = randomshit[get];
            }
            params[len] = parts[0] + '=' + value;
        } catch(e) {
            continue;
        }
    }

    params = params.join('&');
    var link = url + '?' + params + '&utm_mangled=fuckyeah';    

    return link;
}

