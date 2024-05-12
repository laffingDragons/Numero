

export function DCrelation(driver, conductor) {
    let DC = [+driver,+conductor]
    let relationStatus = "neutral";
    for (const key in relation) {
        relation[key].forEach(pair => {
            if (pair[0] === DC[0] && pair[1] === DC[1]) {
                relationStatus = key;
            }
    });
}
return relationStatus;
}

export function DCcareer (driver, conductor) {
    const driverNumber = parseInt(driver);
    const conductorNumber = parseInt(conductor);
    const careerKey = `${driverNumber}${conductorNumber}`;
    const careerInfo = career[careerKey];
    console.log('🚀___ ~ careerInfo_______ :', careerInfo);

    return {
        rating: careerInfo?.rating || '?',
        suitability: careerInfo?.suitability || 'No data available'
    };
}

const relation = {
    "anti": [[1,8],[8,1],[2,8],[8,2],[3,6],[6,3]],
    "struggling": [[4,4],[8,8],[2,9],[9,2],[7,7],[8,4],[4,8]],
    "opposite": [[4,2],[2,4],[4,9],[9,4],[9,9]],
    "best": [[1,1],[1,2],[1,5],[1,6],[1,9],[5,1],[5,5],[5,6],[6,5],[6,6]]
}

const career = {
    11 : {"rating":4, "suitability":"Fortunes Favourite"},
    12 : {"rating":4, "suitability":"Best for Navy (2 - Representing water, Moon)"},
    13 : {"rating":3.5, "suitability":"Best for Occult"},
    14 : {"rating":3, "suitability":"Politics (1-Sun (King) & 4 - Rahu)"},
    15 : {"rating":4, "suitability":"Banking & Finance"},
    16 : {"rating":3.5, "suitability":"Luxury/Glamour"},
    17 : {"rating":3, "suitability":"Best for Occult/Education/Research"},
    18 : {"rating":'', "suitability":"Struggle/Marriage?/Police/Politics"},
    19 : {"rating":5, "suitability":"Super successful"},

    21 : {"rating":3.5, "suitability":"Successful"},
    22 : {"rating":2, "suitability":"Best for water related work Drinking water / Sweets / Cold drink"},
    23 : {"rating":2.5, "suitability":"Occult Education / Healing"},
    24 : {"rating":1.5, "suitability":"Struggle / Depression "},
    25 : {"rating":3, "suitability":"Best for Property/Real estate / Finance M.B.A/Banking"},
    26 : {"rating":2.5, "suitability":"Best for sweets / Celebrations"},
    27 : {"rating":2.5, "suitability":"Teaching / Occult"},
    28 : {"rating":'', "suitability":"Struggle / Health issues"},
    29 : {"rating":1, "suitability":"Marriage problem"},

    31 : {"rating":3.5, "suitability":"Occult/Education/Healer/Doctor/Administrative job"},
    32 : {"rating":2.5, "suitability":"Water related work/Navy work"},
    33 : {"rating":3, "suitability":"Best for education/Occult"},
    34 : {"rating":2, "suitability":"Good for Sales & Marketing"},
    35 : {"rating":3, "suitability":"Excellent communication, Anchoring, News, Reading, Acting, Teaching, Banking "},
    36 : {"rating":'', "suitability":"Marrige/Health issues *Note: 3 & 6 are anti to each other."},
    37 : {"rating":4, "suitability":"Best for Education/Occult/Healing & Teaching"},
    38 : {"rating":2, "suitability":"Lawyer, Printing, Sales"},
    39 : {"rating":4, "suitability":"Education/Occult/Army/Administrative/Doctor"},


    41 : {"rating":3.5, "suitability":"Politics"},
    42 : {"rating":2, "suitability":"Depression/Struggle issues"},
    43 : {"rating":2.5, "suitability":"Sales & Marketing /Occult education "},
    44 : {"rating":1.5, "suitability":"Best for Law, But Struggle"},
    45 : {"rating":3, "suitability":"Banking/Event Management"},
    46 : {"rating":3, "suitability":"Media/Luxury/Glamour"},
    47 : {"rating":4, "suitability":"Successful/Best in Occult"},
    48 : {"rating":1, "suitability":"Struggle/Excellent for Law"},
    49 : {"rating":1, "suitability":"Struggle/Health/Problems/ Surgeries/Accidents"},


    51 : {"rating":4, "suitability":"Successful/Finance/loan/Property *Note:Balanced Life"},
    52 : {"rating":3.5, "suitability":"Property/Agriculture"},
    53 : {"rating":3, "suitability":"Communication/Occult"},
    54 : {"rating":3, "suitability":"Overall successful/Sales & Marketing"},
    55 : {"rating":4, "suitability":"Very Successful, Romantic *Note: May Be Lazy"},
    56 : {"rating":4.5, "suitability":"Life is Successful - Luxury/Media Sitting Job"},
    57 : {"rating":3, "suitability":"Occult & Banking"},
    58 : {"rating":3, "suitability":"Property/Law/Printing"},
    59 : {"rating":3, "suitability":"Successful/Law/Doctor/Food/Cooking"},
   

    61 : {"rating":3.5, "suitability":"Media/luxury/Glamour"},
    62 : {"rating":2, "suitability":"Sweet Shop/Liquid"},
    63 : {"rating":'', "suitability":"Health & Marriage issues"},
    64 : {"rating":3, "suitability":"Succesful/Media"},
    65 : {"rating":4.5, "suitability":"Super successful - Luxury/Media Sitting Job"},
    66 : {"rating":4, "suitability":"Super Successful in Media / Filming/Tour & travel"},
    67 : {"rating":3.5, "suitability":"Successful, Sports, Romantic"},
    68 : {"rating":3, "suitability":"Best for Law"},
    69 : {"rating":3, "suitability":"Successful but marriage problem, Controversies"},
    

    71 : {"rating":3, "suitability":"Best in Occult"},
    72 : {"rating":2, "suitability":"Intuitive/Occult"},
    73 : {"rating":3, "suitability":"Teaching/Healing/Occult"},
    74 : {"rating":3, "suitability":"Successful/Law/Occult"},
    75 : {"rating":3, "suitability":"Occult/Deskwork"},
    76 : {"rating":4, "suitability":"Sports/Luxury"},
    77 : {"rating":1, "suitability":"Disappointment in life/ Marriage problem/ life in danger"},
    78 : {"rating":1, "suitability":"Occult / Teaching"},
    79 : {"rating":1, "suitability":"Teaching/Occult Research"},
    
    81 : {"rating":'', "suitability":"Marriage problem"},
    82 : {"rating":'', "suitability":"Struggle/Health Problems"},
    83 : {"rating":2, "suitability":"Law/printing"},
    84 : {"rating":1, "suitability":"Best Law, Sales & Marketing "},
    85 : {"rating":3, "suitability":"Real state, Property"},
    86 : {"rating":3, "suitability":"Best for Law"},
    87 : {"rating":2, "suitability":"Occult / Leather business"},
    88 : {"rating":1, "suitability":"Struggle but good in sports"},
    89 : {"rating":1, "suitability":"Army/Doctor/Navy/Law/ Leather business"},
   

    91 : {"rating":3, "suitability":"Successful, Army is best"},
    92 : {"rating":1, "suitability":"Struggle / Marriage problem"},
    93 : {"rating":2.5, "suitability":"Occult/Healing"},
    94 : {"rating":1.5, "suitability":"Struggle/Surgeries/ Health issues"},
    95 : {"rating":3, "suitability":"Successful/Law/Desk Work"},
    96 : {"rating":2, "suitability":"Scandles/Controversies"},
    97 : {"rating":1, "suitability":"Occut/Teaching"},
    98 : {"rating":2, "suitability":"Army/Police/Navy"},
    99 : {"rating":1, "suitability":"Marriage problem/Anger"},
}

