(function(window) {

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
        'ChildPorn',
        'IllegalHotties',
        'Smut',
        'Filth',
        'Torture',
        'FuckDolphins',
        'FuckMyManager',
        'Bitches',
        'ItHurtsWhenIPee',
        'CumGuzzlers',
        'GermanGooGirls',
        'PussyDestroyer',
        'SecretHerpes',
        'HateMyJob',
        'SuckMyNuts',
        'KillPuppies',
        'ILikeLittleBoys',
        'SexMarkets',
        'TorturePorn',
        'SalesTeamBitesDonkeyAss',
        'YourMother',
        'SnuffShorts',
        'PhilMcKracken'
    ]

    var original = window.location.toString();    
    var parts = original.split('?');

    if( parts.length != 2 ) {
        return alert("Can't work with this url.");
    }

    var url = parts[0];
    var params = parts[1];

    if( params.indexOf('utm_') == -1 ) {
        return alert("Couldn't find utm parameters.");
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
    var link = url + '?' + params;

    window.location = link;

})(window);

