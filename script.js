const players = {
    pointGuards: [
        { name: `Stephen Curry`, position: `PG`, rpm: 7.72 },
        { name: `Damian Lillard`, position: `PG`, rpm: 5.56 },
        { name: `Mike Conley`, position: `PG`, rpm: 5.5 },
        { name: `Kyle Lowry`, position: `PG`, rpm: 4.9 },
        { name: `Jrue Holiday`, position: `PG`, rpm: 4.44 },
        { name: `Devonte' Graham`, position: `PG`, rpm: 4.09 },
        { name: `Lonzo Ball`, position: `PG`, rpm: 3.99 },
        { name: `Kyrie Irving`, position: `PG`, rpm: 3.82 },
        { name: `Patty Mills`, position: `PG`, rpm: 3.43 },
        { name: `Chris Paul`, position: `PG`, rpm: 3.1 },
        { name: `Jamal Murray`, position: `PG`, rpm: 3.07 },
        { name: `Patrick Beverley`, position: `PG`, rpm: 2.95 },
        { name: `Cameron Payne`, position: `PG`, rpm: 2.9 },
        { name: `Ben Simmons`, position: `PG`, rpm: 2.76 },
        { name: `De'Aaron Fox`, position: `PG`, rpm: 2.72 },
        { name: `LaMelo Ball`, position: `PG`, rpm: 2.64 },
        { name: `Jordan Clarkson`, position: `PG`, rpm: 2.63 },
        { name: `Luka Doncic`, position: `PG`, rpm: 2.03 },
        { name: `Goran Dragic`, position: `PG`, rpm: 1.97 },
        { name: `Marcus Smart`, position: `PG`, rpm: 1.88 },
        { name: `Trae Young`, position: `PG`, rpm: 1.79 },
        { name: `Monte Morris`, position: `PG`, rpm: 1.79 },
        { name: `Derrick White`, position: `PG`, rpm: 1.61 },
        { name: `Dejounte Murray`, position: `PG`, rpm: 1.05 },
        { name: `Dennis Schroder`, position: `PG`, rpm: 1.03 },
        { name: `Ish Smith`, position: `PG`, rpm: 0.97 },
        { name: `George Hill`, position: `PG`, rpm: 0.8 },
        { name: `Malcolm Brogdon`, position: `PG`, rpm: 0.58 },
        { name: `Avery Bradley`, position: `PG`, rpm: 0.32 },
        { name: `Trey Burke`, position: `PG`, rpm: 0.22 },
        { name: `D'Angelo Russell`, position: `PG`, rpm: 0.19 },
        { name: `Carsen Edwards`, position: `PG`, rpm: 0.17 },
        { name: `Ryan Arcidiacono`, position: `PG`, rpm: 0.03 },
        { name: `Ja Morant`, position: `PG`, rpm: -0.05 },
        { name: `Chris Chiozza`, position: `PG`, rpm: -0.08 },
        { name: `Kemba Walker`, position: `PG`, rpm: -0.13 },
        { name: `Tyler Herro`, position: `PG`, rpm: -0.26 },
        { name: `John Wall`, position: `PG`, rpm: -0.29 },
        { name: `Jalen Brunson`, position: `PG`, rpm: -0.4 },
        { name: `Collin Sexton`, position: `PG`, rpm: -0.46 },
        { name: `Reggie Jackson`, position: `PG`, rpm: -0.49 },
        { name: `Tyrese Haliburton`, position: `PG`, rpm: -0.58 },
        { name: `Jevon Carter`, position: `PG`, rpm: -0.73 },
        { name: `Payton Pritchard`, position: `PG`, rpm: -0.77 },
        { name: `Raul Neto`, position: `PG`, rpm: -0.86 },
        { name: `Brandon Goodwin`, position: `PG`, rpm: -0.91 },
        { name: `Tyus Jones`, position: `PG`, rpm: -0.95 },
        { name: `Russell Westbrook`, position: `PG`, rpm: -1.04 },
        { name: `Edmond Sumner`, position: `PG`, rpm: -1.05 },
        { name: `Ricky Rubio`, position: `PG`, rpm: -1.08 },
        { name: `Facundo Campazzo`, position: `PG`, rpm: -1.3 },
        { name: `T.J. McConnell`, position: `PG`, rpm: -1.34 },
        { name: `Coby White`, position: `PG`, rpm: -1.44 },
        { name: `D.J. Augustin`, position: `PG`, rpm: -1.51 },
        { name: `Jordan McLaughlin`, position: `PG`, rpm: -1.61 },
        { name: `Austin Rivers`, position: `PG`, rpm: -1.87 },
        { name: `Brad Wanamaker`, position: `PG`, rpm: -2.05 },
        { name: `Derrick Rose`, position: `PG`, rpm: -2.17 },
        { name: `Malachi Flynn`, position: `PG`, rpm: -2.19 },
        { name: `Aaron Holiday`, position: `PG`, rpm: -2.21 }
    ],
    shootingGuards: [
        { name: `CJ McCollum`, position: `SG`, rpm: 8.04 },
        { name: `Paul George`, position: `SG`, rpm: 6.81 },
        { name: `James Harden`, position: `SG`, rpm: 4.15 },
        { name: `Donovan Mitchell`, position: `SG`, rpm: 3.88 },
        { name: `Fred VanVleet`, position: `SG`, rpm: 3.87 },
        { name: `Jaylen Brown`, position: `SG`, rpm: 3.82 },
        { name: `Bogdan Bogdanovic`, position: `SG`, rpm: 3.68 },
        { name: `Donte DiVincenzo`, position: `SG`, rpm: 3.24 },
        { name: `Terry Rozier`, position: `SG`, rpm: 3.09 },
        { name: `Caris LeVert`, position: `SG`, rpm: 2.9 },
        { name: `Bradley Beal`, position: `SG`, rpm: 2.69 },
        { name: `Kyle Guy`, position: `SG`, rpm: 2.35 },
        { name: `Eric Gordon`, position: `SG`, rpm: 2.2 },
        { name: `Victor Oladipo`, position: `SG`, rpm: 2.09 },
        { name: `Grayson Allen`, position: `SG`, rpm: 2.09 },
        { name: `De'Anthony Melton`, position: `SG`, rpm: 2 },
        { name: `Norman Powell`, position: `SG`, rpm: 1.95 },
        { name: `Mychal Mulder`, position: `SG`, rpm: 1.7 },
        { name: `Terence Davis`, position: `SG`, rpm: 1.62 },
        { name: `Evan Fournier`, position: `SG`, rpm: 1.58 },
        { name: `Max Strus`, position: `SG`, rpm: 1.35 },
        { name: `Tyler Johnson`, position: `SG`, rpm: 1.28 },
        { name: `Jordan Poole`, position: `SG`, rpm: 1.26 },
        { name: `Damion Lee`, position: `SG`, rpm: 1.15 },
        { name: `Mason Jones`, position: `SG`, rpm: 1.06 },
        { name: `Duncan Robinson`, position: `SG`, rpm: 1.03 },
        { name: `PJ Dozier`, position: `SG`, rpm: 1.01 },
        { name: `Immanuel Quickley`, position: `SG`, rpm: 0.94 },
        { name: `Denzel Valentine`, position: `SG`, rpm: 0.91 },
        { name: `Wayne Ellington`, position: `SG`, rpm: 0.82 },
        { name: `Josh Hart`, position: `SG`, rpm: 0.77 },
        { name: `David Nwaba`, position: `SG`, rpm: 0.75 },
        { name: `Isaiah Joe`, position: `SG`, rpm: 0.74 },
        { name: `Desmond Bane`, position: `SG`, rpm: 0.72 },
        { name: `Malik Beasley`, position: `SG`, rpm: 0.69 },
        { name: `Shai Gilgeous-Alexander`, position: `SG`, rpm: 0.67 },
        { name: `Garrison Mathews`, position: `SG`, rpm: 0.67 },
        { name: `Devin Booker`, position: `SG`, rpm: 0.61 },
        { name: `Pat Connaughton`, position: `SG`, rpm: 0.57 },
        { name: `Zach LaVine`, position: `SG`, rpm: 0.49 },
        { name: `Garrett Temple`, position: `SG`, rpm: 0.47 },
        { name: `Seth Curry`, position: `SG`, rpm: 0.4 },
        { name: `Dillon Brooks`, position: `SG`, rpm: 0.4 },
        { name: `Alec Burks`, position: `SG`, rpm: 0.4 },
        { name: `Svi Mykhailiuk`, position: `SG`, rpm: 0.36 },
        { name: `Josh Jackson`, position: `SG`, rpm: 0.3 },
        { name: `Kentavious Caldwell-Pope`, position: `SG`, rpm: 0.15 },
        { name: `Jeremy Lamb`, position: `SG`, rpm: 0.15 },
        { name: `Ben McLemore`, position: `SG`, rpm: 0.13 },
        { name: `Justin Holiday`, position: `SG`, rpm: 0.08 },
        { name: `Shake Milton`, position: `SG`, rpm: 0.03 },
        { name: `Langston Galloway`, position: `SG`, rpm: 0.03 },
        { name: `Kenrich Williams`, position: `SG`, rpm: 0 },
        { name: `Sterling Brown`, position: `SG`, rpm: -0.01 },
        { name: `Bryn Forbes`, position: `SG`, rpm: -0.32 },
        { name: `Lou Williams`, position: `SG`, rpm: -0.38 },
        { name: `JJ Redick`, position: `SG`, rpm: -0.4 },
        { name: `Damyean Dotson`, position: `SG`, rpm: -0.43 },
        { name: `Buddy Hield`, position: `SG`, rpm: -0.44 },
        { name: `Jaylen Nowell`, position: `SG`, rpm: -0.45 }
    ],
    smallForwards: [
        { name: `LeBron James`, position: `SF`, rpm: 8.75 },
        { name: `Kawhi Leonard`, position: `SF`, rpm: 4.01 },
        { name: `Joe Harris`, position: `SF`, rpm: 3.24 },
        { name: `De'Andre Hunter`, position: `SF`, rpm: 3.18 },
        { name: `Cameron Johnson`, position: `SF`, rpm: 2.28 },
        { name: `Jayson Tatum`, position: `SF`, rpm: 2.01 },
        { name: `Bojan Bogdanovic`, position: `SF`, rpm: 1.86 },
        { name: `Khris Middleton`, position: `SF`, rpm: 1.76 },
        { name: `Kyle Anderson`, position: `SF`, rpm: 1.64 },
        { name: `Joe Ingles`, position: `SF`, rpm: 1.63 },
        { name: `Jimmy Butler`, position: `SF`, rpm: 1.49 },
        { name: `Jerami Grant`, position: `SF`, rpm: 1.47 },
        { name: `Davis Bertans`, position: `SF`, rpm: 1.34 },
        { name: `Rudy Gay`, position: `SF`, rpm: 1.32 },
        { name: `Gordon Hayward`, position: `SF`, rpm: 1.24 },
        { name: `Brandon Ingram`, position: `SF`, rpm: 1.16 },
        { name: `Kyle Kuzma`, position: `SF`, rpm: 1.06 },
        { name: `Mikal Bridges`, position: `SF`, rpm: 0.93 },
        { name: `Kent Bazemore`, position: `SF`, rpm: 0.86 },
        { name: `Doug McDermott`, position: `SF`, rpm: 0.72 },
        { name: `Andrew Wiggins`, position: `SF`, rpm: 0.54 },
        { name: `Harrison Barnes`, position: `SF`, rpm: 0.33 },
        { name: `Tim Hardaway Jr.`, position: `SF`, rpm: 0.29 },
        { name: `Abdel Nader`, position: `SF`, rpm: 0.09 },
        { name: `OG Anunoby`, position: `SF`, rpm: -0.01 },
        { name: `Justin Jackson`, position: `SF`, rpm: -0.22 },
        { name: `Saddiq Bey`, position: `SF`, rpm: -0.27 },
        { name: `Otto Porter Jr.`, position: `SF`, rpm: -0.29 },
        { name: `Juan Toscano-Anderson`, position: `SF`, rpm: -0.34 },
        { name: `Danny Green`, position: `SF`, rpm: -0.42 },
        { name: `Cedi Osman`, position: `SF`, rpm: -0.44 },
        { name: `Keldon Johnson`, position: `SF`, rpm: -0.63 },
        { name: `Darius Miller`, position: `SF`, rpm: -0.79 },
        { name: `James Ennis III`, position: `SF`, rpm: -0.84 },
        { name: `Jae'Sean Tate`, position: `SF`, rpm: -0.89 },
        { name: `Jake Layman`, position: `SF`, rpm: -0.94 },
        { name: `Luguentz Dort`, position: `SF`, rpm: -1 },
        { name: `Caleb Martin`, position: `SF`, rpm: -1.08 },
        { name: `Will Barton`, position: `SF`, rpm: -1.17 },
        { name: `Georges Niang`, position: `SF`, rpm: -1.17 },
        { name: `Reggie Bullock`, position: `SF`, rpm: -1.27 },
        { name: `DeMar DeRozan`, position: `SF`, rpm: -1.29 },
        { name: `Jordan Nwora`, position: `SF`, rpm: -1.3 },
        { name: `Miles Bridges`, position: `SF`, rpm: -1.35 },
        { name: `Michael Porter Jr.`, position: `SF`, rpm: -1.54 },
        { name: `Andre Iguodala`, position: `SF`, rpm: -1.55 },
        { name: `Cody Martin`, position: `SF`, rpm: -1.61 },
        { name: `Jarrett Culver`, position: `SF`, rpm: -1.81 },
        { name: `Aaron Nesmith`, position: `SF`, rpm: -1.93 },
        { name: `Deni Avdija`, position: `SF`, rpm: -2.03 },
        { name: `DeAndre' Bembry`, position: `SF`, rpm: -2.12 },
        { name: `Paul Reed`, position: `SF`, rpm: -2.13 },
        { name: `Yuta Watanabe`, position: `SF`, rpm: -2.38 },
        { name: `Kevin Knox II`, position: `SF`, rpm: -2.44 },
        { name: `Stanley Johnson`, position: `SF`, rpm: -2.51 },
        { name: `Derrick Jones Jr.`, position: `SF`, rpm: -2.52 },
        { name: `Solomon Hill`, position: `SF`, rpm: -2.58 },
        { name: `Dwayne Bacon`, position: `SF`, rpm: -2.62 },
        { name: `Marcus Morris Sr.`, position: `SF`, rpm: -3 },
        { name: `Nassir Little`, position: `SF`, rpm: -3.06 }
    ],
    powerForwards: [
        { name: `Giannis Antetokounmpo`, position: `PF`, rpm: 5.99 },
        { name: `Kevin Durant`, position: `PF`, rpm: 3.86 },
        { name: `Anthony Davis`, position: `PF`, rpm: 3.6 },
        { name: `Chris Boucher`, position: `PF`, rpm: 3.42 },
        { name: `Jae Crowder`, position: `PF`, rpm: 2.58 },
        { name: `Julius Randle`, position: `PF`, rpm: 2.11 },
        { name: `Dario Saric`, position: `PF`, rpm: 1.9 },
        { name: `Tobias Harris`, position: `PF`, rpm: 1.65 },
        { name: `John Collins`, position: `PF`, rpm: 1.64 },
        { name: `Nemanja Bjelica`, position: `PF`, rpm: 1.51 },
        { name: `Zion Williamson`, position: `PF`, rpm: 1.23 },
        { name: `Lauri Markkanen`, position: `PF`, rpm: 0.86 },
        { name: `Kelly Olynyk`, position: `PF`, rpm: 0.79 },
        { name: `Domantas Sabonis`, position: `PF`, rpm: 0.77 },
        { name: `Paul Millsap`, position: `PF`, rpm: 0.77 },
        { name: `Nicolas Batum`, position: `PF`, rpm: 0.63 },
        { name: `Royce O'Neale`, position: `PF`, rpm: 0.55 },
        { name: `Eric Paschall`, position: `PF`, rpm: 0.2 },
        { name: `Pascal Siakam`, position: `PF`, rpm: 0.01 },
        { name: `Frank Kaminsky`, position: `PF`, rpm: -0.06 },
        { name: `Brandon Clarke`, position: `PF`, rpm: -0.28 },
        { name: `Thaddeus Young`, position: `PF`, rpm: -0.45 },
        { name: `Patrick Patterson`, position: `PF`, rpm: -0.7 },
        { name: `JaMychal Green`, position: `PF`, rpm: -0.76 },
        { name: `Trey Lyles`, position: `PF`, rpm: -0.79 },
        { name: `Markieff Morris`, position: `PF`, rpm: -0.86 },
        { name: `Dorian Finney-Smith`, position: `PF`, rpm: -1.01 },
        { name: `Danilo Gallinari`, position: `PF`, rpm: -1.03 },
        { name: `Aaron Gordon`, position: `PF`, rpm: -1.09 },
        { name: `Taurean Prince`, position: `PF`, rpm: -1.11 },
        { name: `Larry Nance Jr.`, position: `PF`, rpm: -1.13 },
        { name: `Zeke Nnaji`, position: `PF`, rpm: -1.23 },
        { name: `Blake Griffin`, position: `PF`, rpm: -1.31 },
        { name: `Jarred Vanderbilt`, position: `PF`, rpm: -1.42 },
        { name: `Juancho Hernangomez`, position: `PF`, rpm: -1.45 },
        { name: `Precious Achiuwa`, position: `PF`, rpm: -1.47 },
        { name: `Carmelo Anthony`, position: `PF`, rpm: -1.67 },
        { name: `Draymond Green`, position: `PF`, rpm: -1.71 },
        { name: `James Johnson`, position: `PF`, rpm: -1.77 },
        { name: `Obi Toppin`, position: `PF`, rpm: -1.83 },
        { name: `Semi Ojeleye`, position: `PF`, rpm: -1.85 },
        { name: `Maxi Kleber`, position: `PF`, rpm: -1.86 },
        { name: `Marvin Bagley III`, position: `PF`, rpm: -2.02 },
        { name: `Chris Silva`, position: `PF`, rpm: -2.02 },
        { name: `Robert Covington`, position: `PF`, rpm: -2.12 },
        { name: `Dean Wade`, position: `PF`, rpm: -2.23 },
        { name: `Jalen McDaniels`, position: `PF`, rpm: -2.24 },
        { name: `D.J. Wilson`, position: `PF`, rpm: -2.28 },
        { name: `Darius Bazley`, position: `PF`, rpm: -2.35 },
        { name: `Jeff Green`, position: `PF`, rpm: -2.41 },
        { name: `Chuma Okeke`, position: `PF`, rpm: -2.45 },
        { name: `Rui Hachimura`, position: `PF`, rpm: -2.65 },
        { name: `Jaden McDaniels`, position: `PF`, rpm: -2.65 },
        { name: `Nicolo Melli`, position: `PF`, rpm: -2.67 },
        { name: `P.J. Washington`, position: `PF`, rpm: -2.77 },
        { name: `Mike Scott`, position: `PF`, rpm: -3.1 },
        { name: `Reggie Perry`, position: `PF`, rpm: -3.39 },
        { name: `Onyeka Okongwu`, position: `PF`, rpm: -3.5 },
        { name: `Tristan Thompson`, position: `PF`, rpm: -3.56 },
        { name: `Drew Eubanks`, position: `PF`, rpm: -3.82 }
    ],
    centers: [
        { name: `Joel Embiid`, position: `C`, rpm: 5.64 },
        { name: `Christian Wood`, position: `C`, rpm: 4.63 },
        { name: `Nikola Jokic`, position: `C`, rpm: 4.47 },
        { name: `Rudy Gobert`, position: `C`, rpm: 3.38 },
        { name: `Mike Muscala`, position: `C`, rpm: 2.74 },
        { name: `Clint Capela`, position: `C`, rpm: 2.06 },
        { name: `Thomas Bryant`, position: `C`, rpm: 2.02 },
        { name: `Karl-Anthony Towns`, position: `C`, rpm: 2.01 },
        { name: `Nikola Vucevic`, position: `C`, rpm: 1.44 },
        { name: `Myles Turner`, position: `C`, rpm: 1.4 },
        { name: `Al Horford`, position: `C`, rpm: 1.17 },
        { name: `Bam Adebayo`, position: `C`, rpm: 0.97 },
        { name: `Kristaps Porzingis`, position: `C`, rpm: 0.93 },
        { name: `Jakob Poeltl`, position: `C`, rpm: 0.9 },
        { name: `Serge Ibaka`, position: `C`, rpm: 0.83 },
        { name: `Jonas Valanciunas`, position: `C`, rpm: 0.6 },
        { name: `Bobby Portis`, position: `C`, rpm: 0.46 },
        { name: `Daniel Theis`, position: `C`, rpm: 0.44 },
        { name: `Moritz Wagner`, position: `C`, rpm: 0.41 },
        { name: `Jarrett Allen`, position: `C`, rpm: 0.2 },
        { name: `Montrezl Harrell`, position: `C`, rpm: 0.19 },
        { name: `Mason Plumlee`, position: `C`, rpm: 0.07 },
        { name: `Ivica Zubac`, position: `C`, rpm: -0.22 },
        { name: `Brook Lopez`, position: `C`, rpm: -0.24 },
        { name: `Willie Cauley-Stein`, position: `C`, rpm: -0.25 },
        { name: `Richaun Holmes`, position: `C`, rpm: -0.46 },
        { name: `Naz Reid`, position: `C`, rpm: -0.5 },
        { name: `Gorgui Dieng`, position: `C`, rpm: -0.57 },
        { name: `Daniel Gafford`, position: `C`, rpm: -0.67 },
        { name: `Robin Lopez`, position: `C`, rpm: -0.69 },
        { name: `Robert Williams III`, position: `C`, rpm: -0.86 },
        { name: `Xavier Tillman`, position: `C`, rpm: -0.92 },
        { name: `Cody Zeller`, position: `C`, rpm: -1 },
        { name: `Jusuf Nurkic`, position: `C`, rpm: -1.1 },
        { name: `DeAndre Jordan`, position: `C`, rpm: -1.1 },
        { name: `Isaiah Stewart`, position: `C`, rpm: -1.12 },
        { name: `Deandre Ayton`, position: `C`, rpm: -1.13 },
        { name: `Derrick Favors`, position: `C`, rpm: -1.18 },
        { name: `Andre Drummond`, position: `C`, rpm: -1.27 },
        { name: `James Wiseman`, position: `C`, rpm: -1.36 },
        { name: `Kevon Looney`, position: `C`, rpm: -1.4 },
        { name: `Mo Bamba`, position: `C`, rpm: -1.46 },
        { name: `Steven Adams`, position: `C`, rpm: -1.58 },
        { name: `Goga Bitadze`, position: `C`, rpm: -1.67 },
        { name: `Mitchell Robinson`, position: `C`, rpm: -1.75 },
        { name: `Willy Hernangomez`, position: `C`, rpm: -1.8 },
        { name: `Taj Gibson`, position: `C`, rpm: -1.83 },
        { name: `LaMarcus Aldridge`, position: `C`, rpm: -1.86 },
        { name: `Isaiah Roby`, position: `C`, rpm: -1.95 },
        { name: `Jahlil Okafor`, position: `C`, rpm: -1.95 },
        { name: `DeMarcus Cousins`, position: `C`, rpm: -2.03 },
        { name: `Bismack Biyombo`, position: `C`, rpm: -2.11 },
        { name: `Enes Kanter`, position: `C`, rpm: -2.12 },
        { name: `Marc Gasol`, position: `C`, rpm: -2.23 },
        { name: `Khem Birch`, position: `C`, rpm: -2.29 },
        { name: `Dwight Powell`, position: `C`, rpm: -2.46 },
        { name: `Wendell Carter Jr.`, position: `C`, rpm: -2.57 },
        { name: `JaVale McGee`, position: `C`, rpm: -2.58 },
        { name: `Tony Bradley`, position: `C`, rpm: -2.61 },
        { name: `Alex Len`, position: `C`, rpm: -2.8 }
    ],
    reserves: [
        { name: `Kira Lewis Jr.`, position: `PG`, rpm: -2.34 },
        { name: `Tyrese Maxey`, position: `PG`, rpm: -2.49 },
        { name: `Theo Maledon`, position: `PG`, rpm: -2.58 },
        { name: `Dante Exum`, position: `PG`, rpm: -2.62 },
        { name: `Michael Carter-Williams`, position: `PG`, rpm: -2.7 },
        { name: `Gabe Vincent`, position: `PG`, rpm: -2.72 },
        { name: `Cole Anthony`, position: `PG`, rpm: -2.94 },
        { name: `Rajon Rondo`, position: `PG`, rpm: -3 },
        { name: `Darius Garland`, position: `PG`, rpm: -3.03 },
        { name: `Elfrid Payton`, position: `PG`, rpm: -3.15 },
        { name: `Markelle Fultz`, position: `PG`, rpm: -3.4 },
        { name: `Jeff Teague`, position: `PG`, rpm: -3.41 },
        { name: `Killian Hayes`, position: `PG`, rpm: -3.61 },
        { name: `Dennis Smith Jr.`, position: `PG`, rpm: -3.76 },
        { name: `Tremont Waters`, position: `PG`, rpm: -4.05 },
        { name: `Saben Lee`, position: `PG`, rpm: -5.22 },
        { name: `R.J. Hampton`, position: `PG`, rpm: -5.84 },
        { name: `Javonte Green`, position: `SG`, rpm: -2.43 },
        { name: `Wesley Matthews`, position: `SG`, rpm: -2.47 },
        { name: `Cory Joseph`, position: `SG`, rpm: -2.78 },
        { name: `Talen Horton-Tucker`, position: `SG`, rpm: -2.84 },
        { name: `Anfernee Simons`, position: `SG`, rpm: -3.15 },
        { name: `E'Twaun Moore`, position: `SG`, rpm: -3.26 },
        { name: `Terance Mann`, position: `SG`, rpm: -3.49 },
        { name: `John Konchar`, position: `SG`, rpm: -3.52 },
        { name: `Lonnie Walker IV`, position: `SG`, rpm: -3.64 },
        { name: `Cam Reddish`, position: `SG`, rpm: -4.04 },
        { name: `Josh Green`, position: `SG`, rpm: -4.05 },
        { name: `Karim Mane`, position: `SG`, rpm: -4.53 },
        { name: `Isaac Okoro`, position: `SG`, rpm: -5.48 },
        { name: `Isaac Bonga`, position: `SF`, rpm: -3.22 },
        { name: `Torrey Craig`, position: `SF`, rpm: -3.28 },
        { name: `Maurice Harkless`, position: `SF`, rpm: -3.37 },
        { name: `Kenyon Martin Jr.`, position: `SF`, rpm: -3.41 },
        { name: `Josh Okogie`, position: `SF`, rpm: -3.49 },
        { name: `Troy Brown Jr.`, position: `SF`, rpm: -3.74 },
        { name: `Chandler Hutchison`, position: `SF`, rpm: -3.86 },
        { name: `Sekou Doumbouya`, position: `SF`, rpm: -4.08 },
        { name: `Danuel House Jr.`, position: `SF`, rpm: -4.14 },
        { name: `Gary Clark`, position: `SF`, rpm: -4.14 },
        { name: `Glenn Robinson III`, position: `SF`, rpm: -4.16 },
        { name: `Anthony Edwards`, position: `SF`, rpm: -4.35 },
        { name: `Wes Iwundu`, position: `SF`, rpm: -4.65 },
        { name: `Thanasis Antetokounmpo`, position: `SF`, rpm: -4.65 },
        { name: `KZ Okpala`, position: `SF`, rpm: -4.7 },
        { name: `Grant Williams`, position: `PF`, rpm: -4 },
        { name: `Aleksej Pokusevski`, position: `PF`, rpm: -4.03 },
        { name: `Bruno Fernando`, position: `PF`, rpm: -4.37 },
        { name: `Lamar Stevens`, position: `PF`, rpm: -4.51 },
        { name: `Patrick Williams`, position: `PF`, rpm: -4.7 },
        { name: `Harry Giles III`, position: `PF`, rpm: -5.42 },
        { name: `P.J. Tucker`, position: `PF`, rpm: -5.53 },
        { name: `Jaxson Hayes`, position: `C`, rpm: -2.8 },
        { name: `Aron Baynes`, position: `C`, rpm: -2.88 },
        { name: `Tacko Fall`, position: `C`, rpm: -2.9 },
        { name: `Nerlens Noel`, position: `C`, rpm: -3.14 },
        { name: `Hassan Whiteside`, position: `C`, rpm: -3.24 },
        { name: `Isaiah Hartenstein`, position: `C`, rpm: -3.68 },
        { name: `Dwight Howard`, position: `C`, rpm: -3.87 },
        { name: `Ed Davis`, position: `C`, rpm: -4.6 },
        { name: `Terrence Ross`, position: `SG`, rpm: -0.57 },
        { name: `Kendrick Nunn`, position: `SG`, rpm: -0.6 },
        { name: `Tomas Satoransky`, position: `SG`, rpm: -0.67 },
        { name: `Landry Shamet`, position: `SG`, rpm: -0.68 },
        { name: `Devin Vassell`, position: `SG`, rpm: -0.7 },
        { name: `Alex Caruso`, position: `SG`, rpm: -0.77 },
        { name: `Nickeil Alexander-Walker`, position: `SG`, rpm: -0.85 },
        { name: `RJ Barrett`, position: `SG`, rpm: -0.88 },
        { name: `Kevin Huerter`, position: `SG`, rpm: -0.91 },
        { name: `CJ Elleby`, position: `SG`, rpm: -0.97 },
        { name: `Gary Harris`, position: `SG`, rpm: -1.09 },
        { name: `Malik Monk`, position: `SG`, rpm: -1.1 },
        { name: `DaQuan Jeffries`, position: `SG`, rpm: -1.13 },
        { name: `Timothe Luwawu-Cabarrot`, position: `SG`, rpm: -1.19 },
        { name: `Eric Bledsoe`, position: `SG`, rpm: -1.22 },
        { name: `Hamidou Diallo`, position: `SG`, rpm: -1.28 },
        { name: `Gary Trent Jr.`, position: `SG`, rpm: -1.3 },
        { name: `Delon Wright`, position: `SG`, rpm: -1.47 },
        { name: `Josh Richardson`, position: `SG`, rpm: -1.51 },
        { name: `Kelly Oubre Jr.`, position: `SG`, rpm: -1.69 },
        { name: `Dylan Windler`, position: `SG`, rpm: -1.76 },
        { name: `Rodney McGruder`, position: `SG`, rpm: -1.79 },
        { name: `Luke Kennard`, position: `SG`, rpm: -1.81 },
        { name: `Furkan Korkmaz`, position: `SG`, rpm: -1.84 },
        { name: `Tony Snell`, position: `SG`, rpm: -1.95 },
        { name: `Jerome Robinson`, position: `SG`, rpm: -2.12 },
        { name: `Miye Oni`, position: `SG`, rpm: -2.32 },
        { name: `Bruce Brown`, position: `SG`, rpm: -2.37 },
        { name: `Matisse Thybulle`, position: `SG`, rpm: -2.38 },
        { name: `Sean McDermott`, position: `SG`, rpm: -2.39 }
    ],
    generateTeam(name = "Your Team") {
        const team = []
        const bench = []
        function getStarters(position) {
            const player1 = position[Math.floor(Math.random() * 60)]
            const remainingPlayers = position.filter(players => {
                return players !== player1
            })
            const player2 = remainingPlayers[Math.floor(Math.random() * 59)]
            if (player1.rpm >= player2.rpm) {
                team.push(player1)
                bench.push(player2)
            } else {
                team.push(player2)
                bench.push(player1)
            }
        }        
        getStarters(this.pointGuards)
        getStarters(this.shootingGuards)
        getStarters(this.smallForwards)
        getStarters(this.powerForwards)
        getStarters(this.centers)
        const reserve1 = this.reserves[Math.floor(Math.random() * 90)]
        let remainingReserves = this.reserves.filter(players => {
            return players !== reserve1
        })
        const reserve2 = remainingReserves[Math.floor(Math.random() * 89)]
        remainingReserves = this.reserves.filter(players => {
            return players !== reserve2
        })
        const reserve3 = remainingReserves[Math.floor(Math.random() * 88)]
        bench.push(reserve1)
        bench.push(reserve2)
        bench.push(reserve3)
        bench.sort((a, b) => b.rpm - a.rpm)
        for (let i = 0; i < bench.length; i++) {
            team.push(bench[i])
        }
        const message = `
        <h2>Your Roster</h2> <br>
        <h3>Starting Lineup</h3> <br>
        PG - ${team[0].name} <br>
        SG - ${team[1].name} <br>
        SF - ${team[2].name} <br>
        PF - ${team[3].name} <br>
        C - ${team[4].name} <br>
        <h3>Bench</h3> <br>
        ${team[5].position} - ${team[5].name} <br>
        ${team[6].position} - ${team[6].name} <br>
        ${team[7].position} - ${team[7].name} <br>
        ${team[8].position} - ${team[8].name} <br>
        ${team[9].position} - ${team[9].name} <br>
        ${team[10].position} - ${team[10].name} <br>
        ${team[11].position} - ${team[11].name} <br>
        ${team[12].position} - ${team[12].name} <br>
        `
        return team
    },
    generateLeague() {}
}
