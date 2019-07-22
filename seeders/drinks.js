<<<<<<< HEAD
require('dotenv').config() // for dev db seeding
const mongoose = require('mongoose');
const Drink = require('../models/drink');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

Drink.deleteMany({}, (err) => err ? console.log(err) : 'Collection removed')

const DRINKS = [
  {
    "FIELD1": 0,
    "drinkName": "'57 chevy with a white license plate",
    "dateModified": "2016-07-18 22:49:04",
    "idDrink": 14029,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "creme de cacao",
       "vodka"
    ],
    "instructions": "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
    "measures": [
       "1 oz white ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 1,
    "drinkName": "1-900-fuk-meup",
    "dateModified": "2016-07-18 22:27:04",
    "idDrink": 15395,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "absolut kurant",
       "grand marnier",
       "chambord raspberry liqueur",
       "midori melon liqueur",
       "malibu rum",
       "amaretto",
       "cranberry juice",
       "pineapple juice"
    ],
    "instructions": "Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.",
    "measures": [
       "1/2 oz ",
       "1/4 oz ",
       "1/4 oz ",
       "1/4 oz ",
       "1/4 oz ",
       "1/4 oz ",
       "1/2 oz ",
       "1/4 oz "
    ]
 },
  {
    "FIELD1": 2,
    "drinkName": "110 in the shade",
    "dateModified": "2016-02-03 14:51:57",
    "idDrink": 15423,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
    "glassType": "beer glass",
    "ingredients": [
       "lager",
       "tequila"
    ],
    "instructions": "Drop shooter in glass. Fill with beer",
    "measures": [
       "16 oz ",
       "1.5 oz "
    ]
 },
  {
    "FIELD1": 3,
    "drinkName": "151 florida bushwacker",
    "dateModified": "2016-07-18 22:28:43",
    "idDrink": 14588,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
    "glassType": "beer mug",
    "ingredients": [
       "malibu rum",
       "light rum",
       "151 proof rum",
       "dark creme de cacao",
       "cointreau",
       "milk",
       "coconut liqueur",
       "vanilla ice-cream"
    ],
    "instructions": "Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz bacardi ",
       "1 oz ",
       "1 oz ",
       "3 oz ",
       "1 oz ",
       "1 cup "
    ]
 },
  {
    "FIELD1": 4,
    "drinkName": "155 belmont",
    "dateModified": "2016-10-05 12:36:28",
    "idDrink": 15346,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
    "glassType": "white wine glass",
    "ingredients": [
       "dark rum",
       "light rum",
       "vodka",
       "orange juice"
    ],
    "instructions": "Blend with ice. Serve in a wine glass. Garnish with carrot.",
    "measures": [
       "1 shot ",
       "2 shots ",
       "1 shot ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 5,
    "drinkName": "24k nightmare",
    "dateModified": "2016-07-18 22:31:38",
    "idDrink": 17060,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "goldschlager",
       "jägermeister",
       "rumple minze",
       "151 proof rum"
    ],
    "instructions": "Add over ice,shake and pour.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz bacardi "
    ]
 },
  {
    "FIELD1": 6,
    "drinkName": "252",
    "dateModified": "2016-07-18 22:32:42",
    "idDrink": 15288,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "151 proof rum",
       "wild turkey"
    ],
    "instructions": "Add both ingredients to shot glass, shoot, and get drunk quick",
    "measures": [
       "1/2 shot bacardi ",
       "1/2 shot "
    ]
 },
  {
    "FIELD1": 7,
    "drinkName": "3 wise men",
    "dateModified": "2016-07-18 22:34:37",
    "idDrink": 13899,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "jack daniels",
       "johnnie walker",
       "jim beam"
    ],
    "instructions": "put them them in a glass... and slam it to tha head.",
    "measures": [
       "1/3 oz ",
       "1/3 oz ",
       "1/3 oz "
    ]
 },
  {
    "FIELD1": 8,
    "drinkName": "3-mile long island iced tea",
    "dateModified": "2016-08-31 19:42:52",
    "idDrink": 15300,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "gin",
       "light rum",
       "tequila",
       "triple sec",
       "vodka",
       "coca-cola",
       "sweet and sour",
       "bitters",
       "lemon"
    ],
    "instructions": "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1-2 dash ",
       "1 wedge "
    ]
 },
  {
    "FIELD1": 9,
    "drinkName": "410 gone",
    "dateModified": "2016-08-31 19:43:46",
    "idDrink": 13581,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "peach vodka",
       "coca-cola"
    ],
    "measures": [
       "2-3 oz"
    ]
 },
  {
    "FIELD1": 10,
    "drinkName": "50/50",
    "dateModified": "2016-04-29 09:41:56",
    "idDrink": 14598,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vanilla vodka",
       "grand marnier",
       "orange juice"
    ],
    "instructions": "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
    "measures": [
       "2 1/2 oz ",
       "1 splash ",
       "fill with "
    ]
 },
  {
    "FIELD1": 11,
    "drinkName": "501 blue",
    "dateModified": "2016-04-28 19:11:37",
    "idDrink": 17105,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "blue curacao",
       "blueberry schnapps",
       "vodka",
       "sour mix",
       "7-up"
    ],
    "instructions": "Mix equal amounts into a glass with ice.",
    "measures": [
       "\n"
    ]
 },
  {
    "FIELD1": 12,
    "drinkName": "69 special",
    "dateModified": "2016-08-31 19:44:55",
    "idDrink": 13940,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "gin",
       "7-up",
       "lemon juice"
    ],
    "instructions": "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.",
    "measures": [
       "2 oz dry ",
       "4 oz ",
       "0.75 oz "
    ]
 },
  {
    "FIELD1": 13,
    "drinkName": "747",
    "dateModified": "2016-08-31 19:28:26",
    "idDrink": 14229,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "kahlua",
       "bailey's irish cream",
       "frangelico"
    ],
    "instructions": "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
    "measures": [
       "1/3 part ",
       "1/3 part ",
       "1/3 part "
    ]
 },
  {
    "FIELD1": 14,
    "drinkName": "9 1/2 weeks",
    "dateModified": "2016-08-31 19:48:22",
    "idDrink": 16108,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "absolut citron",
       "orange curacao",
       "strawberry liqueur",
       "orange juice"
    ],
    "instructions": "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "1 splash ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 15,
    "drinkName": "a day at the beach",
    "dateModified": "2016-02-03 15:47:54",
    "idDrink": 15200,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/trptts1454514474.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "coconut rum",
       "amaretto",
       "orange juice",
       "grenadine"
    ],
    "instructions": "Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a highball glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "4 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 16,
    "drinkName": "a furlong too late",
    "dateModified": "2016-08-31 19:46:06",
    "idDrink": 11000,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "light rum",
       "ginger beer",
       "lemon peel"
    ],
    "instructions": "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
    "measures": [
       "2 oz ",
       "4 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 17,
    "drinkName": "a gilligan's island",
    "dateModified": "2016-04-28 19:12:56",
    "idDrink": 16943,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "peach schnapps",
       "orange juice",
       "cranberry juice"
    ],
    "instructions": "Shaken, not stirred!",
    "measures": [
       "1 oz ",
       "1 oz ",
       "3 oz ",
       "3 oz "
    ]
 },
  {
    "FIELD1": 18,
    "drinkName": "a night in old mandalay",
    "dateModified": "2016-04-29 09:43:00",
    "idDrink": 11001,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vyrvxt1461919380.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "light rum",
       "añejo rum",
       "orange juice",
       "lemon juice",
       "ginger ale",
       "lemon peel"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the light rum, añejo rum, orange juice, and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the ginger ale. Garnish with the lemon twist.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1/2 oz ",
       "3 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 19,
    "drinkName": "a piece of ass",
    "dateModified": "2016-09-01 09:48:57",
    "idDrink": 16405,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "amaretto",
       "southern comfort",
       "ice",
       "sour mix"
    ],
    "instructions": "Put ice in glass. Pour in shots. Fill with Sour Mix.",
    "measures": [
       "1 shot ",
       "1 shot ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 20,
    "drinkName": "a splash of nash",
    "dateModified": "2016-08-31 19:30:01",
    "idDrink": 14564,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rsvtrr1472668201.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "cranberry juice",
       "soda water",
       "midori melon liqueur",
       "creme de banane"
    ],
    "instructions": "Drop shot glass with banana & melon liquers into a 9 oz hi- ball glass containing soda water and cranberry juice. Drink in one shot.",
    "measures": [
       "2 oz ",
       "2 oz ",
       "0.5 oz ",
       "0.5 oz "
    ]
 },
  {
    "FIELD1": 21,
    "drinkName": "a true amaretto sour",
    "dateModified": "2016-08-31 19:49:32",
    "idDrink": 17005,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "amaretto",
       "lemon",
       "ice",
       "maraschino cherry"
    ],
    "instructions": "Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good \"frosted\" rim. Shake a jigger of Amaretto with the juice of 1/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.",
    "measures": [
       "1 jigger ",
       "juice of 1/2 "
    ]
 },
  {
    "FIELD1": 22,
    "drinkName": "a midsummernight dream",
    "dateModified": "2016-04-28 19:14:52",
    "idDrink": 15675,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "kirschwasser",
       "strawberry liqueur",
       "strawberries",
       "schweppes russchian"
    ],
    "instructions": "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1 tsp ",
       "5 "
    ]
 },
  {
    "FIELD1": 23,
    "drinkName": "a. j.",
    "dateModified": "2016-09-02 11:16:58",
    "idDrink": 11002,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "applejack",
       "grapefruit juice"
    ],
    "instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 24,
    "drinkName": "a.d.m. (after dinner mint)",
    "dateModified": "2016-08-31 19:53:20",
    "idDrink": 14560,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg",
    "glassType": "irish coffee cup",
    "ingredients": [
       "white creme de menthe",
       "southern comfort",
       "vodka",
       "hot chocolate"
    ],
    "instructions": "shake vigorously",
    "measures": [
       "1/2 oz ",
       "3/4 oz ",
       "1/2 oz ",
       "fill with "
    ]
 },
  {
    "FIELD1": 25,
    "drinkName": "a1",
    "dateModified": "2017-09-07 21:42:09",
    "idDrink": 17222,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "grand marnier",
       "lemon juice",
       "grenadine"
    ],
    "instructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
    "measures": [
       "1 3/4 shot ",
       "1 shot ",
       "1/4 shot",
       "1/8 shot"
    ]
 },
  {
    "FIELD1": 26,
    "drinkName": "abc",
    "dateModified": "2016-08-31 19:32:08",
    "idDrink": 13501,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "amaretto",
       "bailey's irish cream",
       "cognac"
    ],
    "instructions": "Layered in a shot glass.",
    "measures": [
       "1/3 ",
       "1/3 ",
       "1/3 "
    ]
 },
  {
    "FIELD1": 27,
    "drinkName": "acid",
    "dateModified": "2016-11-15 11:28:37",
    "idDrink": 14610,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "151 proof rum",
       "wild turkey"
    ],
    "instructions": "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
    "measures": [
       "1 oz bacardi ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 28,
    "drinkName": "at&t",
    "dateModified": "2017-04-24 22:00:19",
    "idDrink": 13938,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "absolut vodka",
       "gin",
       "tonic water"
    ],
    "instructions": "Pour Vodka and Gin over ice, add Tonic and Stir",
    "measures": [
       "1 oz ",
       "1 oz ",
       "4 oz "
    ]
 },
  {
    "FIELD1": 29,
    "drinkName": "abbey cocktail",
    "dateModified": "2016-09-02 11:19:28",
    "idDrink": 11003,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/quyyuw1472811568.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "orange bitters",
       "orange",
       "cherry"
    ],
    "instructions": "Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 dash ",
       "juice of 1/4 ",
       "1 "
    ]
 },
  {
    "FIELD1": 30,
    "drinkName": "abbey martini",
    "dateModified": "2017-09-07 21:50:03",
    "idDrink": 17223,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "sweet vermouth",
       "orange juice",
       "angostura bitters"
    ],
    "instructions": "Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass.",
    "measures": [
       "2 shots ",
       "1 shot ",
       "1 shot ",
       "3 dashes "
    ]
 },
  {
    "FIELD1": 31,
    "drinkName": "abilene",
    "dateModified": "2016-04-29 09:44:25",
    "idDrink": 11004,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ysqwwt1461919465.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "dark rum",
       "peach nectar",
       "orange juice"
    ],
    "instructions": "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
    "measures": [
       "1 1/2 oz ",
       "2 oz ",
       "3 oz "
    ]
 },
  {
    "FIELD1": 32,
    "drinkName": "absinthe #2",
    "dateModified": "2016-08-31 19:13:17",
    "idDrink": 12790,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg",
    "glassType": "jar",
    "ingredients": [
       "vodka",
       "sugar",
       "anise",
       "licorice root",
       "wormwood"
    ],
    "instructions": "Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.",
    "measures": [
       "1 bottle ",
       "50 gr ",
       "50 ml pure ",
       "1 tblsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 33,
    "drinkName": "absolut evergreen",
    "dateModified": "2016-09-02 11:36:49",
    "idDrink": 14374,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wrxrxp1472812609.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "absolut citron",
       "pisang ambon",
       "ice",
       "bitter lemon"
    ],
    "instructions": "Mix, pour over ice and top up with Bitter Lemon.",
    "measures": [
       "2/3 part ",
       "1/3 part ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 34,
    "drinkName": "absolut sex",
    "dateModified": "2016-08-31 19:33:56",
    "idDrink": 14360,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xtrvtx1472668436.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "absolut kurant",
       "midori melon liqueur",
       "cranberry juice",
       "sprite"
    ],
    "instructions": "Shake Absolut Kurant, Midori, and Cranberry juice in shaker with ice: Strain into rocks glass: Splash of seven on top.Absolut Sex.",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "1 oz ",
       "1 splash "
    ]
 },
  {
    "FIELD1": 35,
    "drinkName": "absolut stress #2",
    "dateModified": "2016-09-02 11:23:45",
    "idDrink": 15597,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xuyqrw1472811825.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "absolut vodka",
       "peach schnapps",
       "coconut liqueur",
       "cranberry juice",
       "pineapple juice"
    ],
    "instructions": "Mix well. Garnish with Orange and Cherry. Enjoy",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1 1/2 oz ",
       "1 1/2 oz "
    ]
 },
  {
    "FIELD1": 36,
    "drinkName": "absolut summertime",
    "dateModified": "2016-08-31 19:54:22",
    "idDrink": 14107,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "absolut citron",
       "sweet and sour",
       "sprite",
       "soda water",
       "lemon"
    ],
    "instructions": "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz ",
       "1/2 oz ",
       "3 oz ",
       "1 slice "
    ]
 },
  {
    "FIELD1": 37,
    "drinkName": "absolut limousine",
    "dateModified": "2016-09-01 09:50:44",
    "idDrink": 14372,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ssqpyw1472719844.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "absolut citron",
       "lime juice",
       "ice",
       "tonic water"
    ],
    "instructions": "Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.",
    "measures": [
       "2/3 ",
       "1/3 ",
       "fill with ",
       "top it up with "
    ]
 },
  {
    "FIELD1": 38,
    "drinkName": "absolutely cranberry smash",
    "dateModified": "2016-09-02 11:24:44",
    "idDrink": 15024,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "absolut vodka",
       "cranberry juice",
       "ginger ale",
       "ice"
    ],
    "instructions": "Stir ingredients together. Serve over ice.",
    "measures": [
       "2 oz ",
       "4 oz ",
       "2 oz ",
       "add "
    ]
 },
  {
    "FIELD1": 39,
    "drinkName": "absolutely fabulous",
    "dateModified": "2017-09-07 21:55:34",
    "idDrink": 17224,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "vodka",
       "cranberry juice",
       "champagne"
    ],
    "instructions": "Mix the Vodka and Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.",
    "measures": [
       "1 shot ",
       "2 shots ",
       "top up with"
    ]
 },
  {
    "FIELD1": 40,
    "drinkName": "absolutly screwed up",
    "dateModified": "2016-08-31 19:55:28",
    "idDrink": 16134,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yvxrwv1472669728.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "absolut citron",
       "orange juice",
       "triple sec",
       "ginger ale"
    ],
    "instructions": "Shake it up it tasts better that way, but you can stir it if you want. 6 of those and you will be wasted for the rest of the night.",
    "measures": [
       "1 shot ",
       "1 shot ",
       "1 shot ",
       "fill to top "
    ]
 },
  {
    "FIELD1": 41,
    "drinkName": "acapulco",
    "dateModified": "2016-09-02 11:26:16",
    "idDrink": 11005,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vtpsvr1472811976.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "light rum",
       "triple sec",
       "lime juice",
       "sugar",
       "egg white",
       "mint"
    ],
    "instructions": "Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 1/2 tsp ",
       "1 tblsp ",
       "1 tsp ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 42,
    "drinkName": "ace",
    "dateModified": "2017-09-07 22:05:06",
    "idDrink": 17225,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    "glassType": "martini glass",
    "ingredients": [
       "gin",
       "grenadine",
       "heavy cream",
       "milk",
       "egg white"
    ],
    "instructions": "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
    "measures": [
       "2 shots ",
       "1/2 shot ",
       "1/2 shot ",
       "1/2 shot ",
       "1/2 fresh"
    ]
 },
  {
    "FIELD1": 43,
    "drinkName": "adam",
    "dateModified": "2016-09-02 11:29:29",
    "idDrink": 11006,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rwuxsv1472812169.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dark rum",
       "lemon juice",
       "grenadine"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 44,
    "drinkName": "adam & eve",
    "dateModified": "2017-09-07 22:17:58",
    "idDrink": 17226,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "cognac",
       "creme de cassis",
       "fresh lemon juice"
    ],
    "instructions": "Shake together all the ingredients and strain into a cold glass.",
    "measures": [
       "1 shot ",
       "1 shot ",
       "1 shot ",
       "1/8 shot "
    ]
 },
  {
    "FIELD1": 45,
    "drinkName": "adam bomb",
    "dateModified": "2016-02-03 15:23:36",
    "idDrink": 16333,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
    "glassType": "margarita/coupette glass",
    "ingredients": [
       "rum",
       "vodka",
       "tequila",
       "triple sec",
       "fruit",
       "ice",
       "salt",
       "fruit juice"
    ],
    "instructions": "Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.",
    "measures": [
       "1 part ",
       "1 part ",
       "1 part ",
       "1/2 part ",
       "1-3 pint "
    ]
 },
  {
    "FIELD1": 46,
    "drinkName": "adam sunrise",
    "dateModified": "2016-09-02 11:28:32",
    "idDrink": 15567,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "lemonade",
       "water",
       "sugar"
    ],
    "instructions": "Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds.",
    "measures": [
       "1/2 ",
       "1/2 can ",
       "1/2 ",
       "10 tsp "
    ]
 },
  {
    "FIELD1": 47,
    "drinkName": "addington",
    "dateModified": "2017-09-07 22:15:25",
    "idDrink": 17227,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sweet vermouth",
       "dry vermouth",
       "soda water"
    ],
    "instructions": "Mix both the vermouth's in a shaker and strain into a cold glass. Top up with a squirt of Soda Water. ",
    "measures": [
       "2 shots ",
       "1 shot ",
       "top up with\n"
    ]
 },
  {
    "FIELD1": 48,
    "drinkName": "addison",
    "dateModified": "2017-09-07 22:38:20",
    "idDrink": 17228,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
    "glassType": "martini glass",
    "ingredients": [
       "gin",
       "vermouth"
    ],
    "instructions": "Shake together all the ingredients and strain into a cold glass.",
    "measures": [
       "1 1/2 shot ",
       "1 1/2 shot "
    ]
 },
  {
    "FIELD1": 49,
    "drinkName": "addison special",
    "dateModified": "2017-04-24 22:14:53",
    "idDrink": 14272,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "vodka",
       "grenadine",
       "orange juice"
    ],
    "instructions": "Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge.",
    "measures": [
       "1 shot ",
       "1 tblsp ",
       "fill with "
    ]
 },
  {
    "FIELD1": 50,
    "drinkName": "adios amigos cocktail",
    "dateModified": "2017-09-07 22:31:33",
    "idDrink": 17229,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg",
    "glassType": "martini glass",
    "ingredients": [
       "rum",
       "dry vermouth",
       "cognac",
       "gin",
       "fresh lime juice",
       "sugar syrup",
       "water"
    ],
    "instructions": "Shake together all the ingredients and strain into a cold glass.",
    "measures": [
       "1 shot ",
       "1/2 shot ",
       "1/2 shot ",
       "1/2 shot ",
       "1/4 shot",
       "1/4 shot",
       "1/2 shot "
    ]
 },
  {
    "FIELD1": 51,
    "drinkName": "adonis cocktail",
    "dateModified": "2016-09-02 11:27:11",
    "idDrink": 11007,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xrvruq1472812030.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sweet vermouth",
       "sherry",
       "orange bitters"
    ],
    "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
    "measures": [
       "3/4 oz ",
       "1 1/2 oz dry ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 52,
    "drinkName": "affair",
    "dateModified": "2016-09-01 10:05:34",
    "idDrink": 11008,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wxrsxx1472720734.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "strawberry schnapps",
       "orange juice",
       "cranberry juice",
       "club soda"
    ],
    "instructions": "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
    "measures": [
       "2 oz ",
       "2 oz ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 53,
    "drinkName": "affinity",
    "dateModified": "2017-09-07 21:44:05",
    "idDrink": 11009,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/nwatpb1504817045.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "scotch",
       "sweet vermouth",
       "dry vermouth",
       "orange bitters"
    ],
    "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1 oz ",
       "2 dashes "
    ]
 },
  {
    "FIELD1": 54,
    "drinkName": "after dinner cocktail",
    "dateModified": "2017-01-02 20:06:18",
    "idDrink": 11010,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vtytxq1483387578.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "apricot brandy",
       "triple sec",
       "lime",
       "lime"
    ],
    "instructions": "Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "juice of 1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 55,
    "drinkName": "after five",
    "dateModified": "2017-04-24 22:16:35",
    "idDrink": 13807,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sk3lr91493068595.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "peppermint schnapps",
       "kahlua",
       "bailey's irish cream"
    ],
    "instructions": "1. Pour Kahlua into shot glass to about 1/2 full. 2. Using a spoon(inverted), slowly pour in the Peppermint Schnapps until glass is about 3/4 full. Done correctly, the Schnapps will flow under the Kahlua for a clear layer. 3. Again using a spoon, but this time right side up, slowly top off the glass with a layer of Bailey's. Be careful to place the spoon right at the top of the Kahlua layer and to raise it as the glass fills up. Done correctly, this will provide a layer of Bailey's floating over the Kahlua. 4. Toss it down all at once for something like a Peppermint Pattie, WITH A BANG!!! NOTE: Best if all ingredients are chilled",
    "measures": [
       "\n"
    ]
 },
  {
    "FIELD1": 56,
    "drinkName": "after supper cocktail",
    "dateModified": "2017-01-02 20:06:50",
    "idDrink": 11011,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/quyxwu1483387610.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "triple sec",
       "apricot brandy",
       "lemon juice"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1/2 tsp "
    ]
 },
  {
    "FIELD1": 57,
    "drinkName": "after sex",
    "dateModified": "2017-04-24 22:18:22",
    "idDrink": 15182,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "creme de banane",
       "orange juice"
    ],
    "instructions": "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
    "measures": [
       "2 cl ",
       "1 cl "
    ]
 },
  {
    "FIELD1": 58,
    "drinkName": "afterglow",
    "dateModified": "2016-07-18 22:07:32",
    "idDrink": 12560,
    "type": "non alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "grenadine",
       "orange juice",
       "pineapple juice"
    ],
    "instructions": "Mix. Serve over ice.",
    "measures": [
       "1 part ",
       "4 parts ",
       "4 parts "
    ]
 },
  {
    "FIELD1": 59,
    "drinkName": "afternoon",
    "dateModified": "2016-08-31 19:22:57",
    "idDrink": 13162,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "kahlua",
       "bailey's irish cream",
       "frangelico",
       "coffee",
       "cream"
    ],
    "instructions": "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
    "measures": [
       "1 cl ",
       "1 cl ",
       "1 1/2 ",
       "4 cl hot "
    ]
 },
  {
    "FIELD1": 60,
    "drinkName": "alabama slammer",
    "dateModified": "2017-01-02 20:07:27",
    "idDrink": 11012,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qtwxwr1483387647.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "southern comfort",
       "amaretto",
       "sloe gin",
       "lemon juice"
    ],
    "instructions": "Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1/2 oz ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 61,
    "drinkName": "alaska cocktail",
    "dateModified": "2017-01-02 20:08:40",
    "idDrink": 11013,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "orange bitters",
       "gin",
       "yellow chartreuse",
       "lemon peel"
    ],
    "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.",
    "measures": [
       "2 dashes ",
       "1 1/2 oz ",
       "3/4 oz ",
       "twist of "
    ]
 },
  {
    "FIELD1": 62,
    "drinkName": "alexander",
    "dateModified": "2016-11-04 09:50:39",
    "idDrink": 11014,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/urystu1478253039.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "creme de cacao",
       "light cream",
       "nutmeg"
    ],
    "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
    "measures": [
       "1/2 oz ",
       "1/2 oz white ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 63,
    "drinkName": "alfie cocktail",
    "dateModified": "2017-01-02 20:10:29",
    "idDrink": 11019,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ypxsqy1483387829.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "lemon vodka",
       "triple sec",
       "pineapple juice"
    ],
    "instructions": "Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 dash ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 64,
    "drinkName": "algonquin",
    "dateModified": "2017-01-02 20:11:13",
    "idDrink": 11020,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uwryxx1483387873.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "blended whiskey",
       "dry vermouth",
       "pineapple juice"
    ],
    "instructions": "Combine and shake all ingredients with ice, strain contents into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 65,
    "drinkName": "alice cocktail",
    "dateModified": "2016-07-18 22:09:04",
    "idDrink": 12562,
    "type": "non alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "grenadine",
       "orange juice",
       "pineapple juice",
       "cream"
    ],
    "instructions": "Shake well, strain into a large cocktail glass.",
    "measures": [
       "1 cl ",
       "1 cl ",
       "2 cl ",
       "4 cl "
    ]
 },
  {
    "FIELD1": 66,
    "drinkName": "alice in wonderland",
    "dateModified": "2017-04-24 22:29:51",
    "idDrink": 17094,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/g12lj41493069391.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "amaretto",
       "grand marnier",
       "southern comfort"
    ],
    "instructions": "Just mix the three ingredients one to one to one",
    "measures": [
       "1 shot ",
       "1 shot ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 67,
    "drinkName": "allegheny",
    "dateModified": "2017-01-02 20:12:14",
    "idDrink": 11021,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dry vermouth",
       "bourbon",
       "blackberry brandy",
       "lemon juice",
       "lemon peel"
    ],
    "instructions": "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 1/2 tsp ",
       "1 1/2 tsp ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 68,
    "drinkName": "allies cocktail",
    "dateModified": "2017-01-02 20:15:04",
    "idDrink": 11022,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dry vermouth",
       "gin",
       "kummel"
    ],
    "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1/2 tsp "
    ]
 },
  {
    "FIELD1": 69,
    "drinkName": "almeria",
    "dateModified": "2017-01-02 20:16:21",
    "idDrink": 11023,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dark rum",
       "kahlua",
       "egg white"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 70,
    "drinkName": "almond chocolate coffee",
    "dateModified": "2017-04-24 22:30:41",
    "idDrink": 16082,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/jls02c1493069441.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "amaretto",
       "dark creme de cacao",
       "coffee"
    ],
    "instructions": "Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.",
    "measures": [
       "3/4 oz ",
       "1/2 oz ",
       "8 oz "
    ]
 },
  {
    "FIELD1": 71,
    "drinkName": "almond joy",
    "dateModified": "2017-01-02 20:18:16",
    "idDrink": 11024,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xutuqs1483388296.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "amaretto",
       "creme de cacao",
       "light cream"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1/2 oz ",
       "1/2 oz white ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 72,
    "drinkName": "aloha fruit punch",
    "dateModified": "2016-07-18 22:11:07",
    "idDrink": 12862,
    "type": "non alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "water",
       "ginger",
       "guava juice",
       "lemon juice",
       "pineapple",
       "sugar",
       "pineapple juice"
    ],
    "instructions": "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
    "measures": [
       "3/4 cup ",
       "2 tsp ",
       "2 cups ",
       "1 1/2 tblsp ",
       "1 1/2 cup ",
       "1 cup ",
       "3-4 cups "
    ]
 },
  {
    "FIELD1": 73,
    "drinkName": "amaretto and cream",
    "dateModified": "2017-09-02 18:56:58",
    "idDrink": 11025,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/dj8n0r1504375018.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "amaretto",
       "light cream"
    ],
    "instructions": "Shake well with cracked ice, strain contents into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 1/2 oz "
    ]
 },
  {
    "FIELD1": 74,
    "drinkName": "amaretto liqueur",
    "dateModified": "2016-09-01 09:47:29",
    "idDrink": 12792,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "sugar",
       "water",
       "apricot",
       "almond flavoring",
       "grain alcohol",
       "water",
       "brandy",
       "food coloring",
       "food coloring",
       "food coloring",
       "glycerine"
    ],
    "instructions": "Combine sugar and 3/4 cup water in a small saucepan. Bring to a boil, stirring constantly. Reduce heat and simmer until all sugar is dissolved. Remove from heat and cool. In an aging container, combine apricot halves, almond extract, grain alcohol with 1/2 cup water, and brandy. Stir in cooled sugar syrup mixture. Cap and let age for 2 days. Remove apricot halves. (Save apricot halves, can be used for cooking). Add food coloring and glycerine. Stir, recap and continue aging for 1 to 2 months. Re-bottle as desired. Liqueur is ready to serve but will continue to improve with additional aging.",
    "measures": [
       "1 cup",
       "3/4 cup ",
       "2 ",
       "1 tblsp ",
       "1/2 cup pure ",
       "1/2 cup ",
       "1 cup ",
       "3 drops yellow ",
       "6 drops red ",
       "2 drops blue ",
       "1/2 tsp "
    ]
 },
  {
    "FIELD1": 75,
    "drinkName": "amaretto mist",
    "dateModified": "2017-01-02 20:19:31",
    "idDrink": 11026,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "amaretto",
       "lime"
    ],
    "instructions": "Pour amaretto in an old-fashioned glass over crushed ice. Add the wedge of lime and serve. (A wedge of lemon may be substituted for lime, if preferred.)",
    "measures": [
       "1 1/2 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 76,
    "drinkName": "amaretto rose",
    "dateModified": "2017-04-24 22:32:59",
    "idDrink": 11027,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "amaretto",
       "lime juice",
       "club soda"
    ],
    "instructions": "Pour amaretto and lime juice over ice in a collins glass. Fill with club soda and serve.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 77,
    "drinkName": "amaretto shake",
    "dateModified": "2017-04-24 22:34:16",
    "idDrink": 15194,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "chocolate ice-cream",
       "brandy",
       "amaretto"
    ],
    "instructions": "Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings.",
    "measures": [
       "2 scoops ",
       "2 oz ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 78,
    "drinkName": "amaretto sour",
    "dateModified": "2017-04-24 22:43:32",
    "idDrink": 13731,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "amaretto",
       "sour mix"
    ],
    "instructions": "Shake and strain. Garnish with a cherry and an orange slice.",
    "measures": [
       "1 1/2 oz ",
       "3 oz "
    ]
 },
  {
    "FIELD1": 79,
    "drinkName": "amaretto stinger",
    "dateModified": "2017-04-24 22:38:54",
    "idDrink": 11028,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vvop4w1493069934.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "amaretto",
       "white creme de menthe"
    ],
    "instructions": "Shake ingredients well with cracked ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 80,
    "drinkName": "amaretto stone sour",
    "dateModified": "2016-09-01 09:52:01",
    "idDrink": 14306,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xwryyx1472719921.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "amaretto",
       "sour mix",
       "orange juice"
    ],
    "instructions": "Shake and Serve over ice",
    "measures": [
       "1 part ",
       "1 part ",
       "1 part "
    ]
 },
  {
    "FIELD1": 81,
    "drinkName": "amaretto stone sour #3",
    "dateModified": "2016-09-01 09:53:32",
    "idDrink": 16100,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "sour mix",
       "amaretto",
       "tequila",
       "orange juice"
    ],
    "instructions": "Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry.",
    "measures": [
       "2 oz ",
       "2 oz ",
       "2 oz ",
       "add splash "
    ]
 },
  {
    "FIELD1": 82,
    "drinkName": "amaretto sunrise",
    "dateModified": "2017-04-24 22:44:27",
    "idDrink": 14578,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "amaretto",
       "orange juice",
       "grenadine"
    ],
    "instructions": "Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.",
    "measures": [
       "1 cl ",
       "4 oz ",
       "1/4 cl "
    ]
 },
  {
    "FIELD1": 83,
    "drinkName": "amaretto sunset",
    "dateModified": "2017-04-24 22:36:00",
    "idDrink": 17168,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "triple sec",
       "amaretto",
       "cider",
       "ice"
    ],
    "instructions": "Shake ingredients in bartender's mixer quickly, just 5 shakes. Strain out ice, serve in glass immediately with a slice of orange.",
    "measures": [
       "1/2 jigger ",
       "3 shots ",
       "1/2 cup ",
       "add 1/2 cup "
    ]
 },
  {
    "FIELD1": 84,
    "drinkName": "amaretto sweet & sour",
    "dateModified": "2016-08-31 19:35:46",
    "idDrink": 16202,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vswwus1472668546.jpg",
    "glassType": "margarita/coupette glass",
    "ingredients": [
       "amaretto",
       "sweet and sour",
       "midori melon liqueur",
       "pineapple juice"
    ],
    "instructions": "Fill the blender with 3/4 ice. Add sweet & sour mix to the top of the ice. Add about 1\" of pineapple juice, 1/2\" of melon liqeur, and 1/2 to 1/4\" of amaretto. Then blend the mix until it is of margaritta consistency or thinner.",
    "measures": [
       "\n"
    ]
 },
  {
    "FIELD1": 85,
    "drinkName": "amaretto tea",
    "dateModified": "2017-04-24 22:42:47",
    "idDrink": 11029,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
    "glassType": "pousse cafe glass",
    "ingredients": [
       "tea",
       "amaretto",
       "whipped cream"
    ],
    "instructions": "Pour hot tea into a pousse-cafe glass, using a spoon in glass to prevent cracking. Add amaretto, but do not stir. Top with chilled whipped cream and serve.",
    "measures": [
       "6 oz hot ",
       "2 oz ",
       "chilled "
    ]
 },
  {
    "FIELD1": 86,
    "drinkName": "americano",
    "dateModified": "2016-11-04 09:52:06",
    "idDrink": 15941,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/trwruu1478253126.jpg",
    "glassType": "collins glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "campari",
       "sweet vermouth",
       "lemon peel",
       "orange peel"
    ],
    "instructions": "Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.",
    "measures": [
       "1 oz ",
       "1 oz red ",
       "twist of ",
       "twist of "
    ]
 },
  {
    "FIELD1": 87,
    "drinkName": "angel face",
    "dateModified": "2016-11-04 09:52:58",
    "idDrink": 11034,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqpptp1478253178.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "apricot brandy",
       "apple brandy",
       "gin"
    ],
    "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 88,
    "drinkName": "angelica liqueur",
    "dateModified": "2016-08-31 19:21:12",
    "idDrink": 12794,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yuurps1472667672.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "angelica root",
       "almond",
       "allspice",
       "cinnamon",
       "anise",
       "coriander",
       "marjoram leaves",
       "vodka",
       "sugar",
       "water",
       "food coloring",
       "food coloring"
    ],
    "instructions": "Combine all herbs, nuts and spices with vodka in a 1 quart or larger aging container. Cap tightly and shake daily for 2 weeks. Strain through a fine muslin cloth or coffee filter, discarding solids. Clean out aging container. Place liquid back in container. Place sugar and water in saucepan and stir to combine over medium heat. When sugar is completely dissolved, set aside and let cool. When cool combine with food coloring and add to liqueur liquid. Cap and allow to age and mellow in a cool, dark place for one month.",
    "measures": [
       "3 tblsp chopped",
       "1 tblsp chopped ",
       "1 cracked ",
       "1 one-inch ",
       "3-6 crushed ",
       "1/8 tsp powdered ",
       "1 tblsp fresh chopped ",
       "1.5 cup ",
       "1/2 cup granulated ",
       "1/4 cup ",
       "1 drop yellow ",
       "1 drop green "
    ]
 },
  {
    "FIELD1": 89,
    "drinkName": "apello",
    "dateModified": "2016-07-18 22:13:35",
    "idDrink": 15106,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "orange juice",
       "grapefruit juice",
       "apple juice",
       "maraschino cherry"
    ],
    "instructions": "Stirr. Grnish with maraschino cherry.",
    "measures": [
       "4 cl ",
       "3 cl ",
       "1 cl ",
       "1 "
    ]
 },
  {
    "FIELD1": 90,
    "drinkName": "apple berry smoothie",
    "dateModified": "2016-07-18 22:14:33",
    "idDrink": 12710,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "berries",
       "apple"
    ],
    "instructions": "Throw everything into a blender and liquify.",
    "measures": [
       "1 cup ",
       "2 "
    ]
 },
  {
    "FIELD1": 91,
    "drinkName": "apple cider punch #1",
    "dateModified": "2016-02-03 15:26:58",
    "idDrink": 12864,
    "type": "optional alcohol",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xrqxuv1454513218.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "apple cider",
       "brown sugar",
       "lemonade",
       "orange juice",
       "cloves",
       "allspice",
       "nutmeg",
       "cinnamon"
    ],
    "instructions": "If you use the whole all spice and cloves, tie them in cheesecloth. Heat the mixture. Stir occasionally. If you want an alcoholic drink, rum would be nice.",
    "measures": [
       "4 qt ",
       "1 cup ",
       "6 oz frozen ",
       "6 oz frozen ",
       "6 whole ",
       "6 whole ",
       "1 tsp ground ",
       "3 sticks "
    ]
 },
  {
    "FIELD1": 92,
    "drinkName": "apple grande",
    "dateModified": "2016-08-31 19:37:02",
    "idDrink": 16289,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "tequila",
       "apple cider"
    ],
    "instructions": "Chill both ingredients!! Mix in a tumbler and enjoy!",
    "measures": [
       "3 oz ",
       "12 oz "
    ]
 },
  {
    "FIELD1": 93,
    "drinkName": "apple karate",
    "dateModified": "2016-07-18 22:17:14",
    "idDrink": 12564,
    "type": "non alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "apple juice",
       "carrot"
    ],
    "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    "measures": [
       "2 cups ",
       "1 large "
    ]
 },
  {
    "FIELD1": 94,
    "drinkName": "apple pie with a crust",
    "dateModified": "2016-09-01 09:54:38",
    "idDrink": 16958,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qspqxt1472720078.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "apple juice",
       "malibu rum",
       "cinnamon"
    ],
    "instructions": "Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.",
    "measures": [
       "3 parts ",
       "1 part ",
       "3 dashes "
    ]
 },
  {
    "FIELD1": 95,
    "drinkName": "apple slammer",
    "dateModified": "2017-04-24 22:37:32",
    "idDrink": 13683,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/09yd5f1493069852.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "7-up",
       "apple schnapps"
    ],
    "instructions": "pour into a shot glass and present to consumer, they are expected to cover the top of the shotglass with thier palm, raise the glass, slam it on the bar and the swallow quickly.",
    "measures": [
       "1 part ",
       "1 part "
    ]
 },
  {
    "FIELD1": 96,
    "drinkName": "applecar",
    "dateModified": "2017-09-02 23:02:44",
    "idDrink": 11046,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "applejack",
       "triple sec",
       "lemon juice"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 97,
    "drinkName": "applejack",
    "dateModified": "2016-11-15 11:24:22",
    "idDrink": 16311,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "jack daniels",
       "midori melon liqueur",
       "sour mix"
    ],
    "instructions": "Add all ingredients into mixing glass, chill and strain into cocktail glass",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 98,
    "drinkName": "apricot lady",
    "dateModified": "2017-09-02 23:03:34",
    "idDrink": 11050,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/146f251504389814.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "light rum",
       "apricot brandy",
       "triple sec",
       "lemon juice",
       "egg white",
       "orange"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the orange slice.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1 tsp ",
       "1/2 oz ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 99,
    "drinkName": "apricot punch",
    "dateModified": "2016-08-31 19:37:47",
    "idDrink": 15849,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "apricot brandy",
       "champagne",
       "vodka",
       "7-up",
       "orange juice"
    ],
    "instructions": "Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.",
    "measures": [
       "1 qt ",
       "4 fifth ",
       "1 fifth ",
       "4 l ",
       "1/2 gal "
    ]
 },
  {
    "FIELD1": 100,
    "drinkName": "archbishop",
    "dateModified": "2015-09-02 16:21:47",
    "idDrink": 11052,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xpqwrt1441207307.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "wine",
       "benedictine",
       "lime"
    ],
    "instructions": "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
    "measures": [
       "2 oz ",
       "1 oz green ginger ",
       "1 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 101,
    "drinkName": "arctic fish",
    "dateModified": "2016-08-31 19:39:41",
    "idDrink": 14622,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
    "glassType": "beer pilsner",
    "ingredients": [
       "vodka",
       "grape soda",
       "orange juice",
       "ice",
       "candy"
    ],
    "instructions": "Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.",
    "measures": [
       "1/3 part ",
       "1/3 part ",
       "1/3 part ",
       "lots ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 102,
    "drinkName": "arctic mouthwash",
    "dateModified": "2016-11-12 15:15:35",
    "idDrink": 17118,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wqstwv1478963735.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "maui",
       "mountain dew",
       "ice"
    ],
    "instructions": "Blend all ingredients in a blender on high until ice is finely crushed. It should be of a slushy consistency. Pour immediately and serve.",
    "measures": [
       "5 oz blue ",
       "5 oz ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 103,
    "drinkName": "arise my love",
    "dateModified": "2015-09-02 16:23:52",
    "idDrink": 11053,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wyrrwv1441207432.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "champagne",
       "green creme de menthe"
    ],
    "instructions": "Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.",
    "measures": [
       "chilled ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 104,
    "drinkName": "arizona antifreeze",
    "dateModified": "2017-04-24 21:54:22",
    "idDrink": 16354,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "vodka",
       "midori melon liqueur",
       "sweet and sour"
    ],
    "instructions": "Pour all ingredients into shot glass and slam !!!!",
    "measures": [
       "1/3 oz ",
       "1/3 oz ",
       "1/3 oz "
    ]
 },
  {
    "FIELD1": 105,
    "drinkName": "arizona stingers",
    "dateModified": "2017-04-24 22:10:55",
    "idDrink": 14584,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/y7w0721493068255.jpg",
    "glassType": "hurricane glass",
    "ingredients": [
       "absolut vodka",
       "iced tea"
    ],
    "instructions": "Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka (Note: You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!",
    "measures": [
       "2 shots ",
       "12 oz lemon "
    ]
 },
  {
    "FIELD1": 106,
    "drinkName": "arizona twister",
    "dateModified": "2017-04-24 22:08:55",
    "idDrink": 17074,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg",
    "glassType": "hurricane glass",
    "ingredients": [
       "vodka",
       "malibu rum",
       "gold tequila",
       "orange juice",
       "pineapple juice",
       "cream of coconut",
       "grenadine",
       "ice",
       "pineapple"
    ],
    "instructions": "Just mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge.",
    "measures": [
       "1 shot ",
       "1 shot ",
       "1 shot ",
       "1 splash ",
       "1 splash ",
       "1 splash ",
       "1 dash ",
       "crushed ",
       "1 wedge "
    ]
 },
  {
    "FIELD1": 107,
    "drinkName": "army special",
    "dateModified": "2017-04-24 22:07:42",
    "idDrink": 17066,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "vodka",
       "gin",
       "lime juice cordial",
       "ice"
    ],
    "instructions": "Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw.",
    "measures": [
       "30 ml ",
       "30 ml ",
       "45 ml ",
       "1/2 glass crushed "
    ]
 },
  {
    "FIELD1": 108,
    "drinkName": "arthur tompkins",
    "dateModified": "2017-04-24 22:05:21",
    "idDrink": 11054,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7onfhz1493067921.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "gin",
       "grand marnier",
       "lemon juice",
       "lemon peel"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "2 tsp ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 109,
    "drinkName": "artillery",
    "dateModified": "2017-04-24 22:02:27",
    "idDrink": 11055,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sweet vermouth",
       "gin",
       "bitters"
    ],
    "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 tsp ",
       "1 1/2 oz ",
       "2 dashes "
    ]
 },
  {
    "FIELD1": 110,
    "drinkName": "artillery punch",
    "dateModified": "2017-04-24 22:01:32",
    "idDrink": 12870,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/9a4vqb1493067692.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "tea",
       "rye whiskey",
       "red wine",
       "rum",
       "brandy",
       "benedictine",
       "orange juice",
       "lemon juice"
    ],
    "instructions": "Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.",
    "measures": [
       "1 quart black ",
       "1 quart ",
       "1 fifth ",
       "1 pint jamaican ",
       "1/2 pint ",
       "1 1/2 oz ",
       "1 pint ",
       "1/2 pint "
    ]
 },
  {
    "FIELD1": 111,
    "drinkName": "atlantic sun",
    "dateModified": "2017-04-24 21:59:16",
    "idDrink": 13423,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "southern comfort",
       "passion fruit syrup",
       "sweet and sour",
       "club soda"
    ],
    "instructions": "Shake all the ingredients, top the drink with soda. Garnish with a slice of orange.",
    "measures": [
       "2 cl smirnoff ",
       "2 cl ",
       "2 cl ",
       "6 cl ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 112,
    "drinkName": "atomic lokade",
    "dateModified": "2017-04-24 21:56:52",
    "idDrink": 13086,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "lemonade",
       "vodka",
       "blue curacao",
       "triple sec",
       "sugar",
       "ice"
    ],
    "instructions": "In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste",
    "measures": [
       "5 oz ",
       "1 oz ",
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 113,
    "drinkName": "auburn headbanger",
    "dateModified": "2017-04-24 21:55:20",
    "idDrink": 17020,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vw7iv91493067320.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "jägermeister",
       "goldschlager"
    ],
    "instructions": "Mix in spread glass over ice. Strain and pour in shot glass. Sit down before shotting. ENJOY!!",
    "measures": [
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 114,
    "drinkName": "autodafé",
    "dateModified": "2017-02-20 15:02:08",
    "idDrink": 12756,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "lime juice",
       "soda water"
    ],
    "instructions": "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.",
    "measures": [
       "4 cl ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 115,
    "drinkName": "avalanche",
    "dateModified": "2016-09-01 09:56:05",
    "idDrink": 16419,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uppqty1472720165.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "crown royal",
       "kahlua",
       "cream"
    ],
    "instructions": "Mix in highball glass over ice, shake well.",
    "measures": [
       "1 shot ",
       "1 shot ",
       "fill with "
    ]
 },
  {
    "FIELD1": 116,
    "drinkName": "avalon",
    "dateModified": "2017-04-24 22:22:11",
    "idDrink": 15266,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "pisang ambon",
       "apple juice",
       "lemon juice",
       "lemonade"
    ],
    "instructions": "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
    "measures": [
       "3 parts",
       "1 part ",
       "6 parts ",
       "1 1/2 part "
    ]
 },
  {
    "FIELD1": 117,
    "drinkName": "aviation",
    "dateModified": "2016-11-04 09:55:28",
    "idDrink": 17180,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ruutxt1478253328.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "lemon juice",
       "maraschino liqueur"
    ],
    "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
    "measures": [
       "4.5 cl",
       "1.5 cl",
       "1.5 cl"
    ]
 },
  {
    "FIELD1": 118,
    "drinkName": "aztec punch",
    "dateModified": "2016-02-03 15:49:51",
    "idDrink": 14364,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "lemonade",
       "vodka",
       "rum",
       "ginger ale"
    ],
    "instructions": "Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so don't over do it.",
    "measures": [
       "1 can ",
       "5 oz ",
       "7 oz ",
       "about 1 bottle "
    ]
 },
  {
    "FIELD1": 119,
    "drinkName": "b-52",
    "dateModified": "2017-09-02 18:07:51",
    "idDrink": 15853,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
    "glassType": "shot glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "bailey's irish cream",
       "grand marnier",
       "kahlua"
    ],
    "instructions": "Layer ingredients into a shot glass. Serve with a stirrer.",
    "measures": [
       "1/3 ",
       "1/3 ",
       "1/4 "
    ]
 },
  {
    "FIELD1": 120,
    "drinkName": "b-53",
    "dateModified": "2016-04-28 18:53:43",
    "idDrink": 13332,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "kahlua",
       "sambuca",
       "grand marnier"
    ],
    "instructions": "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
    "measures": [
       "1/3 shot ",
       "1/3 shot ",
       "1/3 shot "
    ]
 },
  {
    "FIELD1": 121,
    "drinkName": "baby eskimo",
    "dateModified": "2016-09-01 09:57:07",
    "idDrink": 15511,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wywrtw1472720227.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "kahlua",
       "milk",
       "vanilla ice-cream"
    ],
    "instructions": "Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.",
    "measures": [
       "2 oz ",
       "8 oz ",
       "2 scoops "
    ]
 },
  {
    "FIELD1": 122,
    "drinkName": "baby guinness",
    "dateModified": "2016-09-10 05:39:19",
    "idDrink": 17079,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rvyvxs1473482359.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "kahlua",
       "bailey's irish cream"
    ],
    "instructions": "Pour Kahlua, almost filling shot glass. Then, carefully pour Baileys, using wall of shot glass. This will give the \"Guinness\" its \"head\".",
    "measures": [
       "2 1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 123,
    "drinkName": "bacardi cocktail",
    "dateModified": "2017-09-02 11:30:59",
    "idDrink": 17183,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/n433t21504348259.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "light rum",
       "lime juice",
       "sugar syrup",
       "grenadine"
    ],
    "instructions": "Shake together with ice. Strain into glass and serve.",
    "measures": [
       "1 3/4 oz bacardi ",
       "1 oz ",
       "1/2 tsp ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 124,
    "drinkName": "bailey's dream shake",
    "dateModified": "2016-09-01 09:35:59",
    "idDrink": 14510,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qxrvqw1472718959.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "bailey's irish cream",
       "vanilla ice-cream",
       "cream"
    ],
    "instructions": "Blend ingredients for 30 seconds. Definitely refreshing for a hot summer's day !",
    "measures": [
       "2 oz ",
       "2 scoops "
    ]
 },
  {
    "FIELD1": 125,
    "drinkName": "balmoral",
    "dateModified": "2015-09-02 16:04:57",
    "idDrink": 11060,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "scotch",
       "sweet vermouth",
       "dry vermouth",
       "bitters"
    ],
    "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "2 dashes "
    ]
 },
  {
    "FIELD1": 126,
    "drinkName": "banana cantaloupe smoothie",
    "dateModified": "2016-07-18 22:18:23",
    "idDrink": 12708,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "cantaloupe",
       "banana"
    ],
    "instructions": "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
    "measures": [
       "juice of 1/2 ",
       "1 "
    ]
 },
  {
    "FIELD1": 127,
    "drinkName": "banana daiquiri",
    "dateModified": "2017-09-02 22:55:01",
    "idDrink": 11064,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "light rum",
       "triple sec",
       "banana",
       "lime juice",
       "sugar",
       "cherry"
    ],
    "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
    "measures": [
       "1 1/2 oz ",
       "1 tblsp ",
       "1 ",
       "1 1/2 oz ",
       "1 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 128,
    "drinkName": "banana milk shake",
    "dateModified": "2016-09-01 09:58:27",
    "idDrink": 12654,
    "type": "non alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
    "glassType": "white wine glass",
    "ingredients": [
       "milk",
       "orange juice",
       "sugar syrup",
       "banana"
    ],
    "instructions": "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
    "measures": [
       "10 cl cold ",
       "4 cl ",
       "2 tsp ",
       "1/2 "
    ]
 },
  {
    "FIELD1": 129,
    "drinkName": "banana strawberry shake",
    "dateModified": "2016-09-01 10:03:54",
    "idDrink": 12656,
    "type": "non alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "strawberries",
       "banana",
       "yoghurt",
       "milk",
       "honey"
    ],
    "instructions": "Blend all together in a blender until smooth.",
    "measures": [
       "1/2 lb frozen ",
       "1 frozen ",
       "1 cup plain ",
       "1 cup ",
       "to taste\n"
    ]
 },
  {
    "FIELD1": 130,
    "drinkName": "banana strawberry shake daiquiri-type",
    "dateModified": "2016-09-01 10:03:01",
    "idDrink": 12658,
    "type": "non alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "strawberries",
       "banana",
       "apple juice"
    ],
    "instructions": "Blend all together in a blender until smooth.",
    "measures": [
       "1/2 lb frozen ",
       "1 frozen ",
       "2 cups fresh "
    ]
 },
  {
    "FIELD1": 131,
    "drinkName": "barracuda",
    "dateModified": "2017-09-02 18:12:17",
    "idDrink": 17209,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/jwmr1x1504372337.jpg",
    "glassType": "margarita glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "rum",
       "galliano",
       "pineapple juice",
       "lime juice",
       "prosecco"
    ],
    "instructions": "Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.",
    "measures": [
       "4.5 cl",
       "1.5 cl",
       "6 cl",
       "1 dash",
       "top up "
    ]
 },
  {
    "FIELD1": 132,
    "drinkName": "belgian blue",
    "dateModified": "2015-09-03 02:56:59",
    "idDrink": 14071,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rttsxw1441245419.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "coconut liqueur",
       "blue curacao",
       "sprite"
    ],
    "instructions": "Just pour all ingredients in the glass and stir...",
    "measures": [
       "2 cl ",
       "1 cl ",
       "1 cl ",
       "fill with "
    ]
 },
  {
    "FIELD1": 133,
    "drinkName": "bellini",
    "dateModified": "2017-09-02 16:52:23",
    "idDrink": 17195,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/eaag491504367543.jpg",
    "glassType": "champagne flute",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "champagne",
       "peach schnapps"
    ],
    "instructions": "Pour peach purée into chilled flute, add sparkling wine. Stir gently.",
    "measures": [
       "6 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 134,
    "drinkName": "bellini martini",
    "dateModified": "2017-09-02 22:56:19",
    "idDrink": 16176,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "ice",
       "vodka",
       "peach nectar",
       "peach schnapps",
       "lemon peel"
    ],
    "instructions": "Add ice cubes to shaker.\nAdd vodka.\nAdd peach schnapps.\nAdd peach nectar.\nShake.\nStrain into glass.\nAdd lemon twist peel.",
    "measures": [
       "8 cubes ",
       "3 oz ",
       "1.5 oz ",
       "1.5 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 135,
    "drinkName": "bermuda highball",
    "dateModified": "2015-09-02 16:08:48",
    "idDrink": 11084,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "brandy",
       "gin",
       "dry vermouth",
       "carbonated water",
       "lemon peel"
    ],
    "instructions": "Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 136,
    "drinkName": "berry deadly",
    "dateModified": "2016-04-28 19:17:57",
    "idDrink": 12876,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xqutpr1461867477.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "everclear",
       "wine",
       "orange juice",
       "kool-aid"
    ],
    "instructions": "Add all ingredients to large bowl. Stir gently. Serve chilled.",
    "measures": [
       "2 pint ",
       "1 bottle boone strawberry hill ",
       "1/2 gal ",
       "1 gal tropical berry "
    ]
 },
  {
    "FIELD1": 137,
    "drinkName": "between the sheets",
    "dateModified": "2017-09-02 11:32:26",
    "idDrink": 17184,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/of1rj41504348346.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "brandy",
       "light rum",
       "triple sec",
       "lemon juice"
    ],
    "instructions": "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 138,
    "drinkName": "bible belt",
    "dateModified": "2017-08-24 09:34:35",
    "idDrink": 16986,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/6bec6v1503563675.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "southern comfort",
       "triple sec",
       "lime",
       "sour mix"
    ],
    "instructions": "Mix all ingredients, and pour over ice.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "2 wedges ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 139,
    "drinkName": "big red",
    "dateModified": "2015-09-03 03:41:56",
    "idDrink": 13222,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yqwuwu1441248116.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "irish cream",
       "goldschlager"
    ],
    "instructions": "Pour ingredients into 1 ounce shot glass",
    "measures": [
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 140,
    "drinkName": "black & tan",
    "dateModified": "2016-02-03 14:50:17",
    "idDrink": 13282,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
    "glassType": "pint glass",
    "ingredients": [
       "ale",
       "guinness stout"
    ],
    "instructions": "Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the name Black & Tan.",
    "measures": [
       "1 part bass pale ",
       "1 part "
    ]
 },
  {
    "FIELD1": 141,
    "drinkName": "black forest shake",
    "dateModified": "2016-09-01 10:01:45",
    "idDrink": 15951,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "ice",
       "chocolate syrup",
       "cherry brandy",
       "vodka",
       "milk"
    ],
    "instructions": "In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.",
    "measures": [
       " cubes\n"
    ]
 },
  {
    "FIELD1": 142,
    "drinkName": "black russian",
    "dateModified": "2017-09-02 16:54:49",
    "idDrink": 11102,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2k5gbb1504367689.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "coffee liqueur",
       "vodka"
    ],
    "instructions": "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
    "measures": [
       "3/4 oz ",
       "1 1/2 oz "
    ]
 },
  {
    "FIELD1": 143,
    "drinkName": "black and brown",
    "dateModified": "2016-08-31 19:41:39",
    "idDrink": 16403,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wwuvxv1472668899.jpg",
    "glassType": "beer pilsner",
    "ingredients": [
       "guinness stout",
       "root beer"
    ],
    "instructions": "CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.",
    "measures": [
       "1/2 ",
       "1/2 "
    ]
 },
  {
    "FIELD1": 144,
    "drinkName": "blackthorn",
    "dateModified": "2015-09-02 16:57:10",
    "idDrink": 11106,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xvswvy1441209430.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sweet vermouth",
       "sloe gin",
       "lemon peel"
    ],
    "instructions": "Stir sloe gin and vermouth with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
    "measures": [
       "1 oz ",
       "1 1/2 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 145,
    "drinkName": "bleeding surgeon",
    "dateModified": "2016-09-01 09:38:38",
    "idDrink": 16295,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "dark rum",
       "orange",
       "surge",
       "cranberry juice"
    ],
    "instructions": "Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.",
    "measures": [
       "1 shot ",
       "1 slice ",
       "1/2 glass ",
       "1/2 glass "
    ]
 },
  {
    "FIELD1": 146,
    "drinkName": "blind russian",
    "dateModified": "2016-09-01 10:00:08",
    "idDrink": 14356,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wxuqvr1472720408.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "bailey's irish cream",
       "godiva liqueur",
       "kahlua",
       "butterscotch schnapps",
       "milk"
    ],
    "instructions": "Fill glass with ice. Add all liquers. Add milk. shake.",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "3/4 oz ",
       "1/2 oz ",
       "to fill\n"
    ]
 },
  {
    "FIELD1": 147,
    "drinkName": "bloody maria",
    "dateModified": "2017-09-02 22:57:41",
    "idDrink": 11112,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "tequila",
       "tomato juice",
       "lemon juice",
       "tabasco sauce",
       "celery salt",
       "lemon"
    ],
    "instructions": "Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
    "measures": [
       "1 oz ",
       "2 oz ",
       "1 dash ",
       "1 dash ",
       "1 dash ",
       "1 slice "
    ]
 },
  {
    "FIELD1": 148,
    "drinkName": "bloody mary",
    "dateModified": "2015-08-18 15:09:14",
    "idDrink": 11113,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uyquuu1439906954.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "vodka",
       "tomato juice",
       "lemon juice",
       "worcestershire sauce",
       "tabasco sauce",
       "lime"
    ],
    "instructions": "Stirring gently, pour all ingredients into highball glass. Garnish.",
    "measures": [
       "1 1/2 oz ",
       "3 oz ",
       "1 dash ",
       "1/2 tsp ",
       "2-3 drops ",
       "1 wedge "
    ]
 },
  {
    "FIELD1": 149,
    "drinkName": "blue lagoon",
    "dateModified": "2017-09-02 22:58:25",
    "idDrink": 11117,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vak0e51504389504.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "blue curacao",
       "lemonade",
       "cherry"
    ],
    "instructions": "Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve.",
    "measures": [
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 150,
    "drinkName": "blue margarita",
    "dateModified": "2015-08-18 14:51:53",
    "idDrink": 11118,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "tequila",
       "blue curacao",
       "lime juice",
       "salt"
    ],
    "instructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1 oz ",
       "coarse "
    ]
 },
  {
    "FIELD1": 151,
    "drinkName": "blue mountain",
    "dateModified": "2015-09-02 17:04:13",
    "idDrink": 11119,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vsxssp1441209853.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "añejo rum",
       "tia maria",
       "vodka",
       "orange juice",
       "lemon juice"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass alomst filled with ice cubes.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1 oz ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 152,
    "drinkName": "bluebird",
    "dateModified": "2015-09-02 17:06:11",
    "idDrink": 11120,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vxypsq1441209971.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "triple sec",
       "blue curacao",
       "bitters",
       "maraschino cherry",
       "lemon peel"
    ],
    "instructions": "In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "2 dashes ",
       "1 ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 153,
    "drinkName": "bob marley",
    "dateModified": "2016-10-22 13:51:04",
    "idDrink": 13395,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "midori melon liqueur",
       "jägermeister",
       "goldschlager"
    ],
    "instructions": "Layer in a 2 oz shot glass or pony glass",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 154,
    "drinkName": "bobby burns cocktail",
    "dateModified": "2017-01-14 16:33:28",
    "idDrink": 11121,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/km6se51484411608.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sweet vermouth",
       "scotch",
       "benedictine",
       "lemon peel"
    ],
    "instructions": "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 1/2 oz ",
       "1 1/4 tsp ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 155,
    "drinkName": "boomerang",
    "dateModified": "2017-09-02 22:59:12",
    "idDrink": 11124,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "dry vermouth",
       "bitters",
       "maraschino liqueur",
       "maraschino cherry"
    ],
    "instructions": "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "2 dashes ",
       "1/2 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 156,
    "drinkName": "boozy snickers milkshake",
    "dateModified": "2017-09-07 12:36:04",
    "idDrink": 17221,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/861tzm1504784164.jpg",
    "glassType": "mason jar",
    "ingredients": [
       "vanilla ice-cream",
       "milk",
       "godiva liqueur",
       "whipped cream",
       "caramel sauce",
       "chocolate sauce",
       "mini-snickers bars"
    ],
    "instructions": "Place the snickers bars in a plastic bag and roll over them with a rolling pin until crushed. Add crushed snickers pieces, ice cream, milk, caramel sauce, chocolate sauce, and chocolate liquor to a blender. Blend until shake is thick and frothy. Pour into glasses and top with chocolate liquor and whip cream.",
    "measures": [
       "3 cups ",
       "1 cup ",
       "1/2 cup ",
       "for topping",
       "4 tablespoons\n",
       "4 tablespoons\n",
       "15\n"
    ]
 },
  {
    "FIELD1": 157,
    "drinkName": "bora bora",
    "dateModified": "2016-09-06 23:43:31",
    "idDrink": 12572,
    "type": "non alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "pineapple juice",
       "passion fruit juice",
       "lemon juice",
       "grenadine"
    ],
    "instructions": "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",
    "measures": [
       "10 cl ",
       "6 cl ",
       "1 cl ",
       "1 cl "
    ]
 },
  {
    "FIELD1": 158,
    "drinkName": "boston sidecar",
    "dateModified": "2017-09-02 16:26:02",
    "idDrink": 11128,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "light rum",
       "brandy",
       "triple sec",
       "lime"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "3/4 oz ",
       "juice of 1/2 "
    ]
 },
  {
    "FIELD1": 159,
    "drinkName": "boston sour",
    "dateModified": "2017-09-02 16:28:20",
    "idDrink": 11129,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/kxlgbi1504366100.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "blended whiskey",
       "lemon",
       "powdered sugar",
       "egg white",
       "lemon",
       "cherry"
    ],
    "instructions": "Shake juice of lemon, powdered sugar, blended whiskey, and egg white with cracked ice and strain into a whiskey sour glass. Add the slice of lemon, top with the cherry, and serve.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "1 ",
       "1 slice ",
       "1 "
    ]
 },
  {
    "FIELD1": 160,
    "drinkName": "bourbon sling",
    "dateModified": "2017-09-02 16:31:00",
    "idDrink": 11146,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3s36ql1504366260.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "sugar",
       "water",
       "lemon juice",
       "bourbon",
       "lemon peel"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and bourbon. Shake well. Strain well. Strain into a highball glass. Garnish with the lemon twist.",
    "measures": [
       "1 tsp superfine ",
       "2 tsp ",
       "1 oz ",
       "2 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 161,
    "drinkName": "bourbon sour",
    "dateModified": "2017-09-02 16:31:58",
    "idDrink": 11147,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "bourbon",
       "lemon juice",
       "sugar",
       "orange",
       "maraschino cherry"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1/2 tsp superfine ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 162,
    "drinkName": "boxcar",
    "dateModified": "2017-09-02 16:32:57",
    "idDrink": 11149,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "gin",
       "triple sec",
       "lemon juice",
       "grenadine",
       "egg white"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1 tsp ",
       "1/2 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 163,
    "drinkName": "brain fart",
    "dateModified": "2017-09-02 23:01:42",
    "idDrink": 17120,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "everclear",
       "vodka",
       "mountain dew",
       "surge",
       "lemon juice",
       "rum"
    ],
    "instructions": "Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and soda's are very cold.",
    "measures": [
       "1 fifth ",
       "1 fifth smirnoff red label ",
       "2 l ",
       "2 l ",
       "1 small bottle ",
       "1 pint "
    ]
 },
  {
    "FIELD1": 164,
    "drinkName": "brainteaser",
    "dateModified": "2016-04-28 18:54:26",
    "idDrink": 13405,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ruywtq1461866066.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "sambuca",
       "erin cream",
       "advocaat"
    ],
    "instructions": "layered erin first, then sambuca and then avocart(should sit in middle of other two. To drink: use a straw to suck up avocart then shot the rest and then suck fumes up through straw.",
    "measures": [
       "30 ml white ",
       "30 ml ",
       "5 ml "
    ]
 },
  {
    "FIELD1": 165,
    "drinkName": "bramble",
    "dateModified": "2017-09-02 18:15:26",
    "idDrink": 17210,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/lvzl3r1504372526.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "gin",
       "lemon juice",
       "sugar syrup",
       "creme de mure"
    ],
    "instructions": "Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.",
    "measures": [
       "4 cl",
       "1.5 cl",
       "1 cl",
       "1.5 cl"
    ]
 },
  {
    "FIELD1": 166,
    "drinkName": "brandon and will's coke float",
    "dateModified": "2016-09-01 09:39:45",
    "idDrink": 16447,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg",
    "glassType": "beer mug",
    "ingredients": [
       "vanilla ice-cream",
       "coca-cola",
       "bourbon"
    ],
    "instructions": "Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker's Mark. Then, pour in coke. Gently stir and enjoy.",
    "measures": [
       "2 scoops ",
       "1 can ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 167,
    "drinkName": "brandy alexander",
    "dateModified": "2017-01-02 20:09:06",
    "idDrink": 11016,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tvqxvr1483387746.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "brandy",
       "creme de cacao",
       "light cream",
       "nutmeg"
    ],
    "instructions": "Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
    "measures": [
       "1 oz ",
       "1 oz white ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 168,
    "drinkName": "brandy cobbler",
    "dateModified": "2015-08-13 12:37:16",
    "idDrink": 11157,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vtvutr1439465836.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "sugar",
       "club soda",
       "lemon",
       "brandy",
       "maraschino cherry",
       "orange"
    ],
    "instructions": "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the brandy. Stir well. Garnish with the cherry and the orange and lemon slices.",
    "measures": [
       "1 tsp superfine ",
       "3 oz ",
       "1 ",
       "2 oz ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 169,
    "drinkName": "brandy flip",
    "dateModified": "2017-09-02 16:34:21",
    "idDrink": 11164,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/6ty09d1504366461.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "brandy",
       "egg",
       "sugar",
       "light cream",
       "nutmeg"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
    "measures": [
       "2 oz ",
       "1 whole ",
       "1 tsp superfine ",
       "1/2 oz ",
       "1/8 tsp grated "
    ]
 },
  {
    "FIELD1": 170,
    "drinkName": "brandy sour",
    "dateModified": "2017-09-02 16:35:40",
    "idDrink": 11170,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tu0mts1504366540.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "brandy",
       "lemon",
       "powdered sugar",
       "lemon",
       "cherry"
    ],
    "instructions": "Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1/2 tsp ",
       "1/2 slice ",
       "1 "
    ]
 },
  {
    "FIELD1": 171,
    "drinkName": "brave bull shooter",
    "dateModified": "2016-09-08 15:23:45",
    "idDrink": 13068,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "tequila",
       "tabasco sauce"
    ],
    "instructions": "Pour Tabasco into bottom of shot glass and fill with tequila.",
    "measures": [
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 172,
    "drinkName": "bruce's puce",
    "dateModified": "2016-09-08 15:22:38",
    "idDrink": 13066,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/svsvqv1473344558.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "grenadine",
       "kahlua",
       "bailey's irish cream"
    ],
    "instructions": "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just like chocolate milk.(Really!)",
    "measures": [
       "\n"
    ]
 },
  {
    "FIELD1": 173,
    "drinkName": "bruised heart",
    "dateModified": "2017-08-24 09:43:29",
    "idDrink": 16998,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "vodka",
       "chambord raspberry liqueur",
       "peachtree schnapps",
       "cranberry juice"
    ],
    "instructions": "Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 174,
    "drinkName": "bubble gum",
    "dateModified": "2016-07-18 22:53:03",
    "idDrink": 14730,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "vodka",
       "banana liqueur",
       "orange juice",
       "peach schnapps"
    ],
    "instructions": "Layer in order into a shot glass.",
    "measures": [
       "1/4 ",
       "1/4 ",
       "1/4 ",
       "1/4 "
    ]
 },
  {
    "FIELD1": 175,
    "drinkName": "buccaneer",
    "dateModified": "2015-09-03 03:57:03",
    "idDrink": 17035,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/upvtyt1441249023.jpg",
    "glassType": "beer pilsner",
    "ingredients": [
       "corona",
       "bacardi limon"
    ],
    "instructions": "Pour the corona into an 18oz beer glass pour the bacardi limon into the beer stir very gently",
    "measures": [
       "1 ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 176,
    "drinkName": "bumble bee #1",
    "dateModified": "2016-04-28 18:59:38",
    "idDrink": 14538,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "bailey's irish cream",
       "kahlua",
       "sambuca"
    ],
    "instructions": "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
    "measures": [
       "1/3 oz ",
       "1/3 oz ",
       "1/3 oz "
    ]
 },
  {
    "FIELD1": 177,
    "drinkName": "butter baby",
    "dateModified": "2017-09-07 12:29:23",
    "idDrink": 17220,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/1xhjk91504783763.jpg",
    "glassType": "beer mug",
    "ingredients": [
       "vanilla ice-cream",
       "butterscotch schnapps",
       "milk",
       "vodka"
    ],
    "instructions": "Blend together in a blender. Serve in a chilled Beer mug with Fresh Blueberries and caramel for topping.",
    "measures": [
       "2 scoops ",
       "1 part ",
       "full glass ",
       "2 parts "
    ]
 },
  {
    "FIELD1": 178,
    "drinkName": "cafe savoy",
    "dateModified": "2015-09-03 03:35:11",
    "idDrink": 14181,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqwptt1441247711.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "coffee",
       "milk",
       "triple sec",
       "brandy"
    ],
    "instructions": "Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.",
    "measures": [
       "\n",
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 179,
    "drinkName": "caipirinha",
    "dateModified": "2016-07-21 09:42:01",
    "idDrink": 11202,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xyrppt1469090521.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "sugar",
       "lime",
       "cachaca"
    ],
    "instructions": "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça.",
    "measures": [
       "2 tsp",
       "1 ",
       "2 1/2 oz "
    ]
 },
  {
    "FIELD1": 180,
    "drinkName": "caipirissima",
    "dateModified": "2017-08-24 10:05:15",
    "idDrink": 13206,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "lime",
       "sugar",
       "white rum",
       "ice"
    ],
    "instructions": "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
    "measures": [
       "2 ",
       "2 tblsp ",
       "2-3 oz ",
       "crushed "
    ]
 },
  {
    "FIELD1": 181,
    "drinkName": "california lemonade",
    "dateModified": "2016-08-28 18:47:04",
    "idDrink": 11205,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qvvxwy1472406424.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "blended whiskey",
       "lemon",
       "lime",
       "powdered sugar",
       "grenadine",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.",
    "measures": [
       "2 oz ",
       "juice of 1 ",
       "juice of 1 ",
       "1 tblsp ",
       "1/4 tsp "
    ]
 },
  {
    "FIELD1": 182,
    "drinkName": "california root beer",
    "dateModified": "2016-09-01 09:45:26",
    "idDrink": 14282,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rsxuyr1472719526.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "kahlua",
       "galliano",
       "soda water"
    ],
    "instructions": "Put Kahlua and Galliano in highball glass fill with soda",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "fill with "
    ]
 },
  {
    "FIELD1": 183,
    "drinkName": "campari beer",
    "dateModified": "2015-09-03 03:58:50",
    "idDrink": 16047,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xsqrup1441249130.jpg",
    "glassType": "beer mug",
    "ingredients": [
       "lager",
       "campari"
    ],
    "instructions": "Use a 15 oz glass. Add Campari first. Fill with beer.",
    "measures": [
       "1 bottle ",
       "1 1/2 cl "
    ]
 },
  {
    "FIELD1": 184,
    "drinkName": "caribbean boilermaker",
    "dateModified": "2016-02-03 15:01:06",
    "idDrink": 17065,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg",
    "glassType": "beer pilsner",
    "ingredients": [
       "corona",
       "light rum"
    ],
    "instructions": "Pour the Corona into an 18oz beer glass pour the rum into the beer.",
    "measures": [
       "1 bottle ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 185,
    "drinkName": "caribbean orange liqueur",
    "dateModified": "2016-08-31 19:19:30",
    "idDrink": 12796,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "orange",
       "vodka",
       "sugar"
    ],
    "instructions": "Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.",
    "measures": [
       "3 large ",
       "3 cups ",
       "1 1/3 cup superfine "
    ]
 },
  {
    "FIELD1": 186,
    "drinkName": "casino",
    "dateModified": "2017-09-02 11:36:19",
    "idDrink": 17185,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "maraschino liqueur",
       "lemon juice",
       "orange bitters",
       "cherry"
    ],
    "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.",
    "measures": [
       "2 oz ",
       "1/4 tsp ",
       "1/4 tsp ",
       "2 dashes ",
       "1 "
    ]
 },
  {
    "FIELD1": 187,
    "drinkName": "casino royale",
    "dateModified": "2017-09-02 16:38:19",
    "idDrink": 11224,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "gin",
       "lemon juice",
       "maraschino liqueur",
       "orange bitters",
       "egg yolk"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "1 tsp ",
       "1 dash ",
       "1 "
    ]
 },
  {
    "FIELD1": 188,
    "drinkName": "castillian hot chocolate",
    "dateModified": "2017-02-20 15:06:36",
    "idDrink": 12730,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "cocoa powder",
       "sugar",
       "cornstarch",
       "water",
       "milk"
    ],
    "instructions": "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
    "measures": [
       "1/2 cup ",
       "1 cup ",
       "7 tsp ",
       "1/2 cup ",
       "1 qt "
    ]
 },
  {
    "FIELD1": 189,
    "drinkName": "champagne cocktail",
    "dateModified": "2017-09-02 16:40:11",
    "idDrink": 11227,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ehh5df1504366811.jpg",
    "glassType": "champagne flute",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "champagne",
       "sugar",
       "bitters",
       "lemon peel",
       "cognac"
    ],
    "instructions": "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.",
    "measures": [
       "chilled ",
       "1 piece ",
       "2 dashes ",
       "1 twist of ",
       "1 dash"
    ]
 },
  {
    "FIELD1": 190,
    "drinkName": "cherry electric lemonade",
    "dateModified": "2015-12-28 10:45:48",
    "idDrink": 17174,
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg",
    "glassType": "pint glass",
    "ingredients": [
       "gin",
       "tequila",
       "vodka",
       "white rum",
       "triple sec",
       "cherry grenadine",
       "sweet and sour",
       "club soda"
    ],
    "instructions": "Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally.",
    "measures": [
       "1 oz",
       "1 oz",
       "1 oz",
       "1 oz",
       "1 oz",
       "1 oz",
       "1 oz",
       "3 oz"
    ]
 },
  {
    "FIELD1": 191,
    "drinkName": "cherry rum",
    "dateModified": "2015-09-06 16:47:04",
    "idDrink": 11239,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/twsuvr1441554424.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "light rum",
       "cherry brandy",
       "light cream"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/4 oz ",
       "1 1/2 tsp ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 192,
    "drinkName": "chicago fizz",
    "dateModified": "2015-09-02 16:29:23",
    "idDrink": 11242,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qwvwqr1441207763.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "light rum",
       "port",
       "lemon",
       "powdered sugar",
       "egg white",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 193,
    "drinkName": "chocolate beverage",
    "dateModified": "2017-02-20 15:06:26",
    "idDrink": 12732,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "milk",
       "chocolate",
       "cinnamon",
       "egg"
    ],
    "instructions": "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
    "measures": [
       "6 cups ",
       "3 oz mexican ",
       "1 tsp powdered ",
       "3 "
    ]
 },
  {
    "FIELD1": 194,
    "drinkName": "chocolate black russian",
    "dateModified": "2016-09-01 10:07:59",
    "idDrink": 11243,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "kahlua",
       "vodka",
       "chocolate ice-cream"
    ],
    "instructions": "Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "5 oz "
    ]
 },
  {
    "FIELD1": 195,
    "drinkName": "chocolate drink",
    "dateModified": "2017-02-20 15:06:20",
    "idDrink": 12734,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "chocolate",
       "milk",
       "water"
    ],
    "instructions": "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
    "measures": [
       "125 gr",
       "3/4 l "
    ]
 },
  {
    "FIELD1": 196,
    "drinkName": "chocolate milk",
    "dateModified": "2017-09-08 17:49:59",
    "idDrink": 13328,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/j6q35t1504889399.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "chocolate liqueur",
       "milk",
       "amaretto"
    ],
    "instructions": "Put the milk in the bottom, pour the Liquer on top and add the dash of amaretto. Do not mix. SLAM IT!",
    "measures": [
       "1/2 shot ",
       "1/2 shot ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 197,
    "drinkName": "chocolate monkey",
    "dateModified": "2016-07-18 21:53:32",
    "idDrink": 15615,
    "type": "optional alcohol",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tyvpxt1468875212.jpg",
    "glassType": "parfait glass",
    "ingredients": [
       "banana liqueur",
       "creme de cacao",
       "chocolate ice-cream",
       "chocolate syrup",
       "chocolate milk",
       "whipped cream",
       "cherry",
       "banana"
    ],
    "instructions": "blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.",
    "measures": [
       "1 shot ",
       "2 shots ",
       "2 scoops ",
       "1 oz ",
       "4 oz ",
       "1 ",
       "1 ",
       "1 piece "
    ]
 },
  {
    "FIELD1": 198,
    "drinkName": "citrus coke",
    "dateModified": "2016-11-18 12:46:54",
    "idDrink": 17135,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "bacardi limon",
       "coca-cola"
    ],
    "instructions": "Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!",
    "measures": [
       "1 part ",
       "2 parts "
    ]
 },
  {
    "FIELD1": 199,
    "drinkName": "city slicker",
    "dateModified": "2017-09-02 16:42:29",
    "idDrink": 11251,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/dazdlg1504366949.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "brandy",
       "triple sec",
       "lemon juice"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 200,
    "drinkName": "classic old-fashioned",
    "dateModified": "2017-09-02 16:29:33",
    "idDrink": 11145,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/anhof61504366173.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "bitters",
       "water",
       "sugar",
       "bourbon",
       "orange",
       "maraschino cherry"
    ],
    "instructions": "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick.",
    "measures": [
       "3 dashes ",
       "1 tsp ",
       "1 ",
       "3 oz ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 201,
    "drinkName": "clove cocktail",
    "dateModified": "2016-04-28 19:19:39",
    "idDrink": 11255,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qxvtst1461867579.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sweet vermouth",
       "sloe gin",
       "wine"
    ],
    "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "1/2 oz muscatel "
    ]
 },
  {
    "FIELD1": 202,
    "drinkName": "clover club",
    "dateModified": "2017-09-02 11:38:35",
    "idDrink": 17186,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "grenadine",
       "lemon",
       "egg white"
    ],
    "instructions": "Dry shake ingredients to emulsify, add ice, shake and served straight up.",
    "measures": [
       "1 1/2 oz ",
       "2 tsp ",
       "juice of 1/2 ",
       "1 "
    ]
 },
  {
    "FIELD1": 203,
    "drinkName": "coffee liqueur",
    "dateModified": "2015-09-03 05:17:31",
    "idDrink": 12798,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ryvtsu1441253851.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "coffee",
       "vanilla extract",
       "sugar",
       "vodka",
       "water"
    ],
    "instructions": "Combine coffee, sugar and water. Simmer 1 hour and let cool. Add vanilla and vodka. Age in sealed jar 2 to 3 weeks.",
    "measures": [
       "10 tblsp instant ",
       "4 tblsp ",
       "2 1/2 cups ",
       "1 qt ",
       "2 1/2 cups "
    ]
 },
  {
    "FIELD1": 204,
    "drinkName": "coffee-vodka",
    "dateModified": "2016-08-31 19:18:14",
    "idDrink": 12800,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qvrrvu1472667494.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "water",
       "sugar",
       "coffee",
       "vanilla",
       "vodka",
       "caramel coloring"
    ],
    "instructions": "Boil water and sugar until dissolved. Turn off heat. Slowly add dry instant coffee and continue stirring. Add a chopped vanilla bean to the vodka, then combine the cooled sugar syrup and coffee solution with the vodka. Cover tightly and shake vigorously each day for 3 weeks. Strain and filter. Its also best to let the sugar mixture cool completely so the vodka won't evaporate when its added. If you like a smoother feel to the liqueur you can add about 1 teaspoon of glycerine to the finished product.",
    "measures": [
       "2 cups ",
       "2 cups white ",
       "1/2 cup instant ",
       "1/2 ",
       "1 1/2 cup "
    ]
 },
  {
    "FIELD1": 205,
    "drinkName": "coke and drops",
    "dateModified": "2016-09-01 09:42:47",
    "idDrink": 17108,
    "type": "non alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "coca-cola",
       "lemon juice"
    ],
    "instructions": "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
    "measures": [
       "1 dl ",
       "7 drops "
    ]
 },
  {
    "FIELD1": 206,
    "drinkName": "cosmopolitan",
    "dateModified": "2017-09-02 17:06:02",
    "idDrink": 17196,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "absolut citron",
       "lime juice",
       "cointreau",
       "cranberry juice"
    ],
    "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
    "measures": [
       "1 1/4 oz ",
       "1/4 oz ",
       "1/4 oz ",
       "1/4 cup "
    ]
 },
  {
    "FIELD1": 207,
    "drinkName": "cosmopolitan martini",
    "dateModified": "2015-08-18 15:19:40",
    "idDrink": 14133,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "cointreau",
       "vodka",
       "lime",
       "cranberry juice"
    ],
    "instructions": "Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass.",
    "measures": [
       "1/2 oz ",
       "1 oz ",
       "juice of 1/2 ",
       "1 splash "
    ]
 },
  {
    "FIELD1": 208,
    "drinkName": "cranberry cordial",
    "dateModified": "2016-08-31 19:16:32",
    "idDrink": 12802,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qtspsx1472667392.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "cranberries",
       "sugar",
       "light rum"
    ],
    "instructions": "Place the chopped cranberries in a 2 liter jar that has a tight-fitting lid. Add the sugar and rum. Adjust the lid securely and place the jar in a cool, dark place. Invert the jar and shake it every day for six weeks. Strain the cordial into bottles and seal with corks.",
    "measures": [
       "1/2 kg chopped ",
       "3/4 l ",
       "1/2 l "
    ]
 },
  {
    "FIELD1": 209,
    "drinkName": "cranberry punch",
    "dateModified": "2017-09-02 22:54:08",
    "idDrink": 12890,
    "type": "non alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "cranberry juice",
       "sugar",
       "pineapple juice",
       "almond flavoring",
       "ginger ale"
    ],
    "instructions": "Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold.",
    "measures": [
       "4 cups ",
       "1 1/2 cup ",
       "4 cups ",
       "1 tblsp ",
       "2 qt "
    ]
 },
  {
    "FIELD1": 210,
    "drinkName": "cream soda",
    "dateModified": "2016-11-15 11:29:27",
    "idDrink": 14608,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yqstxr1479209367.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "spiced rum",
       "ginger ale"
    ],
    "instructions": "Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.",
    "measures": [
       "1 oz "
    ]
 },
  {
    "FIELD1": 211,
    "drinkName": "creme de menthe",
    "dateModified": "2015-09-03 05:18:38",
    "idDrink": 12808,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yxswtp1441253918.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "sugar",
       "water",
       "grain alcohol",
       "peppermint extract",
       "food coloring"
    ],
    "instructions": "Bring sugar and water to a boil and simmer for 10 minutes. Cool. Add the remaining ingredients and stir. Cover and let ripen for 1 month.",
    "measures": [
       "8 cups ",
       "6 cups ",
       "1 pint ",
       "1 oz pure ",
       "1 tblsp green "
    ]
 },
  {
    "FIELD1": 212,
    "drinkName": "cuba libra",
    "dateModified": "2017-09-02 22:44:56",
    "idDrink": 13751,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "dark rum",
       "lime",
       "coca-cola",
       "ice"
    ],
    "instructions": "Fill tall glass with ice cubes. Add rum. Rub cut edge of lime on rim of glass then squeeze juice into glass. Fill with Coca-Cola. Garnish with lime slice. Enjoy!",
    "measures": [
       "1-2 shot ",
       "squeeze ",
       "fill with "
    ]
 },
  {
    "FIELD1": 213,
    "drinkName": "cuba libre",
    "dateModified": "2016-09-06 23:41:03",
    "idDrink": 11288,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uuxsrr1473201663.jpg",
    "glassType": "highball glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "light rum",
       "lime",
       "coca-cola"
    ],
    "instructions": "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
    "measures": [
       "2 oz ",
       "juice of 1/2 "
    ]
 },
  {
    "FIELD1": 214,
    "drinkName": "daiquiri",
    "dateModified": "2015-08-18 15:06:37",
    "idDrink": 11291,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/usuuur1439906797.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "light rum",
       "lime",
       "powdered sugar"
    ],
    "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
    "measures": [
       "1 1/2 oz ",
       "juice of 1/2 ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 215,
    "drinkName": "damned if you do",
    "dateModified": "2017-08-24 09:58:26",
    "idDrink": 13194,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "whiskey",
       "hot damn"
    ],
    "instructions": "Pour into shot glass. Put in mouth. Repeat as deemed necessary.",
    "measures": [
       "0.75 oz ",
       "0.25 oz "
    ]
 },
  {
    "FIELD1": 216,
    "drinkName": "danbooka",
    "dateModified": "2015-09-03 03:07:55",
    "idDrink": 15409,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vurrxr1441246074.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "coffee",
       "everclear"
    ],
    "instructions": "pour it in and mix it.",
    "measures": [
       "3 parts ",
       "1 part "
    ]
 },
  {
    "FIELD1": 217,
    "drinkName": "dark caipirinha",
    "dateModified": "2016-08-28 18:40:58",
    "idDrink": 17177,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uwstrx1472406058.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "demerara sugar",
       "lime",
       "cachaca"
    ],
    "instructions": "Muddle the sugar into the lime wedges in an old-fashioned glass.\nFill the glass with ice cubes.\nPour the cachaca into the glass.\nStir well.",
    "measures": [
       "2 tsp ",
       "1",
       "2 1/2 oz"
    ]
 },
  {
    "FIELD1": 218,
    "drinkName": "dark and stormy",
    "dateModified": "2017-09-02 18:55:05",
    "idDrink": 17211,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/t1tn0s1504374905.jpg",
    "glassType": "highball glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "dark rum",
       "ginger beer"
    ],
    "instructions": "In a highball glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.",
    "measures": [
       "5 cl",
       "10 cl"
    ]
 },
  {
    "FIELD1": 219,
    "drinkName": "darkwood sling",
    "dateModified": "2016-09-01 09:41:43",
    "idDrink": 14482,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sxxsyq1472719303.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "cherry heering",
       "soda water",
       "orange juice",
       "ice"
    ],
    "instructions": "There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.",
    "measures": [
       "1 part ",
       "1 part ",
       "1 part ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 220,
    "drinkName": "derby",
    "dateModified": "2017-09-02 11:45:56",
    "idDrink": 17187,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/i502ra1504349156.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "peach bitters",
       "mint"
    ],
    "instructions": "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
    "measures": [
       "6 cl",
       "2 dashes",
       "2 fresh leaves"
    ]
 },
  {
    "FIELD1": 221,
    "drinkName": "diesel",
    "dateModified": "2016-02-03 15:20:52",
    "idDrink": 13128,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sxrrqq1454512852.jpg",
    "glassType": "pint glass",
    "ingredients": [
       "lager",
       "cider",
       "blackcurrant cordial"
    ],
    "instructions": "Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
    "measures": [
       "1/2 pint ",
       "1/2 pint ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 222,
    "drinkName": "dirty martini",
    "dateModified": "2017-01-22 11:08:20",
    "idDrink": 17181,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg",
    "glassType": "cocktail glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "vodka",
       "dry vermouth",
       "olive brine",
       "lemon",
       "olive"
    ],
    "instructions": "Pour the vodka, dry vermouth and olive brine into a cocktail shaker with a handful of ice and shake well.\nRub the rim of a martini glass with the wedge of lemon.\nStrain the contents of the cocktail shaker into the glass and add the olive.\nA dirty Martini contains a splash of olive brine or olive juice and is typically garnished with an olive.",
    "measures": [
       "70ml/2fl oz",
       "1 tbsp",
       "2 tbsp",
       "1 wedge",
       "1"
    ]
 },
  {
    "FIELD1": 223,
    "drinkName": "dirty nipple",
    "dateModified": "2016-04-28 19:01:49",
    "idDrink": 14466,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vtyqrt1461866508.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "kahlua",
       "sambuca",
       "bailey's irish cream"
    ],
    "instructions": "This is a layered shot - the Bailey's must be on top",
    "measures": [
       "\n"
    ]
 },
  {
    "FIELD1": 224,
    "drinkName": "downshift",
    "dateModified": "2017-08-24 09:38:31",
    "idDrink": 16991,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg",
    "glassType": "hurricane glass",
    "ingredients": [
       "fruit punch",
       "sprite",
       "tequila",
       "151 proof rum"
    ],
    "instructions": "Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.",
    "measures": [
       "2 part ",
       "1 part ",
       "2 shots ",
       "float bacardi "
    ]
 },
  {
    "FIELD1": 225,
    "drinkName": "dragonfly",
    "dateModified": "2017-09-02 22:51:40",
    "idDrink": 11320,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/lnvbip1504389100.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "gin",
       "ginger ale",
       "lime"
    ],
    "instructions": "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
    "measures": [
       "1 1/2 oz ",
       "4 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 226,
    "drinkName": "drinking chocolate",
    "dateModified": "2017-02-20 15:06:13",
    "idDrink": 12736,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "heavy cream",
       "milk",
       "cinnamon",
       "vanilla",
       "chocolate",
       "whipped cream"
    ],
    "instructions": "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
    "measures": [
       "2 oz ",
       "6-8 oz ",
       "1 stick ",
       "1 ",
       "2 oz finely chopped dark ",
       "fresh "
    ]
 },
  {
    "FIELD1": 227,
    "drinkName": "dry rob roy",
    "idDrink": 11324,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/typuyq1439456976.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "scotch",
       "dry vermouth",
       "lemon peel"
    ],
    "instructions": "In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
    "measures": [
       "2 1/2 oz ",
       "1 1/2 tsp ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 228,
    "drinkName": "dubonnet cocktail",
    "dateModified": "2015-08-13 10:12:27",
    "idDrink": 11326,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xxsuwr1439457147.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dubonnet rouge",
       "gin",
       "bitters",
       "lemon peel"
    ],
    "instructions": "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz ",
       "1 dash ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 229,
    "drinkName": "duchamp's punch",
    "dateModified": "2017-01-22 11:31:25",
    "idDrink": 17182,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/g51naw1485084685.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "pisco",
       "lime juice",
       "pineapple syrup",
       "st. germain",
       "angostura bitters",
       "pepper",
       "lavender"
    ],
    "instructions": "Shake all ingredients.\nDouble strain in a chilled double old fashioned glass with abig ice cube.\nGarnish with a couple of lavender sprigs",
    "measures": [
       "5 cl",
       "2.5 cl",
       "2.5 cl",
       "1.5 cl",
       "2 dashes",
       "pinch",
       "2 sprigs"
    ]
 },
  {
    "FIELD1": 230,
    "drinkName": "egg cream",
    "dateModified": "2017-01-14 21:47:26",
    "idDrink": 12668,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "chocolate syrup",
       "milk",
       "soda water"
    ],
    "instructions": "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.",
    "measures": [
       "2 tblsp ",
       "6 oz whole ",
       "6 oz "
    ]
 },
  {
    "FIELD1": 231,
    "drinkName": "egg nog #4",
    "dateModified": "2016-07-18 22:02:27",
    "idDrink": 12910,
    "type": "optional alcohol",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wpspsy1468875747.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "egg yolk",
       "sugar",
       "milk",
       "light rum",
       "bourbon",
       "vanilla extract",
       "salt",
       "whipping cream",
       "egg white",
       "sugar",
       "nutmeg"
    ],
    "instructions": "In a small mixer bowl beat egg yolks till blended. Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored. Stir in milk, stir in rum, bourbon, vanilla, and salt. Chill thoroughly. Whip cream. Wash beaters well. In a large mixer bowl beat egg whites till soft peaks form. Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites. Serve immediately. Sprinkle nutmeg over each serving. Serve in a punch bowl or another big bowl. NOTE: For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups.",
    "measures": [
       "6 ",
       "1/4 cup ",
       "2 cups ",
       "1/2 cup ",
       "1/2 cup ",
       "1 tsp ",
       "1/4 tsp ",
       "1 cup ",
       "6 ",
       "1/4 cup ",
       "ground "
    ]
 },
  {
    "FIELD1": 232,
    "drinkName": "egg nog - healthy",
    "dateModified": "2016-07-18 21:55:08",
    "idDrink": 12916,
    "type": "optional alcohol",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qxuppv1468875308.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "egg",
       "sugar",
       "condensed milk",
       "milk",
       "vanilla extract",
       "rum",
       "nutmeg"
    ],
    "instructions": "Whip egg substitute and sugar together, combine with the two kinds of milk, vanilla, and rum. Mix well. Chill over night. Sprinkle with nutmeg. Makes 6 servings.",
    "measures": [
       "1/2 cup ",
       "3 tblsp ",
       "13 oz skimmed ",
       "3/4 cup skimmed ",
       "1 tsp ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 233,
    "drinkName": "egg-nog - classic cooked",
    "dateModified": "2016-07-18 21:58:25",
    "idDrink": 12914,
    "type": "optional alcohol",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/quxsvt1468875505.jpg",
    "glassType": "pitcher",
    "ingredients": [
       "egg",
       "sugar",
       "salt",
       "milk",
       "vanilla extract"
    ],
    "instructions": "In large saucepan, beat together eggs, sugar and salt, if desired. Stir in 2 cups of the milk. Cook over low heat, stirring constantly, until mixture is thick enough to coat a metal spoon and reaches 160 degrees F. Remove from heat. Stir in remaining 2 cups milk and vanilla. Cover and regfigerate until thoroughly chilled, several hours or overnight. Just before serving, pour into bowl or pitcher. Garnish or add stir-ins, if desired. Choose 1 or several of: Chocolate curls, cinnamon sticks, extracts of flavorings, flavored brandy or liqueur, fruit juice or nectar, ground nutmeg, maraschino cherries, orange slices, peppermint sticks or candy canes, plain brandy, run or whiskey, sherbet or ice-cream, whipping cream, whipped. Serve immediately.",
    "measures": [
       "6 ",
       "1/4 cup ",
       "1/4 tsp ",
       "1 qt ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 234,
    "drinkName": "english highball",
    "dateModified": "2017-09-04 11:09:12",
    "idDrink": 11338,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "brandy",
       "gin",
       "sweet vermouth",
       "carbonated water",
       "lemon peel"
    ],
    "instructions": "Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 235,
    "drinkName": "english rose cocktail",
    "dateModified": "2015-09-02 16:44:57",
    "idDrink": 11339,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "apricot brandy",
       "gin",
       "dry vermouth",
       "grenadine",
       "lemon juice",
       "cherry"
    ],
    "instructions": "Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.",
    "measures": [
       "3/4 oz ",
       "1 1/2 oz ",
       "3/4 oz ",
       "1 tsp ",
       "1/4 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 236,
    "drinkName": "espresso martini",
    "dateModified": "2017-09-02 18:22:31",
    "idDrink": 17212,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
    "glassType": "cocktail glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "vodka",
       "kahlua",
       "sugar syrup"
    ],
    "instructions": "Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass",
    "measures": [
       "5 cl",
       "1 cl",
       "1 dash"
    ]
 },
  {
    "FIELD1": 237,
    "drinkName": "fahrenheit 5000",
    "dateModified": "2016-09-08 15:24:52",
    "idDrink": 13070,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tysssx1473344692.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "firewater",
       "absolut peppar",
       "tabasco sauce"
    ],
    "instructions": "Cover bottom of shot glass with Tabasco Sauce and then fill with half Firewater and half Absolut Peppar.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 238,
    "drinkName": "flaming dr. pepper",
    "dateModified": "2017-08-24 10:03:04",
    "idDrink": 13202,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "amaretto",
       "vodka",
       "151 proof rum",
       "dr. pepper",
       "beer"
    ],
    "instructions": "Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz bacardi ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 239,
    "drinkName": "flaming lamborghini",
    "dateModified": "2016-04-28 19:03:07",
    "idDrink": 16485,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yywpss1461866587.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "kahlua",
       "sambuca",
       "blue curacao",
       "bailey's irish cream"
    ],
    "instructions": "Pour the Sambuca and Kahlua into the Cocktail Glass and give the drinker a straw. Pour the Baileys and Blue Curacao into two sepsrate shot glasses either side of the cocktail glass. Set light the concotion in the cocktail glass and start to drink through the straw (this drink should be drunk in one) , as the bottom of the glass is reached put out the fire by pouring the Baileys and Blue Curacao into the cocktail glass and keep drinking till it's all gone!!",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 240,
    "drinkName": "flander's flake-out",
    "dateModified": "2016-04-28 19:05:05",
    "idDrink": 13675,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sqvqrx1461866705.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "sambuca",
       "sarsaparilla"
    ],
    "instructions": "Bang 'em both in.",
    "measures": [
       "1/4 glass ",
       "3/4 glass "
    ]
 },
  {
    "FIELD1": 241,
    "drinkName": "flying dutchman",
    "dateModified": "2017-09-04 11:12:38",
    "idDrink": 11368,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/akik8t1504519958.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "triple sec"
    ],
    "instructions": "In an old-fashioned glass almost filled with ice cubes, combine the gin and triple sec. Stir well.",
    "measures": [
       "2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 242,
    "drinkName": "flying scotchman",
    "dateModified": "2017-09-04 11:14:00",
    "idDrink": 11369,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/glgrix1504520040.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "scotch",
       "sweet vermouth",
       "bitters",
       "sugar syrup"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 dash ",
       "1/4 tsp "
    ]
 },
  {
    "FIELD1": 243,
    "drinkName": "foxy lady",
    "dateModified": "2017-09-04 11:10:44",
    "idDrink": 11375,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "amaretto",
       "creme de cacao",
       "light cream"
    ],
    "instructions": "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 244,
    "drinkName": "frappé",
    "dateModified": "2015-09-03 03:05:28",
    "idDrink": 12768,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "coffee",
       "milk",
       "sugar"
    ],
    "instructions": "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
    "measures": [
       "1/2 cup black ",
       "1/2 cup ",
       "1-2 tsp "
    ]
 },
  {
    "FIELD1": 245,
    "drinkName": "freddy kruger",
    "dateModified": "2016-04-28 19:06:38",
    "idDrink": 14688,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "jägermeister",
       "sambuca",
       "vodka"
    ],
    "instructions": "make it an ample size shot!!",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 246,
    "drinkName": "french \"75\"",
    "dateModified": "2015-08-18 15:08:23",
    "idDrink": 11379,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qpvxsx1439906903.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "gin",
       "sugar",
       "lemon juice",
       "champagne",
       "orange",
       "maraschino cherry"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the gin, sugar, and lemon juice. Shake well. Pour into a collins glass. Top with the Champagne. Stir well and garnish with the orange slice and the cherry.",
    "measures": [
       "1 1/2 oz ",
       "2 tsp superfine ",
       "1 1/2 oz ",
       "4 oz chilled ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 247,
    "drinkName": "french 75",
    "dateModified": "2017-09-02 17:10:15",
    "idDrink": 17197,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/4qnyty1504368615.jpg",
    "glassType": "collins glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "gin",
       "sugar",
       "lemon juice",
       "champagne",
       "orange",
       "maraschino cherry"
    ],
    "instructions": "Combine gin, sugar, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.",
    "measures": [
       "1 1/2 oz ",
       "2 tsp superfine ",
       "1 1/2 oz ",
       "4 oz chilled ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 248,
    "drinkName": "french connection",
    "dateModified": "2017-09-02 17:12:39",
    "idDrink": 17198,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/zaqa381504368758.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "cognac",
       "amaretto"
    ],
    "instructions": "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 249,
    "drinkName": "french martini",
    "dateModified": "2017-09-02 18:25:34",
    "idDrink": 17213,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg",
    "glassType": "cocktail glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "vodka",
       "raspberry liqueur",
       "pineapple juice"
    ],
    "instructions": "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from lemon peel onto the drink.",
    "measures": [
       "4.5 cl",
       "1.5 cl",
       "1.5 cl"
    ]
 },
  {
    "FIELD1": 250,
    "drinkName": "frisco sour",
    "dateModified": "2017-09-08 16:22:30",
    "idDrink": 11382,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/y39l941504884150.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "blended whiskey",
       "benedictine",
       "lemon",
       "lime",
       "lemon",
       "lime"
    ],
    "instructions": "Shake all ingredients (except slices of lemon and lime) with ice and strain into a whiskey sour glass. Decorate with the slices of lemon and lime and serve.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "juice of 1/4 ",
       "juice of 1/2 ",
       "1 slice ",
       "1 slice "
    ]
 },
  {
    "FIELD1": 251,
    "drinkName": "frozen daiquiri",
    "dateModified": "2017-09-08 16:26:53",
    "idDrink": 11387,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7oyrj91504884412.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "light rum",
       "triple sec",
       "lime juice",
       "sugar",
       "cherry",
       "ice"
    ],
    "instructions": "Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 tblsp ",
       "1 1/2 oz ",
       "1 tsp ",
       "1 ",
       "1 cup crushed "
    ]
 },
  {
    "FIELD1": 252,
    "drinkName": "frozen mint daiquiri",
    "dateModified": "2017-09-08 16:27:49",
    "idDrink": 11390,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "light rum",
       "lime juice",
       "mint",
       "sugar"
    ],
    "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
    "measures": [
       "2 oz ",
       "1 tblsp ",
       "6 ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 253,
    "drinkName": "frozen pineapple daiquiri",
    "dateModified": "2017-09-06 23:14:57",
    "idDrink": 11391,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/j2mqsb1504736097.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "light rum",
       "pineapple",
       "lime juice",
       "sugar"
    ],
    "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a champagne flute and serve.",
    "measures": [
       "1 1/2 oz ",
       "4 chunks ",
       "1 tblsp ",
       "1/2 tsp "
    ]
 },
  {
    "FIELD1": 254,
    "drinkName": "fruit cooler",
    "dateModified": "2017-01-14 21:48:19",
    "idDrink": 12670,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "apple juice",
       "strawberries",
       "sugar",
       "lemon",
       "apple",
       "soda water",
       "ice"
    ],
    "instructions": "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.",
    "measures": [
       "1 can frozen ",
       "1 cup ",
       "2 tblsp ",
       "1 ",
       "1 ",
       "1 l "
    ]
 },
  {
    "FIELD1": 255,
    "drinkName": "fruit flip-flop",
    "dateModified": "2017-01-14 21:50:33",
    "idDrink": 12672,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yoghurt",
       "fruit juice"
    ],
    "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    "measures": [
       "1 cup ",
       "1 cup "
    ]
 },
  {
    "FIELD1": 256,
    "drinkName": "fruit shake",
    "dateModified": "2017-01-14 21:51:44",
    "idDrink": 12674,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yoghurt",
       "banana",
       "orange juice",
       "fruit",
       "ice"
    ],
    "instructions": "Blend til smooth.",
    "measures": [
       "1 cup fruit ",
       "1 ",
       "4 oz frozen ",
       "1/2 piece textural ",
       "6 "
    ]
 },
  {
    "FIELD1": 257,
    "drinkName": "fuzzy asshole",
    "dateModified": "2016-08-31 19:24:58",
    "idDrink": 15743,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wrvpuu1472667898.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "coffee",
       "peach schnapps"
    ],
    "instructions": "fill coffe mug half full of coffee. Fill the other half full of Peach Schnapps. Stir and drink while hot.",
    "measures": [
       "1/2 ",
       "1/2 "
    ]
 },
  {
    "FIELD1": 258,
    "drinkName": "gg",
    "dateModified": "2016-07-18 22:06:00",
    "idDrink": 15997,
    "type": "optional alcohol",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "galliano",
       "ginger ale",
       "ice"
    ],
    "instructions": "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
    "measures": [
       "2 1/2 shots "
    ]
 },
  {
    "FIELD1": 259,
    "drinkName": "gagliardo",
    "dateModified": "2017-02-20 15:01:18",
    "idDrink": 12758,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/lyloe91487602877.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "peach vodka",
       "lemon juice",
       "galliano",
       "sirup of roses"
    ],
    "instructions": "Shake well and serve in a cocktail glass. This is a home cocktail of American/Internet Bar del Pozzo, Pavia, Italy.",
    "measures": [
       "5 parts ",
       "3 parts ",
       "1 part ",
       "1 part "
    ]
 },
  {
    "FIELD1": 260,
    "drinkName": "gentleman's club",
    "dateModified": "2017-09-08 16:08:56",
    "idDrink": 11396,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ezvy1c1504883335.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "brandy",
       "sweet vermouth",
       "club soda"
    ],
    "instructions": "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 261,
    "drinkName": "gideon's green dinosaur",
    "dateModified": "2017-08-24 09:50:36",
    "idDrink": 17002,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/p5r0tr1503564636.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "dark rum",
       "vodka",
       "triple sec",
       "tequila",
       "melon liqueur",
       "mountain dew"
    ],
    "instructions": "Add all ingredients in collins glass with ice and stir.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "fill with "
    ]
 },
  {
    "FIELD1": 262,
    "drinkName": "gin and tonic",
    "dateModified": "2016-08-28 18:37:11",
    "idDrink": 11403,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wtyxvx1472405831.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "gin",
       "tonic water",
       "lime"
    ],
    "instructions": "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
    "measures": [
       "2 oz ",
       "5 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 263,
    "drinkName": "gin cooler",
    "dateModified": "2016-11-10 23:21:49",
    "idDrink": 11407,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wsyrvv1478820109.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "gin",
       "carbonated water",
       "powdered sugar",
       "orange spiral",
       "lemon peel"
    ],
    "instructions": "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.",
    "measures": [
       "2 oz "
    ]
 },
  {
    "FIELD1": 264,
    "drinkName": "gin daisy",
    "dateModified": "2016-11-10 23:19:04",
    "idDrink": 11408,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qwxysv1478819943.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "lemon juice",
       "sugar",
       "grenadine",
       "maraschino cherry",
       "orange"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the wine, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1/2 tsp superfine ",
       "1/2 tsp ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 265,
    "drinkName": "gin fizz",
    "dateModified": "2017-09-02 12:29:32",
    "idDrink": 11410,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xhl8q31504351772.jpg",
    "glassType": "highball glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "lemon",
       "powdered sugar",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 266,
    "drinkName": "gin rickey",
    "dateModified": "2017-09-08 16:19:05",
    "idDrink": 17230,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "gin",
       "grenadine",
       "lemon",
       "soda water",
       "lime"
    ],
    "instructions": "Half-fill a tall glass with ice. Mix the gin and Grenadine together and pour over the ice. Add the lime or lemon juice and top off with soda water. Decorate the glass with lime and/or lemon slices.",
    "measures": [
       "2 oz ",
       "1 tsp ",
       "juice of 1/2 ",
       "top up with",
       "garnish"
    ]
 },
  {
    "FIELD1": 267,
    "drinkName": "gin sling",
    "dateModified": "2017-09-08 16:10:40",
    "idDrink": 11415,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/h8wmm41504883440.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "lemon",
       "powdered sugar",
       "water",
       "orange peel"
    ],
    "instructions": "Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "1 tsp ",
       "twist of "
    ]
 },
  {
    "FIELD1": 268,
    "drinkName": "gin smash",
    "dateModified": "2017-09-08 16:14:16",
    "idDrink": 11416,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/hp41fi1504883656.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "carbonated water",
       "sugar",
       "mint",
       "orange",
       "cherry"
    ],
    "instructions": "Muddle sugar with carbonated water and mint sprigs in an old-fashioned glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1 cube ",
       "4 ",
       "1 slice ",
       "1 "
    ]
 },
  {
    "FIELD1": 269,
    "drinkName": "gin sour",
    "dateModified": "2017-09-08 16:12:03",
    "idDrink": 11417,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/mt7l7m1504883523.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "gin",
       "lemon juice",
       "sugar",
       "orange",
       "maraschino cherry"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1/2 tsp superfine ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 270,
    "drinkName": "gin squirt",
    "dateModified": "2017-09-08 16:15:02",
    "idDrink": 11418,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "gin",
       "grenadine",
       "powdered sugar",
       "pineapple",
       "strawberries",
       "carbonated water"
    ],
    "instructions": "Stir gin, grenadine, and powdered sugar with ice and strain into a highball glass over ice cubes. Fill with carbonated water and stir. Decorate with the pineapple chunks and the strawberries and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 tsp ",
       "1 tblsp ",
       "3 chunks ",
       "2 "
    ]
 },
  {
    "FIELD1": 271,
    "drinkName": "gin swizzle",
    "dateModified": "2017-09-08 16:20:26",
    "idDrink": 11419,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sybce31504884026.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "lime juice",
       "sugar",
       "gin",
       "bitters",
       "club soda"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
    "measures": [
       "1 1/2 oz ",
       "1 tsp superfine ",
       "2 oz ",
       "1 dash ",
       "3 oz "
    ]
 },
  {
    "FIELD1": 272,
    "drinkName": "gin toddy",
    "dateModified": "2017-09-07 22:45:24",
    "idDrink": 11420,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "water",
       "powdered sugar",
       "lemon peel"
    ],
    "instructions": "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
    "measures": [
       "2 oz ",
       "2 tsp ",
       "1/2 tsp ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 273,
    "drinkName": "girl from ipanema",
    "dateModified": "2016-07-21 09:43:53",
    "idDrink": 17175,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xypspq1469090633.jpg",
    "glassType": "wine glass",
    "ingredients": [
       "cachaca",
       "lemon juice",
       "agave syrup",
       "champagne"
    ],
    "instructions": "Add the cachaca, lemon juice and syrup to your boston glass. Add ice and shake until ice cold. Pour into a chilled flute and top-up with Champagne",
    "measures": [
       "25 ml",
       "15 ml",
       "10 ml",
       "top up with"
    ]
 },
  {
    "FIELD1": 274,
    "drinkName": "gluehwein",
    "dateModified": "2016-07-18 21:56:58",
    "idDrink": 12944,
    "type": "optional alcohol",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vuxwvt1468875418.jpg",
    "glassType": "irish coffee cup",
    "ingredients": [
       "red wine",
       "water",
       "sugar",
       "cinnamon",
       "cloves",
       "lemon peel"
    ],
    "instructions": "Boil sugar and spices in water, leave in the water for 30 minutes. Strain the spiced water and mix with the wine. Heat slowly until short of boiling temperature. (To remove alcohol, let it boil for a while.) You may add lemon or orange juice to taste. Serve in irish coffee cup.",
    "measures": [
       "1 l ",
       "125 ml ",
       "60 gr ",
       "1 ",
       "3 ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 275,
    "drinkName": "godchild",
    "dateModified": "2017-09-07 22:47:09",
    "idDrink": 11422,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "vodka",
       "amaretto",
       "heavy cream"
    ],
    "instructions": "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 276,
    "drinkName": "godfather",
    "dateModified": "2017-09-02 17:15:28",
    "idDrink": 11423,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/r74uz51504368928.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "scotch",
       "amaretto"
    ],
    "instructions": "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 277,
    "drinkName": "godmother",
    "dateModified": "2017-09-02 17:16:24",
    "idDrink": 11424,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/4889up1504368984.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "vodka",
       "amaretto"
    ],
    "instructions": "Pour vodka and amaretto into an old-fashioned glass over ice and serve.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 278,
    "drinkName": "golden dream",
    "dateModified": "2017-09-02 17:23:45",
    "idDrink": 17199,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qrot6j1504369425.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "galliano",
       "triple sec",
       "orange juice",
       "cream"
    ],
    "instructions": "Shake with cracked ice. Strain into glass and serve.",
    "measures": [
       "2 parts",
       "2 parts",
       "2 parts",
       "1 part"
    ]
 },
  {
    "FIELD1": 279,
    "drinkName": "grand blue",
    "dateModified": "2016-09-01 21:29:09",
    "idDrink": 15427,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vsrsqu1472761749.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "malibu rum",
       "peach schnapps",
       "blue curacao",
       "sweet and sour"
    ],
    "instructions": "Serve in an old fashioned glass.",
    "measures": [
       "1 1/2 cl ",
       "1 1/2 cl ",
       "1 1/2 cl ",
       "3 cl "
    ]
 },
  {
    "FIELD1": 280,
    "drinkName": "grape lemon pineapple smoothie",
    "dateModified": "2017-02-20 15:13:03",
    "idDrink": 12712,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "grapes",
       "lemon",
       "pineapple"
    ],
    "instructions": "Throw everything into a blender and liquify.",
    "measures": [
       "1 cup ",
       "1/4 ",
       "1/2 "
    ]
 },
  {
    "FIELD1": 281,
    "drinkName": "grass skirt",
    "dateModified": "2016-09-14 23:19:46",
    "idDrink": 11433,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "gin",
       "triple sec",
       "pineapple juice",
       "grenadine",
       "pineapple"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the gin, triple sec, pineapple juice, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the pineapple slice.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1 oz ",
       "1/2 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 282,
    "drinkName": "grasshopper",
    "dateModified": "2017-09-02 17:26:53",
    "idDrink": 17200,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/aqm9el1504369613.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "green creme de menthe",
       "creme de cacao",
       "light cream"
    ],
    "instructions": "Pour ingredients into a cocktail shaker with ice. Shake briskly and then strain into a chilled cocktail glass.",
    "measures": [
       "3/4 oz ",
       "3/4 oz white ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 283,
    "drinkName": "green goblin",
    "dateModified": "2016-02-03 14:58:40",
    "idDrink": 13497,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qxprxr1454511520.jpg",
    "glassType": "pint glass",
    "ingredients": [
       "cider",
       "lager",
       "blue curacao"
    ],
    "instructions": "Cider First, Lager then Curacao",
    "measures": [
       "1/2 pint hard ",
       "1/2 pint ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 284,
    "drinkName": "grim reaper",
    "dateModified": "2017-09-08 16:06:32",
    "idDrink": 14642,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/kztu161504883192.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "kahlua",
       "151 proof rum",
       "grenadine"
    ],
    "instructions": "Mix Kahlua and 151 in glass. Quickly add ice and pour grenadine over ice to give ice red tint.",
    "measures": [
       "1 oz ",
       "1 oz bacardi ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 285,
    "drinkName": "grizzly bear",
    "dateModified": "2017-02-20 14:55:50",
    "idDrink": 12762,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/k6v97f1487602550.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "amaretto",
       "jägermeister",
       "kahlua",
       "milk"
    ],
    "instructions": "Served over ice. Sounds nasty, but tastes great.",
    "measures": [
       "1 part ",
       "1 part ",
       "1 part ",
       "2 1/2 parts "
    ]
 },
  {
    "FIELD1": 286,
    "drinkName": "h.d.",
    "dateModified": "2016-08-31 19:26:18",
    "idDrink": 16262,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
    "glassType": "beer mug",
    "ingredients": [
       "whisky",
       "bailey's irish cream",
       "coffee"
    ],
    "instructions": "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
    "measures": [
       "4 cl ",
       "8 cl "
    ]
 },
  {
    "FIELD1": 287,
    "drinkName": "happy skipper",
    "dateModified": "2017-02-20 14:54:09",
    "idDrink": 12766,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/42w2g41487602448.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "spiced rum",
       "ginger ale",
       "lime",
       "ice"
    ],
    "instructions": "Pour Captain Morgan's Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime. Tastes like a cream soda. Named for the Gilligan's Island reference (\"The Captain\" *in* \"Ginger\" is a Happy Skipper!)",
    "measures": [
       "1 1/2 cl "
    ]
 },
  {
    "FIELD1": 288,
    "drinkName": "harvey wallbanger",
    "dateModified": "2017-09-02 17:28:45",
    "idDrink": 11462,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vg4bva1504369725.jpg",
    "glassType": "collins glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "vodka",
       "galliano",
       "orange juice"
    ],
    "instructions": "Stir the vodka and orange juice with ice in the glass, then float the Galliano on top. Garnish and serve.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "4 oz "
    ]
 },
  {
    "FIELD1": 289,
    "drinkName": "havana cocktail",
    "dateModified": "2017-09-08 16:01:40",
    "idDrink": 11470,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/59splc1504882899.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "light rum",
       "pineapple juice",
       "lemon juice"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 290,
    "drinkName": "hawaiian cocktail",
    "dateModified": "2017-09-08 16:03:07",
    "idDrink": 11472,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ujoh9x1504882987.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "triple sec",
       "pineapple juice"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 291,
    "drinkName": "hemingway special",
    "dateModified": "2017-09-02 17:31:28",
    "idDrink": 17201,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/jfcvps1504369888.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "rum",
       "grapefruit juice",
       "maraschino liqueur",
       "lime juice"
    ],
    "instructions": "Pour all ingredients into a shaker with ice. Shake.",
    "measures": [
       "12 parts",
       "8 parts",
       "3 parts",
       "3 parts"
    ]
 },
  {
    "FIELD1": 292,
    "drinkName": "herbal flame",
    "dateModified": "2015-09-03 03:09:44",
    "idDrink": 15813,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rrstxv1441246184.jpg",
    "glassType": "mason jar",
    "ingredients": [
       "hot damn",
       "tea"
    ],
    "instructions": "Pour Hot Damn 100 in bottom of a jar or regular glass. Fill the rest of the glass with sweet tea. Stir with spoon, straw, or better yet a cinnamon stick and leave it in.",
    "measures": [
       "5 shots ",
       "very sweet "
    ]
 },
  {
    "FIELD1": 293,
    "drinkName": "highland fling cocktail",
    "dateModified": "2017-04-23 20:25:53",
    "idDrink": 11476,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "scotch",
       "sweet vermouth",
       "orange bitters",
       "olive"
    ],
    "instructions": "Stir all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz ",
       "2 dashes ",
       "1 "
    ]
 },
  {
    "FIELD1": 294,
    "drinkName": "holloween punch",
    "dateModified": "2017-09-08 17:42:05",
    "idDrink": 12954,
    "type": "non alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "grape juice",
       "carbonated soft drink",
       "sherbet",
       "sherbet"
    ],
    "instructions": "Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still \"bubbles\" in it in the form of sherbet scoops. Looks horrible, tastes just fine.",
    "measures": [
       "\n",
       ", orange\n"
    ]
 },
  {
    "FIELD1": 295,
    "drinkName": "homemade kahlua",
    "dateModified": "2015-09-03 05:20:25",
    "idDrink": 17044,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uwtsst1441254025.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "sugar",
       "corn syrup",
       "coffee",
       "vanilla extract",
       "water",
       "vodka"
    ],
    "instructions": "Dissolve sugar in 2 cups of boiling water and add corn syrup. Dissolve the instant coffee in the remaining water. Pour syrup and coffee in a gallon jug. Let it cool. Add vodka and vanilla when cold. For the best result, let the mixture \"mature\" for 4-5 weeks.",
    "measures": [
       "2 1/2 cups ",
       "1 cup ",
       "1 1/2 oz instant ",
       "2 oz ",
       "3 cups boiling ",
       "1 fifth "
    ]
 },
  {
    "FIELD1": 296,
    "drinkName": "horse's neck",
    "dateModified": "2017-09-02 17:34:52",
    "idDrink": 17202,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/006k4e1504370092.jpg",
    "glassType": "highball glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "lemon peel",
       "brandy",
       "ginger ale",
       "bitters"
    ],
    "instructions": "Pour brandy and ginger ale directly into highball glass with ice cubes. Stir gently. Garnish with lemon zest. If desired, add dashes of Angostura Bitter.",
    "measures": [
       "1 long strip ",
       "2 oz ",
       "5 oz ",
       "2 dashes "
    ]
 },
  {
    "FIELD1": 297,
    "drinkName": "hot chocolate to die for",
    "dateModified": "2017-02-20 15:06:06",
    "idDrink": 12738,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "chocolate",
       "butter",
       "vanilla extract",
       "half-and-half",
       "marshmallows"
    ],
    "instructions": "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
    "measures": [
       "12 oz fine ",
       "1 tsp ",
       "1/2 tsp ",
       "1 cup ",
       "mini "
    ]
 },
  {
    "FIELD1": 298,
    "drinkName": "hot creamy bush",
    "dateModified": "2016-08-31 19:27:17",
    "idDrink": 14782,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/spvrtp1472668037.jpg",
    "glassType": "irish coffee cup",
    "ingredients": [
       "irish whiskey",
       "bailey's irish cream",
       "coffee"
    ],
    "instructions": "Combine all ingredients in glass",
    "measures": [
       "1 shot ",
       "3/4 shot ",
       "6 oz hot "
    ]
 },
  {
    "FIELD1": 299,
    "drinkName": "ice pick #1",
    "dateModified": "2016-07-21 10:02:06",
    "idDrink": 13539,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ypsrqp1469091726.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "iced tea",
       "lemon juice"
    ],
    "instructions": "Put Vodka in glass fill with iced tea. Stir in lemon to taste.",
    "measures": [
       "1 1/2 oz ",
       "6 oz ",
       "to taste\n"
    ]
 },
  {
    "FIELD1": 300,
    "drinkName": "iced coffee",
    "dateModified": "2016-02-03 15:37:35",
    "idDrink": 12770,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "coffee",
       "sugar",
       "water",
       "milk"
    ],
    "instructions": "Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug.",
    "measures": [
       "1/4 cup instant ",
       "1/4 cup ",
       "1/4 cup hot ",
       "4 cups cold "
    ]
 },
  {
    "FIELD1": 301,
    "drinkName": "iced coffee fillip",
    "dateModified": "2016-02-03 15:43:43",
    "idDrink": 12772,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sxtxrp1454514223.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "kahlua",
       "coffee"
    ],
    "instructions": "Mix together in a coffee mug and chill before serving.",
    "measures": [
       "2 tsp ",
       "strong cold "
    ]
 },
  {
    "FIELD1": 302,
    "drinkName": "imperial cocktail",
    "dateModified": "2017-02-20 15:13:45",
    "idDrink": 12706,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "lime juice",
       "gin",
       "aperol"
    ],
    "instructions": "Shake with ice and strain into cocktail glass.",
    "measures": [
       "4 cl ",
       "2 cl ",
       "4 cl "
    ]
 },
  {
    "FIELD1": 303,
    "drinkName": "imperial fizz",
    "dateModified": "2017-09-08 16:29:08",
    "idDrink": 11524,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/zj1usl1504884548.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "light rum",
       "blended whiskey",
       "lemon",
       "powdered sugar",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    "measures": [
       "1/2 oz ",
       "1 1/2 oz ",
       "juice of 1/2 ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 304,
    "drinkName": "ipamena",
    "dateModified": "2016-07-21 09:49:52",
    "idDrink": 17176,
    "type": "non alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg",
    "glassType": "wine glass",
    "ingredients": [
       "lime",
       "brown sugar",
       "passion fruit juice",
       "ginger ale",
       "ice"
    ],
    "instructions": "Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime",
    "measures": [
       "½",
       "2 tsp",
       "4 cl",
       "top up with",
       "fill"
    ]
 },
  {
    "FIELD1": 305,
    "drinkName": "irish coffee",
    "dateModified": "2015-08-18 15:09:59",
    "idDrink": 13971,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sywsqw1439906999.jpg",
    "glassType": "irish coffee cup",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "irish whiskey",
       "coffee",
       "sugar",
       "whipped cream"
    ],
    "instructions": "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
    "measures": [
       "1 1/2 oz ",
       "8 oz ",
       "1 tsp ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 306,
    "drinkName": "irish cream",
    "dateModified": "2017-09-08 16:31:39",
    "idDrink": 12820,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
    "glassType": "irish coffee cup",
    "ingredients": [
       "scotch",
       "half-and-half",
       "condensed milk",
       "coconut syrup",
       "chocolate syrup"
    ],
    "instructions": "Mix scotch and milk. Add half-and-half. Add rest.",
    "measures": [
       "1 cup ",
       "1 1/4 cup ",
       "1 can sweetened ",
       "3 drops ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 307,
    "drinkName": "irish curdling cow",
    "dateModified": "2017-08-24 09:35:30",
    "idDrink": 16987,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yrhutv1503563730.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "bailey's irish cream",
       "bourbon",
       "vodka",
       "orange juice"
    ],
    "instructions": "Pour Irish Cream, Vodka, and Bourbon in a glass. Add some ice and mix in the orange juice.",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "3/4 oz ",
       "2-3 oz "
    ]
 },
  {
    "FIELD1": 308,
    "drinkName": "irish russian",
    "dateModified": "2016-02-03 15:18:50",
    "idDrink": 17015,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/swqurw1454512730.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "kahlua",
       "coca-cola",
       "guinness stout"
    ],
    "instructions": "Add the ingredients in the order listed in the recipe. Care must be taken when adding the Guinness to prevent an excess of foam. Do Not add ice.",
    "measures": [
       "1 shot ",
       "1 shot ",
       "1 dash ",
       "fill with "
    ]
 },
  {
    "FIELD1": 309,
    "drinkName": "irish spring",
    "dateModified": "2017-09-08 16:33:03",
    "idDrink": 11528,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "irish whiskey",
       "peach brandy",
       "orange juice",
       "sweet and sour",
       "orange",
       "cherry"
    ],
    "instructions": "Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "1 oz ",
       "1 oz ",
       "1 slice ",
       "1 "
    ]
 },
  {
    "FIELD1": 310,
    "drinkName": "jack rose cocktail",
    "dateModified": "2015-08-18 15:11:08",
    "idDrink": 11542,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uuqqrv1439907068.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "apple brandy",
       "grenadine",
       "lime"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 tsp ",
       "juice of 1/2 "
    ]
 },
  {
    "FIELD1": 311,
    "drinkName": "jack's vanilla coke",
    "dateModified": "2017-09-07 15:08:39",
    "idDrink": 16275,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/kjnt7z1504793319.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "ice",
       "tennessee whiskey",
       "vanilla extract",
       "coca-cola"
    ],
    "instructions": "After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.",
    "measures": [
       "4-5 ",
       "2 oz ",
       "1 tsp ",
       "10-12 oz "
    ]
 },
  {
    "FIELD1": 312,
    "drinkName": "jackhammer",
    "dateModified": "2017-09-02 22:48:16",
    "idDrink": 13847,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/9von5j1504388896.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "jack daniels",
       "amaretto"
    ],
    "instructions": "Serve over ice- Warning,Deadly!",
    "measures": [
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 313,
    "drinkName": "jam donut",
    "dateModified": "2016-09-16 16:30:04",
    "idDrink": 17178,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uuytrp1474039804.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "baileys irish cream",
       "chambord raspberry liqueur",
       "sugar syrup",
       "sugar"
    ],
    "instructions": "Coat the rim of a shot glass with sugar using sugar syrup to stick. Add the Chambord raspberry liqueur to the shot glass, and carefully layer the Baileys Irish Cream on top. Serve.",
    "measures": [
       "2/3 oz",
       "1/3 oz",
       "1 tsp",
       "2 pinches"
    ]
 },
  {
    "FIELD1": 314,
    "drinkName": "jamaica kiss",
    "dateModified": "2015-09-03 04:05:49",
    "idDrink": 14095,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/urpvvv1441249549.jpg",
    "glassType": "hurricane glass",
    "ingredients": [
       "coffee liqueur",
       "light rum",
       "ice",
       "milk"
    ],
    "instructions": "Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.",
    "measures": [
       "1 shot ",
       "1 shot jamaican ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 315,
    "drinkName": "jamaican coffee",
    "dateModified": "2015-09-03 03:27:37",
    "idDrink": 15825,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "rum",
       "coffee",
       "water",
       "whipped cream"
    ],
    "instructions": "Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.",
    "measures": [
       "1/6 glass ",
       "1/6 glass strong black ",
       "1/2 glass cold "
    ]
 },
  {
    "FIELD1": 316,
    "drinkName": "japanese fizz",
    "dateModified": "2017-09-08 16:33:51",
    "idDrink": 11558,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/37vzv11504884831.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "blended whiskey",
       "lemon",
       "powdered sugar",
       "port",
       "egg white",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    "measures": [
       "1 1/2 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "1 tblsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 317,
    "drinkName": "jello shots",
    "dateModified": "2017-09-08 16:35:04",
    "idDrink": 14956,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/l0smzo1504884904.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "vodka",
       "jello",
       "water"
    ],
    "instructions": "Boil 3 cups of water then add jello. Mix jello and water until jello is completely disolved. Add the two cups of vodka and mix together. Pour mixture into plastic shot glasses and chill until firm. Then, eat away...",
    "measures": [
       "2 cups ",
       "3 packages ",
       "3 cups "
    ]
 },
  {
    "FIELD1": 318,
    "drinkName": "jelly bean",
    "dateModified": "2017-09-02 22:46:37",
    "idDrink": 13775,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/bglc6y1504388797.jpg",
    "glassType": "cordial glass",
    "ingredients": [
       "blackberry brandy",
       "anis"
    ],
    "instructions": "mix equal parts in pony glass-tastes just like a jelly bean!",
    "measures": [
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 319,
    "drinkName": "jewel of the nile",
    "dateModified": "2017-09-08 16:35:48",
    "idDrink": 11566,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/hx4nrb1504884947.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "green chartreuse",
       "yellow chartreuse"
    ],
    "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 320,
    "drinkName": "jitterbug",
    "dateModified": "2015-09-03 02:55:18",
    "idDrink": 16178,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "vodka",
       "grenadine",
       "lime juice",
       "sugar",
       "sugar syrup",
       "soda water"
    ],
    "instructions": "Wet glass, dip rim in sugar. Then add Ice. Then add everything else. It's that simple!",
    "measures": [
       "2 jiggers ",
       "1 jigger ",
       "3 dashes ",
       "1 shot ",
       "around rim put 1 pinch ",
       "3 dashes ",
       "fill to top with "
    ]
 },
  {
    "FIELD1": 321,
    "drinkName": "john collins",
    "dateModified": "2017-09-02 12:04:31",
    "idDrink": 11580,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/u5yaxl1504350270.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "bourbon",
       "lemon juice",
       "sugar",
       "club soda",
       "maraschino cherry",
       "orange"
    ],
    "instructions": "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish. Add a dash of Angostura bitters.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1 tsp superfine ",
       "3 oz ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 322,
    "drinkName": "just a moonmint",
    "dateModified": "2017-02-20 15:20:36",
    "idDrink": 12688,
    "type": "non alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "milk",
       "chocolate syrup",
       "mint syrup"
    ],
    "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    "measures": [
       "2 cups "
    ]
 },
  {
    "FIELD1": 323,
    "drinkName": "kamikaze",
    "dateModified": "2017-09-02 18:26:44",
    "idDrink": 11600,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xa58bb1504373204.jpg",
    "glassType": "cocktail glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "vodka",
       "triple sec",
       "lime juice"
    ],
    "instructions": "Shake all ingredients together with ice. Strain into glass, garnish and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 324,
    "drinkName": "karsk",
    "dateModified": "2017-02-20 14:54:31",
    "idDrink": 12764,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "coffee",
       "grain alcohol"
    ],
    "instructions": "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
    "measures": [
       "1 part ",
       "2 parts "
    ]
 },
  {
    "FIELD1": 325,
    "drinkName": "kentucky b and b",
    "dateModified": "2016-11-10 23:23:56",
    "idDrink": 11602,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sqxsxp1478820236.jpg",
    "glassType": "brandy snifter",
    "ingredients": [
       "bourbon",
       "benedictine"
    ],
    "instructions": "Pour the bourbon and Benedictine into a brandy snifter.",
    "measures": [
       "2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 326,
    "drinkName": "kentucky colonel",
    "dateModified": "2016-11-10 23:25:48",
    "idDrink": 11604,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/utqwpu1478820348.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "bourbon",
       "benedictine",
       "lemon peel"
    ],
    "instructions": "In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a cocktail glass. Garnish with the lemon twist.",
    "measures": [
       "3 oz ",
       "1/2 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 327,
    "drinkName": "kill the cold smoothie",
    "dateModified": "2017-02-20 15:10:15",
    "idDrink": 12720,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "ginger",
       "lemon",
       "water"
    ],
    "instructions": "Juice ginger and lemon and add it to hot water. You may add cardomom.",
    "measures": [
       "1 inch ",
       "1/4 ",
       "1 cup hot "
    ]
 },
  {
    "FIELD1": 328,
    "drinkName": "kioki coffee",
    "dateModified": "2015-09-03 03:29:34",
    "idDrink": 16951,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uppqty1441247374.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "kahlua",
       "brandy",
       "coffee"
    ],
    "instructions": "Stir. Add whipped cream to the top.",
    "measures": [
       "1 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 329,
    "drinkName": "kir",
    "dateModified": "2017-09-02 17:38:14",
    "idDrink": 17203,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
    "glassType": "wine glass",
    "ingredients": [
       "creme de cassis",
       "champagne"
    ],
    "instructions": "Add the crème de cassis to the bottom of the glass, then top up with wine.",
    "measures": [
       "1 part ",
       "5 parts "
    ]
 },
  {
    "FIELD1": 330,
    "drinkName": "kir royale",
    "dateModified": "2017-09-02 17:39:48",
    "idDrink": 13837,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yt9i7n1504370388.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "creme de cassis",
       "champagne"
    ],
    "instructions": "Pour Creme de cassis in glass, gently pour champagne on top",
    "measures": [
       "1 part ",
       "5 parts "
    ]
 },
  {
    "FIELD1": 331,
    "drinkName": "kiss me quick",
    "dateModified": "2017-09-08 16:38:39",
    "idDrink": 15026,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/m7iaxu1504885119.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "cranberry vodka",
       "apfelkorn",
       "schweppes russchian",
       "apple juice",
       "ice"
    ],
    "instructions": "mix in the glass",
    "measures": [
       "4 cl ",
       "2 cl ",
       "7 cl ",
       "8 cl ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 332,
    "drinkName": "kiwi lemon",
    "dateModified": "2016-11-04 09:28:17",
    "idDrink": 14752,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tpupvr1478251697.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "kiwi liqueur",
       "bitter lemon",
       "ice"
    ],
    "instructions": "Mix in highball glass. Stirr. Garnish with slice of kiwi.",
    "measures": [
       "1 part ",
       "2 parts ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 333,
    "drinkName": "kiwi papaya smoothie",
    "dateModified": "2017-02-20 15:12:51",
    "idDrink": 12714,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "kiwi",
       "papaya"
    ],
    "instructions": "Throw everything into a blender and liquify.",
    "measures": [
       "3 ",
       "1/2 "
    ]
 },
  {
    "FIELD1": 334,
    "drinkName": "kool first aid",
    "dateModified": "2017-08-24 09:53:44",
    "idDrink": 17006,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/hfp6sv1503564824.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "151 proof rum",
       "kool-aid"
    ],
    "instructions": "Add Kool Aid to a double shot glass, and top with rum. Slam and shoot.",
    "measures": [
       "2 oz light ",
       "1/2 tsp tropical "
    ]
 },
  {
    "FIELD1": 335,
    "drinkName": "kool-aid shot",
    "dateModified": "2017-08-24 09:56:06",
    "idDrink": 13190,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/fegm621503564966.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "vodka",
       "amaretto",
       "sloe gin",
       "triple sec",
       "cranberry juice"
    ],
    "instructions": "Pour into a large glass with ice and stir. Add a little cranberry juice to taste.",
    "measures": [
       "1 shot ",
       "1 shot ",
       "1 shot ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 336,
    "drinkName": "kool-aid slammer",
    "dateModified": "2017-09-06 23:04:33",
    "idDrink": 14446,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "kool-aid",
       "vodka"
    ],
    "instructions": "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
    "measures": [
       "1/2 oz grape ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 337,
    "drinkName": "kurant tea",
    "dateModified": "2015-09-03 03:31:04",
    "idDrink": 14456,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xrsrpr1441247464.jpg",
    "glassType": "champagne flute",
    "ingredients": [
       "absolut kurant",
       "tea",
       "sugar"
    ],
    "instructions": "Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you like, some sugar. Enjoy!",
    "measures": [
       "4 cl ",
       "turkish apple ",
       "(if needed)\n"
    ]
 },
  {
    "FIELD1": 338,
    "drinkName": "lady love fizz",
    "dateModified": "2017-09-08 16:41:03",
    "idDrink": 11634,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "light cream",
       "powdered sugar",
       "lemon",
       "egg white",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a cocktail glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    "measures": [
       "2 oz ",
       "2 tsp ",
       "1 tsp ",
       "juice of 1/2 ",
       "1 "
    ]
 },
  {
    "FIELD1": 339,
    "drinkName": "lassi - a south indian drink",
    "dateModified": "2017-02-20 15:19:40",
    "idDrink": 12690,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yoghurt",
       "water",
       "cumin seed",
       "salt",
       "mint"
    ],
    "instructions": "Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yoghurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold.",
    "measures": [
       "1/2 cup plain ",
       "1 1/4 cup cold ",
       "1/2 tsp ground roasted ",
       "1/4 tsp ",
       "1/4 tsp dried "
    ]
 },
  {
    "FIELD1": 340,
    "drinkName": "lassi - mango",
    "dateModified": "2017-02-20 15:16:56",
    "idDrink": 12698,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "mango",
       "yoghurt",
       "sugar",
       "water"
    ],
    "instructions": "Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas.",
    "measures": [
       "2 ",
       "2 cups ",
       "1/2 cup ",
       "1 cup iced "
    ]
 },
  {
    "FIELD1": 341,
    "drinkName": "lassi - sweet",
    "dateModified": "2017-02-20 15:18:05",
    "idDrink": 12696,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yoghurt",
       "water",
       "sugar",
       "salt",
       "lemon juice"
    ],
    "instructions": "Put all ingredients into a blender and blend until nice and frothy. Serve chilled.",
    "measures": [
       "1 cup ",
       "2 cups cold ",
       "4 tblsp ",
       "pinch ",
       "2 tblsp "
    ]
 },
  {
    "FIELD1": 342,
    "drinkName": "lassi khara",
    "dateModified": "2017-02-20 15:19:30",
    "idDrink": 12692,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yoghurt",
       "water",
       "salt",
       "asafoetida"
    ],
    "instructions": "Blend (frappe) in blender until frothy. Add torn curry leaves and serve cold.",
    "measures": [
       "1 cup ",
       "2 cups cold ",
       "1 tsp ",
       "1 pinch "
    ]
 },
  {
    "FIELD1": 343,
    "drinkName": "lassi raita",
    "dateModified": "2017-02-20 15:18:53",
    "idDrink": 12694,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yoghurt",
       "ice",
       "sugar",
       "lime",
       "salt"
    ],
    "instructions": "Blend the yoghurt and ice cubes together, until the yoghurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead.",
    "measures": [
       "2 cups ",
       "4-6 "
    ]
 },
  {
    "FIELD1": 344,
    "drinkName": "lemon drop",
    "dateModified": "2017-09-02 18:28:17",
    "idDrink": 14366,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/mtpxgk1504373297.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "absolut vodka",
       "cointreau",
       "lemon"
    ],
    "instructions": "Shake and strain into a chilled cocktail glass rimmed with sugar.",
    "measures": [
       "1 1/2 shot ",
       "1 1/2 shot ",
       "juice of 1 wedge "
    ]
 },
  {
    "FIELD1": 345,
    "drinkName": "lemon shot",
    "dateModified": "2017-02-20 15:02:59",
    "idDrink": 12752,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/mx31hv1487602979.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "galliano",
       "absolut citron",
       "lemon",
       "sugar",
       "151 proof rum"
    ],
    "instructions": "Mix Galliano and Absolut Citron in a shot glass, lay lemon wedge sprinkled with sugar over glass and pour a rum over wedge and glass. light rum with a lighter and let burn for a second. Do shot quickly and suck on lemon. If it is done correctly, this will taste like a shot of sweet lemonade.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "wedge\n",
       "bacardi "
    ]
 },
  {
    "FIELD1": 346,
    "drinkName": "lemouroudji",
    "dateModified": "2017-02-20 15:15:45",
    "idDrink": 12702,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/eirmo71487603745.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "ginger",
       "water",
       "lemon",
       "sugar",
       "cayenne pepper"
    ],
    "instructions": "Juice the lemons. Peel and grate the ginger. Place the grated ginger and a liberal dash of the cayenne pepper into a piece of cheesecloth, and tie it into a knot. Let soak in the water. After 15 minutes or so, add the sugar, and the lemon juice. Chill, and serve.",
    "measures": [
       "2 pieces ",
       "1 gal ",
       "1 lb ",
       "1 cup ",
       "ground "
    ]
 },
  {
    "FIELD1": 347,
    "drinkName": "limeade",
    "dateModified": "2017-02-20 15:14:40",
    "idDrink": 12704,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "lime",
       "sugar",
       "soda water",
       "lime peel"
    ],
    "instructions": "In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.",
    "measures": [
       "juice of 1 ",
       "1 tblsp ",
       "(seltzer water)\n"
    ]
 },
  {
    "FIELD1": 348,
    "drinkName": "limona corona",
    "dateModified": "2015-09-03 03:51:02",
    "idDrink": 15086,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wwqrsw1441248662.jpg",
    "glassType": "beer glass",
    "ingredients": [
       "corona",
       "bacardi limon"
    ],
    "instructions": "Open the Corona. Fill the empty space in the neck in the bottle with the rum. The bottle should be filled to the top. Plug the bottle with your thumb or the palm of your hand. Turn the bottle upside-down so the rum and beer mix. Turn the bottle rightside-up, unplug, and drink.",
    "measures": [
       "1 bottle ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 349,
    "drinkName": "loch lomond",
    "dateModified": "2016-07-19 11:24:41",
    "idDrink": 11658,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "scotch",
       "drambuie",
       "dry vermouth",
       "lemon peel"
    ],
    "instructions": "In a mixing glass half-filled with ice cubes, combine the Scotch, Drambuie, and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 350,
    "drinkName": "london town",
    "dateModified": "2016-07-19 11:18:27",
    "idDrink": 11662,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rpsrqv1468923507.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "maraschino liqueur",
       "orange bitters"
    ],
    "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "2 dashes "
    ]
 },
  {
    "FIELD1": 351,
    "drinkName": "lone tree cocktail",
    "dateModified": "2016-07-19 11:16:57",
    "idDrink": 11664,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tsxpty1468923417.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sweet vermouth",
       "gin"
    ],
    "instructions": "Stir ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "3/4 oz ",
       "1 1/2 oz "
    ]
 },
  {
    "FIELD1": 352,
    "drinkName": "lone tree cooler",
    "dateModified": "2016-11-16 12:14:45",
    "idDrink": 11666,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wsyqry1479298485.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "carbonated water",
       "gin",
       "dry vermouth",
       "powdered sugar",
       "orange spiral",
       "lemon peel"
    ],
    "instructions": "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.",
    "measures": [
       "\n"
    ]
 },
  {
    "FIELD1": 353,
    "drinkName": "long island iced tea",
    "dateModified": "2017-09-02 17:41:50",
    "idDrink": 17204,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg",
    "glassType": "highball glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "vodka",
       "tequila",
       "light rum",
       "gin",
       "coca-cola",
       "lemon peel"
    ],
    "instructions": "Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1 dash ",
       "twist of "
    ]
 },
  {
    "FIELD1": 354,
    "drinkName": "long island tea",
    "dateModified": "2015-08-18 14:54:32",
    "idDrink": 11668,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ywxwqs1439906072.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "light rum",
       "gin",
       "tequila",
       "lemon",
       "coca-cola"
    ],
    "instructions": "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "juice of 1/2 ",
       "1 splash "
    ]
 },
  {
    "FIELD1": 355,
    "drinkName": "long vodka",
    "dateModified": "2017-08-24 10:00:12",
    "idDrink": 13196,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "lime",
       "angostura bitters",
       "tonic water",
       "ice"
    ],
    "instructions": "Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka",
    "measures": [
       "5 cl ",
       "1/2 ",
       "4 dashes ",
       "1 dl schweppes ",
       "4 "
    ]
 },
  {
    "FIELD1": 356,
    "drinkName": "lord and lady",
    "dateModified": "2016-07-19 11:13:39",
    "idDrink": 11670,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/quwrys1468923219.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "dark rum",
       "tia maria"
    ],
    "instructions": "Pour the rum and Tia Maria into an old-fashioned glass almost filled with ice cubes. Stir well.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 357,
    "drinkName": "lunch box",
    "dateModified": "2016-02-03 15:15:46",
    "idDrink": 14378,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qywpvt1454512546.jpg",
    "glassType": "pint glass",
    "ingredients": [
       "beer",
       "amaretto",
       "orange juice"
    ],
    "instructions": "Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.",
    "measures": [
       "3/4 bottle ",
       "1 shot ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 358,
    "drinkName": "mai tai",
    "dateModified": "2015-08-18 15:17:50",
    "idDrink": 11690,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
    "glassType": "collins glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "light rum",
       "orgeat syrup",
       "triple sec",
       "sweet and sour",
       "cherry"
    ],
    "instructions": "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1 1/2 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 359,
    "drinkName": "malibu twister",
    "dateModified": "2017-09-08 16:42:01",
    "idDrink": 15224,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2dwae41504885321.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "malibu rum",
       "tropicana",
       "cranberry juice"
    ],
    "instructions": "Add rum & trister then, add cranberry jucie,stir",
    "measures": [
       "2 parts ",
       "2 parts ",
       "1 part "
    ]
 },
  {
    "FIELD1": 360,
    "drinkName": "mango orange smoothie",
    "dateModified": "2017-02-20 15:12:01",
    "idDrink": 12716,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "mango",
       "orange"
    ],
    "instructions": "Throw everything into a blender and liquify.",
    "measures": [
       "1 ",
       "2 "
    ]
 },
  {
    "FIELD1": 361,
    "drinkName": "manhattan",
    "dateModified": "2017-09-02 12:07:09",
    "idDrink": 13839,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "sweet vermouth",
       "bourbon",
       "angostura bitters",
       "ice",
       "maraschino cherry",
       "orange peel"
    ],
    "instructions": "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    "measures": [
       "3/4 oz ",
       "2 1/2 oz blended ",
       "dash ",
       "2 or 3 ",
       "1 ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 362,
    "drinkName": "margarita",
    "dateModified": "2015-08-18 14:42:59",
    "idDrink": 13060,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "tequila",
       "triple sec",
       "lime juice",
       "salt"
    ],
    "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 363,
    "drinkName": "martinez cocktail",
    "dateModified": "2015-08-18 15:00:52",
    "idDrink": 11720,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "dry vermouth",
       "triple sec",
       "orange bitters",
       "cherry"
    ],
    "instructions": "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1/4 tsp ",
       "1 dash ",
       "1 "
    ]
 },
  {
    "FIELD1": 364,
    "drinkName": "martini",
    "dateModified": "2017-09-02 12:51:35",
    "idDrink": 11728,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "dry vermouth",
       "olive"
    ],
    "instructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    "measures": [
       "1 2/3 oz ",
       "1/3 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 365,
    "drinkName": "mary pickford",
    "dateModified": "2017-09-02 12:09:17",
    "idDrink": 17188,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "light rum",
       "pineapple juice",
       "maraschino liqueur",
       "grenadine",
       "maraschino cherry"
    ],
    "instructions": "Shake and strain into a chilled large cocktail glass",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1/2 tsp ",
       "1/2 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 366,
    "drinkName": "masala chai",
    "dateModified": "2015-09-03 03:13:04",
    "idDrink": 12774,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "water",
       "tea",
       "ginger",
       "cardamom",
       "cloves",
       "cinnamon",
       "black pepper",
       "sugar",
       "milk"
    ],
    "instructions": "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT.",
    "measures": [
       "2 cups ",
       "3-4 tsp ",
       "1 chunk dried ",
       "3-4 crushed ",
       "3 ",
       "1 piece ",
       "1-2 whole ",
       "to taste\n"
    ]
 },
  {
    "FIELD1": 367,
    "drinkName": "melya",
    "dateModified": "2015-09-03 03:32:59",
    "idDrink": 12776,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "espresso",
       "honey",
       "cocoa powder"
    ],
    "instructions": "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
    "measures": [
       "\n",
       "unsweetened "
    ]
 },
  {
    "FIELD1": 368,
    "drinkName": "miami vice",
    "dateModified": "2015-09-02 16:49:15",
    "idDrink": 13936,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qvuyqw1441208955.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "151 proof rum",
       "pina colada mix",
       "daiquiri mix"
    ],
    "instructions": "First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).",
    "measures": [
       "5 oz bacardi ",
       "frozen ",
       "frozen "
    ]
 },
  {
    "FIELD1": 369,
    "drinkName": "microwave hot cocoa",
    "dateModified": "2017-02-20 15:05:51",
    "idDrink": 12744,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "sugar",
       "cocoa powder",
       "salt",
       "water",
       "milk",
       "vanilla extract"
    ],
    "instructions": "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.",
    "measures": [
       "5 tblsp ",
       "3 tblsp ",
       "1 dash ",
       "3 tblsp hot ",
       "2 cups ",
       "1/4 tsp "
    ]
 },
  {
    "FIELD1": 370,
    "drinkName": "midnight cowboy",
    "dateModified": "2015-09-02 16:35:33",
    "idDrink": 11766,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vsxxwy1441208133.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "bourbon",
       "dark rum",
       "heavy cream"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 371,
    "drinkName": "midnight manx",
    "dateModified": "2015-09-02 16:37:11",
    "idDrink": 13825,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uqqurp1441208231.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "kahlua",
       "bailey's irish cream",
       "goldschlager",
       "heavy cream",
       "coffee"
    ],
    "instructions": "Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!",
    "measures": [
       "1 oz ",
       "1 oz ",
       "dash ",
       "2 oz ",
       "2 oz hazlenut "
    ]
 },
  {
    "FIELD1": 372,
    "drinkName": "midnight mint",
    "dateModified": "2015-09-02 16:38:30",
    "idDrink": 14842,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/svuvrq1441208310.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "bailey's irish cream",
       "white creme de menthe",
       "cream"
    ],
    "instructions": "If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into cocktail glass.",
    "measures": [
       "1 oz ",
       "3/4 oz ",
       "3/4 oz double "
    ]
 },
  {
    "FIELD1": 373,
    "drinkName": "mimosa",
    "dateModified": "2017-09-02 17:44:45",
    "idDrink": 17205,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
    "glassType": "champagne flute",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "champagne",
       "orange juice"
    ],
    "instructions": "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
    "measures": [
       "chilled ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 374,
    "drinkName": "mississippi planters punch",
    "dateModified": "2015-08-18 15:18:51",
    "idDrink": 11786,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/urpyqs1439907531.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "brandy",
       "light rum",
       "bourbon",
       "lemon",
       "powdered sugar",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "juice of 1/2 ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 375,
    "drinkName": "mocha-berry",
    "dateModified": "2015-09-03 03:14:08",
    "idDrink": 14209,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
    "glassType": "irish coffee cup",
    "ingredients": [
       "coffee",
       "chambord raspberry liqueur",
       "cocoa powder",
       "whipped cream"
    ],
    "instructions": "pour 6 oz. of coffee in a mug or Irish coffee cup. add coca mix and chambord, mix well and top off with whipped cream.",
    "measures": [
       "6 oz ",
       "2 oz ",
       "2 tblsp "
    ]
 },
  {
    "FIELD1": 376,
    "drinkName": "mojito",
    "dateModified": "2016-11-04 09:17:09",
    "idDrink": 13427,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg",
    "glassType": "highball glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "light rum",
       "lime",
       "sugar",
       "mint",
       "soda water"
    ],
    "instructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
    "measures": [
       "2-3 oz ",
       "juice of 1 ",
       "2 tsp ",
       "2-4 "
    ]
 },
  {
    "FIELD1": 377,
    "drinkName": "mojito #3",
    "dateModified": "2016-11-04 09:24:43",
    "idDrink": 15841,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "mint",
       "lemon juice",
       "dark rum",
       "club soda",
       "angostura bitters"
    ],
    "instructions": "Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.",
    "measures": [
       "1/2 handful ",
       "3 cl ",
       "1/8 l jamaican ",
       "1/8 l ",
       "8 drops "
    ]
 },
  {
    "FIELD1": 378,
    "drinkName": "monkey gland",
    "dateModified": "2017-09-02 12:11:31",
    "idDrink": 17189,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/94psp81504350690.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "benedictine",
       "orange juice",
       "grenadine"
    ],
    "instructions": "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
    "measures": [
       "2 oz ",
       "1 tsp ",
       "1/2 oz ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 379,
    "drinkName": "monkey wrench",
    "dateModified": "2017-09-02 12:55:14",
    "idDrink": 11798,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/8it05n1504353314.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "light rum",
       "grapefruit juice",
       "bitters"
    ],
    "instructions": "Pour all of the ingredients into an old-fashioned glass almost filled with ice cubes. Stir well.",
    "measures": [
       "1 1/2 oz ",
       "3 oz ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 380,
    "drinkName": "moranguito",
    "dateModified": "2016-10-05 12:35:35",
    "idDrink": 16196,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "absinthe",
       "tequila",
       "grenadine"
    ],
    "instructions": "first you put rhe absinthe, then put tequila, then put the Granadine syrup.",
    "measures": [
       "2/5 ",
       "2/5 ",
       "1/5 "
    ]
 },
  {
    "FIELD1": 381,
    "drinkName": "moscow mule",
    "dateModified": "2017-09-02 17:49:48",
    "idDrink": 13254,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    "glassType": "copper mug",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "vodka",
       "lime juice",
       "ginger ale"
    ],
    "instructions": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
    "measures": [
       "2 oz ",
       "2 oz ",
       "8 oz "
    ]
 },
  {
    "FIELD1": 382,
    "drinkName": "mother's milk",
    "dateModified": "2017-09-08 16:43:19",
    "idDrink": 14053,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7stuuh1504885399.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "goldschlager",
       "butterscotch schnapps",
       "milk"
    ],
    "instructions": "Shake over ice, strain. Serves two.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 383,
    "drinkName": "mudslinger",
    "dateModified": "2017-09-08 16:45:55",
    "idDrink": 16041,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/hepk6h1504885554.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "southern comfort",
       "orange juice",
       "pepsi cola"
    ],
    "instructions": "Add all contents to a large jug or punch bowl. Stir well!",
    "measures": [
       "750 ml ",
       "1 l ",
       "750 ml "
    ]
 },
  {
    "FIELD1": 384,
    "drinkName": "mulled wine",
    "dateModified": "2017-09-06 23:08:44",
    "idDrink": 12988,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/iuwi6h1504735724.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "water",
       "sugar",
       "cloves",
       "cinnamon",
       "lemon peel",
       "red wine",
       "brandy"
    ],
    "instructions": "Simmer 3 cups water with, sugar, cloves, cinnamon sticks, and lemon peel in a stainless steel pot for 10 minutes. Add wine heat to a \"coffee temperature\" (DO NOT BOIL) then add the brandy.",
    "measures": [
       "3 cups ",
       "1 cup ",
       "12 ",
       "2 ",
       "1 ",
       "750 ml ",
       "1/4 cup "
    ]
 },
  {
    "FIELD1": 385,
    "drinkName": "national aquarium",
    "dateModified": "2017-08-24 09:57:01",
    "idDrink": 13192,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "rum",
       "vodka",
       "gin",
       "blue curacao",
       "sour mix",
       "lemon-lime soda"
    ],
    "instructions": "Pour all ingredients into a shaker of ice. Shake well. Serve on the rocks.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "2 oz ",
       "1 splash "
    ]
 },
  {
    "FIELD1": 386,
    "drinkName": "negroni",
    "dateModified": "2015-08-18 15:12:07",
    "idDrink": 15549,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "campari",
       "sweet vermouth"
    ],
    "instructions": "Stir into glass over ice, garnish and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 387,
    "drinkName": "new york lemonade",
    "dateModified": "2017-08-24 10:04:33",
    "idDrink": 13204,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/b3n0ge1503565473.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "absolut citron",
       "grand marnier",
       "lemon juice",
       "club soda"
    ],
    "instructions": "Serve in a chilled cocktail glass. Lemon and sugar the rim. Stir and Strain.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "2 oz sweetened ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 388,
    "drinkName": "new york sour",
    "dateModified": "2017-09-08 15:59:55",
    "idDrink": 11844,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/61wgch1504882795.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "blended whiskey",
       "lemon",
       "sugar",
       "red wine",
       "lemon",
       "cherry"
    ],
    "instructions": "Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Float claret on top. Decorate with the half-slice of lemon and the cherry and serve.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "(claret)\n"
    ]
 },
  {
    "FIELD1": 389,
    "drinkName": "nuked hot chocolate",
    "dateModified": "2017-02-20 15:05:43",
    "idDrink": 12746,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "cocoa powder",
       "sugar",
       "vanilla extract",
       "milk"
    ],
    "instructions": "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.",
    "measures": [
       "2 tsp ",
       "1 tsp ",
       "1/2 tsp ",
       "12 oz "
    ]
 },
  {
    "FIELD1": 390,
    "drinkName": "nutty irishman",
    "dateModified": "2015-09-03 03:40:14",
    "idDrink": 13861,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xspupx1441248014.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "bailey's irish cream",
       "frangelico",
       "milk"
    ],
    "instructions": "Serve over ice",
    "measures": [
       "1 part ",
       "1 part ",
       "1 part "
    ]
 },
  {
    "FIELD1": 391,
    "drinkName": "old fashioned",
    "dateModified": "2016-11-04 09:46:42",
    "idDrink": 17179,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "bourbon",
       "angostura bitters",
       "sugar",
       "water"
    ],
    "instructions": "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\nFill the glass with ice cubes and add whiskey.\n\nGarnish with orange twist, and a cocktail cherry.",
    "measures": [
       "4.5 cl",
       "2 dashes",
       "1 cube",
       "dash"
    ]
 },
  {
    "FIELD1": 392,
    "drinkName": "orange crush",
    "dateModified": "2017-09-08 16:52:06",
    "idDrink": 15330,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "vodka",
       "triple sec",
       "orange juice"
    ],
    "instructions": "Add all ingredients to tumbler-Pour as shot",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 393,
    "drinkName": "orange oasis",
    "dateModified": "2015-09-02 05:25:23",
    "idDrink": 11870,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xqqytq1441167923.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "cherry brandy",
       "gin",
       "orange juice",
       "ginger ale"
    ],
    "instructions": "Shake brandy, gin, and orange juice with ice and strain into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
    "measures": [
       "1/2 oz ",
       "1 1/2 oz ",
       "4 oz "
    ]
 },
  {
    "FIELD1": 394,
    "drinkName": "orange push-up",
    "dateModified": "2017-08-24 10:09:41",
    "idDrink": 14586,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/mgf0y91503565781.jpg",
    "glassType": "hurricane glass",
    "ingredients": [
       "spiced rum",
       "grenadine",
       "orange juice",
       "sour mix"
    ],
    "instructions": "Combine liquors in a blender. Add a half scoop of ice and blend. Garnish with an orange and cherry flag. So good it will melt in your mouth!!!",
    "measures": [
       "1.5 oz ",
       "0.5 oz ",
       "4 oz ",
       "1 splash "
    ]
 },
  {
    "FIELD1": 395,
    "drinkName": "orange scented hot chocolate",
    "dateModified": "2017-02-20 15:05:31",
    "idDrink": 12748,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "milk",
       "chocolate",
       "orange peel",
       "espresso",
       "nutmeg"
    ],
    "instructions": "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.",
    "measures": [
       "2 cups ",
       "4 oz chopped bittersweet or semi-sweet ",
       "3 2-inch strips ",
       "1/2 tsp instant ",
       "1/8 tsp ground "
    ]
 },
  {
    "FIELD1": 396,
    "drinkName": "orange whip",
    "dateModified": "2016-02-03 15:52:39",
    "idDrink": 16995,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "orange juice",
       "rum",
       "vodka",
       "cream",
       "ice"
    ],
    "instructions": "Pour ingredients over ice and stir.",
    "measures": [
       "4 oz ",
       "1 oz ",
       "1 oz ",
       "1 package ",
       "over "
    ]
 },
  {
    "FIELD1": 397,
    "drinkName": "orangeade",
    "dateModified": "2015-09-02 05:22:12",
    "idDrink": 12618,
    "type": "non alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "lemon juice",
       "orange juice",
       "sugar syrup",
       "soda water"
    ],
    "instructions": "Place some ice cubes in a large tumbler or highball glass, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water, serve with a drinking straw.",
    "measures": [
       "5 cl ",
       "15 cl ",
       "2-3 cl "
    ]
 },
  {
    "FIELD1": 398,
    "drinkName": "oreo mudslide",
    "dateModified": "2016-07-19 11:43:37",
    "idDrink": 13499,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tpwwut1468925017.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "kahlua",
       "bailey's irish cream",
       "vanilla ice-cream",
       "oreo cookie"
    ],
    "instructions": "Blend Vodka, Kahlua, Bailey's, ice-cream and the Oreo well in a blender. Pour into a large frosted glass. Garnish with whipped cream and a cherry.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "2 scoops ",
       "1 "
    ]
 },
  {
    "FIELD1": 399,
    "drinkName": "orgasm",
    "dateModified": "2017-09-08 16:55:14",
    "idDrink": 11872,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "creme de cacao",
       "amaretto",
       "triple sec",
       "vodka",
       "light cream"
    ],
    "instructions": "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
    "measures": [
       "1/2 oz white ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 400,
    "drinkName": "owen's grandmother's revenge",
    "dateModified": "2017-08-24 10:02:02",
    "idDrink": 13200,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/0wt4uo1503565321.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "whiskey",
       "beer",
       "lemonade",
       "ice"
    ],
    "instructions": "Add ingredients and mix in blender.",
    "measures": [
       "12 oz ",
       "12 oz ",
       "12 oz frozen ",
       "1 cup crushed "
    ]
 },
  {
    "FIELD1": 401,
    "drinkName": "paradise",
    "dateModified": "2017-09-02 12:17:40",
    "idDrink": 17190,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ejozd71504351060.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "apricot brandy",
       "orange juice"
    ],
    "instructions": "Shake together over ice. Strain into cocktail glass and serve chilled.",
    "measures": [
       "7 parts",
       "4 parts",
       "3 parts "
    ]
 },
  {
    "FIELD1": 402,
    "drinkName": "pina colada",
    "dateModified": "2017-09-02 17:55:46",
    "idDrink": 17207,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
    "glassType": "collins glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "light rum",
       "coconut milk",
       "pineapple"
    ],
    "instructions": "Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.",
    "measures": [
       "3 oz ",
       "3 tblsp ",
       "3 tblsp "
    ]
 },
  {
    "FIELD1": 403,
    "drinkName": "pineapple gingerale smoothie",
    "dateModified": "2017-02-20 15:11:09",
    "idDrink": 12718,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "ginger",
       "pineapple"
    ],
    "instructions": "Throw everything into a blender and liquify.",
    "measures": [
       "1/4 inch ",
       "1/2 "
    ]
 },
  {
    "FIELD1": 404,
    "drinkName": "pink gin",
    "dateModified": "2017-09-08 17:36:58",
    "idDrink": 11936,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qyr51e1504888618.jpg",
    "glassType": "white wine glass",
    "ingredients": [
       "bitters",
       "gin"
    ],
    "instructions": "Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.",
    "measures": [
       "3 dashes ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 405,
    "drinkName": "pink lady",
    "dateModified": "2017-09-08 17:23:49",
    "idDrink": 11938,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/5ia6j21504887829.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "grenadine",
       "light cream",
       "egg white"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 tsp ",
       "1 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 406,
    "drinkName": "pink panty pulldowns",
    "dateModified": "2016-07-19 12:10:57",
    "idDrink": 13535,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "sprite",
       "pink lemonade",
       "vodka"
    ],
    "instructions": "Shake well",
    "measures": [
       "1 l ",
       "2 cups ",
       "2 cups "
    ]
 },
  {
    "FIELD1": 407,
    "drinkName": "pink penocha",
    "dateModified": "2017-08-24 09:40:07",
    "idDrink": 16992,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/6vigjx1503564007.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "everclear",
       "vodka",
       "peach schnapps",
       "orange juice",
       "cranberry juice"
    ],
    "instructions": "mix all ingredients into bowl keep iced stir frequently",
    "measures": [
       "750 ml ",
       "1750 ml ",
       "1750 ml ",
       "1 gal ",
       "1 gal "
    ]
 },
  {
    "FIELD1": 408,
    "drinkName": "pisco sour",
    "dateModified": "2015-08-18 15:20:22",
    "idDrink": 13214,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
    "glassType": "cocktail glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "pisco",
       "lemon juice",
       "sugar",
       "ice"
    ],
    "instructions": "Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.[1]",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1-2 tblsp "
    ]
 },
  {
    "FIELD1": 409,
    "drinkName": "planter's punch",
    "dateModified": "2017-09-02 12:23:04",
    "idDrink": 17191,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yvos231504351384.jpg",
    "glassType": "collins glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "dark rum",
       "orgeat syrup",
       "orange juice",
       "pineapple juice"
    ],
    "instructions": "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add Angostura bitters, \"on top\". Garnish with cocktail cherry and pineapple.",
    "measures": [
       "1 part ",
       "1/2 part ",
       "2 parts ",
       "1 part "
    ]
 },
  {
    "FIELD1": 410,
    "drinkName": "popped cherry",
    "dateModified": "2016-09-08 15:27:05",
    "idDrink": 13072,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sxvrwv1473344825.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "cherry liqueur",
       "cranberry juice",
       "orange juice"
    ],
    "instructions": "Served over ice in a tall glass with a popped cherry (can add more popped cherries if in the mood)!",
    "measures": [
       "2 oz ",
       "2 oz ",
       "4 oz ",
       "4 oz "
    ]
 },
  {
    "FIELD1": 411,
    "drinkName": "poppy cocktail",
    "dateModified": "2017-09-02 23:05:15",
    "idDrink": 11959,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/cslw1w1504389915.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "creme de cacao"
    ],
    "instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz white "
    ]
 },
  {
    "FIELD1": 412,
    "drinkName": "port and starboard",
    "dateModified": "2015-09-06 16:38:31",
    "idDrink": 11961,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wxvupx1441553911.jpg",
    "glassType": "pousse cafe glass",
    "ingredients": [
       "grenadine",
       "green creme de menthe"
    ],
    "instructions": "Pour carefully into a pousse-cafe glass, so that creme de menthe floats on grenadine. Serve without mixing.",
    "measures": [
       "1 tblsp ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 413,
    "drinkName": "port wine cocktail",
    "dateModified": "2015-09-06 16:39:36",
    "idDrink": 11963,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qruprq1441553976.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "port",
       "brandy"
    ],
    "instructions": "Stir ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "2 1/2 oz ",
       "1/2 tsp "
    ]
 },
  {
    "FIELD1": 414,
    "drinkName": "port wine flip",
    "dateModified": "2015-09-06 16:37:24",
    "idDrink": 11965,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vrprxu1441553844.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "port",
       "light cream",
       "powdered sugar",
       "egg",
       "nutmeg"
    ],
    "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
    "measures": [
       "1 1/2 oz ",
       "2 tsp ",
       "1 tsp ",
       "1 whole "
    ]
 },
  {
    "FIELD1": 415,
    "drinkName": "porto flip",
    "dateModified": "2017-09-02 12:25:18",
    "idDrink": 17192,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/64x5j41504351518.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "brandy",
       "port",
       "egg yolk"
    ],
    "instructions": "Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.",
    "measures": [
       "3 parts",
       "9 parts",
       "2 parts"
    ]
 },
  {
    "FIELD1": 416,
    "drinkName": "pysch vitamin light",
    "dateModified": "2015-09-06 16:33:00",
    "idDrink": 15092,
    "type": "non alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "orange juice",
       "apple juice",
       "pineapple juice",
       "ice"
    ],
    "instructions": "Shake with ice.",
    "measures": [
       "1 part ",
       "1 part ",
       "1 part "
    ]
 },
  {
    "FIELD1": 417,
    "drinkName": "quaker's cocktail",
    "dateModified": "2016-11-12 14:51:54",
    "idDrink": 11983,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "light rum",
       "brandy",
       "lemon",
       "raspberry syrup"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "juice of 1/4 ",
       "2 tsp "
    ]
 },
  {
    "FIELD1": 418,
    "drinkName": "quarter deck cocktail",
    "dateModified": "2016-11-12 15:03:37",
    "idDrink": 11985,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qrwvps1478963017.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "light rum",
       "sherry",
       "lime"
    ],
    "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 ",
       "1/3 oz cream ",
       "juice of 1/2 "
    ]
 },
  {
    "FIELD1": 419,
    "drinkName": "queen bee",
    "dateModified": "2016-11-12 15:06:34",
    "idDrink": 11987,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rvvpxu1478963194.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "coffee brandy",
       "lime vodka",
       "sherry"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1 1/2 oz ",
       "1/2 oz cream "
    ]
 },
  {
    "FIELD1": 420,
    "drinkName": "queen charlotte",
    "dateModified": "2016-11-12 15:07:29",
    "idDrink": 11989,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqruyt1478963249.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "red wine",
       "grenadine",
       "lemon-lime soda"
    ],
    "instructions": "Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.",
    "measures": [
       "2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 421,
    "drinkName": "queen elizabeth",
    "dateModified": "2016-11-12 15:08:59",
    "idDrink": 11991,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dry vermouth",
       "gin",
       "benedictine"
    ],
    "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1/2 oz ",
       "1 1/2 oz ",
       "1 1/2 tsp "
    ]
 },
  {
    "FIELD1": 422,
    "drinkName": "quentin",
    "dateModified": "2016-11-12 15:09:58",
    "idDrink": 11993,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/spxtqp1478963398.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dark rum",
       "kahlua",
       "light cream",
       "nutmeg"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1 oz ",
       "1/8 tsp grated "
    ]
 },
  {
    "FIELD1": 423,
    "drinkName": "quick f**k",
    "dateModified": "2016-11-12 15:10:54",
    "idDrink": 13198,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wvtwpp1478963454.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "kahlua",
       "midori melon liqueur",
       "bailey's irish cream"
    ],
    "instructions": "In a shot glass add 1/3 Kahlua first. Then 1/3 Miduri, topping it off with a 1/3 bailey's irish cream",
    "measures": [
       "1 part ",
       "1 part ",
       "1 part "
    ]
 },
  {
    "FIELD1": 424,
    "drinkName": "quick-sand",
    "dateModified": "2016-11-12 15:12:13",
    "idDrink": 15761,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vprxqv1478963533.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "black sambuca",
       "orange juice"
    ],
    "instructions": "Simply add the orange juice, quite a quick pour in order to mix the sambucca with the orange juice. The juice MUST have fruit pulp!",
    "measures": [
       "25 ml ",
       "add 250 ml "
    ]
 },
  {
    "FIELD1": 425,
    "drinkName": "radioactive long island iced tea",
    "dateModified": "2017-08-24 09:31:52",
    "idDrink": 16984,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "rum",
       "vodka",
       "tequila",
       "gin",
       "triple sec",
       "chambord raspberry liqueur",
       "midori melon liqueur",
       "malibu rum"
    ],
    "instructions": "Pour all ingredients over ice in a very tall glass. Sip cautiously.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 426,
    "drinkName": "radler",
    "dateModified": "2017-09-08 17:43:15",
    "idDrink": 16031,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xz8igv1504888995.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "beer",
       "7-up"
    ],
    "instructions": "Pour beer into large mug, slowly add the 7-up (or Sprite).",
    "measures": [
       "12 oz ",
       "12 oz "
    ]
 },
  {
    "FIELD1": 427,
    "drinkName": "rail splitter",
    "dateModified": "2015-09-02 16:27:40",
    "idDrink": 12630,
    "type": "non alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "sugar syrup",
       "lemon juice",
       "ginger ale"
    ],
    "instructions": "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.",
    "measures": [
       "2 tsp "
    ]
 },
  {
    "FIELD1": 428,
    "drinkName": "raspberry cooler",
    "dateModified": "2015-09-03 05:25:46",
    "idDrink": 17167,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/suqyyx1441254346.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "raspberry vodka",
       "lemon-lime soda",
       "ice"
    ],
    "instructions": "Pour the raspberry vodka and soda into a highball glass almost filled with ice cubes. Stir well.",
    "measures": [
       "2 oz ",
       "4 oz "
    ]
 },
  {
    "FIELD1": 429,
    "drinkName": "red snapper",
    "dateModified": "2017-09-06 23:02:23",
    "idDrink": 14087,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7p607y1504735343.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "crown royal",
       "amaretto",
       "cranberry juice"
    ],
    "instructions": "One shot each, shake n shoot",
    "measures": [
       "1 shot ",
       "1 shot ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 430,
    "drinkName": "rose",
    "dateModified": "2017-09-02 17:57:42",
    "idDrink": 17208,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "dry vermouth",
       "gin",
       "apricot brandy",
       "lemon juice",
       "grenadine",
       "powdered sugar"
    ],
    "instructions": "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
    "measures": [
       "1/2 oz ",
       "1 oz ",
       "1/2 oz ",
       "1/2 tsp ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 431,
    "drinkName": "royal bitch",
    "dateModified": "2015-09-02 17:08:10",
    "idDrink": 17122,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qupuyr1441210090.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "frangelico",
       "crown royal"
    ],
    "instructions": "Into a shot glass layer the Crown Royal on top of the Frangelico.",
    "measures": [
       "1 part ",
       "1 part "
    ]
 },
  {
    "FIELD1": 432,
    "drinkName": "royal fizz",
    "dateModified": "2017-09-02 23:16:49",
    "idDrink": 12055,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wrh44j1504390609.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "gin",
       "sweet and sour",
       "egg",
       "coca-cola"
    ],
    "instructions": "Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.",
    "measures": [
       "1 oz ",
       "2 oz ",
       "1 whole "
    ]
 },
  {
    "FIELD1": 433,
    "drinkName": "royal flush",
    "dateModified": "2017-09-08 17:35:27",
    "idDrink": 15082,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7rnm8u1504888527.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "crown royal",
       "peach schnapps",
       "chambord raspberry liqueur",
       "cranberry juice"
    ],
    "instructions": "Pour all the ingredients into tumbler over ice. Strain into glass.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1/2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 434,
    "drinkName": "royal gin fizz",
    "dateModified": "2017-09-06 23:07:52",
    "idDrink": 12057,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/pe1x1c1504735672.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "gin",
       "lemon",
       "powdered sugar",
       "egg",
       "carbonated water"
    ],
    "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "1 whole "
    ]
 },
  {
    "FIELD1": 435,
    "drinkName": "ruby tuesday",
    "dateModified": "2015-09-06 16:30:37",
    "idDrink": 17114,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qsyqqq1441553437.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "gin",
       "cranberry juice",
       "grenadine"
    ],
    "instructions": "Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.",
    "measures": [
       "2 oz ",
       "5 oz ",
       "2 splashes "
    ]
 },
  {
    "FIELD1": 436,
    "drinkName": "rum cobbler",
    "dateModified": "2017-09-02 23:18:03",
    "idDrink": 12067,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/5vh9ld1504390683.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "sugar",
       "club soda",
       "lemon",
       "dark rum",
       "maraschino cherry",
       "orange"
    ],
    "instructions": "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the rum. Stir well. Garnish with the cherry and the orange and lemon slices.",
    "measures": [
       "1 tsp superfine ",
       "3 oz ",
       "1 ",
       "2 oz ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 437,
    "drinkName": "rum cooler",
    "dateModified": "2017-09-08 17:37:54",
    "idDrink": 12071,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "rum",
       "lemon-lime soda",
       "lemon"
    ],
    "instructions": "Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
    "measures": [
       "2 oz light or dark ",
       "4 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 438,
    "drinkName": "rum milk punch",
    "dateModified": "2017-09-08 17:40:10",
    "idDrink": 12087,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/w64lqm1504888810.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "light rum",
       "milk",
       "powdered sugar",
       "nutmeg"
    ],
    "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
    "measures": [
       "2 oz ",
       "1 cup ",
       "1 tsp "
    ]
 },
  {
    "FIELD1": 439,
    "drinkName": "rum old-fashioned",
    "dateModified": "2017-09-07 22:44:09",
    "idDrink": 12089,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/otn2011504820649.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "light rum",
       "151 proof rum",
       "powdered sugar",
       "bitters",
       "water",
       "lime peel"
    ],
    "instructions": "Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 tsp ",
       "1/2 tsp ",
       "1 dash ",
       "1 tsp ",
       "twist of "
    ]
 },
  {
    "FIELD1": 440,
    "drinkName": "rum punch",
    "dateModified": "2015-09-06 16:48:58",
    "idDrink": 14978,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "rum",
       "ginger ale",
       "fruit punch",
       "orange juice",
       "ice"
    ],
    "instructions": "Mix all ingredients in a punch bowl and serve.",
    "measures": [
       "mikey bottle ",
       "large bottle ",
       "355 ml frozen ",
       "355 ml frozen ",
       "crushed "
    ]
 },
  {
    "FIELD1": 441,
    "drinkName": "rum runner",
    "dateModified": "2017-09-08 17:40:57",
    "idDrink": 16250,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vqws6t1504888857.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "malibu rum",
       "blackberry brandy",
       "orange juice",
       "pineapple juice",
       "cranberry juice"
    ],
    "instructions": "Mix all ingredients in glass & add ice.",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "3-4 oz ",
       "3-4 oz ",
       "3-4 oz "
    ]
 },
  {
    "FIELD1": 442,
    "drinkName": "rum screwdriver",
    "dateModified": "2017-09-08 16:59:32",
    "idDrink": 12091,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/pwl7v81504886372.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "light rum",
       "orange juice"
    ],
    "instructions": "Pour rum into a highball glass over ice cubes. Add orange juice, stir, and serve.",
    "measures": [
       "1 1/2 oz ",
       "5 oz "
    ]
 },
  {
    "FIELD1": 443,
    "drinkName": "rum sour",
    "dateModified": "2017-09-08 16:58:44",
    "idDrink": 12093,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/bylfi21504886323.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "light rum",
       "lemon juice",
       "sugar",
       "orange",
       "maraschino cherry"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1/2 tsp superfine ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 444,
    "drinkName": "rum toddy",
    "dateModified": "2017-09-08 16:58:06",
    "idDrink": 12097,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "rum",
       "powdered sugar",
       "lemon peel",
       "water"
    ],
    "instructions": "Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
    "measures": [
       "2 oz light or dark ",
       "2 tsp ",
       "1 twist of ",
       "2 tsp "
    ]
 },
  {
    "FIELD1": 445,
    "drinkName": "russian spring punch",
    "dateModified": "2017-09-02 18:31:28",
    "idDrink": 17214,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ctt20s1504373488.jpg",
    "glassType": "highball glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "vodka",
       "creme de cassis",
       "sugar syrup",
       "lemon juice"
    ],
    "instructions": "Pour the ingredients into an highball glass, top with Sparkling wine.",
    "measures": [
       "2.5 cl",
       "1.5 cl",
       "1 cl",
       "2.5 cl"
    ]
 },
  {
    "FIELD1": 446,
    "drinkName": "rusty nail",
    "dateModified": "2016-11-04 09:49:42",
    "idDrink": 12101,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "scotch",
       "drambuie",
       "lemon peel"
    ],
    "instructions": "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 447,
    "drinkName": "salty dog",
    "dateModified": "2017-09-08 18:03:36",
    "idDrink": 12107,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "grapefruit juice",
       "gin",
       "salt"
    ],
    "instructions": "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
    "measures": [
       "5 oz ",
       "1 1/2 oz ",
       "1/4 tsp "
    ]
 },
  {
    "FIELD1": 448,
    "drinkName": "san francisco",
    "dateModified": "2017-09-08 17:59:21",
    "idDrink": 15184,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "creme de banane",
       "grenadine",
       "orange juice"
    ],
    "instructions": "Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the \"creme\", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.",
    "measures": [
       "2 cl ",
       "2 cl "
    ]
 },
  {
    "FIELD1": 449,
    "drinkName": "sangria #1",
    "dateModified": "2015-09-03 04:01:20",
    "idDrink": 13020,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg",
    "glassType": "pitcher",
    "ingredients": [
       "red wine",
       "sugar",
       "orange juice",
       "lemon juice",
       "cloves",
       "cinnamon"
    ],
    "instructions": "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.",
    "measures": [
       "1 bottle ",
       "1/2 cup ",
       "1 cup ",
       "1 cup "
    ]
 },
  {
    "FIELD1": 450,
    "drinkName": "sangria - the world's best",
    "dateModified": "2016-07-19 11:31:04",
    "idDrink": 13026,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vysywu1468924264.jpg",
    "glassType": "pitcher",
    "ingredients": [
       "red wine",
       "sugar",
       "lemon",
       "orange",
       "apple",
       "brandy",
       "soda water"
    ],
    "instructions": "Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.",
    "measures": [
       "1 1/2 l ",
       "1 cup ",
       "1 large ",
       "1 large ",
       "1 large ",
       "3-4 oz plain "
    ]
 },
  {
    "FIELD1": 451,
    "drinkName": "sazerac",
    "dateModified": "2015-08-18 15:13:28",
    "idDrink": 12127,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "ricard",
       "sugar",
       "peychaud bitters",
       "water",
       "bourbon",
       "lemon peel"
    ],
    "instructions": "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.",
    "measures": [
       "1 tsp ",
       "1/2 tsp superfine ",
       "2 dashes ",
       "1 tsp ",
       "2 oz ",
       "1 twist of "
    ]
 },
  {
    "FIELD1": 452,
    "drinkName": "scooter",
    "dateModified": "2017-01-02 20:18:27",
    "idDrink": 12130,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "brandy",
       "amaretto",
       "light cream"
    ],
    "instructions": "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 453,
    "drinkName": "scotch cobbler",
    "dateModified": "2017-09-06 23:17:07",
    "idDrink": 12138,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "scotch",
       "brandy",
       "curacao",
       "orange",
       "mint"
    ],
    "instructions": "Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.",
    "measures": [
       "2 oz ",
       "4 dashes ",
       "4 dashes ",
       "1 slice ",
       "1 "
    ]
 },
  {
    "FIELD1": 454,
    "drinkName": "scotch sour",
    "dateModified": "2017-09-08 18:07:16",
    "idDrink": 12158,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "scotch",
       "lime",
       "powdered sugar",
       "lemon",
       "cherry"
    ],
    "instructions": "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.",
    "measures": [
       "1 1/2 oz ",
       "juice of 1/2 ",
       "1/2 tsp ",
       "1/2 slice ",
       "1 "
    ]
 },
  {
    "FIELD1": 455,
    "drinkName": "scottish highland liqueur",
    "dateModified": "2015-09-03 05:10:41",
    "idDrink": 12854,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/upqvvp1441253441.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "johnnie walker",
       "honey",
       "angelica root",
       "fennel seeds",
       "lemon peel"
    ],
    "instructions": "Combine all ingreds in aging container. Cover tightly and shake gently several times during the first 24 hrs. After 24 hrs, remove the lemon zest. Cover again and let stand in a cool, dark place for 2 weeks, shaking gently every other day. Strain through a wire sieve to remove the angelica root and fennel. Return to aging container, cover and let stand undisturbed in a cool dark place for 6 months. Siphon or pour clear liqueur into a sterile bottle. The cloudy dregs may be saved for cooking.",
    "measures": [
       "1 fifth ",
       "1 1/2 cup mild ",
       "2 tsp dried and chopped ",
       "1/4 tsp crushed ",
       "2 2 inch strips "
    ]
 },
  {
    "FIELD1": 456,
    "drinkName": "screaming orgasm",
    "dateModified": "2017-09-02 22:44:30",
    "idDrink": 13625,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/x894cs1504388670.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "vodka",
       "bailey's irish cream",
       "kahlua"
    ],
    "instructions": "Pour first vodka, then Bailey's, then Kahlua into a cocktail glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
    "measures": [
       "1 oz ",
       "1 1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 457,
    "drinkName": "screwdriver",
    "dateModified": "2017-09-02 12:36:47",
    "idDrink": 12162,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
    "glassType": "highball glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "vodka",
       "orange juice"
    ],
    "instructions": "Mix in a highball glass with ice. Garnish and serve.",
    "measures": [
       "2 oz "
    ]
 },
  {
    "FIELD1": 458,
    "drinkName": "sea breeze",
    "dateModified": "2017-09-02 17:59:22",
    "idDrink": 13377,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg",
    "glassType": "highball glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "vodka",
       "cranberry juice",
       "grapefruit juice"
    ],
    "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
    "measures": [
       "1 1/2 oz ",
       "4 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 459,
    "drinkName": "sex on the beach",
    "dateModified": "2016-07-21 10:12:45",
    "idDrink": 12754,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/twsvwr1469092365.jpg",
    "glassType": "highball glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "vodka",
       "peach schnapps",
       "cranberry juice",
       "grapefruit juice"
    ],
    "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
    "measures": [
       "1 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 460,
    "drinkName": "shanghai cocktail",
    "dateModified": "2016-11-10 23:31:18",
    "idDrink": 12186,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ttyrxr1478820678.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "light rum",
       "anisette",
       "grenadine",
       "lemon"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz jamaican ",
       "1 tsp ",
       "1/2 tsp ",
       "juice of 1/4 "
    ]
 },
  {
    "FIELD1": 461,
    "drinkName": "shark attack",
    "dateModified": "2017-09-07 15:07:37",
    "idDrink": 16273,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg",
    "glassType": "pitcher",
    "ingredients": [
       "lemonade",
       "water",
       "vodka"
    ],
    "instructions": "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
    "measures": [
       "1 can ",
       "3 cans ",
       "1 1/2 cup "
    ]
 },
  {
    "FIELD1": 462,
    "drinkName": "sherry eggnog",
    "dateModified": "2016-11-10 23:29:01",
    "idDrink": 12188,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "sherry",
       "powdered sugar",
       "egg",
       "milk",
       "nutmeg"
    ],
    "instructions": "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.",
    "measures": [
       "2 oz cream ",
       "1 tsp ",
       "1 whole "
    ]
 },
  {
    "FIELD1": 463,
    "drinkName": "sherry flip",
    "dateModified": "2016-11-10 23:27:08",
    "idDrink": 12190,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qrryvq1478820428.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "sherry",
       "light cream",
       "powdered sugar",
       "egg",
       "nutmeg"
    ],
    "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
    "measures": [
       "1 1/2 oz cream ",
       "2 tsp ",
       "1 tsp ",
       "1 whole "
    ]
 },
  {
    "FIELD1": 464,
    "drinkName": "shot-gun",
    "dateModified": "2017-08-24 09:33:03",
    "idDrink": 16985,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2j1m881503563583.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "jim beam",
       "jack daniels",
       "wild turkey"
    ],
    "instructions": "Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top.",
    "measures": [
       "1 part ",
       "1 part ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 465,
    "drinkName": "sidecar",
    "dateModified": "2015-08-18 15:07:32",
    "idDrink": 12196,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/stwxuq1439906852.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "cognac",
       "cointreau",
       "lemon juice"
    ],
    "instructions": "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
    "measures": [
       "2 oz ",
       "1/2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 466,
    "drinkName": "sidecar cocktail",
    "dateModified": "2017-09-07 22:40:28",
    "idDrink": 12198,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "brandy",
       "triple sec",
       "lemon"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "juice of 1/4 "
    ]
 },
  {
    "FIELD1": 467,
    "drinkName": "singapore sling",
    "dateModified": "2015-08-18 14:58:08",
    "idDrink": 12214,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tvtrrt1439906288.jpg",
    "glassType": "hurricane glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "cherry brandy",
       "grenadine",
       "gin",
       "sweet and sour",
       "carbonated water",
       "cherry"
    ],
    "instructions": "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into highball glass. Garnish with pineapple and cocktail cherry.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1 oz ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 468,
    "drinkName": "sloe gin cocktail",
    "dateModified": "2017-09-08 17:52:12",
    "idDrink": 12224,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/d7mo481504889531.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "sloe gin",
       "dry vermouth",
       "orange bitters"
    ],
    "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "2 oz ",
       "1/4 tsp ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 469,
    "drinkName": "smut",
    "dateModified": "2017-09-02 16:23:32",
    "idDrink": 17141,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
    "glassType": "beer mug",
    "ingredients": [
       "red wine",
       "peach schnapps",
       "pepsi cola",
       "orange juice"
    ],
    "instructions": "Throw it all together and serve real cold.",
    "measures": [
       "1/3 part ",
       "1 shot ",
       "1/3 part ",
       "1/3 part "
    ]
 },
  {
    "FIELD1": 470,
    "drinkName": "snake bite (uk)",
    "dateModified": "2015-09-03 03:52:14",
    "idDrink": 13389,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
    "glassType": "pint glass",
    "ingredients": [
       "lager",
       "cider"
    ],
    "instructions": "Pour ingredients into a pint glass. Drink. Fall over.",
    "measures": [
       "1/2 pint ",
       "1/2 pint sweet or dry "
    ]
 },
  {
    "FIELD1": 471,
    "drinkName": "snakebite and black",
    "dateModified": "2015-09-03 03:54:23",
    "idDrink": 15789,
    "type": "alcoholic",
    "category": "beer",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rssvwv1441248863.jpg",
    "glassType": "pint glass",
    "ingredients": [
       "lager",
       "cider",
       "blackcurrant squash"
    ],
    "instructions": "Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another.",
    "measures": [
       "1/2 pint ",
       "1/2 pint ",
       "a little bit of "
    ]
 },
  {
    "FIELD1": 472,
    "drinkName": "snowball",
    "dateModified": "2017-09-06 23:03:36",
    "idDrink": 14195,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/7ibfs61504735416.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "advocaat",
       "lemonade",
       "lemon",
       "ice"
    ],
    "instructions": "Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once.",
    "measures": [
       "1 1/2 oz ",
       "8-10 oz cold ",
       "1 slice ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 473,
    "drinkName": "sol y sombra",
    "dateModified": "2017-08-22 19:19:43",
    "idDrink": 12256,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg",
    "glassType": "brandy snifter",
    "ingredients": [
       "brandy",
       "anisette"
    ],
    "instructions": "Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is \"Sun and Shade\", and after sampling this drink, you'll understand why. Thanks, Kirby.)",
    "measures": [
       "1 1/2 oz ",
       "1 1/2 oz "
    ]
 },
  {
    "FIELD1": 474,
    "drinkName": "space odyssey",
    "dateModified": "2017-09-07 21:57:23",
    "idDrink": 15226,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "151 proof rum",
       "malibu rum",
       "pineapple juice",
       "orange juice",
       "grenadine",
       "cherries"
    ],
    "instructions": "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
    "measures": [
       "1 shot bacardi ",
       "1 shot ",
       "1 shot "
    ]
 },
  {
    "FIELD1": 475,
    "drinkName": "spanish chocolate",
    "dateModified": "2017-02-20 15:04:14",
    "idDrink": 12750,
    "type": "non alcoholic",
    "category": "cocoa",
    "picture": "http://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "milk",
       "chocolate",
       "cinnamon",
       "egg yolk"
    ],
    "instructions": "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.",
    "measures": [
       "2 cups ",
       "2 oz sweet ",
       "1/2 tsp ",
       "2 beaten "
    ]
 },
  {
    "FIELD1": 476,
    "drinkName": "spiced peach punch",
    "dateModified": "2016-07-19 11:32:11",
    "idDrink": 13032,
    "type": "non alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "peach nectar",
       "orange juice",
       "brown sugar",
       "cinnamon",
       "cloves",
       "lime juice"
    ],
    "instructions": "Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.",
    "measures": [
       "46 oz ",
       "20 oz ",
       "1/2 cup ",
       "3 3-inch ",
       "1/2 tsp ",
       "2 tblsp "
    ]
 },
  {
    "FIELD1": 477,
    "drinkName": "spiking coffee",
    "dateModified": "2017-02-20 14:52:55",
    "idDrink": 12780,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "coffee",
       "cinnamon"
    ],
    "instructions": "Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug.",
    "measures": [
       "\n"
    ]
 },
  {
    "FIELD1": 478,
    "drinkName": "spritz",
    "dateModified": "2017-09-02 18:34:25",
    "idDrink": 17215,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/j9evx11504373665.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "prosecco",
       "campari",
       "soda water"
    ],
    "instructions": "Build into glass over ice, garnish and serve.",
    "measures": [
       "6 cl",
       "4 cl",
       "splash"
    ]
 },
  {
    "FIELD1": 479,
    "drinkName": "stinger",
    "dateModified": "2017-09-02 12:40:33",
    "idDrink": 17193,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "brandy",
       "white creme de menthe"
    ],
    "instructions": "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 480,
    "drinkName": "stone sour",
    "dateModified": "2016-09-01 09:51:35",
    "idDrink": 12308,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vruvtp1472719895.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "apricot brandy",
       "orange juice",
       "sweet and sour"
    ],
    "instructions": "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 481,
    "drinkName": "strawberry daiquiri",
    "dateModified": "2017-09-06 23:15:36",
    "idDrink": 12316,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "strawberry schnapps",
       "light rum",
       "lime juice",
       "powdered sugar",
       "strawberries"
    ],
    "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
    "measures": [
       "1/2 oz ",
       "1 oz ",
       "1 oz ",
       "1 tsp ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 482,
    "drinkName": "strawberry lemonade",
    "dateModified": "2016-07-19 11:33:45",
    "idDrink": 13036,
    "type": "non alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "lemon",
       "sugar",
       "strawberries",
       "water"
    ],
    "instructions": "Throw everything into a blender and mix until fairly smooth. Serve over ice.",
    "measures": [
       "juice of 1 ",
       "1 tblsp ",
       "8-10 ripe ",
       "1 cup "
    ]
 },
  {
    "FIELD1": 483,
    "drinkName": "strawberry margarita",
    "dateModified": "2015-08-18 14:41:51",
    "idDrink": 12322,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "strawberry schnapps",
       "tequila",
       "triple sec",
       "lemon juice",
       "strawberries",
       "salt"
    ],
    "instructions": "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
    "measures": [
       "1/2 oz ",
       "1 oz ",
       "1/2 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 484,
    "drinkName": "strawberry shivers",
    "dateModified": "2017-02-20 15:10:04",
    "idDrink": 12722,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "strawberries",
       "honey",
       "water"
    ],
    "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    "measures": [
       "1 1/2 cup ",
       "4 tsp ",
       "1/2 cup "
    ]
 },
  {
    "FIELD1": 485,
    "drinkName": "sunny holiday punch",
    "dateModified": "2016-07-19 11:39:18",
    "idDrink": 13042,
    "type": "optional alcohol",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rywtwy1468924758.jpg",
    "glassType": "punch bowl",
    "ingredients": [
       "pineapple juice",
       "club soda",
       "orange juice",
       "lemon",
       "berries",
       "champagne"
    ],
    "instructions": "Combine all ingredients in a punch bowl.",
    "measures": [
       "46 oz chilled ",
       "28 oz ",
       "6 oz frozen ",
       "1 ",
       "2 cups ",
       "1 bottle "
    ]
 },
  {
    "FIELD1": 486,
    "drinkName": "surf city lifesaver",
    "dateModified": "2017-02-20 14:58:19",
    "idDrink": 12760,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2rzfer1487602699.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "ouzo",
       "bailey's irish cream",
       "gin",
       "grand marnier"
    ],
    "instructions": "Lots of ice and soda top up in tall glass with cherry and a grin.",
    "measures": [
       "1 part ",
       "1 part ",
       "2 parts ",
       "1/2 part "
    ]
 },
  {
    "FIELD1": 487,
    "drinkName": "swedish coffee",
    "dateModified": "2015-09-03 03:19:43",
    "idDrink": 15521,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ywtrvt1441246783.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "coffee",
       "aquavit",
       "sugar"
    ],
    "instructions": "Pour the coffee in an ordinary coffee cup. Add the aquavit. Add sugar by taste. Stir and have a nice evening (morning)",
    "measures": [
       "1 cup",
       "4 cl ",
       "by taste "
    ]
 },
  {
    "FIELD1": 488,
    "drinkName": "sweet bananas",
    "dateModified": "2017-02-20 15:09:05",
    "idDrink": 12724,
    "type": "non alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "milk",
       "banana",
       "honey"
    ],
    "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    "measures": [
       "2 cups ",
       "1 ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 489,
    "drinkName": "sweet sangria",
    "dateModified": "2016-07-19 11:30:28",
    "idDrink": 13024,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
    "glassType": "pitcher",
    "ingredients": [
       "red wine",
       "sugar",
       "water",
       "apple",
       "orange",
       "lime",
       "lemon",
       "fresca"
    ],
    "instructions": "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.",
    "measures": [
       "2 bottles ",
       "1 cup ",
       "2 cups hot ",
       "1 cup ",
       "wedges\n",
       "wedges\n"
    ]
 },
  {
    "FIELD1": 490,
    "drinkName": "sweet tooth",
    "dateModified": "2017-08-24 09:37:01",
    "idDrink": 16990,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/j6rq6h1503563821.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "godiva liqueur",
       "milk"
    ],
    "instructions": "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like.",
    "measures": [
       "2 shots "
    ]
 },
  {
    "FIELD1": 491,
    "drinkName": "talos coffee",
    "dateModified": "2015-09-03 03:15:18",
    "idDrink": 14860,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rswqpy1441246518.jpg",
    "glassType": "brandy snifter",
    "ingredients": [
       "grand marnier",
       "coffee"
    ],
    "instructions": "Add your GM and then add your coffee.",
    "measures": [
       "3 parts ",
       "1 part "
    ]
 },
  {
    "FIELD1": 492,
    "drinkName": "tennesee mud",
    "dateModified": "2015-09-03 03:02:50",
    "idDrink": 15515,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/txruqv1441245770.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "coffee",
       "jack daniels",
       "amaretto",
       "whipped cream"
    ],
    "instructions": "Mix Coffee, Jack Daniels and Amaretto. Add Cream on top.",
    "measures": [
       "8 oz ",
       "4 oz ",
       "4 oz "
    ]
 },
  {
    "FIELD1": 493,
    "drinkName": "tequila fizz",
    "dateModified": "2017-09-08 17:53:57",
    "idDrink": 12362,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "tequila",
       "lemon juice",
       "grenadine",
       "egg white",
       "ginger ale"
    ],
    "instructions": "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
    "measures": [
       "2 oz ",
       "1 tblsp ",
       "3/4 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 494,
    "drinkName": "tequila sour",
    "dateModified": "2017-09-07 22:43:21",
    "idDrink": 12370,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "tequila",
       "lemon",
       "powdered sugar",
       "lemon",
       "cherry"
    ],
    "instructions": "Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "1/2 slice ",
       "1 "
    ]
 },
  {
    "FIELD1": 495,
    "drinkName": "tequila sunrise",
    "dateModified": "2016-12-04 19:18:23",
    "idDrink": 13621,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
    "glassType": "highball glass",
    "strIBA": "Contemporary Classics",
    "ingredients": [
       "tequila",
       "orange juice",
       "grenadine"
    ],
    "instructions": "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
    "measures": [
       "2 measures "
    ]
 },
  {
    "FIELD1": 496,
    "drinkName": "tequila surprise",
    "dateModified": "2017-09-06 23:06:21",
    "idDrink": 14602,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/8189p51504735581.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "tequila",
       "tabasco sauce"
    ],
    "instructions": "Fill shot glass with Tequila. Add drops of Tobasco sauce.",
    "measures": [
       "full glass ",
       "about 8 drops "
    ]
 },
  {
    "FIELD1": 497,
    "drinkName": "texas rattlesnake",
    "dateModified": "2017-09-08 17:55:50",
    "idDrink": 15178,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rtohqp1504889750.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yukon jack",
       "cherry brandy",
       "southern comfort",
       "sweet and sour"
    ],
    "instructions": "Mix all ingredients and Shake well. Sweet at first, with a BITE at the end...",
    "measures": [
       "1 part ",
       "1/2 part ",
       "1 part ",
       "1 splash "
    ]
 },
  {
    "FIELD1": 498,
    "drinkName": "texas sling",
    "dateModified": "2017-09-08 18:02:39",
    "idDrink": 15639,
    "type": "alcoholic",
    "category": "milk / float / shake",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ypl13s1504890158.jpg",
    "glassType": "wine glass",
    "ingredients": [
       "kahlua",
       "irish cream",
       "amaretto",
       "151 proof rum",
       "cream"
    ],
    "instructions": "Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.",
    "measures": [
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz ",
       "1/2 oz bacardi ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 499,
    "drinkName": "thai coffee",
    "dateModified": "2015-09-03 03:23:45",
    "idDrink": 12782,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "coffee",
       "coriander",
       "cardamom",
       "sugar",
       "whipping cream",
       "ice"
    ],
    "instructions": "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away.",
    "measures": [
       "6 tblsp ground",
       "1/4 tsp ",
       "4-5 whole green "
    ]
 },
  {
    "FIELD1": 500,
    "drinkName": "thai iced coffee",
    "dateModified": "2015-09-03 03:00:50",
    "idDrink": 12784,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "coffee",
       "sugar",
       "cream",
       "cardamom"
    ],
    "instructions": "Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in highball glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.",
    "measures": [
       "black",
       "pods\n"
    ]
 },
  {
    "FIELD1": 501,
    "drinkName": "thai iced tea",
    "dateModified": "2015-09-03 02:59:28",
    "idDrink": 12786,
    "type": "non alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "tea",
       "water",
       "condensed milk",
       "ice",
       "mint"
    ],
    "instructions": "Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings.",
    "measures": [
       "1/4 cup thai ",
       "1/2 cup boiling ",
       "2 tsp sweetened ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 502,
    "drinkName": "the evil blue thing",
    "dateModified": "2017-09-07 15:04:19",
    "idDrink": 16271,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "creme de cacao",
       "blue curacao",
       "light rum"
    ],
    "instructions": "Pour ingredients into glass, and drop in a blue whale! The blue whale isn't really necessary, but it makes the drink more \"fun\".",
    "measures": [
       "1 1/2 oz ",
       "1 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 503,
    "drinkName": "thriller",
    "dateModified": "2016-04-28 19:21:54",
    "idDrink": 12388,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "scotch",
       "wine",
       "orange juice"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "measures": [
       "1 1/2 oz ",
       "1 oz green ginger ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 504,
    "drinkName": "tia-maria",
    "dateModified": "2017-09-02 16:44:58",
    "idDrink": 12856,
    "type": "alcoholic",
    "category": "homemade liqueur",
    "picture": "http://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "water",
       "brown sugar",
       "coffee",
       "rum",
       "vanilla extract"
    ],
    "instructions": "Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.",
    "measures": [
       "1 cup ",
       "3/4-1 cup ",
       "4 tsp ",
       "1 cup ",
       "4 tsp "
    ]
 },
  {
    "FIELD1": 505,
    "drinkName": "tom collins",
    "dateModified": "2015-08-18 15:21:22",
    "idDrink": 12402,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qystvv1439907682.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "gin",
       "lemon juice",
       "sugar",
       "club soda",
       "maraschino cherry",
       "orange"
    ],
    "instructions": "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.",
    "measures": [
       "2 oz ",
       "1 oz ",
       "1 tsp superfine ",
       "3 oz ",
       "1 ",
       "1 "
    ]
 },
  {
    "FIELD1": 506,
    "drinkName": "tomato tang",
    "dateModified": "2017-02-20 15:07:58",
    "idDrink": 12726,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "tomato juice",
       "lemon juice",
       "celery salt"
    ],
    "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    "measures": [
       "2 cups ",
       "1-2 tblsp ",
       "1 dash "
    ]
 },
  {
    "FIELD1": 507,
    "drinkName": "tommy's margarita",
    "dateModified": "2017-09-02 18:37:54",
    "idDrink": 17216,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "tequila",
       "lime juice",
       "agave syrup"
    ],
    "instructions": "Shake and strain into a chilled cocktail glass.",
    "measures": [
       "4.5 cl",
       "1.5 cl",
       "2 spoons"
    ]
 },
  {
    "FIELD1": 508,
    "drinkName": "turf cocktail",
    "dateModified": "2015-09-06 16:46:07",
    "idDrink": 12418,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "dry vermouth",
       "gin",
       "anis",
       "bitters",
       "orange peel"
    ],
    "instructions": "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
    "measures": [
       "1 oz ",
       "1 oz ",
       "1/4 tsp ",
       "2 dashes ",
       "twist of "
    ]
 },
  {
    "FIELD1": 509,
    "drinkName": "turkeyball",
    "dateModified": "2015-09-06 16:44:53",
    "idDrink": 15006,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rxurpr1441554292.jpg",
    "glassType": "shot glass",
    "ingredients": [
       "wild turkey",
       "amaretto",
       "pineapple juice"
    ],
    "instructions": "Shake with ice and strain into a shot glass.",
    "measures": [
       "1 oz ",
       "3/4 oz ",
       "1 splash "
    ]
 },
  {
    "FIELD1": 510,
    "drinkName": "tuxedo cocktail",
    "dateModified": "2017-09-02 12:42:31",
    "idDrink": 12420,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/4u0nbl1504352551.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "dry vermouth",
       "gin",
       "maraschino liqueur",
       "anis",
       "orange bitters",
       "cherry"
    ],
    "instructions": "Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and a twist of lemon zest.",
    "measures": [
       "1 1/2 oz ",
       "1 1/2 oz ",
       "1/4 tsp ",
       "1/4 tsp ",
       "2 dashes ",
       "1 "
    ]
 },
  {
    "FIELD1": 511,
    "drinkName": "valencia cocktail",
    "dateModified": "2017-04-23 20:27:20",
    "idDrink": 12434,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/9myuc11492975640.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "apricot brandy",
       "orange juice",
       "orange bitters"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1 tblsp ",
       "2 dashes "
    ]
 },
  {
    "FIELD1": 512,
    "drinkName": "vampiro",
    "dateModified": "2017-09-02 18:44:06",
    "idDrink": 17217,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "tequila",
       "tomato juice",
       "orange juice",
       "lime juice",
       "sugar syrup",
       "salt"
    ],
    "instructions": "Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first \"rim\" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.",
    "measures": [
       "6 cl",
       "3 cl",
       "3 cl",
       "1.5 cl",
       "1 dash",
       "1 pinch"
    ]
 },
  {
    "FIELD1": 513,
    "drinkName": "van vleet",
    "dateModified": "2017-04-23 20:29:31",
    "idDrink": 12436,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/fgq2bl1492975771.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "light rum",
       "maple syrup",
       "lemon juice"
    ],
    "instructions": "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
    "measures": [
       "3 oz ",
       "1 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 514,
    "drinkName": "vermouth cassis",
    "dateModified": "2015-09-06 16:51:14",
    "idDrink": 12442,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/tswpxx1441554674.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "dry vermouth",
       "creme de cassis",
       "carbonated water"
    ],
    "instructions": "Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz "
    ]
 },
  {
    "FIELD1": 515,
    "drinkName": "vesper",
    "dateModified": "2017-09-02 18:48:34",
    "idDrink": 17218,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg",
    "glassType": "cocktail glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "gin",
       "vodka",
       "lillet blanc"
    ],
    "instructions": "Shake over ice until well chilled, then strain into a deep goblet and garnish with a thin slice of lemon peel.",
    "measures": [
       "6 cl",
       "1.5 cl",
       "0.75 cl"
    ]
 },
  {
    "FIELD1": 516,
    "drinkName": "vesuvio",
    "dateModified": "2017-04-23 20:36:43",
    "idDrink": 12444,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/26cq601492976203.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "light rum",
       "sweet vermouth",
       "lemon",
       "powdered sugar",
       "egg white"
    ],
    "instructions": "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
    "measures": [
       "1 oz ",
       "1/2 oz ",
       "juice of 1/2 ",
       "1 tsp ",
       "1 "
    ]
 },
  {
    "FIELD1": 517,
    "drinkName": "veteran",
    "dateModified": "2017-04-23 20:37:36",
    "idDrink": 12446,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/iwml9t1492976255.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "dark rum",
       "cherry brandy"
    ],
    "instructions": "Pour the rum and cherry brandy into an old-fashioned glass almost filled with ice cubes. Stir well.",
    "measures": [
       "2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 518,
    "drinkName": "victor",
    "dateModified": "2017-04-23 20:40:16",
    "idDrink": 12450,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "gin",
       "sweet vermouth",
       "brandy"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "1 1/2 oz ",
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 519,
    "drinkName": "victory collins",
    "dateModified": "2017-04-23 20:43:39",
    "idDrink": 12452,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "lemon juice",
       "grape juice",
       "powdered sugar",
       "orange"
    ],
    "instructions": "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.",
    "measures": [
       "1 1/2 oz ",
       "3 oz ",
       "3 oz unsweetened ",
       "1 tsp ",
       "1 slice "
    ]
 },
  {
    "FIELD1": 520,
    "drinkName": "vodka and tonic",
    "dateModified": "2017-09-07 22:41:40",
    "idDrink": 12460,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "vodka",
       "tonic water"
    ],
    "instructions": "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
    "measures": [
       "2 oz "
    ]
 },
  {
    "FIELD1": 521,
    "drinkName": "vodka fizz",
    "dateModified": "2015-09-03 05:24:03",
    "idDrink": 16967,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg",
    "glassType": "white wine glass",
    "ingredients": [
       "vodka",
       "half-and-half",
       "limeade",
       "ice",
       "nutmeg"
    ],
    "instructions": "Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
    "measures": [
       "2 oz ",
       "2 oz ",
       "2 oz "
    ]
 },
  {
    "FIELD1": 522,
    "drinkName": "vodka martini",
    "dateModified": "2015-08-18 15:02:08",
    "idDrink": 14167,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "vodka",
       "dry vermouth",
       "olive"
    ],
    "instructions": "Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.",
    "measures": [
       "1 1/2 oz ",
       "3/4 oz ",
       "1 "
    ]
 },
  {
    "FIELD1": 523,
    "drinkName": "vodka russian",
    "dateModified": "2016-02-03 15:58:49",
    "idDrink": 15403,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/rpttur1454515129.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vodka",
       "schweppes russchian"
    ],
    "instructions": "Mix it as a ordinary drink .",
    "measures": [
       "2 oz "
    ]
 },
  {
    "FIELD1": 524,
    "drinkName": "waikiki beachcomber",
    "dateModified": "2015-09-02 16:43:03",
    "idDrink": 12474,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ysuqus1441208583.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "triple sec",
       "gin",
       "pineapple juice"
    ],
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "measures": [
       "3/4 oz ",
       "3/4 oz ",
       "1 tblsp "
    ]
 },
  {
    "FIELD1": 525,
    "drinkName": "whiskey sour",
    "dateModified": "2017-09-02 12:45:25",
    "idDrink": 12516,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/o56h041504352725.jpg",
    "glassType": "old-fashioned glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "blended whiskey",
       "lemon",
       "powdered sugar",
       "cherry",
       "lemon"
    ],
    "instructions": "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
    "measures": [
       "2 oz ",
       "juice of 1/2 ",
       "1/2 tsp ",
       "1 ",
       "1/2 slice "
    ]
 },
  {
    "FIELD1": 526,
    "drinkName": "whisky mac",
    "dateModified": "2016-04-28 19:24:18",
    "idDrink": 12518,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "scotch",
       "wine"
    ],
    "instructions": "Pour both of the ingredients into a wine goblet with no ice.",
    "measures": [
       "1 1/2 oz ",
       "1 oz green ginger "
    ]
 },
  {
    "FIELD1": 527,
    "drinkName": "white lady",
    "dateModified": "2017-09-02 12:49:52",
    "idDrink": 17194,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/jofsaz1504352991.jpg",
    "glassType": "cocktail glass",
    "strIBA": "Unforgettables",
    "ingredients": [
       "gin",
       "triple sec",
       "lemon juice"
    ],
    "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
    "measures": [
       "4cl",
       "3cl",
       "2cl"
    ]
 },
  {
    "FIELD1": 528,
    "drinkName": "white russian",
    "dateModified": "2016-08-28 18:35:32",
    "idDrink": 12528,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "vodka",
       "coffee liqueur",
       "light cream"
    ],
    "instructions": "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
    "measures": [
       "2 oz ",
       "1 oz "
    ]
 },
  {
    "FIELD1": 529,
    "drinkName": "whitecap margarita",
    "dateModified": "2015-09-02 17:00:22",
    "idDrink": 16158,
    "type": "alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
    "glassType": "margarita/coupette glass",
    "ingredients": [
       "ice",
       "tequila",
       "cream of coconut",
       "lime juice"
    ],
    "instructions": "Place all ingredients in a blender and blend until smooth. This makes one drink.",
    "measures": [
       "1 cup ",
       "2 oz ",
       "1/4 cup ",
       "3 tblsp fresh "
    ]
 },
  {
    "FIELD1": 530,
    "drinkName": "wine cooler",
    "dateModified": "2016-09-08 15:16:50",
    "idDrink": 13056,
    "type": "optional alcohol",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/yutxtv1473344210.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "red wine",
       "lemon-lime soda",
       "ice"
    ],
    "instructions": "Mix wine and soft drink. Pour into glass. Add ice.",
    "measures": [
       "2 oz white or ",
       "5 oz ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 531,
    "drinkName": "wine punch",
    "dateModified": "2016-09-08 15:18:30",
    "idDrink": 13058,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/txustu1473344310.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "red wine",
       "lemon",
       "orange juice",
       "orange",
       "pineapple juice"
    ],
    "instructions": "Combine all of the ingredients and pour over a block of ice.",
    "measures": [
       "1 bottle ",
       "2 ",
       "1 cup ",
       "3 ",
       "1 cup "
    ]
 },
  {
    "FIELD1": 532,
    "drinkName": "yellow bird",
    "dateModified": "2017-09-02 18:53:31",
    "idDrink": 17219,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg",
    "glassType": "cocktail glass",
    "strIBA": "New Era Drinks",
    "ingredients": [
       "white rum",
       "galliano",
       "triple sec",
       "lime juice"
    ],
    "instructions": "Shake and strain into a chilled cocktail glass",
    "measures": [
       "3 cl",
       "1.5 cl",
       "1.5 cl",
       "1.5 cl"
    ]
 },
  {
    "FIELD1": 533,
    "drinkName": "yoghurt cooler",
    "dateModified": "2015-09-03 05:27:46",
    "idDrink": 12728,
    "type": "non alcoholic",
    "category": "other/unknown",
    "picture": "http://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "yoghurt",
       "fruit",
       "ice"
    ],
    "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed.",
    "measures": [
       "1 cup ",
       "1 cup "
    ]
 },
  {
    "FIELD1": 534,
    "drinkName": "zambeer",
    "dateModified": "2017-01-28 16:06:18",
    "idDrink": 15933,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/bje5401485619578.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "sambuca",
       "root beer",
       "ice"
    ],
    "instructions": "Mix sambuca with rootbeer and stir. Add ice",
    "measures": [
       "1 1/2 oz ",
       "add 10 oz ",
       "cubes\n"
    ]
 },
  {
    "FIELD1": 535,
    "drinkName": "zenmeister",
    "dateModified": "2016-11-15 11:31:02",
    "idDrink": 15254,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/qyuvsu1479209462.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "jägermeister",
       "root beer"
    ],
    "instructions": "Mix together and enjoy",
    "measures": [
       "1/2 oz ",
       "1/2 oz "
    ]
 },
  {
    "FIELD1": 536,
    "drinkName": "ziemes martini apfelsaft",
    "dateModified": "2017-01-28 16:08:07",
    "idDrink": 14157,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/xnzr2p1485619687.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "vermouth",
       "apple juice"
    ],
    "instructions": "Serve without ice. At least the juice shold have room temperature.",
    "measures": [
       "4 cl ",
       "16 cl "
    ]
 },
  {
    "FIELD1": 537,
    "drinkName": "zima blaster",
    "dateModified": "2017-01-28 16:09:57",
    "idDrink": 17027,
    "type": "alcoholic",
    "category": "ordinary drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/1wifuv1485619797.jpg",
    "glassType": "hurricane glass",
    "ingredients": [
       "zima",
       "chambord raspberry liqueur"
    ],
    "instructions": "Fill glass with ice. Pour in Chambord, then fill with Zima. Mix and enjoy.",
    "measures": [
       "12 oz ",
       "3 oz "
    ]
 },
  {
    "FIELD1": 538,
    "drinkName": "zimadori zinger",
    "dateModified": "2017-01-28 16:12:00",
    "idDrink": 15801,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/bw8gzx1485619920.jpg",
    "glassType": "collins glass",
    "ingredients": [
       "midori melon liqueur",
       "zima"
    ],
    "instructions": "Pour Zima in a collins glass over ice and then pour the shot of Midori. Don't stir. Garnish with a cherry.",
    "measures": [
       "1.5 oz ",
       "12 oz "
    ]
 },
  {
    "FIELD1": 539,
    "drinkName": "zinger",
    "dateModified": "2017-01-28 16:13:34",
    "idDrink": 14888,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg",
    "glassType": "highball glass",
    "ingredients": [
       "peachtree schnapps",
       "surge"
    ],
    "instructions": "Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.",
    "measures": [
       "4 shots ",
       "4 shots "
    ]
 },
  {
    "FIELD1": 540,
    "drinkName": "zipperhead",
    "dateModified": "2017-01-28 16:17:15",
    "idDrink": 16942,
    "type": "alcoholic",
    "category": "shot",
    "picture": "http://www.thecocktaildb.com/images/media/drink/r2qzhu1485620235.jpg",
    "glassType": "whiskey sour glass",
    "ingredients": [
       "chambord raspberry liqueur",
       "vodka",
       "soda water"
    ],
    "instructions": "Fill glass with rocks, add straw before putting in liquor. Then add the ingredients in order, trying to keep layered as much as possible (i.e. Chambord on bottom, then Vodka, Then soda on top).",
    "measures": [
       "1 shot ",
       "1 shot ",
       "fill with "
    ]
 },
  {
    "FIELD1": 541,
    "drinkName": "zippy's revenge",
    "dateModified": "2017-01-28 16:18:33",
    "idDrink": 14065,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/1sqm7n1485620312.jpg",
    "glassType": "old-fashioned glass",
    "ingredients": [
       "amaretto",
       "rum",
       "kool-aid"
    ],
    "instructions": "Mix Kool-Aid to taste then add Rum and ammaretto. shake well to disolve the sugar in the Kool-Aid... serve cold",
    "measures": [
       "2 oz ",
       "2 oz ",
       "4 oz grape "
    ]
 },
  {
    "FIELD1": 542,
    "drinkName": "zizi coin-coin",
    "dateModified": "2017-01-28 16:25:52",
    "idDrink": 14594,
    "type": "alcoholic",
    "category": "punch / party drink",
    "picture": "http://www.thecocktaildb.com/images/media/drink/0fbo2t1485620752.jpg",
    "glassType": "margarita/coupette glass",
    "ingredients": [
       "cointreau",
       "lemon juice",
       "ice",
       "lemon"
    ],
    "instructions": "Pour 5cl of Cointreau on ice, add 2cl of fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass.",
    "measures": [
       "5 cl ",
       "2 cl ",
       "cubes\n",
       "or lime\n"
    ]
 },
  {
    "FIELD1": 543,
    "drinkName": "zoksel",
    "dateModified": "2017-01-28 16:28:50",
    "idDrink": 15691,
    "type": "alcoholic",
    "category": "soft drink / soda",
    "picture": "http://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg",
    "glassType": "beer pilsner",
    "ingredients": [
       "beer",
       "root beer",
       "lemonade",
       "coca-cola",
       "7-up",
       "creme de cassis",
       "lemon"
    ],
    "instructions": "No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.",
    "measures": [
       "\n",
       "slice\n"
    ]
 },
  {
    "FIELD1": 544,
    "drinkName": "zorbatini",
    "dateModified": "2017-01-28 16:32:35",
    "idDrink": 16963,
    "type": "alcoholic",
    "category": "cocktail",
    "picture": "http://www.thecocktaildb.com/images/media/drink/wtkqgb1485621155.jpg",
    "glassType": "cocktail glass",
    "ingredients": [
       "vodka",
       "ouzo"
    ],
    "instructions": "Prepare like a Martini. Garnish with a green olive.",
    "measures": [
       "1 1/4 oz stoli ",
       "1/4 oz "
    ]
 },
  {
    "FIELD1": 545,
    "drinkName": "zorro",
    "dateModified": "2017-01-28 16:34:43",
    "idDrink": 15328,
    "type": "alcoholic",
    "category": "coffee / tea",
    "picture": "http://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
    "glassType": "coffee mug",
    "ingredients": [
       "sambuca",
       "bailey's irish cream",
       "white creme de menthe"
    ],
    "instructions": "add all and pour black coffee and add whipped cream on top.",
    "measures": [
       "2 cl ",
       "2 cl ",
       "2 cl "
    ]
 }
]

const drinkSeeds = DRINKS.map( drink => {
  return {
    drinkName: drink["drinkName"],
    idDrink: drink["idDrink"],
    type: drink["type"],
    category: drink["category"],
    picture: drink["picture"],
    glassType: drink["glassType"],
    ingredients: drink["ingredients"].map((ingredient, i) => ({
      measure: drink["measures"][i],
      ingredient
    })),
    instructions: drink["instructions"],
  }
})

Drink.insertMany(DRINKS, (err, drinks) => {
	if (err) console.log(err)
	console.log(`⭐️ Inserted ${DRINKS.length} drinks ⭐️`)
	process.exit()
=======
require('dotenv').config();
const mongoose = require('mongoose');
const Drink = require('../models/drink');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
console.log("THIS IS THE URI",process.env.MONGODB_URI)
Drink.deleteMany({}, (err) => err ? console.log(err) : 'Collection removed')

let DRINKS = [
 {
   "FIELD1": 0,
   "drinkName": "'57 chevy with a white license plate",
   "dateModified": "2016-07-18 22:49:04",
   "idDrink": 14029,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "creme de cacao",
      "vodka"
   ],
   "instructions": "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
   "measures": [
      "1 oz white ",
      "1 oz "
   ]
},
 {
   "FIELD1": 1,
   "drinkName": "1-900-fuk-meup",
   "dateModified": "2016-07-18 22:27:04",
   "idDrink": 15395,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "absolut kurant",
      "grand marnier",
      "chambord raspberry liqueur",
      "midori melon liqueur",
      "malibu rum",
      "amaretto",
      "cranberry juice",
      "pineapple juice"
   ],
   "instructions": "Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.",
   "measures": [
      "1/2 oz ",
      "1/4 oz ",
      "1/4 oz ",
      "1/4 oz ",
      "1/4 oz ",
      "1/4 oz ",
      "1/2 oz ",
      "1/4 oz "
   ]
},
 {
   "FIELD1": 2,
   "drinkName": "110 in the shade",
   "dateModified": "2016-02-03 14:51:57",
   "idDrink": 15423,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
   "glassType": "beer glass",
   "ingredients": [
      "lager",
      "tequila"
   ],
   "instructions": "Drop shooter in glass. Fill with beer",
   "measures": [
      "16 oz ",
      "1.5 oz "
   ]
},
 {
   "FIELD1": 3,
   "drinkName": "151 florida bushwacker",
   "dateModified": "2016-07-18 22:28:43",
   "idDrink": 14588,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
   "glassType": "beer mug",
   "ingredients": [
      "malibu rum",
      "light rum",
      "151 proof rum",
      "dark creme de cacao",
      "cointreau",
      "milk",
      "coconut liqueur",
      "vanilla ice-cream"
   ],
   "instructions": "Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz bacardi ",
      "1 oz ",
      "1 oz ",
      "3 oz ",
      "1 oz ",
      "1 cup "
   ]
},
 {
   "FIELD1": 4,
   "drinkName": "155 belmont",
   "dateModified": "2016-10-05 12:36:28",
   "idDrink": 15346,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
   "glassType": "white wine glass",
   "ingredients": [
      "dark rum",
      "light rum",
      "vodka",
      "orange juice"
   ],
   "instructions": "Blend with ice. Serve in a wine glass. Garnish with carrot.",
   "measures": [
      "1 shot ",
      "2 shots ",
      "1 shot ",
      "1 shot "
   ]
},
 {
   "FIELD1": 5,
   "drinkName": "24k nightmare",
   "dateModified": "2016-07-18 22:31:38",
   "idDrink": 17060,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "goldschlager",
      "jägermeister",
      "rumple minze",
      "151 proof rum"
   ],
   "instructions": "Add over ice,shake and pour.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz bacardi "
   ]
},
 {
   "FIELD1": 6,
   "drinkName": "252",
   "dateModified": "2016-07-18 22:32:42",
   "idDrink": 15288,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "151 proof rum",
      "wild turkey"
   ],
   "instructions": "Add both ingredients to shot glass, shoot, and get drunk quick",
   "measures": [
      "1/2 shot bacardi ",
      "1/2 shot "
   ]
},
 {
   "FIELD1": 7,
   "drinkName": "3 wise men",
   "dateModified": "2016-07-18 22:34:37",
   "idDrink": 13899,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "jack daniels",
      "johnnie walker",
      "jim beam"
   ],
   "instructions": "put them them in a glass... and slam it to tha head.",
   "measures": [
      "1/3 oz ",
      "1/3 oz ",
      "1/3 oz "
   ]
},
 {
   "FIELD1": 8,
   "drinkName": "3-mile long island iced tea",
   "dateModified": "2016-08-31 19:42:52",
   "idDrink": 15300,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "gin",
      "light rum",
      "tequila",
      "triple sec",
      "vodka",
      "coca-cola",
      "sweet and sour",
      "bitters",
      "lemon"
   ],
   "instructions": "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1-2 dash ",
      "1 wedge "
   ]
},
 {
   "FIELD1": 9,
   "drinkName": "410 gone",
   "dateModified": "2016-08-31 19:43:46",
   "idDrink": 13581,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "peach vodka",
      "coca-cola"
   ],
   "measures": [
      "2-3 oz"
   ]
},
 {
   "FIELD1": 10,
   "drinkName": "50/50",
   "dateModified": "2016-04-29 09:41:56",
   "idDrink": 14598,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vanilla vodka",
      "grand marnier",
      "orange juice"
   ],
   "instructions": "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
   "measures": [
      "2 1/2 oz ",
      "1 splash ",
      "fill with "
   ]
},
 {
   "FIELD1": 11,
   "drinkName": "501 blue",
   "dateModified": "2016-04-28 19:11:37",
   "idDrink": 17105,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "blue curacao",
      "blueberry schnapps",
      "vodka",
      "sour mix",
      "7-up"
   ],
   "instructions": "Mix equal amounts into a glass with ice.",
   "measures": [
      "\n"
   ]
},
 {
   "FIELD1": 12,
   "drinkName": "69 special",
   "dateModified": "2016-08-31 19:44:55",
   "idDrink": 13940,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "gin",
      "7-up",
      "lemon juice"
   ],
   "instructions": "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.",
   "measures": [
      "2 oz dry ",
      "4 oz ",
      "0.75 oz "
   ]
},
 {
   "FIELD1": 13,
   "drinkName": "747",
   "dateModified": "2016-08-31 19:28:26",
   "idDrink": 14229,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "kahlua",
      "bailey's irish cream",
      "frangelico"
   ],
   "instructions": "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
   "measures": [
      "1/3 part ",
      "1/3 part ",
      "1/3 part "
   ]
},
 {
   "FIELD1": 14,
   "drinkName": "9 1/2 weeks",
   "dateModified": "2016-08-31 19:48:22",
   "idDrink": 16108,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "absolut citron",
      "orange curacao",
      "strawberry liqueur",
      "orange juice"
   ],
   "instructions": "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "1 splash ",
      "1 oz "
   ]
},
 {
   "FIELD1": 15,
   "drinkName": "a day at the beach",
   "dateModified": "2016-02-03 15:47:54",
   "idDrink": 15200,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/trptts1454514474.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "coconut rum",
      "amaretto",
      "orange juice",
      "grenadine"
   ],
   "instructions": "Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a highball glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "4 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 16,
   "drinkName": "a furlong too late",
   "dateModified": "2016-08-31 19:46:06",
   "idDrink": 11000,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "light rum",
      "ginger beer",
      "lemon peel"
   ],
   "instructions": "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
   "measures": [
      "2 oz ",
      "4 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 17,
   "drinkName": "a gilligan's island",
   "dateModified": "2016-04-28 19:12:56",
   "idDrink": 16943,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "peach schnapps",
      "orange juice",
      "cranberry juice"
   ],
   "instructions": "Shaken, not stirred!",
   "measures": [
      "1 oz ",
      "1 oz ",
      "3 oz ",
      "3 oz "
   ]
},
 {
   "FIELD1": 18,
   "drinkName": "a night in old mandalay",
   "dateModified": "2016-04-29 09:43:00",
   "idDrink": 11001,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vyrvxt1461919380.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "light rum",
      "añejo rum",
      "orange juice",
      "lemon juice",
      "ginger ale",
      "lemon peel"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the light rum, añejo rum, orange juice, and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the ginger ale. Garnish with the lemon twist.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1/2 oz ",
      "3 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 19,
   "drinkName": "a piece of ass",
   "dateModified": "2016-09-01 09:48:57",
   "idDrink": 16405,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "amaretto",
      "southern comfort",
      "ice",
      "sour mix"
   ],
   "instructions": "Put ice in glass. Pour in shots. Fill with Sour Mix.",
   "measures": [
      "1 shot ",
      "1 shot ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 20,
   "drinkName": "a splash of nash",
   "dateModified": "2016-08-31 19:30:01",
   "idDrink": 14564,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rsvtrr1472668201.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "cranberry juice",
      "soda water",
      "midori melon liqueur",
      "creme de banane"
   ],
   "instructions": "Drop shot glass with banana & melon liquers into a 9 oz hi- ball glass containing soda water and cranberry juice. Drink in one shot.",
   "measures": [
      "2 oz ",
      "2 oz ",
      "0.5 oz ",
      "0.5 oz "
   ]
},
 {
   "FIELD1": 21,
   "drinkName": "a true amaretto sour",
   "dateModified": "2016-08-31 19:49:32",
   "idDrink": 17005,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "amaretto",
      "lemon",
      "ice",
      "maraschino cherry"
   ],
   "instructions": "Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good \"frosted\" rim. Shake a jigger of Amaretto with the juice of 1/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.",
   "measures": [
      "1 jigger ",
      "juice of 1/2 "
   ]
},
 {
   "FIELD1": 22,
   "drinkName": "a midsummernight dream",
   "dateModified": "2016-04-28 19:14:52",
   "idDrink": 15675,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "kirschwasser",
      "strawberry liqueur",
      "strawberries",
      "schweppes russchian"
   ],
   "instructions": "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1 tsp ",
      "5 "
   ]
},
 {
   "FIELD1": 23,
   "drinkName": "a. j.",
   "dateModified": "2016-09-02 11:16:58",
   "idDrink": 11002,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "applejack",
      "grapefruit juice"
   ],
   "instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 24,
   "drinkName": "a.d.m. (after dinner mint)",
   "dateModified": "2016-08-31 19:53:20",
   "idDrink": 14560,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg",
   "glassType": "irish coffee cup",
   "ingredients": [
      "white creme de menthe",
      "southern comfort",
      "vodka",
      "hot chocolate"
   ],
   "instructions": "shake vigorously",
   "measures": [
      "1/2 oz ",
      "3/4 oz ",
      "1/2 oz ",
      "fill with "
   ]
},
 {
   "FIELD1": 25,
   "drinkName": "a1",
   "dateModified": "2017-09-07 21:42:09",
   "idDrink": 17222,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "grand marnier",
      "lemon juice",
      "grenadine"
   ],
   "instructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
   "measures": [
      "1 3/4 shot ",
      "1 shot ",
      "1/4 shot",
      "1/8 shot"
   ]
},
 {
   "FIELD1": 26,
   "drinkName": "abc",
   "dateModified": "2016-08-31 19:32:08",
   "idDrink": 13501,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "amaretto",
      "bailey's irish cream",
      "cognac"
   ],
   "instructions": "Layered in a shot glass.",
   "measures": [
      "1/3 ",
      "1/3 ",
      "1/3 "
   ]
},
 {
   "FIELD1": 27,
   "drinkName": "acid",
   "dateModified": "2016-11-15 11:28:37",
   "idDrink": 14610,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "151 proof rum",
      "wild turkey"
   ],
   "instructions": "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
   "measures": [
      "1 oz bacardi ",
      "1 oz "
   ]
},
 {
   "FIELD1": 28,
   "drinkName": "at&t",
   "dateModified": "2017-04-24 22:00:19",
   "idDrink": 13938,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "absolut vodka",
      "gin",
      "tonic water"
   ],
   "instructions": "Pour Vodka and Gin over ice, add Tonic and Stir",
   "measures": [
      "1 oz ",
      "1 oz ",
      "4 oz "
   ]
},
 {
   "FIELD1": 29,
   "drinkName": "abbey cocktail",
   "dateModified": "2016-09-02 11:19:28",
   "idDrink": 11003,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/quyyuw1472811568.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "orange bitters",
      "orange",
      "cherry"
   ],
   "instructions": "Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 dash ",
      "juice of 1/4 ",
      "1 "
   ]
},
 {
   "FIELD1": 30,
   "drinkName": "abbey martini",
   "dateModified": "2017-09-07 21:50:03",
   "idDrink": 17223,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "sweet vermouth",
      "orange juice",
      "angostura bitters"
   ],
   "instructions": "Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass.",
   "measures": [
      "2 shots ",
      "1 shot ",
      "1 shot ",
      "3 dashes "
   ]
},
 {
   "FIELD1": 31,
   "drinkName": "abilene",
   "dateModified": "2016-04-29 09:44:25",
   "idDrink": 11004,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ysqwwt1461919465.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "dark rum",
      "peach nectar",
      "orange juice"
   ],
   "instructions": "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
   "measures": [
      "1 1/2 oz ",
      "2 oz ",
      "3 oz "
   ]
},
 {
   "FIELD1": 32,
   "drinkName": "absinthe #2",
   "dateModified": "2016-08-31 19:13:17",
   "idDrink": 12790,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg",
   "glassType": "jar",
   "ingredients": [
      "vodka",
      "sugar",
      "anise",
      "licorice root",
      "wormwood"
   ],
   "instructions": "Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.",
   "measures": [
      "1 bottle ",
      "50 gr ",
      "50 ml pure ",
      "1 tblsp ",
      "1 "
   ]
},
 {
   "FIELD1": 33,
   "drinkName": "absolut evergreen",
   "dateModified": "2016-09-02 11:36:49",
   "idDrink": 14374,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wrxrxp1472812609.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "absolut citron",
      "pisang ambon",
      "ice",
      "bitter lemon"
   ],
   "instructions": "Mix, pour over ice and top up with Bitter Lemon.",
   "measures": [
      "2/3 part ",
      "1/3 part ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 34,
   "drinkName": "absolut sex",
   "dateModified": "2016-08-31 19:33:56",
   "idDrink": 14360,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xtrvtx1472668436.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "absolut kurant",
      "midori melon liqueur",
      "cranberry juice",
      "sprite"
   ],
   "instructions": "Shake Absolut Kurant, Midori, and Cranberry juice in shaker with ice: Strain into rocks glass: Splash of seven on top.Absolut Sex.",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "1 oz ",
      "1 splash "
   ]
},
 {
   "FIELD1": 35,
   "drinkName": "absolut stress #2",
   "dateModified": "2016-09-02 11:23:45",
   "idDrink": 15597,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xuyqrw1472811825.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "absolut vodka",
      "peach schnapps",
      "coconut liqueur",
      "cranberry juice",
      "pineapple juice"
   ],
   "instructions": "Mix well. Garnish with Orange and Cherry. Enjoy",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1 1/2 oz ",
      "1 1/2 oz "
   ]
},
 {
   "FIELD1": 36,
   "drinkName": "absolut summertime",
   "dateModified": "2016-08-31 19:54:22",
   "idDrink": 14107,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "absolut citron",
      "sweet and sour",
      "sprite",
      "soda water",
      "lemon"
   ],
   "instructions": "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz ",
      "1/2 oz ",
      "3 oz ",
      "1 slice "
   ]
},
 {
   "FIELD1": 37,
   "drinkName": "absolut limousine",
   "dateModified": "2016-09-01 09:50:44",
   "idDrink": 14372,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ssqpyw1472719844.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "absolut citron",
      "lime juice",
      "ice",
      "tonic water"
   ],
   "instructions": "Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.",
   "measures": [
      "2/3 ",
      "1/3 ",
      "fill with ",
      "top it up with "
   ]
},
 {
   "FIELD1": 38,
   "drinkName": "absolutely cranberry smash",
   "dateModified": "2016-09-02 11:24:44",
   "idDrink": 15024,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "absolut vodka",
      "cranberry juice",
      "ginger ale",
      "ice"
   ],
   "instructions": "Stir ingredients together. Serve over ice.",
   "measures": [
      "2 oz ",
      "4 oz ",
      "2 oz ",
      "add "
   ]
},
 {
   "FIELD1": 39,
   "drinkName": "absolutely fabulous",
   "dateModified": "2017-09-07 21:55:34",
   "idDrink": 17224,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "vodka",
      "cranberry juice",
      "champagne"
   ],
   "instructions": "Mix the Vodka and Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.",
   "measures": [
      "1 shot ",
      "2 shots ",
      "top up with"
   ]
},
 {
   "FIELD1": 40,
   "drinkName": "absolutly screwed up",
   "dateModified": "2016-08-31 19:55:28",
   "idDrink": 16134,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yvxrwv1472669728.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "absolut citron",
      "orange juice",
      "triple sec",
      "ginger ale"
   ],
   "instructions": "Shake it up it tasts better that way, but you can stir it if you want. 6 of those and you will be wasted for the rest of the night.",
   "measures": [
      "1 shot ",
      "1 shot ",
      "1 shot ",
      "fill to top "
   ]
},
 {
   "FIELD1": 41,
   "drinkName": "acapulco",
   "dateModified": "2016-09-02 11:26:16",
   "idDrink": 11005,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vtpsvr1472811976.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "light rum",
      "triple sec",
      "lime juice",
      "sugar",
      "egg white",
      "mint"
   ],
   "instructions": "Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 1/2 tsp ",
      "1 tblsp ",
      "1 tsp ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 42,
   "drinkName": "ace",
   "dateModified": "2017-09-07 22:05:06",
   "idDrink": 17225,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
   "glassType": "martini glass",
   "ingredients": [
      "gin",
      "grenadine",
      "heavy cream",
      "milk",
      "egg white"
   ],
   "instructions": "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
   "measures": [
      "2 shots ",
      "1/2 shot ",
      "1/2 shot ",
      "1/2 shot ",
      "1/2 fresh"
   ]
},
 {
   "FIELD1": 43,
   "drinkName": "adam",
   "dateModified": "2016-09-02 11:29:29",
   "idDrink": 11006,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rwuxsv1472812169.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dark rum",
      "lemon juice",
      "grenadine"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 44,
   "drinkName": "adam & eve",
   "dateModified": "2017-09-07 22:17:58",
   "idDrink": 17226,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "cognac",
      "creme de cassis",
      "fresh lemon juice"
   ],
   "instructions": "Shake together all the ingredients and strain into a cold glass.",
   "measures": [
      "1 shot ",
      "1 shot ",
      "1 shot ",
      "1/8 shot "
   ]
},
 {
   "FIELD1": 45,
   "drinkName": "adam bomb",
   "dateModified": "2016-02-03 15:23:36",
   "idDrink": 16333,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
   "glassType": "margarita/coupette glass",
   "ingredients": [
      "rum",
      "vodka",
      "tequila",
      "triple sec",
      "fruit",
      "ice",
      "salt",
      "fruit juice"
   ],
   "instructions": "Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.",
   "measures": [
      "1 part ",
      "1 part ",
      "1 part ",
      "1/2 part ",
      "1-3 pint "
   ]
},
 {
   "FIELD1": 46,
   "drinkName": "adam sunrise",
   "dateModified": "2016-09-02 11:28:32",
   "idDrink": 15567,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "lemonade",
      "water",
      "sugar"
   ],
   "instructions": "Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds.",
   "measures": [
      "1/2 ",
      "1/2 can ",
      "1/2 ",
      "10 tsp "
   ]
},
 {
   "FIELD1": 47,
   "drinkName": "addington",
   "dateModified": "2017-09-07 22:15:25",
   "idDrink": 17227,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sweet vermouth",
      "dry vermouth",
      "soda water"
   ],
   "instructions": "Mix both the vermouth's in a shaker and strain into a cold glass. Top up with a squirt of Soda Water. ",
   "measures": [
      "2 shots ",
      "1 shot ",
      "top up with\n"
   ]
},
 {
   "FIELD1": 48,
   "drinkName": "addison",
   "dateModified": "2017-09-07 22:38:20",
   "idDrink": 17228,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
   "glassType": "martini glass",
   "ingredients": [
      "gin",
      "vermouth"
   ],
   "instructions": "Shake together all the ingredients and strain into a cold glass.",
   "measures": [
      "1 1/2 shot ",
      "1 1/2 shot "
   ]
},
 {
   "FIELD1": 49,
   "drinkName": "addison special",
   "dateModified": "2017-04-24 22:14:53",
   "idDrink": 14272,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "vodka",
      "grenadine",
      "orange juice"
   ],
   "instructions": "Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge.",
   "measures": [
      "1 shot ",
      "1 tblsp ",
      "fill with "
   ]
},
 {
   "FIELD1": 50,
   "drinkName": "adios amigos cocktail",
   "dateModified": "2017-09-07 22:31:33",
   "idDrink": 17229,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg",
   "glassType": "martini glass",
   "ingredients": [
      "rum",
      "dry vermouth",
      "cognac",
      "gin",
      "fresh lime juice",
      "sugar syrup",
      "water"
   ],
   "instructions": "Shake together all the ingredients and strain into a cold glass.",
   "measures": [
      "1 shot ",
      "1/2 shot ",
      "1/2 shot ",
      "1/2 shot ",
      "1/4 shot",
      "1/4 shot",
      "1/2 shot "
   ]
},
 {
   "FIELD1": 51,
   "drinkName": "adonis cocktail",
   "dateModified": "2016-09-02 11:27:11",
   "idDrink": 11007,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xrvruq1472812030.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sweet vermouth",
      "sherry",
      "orange bitters"
   ],
   "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
   "measures": [
      "3/4 oz ",
      "1 1/2 oz dry ",
      "1 dash "
   ]
},
 {
   "FIELD1": 52,
   "drinkName": "affair",
   "dateModified": "2016-09-01 10:05:34",
   "idDrink": 11008,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wxrsxx1472720734.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "strawberry schnapps",
      "orange juice",
      "cranberry juice",
      "club soda"
   ],
   "instructions": "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
   "measures": [
      "2 oz ",
      "2 oz ",
      "2 oz "
   ]
},
 {
   "FIELD1": 53,
   "drinkName": "affinity",
   "dateModified": "2017-09-07 21:44:05",
   "idDrink": 11009,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/nwatpb1504817045.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "scotch",
      "sweet vermouth",
      "dry vermouth",
      "orange bitters"
   ],
   "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1 oz ",
      "2 dashes "
   ]
},
 {
   "FIELD1": 54,
   "drinkName": "after dinner cocktail",
   "dateModified": "2017-01-02 20:06:18",
   "idDrink": 11010,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vtytxq1483387578.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "apricot brandy",
      "triple sec",
      "lime",
      "lime"
   ],
   "instructions": "Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "juice of 1 ",
      "1 "
   ]
},
 {
   "FIELD1": 55,
   "drinkName": "after five",
   "dateModified": "2017-04-24 22:16:35",
   "idDrink": 13807,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sk3lr91493068595.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "peppermint schnapps",
      "kahlua",
      "bailey's irish cream"
   ],
   "instructions": "1. Pour Kahlua into shot glass to about 1/2 full. 2. Using a spoon(inverted), slowly pour in the Peppermint Schnapps until glass is about 3/4 full. Done correctly, the Schnapps will flow under the Kahlua for a clear layer. 3. Again using a spoon, but this time right side up, slowly top off the glass with a layer of Bailey's. Be careful to place the spoon right at the top of the Kahlua layer and to raise it as the glass fills up. Done correctly, this will provide a layer of Bailey's floating over the Kahlua. 4. Toss it down all at once for something like a Peppermint Pattie, WITH A BANG!!! NOTE: Best if all ingredients are chilled",
   "measures": [
      "\n"
   ]
},
 {
   "FIELD1": 56,
   "drinkName": "after supper cocktail",
   "dateModified": "2017-01-02 20:06:50",
   "idDrink": 11011,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/quyxwu1483387610.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "triple sec",
      "apricot brandy",
      "lemon juice"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1/2 tsp "
   ]
},
 {
   "FIELD1": 57,
   "drinkName": "after sex",
   "dateModified": "2017-04-24 22:18:22",
   "idDrink": 15182,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "creme de banane",
      "orange juice"
   ],
   "instructions": "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
   "measures": [
      "2 cl ",
      "1 cl "
   ]
},
 {
   "FIELD1": 58,
   "drinkName": "afterglow",
   "dateModified": "2016-07-18 22:07:32",
   "idDrink": 12560,
   "type": "non alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "grenadine",
      "orange juice",
      "pineapple juice"
   ],
   "instructions": "Mix. Serve over ice.",
   "measures": [
      "1 part ",
      "4 parts ",
      "4 parts "
   ]
},
 {
   "FIELD1": 59,
   "drinkName": "afternoon",
   "dateModified": "2016-08-31 19:22:57",
   "idDrink": 13162,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "kahlua",
      "bailey's irish cream",
      "frangelico",
      "coffee",
      "cream"
   ],
   "instructions": "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
   "measures": [
      "1 cl ",
      "1 cl ",
      "1 1/2 ",
      "4 cl hot "
   ]
},
 {
   "FIELD1": 60,
   "drinkName": "alabama slammer",
   "dateModified": "2017-01-02 20:07:27",
   "idDrink": 11012,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qtwxwr1483387647.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "southern comfort",
      "amaretto",
      "sloe gin",
      "lemon juice"
   ],
   "instructions": "Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1/2 oz ",
      "1 dash "
   ]
},
 {
   "FIELD1": 61,
   "drinkName": "alaska cocktail",
   "dateModified": "2017-01-02 20:08:40",
   "idDrink": 11013,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "orange bitters",
      "gin",
      "yellow chartreuse",
      "lemon peel"
   ],
   "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.",
   "measures": [
      "2 dashes ",
      "1 1/2 oz ",
      "3/4 oz ",
      "twist of "
   ]
},
 {
   "FIELD1": 62,
   "drinkName": "alexander",
   "dateModified": "2016-11-04 09:50:39",
   "idDrink": 11014,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/urystu1478253039.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "creme de cacao",
      "light cream",
      "nutmeg"
   ],
   "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
   "measures": [
      "1/2 oz ",
      "1/2 oz white ",
      "2 oz "
   ]
},
 {
   "FIELD1": 63,
   "drinkName": "alfie cocktail",
   "dateModified": "2017-01-02 20:10:29",
   "idDrink": 11019,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ypxsqy1483387829.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "lemon vodka",
      "triple sec",
      "pineapple juice"
   ],
   "instructions": "Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 dash ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 64,
   "drinkName": "algonquin",
   "dateModified": "2017-01-02 20:11:13",
   "idDrink": 11020,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uwryxx1483387873.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "blended whiskey",
      "dry vermouth",
      "pineapple juice"
   ],
   "instructions": "Combine and shake all ingredients with ice, strain contents into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 65,
   "drinkName": "alice cocktail",
   "dateModified": "2016-07-18 22:09:04",
   "idDrink": 12562,
   "type": "non alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "grenadine",
      "orange juice",
      "pineapple juice",
      "cream"
   ],
   "instructions": "Shake well, strain into a large cocktail glass.",
   "measures": [
      "1 cl ",
      "1 cl ",
      "2 cl ",
      "4 cl "
   ]
},
 {
   "FIELD1": 66,
   "drinkName": "alice in wonderland",
   "dateModified": "2017-04-24 22:29:51",
   "idDrink": 17094,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/g12lj41493069391.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "amaretto",
      "grand marnier",
      "southern comfort"
   ],
   "instructions": "Just mix the three ingredients one to one to one",
   "measures": [
      "1 shot ",
      "1 shot ",
      "1 shot "
   ]
},
 {
   "FIELD1": 67,
   "drinkName": "allegheny",
   "dateModified": "2017-01-02 20:12:14",
   "idDrink": 11021,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dry vermouth",
      "bourbon",
      "blackberry brandy",
      "lemon juice",
      "lemon peel"
   ],
   "instructions": "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 1/2 tsp ",
      "1 1/2 tsp ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 68,
   "drinkName": "allies cocktail",
   "dateModified": "2017-01-02 20:15:04",
   "idDrink": 11022,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dry vermouth",
      "gin",
      "kummel"
   ],
   "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1/2 tsp "
   ]
},
 {
   "FIELD1": 69,
   "drinkName": "almeria",
   "dateModified": "2017-01-02 20:16:21",
   "idDrink": 11023,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dark rum",
      "kahlua",
      "egg white"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 70,
   "drinkName": "almond chocolate coffee",
   "dateModified": "2017-04-24 22:30:41",
   "idDrink": 16082,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/jls02c1493069441.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "amaretto",
      "dark creme de cacao",
      "coffee"
   ],
   "instructions": "Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.",
   "measures": [
      "3/4 oz ",
      "1/2 oz ",
      "8 oz "
   ]
},
 {
   "FIELD1": 71,
   "drinkName": "almond joy",
   "dateModified": "2017-01-02 20:18:16",
   "idDrink": 11024,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xutuqs1483388296.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "amaretto",
      "creme de cacao",
      "light cream"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1/2 oz ",
      "1/2 oz white ",
      "2 oz "
   ]
},
 {
   "FIELD1": 72,
   "drinkName": "aloha fruit punch",
   "dateModified": "2016-07-18 22:11:07",
   "idDrink": 12862,
   "type": "non alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "water",
      "ginger",
      "guava juice",
      "lemon juice",
      "pineapple",
      "sugar",
      "pineapple juice"
   ],
   "instructions": "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
   "measures": [
      "3/4 cup ",
      "2 tsp ",
      "2 cups ",
      "1 1/2 tblsp ",
      "1 1/2 cup ",
      "1 cup ",
      "3-4 cups "
   ]
},
 {
   "FIELD1": 73,
   "drinkName": "amaretto and cream",
   "dateModified": "2017-09-02 18:56:58",
   "idDrink": 11025,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/dj8n0r1504375018.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "amaretto",
      "light cream"
   ],
   "instructions": "Shake well with cracked ice, strain contents into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 1/2 oz "
   ]
},
 {
   "FIELD1": 74,
   "drinkName": "amaretto liqueur",
   "dateModified": "2016-09-01 09:47:29",
   "idDrink": 12792,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "sugar",
      "water",
      "apricot",
      "almond flavoring",
      "grain alcohol",
      "water",
      "brandy",
      "food coloring",
      "food coloring",
      "food coloring",
      "glycerine"
   ],
   "instructions": "Combine sugar and 3/4 cup water in a small saucepan. Bring to a boil, stirring constantly. Reduce heat and simmer until all sugar is dissolved. Remove from heat and cool. In an aging container, combine apricot halves, almond extract, grain alcohol with 1/2 cup water, and brandy. Stir in cooled sugar syrup mixture. Cap and let age for 2 days. Remove apricot halves. (Save apricot halves, can be used for cooking). Add food coloring and glycerine. Stir, recap and continue aging for 1 to 2 months. Re-bottle as desired. Liqueur is ready to serve but will continue to improve with additional aging.",
   "measures": [
      "1 cup",
      "3/4 cup ",
      "2 ",
      "1 tblsp ",
      "1/2 cup pure ",
      "1/2 cup ",
      "1 cup ",
      "3 drops yellow ",
      "6 drops red ",
      "2 drops blue ",
      "1/2 tsp "
   ]
},
 {
   "FIELD1": 75,
   "drinkName": "amaretto mist",
   "dateModified": "2017-01-02 20:19:31",
   "idDrink": 11026,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "amaretto",
      "lime"
   ],
   "instructions": "Pour amaretto in an old-fashioned glass over crushed ice. Add the wedge of lime and serve. (A wedge of lemon may be substituted for lime, if preferred.)",
   "measures": [
      "1 1/2 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 76,
   "drinkName": "amaretto rose",
   "dateModified": "2017-04-24 22:32:59",
   "idDrink": 11027,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "amaretto",
      "lime juice",
      "club soda"
   ],
   "instructions": "Pour amaretto and lime juice over ice in a collins glass. Fill with club soda and serve.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 77,
   "drinkName": "amaretto shake",
   "dateModified": "2017-04-24 22:34:16",
   "idDrink": 15194,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "chocolate ice-cream",
      "brandy",
      "amaretto"
   ],
   "instructions": "Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings.",
   "measures": [
      "2 scoops ",
      "2 oz ",
      "2 oz "
   ]
},
 {
   "FIELD1": 78,
   "drinkName": "amaretto sour",
   "dateModified": "2017-04-24 22:43:32",
   "idDrink": 13731,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "amaretto",
      "sour mix"
   ],
   "instructions": "Shake and strain. Garnish with a cherry and an orange slice.",
   "measures": [
      "1 1/2 oz ",
      "3 oz "
   ]
},
 {
   "FIELD1": 79,
   "drinkName": "amaretto stinger",
   "dateModified": "2017-04-24 22:38:54",
   "idDrink": 11028,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vvop4w1493069934.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "amaretto",
      "white creme de menthe"
   ],
   "instructions": "Shake ingredients well with cracked ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 80,
   "drinkName": "amaretto stone sour",
   "dateModified": "2016-09-01 09:52:01",
   "idDrink": 14306,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xwryyx1472719921.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "amaretto",
      "sour mix",
      "orange juice"
   ],
   "instructions": "Shake and Serve over ice",
   "measures": [
      "1 part ",
      "1 part ",
      "1 part "
   ]
},
 {
   "FIELD1": 81,
   "drinkName": "amaretto stone sour #3",
   "dateModified": "2016-09-01 09:53:32",
   "idDrink": 16100,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "sour mix",
      "amaretto",
      "tequila",
      "orange juice"
   ],
   "instructions": "Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry.",
   "measures": [
      "2 oz ",
      "2 oz ",
      "2 oz ",
      "add splash "
   ]
},
 {
   "FIELD1": 82,
   "drinkName": "amaretto sunrise",
   "dateModified": "2017-04-24 22:44:27",
   "idDrink": 14578,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "amaretto",
      "orange juice",
      "grenadine"
   ],
   "instructions": "Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.",
   "measures": [
      "1 cl ",
      "4 oz ",
      "1/4 cl "
   ]
},
 {
   "FIELD1": 83,
   "drinkName": "amaretto sunset",
   "dateModified": "2017-04-24 22:36:00",
   "idDrink": 17168,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "triple sec",
      "amaretto",
      "cider",
      "ice"
   ],
   "instructions": "Shake ingredients in bartender's mixer quickly, just 5 shakes. Strain out ice, serve in glass immediately with a slice of orange.",
   "measures": [
      "1/2 jigger ",
      "3 shots ",
      "1/2 cup ",
      "add 1/2 cup "
   ]
},
 {
   "FIELD1": 84,
   "drinkName": "amaretto sweet & sour",
   "dateModified": "2016-08-31 19:35:46",
   "idDrink": 16202,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vswwus1472668546.jpg",
   "glassType": "margarita/coupette glass",
   "ingredients": [
      "amaretto",
      "sweet and sour",
      "midori melon liqueur",
      "pineapple juice"
   ],
   "instructions": "Fill the blender with 3/4 ice. Add sweet & sour mix to the top of the ice. Add about 1\" of pineapple juice, 1/2\" of melon liqeur, and 1/2 to 1/4\" of amaretto. Then blend the mix until it is of margaritta consistency or thinner.",
   "measures": [
      "\n"
   ]
},
 {
   "FIELD1": 85,
   "drinkName": "amaretto tea",
   "dateModified": "2017-04-24 22:42:47",
   "idDrink": 11029,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
   "glassType": "pousse cafe glass",
   "ingredients": [
      "tea",
      "amaretto",
      "whipped cream"
   ],
   "instructions": "Pour hot tea into a pousse-cafe glass, using a spoon in glass to prevent cracking. Add amaretto, but do not stir. Top with chilled whipped cream and serve.",
   "measures": [
      "6 oz hot ",
      "2 oz ",
      "chilled "
   ]
},
 {
   "FIELD1": 86,
   "drinkName": "americano",
   "dateModified": "2016-11-04 09:52:06",
   "idDrink": 15941,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/trwruu1478253126.jpg",
   "glassType": "collins glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "campari",
      "sweet vermouth",
      "lemon peel",
      "orange peel"
   ],
   "instructions": "Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.",
   "measures": [
      "1 oz ",
      "1 oz red ",
      "twist of ",
      "twist of "
   ]
},
 {
   "FIELD1": 87,
   "drinkName": "angel face",
   "dateModified": "2016-11-04 09:52:58",
   "idDrink": 11034,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqpptp1478253178.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "apricot brandy",
      "apple brandy",
      "gin"
   ],
   "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 88,
   "drinkName": "angelica liqueur",
   "dateModified": "2016-08-31 19:21:12",
   "idDrink": 12794,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yuurps1472667672.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "angelica root",
      "almond",
      "allspice",
      "cinnamon",
      "anise",
      "coriander",
      "marjoram leaves",
      "vodka",
      "sugar",
      "water",
      "food coloring",
      "food coloring"
   ],
   "instructions": "Combine all herbs, nuts and spices with vodka in a 1 quart or larger aging container. Cap tightly and shake daily for 2 weeks. Strain through a fine muslin cloth or coffee filter, discarding solids. Clean out aging container. Place liquid back in container. Place sugar and water in saucepan and stir to combine over medium heat. When sugar is completely dissolved, set aside and let cool. When cool combine with food coloring and add to liqueur liquid. Cap and allow to age and mellow in a cool, dark place for one month.",
   "measures": [
      "3 tblsp chopped",
      "1 tblsp chopped ",
      "1 cracked ",
      "1 one-inch ",
      "3-6 crushed ",
      "1/8 tsp powdered ",
      "1 tblsp fresh chopped ",
      "1.5 cup ",
      "1/2 cup granulated ",
      "1/4 cup ",
      "1 drop yellow ",
      "1 drop green "
   ]
},
 {
   "FIELD1": 89,
   "drinkName": "apello",
   "dateModified": "2016-07-18 22:13:35",
   "idDrink": 15106,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "orange juice",
      "grapefruit juice",
      "apple juice",
      "maraschino cherry"
   ],
   "instructions": "Stirr. Grnish with maraschino cherry.",
   "measures": [
      "4 cl ",
      "3 cl ",
      "1 cl ",
      "1 "
   ]
},
 {
   "FIELD1": 90,
   "drinkName": "apple berry smoothie",
   "dateModified": "2016-07-18 22:14:33",
   "idDrink": 12710,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "berries",
      "apple"
   ],
   "instructions": "Throw everything into a blender and liquify.",
   "measures": [
      "1 cup ",
      "2 "
   ]
},
 {
   "FIELD1": 91,
   "drinkName": "apple cider punch #1",
   "dateModified": "2016-02-03 15:26:58",
   "idDrink": 12864,
   "type": "optional alcohol",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xrqxuv1454513218.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "apple cider",
      "brown sugar",
      "lemonade",
      "orange juice",
      "cloves",
      "allspice",
      "nutmeg",
      "cinnamon"
   ],
   "instructions": "If you use the whole all spice and cloves, tie them in cheesecloth. Heat the mixture. Stir occasionally. If you want an alcoholic drink, rum would be nice.",
   "measures": [
      "4 qt ",
      "1 cup ",
      "6 oz frozen ",
      "6 oz frozen ",
      "6 whole ",
      "6 whole ",
      "1 tsp ground ",
      "3 sticks "
   ]
},
 {
   "FIELD1": 92,
   "drinkName": "apple grande",
   "dateModified": "2016-08-31 19:37:02",
   "idDrink": 16289,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "tequila",
      "apple cider"
   ],
   "instructions": "Chill both ingredients!! Mix in a tumbler and enjoy!",
   "measures": [
      "3 oz ",
      "12 oz "
   ]
},
 {
   "FIELD1": 93,
   "drinkName": "apple karate",
   "dateModified": "2016-07-18 22:17:14",
   "idDrink": 12564,
   "type": "non alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "apple juice",
      "carrot"
   ],
   "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
   "measures": [
      "2 cups ",
      "1 large "
   ]
},
 {
   "FIELD1": 94,
   "drinkName": "apple pie with a crust",
   "dateModified": "2016-09-01 09:54:38",
   "idDrink": 16958,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qspqxt1472720078.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "apple juice",
      "malibu rum",
      "cinnamon"
   ],
   "instructions": "Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.",
   "measures": [
      "3 parts ",
      "1 part ",
      "3 dashes "
   ]
},
 {
   "FIELD1": 95,
   "drinkName": "apple slammer",
   "dateModified": "2017-04-24 22:37:32",
   "idDrink": 13683,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/09yd5f1493069852.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "7-up",
      "apple schnapps"
   ],
   "instructions": "pour into a shot glass and present to consumer, they are expected to cover the top of the shotglass with thier palm, raise the glass, slam it on the bar and the swallow quickly.",
   "measures": [
      "1 part ",
      "1 part "
   ]
},
 {
   "FIELD1": 96,
   "drinkName": "applecar",
   "dateModified": "2017-09-02 23:02:44",
   "idDrink": 11046,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "applejack",
      "triple sec",
      "lemon juice"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 97,
   "drinkName": "applejack",
   "dateModified": "2016-11-15 11:24:22",
   "idDrink": 16311,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "jack daniels",
      "midori melon liqueur",
      "sour mix"
   ],
   "instructions": "Add all ingredients into mixing glass, chill and strain into cocktail glass",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "2 oz "
   ]
},
 {
   "FIELD1": 98,
   "drinkName": "apricot lady",
   "dateModified": "2017-09-02 23:03:34",
   "idDrink": 11050,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/146f251504389814.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "light rum",
      "apricot brandy",
      "triple sec",
      "lemon juice",
      "egg white",
      "orange"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the orange slice.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1 tsp ",
      "1/2 oz ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 99,
   "drinkName": "apricot punch",
   "dateModified": "2016-08-31 19:37:47",
   "idDrink": 15849,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "apricot brandy",
      "champagne",
      "vodka",
      "7-up",
      "orange juice"
   ],
   "instructions": "Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.",
   "measures": [
      "1 qt ",
      "4 fifth ",
      "1 fifth ",
      "4 l ",
      "1/2 gal "
   ]
},
 {
   "FIELD1": 100,
   "drinkName": "archbishop",
   "dateModified": "2015-09-02 16:21:47",
   "idDrink": 11052,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xpqwrt1441207307.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "wine",
      "benedictine",
      "lime"
   ],
   "instructions": "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
   "measures": [
      "2 oz ",
      "1 oz green ginger ",
      "1 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 101,
   "drinkName": "arctic fish",
   "dateModified": "2016-08-31 19:39:41",
   "idDrink": 14622,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
   "glassType": "beer pilsner",
   "ingredients": [
      "vodka",
      "grape soda",
      "orange juice",
      "ice",
      "candy"
   ],
   "instructions": "Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.",
   "measures": [
      "1/3 part ",
      "1/3 part ",
      "1/3 part ",
      "lots ",
      "1 dash "
   ]
},
 {
   "FIELD1": 102,
   "drinkName": "arctic mouthwash",
   "dateModified": "2016-11-12 15:15:35",
   "idDrink": 17118,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wqstwv1478963735.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "maui",
      "mountain dew",
      "ice"
   ],
   "instructions": "Blend all ingredients in a blender on high until ice is finely crushed. It should be of a slushy consistency. Pour immediately and serve.",
   "measures": [
      "5 oz blue ",
      "5 oz ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 103,
   "drinkName": "arise my love",
   "dateModified": "2015-09-02 16:23:52",
   "idDrink": 11053,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wyrrwv1441207432.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "champagne",
      "green creme de menthe"
   ],
   "instructions": "Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.",
   "measures": [
      "chilled ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 104,
   "drinkName": "arizona antifreeze",
   "dateModified": "2017-04-24 21:54:22",
   "idDrink": 16354,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "vodka",
      "midori melon liqueur",
      "sweet and sour"
   ],
   "instructions": "Pour all ingredients into shot glass and slam !!!!",
   "measures": [
      "1/3 oz ",
      "1/3 oz ",
      "1/3 oz "
   ]
},
 {
   "FIELD1": 105,
   "drinkName": "arizona stingers",
   "dateModified": "2017-04-24 22:10:55",
   "idDrink": 14584,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/y7w0721493068255.jpg",
   "glassType": "hurricane glass",
   "ingredients": [
      "absolut vodka",
      "iced tea"
   ],
   "instructions": "Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka (Note: You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!",
   "measures": [
      "2 shots ",
      "12 oz lemon "
   ]
},
 {
   "FIELD1": 106,
   "drinkName": "arizona twister",
   "dateModified": "2017-04-24 22:08:55",
   "idDrink": 17074,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg",
   "glassType": "hurricane glass",
   "ingredients": [
      "vodka",
      "malibu rum",
      "gold tequila",
      "orange juice",
      "pineapple juice",
      "cream of coconut",
      "grenadine",
      "ice",
      "pineapple"
   ],
   "instructions": "Just mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge.",
   "measures": [
      "1 shot ",
      "1 shot ",
      "1 shot ",
      "1 splash ",
      "1 splash ",
      "1 splash ",
      "1 dash ",
      "crushed ",
      "1 wedge "
   ]
},
 {
   "FIELD1": 107,
   "drinkName": "army special",
   "dateModified": "2017-04-24 22:07:42",
   "idDrink": 17066,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "vodka",
      "gin",
      "lime juice cordial",
      "ice"
   ],
   "instructions": "Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw.",
   "measures": [
      "30 ml ",
      "30 ml ",
      "45 ml ",
      "1/2 glass crushed "
   ]
},
 {
   "FIELD1": 108,
   "drinkName": "arthur tompkins",
   "dateModified": "2017-04-24 22:05:21",
   "idDrink": 11054,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7onfhz1493067921.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "gin",
      "grand marnier",
      "lemon juice",
      "lemon peel"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "2 tsp ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 109,
   "drinkName": "artillery",
   "dateModified": "2017-04-24 22:02:27",
   "idDrink": 11055,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sweet vermouth",
      "gin",
      "bitters"
   ],
   "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 tsp ",
      "1 1/2 oz ",
      "2 dashes "
   ]
},
 {
   "FIELD1": 110,
   "drinkName": "artillery punch",
   "dateModified": "2017-04-24 22:01:32",
   "idDrink": 12870,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/9a4vqb1493067692.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "tea",
      "rye whiskey",
      "red wine",
      "rum",
      "brandy",
      "benedictine",
      "orange juice",
      "lemon juice"
   ],
   "instructions": "Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.",
   "measures": [
      "1 quart black ",
      "1 quart ",
      "1 fifth ",
      "1 pint jamaican ",
      "1/2 pint ",
      "1 1/2 oz ",
      "1 pint ",
      "1/2 pint "
   ]
},
 {
   "FIELD1": 111,
   "drinkName": "atlantic sun",
   "dateModified": "2017-04-24 21:59:16",
   "idDrink": 13423,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "southern comfort",
      "passion fruit syrup",
      "sweet and sour",
      "club soda"
   ],
   "instructions": "Shake all the ingredients, top the drink with soda. Garnish with a slice of orange.",
   "measures": [
      "2 cl smirnoff ",
      "2 cl ",
      "2 cl ",
      "6 cl ",
      "1 dash "
   ]
},
 {
   "FIELD1": 112,
   "drinkName": "atomic lokade",
   "dateModified": "2017-04-24 21:56:52",
   "idDrink": 13086,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "lemonade",
      "vodka",
      "blue curacao",
      "triple sec",
      "sugar",
      "ice"
   ],
   "instructions": "In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste",
   "measures": [
      "5 oz ",
      "1 oz ",
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 113,
   "drinkName": "auburn headbanger",
   "dateModified": "2017-04-24 21:55:20",
   "idDrink": 17020,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vw7iv91493067320.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "jägermeister",
      "goldschlager"
   ],
   "instructions": "Mix in spread glass over ice. Strain and pour in shot glass. Sit down before shotting. ENJOY!!",
   "measures": [
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 114,
   "drinkName": "autodafé",
   "dateModified": "2017-02-20 15:02:08",
   "idDrink": 12756,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "lime juice",
      "soda water"
   ],
   "instructions": "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.",
   "measures": [
      "4 cl ",
      "1 dash "
   ]
},
 {
   "FIELD1": 115,
   "drinkName": "avalanche",
   "dateModified": "2016-09-01 09:56:05",
   "idDrink": 16419,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uppqty1472720165.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "crown royal",
      "kahlua",
      "cream"
   ],
   "instructions": "Mix in highball glass over ice, shake well.",
   "measures": [
      "1 shot ",
      "1 shot ",
      "fill with "
   ]
},
 {
   "FIELD1": 116,
   "drinkName": "avalon",
   "dateModified": "2017-04-24 22:22:11",
   "idDrink": 15266,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "pisang ambon",
      "apple juice",
      "lemon juice",
      "lemonade"
   ],
   "instructions": "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
   "measures": [
      "3 parts",
      "1 part ",
      "6 parts ",
      "1 1/2 part "
   ]
},
 {
   "FIELD1": 117,
   "drinkName": "aviation",
   "dateModified": "2016-11-04 09:55:28",
   "idDrink": 17180,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ruutxt1478253328.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "lemon juice",
      "maraschino liqueur"
   ],
   "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
   "measures": [
      "4.5 cl",
      "1.5 cl",
      "1.5 cl"
   ]
},
 {
   "FIELD1": 118,
   "drinkName": "aztec punch",
   "dateModified": "2016-02-03 15:49:51",
   "idDrink": 14364,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "lemonade",
      "vodka",
      "rum",
      "ginger ale"
   ],
   "instructions": "Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so don't over do it.",
   "measures": [
      "1 can ",
      "5 oz ",
      "7 oz ",
      "about 1 bottle "
   ]
},
 {
   "FIELD1": 119,
   "drinkName": "b-52",
   "dateModified": "2017-09-02 18:07:51",
   "idDrink": 15853,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
   "glassType": "shot glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "bailey's irish cream",
      "grand marnier",
      "kahlua"
   ],
   "instructions": "Layer ingredients into a shot glass. Serve with a stirrer.",
   "measures": [
      "1/3 ",
      "1/3 ",
      "1/4 "
   ]
},
 {
   "FIELD1": 120,
   "drinkName": "b-53",
   "dateModified": "2016-04-28 18:53:43",
   "idDrink": 13332,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "kahlua",
      "sambuca",
      "grand marnier"
   ],
   "instructions": "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
   "measures": [
      "1/3 shot ",
      "1/3 shot ",
      "1/3 shot "
   ]
},
 {
   "FIELD1": 121,
   "drinkName": "baby eskimo",
   "dateModified": "2016-09-01 09:57:07",
   "idDrink": 15511,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wywrtw1472720227.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "kahlua",
      "milk",
      "vanilla ice-cream"
   ],
   "instructions": "Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.",
   "measures": [
      "2 oz ",
      "8 oz ",
      "2 scoops "
   ]
},
 {
   "FIELD1": 122,
   "drinkName": "baby guinness",
   "dateModified": "2016-09-10 05:39:19",
   "idDrink": 17079,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rvyvxs1473482359.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "kahlua",
      "bailey's irish cream"
   ],
   "instructions": "Pour Kahlua, almost filling shot glass. Then, carefully pour Baileys, using wall of shot glass. This will give the \"Guinness\" its \"head\".",
   "measures": [
      "2 1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 123,
   "drinkName": "bacardi cocktail",
   "dateModified": "2017-09-02 11:30:59",
   "idDrink": 17183,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/n433t21504348259.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "light rum",
      "lime juice",
      "sugar syrup",
      "grenadine"
   ],
   "instructions": "Shake together with ice. Strain into glass and serve.",
   "measures": [
      "1 3/4 oz bacardi ",
      "1 oz ",
      "1/2 tsp ",
      "1 dash "
   ]
},
 {
   "FIELD1": 124,
   "drinkName": "bailey's dream shake",
   "dateModified": "2016-09-01 09:35:59",
   "idDrink": 14510,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qxrvqw1472718959.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "bailey's irish cream",
      "vanilla ice-cream",
      "cream"
   ],
   "instructions": "Blend ingredients for 30 seconds. Definitely refreshing for a hot summer's day !",
   "measures": [
      "2 oz ",
      "2 scoops "
   ]
},
 {
   "FIELD1": 125,
   "drinkName": "balmoral",
   "dateModified": "2015-09-02 16:04:57",
   "idDrink": 11060,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "scotch",
      "sweet vermouth",
      "dry vermouth",
      "bitters"
   ],
   "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "2 dashes "
   ]
},
 {
   "FIELD1": 126,
   "drinkName": "banana cantaloupe smoothie",
   "dateModified": "2016-07-18 22:18:23",
   "idDrink": 12708,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "cantaloupe",
      "banana"
   ],
   "instructions": "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
   "measures": [
      "juice of 1/2 ",
      "1 "
   ]
},
 {
   "FIELD1": 127,
   "drinkName": "banana daiquiri",
   "dateModified": "2017-09-02 22:55:01",
   "idDrink": 11064,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "light rum",
      "triple sec",
      "banana",
      "lime juice",
      "sugar",
      "cherry"
   ],
   "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
   "measures": [
      "1 1/2 oz ",
      "1 tblsp ",
      "1 ",
      "1 1/2 oz ",
      "1 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 128,
   "drinkName": "banana milk shake",
   "dateModified": "2016-09-01 09:58:27",
   "idDrink": 12654,
   "type": "non alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
   "glassType": "white wine glass",
   "ingredients": [
      "milk",
      "orange juice",
      "sugar syrup",
      "banana"
   ],
   "instructions": "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
   "measures": [
      "10 cl cold ",
      "4 cl ",
      "2 tsp ",
      "1/2 "
   ]
},
 {
   "FIELD1": 129,
   "drinkName": "banana strawberry shake",
   "dateModified": "2016-09-01 10:03:54",
   "idDrink": 12656,
   "type": "non alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "strawberries",
      "banana",
      "yoghurt",
      "milk",
      "honey"
   ],
   "instructions": "Blend all together in a blender until smooth.",
   "measures": [
      "1/2 lb frozen ",
      "1 frozen ",
      "1 cup plain ",
      "1 cup ",
      "to taste\n"
   ]
},
 {
   "FIELD1": 130,
   "drinkName": "banana strawberry shake daiquiri-type",
   "dateModified": "2016-09-01 10:03:01",
   "idDrink": 12658,
   "type": "non alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "strawberries",
      "banana",
      "apple juice"
   ],
   "instructions": "Blend all together in a blender until smooth.",
   "measures": [
      "1/2 lb frozen ",
      "1 frozen ",
      "2 cups fresh "
   ]
},
 {
   "FIELD1": 131,
   "drinkName": "barracuda",
   "dateModified": "2017-09-02 18:12:17",
   "idDrink": 17209,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/jwmr1x1504372337.jpg",
   "glassType": "margarita glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "rum",
      "galliano",
      "pineapple juice",
      "lime juice",
      "prosecco"
   ],
   "instructions": "Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.",
   "measures": [
      "4.5 cl",
      "1.5 cl",
      "6 cl",
      "1 dash",
      "top up "
   ]
},
 {
   "FIELD1": 132,
   "drinkName": "belgian blue",
   "dateModified": "2015-09-03 02:56:59",
   "idDrink": 14071,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rttsxw1441245419.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "coconut liqueur",
      "blue curacao",
      "sprite"
   ],
   "instructions": "Just pour all ingredients in the glass and stir...",
   "measures": [
      "2 cl ",
      "1 cl ",
      "1 cl ",
      "fill with "
   ]
},
 {
   "FIELD1": 133,
   "drinkName": "bellini",
   "dateModified": "2017-09-02 16:52:23",
   "idDrink": 17195,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/eaag491504367543.jpg",
   "glassType": "champagne flute",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "champagne",
      "peach schnapps"
   ],
   "instructions": "Pour peach purée into chilled flute, add sparkling wine. Stir gently.",
   "measures": [
      "6 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 134,
   "drinkName": "bellini martini",
   "dateModified": "2017-09-02 22:56:19",
   "idDrink": 16176,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "ice",
      "vodka",
      "peach nectar",
      "peach schnapps",
      "lemon peel"
   ],
   "instructions": "Add ice cubes to shaker.\nAdd vodka.\nAdd peach schnapps.\nAdd peach nectar.\nShake.\nStrain into glass.\nAdd lemon twist peel.",
   "measures": [
      "8 cubes ",
      "3 oz ",
      "1.5 oz ",
      "1.5 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 135,
   "drinkName": "bermuda highball",
   "dateModified": "2015-09-02 16:08:48",
   "idDrink": 11084,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "brandy",
      "gin",
      "dry vermouth",
      "carbonated water",
      "lemon peel"
   ],
   "instructions": "Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 136,
   "drinkName": "berry deadly",
   "dateModified": "2016-04-28 19:17:57",
   "idDrink": 12876,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xqutpr1461867477.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "everclear",
      "wine",
      "orange juice",
      "kool-aid"
   ],
   "instructions": "Add all ingredients to large bowl. Stir gently. Serve chilled.",
   "measures": [
      "2 pint ",
      "1 bottle boone strawberry hill ",
      "1/2 gal ",
      "1 gal tropical berry "
   ]
},
 {
   "FIELD1": 137,
   "drinkName": "between the sheets",
   "dateModified": "2017-09-02 11:32:26",
   "idDrink": 17184,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/of1rj41504348346.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "brandy",
      "light rum",
      "triple sec",
      "lemon juice"
   ],
   "instructions": "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 138,
   "drinkName": "bible belt",
   "dateModified": "2017-08-24 09:34:35",
   "idDrink": 16986,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/6bec6v1503563675.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "southern comfort",
      "triple sec",
      "lime",
      "sour mix"
   ],
   "instructions": "Mix all ingredients, and pour over ice.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "2 wedges ",
      "2 oz "
   ]
},
 {
   "FIELD1": 139,
   "drinkName": "big red",
   "dateModified": "2015-09-03 03:41:56",
   "idDrink": 13222,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yqwuwu1441248116.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "irish cream",
      "goldschlager"
   ],
   "instructions": "Pour ingredients into 1 ounce shot glass",
   "measures": [
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 140,
   "drinkName": "black & tan",
   "dateModified": "2016-02-03 14:50:17",
   "idDrink": 13282,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
   "glassType": "pint glass",
   "ingredients": [
      "ale",
      "guinness stout"
   ],
   "instructions": "Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the name Black & Tan.",
   "measures": [
      "1 part bass pale ",
      "1 part "
   ]
},
 {
   "FIELD1": 141,
   "drinkName": "black forest shake",
   "dateModified": "2016-09-01 10:01:45",
   "idDrink": 15951,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "ice",
      "chocolate syrup",
      "cherry brandy",
      "vodka",
      "milk"
   ],
   "instructions": "In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.",
   "measures": [
      " cubes\n"
   ]
},
 {
   "FIELD1": 142,
   "drinkName": "black russian",
   "dateModified": "2017-09-02 16:54:49",
   "idDrink": 11102,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2k5gbb1504367689.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "coffee liqueur",
      "vodka"
   ],
   "instructions": "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
   "measures": [
      "3/4 oz ",
      "1 1/2 oz "
   ]
},
 {
   "FIELD1": 143,
   "drinkName": "black and brown",
   "dateModified": "2016-08-31 19:41:39",
   "idDrink": 16403,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wwuvxv1472668899.jpg",
   "glassType": "beer pilsner",
   "ingredients": [
      "guinness stout",
      "root beer"
   ],
   "instructions": "CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.",
   "measures": [
      "1/2 ",
      "1/2 "
   ]
},
 {
   "FIELD1": 144,
   "drinkName": "blackthorn",
   "dateModified": "2015-09-02 16:57:10",
   "idDrink": 11106,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xvswvy1441209430.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sweet vermouth",
      "sloe gin",
      "lemon peel"
   ],
   "instructions": "Stir sloe gin and vermouth with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
   "measures": [
      "1 oz ",
      "1 1/2 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 145,
   "drinkName": "bleeding surgeon",
   "dateModified": "2016-09-01 09:38:38",
   "idDrink": 16295,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "dark rum",
      "orange",
      "surge",
      "cranberry juice"
   ],
   "instructions": "Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.",
   "measures": [
      "1 shot ",
      "1 slice ",
      "1/2 glass ",
      "1/2 glass "
   ]
},
 {
   "FIELD1": 146,
   "drinkName": "blind russian",
   "dateModified": "2016-09-01 10:00:08",
   "idDrink": 14356,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wxuqvr1472720408.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "bailey's irish cream",
      "godiva liqueur",
      "kahlua",
      "butterscotch schnapps",
      "milk"
   ],
   "instructions": "Fill glass with ice. Add all liquers. Add milk. shake.",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "3/4 oz ",
      "1/2 oz ",
      "to fill\n"
   ]
},
 {
   "FIELD1": 147,
   "drinkName": "bloody maria",
   "dateModified": "2017-09-02 22:57:41",
   "idDrink": 11112,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "tequila",
      "tomato juice",
      "lemon juice",
      "tabasco sauce",
      "celery salt",
      "lemon"
   ],
   "instructions": "Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
   "measures": [
      "1 oz ",
      "2 oz ",
      "1 dash ",
      "1 dash ",
      "1 dash ",
      "1 slice "
   ]
},
 {
   "FIELD1": 148,
   "drinkName": "bloody mary",
   "dateModified": "2015-08-18 15:09:14",
   "idDrink": 11113,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uyquuu1439906954.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "vodka",
      "tomato juice",
      "lemon juice",
      "worcestershire sauce",
      "tabasco sauce",
      "lime"
   ],
   "instructions": "Stirring gently, pour all ingredients into highball glass. Garnish.",
   "measures": [
      "1 1/2 oz ",
      "3 oz ",
      "1 dash ",
      "1/2 tsp ",
      "2-3 drops ",
      "1 wedge "
   ]
},
 {
   "FIELD1": 149,
   "drinkName": "blue lagoon",
   "dateModified": "2017-09-02 22:58:25",
   "idDrink": 11117,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vak0e51504389504.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "blue curacao",
      "lemonade",
      "cherry"
   ],
   "instructions": "Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve.",
   "measures": [
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 150,
   "drinkName": "blue margarita",
   "dateModified": "2015-08-18 14:51:53",
   "idDrink": 11118,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "tequila",
      "blue curacao",
      "lime juice",
      "salt"
   ],
   "instructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1 oz ",
      "coarse "
   ]
},
 {
   "FIELD1": 151,
   "drinkName": "blue mountain",
   "dateModified": "2015-09-02 17:04:13",
   "idDrink": 11119,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vsxssp1441209853.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "añejo rum",
      "tia maria",
      "vodka",
      "orange juice",
      "lemon juice"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass alomst filled with ice cubes.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1 oz ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 152,
   "drinkName": "bluebird",
   "dateModified": "2015-09-02 17:06:11",
   "idDrink": 11120,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vxypsq1441209971.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "triple sec",
      "blue curacao",
      "bitters",
      "maraschino cherry",
      "lemon peel"
   ],
   "instructions": "In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "2 dashes ",
      "1 ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 153,
   "drinkName": "bob marley",
   "dateModified": "2016-10-22 13:51:04",
   "idDrink": 13395,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "midori melon liqueur",
      "jägermeister",
      "goldschlager"
   ],
   "instructions": "Layer in a 2 oz shot glass or pony glass",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 154,
   "drinkName": "bobby burns cocktail",
   "dateModified": "2017-01-14 16:33:28",
   "idDrink": 11121,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/km6se51484411608.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sweet vermouth",
      "scotch",
      "benedictine",
      "lemon peel"
   ],
   "instructions": "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 1/2 oz ",
      "1 1/4 tsp ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 155,
   "drinkName": "boomerang",
   "dateModified": "2017-09-02 22:59:12",
   "idDrink": 11124,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "dry vermouth",
      "bitters",
      "maraschino liqueur",
      "maraschino cherry"
   ],
   "instructions": "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "2 dashes ",
      "1/2 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 156,
   "drinkName": "boozy snickers milkshake",
   "dateModified": "2017-09-07 12:36:04",
   "idDrink": 17221,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/861tzm1504784164.jpg",
   "glassType": "mason jar",
   "ingredients": [
      "vanilla ice-cream",
      "milk",
      "godiva liqueur",
      "whipped cream",
      "caramel sauce",
      "chocolate sauce",
      "mini-snickers bars"
   ],
   "instructions": "Place the snickers bars in a plastic bag and roll over them with a rolling pin until crushed. Add crushed snickers pieces, ice cream, milk, caramel sauce, chocolate sauce, and chocolate liquor to a blender. Blend until shake is thick and frothy. Pour into glasses and top with chocolate liquor and whip cream.",
   "measures": [
      "3 cups ",
      "1 cup ",
      "1/2 cup ",
      "for topping",
      "4 tablespoons\n",
      "4 tablespoons\n",
      "15\n"
   ]
},
 {
   "FIELD1": 157,
   "drinkName": "bora bora",
   "dateModified": "2016-09-06 23:43:31",
   "idDrink": 12572,
   "type": "non alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "pineapple juice",
      "passion fruit juice",
      "lemon juice",
      "grenadine"
   ],
   "instructions": "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",
   "measures": [
      "10 cl ",
      "6 cl ",
      "1 cl ",
      "1 cl "
   ]
},
 {
   "FIELD1": 158,
   "drinkName": "boston sidecar",
   "dateModified": "2017-09-02 16:26:02",
   "idDrink": 11128,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "light rum",
      "brandy",
      "triple sec",
      "lime"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "3/4 oz ",
      "juice of 1/2 "
   ]
},
 {
   "FIELD1": 159,
   "drinkName": "boston sour",
   "dateModified": "2017-09-02 16:28:20",
   "idDrink": 11129,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/kxlgbi1504366100.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "blended whiskey",
      "lemon",
      "powdered sugar",
      "egg white",
      "lemon",
      "cherry"
   ],
   "instructions": "Shake juice of lemon, powdered sugar, blended whiskey, and egg white with cracked ice and strain into a whiskey sour glass. Add the slice of lemon, top with the cherry, and serve.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "1 ",
      "1 slice ",
      "1 "
   ]
},
 {
   "FIELD1": 160,
   "drinkName": "bourbon sling",
   "dateModified": "2017-09-02 16:31:00",
   "idDrink": 11146,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3s36ql1504366260.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "sugar",
      "water",
      "lemon juice",
      "bourbon",
      "lemon peel"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and bourbon. Shake well. Strain well. Strain into a highball glass. Garnish with the lemon twist.",
   "measures": [
      "1 tsp superfine ",
      "2 tsp ",
      "1 oz ",
      "2 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 161,
   "drinkName": "bourbon sour",
   "dateModified": "2017-09-02 16:31:58",
   "idDrink": 11147,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "bourbon",
      "lemon juice",
      "sugar",
      "orange",
      "maraschino cherry"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1/2 tsp superfine ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 162,
   "drinkName": "boxcar",
   "dateModified": "2017-09-02 16:32:57",
   "idDrink": 11149,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "gin",
      "triple sec",
      "lemon juice",
      "grenadine",
      "egg white"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1 tsp ",
      "1/2 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 163,
   "drinkName": "brain fart",
   "dateModified": "2017-09-02 23:01:42",
   "idDrink": 17120,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "everclear",
      "vodka",
      "mountain dew",
      "surge",
      "lemon juice",
      "rum"
   ],
   "instructions": "Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and soda's are very cold.",
   "measures": [
      "1 fifth ",
      "1 fifth smirnoff red label ",
      "2 l ",
      "2 l ",
      "1 small bottle ",
      "1 pint "
   ]
},
 {
   "FIELD1": 164,
   "drinkName": "brainteaser",
   "dateModified": "2016-04-28 18:54:26",
   "idDrink": 13405,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ruywtq1461866066.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "sambuca",
      "erin cream",
      "advocaat"
   ],
   "instructions": "layered erin first, then sambuca and then avocart(should sit in middle of other two. To drink: use a straw to suck up avocart then shot the rest and then suck fumes up through straw.",
   "measures": [
      "30 ml white ",
      "30 ml ",
      "5 ml "
   ]
},
 {
   "FIELD1": 165,
   "drinkName": "bramble",
   "dateModified": "2017-09-02 18:15:26",
   "idDrink": 17210,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/lvzl3r1504372526.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "gin",
      "lemon juice",
      "sugar syrup",
      "creme de mure"
   ],
   "instructions": "Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.",
   "measures": [
      "4 cl",
      "1.5 cl",
      "1 cl",
      "1.5 cl"
   ]
},
 {
   "FIELD1": 166,
   "drinkName": "brandon and will's coke float",
   "dateModified": "2016-09-01 09:39:45",
   "idDrink": 16447,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg",
   "glassType": "beer mug",
   "ingredients": [
      "vanilla ice-cream",
      "coca-cola",
      "bourbon"
   ],
   "instructions": "Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker's Mark. Then, pour in coke. Gently stir and enjoy.",
   "measures": [
      "2 scoops ",
      "1 can ",
      "2 oz "
   ]
},
 {
   "FIELD1": 167,
   "drinkName": "brandy alexander",
   "dateModified": "2017-01-02 20:09:06",
   "idDrink": 11016,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tvqxvr1483387746.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "brandy",
      "creme de cacao",
      "light cream",
      "nutmeg"
   ],
   "instructions": "Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
   "measures": [
      "1 oz ",
      "1 oz white ",
      "1 oz "
   ]
},
 {
   "FIELD1": 168,
   "drinkName": "brandy cobbler",
   "dateModified": "2015-08-13 12:37:16",
   "idDrink": 11157,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vtvutr1439465836.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "sugar",
      "club soda",
      "lemon",
      "brandy",
      "maraschino cherry",
      "orange"
   ],
   "instructions": "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the brandy. Stir well. Garnish with the cherry and the orange and lemon slices.",
   "measures": [
      "1 tsp superfine ",
      "3 oz ",
      "1 ",
      "2 oz ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 169,
   "drinkName": "brandy flip",
   "dateModified": "2017-09-02 16:34:21",
   "idDrink": 11164,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/6ty09d1504366461.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "brandy",
      "egg",
      "sugar",
      "light cream",
      "nutmeg"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
   "measures": [
      "2 oz ",
      "1 whole ",
      "1 tsp superfine ",
      "1/2 oz ",
      "1/8 tsp grated "
   ]
},
 {
   "FIELD1": 170,
   "drinkName": "brandy sour",
   "dateModified": "2017-09-02 16:35:40",
   "idDrink": 11170,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tu0mts1504366540.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "brandy",
      "lemon",
      "powdered sugar",
      "lemon",
      "cherry"
   ],
   "instructions": "Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1/2 tsp ",
      "1/2 slice ",
      "1 "
   ]
},
 {
   "FIELD1": 171,
   "drinkName": "brave bull shooter",
   "dateModified": "2016-09-08 15:23:45",
   "idDrink": 13068,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "tequila",
      "tabasco sauce"
   ],
   "instructions": "Pour Tabasco into bottom of shot glass and fill with tequila.",
   "measures": [
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 172,
   "drinkName": "bruce's puce",
   "dateModified": "2016-09-08 15:22:38",
   "idDrink": 13066,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/svsvqv1473344558.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "grenadine",
      "kahlua",
      "bailey's irish cream"
   ],
   "instructions": "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just like chocolate milk.(Really!)",
   "measures": [
      "\n"
   ]
},
 {
   "FIELD1": 173,
   "drinkName": "bruised heart",
   "dateModified": "2017-08-24 09:43:29",
   "idDrink": 16998,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "vodka",
      "chambord raspberry liqueur",
      "peachtree schnapps",
      "cranberry juice"
   ],
   "instructions": "Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 174,
   "drinkName": "bubble gum",
   "dateModified": "2016-07-18 22:53:03",
   "idDrink": 14730,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "vodka",
      "banana liqueur",
      "orange juice",
      "peach schnapps"
   ],
   "instructions": "Layer in order into a shot glass.",
   "measures": [
      "1/4 ",
      "1/4 ",
      "1/4 ",
      "1/4 "
   ]
},
 {
   "FIELD1": 175,
   "drinkName": "buccaneer",
   "dateModified": "2015-09-03 03:57:03",
   "idDrink": 17035,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/upvtyt1441249023.jpg",
   "glassType": "beer pilsner",
   "ingredients": [
      "corona",
      "bacardi limon"
   ],
   "instructions": "Pour the corona into an 18oz beer glass pour the bacardi limon into the beer stir very gently",
   "measures": [
      "1 ",
      "1 shot "
   ]
},
 {
   "FIELD1": 176,
   "drinkName": "bumble bee #1",
   "dateModified": "2016-04-28 18:59:38",
   "idDrink": 14538,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "bailey's irish cream",
      "kahlua",
      "sambuca"
   ],
   "instructions": "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
   "measures": [
      "1/3 oz ",
      "1/3 oz ",
      "1/3 oz "
   ]
},
 {
   "FIELD1": 177,
   "drinkName": "butter baby",
   "dateModified": "2017-09-07 12:29:23",
   "idDrink": 17220,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/1xhjk91504783763.jpg",
   "glassType": "beer mug",
   "ingredients": [
      "vanilla ice-cream",
      "butterscotch schnapps",
      "milk",
      "vodka"
   ],
   "instructions": "Blend together in a blender. Serve in a chilled Beer mug with Fresh Blueberries and caramel for topping.",
   "measures": [
      "2 scoops ",
      "1 part ",
      "full glass ",
      "2 parts "
   ]
},
 {
   "FIELD1": 178,
   "drinkName": "cafe savoy",
   "dateModified": "2015-09-03 03:35:11",
   "idDrink": 14181,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqwptt1441247711.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "coffee",
      "milk",
      "triple sec",
      "brandy"
   ],
   "instructions": "Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.",
   "measures": [
      "\n",
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 179,
   "drinkName": "caipirinha",
   "dateModified": "2016-07-21 09:42:01",
   "idDrink": 11202,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xyrppt1469090521.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "sugar",
      "lime",
      "cachaca"
   ],
   "instructions": "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça.",
   "measures": [
      "2 tsp",
      "1 ",
      "2 1/2 oz "
   ]
},
 {
   "FIELD1": 180,
   "drinkName": "caipirissima",
   "dateModified": "2017-08-24 10:05:15",
   "idDrink": 13206,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "lime",
      "sugar",
      "white rum",
      "ice"
   ],
   "instructions": "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
   "measures": [
      "2 ",
      "2 tblsp ",
      "2-3 oz ",
      "crushed "
   ]
},
 {
   "FIELD1": 181,
   "drinkName": "california lemonade",
   "dateModified": "2016-08-28 18:47:04",
   "idDrink": 11205,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qvvxwy1472406424.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "blended whiskey",
      "lemon",
      "lime",
      "powdered sugar",
      "grenadine",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.",
   "measures": [
      "2 oz ",
      "juice of 1 ",
      "juice of 1 ",
      "1 tblsp ",
      "1/4 tsp "
   ]
},
 {
   "FIELD1": 182,
   "drinkName": "california root beer",
   "dateModified": "2016-09-01 09:45:26",
   "idDrink": 14282,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rsxuyr1472719526.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "kahlua",
      "galliano",
      "soda water"
   ],
   "instructions": "Put Kahlua and Galliano in highball glass fill with soda",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "fill with "
   ]
},
 {
   "FIELD1": 183,
   "drinkName": "campari beer",
   "dateModified": "2015-09-03 03:58:50",
   "idDrink": 16047,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xsqrup1441249130.jpg",
   "glassType": "beer mug",
   "ingredients": [
      "lager",
      "campari"
   ],
   "instructions": "Use a 15 oz glass. Add Campari first. Fill with beer.",
   "measures": [
      "1 bottle ",
      "1 1/2 cl "
   ]
},
 {
   "FIELD1": 184,
   "drinkName": "caribbean boilermaker",
   "dateModified": "2016-02-03 15:01:06",
   "idDrink": 17065,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg",
   "glassType": "beer pilsner",
   "ingredients": [
      "corona",
      "light rum"
   ],
   "instructions": "Pour the Corona into an 18oz beer glass pour the rum into the beer.",
   "measures": [
      "1 bottle ",
      "1 shot "
   ]
},
 {
   "FIELD1": 185,
   "drinkName": "caribbean orange liqueur",
   "dateModified": "2016-08-31 19:19:30",
   "idDrink": 12796,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "orange",
      "vodka",
      "sugar"
   ],
   "instructions": "Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.",
   "measures": [
      "3 large ",
      "3 cups ",
      "1 1/3 cup superfine "
   ]
},
 {
   "FIELD1": 186,
   "drinkName": "casino",
   "dateModified": "2017-09-02 11:36:19",
   "idDrink": 17185,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "maraschino liqueur",
      "lemon juice",
      "orange bitters",
      "cherry"
   ],
   "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.",
   "measures": [
      "2 oz ",
      "1/4 tsp ",
      "1/4 tsp ",
      "2 dashes ",
      "1 "
   ]
},
 {
   "FIELD1": 187,
   "drinkName": "casino royale",
   "dateModified": "2017-09-02 16:38:19",
   "idDrink": 11224,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "gin",
      "lemon juice",
      "maraschino liqueur",
      "orange bitters",
      "egg yolk"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "1 tsp ",
      "1 dash ",
      "1 "
   ]
},
 {
   "FIELD1": 188,
   "drinkName": "castillian hot chocolate",
   "dateModified": "2017-02-20 15:06:36",
   "idDrink": 12730,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "cocoa powder",
      "sugar",
      "cornstarch",
      "water",
      "milk"
   ],
   "instructions": "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
   "measures": [
      "1/2 cup ",
      "1 cup ",
      "7 tsp ",
      "1/2 cup ",
      "1 qt "
   ]
},
 {
   "FIELD1": 189,
   "drinkName": "champagne cocktail",
   "dateModified": "2017-09-02 16:40:11",
   "idDrink": 11227,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ehh5df1504366811.jpg",
   "glassType": "champagne flute",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "champagne",
      "sugar",
      "bitters",
      "lemon peel",
      "cognac"
   ],
   "instructions": "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.",
   "measures": [
      "chilled ",
      "1 piece ",
      "2 dashes ",
      "1 twist of ",
      "1 dash"
   ]
},
 {
   "FIELD1": 190,
   "drinkName": "cherry electric lemonade",
   "dateModified": "2015-12-28 10:45:48",
   "idDrink": 17174,
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg",
   "glassType": "pint glass",
   "ingredients": [
      "gin",
      "tequila",
      "vodka",
      "white rum",
      "triple sec",
      "cherry grenadine",
      "sweet and sour",
      "club soda"
   ],
   "instructions": "Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally.",
   "measures": [
      "1 oz",
      "1 oz",
      "1 oz",
      "1 oz",
      "1 oz",
      "1 oz",
      "1 oz",
      "3 oz"
   ]
},
 {
   "FIELD1": 191,
   "drinkName": "cherry rum",
   "dateModified": "2015-09-06 16:47:04",
   "idDrink": 11239,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/twsuvr1441554424.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "light rum",
      "cherry brandy",
      "light cream"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/4 oz ",
      "1 1/2 tsp ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 192,
   "drinkName": "chicago fizz",
   "dateModified": "2015-09-02 16:29:23",
   "idDrink": 11242,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qwvwqr1441207763.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "light rum",
      "port",
      "lemon",
      "powdered sugar",
      "egg white",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 193,
   "drinkName": "chocolate beverage",
   "dateModified": "2017-02-20 15:06:26",
   "idDrink": 12732,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "milk",
      "chocolate",
      "cinnamon",
      "egg"
   ],
   "instructions": "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
   "measures": [
      "6 cups ",
      "3 oz mexican ",
      "1 tsp powdered ",
      "3 "
   ]
},
 {
   "FIELD1": 194,
   "drinkName": "chocolate black russian",
   "dateModified": "2016-09-01 10:07:59",
   "idDrink": 11243,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "kahlua",
      "vodka",
      "chocolate ice-cream"
   ],
   "instructions": "Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "5 oz "
   ]
},
 {
   "FIELD1": 195,
   "drinkName": "chocolate drink",
   "dateModified": "2017-02-20 15:06:20",
   "idDrink": 12734,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "chocolate",
      "milk",
      "water"
   ],
   "instructions": "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
   "measures": [
      "125 gr",
      "3/4 l "
   ]
},
 {
   "FIELD1": 196,
   "drinkName": "chocolate milk",
   "dateModified": "2017-09-08 17:49:59",
   "idDrink": 13328,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/j6q35t1504889399.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "chocolate liqueur",
      "milk",
      "amaretto"
   ],
   "instructions": "Put the milk in the bottom, pour the Liquer on top and add the dash of amaretto. Do not mix. SLAM IT!",
   "measures": [
      "1/2 shot ",
      "1/2 shot ",
      "1 dash "
   ]
},
 {
   "FIELD1": 197,
   "drinkName": "chocolate monkey",
   "dateModified": "2016-07-18 21:53:32",
   "idDrink": 15615,
   "type": "optional alcohol",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tyvpxt1468875212.jpg",
   "glassType": "parfait glass",
   "ingredients": [
      "banana liqueur",
      "creme de cacao",
      "chocolate ice-cream",
      "chocolate syrup",
      "chocolate milk",
      "whipped cream",
      "cherry",
      "banana"
   ],
   "instructions": "blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.",
   "measures": [
      "1 shot ",
      "2 shots ",
      "2 scoops ",
      "1 oz ",
      "4 oz ",
      "1 ",
      "1 ",
      "1 piece "
   ]
},
 {
   "FIELD1": 198,
   "drinkName": "citrus coke",
   "dateModified": "2016-11-18 12:46:54",
   "idDrink": 17135,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "bacardi limon",
      "coca-cola"
   ],
   "instructions": "Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!",
   "measures": [
      "1 part ",
      "2 parts "
   ]
},
 {
   "FIELD1": 199,
   "drinkName": "city slicker",
   "dateModified": "2017-09-02 16:42:29",
   "idDrink": 11251,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/dazdlg1504366949.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "brandy",
      "triple sec",
      "lemon juice"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 200,
   "drinkName": "classic old-fashioned",
   "dateModified": "2017-09-02 16:29:33",
   "idDrink": 11145,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/anhof61504366173.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "bitters",
      "water",
      "sugar",
      "bourbon",
      "orange",
      "maraschino cherry"
   ],
   "instructions": "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick.",
   "measures": [
      "3 dashes ",
      "1 tsp ",
      "1 ",
      "3 oz ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 201,
   "drinkName": "clove cocktail",
   "dateModified": "2016-04-28 19:19:39",
   "idDrink": 11255,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qxvtst1461867579.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sweet vermouth",
      "sloe gin",
      "wine"
   ],
   "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "1/2 oz muscatel "
   ]
},
 {
   "FIELD1": 202,
   "drinkName": "clover club",
   "dateModified": "2017-09-02 11:38:35",
   "idDrink": 17186,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "grenadine",
      "lemon",
      "egg white"
   ],
   "instructions": "Dry shake ingredients to emulsify, add ice, shake and served straight up.",
   "measures": [
      "1 1/2 oz ",
      "2 tsp ",
      "juice of 1/2 ",
      "1 "
   ]
},
 {
   "FIELD1": 203,
   "drinkName": "coffee liqueur",
   "dateModified": "2015-09-03 05:17:31",
   "idDrink": 12798,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ryvtsu1441253851.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "coffee",
      "vanilla extract",
      "sugar",
      "vodka",
      "water"
   ],
   "instructions": "Combine coffee, sugar and water. Simmer 1 hour and let cool. Add vanilla and vodka. Age in sealed jar 2 to 3 weeks.",
   "measures": [
      "10 tblsp instant ",
      "4 tblsp ",
      "2 1/2 cups ",
      "1 qt ",
      "2 1/2 cups "
   ]
},
 {
   "FIELD1": 204,
   "drinkName": "coffee-vodka",
   "dateModified": "2016-08-31 19:18:14",
   "idDrink": 12800,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qvrrvu1472667494.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "water",
      "sugar",
      "coffee",
      "vanilla",
      "vodka",
      "caramel coloring"
   ],
   "instructions": "Boil water and sugar until dissolved. Turn off heat. Slowly add dry instant coffee and continue stirring. Add a chopped vanilla bean to the vodka, then combine the cooled sugar syrup and coffee solution with the vodka. Cover tightly and shake vigorously each day for 3 weeks. Strain and filter. Its also best to let the sugar mixture cool completely so the vodka won't evaporate when its added. If you like a smoother feel to the liqueur you can add about 1 teaspoon of glycerine to the finished product.",
   "measures": [
      "2 cups ",
      "2 cups white ",
      "1/2 cup instant ",
      "1/2 ",
      "1 1/2 cup "
   ]
},
 {
   "FIELD1": 205,
   "drinkName": "coke and drops",
   "dateModified": "2016-09-01 09:42:47",
   "idDrink": 17108,
   "type": "non alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "coca-cola",
      "lemon juice"
   ],
   "instructions": "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
   "measures": [
      "1 dl ",
      "7 drops "
   ]
},
 {
   "FIELD1": 206,
   "drinkName": "cosmopolitan",
   "dateModified": "2017-09-02 17:06:02",
   "idDrink": 17196,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "absolut citron",
      "lime juice",
      "cointreau",
      "cranberry juice"
   ],
   "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
   "measures": [
      "1 1/4 oz ",
      "1/4 oz ",
      "1/4 oz ",
      "1/4 cup "
   ]
},
 {
   "FIELD1": 207,
   "drinkName": "cosmopolitan martini",
   "dateModified": "2015-08-18 15:19:40",
   "idDrink": 14133,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "cointreau",
      "vodka",
      "lime",
      "cranberry juice"
   ],
   "instructions": "Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass.",
   "measures": [
      "1/2 oz ",
      "1 oz ",
      "juice of 1/2 ",
      "1 splash "
   ]
},
 {
   "FIELD1": 208,
   "drinkName": "cranberry cordial",
   "dateModified": "2016-08-31 19:16:32",
   "idDrink": 12802,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qtspsx1472667392.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "cranberries",
      "sugar",
      "light rum"
   ],
   "instructions": "Place the chopped cranberries in a 2 liter jar that has a tight-fitting lid. Add the sugar and rum. Adjust the lid securely and place the jar in a cool, dark place. Invert the jar and shake it every day for six weeks. Strain the cordial into bottles and seal with corks.",
   "measures": [
      "1/2 kg chopped ",
      "3/4 l ",
      "1/2 l "
   ]
},
 {
   "FIELD1": 209,
   "drinkName": "cranberry punch",
   "dateModified": "2017-09-02 22:54:08",
   "idDrink": 12890,
   "type": "non alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "cranberry juice",
      "sugar",
      "pineapple juice",
      "almond flavoring",
      "ginger ale"
   ],
   "instructions": "Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold.",
   "measures": [
      "4 cups ",
      "1 1/2 cup ",
      "4 cups ",
      "1 tblsp ",
      "2 qt "
   ]
},
 {
   "FIELD1": 210,
   "drinkName": "cream soda",
   "dateModified": "2016-11-15 11:29:27",
   "idDrink": 14608,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yqstxr1479209367.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "spiced rum",
      "ginger ale"
   ],
   "instructions": "Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.",
   "measures": [
      "1 oz "
   ]
},
 {
   "FIELD1": 211,
   "drinkName": "creme de menthe",
   "dateModified": "2015-09-03 05:18:38",
   "idDrink": 12808,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yxswtp1441253918.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "sugar",
      "water",
      "grain alcohol",
      "peppermint extract",
      "food coloring"
   ],
   "instructions": "Bring sugar and water to a boil and simmer for 10 minutes. Cool. Add the remaining ingredients and stir. Cover and let ripen for 1 month.",
   "measures": [
      "8 cups ",
      "6 cups ",
      "1 pint ",
      "1 oz pure ",
      "1 tblsp green "
   ]
},
 {
   "FIELD1": 212,
   "drinkName": "cuba libra",
   "dateModified": "2017-09-02 22:44:56",
   "idDrink": 13751,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "dark rum",
      "lime",
      "coca-cola",
      "ice"
   ],
   "instructions": "Fill tall glass with ice cubes. Add rum. Rub cut edge of lime on rim of glass then squeeze juice into glass. Fill with Coca-Cola. Garnish with lime slice. Enjoy!",
   "measures": [
      "1-2 shot ",
      "squeeze ",
      "fill with "
   ]
},
 {
   "FIELD1": 213,
   "drinkName": "cuba libre",
   "dateModified": "2016-09-06 23:41:03",
   "idDrink": 11288,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uuxsrr1473201663.jpg",
   "glassType": "highball glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "light rum",
      "lime",
      "coca-cola"
   ],
   "instructions": "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
   "measures": [
      "2 oz ",
      "juice of 1/2 "
   ]
},
 {
   "FIELD1": 214,
   "drinkName": "daiquiri",
   "dateModified": "2015-08-18 15:06:37",
   "idDrink": 11291,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/usuuur1439906797.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "light rum",
      "lime",
      "powdered sugar"
   ],
   "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
   "measures": [
      "1 1/2 oz ",
      "juice of 1/2 ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 215,
   "drinkName": "damned if you do",
   "dateModified": "2017-08-24 09:58:26",
   "idDrink": 13194,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "whiskey",
      "hot damn"
   ],
   "instructions": "Pour into shot glass. Put in mouth. Repeat as deemed necessary.",
   "measures": [
      "0.75 oz ",
      "0.25 oz "
   ]
},
 {
   "FIELD1": 216,
   "drinkName": "danbooka",
   "dateModified": "2015-09-03 03:07:55",
   "idDrink": 15409,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vurrxr1441246074.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "coffee",
      "everclear"
   ],
   "instructions": "pour it in and mix it.",
   "measures": [
      "3 parts ",
      "1 part "
   ]
},
 {
   "FIELD1": 217,
   "drinkName": "dark caipirinha",
   "dateModified": "2016-08-28 18:40:58",
   "idDrink": 17177,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uwstrx1472406058.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "demerara sugar",
      "lime",
      "cachaca"
   ],
   "instructions": "Muddle the sugar into the lime wedges in an old-fashioned glass.\nFill the glass with ice cubes.\nPour the cachaca into the glass.\nStir well.",
   "measures": [
      "2 tsp ",
      "1",
      "2 1/2 oz"
   ]
},
 {
   "FIELD1": 218,
   "drinkName": "dark and stormy",
   "dateModified": "2017-09-02 18:55:05",
   "idDrink": 17211,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/t1tn0s1504374905.jpg",
   "glassType": "highball glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "dark rum",
      "ginger beer"
   ],
   "instructions": "In a highball glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.",
   "measures": [
      "5 cl",
      "10 cl"
   ]
},
 {
   "FIELD1": 219,
   "drinkName": "darkwood sling",
   "dateModified": "2016-09-01 09:41:43",
   "idDrink": 14482,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sxxsyq1472719303.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "cherry heering",
      "soda water",
      "orange juice",
      "ice"
   ],
   "instructions": "There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.",
   "measures": [
      "1 part ",
      "1 part ",
      "1 part ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 220,
   "drinkName": "derby",
   "dateModified": "2017-09-02 11:45:56",
   "idDrink": 17187,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/i502ra1504349156.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "peach bitters",
      "mint"
   ],
   "instructions": "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
   "measures": [
      "6 cl",
      "2 dashes",
      "2 fresh leaves"
   ]
},
 {
   "FIELD1": 221,
   "drinkName": "diesel",
   "dateModified": "2016-02-03 15:20:52",
   "idDrink": 13128,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sxrrqq1454512852.jpg",
   "glassType": "pint glass",
   "ingredients": [
      "lager",
      "cider",
      "blackcurrant cordial"
   ],
   "instructions": "Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
   "measures": [
      "1/2 pint ",
      "1/2 pint ",
      "1 dash "
   ]
},
 {
   "FIELD1": 222,
   "drinkName": "dirty martini",
   "dateModified": "2017-01-22 11:08:20",
   "idDrink": 17181,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg",
   "glassType": "cocktail glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "vodka",
      "dry vermouth",
      "olive brine",
      "lemon",
      "olive"
   ],
   "instructions": "Pour the vodka, dry vermouth and olive brine into a cocktail shaker with a handful of ice and shake well.\nRub the rim of a martini glass with the wedge of lemon.\nStrain the contents of the cocktail shaker into the glass and add the olive.\nA dirty Martini contains a splash of olive brine or olive juice and is typically garnished with an olive.",
   "measures": [
      "70ml/2fl oz",
      "1 tbsp",
      "2 tbsp",
      "1 wedge",
      "1"
   ]
},
 {
   "FIELD1": 223,
   "drinkName": "dirty nipple",
   "dateModified": "2016-04-28 19:01:49",
   "idDrink": 14466,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vtyqrt1461866508.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "kahlua",
      "sambuca",
      "bailey's irish cream"
   ],
   "instructions": "This is a layered shot - the Bailey's must be on top",
   "measures": [
      "\n"
   ]
},
 {
   "FIELD1": 224,
   "drinkName": "downshift",
   "dateModified": "2017-08-24 09:38:31",
   "idDrink": 16991,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg",
   "glassType": "hurricane glass",
   "ingredients": [
      "fruit punch",
      "sprite",
      "tequila",
      "151 proof rum"
   ],
   "instructions": "Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.",
   "measures": [
      "2 part ",
      "1 part ",
      "2 shots ",
      "float bacardi "
   ]
},
 {
   "FIELD1": 225,
   "drinkName": "dragonfly",
   "dateModified": "2017-09-02 22:51:40",
   "idDrink": 11320,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/lnvbip1504389100.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "gin",
      "ginger ale",
      "lime"
   ],
   "instructions": "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
   "measures": [
      "1 1/2 oz ",
      "4 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 226,
   "drinkName": "drinking chocolate",
   "dateModified": "2017-02-20 15:06:13",
   "idDrink": 12736,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "heavy cream",
      "milk",
      "cinnamon",
      "vanilla",
      "chocolate",
      "whipped cream"
   ],
   "instructions": "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
   "measures": [
      "2 oz ",
      "6-8 oz ",
      "1 stick ",
      "1 ",
      "2 oz finely chopped dark ",
      "fresh "
   ]
},
 {
   "FIELD1": 227,
   "drinkName": "dry rob roy",
   "idDrink": 11324,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/typuyq1439456976.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "scotch",
      "dry vermouth",
      "lemon peel"
   ],
   "instructions": "In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
   "measures": [
      "2 1/2 oz ",
      "1 1/2 tsp ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 228,
   "drinkName": "dubonnet cocktail",
   "dateModified": "2015-08-13 10:12:27",
   "idDrink": 11326,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xxsuwr1439457147.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dubonnet rouge",
      "gin",
      "bitters",
      "lemon peel"
   ],
   "instructions": "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz ",
      "1 dash ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 229,
   "drinkName": "duchamp's punch",
   "dateModified": "2017-01-22 11:31:25",
   "idDrink": 17182,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/g51naw1485084685.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "pisco",
      "lime juice",
      "pineapple syrup",
      "st. germain",
      "angostura bitters",
      "pepper",
      "lavender"
   ],
   "instructions": "Shake all ingredients.\nDouble strain in a chilled double old fashioned glass with abig ice cube.\nGarnish with a couple of lavender sprigs",
   "measures": [
      "5 cl",
      "2.5 cl",
      "2.5 cl",
      "1.5 cl",
      "2 dashes",
      "pinch",
      "2 sprigs"
   ]
},
 {
   "FIELD1": 230,
   "drinkName": "egg cream",
   "dateModified": "2017-01-14 21:47:26",
   "idDrink": 12668,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "chocolate syrup",
      "milk",
      "soda water"
   ],
   "instructions": "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.",
   "measures": [
      "2 tblsp ",
      "6 oz whole ",
      "6 oz "
   ]
},
 {
   "FIELD1": 231,
   "drinkName": "egg nog #4",
   "dateModified": "2016-07-18 22:02:27",
   "idDrink": 12910,
   "type": "optional alcohol",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wpspsy1468875747.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "egg yolk",
      "sugar",
      "milk",
      "light rum",
      "bourbon",
      "vanilla extract",
      "salt",
      "whipping cream",
      "egg white",
      "sugar",
      "nutmeg"
   ],
   "instructions": "In a small mixer bowl beat egg yolks till blended. Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored. Stir in milk, stir in rum, bourbon, vanilla, and salt. Chill thoroughly. Whip cream. Wash beaters well. In a large mixer bowl beat egg whites till soft peaks form. Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites. Serve immediately. Sprinkle nutmeg over each serving. Serve in a punch bowl or another big bowl. NOTE: For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups.",
   "measures": [
      "6 ",
      "1/4 cup ",
      "2 cups ",
      "1/2 cup ",
      "1/2 cup ",
      "1 tsp ",
      "1/4 tsp ",
      "1 cup ",
      "6 ",
      "1/4 cup ",
      "ground "
   ]
},
 {
   "FIELD1": 232,
   "drinkName": "egg nog - healthy",
   "dateModified": "2016-07-18 21:55:08",
   "idDrink": 12916,
   "type": "optional alcohol",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qxuppv1468875308.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "egg",
      "sugar",
      "condensed milk",
      "milk",
      "vanilla extract",
      "rum",
      "nutmeg"
   ],
   "instructions": "Whip egg substitute and sugar together, combine with the two kinds of milk, vanilla, and rum. Mix well. Chill over night. Sprinkle with nutmeg. Makes 6 servings.",
   "measures": [
      "1/2 cup ",
      "3 tblsp ",
      "13 oz skimmed ",
      "3/4 cup skimmed ",
      "1 tsp ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 233,
   "drinkName": "egg-nog - classic cooked",
   "dateModified": "2016-07-18 21:58:25",
   "idDrink": 12914,
   "type": "optional alcohol",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/quxsvt1468875505.jpg",
   "glassType": "pitcher",
   "ingredients": [
      "egg",
      "sugar",
      "salt",
      "milk",
      "vanilla extract"
   ],
   "instructions": "In large saucepan, beat together eggs, sugar and salt, if desired. Stir in 2 cups of the milk. Cook over low heat, stirring constantly, until mixture is thick enough to coat a metal spoon and reaches 160 degrees F. Remove from heat. Stir in remaining 2 cups milk and vanilla. Cover and regfigerate until thoroughly chilled, several hours or overnight. Just before serving, pour into bowl or pitcher. Garnish or add stir-ins, if desired. Choose 1 or several of: Chocolate curls, cinnamon sticks, extracts of flavorings, flavored brandy or liqueur, fruit juice or nectar, ground nutmeg, maraschino cherries, orange slices, peppermint sticks or candy canes, plain brandy, run or whiskey, sherbet or ice-cream, whipping cream, whipped. Serve immediately.",
   "measures": [
      "6 ",
      "1/4 cup ",
      "1/4 tsp ",
      "1 qt ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 234,
   "drinkName": "english highball",
   "dateModified": "2017-09-04 11:09:12",
   "idDrink": 11338,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "brandy",
      "gin",
      "sweet vermouth",
      "carbonated water",
      "lemon peel"
   ],
   "instructions": "Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 235,
   "drinkName": "english rose cocktail",
   "dateModified": "2015-09-02 16:44:57",
   "idDrink": 11339,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "apricot brandy",
      "gin",
      "dry vermouth",
      "grenadine",
      "lemon juice",
      "cherry"
   ],
   "instructions": "Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.",
   "measures": [
      "3/4 oz ",
      "1 1/2 oz ",
      "3/4 oz ",
      "1 tsp ",
      "1/4 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 236,
   "drinkName": "espresso martini",
   "dateModified": "2017-09-02 18:22:31",
   "idDrink": 17212,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
   "glassType": "cocktail glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "vodka",
      "kahlua",
      "sugar syrup"
   ],
   "instructions": "Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass",
   "measures": [
      "5 cl",
      "1 cl",
      "1 dash"
   ]
},
 {
   "FIELD1": 237,
   "drinkName": "fahrenheit 5000",
   "dateModified": "2016-09-08 15:24:52",
   "idDrink": 13070,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tysssx1473344692.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "firewater",
      "absolut peppar",
      "tabasco sauce"
   ],
   "instructions": "Cover bottom of shot glass with Tabasco Sauce and then fill with half Firewater and half Absolut Peppar.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1 dash "
   ]
},
 {
   "FIELD1": 238,
   "drinkName": "flaming dr. pepper",
   "dateModified": "2017-08-24 10:03:04",
   "idDrink": 13202,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "amaretto",
      "vodka",
      "151 proof rum",
      "dr. pepper",
      "beer"
   ],
   "instructions": "Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz bacardi ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 239,
   "drinkName": "flaming lamborghini",
   "dateModified": "2016-04-28 19:03:07",
   "idDrink": 16485,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yywpss1461866587.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "kahlua",
      "sambuca",
      "blue curacao",
      "bailey's irish cream"
   ],
   "instructions": "Pour the Sambuca and Kahlua into the Cocktail Glass and give the drinker a straw. Pour the Baileys and Blue Curacao into two sepsrate shot glasses either side of the cocktail glass. Set light the concotion in the cocktail glass and start to drink through the straw (this drink should be drunk in one) , as the bottom of the glass is reached put out the fire by pouring the Baileys and Blue Curacao into the cocktail glass and keep drinking till it's all gone!!",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 240,
   "drinkName": "flander's flake-out",
   "dateModified": "2016-04-28 19:05:05",
   "idDrink": 13675,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sqvqrx1461866705.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "sambuca",
      "sarsaparilla"
   ],
   "instructions": "Bang 'em both in.",
   "measures": [
      "1/4 glass ",
      "3/4 glass "
   ]
},
 {
   "FIELD1": 241,
   "drinkName": "flying dutchman",
   "dateModified": "2017-09-04 11:12:38",
   "idDrink": 11368,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/akik8t1504519958.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "triple sec"
   ],
   "instructions": "In an old-fashioned glass almost filled with ice cubes, combine the gin and triple sec. Stir well.",
   "measures": [
      "2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 242,
   "drinkName": "flying scotchman",
   "dateModified": "2017-09-04 11:14:00",
   "idDrink": 11369,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/glgrix1504520040.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "scotch",
      "sweet vermouth",
      "bitters",
      "sugar syrup"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 dash ",
      "1/4 tsp "
   ]
},
 {
   "FIELD1": 243,
   "drinkName": "foxy lady",
   "dateModified": "2017-09-04 11:10:44",
   "idDrink": 11375,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "amaretto",
      "creme de cacao",
      "light cream"
   ],
   "instructions": "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "2 oz "
   ]
},
 {
   "FIELD1": 244,
   "drinkName": "frappé",
   "dateModified": "2015-09-03 03:05:28",
   "idDrink": 12768,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "coffee",
      "milk",
      "sugar"
   ],
   "instructions": "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
   "measures": [
      "1/2 cup black ",
      "1/2 cup ",
      "1-2 tsp "
   ]
},
 {
   "FIELD1": 245,
   "drinkName": "freddy kruger",
   "dateModified": "2016-04-28 19:06:38",
   "idDrink": 14688,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "jägermeister",
      "sambuca",
      "vodka"
   ],
   "instructions": "make it an ample size shot!!",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 246,
   "drinkName": "french \"75\"",
   "dateModified": "2015-08-18 15:08:23",
   "idDrink": 11379,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qpvxsx1439906903.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "gin",
      "sugar",
      "lemon juice",
      "champagne",
      "orange",
      "maraschino cherry"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the gin, sugar, and lemon juice. Shake well. Pour into a collins glass. Top with the Champagne. Stir well and garnish with the orange slice and the cherry.",
   "measures": [
      "1 1/2 oz ",
      "2 tsp superfine ",
      "1 1/2 oz ",
      "4 oz chilled ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 247,
   "drinkName": "french 75",
   "dateModified": "2017-09-02 17:10:15",
   "idDrink": 17197,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/4qnyty1504368615.jpg",
   "glassType": "collins glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "gin",
      "sugar",
      "lemon juice",
      "champagne",
      "orange",
      "maraschino cherry"
   ],
   "instructions": "Combine gin, sugar, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.",
   "measures": [
      "1 1/2 oz ",
      "2 tsp superfine ",
      "1 1/2 oz ",
      "4 oz chilled ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 248,
   "drinkName": "french connection",
   "dateModified": "2017-09-02 17:12:39",
   "idDrink": 17198,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/zaqa381504368758.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "cognac",
      "amaretto"
   ],
   "instructions": "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 249,
   "drinkName": "french martini",
   "dateModified": "2017-09-02 18:25:34",
   "idDrink": 17213,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg",
   "glassType": "cocktail glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "vodka",
      "raspberry liqueur",
      "pineapple juice"
   ],
   "instructions": "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from lemon peel onto the drink.",
   "measures": [
      "4.5 cl",
      "1.5 cl",
      "1.5 cl"
   ]
},
 {
   "FIELD1": 250,
   "drinkName": "frisco sour",
   "dateModified": "2017-09-08 16:22:30",
   "idDrink": 11382,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/y39l941504884150.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "blended whiskey",
      "benedictine",
      "lemon",
      "lime",
      "lemon",
      "lime"
   ],
   "instructions": "Shake all ingredients (except slices of lemon and lime) with ice and strain into a whiskey sour glass. Decorate with the slices of lemon and lime and serve.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "juice of 1/4 ",
      "juice of 1/2 ",
      "1 slice ",
      "1 slice "
   ]
},
 {
   "FIELD1": 251,
   "drinkName": "frozen daiquiri",
   "dateModified": "2017-09-08 16:26:53",
   "idDrink": 11387,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7oyrj91504884412.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "light rum",
      "triple sec",
      "lime juice",
      "sugar",
      "cherry",
      "ice"
   ],
   "instructions": "Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 tblsp ",
      "1 1/2 oz ",
      "1 tsp ",
      "1 ",
      "1 cup crushed "
   ]
},
 {
   "FIELD1": 252,
   "drinkName": "frozen mint daiquiri",
   "dateModified": "2017-09-08 16:27:49",
   "idDrink": 11390,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "light rum",
      "lime juice",
      "mint",
      "sugar"
   ],
   "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
   "measures": [
      "2 oz ",
      "1 tblsp ",
      "6 ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 253,
   "drinkName": "frozen pineapple daiquiri",
   "dateModified": "2017-09-06 23:14:57",
   "idDrink": 11391,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/j2mqsb1504736097.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "light rum",
      "pineapple",
      "lime juice",
      "sugar"
   ],
   "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a champagne flute and serve.",
   "measures": [
      "1 1/2 oz ",
      "4 chunks ",
      "1 tblsp ",
      "1/2 tsp "
   ]
},
 {
   "FIELD1": 254,
   "drinkName": "fruit cooler",
   "dateModified": "2017-01-14 21:48:19",
   "idDrink": 12670,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "apple juice",
      "strawberries",
      "sugar",
      "lemon",
      "apple",
      "soda water",
      "ice"
   ],
   "instructions": "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.",
   "measures": [
      "1 can frozen ",
      "1 cup ",
      "2 tblsp ",
      "1 ",
      "1 ",
      "1 l "
   ]
},
 {
   "FIELD1": 255,
   "drinkName": "fruit flip-flop",
   "dateModified": "2017-01-14 21:50:33",
   "idDrink": 12672,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yoghurt",
      "fruit juice"
   ],
   "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
   "measures": [
      "1 cup ",
      "1 cup "
   ]
},
 {
   "FIELD1": 256,
   "drinkName": "fruit shake",
   "dateModified": "2017-01-14 21:51:44",
   "idDrink": 12674,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yoghurt",
      "banana",
      "orange juice",
      "fruit",
      "ice"
   ],
   "instructions": "Blend til smooth.",
   "measures": [
      "1 cup fruit ",
      "1 ",
      "4 oz frozen ",
      "1/2 piece textural ",
      "6 "
   ]
},
 {
   "FIELD1": 257,
   "drinkName": "fuzzy asshole",
   "dateModified": "2016-08-31 19:24:58",
   "idDrink": 15743,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wrvpuu1472667898.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "coffee",
      "peach schnapps"
   ],
   "instructions": "fill coffe mug half full of coffee. Fill the other half full of Peach Schnapps. Stir and drink while hot.",
   "measures": [
      "1/2 ",
      "1/2 "
   ]
},
 {
   "FIELD1": 258,
   "drinkName": "gg",
   "dateModified": "2016-07-18 22:06:00",
   "idDrink": 15997,
   "type": "optional alcohol",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "galliano",
      "ginger ale",
      "ice"
   ],
   "instructions": "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
   "measures": [
      "2 1/2 shots "
   ]
},
 {
   "FIELD1": 259,
   "drinkName": "gagliardo",
   "dateModified": "2017-02-20 15:01:18",
   "idDrink": 12758,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/lyloe91487602877.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "peach vodka",
      "lemon juice",
      "galliano",
      "sirup of roses"
   ],
   "instructions": "Shake well and serve in a cocktail glass. This is a home cocktail of American/Internet Bar del Pozzo, Pavia, Italy.",
   "measures": [
      "5 parts ",
      "3 parts ",
      "1 part ",
      "1 part "
   ]
},
 {
   "FIELD1": 260,
   "drinkName": "gentleman's club",
   "dateModified": "2017-09-08 16:08:56",
   "idDrink": 11396,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ezvy1c1504883335.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "brandy",
      "sweet vermouth",
      "club soda"
   ],
   "instructions": "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 261,
   "drinkName": "gideon's green dinosaur",
   "dateModified": "2017-08-24 09:50:36",
   "idDrink": 17002,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/p5r0tr1503564636.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "dark rum",
      "vodka",
      "triple sec",
      "tequila",
      "melon liqueur",
      "mountain dew"
   ],
   "instructions": "Add all ingredients in collins glass with ice and stir.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "fill with "
   ]
},
 {
   "FIELD1": 262,
   "drinkName": "gin and tonic",
   "dateModified": "2016-08-28 18:37:11",
   "idDrink": 11403,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wtyxvx1472405831.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "gin",
      "tonic water",
      "lime"
   ],
   "instructions": "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
   "measures": [
      "2 oz ",
      "5 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 263,
   "drinkName": "gin cooler",
   "dateModified": "2016-11-10 23:21:49",
   "idDrink": 11407,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wsyrvv1478820109.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "gin",
      "carbonated water",
      "powdered sugar",
      "orange spiral",
      "lemon peel"
   ],
   "instructions": "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.",
   "measures": [
      "2 oz "
   ]
},
 {
   "FIELD1": 264,
   "drinkName": "gin daisy",
   "dateModified": "2016-11-10 23:19:04",
   "idDrink": 11408,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qwxysv1478819943.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "lemon juice",
      "sugar",
      "grenadine",
      "maraschino cherry",
      "orange"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the wine, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1/2 tsp superfine ",
      "1/2 tsp ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 265,
   "drinkName": "gin fizz",
   "dateModified": "2017-09-02 12:29:32",
   "idDrink": 11410,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xhl8q31504351772.jpg",
   "glassType": "highball glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "lemon",
      "powdered sugar",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 266,
   "drinkName": "gin rickey",
   "dateModified": "2017-09-08 16:19:05",
   "idDrink": 17230,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "gin",
      "grenadine",
      "lemon",
      "soda water",
      "lime"
   ],
   "instructions": "Half-fill a tall glass with ice. Mix the gin and Grenadine together and pour over the ice. Add the lime or lemon juice and top off with soda water. Decorate the glass with lime and/or lemon slices.",
   "measures": [
      "2 oz ",
      "1 tsp ",
      "juice of 1/2 ",
      "top up with",
      "garnish"
   ]
},
 {
   "FIELD1": 267,
   "drinkName": "gin sling",
   "dateModified": "2017-09-08 16:10:40",
   "idDrink": 11415,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/h8wmm41504883440.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "lemon",
      "powdered sugar",
      "water",
      "orange peel"
   ],
   "instructions": "Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "1 tsp ",
      "twist of "
   ]
},
 {
   "FIELD1": 268,
   "drinkName": "gin smash",
   "dateModified": "2017-09-08 16:14:16",
   "idDrink": 11416,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/hp41fi1504883656.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "carbonated water",
      "sugar",
      "mint",
      "orange",
      "cherry"
   ],
   "instructions": "Muddle sugar with carbonated water and mint sprigs in an old-fashioned glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1 cube ",
      "4 ",
      "1 slice ",
      "1 "
   ]
},
 {
   "FIELD1": 269,
   "drinkName": "gin sour",
   "dateModified": "2017-09-08 16:12:03",
   "idDrink": 11417,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/mt7l7m1504883523.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "gin",
      "lemon juice",
      "sugar",
      "orange",
      "maraschino cherry"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1/2 tsp superfine ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 270,
   "drinkName": "gin squirt",
   "dateModified": "2017-09-08 16:15:02",
   "idDrink": 11418,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "gin",
      "grenadine",
      "powdered sugar",
      "pineapple",
      "strawberries",
      "carbonated water"
   ],
   "instructions": "Stir gin, grenadine, and powdered sugar with ice and strain into a highball glass over ice cubes. Fill with carbonated water and stir. Decorate with the pineapple chunks and the strawberries and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 tsp ",
      "1 tblsp ",
      "3 chunks ",
      "2 "
   ]
},
 {
   "FIELD1": 271,
   "drinkName": "gin swizzle",
   "dateModified": "2017-09-08 16:20:26",
   "idDrink": 11419,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sybce31504884026.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "lime juice",
      "sugar",
      "gin",
      "bitters",
      "club soda"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
   "measures": [
      "1 1/2 oz ",
      "1 tsp superfine ",
      "2 oz ",
      "1 dash ",
      "3 oz "
   ]
},
 {
   "FIELD1": 272,
   "drinkName": "gin toddy",
   "dateModified": "2017-09-07 22:45:24",
   "idDrink": 11420,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "water",
      "powdered sugar",
      "lemon peel"
   ],
   "instructions": "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
   "measures": [
      "2 oz ",
      "2 tsp ",
      "1/2 tsp ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 273,
   "drinkName": "girl from ipanema",
   "dateModified": "2016-07-21 09:43:53",
   "idDrink": 17175,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xypspq1469090633.jpg",
   "glassType": "wine glass",
   "ingredients": [
      "cachaca",
      "lemon juice",
      "agave syrup",
      "champagne"
   ],
   "instructions": "Add the cachaca, lemon juice and syrup to your boston glass. Add ice and shake until ice cold. Pour into a chilled flute and top-up with Champagne",
   "measures": [
      "25 ml",
      "15 ml",
      "10 ml",
      "top up with"
   ]
},
 {
   "FIELD1": 274,
   "drinkName": "gluehwein",
   "dateModified": "2016-07-18 21:56:58",
   "idDrink": 12944,
   "type": "optional alcohol",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vuxwvt1468875418.jpg",
   "glassType": "irish coffee cup",
   "ingredients": [
      "red wine",
      "water",
      "sugar",
      "cinnamon",
      "cloves",
      "lemon peel"
   ],
   "instructions": "Boil sugar and spices in water, leave in the water for 30 minutes. Strain the spiced water and mix with the wine. Heat slowly until short of boiling temperature. (To remove alcohol, let it boil for a while.) You may add lemon or orange juice to taste. Serve in irish coffee cup.",
   "measures": [
      "1 l ",
      "125 ml ",
      "60 gr ",
      "1 ",
      "3 ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 275,
   "drinkName": "godchild",
   "dateModified": "2017-09-07 22:47:09",
   "idDrink": 11422,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "vodka",
      "amaretto",
      "heavy cream"
   ],
   "instructions": "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 276,
   "drinkName": "godfather",
   "dateModified": "2017-09-02 17:15:28",
   "idDrink": 11423,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/r74uz51504368928.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "scotch",
      "amaretto"
   ],
   "instructions": "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 277,
   "drinkName": "godmother",
   "dateModified": "2017-09-02 17:16:24",
   "idDrink": 11424,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/4889up1504368984.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "vodka",
      "amaretto"
   ],
   "instructions": "Pour vodka and amaretto into an old-fashioned glass over ice and serve.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 278,
   "drinkName": "golden dream",
   "dateModified": "2017-09-02 17:23:45",
   "idDrink": 17199,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qrot6j1504369425.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "galliano",
      "triple sec",
      "orange juice",
      "cream"
   ],
   "instructions": "Shake with cracked ice. Strain into glass and serve.",
   "measures": [
      "2 parts",
      "2 parts",
      "2 parts",
      "1 part"
   ]
},
 {
   "FIELD1": 279,
   "drinkName": "grand blue",
   "dateModified": "2016-09-01 21:29:09",
   "idDrink": 15427,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vsrsqu1472761749.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "malibu rum",
      "peach schnapps",
      "blue curacao",
      "sweet and sour"
   ],
   "instructions": "Serve in an old fashioned glass.",
   "measures": [
      "1 1/2 cl ",
      "1 1/2 cl ",
      "1 1/2 cl ",
      "3 cl "
   ]
},
 {
   "FIELD1": 280,
   "drinkName": "grape lemon pineapple smoothie",
   "dateModified": "2017-02-20 15:13:03",
   "idDrink": 12712,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "grapes",
      "lemon",
      "pineapple"
   ],
   "instructions": "Throw everything into a blender and liquify.",
   "measures": [
      "1 cup ",
      "1/4 ",
      "1/2 "
   ]
},
 {
   "FIELD1": 281,
   "drinkName": "grass skirt",
   "dateModified": "2016-09-14 23:19:46",
   "idDrink": 11433,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "gin",
      "triple sec",
      "pineapple juice",
      "grenadine",
      "pineapple"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the gin, triple sec, pineapple juice, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the pineapple slice.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1 oz ",
      "1/2 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 282,
   "drinkName": "grasshopper",
   "dateModified": "2017-09-02 17:26:53",
   "idDrink": 17200,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/aqm9el1504369613.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "green creme de menthe",
      "creme de cacao",
      "light cream"
   ],
   "instructions": "Pour ingredients into a cocktail shaker with ice. Shake briskly and then strain into a chilled cocktail glass.",
   "measures": [
      "3/4 oz ",
      "3/4 oz white ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 283,
   "drinkName": "green goblin",
   "dateModified": "2016-02-03 14:58:40",
   "idDrink": 13497,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qxprxr1454511520.jpg",
   "glassType": "pint glass",
   "ingredients": [
      "cider",
      "lager",
      "blue curacao"
   ],
   "instructions": "Cider First, Lager then Curacao",
   "measures": [
      "1/2 pint hard ",
      "1/2 pint ",
      "1 shot "
   ]
},
 {
   "FIELD1": 284,
   "drinkName": "grim reaper",
   "dateModified": "2017-09-08 16:06:32",
   "idDrink": 14642,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/kztu161504883192.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "kahlua",
      "151 proof rum",
      "grenadine"
   ],
   "instructions": "Mix Kahlua and 151 in glass. Quickly add ice and pour grenadine over ice to give ice red tint.",
   "measures": [
      "1 oz ",
      "1 oz bacardi ",
      "1 dash "
   ]
},
 {
   "FIELD1": 285,
   "drinkName": "grizzly bear",
   "dateModified": "2017-02-20 14:55:50",
   "idDrink": 12762,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/k6v97f1487602550.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "amaretto",
      "jägermeister",
      "kahlua",
      "milk"
   ],
   "instructions": "Served over ice. Sounds nasty, but tastes great.",
   "measures": [
      "1 part ",
      "1 part ",
      "1 part ",
      "2 1/2 parts "
   ]
},
 {
   "FIELD1": 286,
   "drinkName": "h.d.",
   "dateModified": "2016-08-31 19:26:18",
   "idDrink": 16262,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
   "glassType": "beer mug",
   "ingredients": [
      "whisky",
      "bailey's irish cream",
      "coffee"
   ],
   "instructions": "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
   "measures": [
      "4 cl ",
      "8 cl "
   ]
},
 {
   "FIELD1": 287,
   "drinkName": "happy skipper",
   "dateModified": "2017-02-20 14:54:09",
   "idDrink": 12766,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/42w2g41487602448.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "spiced rum",
      "ginger ale",
      "lime",
      "ice"
   ],
   "instructions": "Pour Captain Morgan's Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime. Tastes like a cream soda. Named for the Gilligan's Island reference (\"The Captain\" *in* \"Ginger\" is a Happy Skipper!)",
   "measures": [
      "1 1/2 cl "
   ]
},
 {
   "FIELD1": 288,
   "drinkName": "harvey wallbanger",
   "dateModified": "2017-09-02 17:28:45",
   "idDrink": 11462,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vg4bva1504369725.jpg",
   "glassType": "collins glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "vodka",
      "galliano",
      "orange juice"
   ],
   "instructions": "Stir the vodka and orange juice with ice in the glass, then float the Galliano on top. Garnish and serve.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "4 oz "
   ]
},
 {
   "FIELD1": 289,
   "drinkName": "havana cocktail",
   "dateModified": "2017-09-08 16:01:40",
   "idDrink": 11470,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/59splc1504882899.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "light rum",
      "pineapple juice",
      "lemon juice"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 290,
   "drinkName": "hawaiian cocktail",
   "dateModified": "2017-09-08 16:03:07",
   "idDrink": 11472,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ujoh9x1504882987.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "triple sec",
      "pineapple juice"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 291,
   "drinkName": "hemingway special",
   "dateModified": "2017-09-02 17:31:28",
   "idDrink": 17201,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/jfcvps1504369888.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "rum",
      "grapefruit juice",
      "maraschino liqueur",
      "lime juice"
   ],
   "instructions": "Pour all ingredients into a shaker with ice. Shake.",
   "measures": [
      "12 parts",
      "8 parts",
      "3 parts",
      "3 parts"
   ]
},
 {
   "FIELD1": 292,
   "drinkName": "herbal flame",
   "dateModified": "2015-09-03 03:09:44",
   "idDrink": 15813,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rrstxv1441246184.jpg",
   "glassType": "mason jar",
   "ingredients": [
      "hot damn",
      "tea"
   ],
   "instructions": "Pour Hot Damn 100 in bottom of a jar or regular glass. Fill the rest of the glass with sweet tea. Stir with spoon, straw, or better yet a cinnamon stick and leave it in.",
   "measures": [
      "5 shots ",
      "very sweet "
   ]
},
 {
   "FIELD1": 293,
   "drinkName": "highland fling cocktail",
   "dateModified": "2017-04-23 20:25:53",
   "idDrink": 11476,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "scotch",
      "sweet vermouth",
      "orange bitters",
      "olive"
   ],
   "instructions": "Stir all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz ",
      "2 dashes ",
      "1 "
   ]
},
 {
   "FIELD1": 294,
   "drinkName": "holloween punch",
   "dateModified": "2017-09-08 17:42:05",
   "idDrink": 12954,
   "type": "non alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "grape juice",
      "carbonated soft drink",
      "sherbet",
      "sherbet"
   ],
   "instructions": "Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still \"bubbles\" in it in the form of sherbet scoops. Looks horrible, tastes just fine.",
   "measures": [
      "\n",
      ", orange\n"
   ]
},
 {
   "FIELD1": 295,
   "drinkName": "homemade kahlua",
   "dateModified": "2015-09-03 05:20:25",
   "idDrink": 17044,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uwtsst1441254025.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "sugar",
      "corn syrup",
      "coffee",
      "vanilla extract",
      "water",
      "vodka"
   ],
   "instructions": "Dissolve sugar in 2 cups of boiling water and add corn syrup. Dissolve the instant coffee in the remaining water. Pour syrup and coffee in a gallon jug. Let it cool. Add vodka and vanilla when cold. For the best result, let the mixture \"mature\" for 4-5 weeks.",
   "measures": [
      "2 1/2 cups ",
      "1 cup ",
      "1 1/2 oz instant ",
      "2 oz ",
      "3 cups boiling ",
      "1 fifth "
   ]
},
 {
   "FIELD1": 296,
   "drinkName": "horse's neck",
   "dateModified": "2017-09-02 17:34:52",
   "idDrink": 17202,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/006k4e1504370092.jpg",
   "glassType": "highball glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "lemon peel",
      "brandy",
      "ginger ale",
      "bitters"
   ],
   "instructions": "Pour brandy and ginger ale directly into highball glass with ice cubes. Stir gently. Garnish with lemon zest. If desired, add dashes of Angostura Bitter.",
   "measures": [
      "1 long strip ",
      "2 oz ",
      "5 oz ",
      "2 dashes "
   ]
},
 {
   "FIELD1": 297,
   "drinkName": "hot chocolate to die for",
   "dateModified": "2017-02-20 15:06:06",
   "idDrink": 12738,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "chocolate",
      "butter",
      "vanilla extract",
      "half-and-half",
      "marshmallows"
   ],
   "instructions": "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
   "measures": [
      "12 oz fine ",
      "1 tsp ",
      "1/2 tsp ",
      "1 cup ",
      "mini "
   ]
},
 {
   "FIELD1": 298,
   "drinkName": "hot creamy bush",
   "dateModified": "2016-08-31 19:27:17",
   "idDrink": 14782,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/spvrtp1472668037.jpg",
   "glassType": "irish coffee cup",
   "ingredients": [
      "irish whiskey",
      "bailey's irish cream",
      "coffee"
   ],
   "instructions": "Combine all ingredients in glass",
   "measures": [
      "1 shot ",
      "3/4 shot ",
      "6 oz hot "
   ]
},
 {
   "FIELD1": 299,
   "drinkName": "ice pick #1",
   "dateModified": "2016-07-21 10:02:06",
   "idDrink": 13539,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ypsrqp1469091726.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "iced tea",
      "lemon juice"
   ],
   "instructions": "Put Vodka in glass fill with iced tea. Stir in lemon to taste.",
   "measures": [
      "1 1/2 oz ",
      "6 oz ",
      "to taste\n"
   ]
},
 {
   "FIELD1": 300,
   "drinkName": "iced coffee",
   "dateModified": "2016-02-03 15:37:35",
   "idDrink": 12770,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "coffee",
      "sugar",
      "water",
      "milk"
   ],
   "instructions": "Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug.",
   "measures": [
      "1/4 cup instant ",
      "1/4 cup ",
      "1/4 cup hot ",
      "4 cups cold "
   ]
},
 {
   "FIELD1": 301,
   "drinkName": "iced coffee fillip",
   "dateModified": "2016-02-03 15:43:43",
   "idDrink": 12772,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sxtxrp1454514223.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "kahlua",
      "coffee"
   ],
   "instructions": "Mix together in a coffee mug and chill before serving.",
   "measures": [
      "2 tsp ",
      "strong cold "
   ]
},
 {
   "FIELD1": 302,
   "drinkName": "imperial cocktail",
   "dateModified": "2017-02-20 15:13:45",
   "idDrink": 12706,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "lime juice",
      "gin",
      "aperol"
   ],
   "instructions": "Shake with ice and strain into cocktail glass.",
   "measures": [
      "4 cl ",
      "2 cl ",
      "4 cl "
   ]
},
 {
   "FIELD1": 303,
   "drinkName": "imperial fizz",
   "dateModified": "2017-09-08 16:29:08",
   "idDrink": 11524,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/zj1usl1504884548.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "light rum",
      "blended whiskey",
      "lemon",
      "powdered sugar",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
   "measures": [
      "1/2 oz ",
      "1 1/2 oz ",
      "juice of 1/2 ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 304,
   "drinkName": "ipamena",
   "dateModified": "2016-07-21 09:49:52",
   "idDrink": 17176,
   "type": "non alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg",
   "glassType": "wine glass",
   "ingredients": [
      "lime",
      "brown sugar",
      "passion fruit juice",
      "ginger ale",
      "ice"
   ],
   "instructions": "Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime",
   "measures": [
      "½",
      "2 tsp",
      "4 cl",
      "top up with",
      "fill"
   ]
},
 {
   "FIELD1": 305,
   "drinkName": "irish coffee",
   "dateModified": "2015-08-18 15:09:59",
   "idDrink": 13971,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sywsqw1439906999.jpg",
   "glassType": "irish coffee cup",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "irish whiskey",
      "coffee",
      "sugar",
      "whipped cream"
   ],
   "instructions": "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
   "measures": [
      "1 1/2 oz ",
      "8 oz ",
      "1 tsp ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 306,
   "drinkName": "irish cream",
   "dateModified": "2017-09-08 16:31:39",
   "idDrink": 12820,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
   "glassType": "irish coffee cup",
   "ingredients": [
      "scotch",
      "half-and-half",
      "condensed milk",
      "coconut syrup",
      "chocolate syrup"
   ],
   "instructions": "Mix scotch and milk. Add half-and-half. Add rest.",
   "measures": [
      "1 cup ",
      "1 1/4 cup ",
      "1 can sweetened ",
      "3 drops ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 307,
   "drinkName": "irish curdling cow",
   "dateModified": "2017-08-24 09:35:30",
   "idDrink": 16987,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yrhutv1503563730.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "bailey's irish cream",
      "bourbon",
      "vodka",
      "orange juice"
   ],
   "instructions": "Pour Irish Cream, Vodka, and Bourbon in a glass. Add some ice and mix in the orange juice.",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "3/4 oz ",
      "2-3 oz "
   ]
},
 {
   "FIELD1": 308,
   "drinkName": "irish russian",
   "dateModified": "2016-02-03 15:18:50",
   "idDrink": 17015,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/swqurw1454512730.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "kahlua",
      "coca-cola",
      "guinness stout"
   ],
   "instructions": "Add the ingredients in the order listed in the recipe. Care must be taken when adding the Guinness to prevent an excess of foam. Do Not add ice.",
   "measures": [
      "1 shot ",
      "1 shot ",
      "1 dash ",
      "fill with "
   ]
},
 {
   "FIELD1": 309,
   "drinkName": "irish spring",
   "dateModified": "2017-09-08 16:33:03",
   "idDrink": 11528,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "irish whiskey",
      "peach brandy",
      "orange juice",
      "sweet and sour",
      "orange",
      "cherry"
   ],
   "instructions": "Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "1 oz ",
      "1 oz ",
      "1 slice ",
      "1 "
   ]
},
 {
   "FIELD1": 310,
   "drinkName": "jack rose cocktail",
   "dateModified": "2015-08-18 15:11:08",
   "idDrink": 11542,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uuqqrv1439907068.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "apple brandy",
      "grenadine",
      "lime"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 tsp ",
      "juice of 1/2 "
   ]
},
 {
   "FIELD1": 311,
   "drinkName": "jack's vanilla coke",
   "dateModified": "2017-09-07 15:08:39",
   "idDrink": 16275,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/kjnt7z1504793319.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "ice",
      "tennessee whiskey",
      "vanilla extract",
      "coca-cola"
   ],
   "instructions": "After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.",
   "measures": [
      "4-5 ",
      "2 oz ",
      "1 tsp ",
      "10-12 oz "
   ]
},
 {
   "FIELD1": 312,
   "drinkName": "jackhammer",
   "dateModified": "2017-09-02 22:48:16",
   "idDrink": 13847,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/9von5j1504388896.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "jack daniels",
      "amaretto"
   ],
   "instructions": "Serve over ice- Warning,Deadly!",
   "measures": [
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 313,
   "drinkName": "jam donut",
   "dateModified": "2016-09-16 16:30:04",
   "idDrink": 17178,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uuytrp1474039804.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "baileys irish cream",
      "chambord raspberry liqueur",
      "sugar syrup",
      "sugar"
   ],
   "instructions": "Coat the rim of a shot glass with sugar using sugar syrup to stick. Add the Chambord raspberry liqueur to the shot glass, and carefully layer the Baileys Irish Cream on top. Serve.",
   "measures": [
      "2/3 oz",
      "1/3 oz",
      "1 tsp",
      "2 pinches"
   ]
},
 {
   "FIELD1": 314,
   "drinkName": "jamaica kiss",
   "dateModified": "2015-09-03 04:05:49",
   "idDrink": 14095,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/urpvvv1441249549.jpg",
   "glassType": "hurricane glass",
   "ingredients": [
      "coffee liqueur",
      "light rum",
      "ice",
      "milk"
   ],
   "instructions": "Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.",
   "measures": [
      "1 shot ",
      "1 shot jamaican ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 315,
   "drinkName": "jamaican coffee",
   "dateModified": "2015-09-03 03:27:37",
   "idDrink": 15825,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "rum",
      "coffee",
      "water",
      "whipped cream"
   ],
   "instructions": "Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.",
   "measures": [
      "1/6 glass ",
      "1/6 glass strong black ",
      "1/2 glass cold "
   ]
},
 {
   "FIELD1": 316,
   "drinkName": "japanese fizz",
   "dateModified": "2017-09-08 16:33:51",
   "idDrink": 11558,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/37vzv11504884831.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "blended whiskey",
      "lemon",
      "powdered sugar",
      "port",
      "egg white",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
   "measures": [
      "1 1/2 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "1 tblsp ",
      "1 "
   ]
},
 {
   "FIELD1": 317,
   "drinkName": "jello shots",
   "dateModified": "2017-09-08 16:35:04",
   "idDrink": 14956,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/l0smzo1504884904.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "vodka",
      "jello",
      "water"
   ],
   "instructions": "Boil 3 cups of water then add jello. Mix jello and water until jello is completely disolved. Add the two cups of vodka and mix together. Pour mixture into plastic shot glasses and chill until firm. Then, eat away...",
   "measures": [
      "2 cups ",
      "3 packages ",
      "3 cups "
   ]
},
 {
   "FIELD1": 318,
   "drinkName": "jelly bean",
   "dateModified": "2017-09-02 22:46:37",
   "idDrink": 13775,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/bglc6y1504388797.jpg",
   "glassType": "cordial glass",
   "ingredients": [
      "blackberry brandy",
      "anis"
   ],
   "instructions": "mix equal parts in pony glass-tastes just like a jelly bean!",
   "measures": [
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 319,
   "drinkName": "jewel of the nile",
   "dateModified": "2017-09-08 16:35:48",
   "idDrink": 11566,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/hx4nrb1504884947.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "green chartreuse",
      "yellow chartreuse"
   ],
   "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 320,
   "drinkName": "jitterbug",
   "dateModified": "2015-09-03 02:55:18",
   "idDrink": 16178,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "vodka",
      "grenadine",
      "lime juice",
      "sugar",
      "sugar syrup",
      "soda water"
   ],
   "instructions": "Wet glass, dip rim in sugar. Then add Ice. Then add everything else. It's that simple!",
   "measures": [
      "2 jiggers ",
      "1 jigger ",
      "3 dashes ",
      "1 shot ",
      "around rim put 1 pinch ",
      "3 dashes ",
      "fill to top with "
   ]
},
 {
   "FIELD1": 321,
   "drinkName": "john collins",
   "dateModified": "2017-09-02 12:04:31",
   "idDrink": 11580,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/u5yaxl1504350270.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "bourbon",
      "lemon juice",
      "sugar",
      "club soda",
      "maraschino cherry",
      "orange"
   ],
   "instructions": "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish. Add a dash of Angostura bitters.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1 tsp superfine ",
      "3 oz ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 322,
   "drinkName": "just a moonmint",
   "dateModified": "2017-02-20 15:20:36",
   "idDrink": 12688,
   "type": "non alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "milk",
      "chocolate syrup",
      "mint syrup"
   ],
   "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
   "measures": [
      "2 cups "
   ]
},
 {
   "FIELD1": 323,
   "drinkName": "kamikaze",
   "dateModified": "2017-09-02 18:26:44",
   "idDrink": 11600,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xa58bb1504373204.jpg",
   "glassType": "cocktail glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "vodka",
      "triple sec",
      "lime juice"
   ],
   "instructions": "Shake all ingredients together with ice. Strain into glass, garnish and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 324,
   "drinkName": "karsk",
   "dateModified": "2017-02-20 14:54:31",
   "idDrink": 12764,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "coffee",
      "grain alcohol"
   ],
   "instructions": "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
   "measures": [
      "1 part ",
      "2 parts "
   ]
},
 {
   "FIELD1": 325,
   "drinkName": "kentucky b and b",
   "dateModified": "2016-11-10 23:23:56",
   "idDrink": 11602,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sqxsxp1478820236.jpg",
   "glassType": "brandy snifter",
   "ingredients": [
      "bourbon",
      "benedictine"
   ],
   "instructions": "Pour the bourbon and Benedictine into a brandy snifter.",
   "measures": [
      "2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 326,
   "drinkName": "kentucky colonel",
   "dateModified": "2016-11-10 23:25:48",
   "idDrink": 11604,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/utqwpu1478820348.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "bourbon",
      "benedictine",
      "lemon peel"
   ],
   "instructions": "In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a cocktail glass. Garnish with the lemon twist.",
   "measures": [
      "3 oz ",
      "1/2 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 327,
   "drinkName": "kill the cold smoothie",
   "dateModified": "2017-02-20 15:10:15",
   "idDrink": 12720,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "ginger",
      "lemon",
      "water"
   ],
   "instructions": "Juice ginger and lemon and add it to hot water. You may add cardomom.",
   "measures": [
      "1 inch ",
      "1/4 ",
      "1 cup hot "
   ]
},
 {
   "FIELD1": 328,
   "drinkName": "kioki coffee",
   "dateModified": "2015-09-03 03:29:34",
   "idDrink": 16951,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uppqty1441247374.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "kahlua",
      "brandy",
      "coffee"
   ],
   "instructions": "Stir. Add whipped cream to the top.",
   "measures": [
      "1 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 329,
   "drinkName": "kir",
   "dateModified": "2017-09-02 17:38:14",
   "idDrink": 17203,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
   "glassType": "wine glass",
   "ingredients": [
      "creme de cassis",
      "champagne"
   ],
   "instructions": "Add the crème de cassis to the bottom of the glass, then top up with wine.",
   "measures": [
      "1 part ",
      "5 parts "
   ]
},
 {
   "FIELD1": 330,
   "drinkName": "kir royale",
   "dateModified": "2017-09-02 17:39:48",
   "idDrink": 13837,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yt9i7n1504370388.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "creme de cassis",
      "champagne"
   ],
   "instructions": "Pour Creme de cassis in glass, gently pour champagne on top",
   "measures": [
      "1 part ",
      "5 parts "
   ]
},
 {
   "FIELD1": 331,
   "drinkName": "kiss me quick",
   "dateModified": "2017-09-08 16:38:39",
   "idDrink": 15026,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/m7iaxu1504885119.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "cranberry vodka",
      "apfelkorn",
      "schweppes russchian",
      "apple juice",
      "ice"
   ],
   "instructions": "mix in the glass",
   "measures": [
      "4 cl ",
      "2 cl ",
      "7 cl ",
      "8 cl ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 332,
   "drinkName": "kiwi lemon",
   "dateModified": "2016-11-04 09:28:17",
   "idDrink": 14752,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tpupvr1478251697.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "kiwi liqueur",
      "bitter lemon",
      "ice"
   ],
   "instructions": "Mix in highball glass. Stirr. Garnish with slice of kiwi.",
   "measures": [
      "1 part ",
      "2 parts ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 333,
   "drinkName": "kiwi papaya smoothie",
   "dateModified": "2017-02-20 15:12:51",
   "idDrink": 12714,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "kiwi",
      "papaya"
   ],
   "instructions": "Throw everything into a blender and liquify.",
   "measures": [
      "3 ",
      "1/2 "
   ]
},
 {
   "FIELD1": 334,
   "drinkName": "kool first aid",
   "dateModified": "2017-08-24 09:53:44",
   "idDrink": 17006,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/hfp6sv1503564824.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "151 proof rum",
      "kool-aid"
   ],
   "instructions": "Add Kool Aid to a double shot glass, and top with rum. Slam and shoot.",
   "measures": [
      "2 oz light ",
      "1/2 tsp tropical "
   ]
},
 {
   "FIELD1": 335,
   "drinkName": "kool-aid shot",
   "dateModified": "2017-08-24 09:56:06",
   "idDrink": 13190,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/fegm621503564966.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "vodka",
      "amaretto",
      "sloe gin",
      "triple sec",
      "cranberry juice"
   ],
   "instructions": "Pour into a large glass with ice and stir. Add a little cranberry juice to taste.",
   "measures": [
      "1 shot ",
      "1 shot ",
      "1 shot ",
      "1 shot "
   ]
},
 {
   "FIELD1": 336,
   "drinkName": "kool-aid slammer",
   "dateModified": "2017-09-06 23:04:33",
   "idDrink": 14446,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "kool-aid",
      "vodka"
   ],
   "instructions": "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
   "measures": [
      "1/2 oz grape ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 337,
   "drinkName": "kurant tea",
   "dateModified": "2015-09-03 03:31:04",
   "idDrink": 14456,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xrsrpr1441247464.jpg",
   "glassType": "champagne flute",
   "ingredients": [
      "absolut kurant",
      "tea",
      "sugar"
   ],
   "instructions": "Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you like, some sugar. Enjoy!",
   "measures": [
      "4 cl ",
      "turkish apple ",
      "(if needed)\n"
   ]
},
 {
   "FIELD1": 338,
   "drinkName": "lady love fizz",
   "dateModified": "2017-09-08 16:41:03",
   "idDrink": 11634,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "light cream",
      "powdered sugar",
      "lemon",
      "egg white",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a cocktail glass over two ice cubes. Fill with carbonated water, stir, and serve.",
   "measures": [
      "2 oz ",
      "2 tsp ",
      "1 tsp ",
      "juice of 1/2 ",
      "1 "
   ]
},
 {
   "FIELD1": 339,
   "drinkName": "lassi - a south indian drink",
   "dateModified": "2017-02-20 15:19:40",
   "idDrink": 12690,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yoghurt",
      "water",
      "cumin seed",
      "salt",
      "mint"
   ],
   "instructions": "Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yoghurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold.",
   "measures": [
      "1/2 cup plain ",
      "1 1/4 cup cold ",
      "1/2 tsp ground roasted ",
      "1/4 tsp ",
      "1/4 tsp dried "
   ]
},
 {
   "FIELD1": 340,
   "drinkName": "lassi - mango",
   "dateModified": "2017-02-20 15:16:56",
   "idDrink": 12698,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "mango",
      "yoghurt",
      "sugar",
      "water"
   ],
   "instructions": "Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas.",
   "measures": [
      "2 ",
      "2 cups ",
      "1/2 cup ",
      "1 cup iced "
   ]
},
 {
   "FIELD1": 341,
   "drinkName": "lassi - sweet",
   "dateModified": "2017-02-20 15:18:05",
   "idDrink": 12696,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yoghurt",
      "water",
      "sugar",
      "salt",
      "lemon juice"
   ],
   "instructions": "Put all ingredients into a blender and blend until nice and frothy. Serve chilled.",
   "measures": [
      "1 cup ",
      "2 cups cold ",
      "4 tblsp ",
      "pinch ",
      "2 tblsp "
   ]
},
 {
   "FIELD1": 342,
   "drinkName": "lassi khara",
   "dateModified": "2017-02-20 15:19:30",
   "idDrink": 12692,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yoghurt",
      "water",
      "salt",
      "asafoetida"
   ],
   "instructions": "Blend (frappe) in blender until frothy. Add torn curry leaves and serve cold.",
   "measures": [
      "1 cup ",
      "2 cups cold ",
      "1 tsp ",
      "1 pinch "
   ]
},
 {
   "FIELD1": 343,
   "drinkName": "lassi raita",
   "dateModified": "2017-02-20 15:18:53",
   "idDrink": 12694,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yoghurt",
      "ice",
      "sugar",
      "lime",
      "salt"
   ],
   "instructions": "Blend the yoghurt and ice cubes together, until the yoghurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead.",
   "measures": [
      "2 cups ",
      "4-6 "
   ]
},
 {
   "FIELD1": 344,
   "drinkName": "lemon drop",
   "dateModified": "2017-09-02 18:28:17",
   "idDrink": 14366,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/mtpxgk1504373297.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "absolut vodka",
      "cointreau",
      "lemon"
   ],
   "instructions": "Shake and strain into a chilled cocktail glass rimmed with sugar.",
   "measures": [
      "1 1/2 shot ",
      "1 1/2 shot ",
      "juice of 1 wedge "
   ]
},
 {
   "FIELD1": 345,
   "drinkName": "lemon shot",
   "dateModified": "2017-02-20 15:02:59",
   "idDrink": 12752,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/mx31hv1487602979.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "galliano",
      "absolut citron",
      "lemon",
      "sugar",
      "151 proof rum"
   ],
   "instructions": "Mix Galliano and Absolut Citron in a shot glass, lay lemon wedge sprinkled with sugar over glass and pour a rum over wedge and glass. light rum with a lighter and let burn for a second. Do shot quickly and suck on lemon. If it is done correctly, this will taste like a shot of sweet lemonade.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "wedge\n",
      "bacardi "
   ]
},
 {
   "FIELD1": 346,
   "drinkName": "lemouroudji",
   "dateModified": "2017-02-20 15:15:45",
   "idDrink": 12702,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/eirmo71487603745.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "ginger",
      "water",
      "lemon",
      "sugar",
      "cayenne pepper"
   ],
   "instructions": "Juice the lemons. Peel and grate the ginger. Place the grated ginger and a liberal dash of the cayenne pepper into a piece of cheesecloth, and tie it into a knot. Let soak in the water. After 15 minutes or so, add the sugar, and the lemon juice. Chill, and serve.",
   "measures": [
      "2 pieces ",
      "1 gal ",
      "1 lb ",
      "1 cup ",
      "ground "
   ]
},
 {
   "FIELD1": 347,
   "drinkName": "limeade",
   "dateModified": "2017-02-20 15:14:40",
   "idDrink": 12704,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "lime",
      "sugar",
      "soda water",
      "lime peel"
   ],
   "instructions": "In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.",
   "measures": [
      "juice of 1 ",
      "1 tblsp ",
      "(seltzer water)\n"
   ]
},
 {
   "FIELD1": 348,
   "drinkName": "limona corona",
   "dateModified": "2015-09-03 03:51:02",
   "idDrink": 15086,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wwqrsw1441248662.jpg",
   "glassType": "beer glass",
   "ingredients": [
      "corona",
      "bacardi limon"
   ],
   "instructions": "Open the Corona. Fill the empty space in the neck in the bottle with the rum. The bottle should be filled to the top. Plug the bottle with your thumb or the palm of your hand. Turn the bottle upside-down so the rum and beer mix. Turn the bottle rightside-up, unplug, and drink.",
   "measures": [
      "1 bottle ",
      "1 oz "
   ]
},
 {
   "FIELD1": 349,
   "drinkName": "loch lomond",
   "dateModified": "2016-07-19 11:24:41",
   "idDrink": 11658,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "scotch",
      "drambuie",
      "dry vermouth",
      "lemon peel"
   ],
   "instructions": "In a mixing glass half-filled with ice cubes, combine the Scotch, Drambuie, and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 350,
   "drinkName": "london town",
   "dateModified": "2016-07-19 11:18:27",
   "idDrink": 11662,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rpsrqv1468923507.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "maraschino liqueur",
      "orange bitters"
   ],
   "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "2 dashes "
   ]
},
 {
   "FIELD1": 351,
   "drinkName": "lone tree cocktail",
   "dateModified": "2016-07-19 11:16:57",
   "idDrink": 11664,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tsxpty1468923417.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sweet vermouth",
      "gin"
   ],
   "instructions": "Stir ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "3/4 oz ",
      "1 1/2 oz "
   ]
},
 {
   "FIELD1": 352,
   "drinkName": "lone tree cooler",
   "dateModified": "2016-11-16 12:14:45",
   "idDrink": 11666,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wsyqry1479298485.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "carbonated water",
      "gin",
      "dry vermouth",
      "powdered sugar",
      "orange spiral",
      "lemon peel"
   ],
   "instructions": "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.",
   "measures": [
      "\n"
   ]
},
 {
   "FIELD1": 353,
   "drinkName": "long island iced tea",
   "dateModified": "2017-09-02 17:41:50",
   "idDrink": 17204,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg",
   "glassType": "highball glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "vodka",
      "tequila",
      "light rum",
      "gin",
      "coca-cola",
      "lemon peel"
   ],
   "instructions": "Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1 dash ",
      "twist of "
   ]
},
 {
   "FIELD1": 354,
   "drinkName": "long island tea",
   "dateModified": "2015-08-18 14:54:32",
   "idDrink": 11668,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ywxwqs1439906072.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "light rum",
      "gin",
      "tequila",
      "lemon",
      "coca-cola"
   ],
   "instructions": "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "juice of 1/2 ",
      "1 splash "
   ]
},
 {
   "FIELD1": 355,
   "drinkName": "long vodka",
   "dateModified": "2017-08-24 10:00:12",
   "idDrink": 13196,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "lime",
      "angostura bitters",
      "tonic water",
      "ice"
   ],
   "instructions": "Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka",
   "measures": [
      "5 cl ",
      "1/2 ",
      "4 dashes ",
      "1 dl schweppes ",
      "4 "
   ]
},
 {
   "FIELD1": 356,
   "drinkName": "lord and lady",
   "dateModified": "2016-07-19 11:13:39",
   "idDrink": 11670,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/quwrys1468923219.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "dark rum",
      "tia maria"
   ],
   "instructions": "Pour the rum and Tia Maria into an old-fashioned glass almost filled with ice cubes. Stir well.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 357,
   "drinkName": "lunch box",
   "dateModified": "2016-02-03 15:15:46",
   "idDrink": 14378,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qywpvt1454512546.jpg",
   "glassType": "pint glass",
   "ingredients": [
      "beer",
      "amaretto",
      "orange juice"
   ],
   "instructions": "Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.",
   "measures": [
      "3/4 bottle ",
      "1 shot ",
      "1 oz "
   ]
},
 {
   "FIELD1": 358,
   "drinkName": "mai tai",
   "dateModified": "2015-08-18 15:17:50",
   "idDrink": 11690,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
   "glassType": "collins glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "light rum",
      "orgeat syrup",
      "triple sec",
      "sweet and sour",
      "cherry"
   ],
   "instructions": "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1 1/2 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 359,
   "drinkName": "malibu twister",
   "dateModified": "2017-09-08 16:42:01",
   "idDrink": 15224,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2dwae41504885321.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "malibu rum",
      "tropicana",
      "cranberry juice"
   ],
   "instructions": "Add rum & trister then, add cranberry jucie,stir",
   "measures": [
      "2 parts ",
      "2 parts ",
      "1 part "
   ]
},
 {
   "FIELD1": 360,
   "drinkName": "mango orange smoothie",
   "dateModified": "2017-02-20 15:12:01",
   "idDrink": 12716,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "mango",
      "orange"
   ],
   "instructions": "Throw everything into a blender and liquify.",
   "measures": [
      "1 ",
      "2 "
   ]
},
 {
   "FIELD1": 361,
   "drinkName": "manhattan",
   "dateModified": "2017-09-02 12:07:09",
   "idDrink": 13839,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "sweet vermouth",
      "bourbon",
      "angostura bitters",
      "ice",
      "maraschino cherry",
      "orange peel"
   ],
   "instructions": "Stirred over ice, strained into a chilled glass, garnished, and served up.",
   "measures": [
      "3/4 oz ",
      "2 1/2 oz blended ",
      "dash ",
      "2 or 3 ",
      "1 ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 362,
   "drinkName": "margarita",
   "dateModified": "2015-08-18 14:42:59",
   "idDrink": 13060,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "tequila",
      "triple sec",
      "lime juice",
      "salt"
   ],
   "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 363,
   "drinkName": "martinez cocktail",
   "dateModified": "2015-08-18 15:00:52",
   "idDrink": 11720,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "dry vermouth",
      "triple sec",
      "orange bitters",
      "cherry"
   ],
   "instructions": "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1/4 tsp ",
      "1 dash ",
      "1 "
   ]
},
 {
   "FIELD1": 364,
   "drinkName": "martini",
   "dateModified": "2017-09-02 12:51:35",
   "idDrink": 11728,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "dry vermouth",
      "olive"
   ],
   "instructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
   "measures": [
      "1 2/3 oz ",
      "1/3 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 365,
   "drinkName": "mary pickford",
   "dateModified": "2017-09-02 12:09:17",
   "idDrink": 17188,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "light rum",
      "pineapple juice",
      "maraschino liqueur",
      "grenadine",
      "maraschino cherry"
   ],
   "instructions": "Shake and strain into a chilled large cocktail glass",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1/2 tsp ",
      "1/2 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 366,
   "drinkName": "masala chai",
   "dateModified": "2015-09-03 03:13:04",
   "idDrink": 12774,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "water",
      "tea",
      "ginger",
      "cardamom",
      "cloves",
      "cinnamon",
      "black pepper",
      "sugar",
      "milk"
   ],
   "instructions": "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT.",
   "measures": [
      "2 cups ",
      "3-4 tsp ",
      "1 chunk dried ",
      "3-4 crushed ",
      "3 ",
      "1 piece ",
      "1-2 whole ",
      "to taste\n"
   ]
},
 {
   "FIELD1": 367,
   "drinkName": "melya",
   "dateModified": "2015-09-03 03:32:59",
   "idDrink": 12776,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "espresso",
      "honey",
      "cocoa powder"
   ],
   "instructions": "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
   "measures": [
      "\n",
      "unsweetened "
   ]
},
 {
   "FIELD1": 368,
   "drinkName": "miami vice",
   "dateModified": "2015-09-02 16:49:15",
   "idDrink": 13936,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qvuyqw1441208955.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "151 proof rum",
      "pina colada mix",
      "daiquiri mix"
   ],
   "instructions": "First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).",
   "measures": [
      "5 oz bacardi ",
      "frozen ",
      "frozen "
   ]
},
 {
   "FIELD1": 369,
   "drinkName": "microwave hot cocoa",
   "dateModified": "2017-02-20 15:05:51",
   "idDrink": 12744,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "sugar",
      "cocoa powder",
      "salt",
      "water",
      "milk",
      "vanilla extract"
   ],
   "instructions": "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.",
   "measures": [
      "5 tblsp ",
      "3 tblsp ",
      "1 dash ",
      "3 tblsp hot ",
      "2 cups ",
      "1/4 tsp "
   ]
},
 {
   "FIELD1": 370,
   "drinkName": "midnight cowboy",
   "dateModified": "2015-09-02 16:35:33",
   "idDrink": 11766,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vsxxwy1441208133.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "bourbon",
      "dark rum",
      "heavy cream"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 371,
   "drinkName": "midnight manx",
   "dateModified": "2015-09-02 16:37:11",
   "idDrink": 13825,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uqqurp1441208231.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "kahlua",
      "bailey's irish cream",
      "goldschlager",
      "heavy cream",
      "coffee"
   ],
   "instructions": "Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!",
   "measures": [
      "1 oz ",
      "1 oz ",
      "dash ",
      "2 oz ",
      "2 oz hazlenut "
   ]
},
 {
   "FIELD1": 372,
   "drinkName": "midnight mint",
   "dateModified": "2015-09-02 16:38:30",
   "idDrink": 14842,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/svuvrq1441208310.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "bailey's irish cream",
      "white creme de menthe",
      "cream"
   ],
   "instructions": "If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into cocktail glass.",
   "measures": [
      "1 oz ",
      "3/4 oz ",
      "3/4 oz double "
   ]
},
 {
   "FIELD1": 373,
   "drinkName": "mimosa",
   "dateModified": "2017-09-02 17:44:45",
   "idDrink": 17205,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
   "glassType": "champagne flute",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "champagne",
      "orange juice"
   ],
   "instructions": "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
   "measures": [
      "chilled ",
      "2 oz "
   ]
},
 {
   "FIELD1": 374,
   "drinkName": "mississippi planters punch",
   "dateModified": "2015-08-18 15:18:51",
   "idDrink": 11786,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/urpyqs1439907531.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "brandy",
      "light rum",
      "bourbon",
      "lemon",
      "powdered sugar",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "juice of 1/2 ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 375,
   "drinkName": "mocha-berry",
   "dateModified": "2015-09-03 03:14:08",
   "idDrink": 14209,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
   "glassType": "irish coffee cup",
   "ingredients": [
      "coffee",
      "chambord raspberry liqueur",
      "cocoa powder",
      "whipped cream"
   ],
   "instructions": "pour 6 oz. of coffee in a mug or Irish coffee cup. add coca mix and chambord, mix well and top off with whipped cream.",
   "measures": [
      "6 oz ",
      "2 oz ",
      "2 tblsp "
   ]
},
 {
   "FIELD1": 376,
   "drinkName": "mojito",
   "dateModified": "2016-11-04 09:17:09",
   "idDrink": 13427,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg",
   "glassType": "highball glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "light rum",
      "lime",
      "sugar",
      "mint",
      "soda water"
   ],
   "instructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
   "measures": [
      "2-3 oz ",
      "juice of 1 ",
      "2 tsp ",
      "2-4 "
   ]
},
 {
   "FIELD1": 377,
   "drinkName": "mojito #3",
   "dateModified": "2016-11-04 09:24:43",
   "idDrink": 15841,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "mint",
      "lemon juice",
      "dark rum",
      "club soda",
      "angostura bitters"
   ],
   "instructions": "Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.",
   "measures": [
      "1/2 handful ",
      "3 cl ",
      "1/8 l jamaican ",
      "1/8 l ",
      "8 drops "
   ]
},
 {
   "FIELD1": 378,
   "drinkName": "monkey gland",
   "dateModified": "2017-09-02 12:11:31",
   "idDrink": 17189,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/94psp81504350690.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "benedictine",
      "orange juice",
      "grenadine"
   ],
   "instructions": "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
   "measures": [
      "2 oz ",
      "1 tsp ",
      "1/2 oz ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 379,
   "drinkName": "monkey wrench",
   "dateModified": "2017-09-02 12:55:14",
   "idDrink": 11798,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/8it05n1504353314.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "light rum",
      "grapefruit juice",
      "bitters"
   ],
   "instructions": "Pour all of the ingredients into an old-fashioned glass almost filled with ice cubes. Stir well.",
   "measures": [
      "1 1/2 oz ",
      "3 oz ",
      "1 dash "
   ]
},
 {
   "FIELD1": 380,
   "drinkName": "moranguito",
   "dateModified": "2016-10-05 12:35:35",
   "idDrink": 16196,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "absinthe",
      "tequila",
      "grenadine"
   ],
   "instructions": "first you put rhe absinthe, then put tequila, then put the Granadine syrup.",
   "measures": [
      "2/5 ",
      "2/5 ",
      "1/5 "
   ]
},
 {
   "FIELD1": 381,
   "drinkName": "moscow mule",
   "dateModified": "2017-09-02 17:49:48",
   "idDrink": 13254,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
   "glassType": "copper mug",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "vodka",
      "lime juice",
      "ginger ale"
   ],
   "instructions": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
   "measures": [
      "2 oz ",
      "2 oz ",
      "8 oz "
   ]
},
 {
   "FIELD1": 382,
   "drinkName": "mother's milk",
   "dateModified": "2017-09-08 16:43:19",
   "idDrink": 14053,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7stuuh1504885399.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "goldschlager",
      "butterscotch schnapps",
      "milk"
   ],
   "instructions": "Shake over ice, strain. Serves two.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 383,
   "drinkName": "mudslinger",
   "dateModified": "2017-09-08 16:45:55",
   "idDrink": 16041,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/hepk6h1504885554.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "southern comfort",
      "orange juice",
      "pepsi cola"
   ],
   "instructions": "Add all contents to a large jug or punch bowl. Stir well!",
   "measures": [
      "750 ml ",
      "1 l ",
      "750 ml "
   ]
},
 {
   "FIELD1": 384,
   "drinkName": "mulled wine",
   "dateModified": "2017-09-06 23:08:44",
   "idDrink": 12988,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/iuwi6h1504735724.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "water",
      "sugar",
      "cloves",
      "cinnamon",
      "lemon peel",
      "red wine",
      "brandy"
   ],
   "instructions": "Simmer 3 cups water with, sugar, cloves, cinnamon sticks, and lemon peel in a stainless steel pot for 10 minutes. Add wine heat to a \"coffee temperature\" (DO NOT BOIL) then add the brandy.",
   "measures": [
      "3 cups ",
      "1 cup ",
      "12 ",
      "2 ",
      "1 ",
      "750 ml ",
      "1/4 cup "
   ]
},
 {
   "FIELD1": 385,
   "drinkName": "national aquarium",
   "dateModified": "2017-08-24 09:57:01",
   "idDrink": 13192,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "rum",
      "vodka",
      "gin",
      "blue curacao",
      "sour mix",
      "lemon-lime soda"
   ],
   "instructions": "Pour all ingredients into a shaker of ice. Shake well. Serve on the rocks.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "2 oz ",
      "1 splash "
   ]
},
 {
   "FIELD1": 386,
   "drinkName": "negroni",
   "dateModified": "2015-08-18 15:12:07",
   "idDrink": 15549,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "campari",
      "sweet vermouth"
   ],
   "instructions": "Stir into glass over ice, garnish and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 387,
   "drinkName": "new york lemonade",
   "dateModified": "2017-08-24 10:04:33",
   "idDrink": 13204,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/b3n0ge1503565473.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "absolut citron",
      "grand marnier",
      "lemon juice",
      "club soda"
   ],
   "instructions": "Serve in a chilled cocktail glass. Lemon and sugar the rim. Stir and Strain.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "2 oz sweetened ",
      "1 oz "
   ]
},
 {
   "FIELD1": 388,
   "drinkName": "new york sour",
   "dateModified": "2017-09-08 15:59:55",
   "idDrink": 11844,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/61wgch1504882795.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "blended whiskey",
      "lemon",
      "sugar",
      "red wine",
      "lemon",
      "cherry"
   ],
   "instructions": "Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Float claret on top. Decorate with the half-slice of lemon and the cherry and serve.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "(claret)\n"
   ]
},
 {
   "FIELD1": 389,
   "drinkName": "nuked hot chocolate",
   "dateModified": "2017-02-20 15:05:43",
   "idDrink": 12746,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "cocoa powder",
      "sugar",
      "vanilla extract",
      "milk"
   ],
   "instructions": "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.",
   "measures": [
      "2 tsp ",
      "1 tsp ",
      "1/2 tsp ",
      "12 oz "
   ]
},
 {
   "FIELD1": 390,
   "drinkName": "nutty irishman",
   "dateModified": "2015-09-03 03:40:14",
   "idDrink": 13861,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xspupx1441248014.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "bailey's irish cream",
      "frangelico",
      "milk"
   ],
   "instructions": "Serve over ice",
   "measures": [
      "1 part ",
      "1 part ",
      "1 part "
   ]
},
 {
   "FIELD1": 391,
   "drinkName": "old fashioned",
   "dateModified": "2016-11-04 09:46:42",
   "idDrink": 17179,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "bourbon",
      "angostura bitters",
      "sugar",
      "water"
   ],
   "instructions": "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\nFill the glass with ice cubes and add whiskey.\n\nGarnish with orange twist, and a cocktail cherry.",
   "measures": [
      "4.5 cl",
      "2 dashes",
      "1 cube",
      "dash"
   ]
},
 {
   "FIELD1": 392,
   "drinkName": "orange crush",
   "dateModified": "2017-09-08 16:52:06",
   "idDrink": 15330,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "vodka",
      "triple sec",
      "orange juice"
   ],
   "instructions": "Add all ingredients to tumbler-Pour as shot",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 393,
   "drinkName": "orange oasis",
   "dateModified": "2015-09-02 05:25:23",
   "idDrink": 11870,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xqqytq1441167923.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "cherry brandy",
      "gin",
      "orange juice",
      "ginger ale"
   ],
   "instructions": "Shake brandy, gin, and orange juice with ice and strain into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
   "measures": [
      "1/2 oz ",
      "1 1/2 oz ",
      "4 oz "
   ]
},
 {
   "FIELD1": 394,
   "drinkName": "orange push-up",
   "dateModified": "2017-08-24 10:09:41",
   "idDrink": 14586,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/mgf0y91503565781.jpg",
   "glassType": "hurricane glass",
   "ingredients": [
      "spiced rum",
      "grenadine",
      "orange juice",
      "sour mix"
   ],
   "instructions": "Combine liquors in a blender. Add a half scoop of ice and blend. Garnish with an orange and cherry flag. So good it will melt in your mouth!!!",
   "measures": [
      "1.5 oz ",
      "0.5 oz ",
      "4 oz ",
      "1 splash "
   ]
},
 {
   "FIELD1": 395,
   "drinkName": "orange scented hot chocolate",
   "dateModified": "2017-02-20 15:05:31",
   "idDrink": 12748,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "milk",
      "chocolate",
      "orange peel",
      "espresso",
      "nutmeg"
   ],
   "instructions": "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.",
   "measures": [
      "2 cups ",
      "4 oz chopped bittersweet or semi-sweet ",
      "3 2-inch strips ",
      "1/2 tsp instant ",
      "1/8 tsp ground "
   ]
},
 {
   "FIELD1": 396,
   "drinkName": "orange whip",
   "dateModified": "2016-02-03 15:52:39",
   "idDrink": 16995,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "orange juice",
      "rum",
      "vodka",
      "cream",
      "ice"
   ],
   "instructions": "Pour ingredients over ice and stir.",
   "measures": [
      "4 oz ",
      "1 oz ",
      "1 oz ",
      "1 package ",
      "over "
   ]
},
 {
   "FIELD1": 397,
   "drinkName": "orangeade",
   "dateModified": "2015-09-02 05:22:12",
   "idDrink": 12618,
   "type": "non alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "lemon juice",
      "orange juice",
      "sugar syrup",
      "soda water"
   ],
   "instructions": "Place some ice cubes in a large tumbler or highball glass, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water, serve with a drinking straw.",
   "measures": [
      "5 cl ",
      "15 cl ",
      "2-3 cl "
   ]
},
 {
   "FIELD1": 398,
   "drinkName": "oreo mudslide",
   "dateModified": "2016-07-19 11:43:37",
   "idDrink": 13499,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tpwwut1468925017.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "kahlua",
      "bailey's irish cream",
      "vanilla ice-cream",
      "oreo cookie"
   ],
   "instructions": "Blend Vodka, Kahlua, Bailey's, ice-cream and the Oreo well in a blender. Pour into a large frosted glass. Garnish with whipped cream and a cherry.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "2 scoops ",
      "1 "
   ]
},
 {
   "FIELD1": 399,
   "drinkName": "orgasm",
   "dateModified": "2017-09-08 16:55:14",
   "idDrink": 11872,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "creme de cacao",
      "amaretto",
      "triple sec",
      "vodka",
      "light cream"
   ],
   "instructions": "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
   "measures": [
      "1/2 oz white ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 400,
   "drinkName": "owen's grandmother's revenge",
   "dateModified": "2017-08-24 10:02:02",
   "idDrink": 13200,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/0wt4uo1503565321.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "whiskey",
      "beer",
      "lemonade",
      "ice"
   ],
   "instructions": "Add ingredients and mix in blender.",
   "measures": [
      "12 oz ",
      "12 oz ",
      "12 oz frozen ",
      "1 cup crushed "
   ]
},
 {
   "FIELD1": 401,
   "drinkName": "paradise",
   "dateModified": "2017-09-02 12:17:40",
   "idDrink": 17190,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ejozd71504351060.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "apricot brandy",
      "orange juice"
   ],
   "instructions": "Shake together over ice. Strain into cocktail glass and serve chilled.",
   "measures": [
      "7 parts",
      "4 parts",
      "3 parts "
   ]
},
 {
   "FIELD1": 402,
   "drinkName": "pina colada",
   "dateModified": "2017-09-02 17:55:46",
   "idDrink": 17207,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
   "glassType": "collins glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "light rum",
      "coconut milk",
      "pineapple"
   ],
   "instructions": "Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.",
   "measures": [
      "3 oz ",
      "3 tblsp ",
      "3 tblsp "
   ]
},
 {
   "FIELD1": 403,
   "drinkName": "pineapple gingerale smoothie",
   "dateModified": "2017-02-20 15:11:09",
   "idDrink": 12718,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "ginger",
      "pineapple"
   ],
   "instructions": "Throw everything into a blender and liquify.",
   "measures": [
      "1/4 inch ",
      "1/2 "
   ]
},
 {
   "FIELD1": 404,
   "drinkName": "pink gin",
   "dateModified": "2017-09-08 17:36:58",
   "idDrink": 11936,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qyr51e1504888618.jpg",
   "glassType": "white wine glass",
   "ingredients": [
      "bitters",
      "gin"
   ],
   "instructions": "Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.",
   "measures": [
      "3 dashes ",
      "2 oz "
   ]
},
 {
   "FIELD1": 405,
   "drinkName": "pink lady",
   "dateModified": "2017-09-08 17:23:49",
   "idDrink": 11938,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/5ia6j21504887829.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "grenadine",
      "light cream",
      "egg white"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 tsp ",
      "1 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 406,
   "drinkName": "pink panty pulldowns",
   "dateModified": "2016-07-19 12:10:57",
   "idDrink": 13535,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "sprite",
      "pink lemonade",
      "vodka"
   ],
   "instructions": "Shake well",
   "measures": [
      "1 l ",
      "2 cups ",
      "2 cups "
   ]
},
 {
   "FIELD1": 407,
   "drinkName": "pink penocha",
   "dateModified": "2017-08-24 09:40:07",
   "idDrink": 16992,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/6vigjx1503564007.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "everclear",
      "vodka",
      "peach schnapps",
      "orange juice",
      "cranberry juice"
   ],
   "instructions": "mix all ingredients into bowl keep iced stir frequently",
   "measures": [
      "750 ml ",
      "1750 ml ",
      "1750 ml ",
      "1 gal ",
      "1 gal "
   ]
},
 {
   "FIELD1": 408,
   "drinkName": "pisco sour",
   "dateModified": "2015-08-18 15:20:22",
   "idDrink": 13214,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
   "glassType": "cocktail glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "pisco",
      "lemon juice",
      "sugar",
      "ice"
   ],
   "instructions": "Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.[1]",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1-2 tblsp "
   ]
},
 {
   "FIELD1": 409,
   "drinkName": "planter's punch",
   "dateModified": "2017-09-02 12:23:04",
   "idDrink": 17191,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yvos231504351384.jpg",
   "glassType": "collins glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "dark rum",
      "orgeat syrup",
      "orange juice",
      "pineapple juice"
   ],
   "instructions": "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add Angostura bitters, \"on top\". Garnish with cocktail cherry and pineapple.",
   "measures": [
      "1 part ",
      "1/2 part ",
      "2 parts ",
      "1 part "
   ]
},
 {
   "FIELD1": 410,
   "drinkName": "popped cherry",
   "dateModified": "2016-09-08 15:27:05",
   "idDrink": 13072,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sxvrwv1473344825.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "cherry liqueur",
      "cranberry juice",
      "orange juice"
   ],
   "instructions": "Served over ice in a tall glass with a popped cherry (can add more popped cherries if in the mood)!",
   "measures": [
      "2 oz ",
      "2 oz ",
      "4 oz ",
      "4 oz "
   ]
},
 {
   "FIELD1": 411,
   "drinkName": "poppy cocktail",
   "dateModified": "2017-09-02 23:05:15",
   "idDrink": 11959,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/cslw1w1504389915.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "creme de cacao"
   ],
   "instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz white "
   ]
},
 {
   "FIELD1": 412,
   "drinkName": "port and starboard",
   "dateModified": "2015-09-06 16:38:31",
   "idDrink": 11961,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wxvupx1441553911.jpg",
   "glassType": "pousse cafe glass",
   "ingredients": [
      "grenadine",
      "green creme de menthe"
   ],
   "instructions": "Pour carefully into a pousse-cafe glass, so that creme de menthe floats on grenadine. Serve without mixing.",
   "measures": [
      "1 tblsp ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 413,
   "drinkName": "port wine cocktail",
   "dateModified": "2015-09-06 16:39:36",
   "idDrink": 11963,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qruprq1441553976.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "port",
      "brandy"
   ],
   "instructions": "Stir ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "2 1/2 oz ",
      "1/2 tsp "
   ]
},
 {
   "FIELD1": 414,
   "drinkName": "port wine flip",
   "dateModified": "2015-09-06 16:37:24",
   "idDrink": 11965,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vrprxu1441553844.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "port",
      "light cream",
      "powdered sugar",
      "egg",
      "nutmeg"
   ],
   "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
   "measures": [
      "1 1/2 oz ",
      "2 tsp ",
      "1 tsp ",
      "1 whole "
   ]
},
 {
   "FIELD1": 415,
   "drinkName": "porto flip",
   "dateModified": "2017-09-02 12:25:18",
   "idDrink": 17192,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/64x5j41504351518.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "brandy",
      "port",
      "egg yolk"
   ],
   "instructions": "Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.",
   "measures": [
      "3 parts",
      "9 parts",
      "2 parts"
   ]
},
 {
   "FIELD1": 416,
   "drinkName": "pysch vitamin light",
   "dateModified": "2015-09-06 16:33:00",
   "idDrink": 15092,
   "type": "non alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "orange juice",
      "apple juice",
      "pineapple juice",
      "ice"
   ],
   "instructions": "Shake with ice.",
   "measures": [
      "1 part ",
      "1 part ",
      "1 part "
   ]
},
 {
   "FIELD1": 417,
   "drinkName": "quaker's cocktail",
   "dateModified": "2016-11-12 14:51:54",
   "idDrink": 11983,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "light rum",
      "brandy",
      "lemon",
      "raspberry syrup"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "juice of 1/4 ",
      "2 tsp "
   ]
},
 {
   "FIELD1": 418,
   "drinkName": "quarter deck cocktail",
   "dateModified": "2016-11-12 15:03:37",
   "idDrink": 11985,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qrwvps1478963017.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "light rum",
      "sherry",
      "lime"
   ],
   "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 ",
      "1/3 oz cream ",
      "juice of 1/2 "
   ]
},
 {
   "FIELD1": 419,
   "drinkName": "queen bee",
   "dateModified": "2016-11-12 15:06:34",
   "idDrink": 11987,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rvvpxu1478963194.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "coffee brandy",
      "lime vodka",
      "sherry"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1 1/2 oz ",
      "1/2 oz cream "
   ]
},
 {
   "FIELD1": 420,
   "drinkName": "queen charlotte",
   "dateModified": "2016-11-12 15:07:29",
   "idDrink": 11989,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqruyt1478963249.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "red wine",
      "grenadine",
      "lemon-lime soda"
   ],
   "instructions": "Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.",
   "measures": [
      "2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 421,
   "drinkName": "queen elizabeth",
   "dateModified": "2016-11-12 15:08:59",
   "idDrink": 11991,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dry vermouth",
      "gin",
      "benedictine"
   ],
   "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1/2 oz ",
      "1 1/2 oz ",
      "1 1/2 tsp "
   ]
},
 {
   "FIELD1": 422,
   "drinkName": "quentin",
   "dateModified": "2016-11-12 15:09:58",
   "idDrink": 11993,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/spxtqp1478963398.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dark rum",
      "kahlua",
      "light cream",
      "nutmeg"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1 oz ",
      "1/8 tsp grated "
   ]
},
 {
   "FIELD1": 423,
   "drinkName": "quick f**k",
   "dateModified": "2016-11-12 15:10:54",
   "idDrink": 13198,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wvtwpp1478963454.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "kahlua",
      "midori melon liqueur",
      "bailey's irish cream"
   ],
   "instructions": "In a shot glass add 1/3 Kahlua first. Then 1/3 Miduri, topping it off with a 1/3 bailey's irish cream",
   "measures": [
      "1 part ",
      "1 part ",
      "1 part "
   ]
},
 {
   "FIELD1": 424,
   "drinkName": "quick-sand",
   "dateModified": "2016-11-12 15:12:13",
   "idDrink": 15761,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vprxqv1478963533.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "black sambuca",
      "orange juice"
   ],
   "instructions": "Simply add the orange juice, quite a quick pour in order to mix the sambucca with the orange juice. The juice MUST have fruit pulp!",
   "measures": [
      "25 ml ",
      "add 250 ml "
   ]
},
 {
   "FIELD1": 425,
   "drinkName": "radioactive long island iced tea",
   "dateModified": "2017-08-24 09:31:52",
   "idDrink": 16984,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "rum",
      "vodka",
      "tequila",
      "gin",
      "triple sec",
      "chambord raspberry liqueur",
      "midori melon liqueur",
      "malibu rum"
   ],
   "instructions": "Pour all ingredients over ice in a very tall glass. Sip cautiously.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 426,
   "drinkName": "radler",
   "dateModified": "2017-09-08 17:43:15",
   "idDrink": 16031,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xz8igv1504888995.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "beer",
      "7-up"
   ],
   "instructions": "Pour beer into large mug, slowly add the 7-up (or Sprite).",
   "measures": [
      "12 oz ",
      "12 oz "
   ]
},
 {
   "FIELD1": 427,
   "drinkName": "rail splitter",
   "dateModified": "2015-09-02 16:27:40",
   "idDrink": 12630,
   "type": "non alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "sugar syrup",
      "lemon juice",
      "ginger ale"
   ],
   "instructions": "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.",
   "measures": [
      "2 tsp "
   ]
},
 {
   "FIELD1": 428,
   "drinkName": "raspberry cooler",
   "dateModified": "2015-09-03 05:25:46",
   "idDrink": 17167,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/suqyyx1441254346.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "raspberry vodka",
      "lemon-lime soda",
      "ice"
   ],
   "instructions": "Pour the raspberry vodka and soda into a highball glass almost filled with ice cubes. Stir well.",
   "measures": [
      "2 oz ",
      "4 oz "
   ]
},
 {
   "FIELD1": 429,
   "drinkName": "red snapper",
   "dateModified": "2017-09-06 23:02:23",
   "idDrink": 14087,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7p607y1504735343.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "crown royal",
      "amaretto",
      "cranberry juice"
   ],
   "instructions": "One shot each, shake n shoot",
   "measures": [
      "1 shot ",
      "1 shot ",
      "1 shot "
   ]
},
 {
   "FIELD1": 430,
   "drinkName": "rose",
   "dateModified": "2017-09-02 17:57:42",
   "idDrink": 17208,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "dry vermouth",
      "gin",
      "apricot brandy",
      "lemon juice",
      "grenadine",
      "powdered sugar"
   ],
   "instructions": "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
   "measures": [
      "1/2 oz ",
      "1 oz ",
      "1/2 oz ",
      "1/2 tsp ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 431,
   "drinkName": "royal bitch",
   "dateModified": "2015-09-02 17:08:10",
   "idDrink": 17122,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qupuyr1441210090.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "frangelico",
      "crown royal"
   ],
   "instructions": "Into a shot glass layer the Crown Royal on top of the Frangelico.",
   "measures": [
      "1 part ",
      "1 part "
   ]
},
 {
   "FIELD1": 432,
   "drinkName": "royal fizz",
   "dateModified": "2017-09-02 23:16:49",
   "idDrink": 12055,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wrh44j1504390609.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "gin",
      "sweet and sour",
      "egg",
      "coca-cola"
   ],
   "instructions": "Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.",
   "measures": [
      "1 oz ",
      "2 oz ",
      "1 whole "
   ]
},
 {
   "FIELD1": 433,
   "drinkName": "royal flush",
   "dateModified": "2017-09-08 17:35:27",
   "idDrink": 15082,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7rnm8u1504888527.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "crown royal",
      "peach schnapps",
      "chambord raspberry liqueur",
      "cranberry juice"
   ],
   "instructions": "Pour all the ingredients into tumbler over ice. Strain into glass.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1/2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 434,
   "drinkName": "royal gin fizz",
   "dateModified": "2017-09-06 23:07:52",
   "idDrink": 12057,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/pe1x1c1504735672.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "gin",
      "lemon",
      "powdered sugar",
      "egg",
      "carbonated water"
   ],
   "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "1 whole "
   ]
},
 {
   "FIELD1": 435,
   "drinkName": "ruby tuesday",
   "dateModified": "2015-09-06 16:30:37",
   "idDrink": 17114,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qsyqqq1441553437.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "gin",
      "cranberry juice",
      "grenadine"
   ],
   "instructions": "Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.",
   "measures": [
      "2 oz ",
      "5 oz ",
      "2 splashes "
   ]
},
 {
   "FIELD1": 436,
   "drinkName": "rum cobbler",
   "dateModified": "2017-09-02 23:18:03",
   "idDrink": 12067,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/5vh9ld1504390683.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "sugar",
      "club soda",
      "lemon",
      "dark rum",
      "maraschino cherry",
      "orange"
   ],
   "instructions": "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the rum. Stir well. Garnish with the cherry and the orange and lemon slices.",
   "measures": [
      "1 tsp superfine ",
      "3 oz ",
      "1 ",
      "2 oz ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 437,
   "drinkName": "rum cooler",
   "dateModified": "2017-09-08 17:37:54",
   "idDrink": 12071,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "rum",
      "lemon-lime soda",
      "lemon"
   ],
   "instructions": "Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
   "measures": [
      "2 oz light or dark ",
      "4 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 438,
   "drinkName": "rum milk punch",
   "dateModified": "2017-09-08 17:40:10",
   "idDrink": 12087,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/w64lqm1504888810.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "light rum",
      "milk",
      "powdered sugar",
      "nutmeg"
   ],
   "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
   "measures": [
      "2 oz ",
      "1 cup ",
      "1 tsp "
   ]
},
 {
   "FIELD1": 439,
   "drinkName": "rum old-fashioned",
   "dateModified": "2017-09-07 22:44:09",
   "idDrink": 12089,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/otn2011504820649.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "light rum",
      "151 proof rum",
      "powdered sugar",
      "bitters",
      "water",
      "lime peel"
   ],
   "instructions": "Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 tsp ",
      "1/2 tsp ",
      "1 dash ",
      "1 tsp ",
      "twist of "
   ]
},
 {
   "FIELD1": 440,
   "drinkName": "rum punch",
   "dateModified": "2015-09-06 16:48:58",
   "idDrink": 14978,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "rum",
      "ginger ale",
      "fruit punch",
      "orange juice",
      "ice"
   ],
   "instructions": "Mix all ingredients in a punch bowl and serve.",
   "measures": [
      "mikey bottle ",
      "large bottle ",
      "355 ml frozen ",
      "355 ml frozen ",
      "crushed "
   ]
},
 {
   "FIELD1": 441,
   "drinkName": "rum runner",
   "dateModified": "2017-09-08 17:40:57",
   "idDrink": 16250,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vqws6t1504888857.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "malibu rum",
      "blackberry brandy",
      "orange juice",
      "pineapple juice",
      "cranberry juice"
   ],
   "instructions": "Mix all ingredients in glass & add ice.",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "3-4 oz ",
      "3-4 oz ",
      "3-4 oz "
   ]
},
 {
   "FIELD1": 442,
   "drinkName": "rum screwdriver",
   "dateModified": "2017-09-08 16:59:32",
   "idDrink": 12091,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/pwl7v81504886372.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "light rum",
      "orange juice"
   ],
   "instructions": "Pour rum into a highball glass over ice cubes. Add orange juice, stir, and serve.",
   "measures": [
      "1 1/2 oz ",
      "5 oz "
   ]
},
 {
   "FIELD1": 443,
   "drinkName": "rum sour",
   "dateModified": "2017-09-08 16:58:44",
   "idDrink": 12093,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/bylfi21504886323.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "light rum",
      "lemon juice",
      "sugar",
      "orange",
      "maraschino cherry"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1/2 tsp superfine ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 444,
   "drinkName": "rum toddy",
   "dateModified": "2017-09-08 16:58:06",
   "idDrink": 12097,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "rum",
      "powdered sugar",
      "lemon peel",
      "water"
   ],
   "instructions": "Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
   "measures": [
      "2 oz light or dark ",
      "2 tsp ",
      "1 twist of ",
      "2 tsp "
   ]
},
 {
   "FIELD1": 445,
   "drinkName": "russian spring punch",
   "dateModified": "2017-09-02 18:31:28",
   "idDrink": 17214,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ctt20s1504373488.jpg",
   "glassType": "highball glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "vodka",
      "creme de cassis",
      "sugar syrup",
      "lemon juice"
   ],
   "instructions": "Pour the ingredients into an highball glass, top with Sparkling wine.",
   "measures": [
      "2.5 cl",
      "1.5 cl",
      "1 cl",
      "2.5 cl"
   ]
},
 {
   "FIELD1": 446,
   "drinkName": "rusty nail",
   "dateModified": "2016-11-04 09:49:42",
   "idDrink": 12101,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "scotch",
      "drambuie",
      "lemon peel"
   ],
   "instructions": "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 447,
   "drinkName": "salty dog",
   "dateModified": "2017-09-08 18:03:36",
   "idDrink": 12107,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "grapefruit juice",
      "gin",
      "salt"
   ],
   "instructions": "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
   "measures": [
      "5 oz ",
      "1 1/2 oz ",
      "1/4 tsp "
   ]
},
 {
   "FIELD1": 448,
   "drinkName": "san francisco",
   "dateModified": "2017-09-08 17:59:21",
   "idDrink": 15184,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "creme de banane",
      "grenadine",
      "orange juice"
   ],
   "instructions": "Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the \"creme\", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.",
   "measures": [
      "2 cl ",
      "2 cl "
   ]
},
 {
   "FIELD1": 449,
   "drinkName": "sangria #1",
   "dateModified": "2015-09-03 04:01:20",
   "idDrink": 13020,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg",
   "glassType": "pitcher",
   "ingredients": [
      "red wine",
      "sugar",
      "orange juice",
      "lemon juice",
      "cloves",
      "cinnamon"
   ],
   "instructions": "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.",
   "measures": [
      "1 bottle ",
      "1/2 cup ",
      "1 cup ",
      "1 cup "
   ]
},
 {
   "FIELD1": 450,
   "drinkName": "sangria - the world's best",
   "dateModified": "2016-07-19 11:31:04",
   "idDrink": 13026,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vysywu1468924264.jpg",
   "glassType": "pitcher",
   "ingredients": [
      "red wine",
      "sugar",
      "lemon",
      "orange",
      "apple",
      "brandy",
      "soda water"
   ],
   "instructions": "Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.",
   "measures": [
      "1 1/2 l ",
      "1 cup ",
      "1 large ",
      "1 large ",
      "1 large ",
      "3-4 oz plain "
   ]
},
 {
   "FIELD1": 451,
   "drinkName": "sazerac",
   "dateModified": "2015-08-18 15:13:28",
   "idDrink": 12127,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "ricard",
      "sugar",
      "peychaud bitters",
      "water",
      "bourbon",
      "lemon peel"
   ],
   "instructions": "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.",
   "measures": [
      "1 tsp ",
      "1/2 tsp superfine ",
      "2 dashes ",
      "1 tsp ",
      "2 oz ",
      "1 twist of "
   ]
},
 {
   "FIELD1": 452,
   "drinkName": "scooter",
   "dateModified": "2017-01-02 20:18:27",
   "idDrink": 12130,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "brandy",
      "amaretto",
      "light cream"
   ],
   "instructions": "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 453,
   "drinkName": "scotch cobbler",
   "dateModified": "2017-09-06 23:17:07",
   "idDrink": 12138,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "scotch",
      "brandy",
      "curacao",
      "orange",
      "mint"
   ],
   "instructions": "Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.",
   "measures": [
      "2 oz ",
      "4 dashes ",
      "4 dashes ",
      "1 slice ",
      "1 "
   ]
},
 {
   "FIELD1": 454,
   "drinkName": "scotch sour",
   "dateModified": "2017-09-08 18:07:16",
   "idDrink": 12158,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "scotch",
      "lime",
      "powdered sugar",
      "lemon",
      "cherry"
   ],
   "instructions": "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.",
   "measures": [
      "1 1/2 oz ",
      "juice of 1/2 ",
      "1/2 tsp ",
      "1/2 slice ",
      "1 "
   ]
},
 {
   "FIELD1": 455,
   "drinkName": "scottish highland liqueur",
   "dateModified": "2015-09-03 05:10:41",
   "idDrink": 12854,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/upqvvp1441253441.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "johnnie walker",
      "honey",
      "angelica root",
      "fennel seeds",
      "lemon peel"
   ],
   "instructions": "Combine all ingreds in aging container. Cover tightly and shake gently several times during the first 24 hrs. After 24 hrs, remove the lemon zest. Cover again and let stand in a cool, dark place for 2 weeks, shaking gently every other day. Strain through a wire sieve to remove the angelica root and fennel. Return to aging container, cover and let stand undisturbed in a cool dark place for 6 months. Siphon or pour clear liqueur into a sterile bottle. The cloudy dregs may be saved for cooking.",
   "measures": [
      "1 fifth ",
      "1 1/2 cup mild ",
      "2 tsp dried and chopped ",
      "1/4 tsp crushed ",
      "2 2 inch strips "
   ]
},
 {
   "FIELD1": 456,
   "drinkName": "screaming orgasm",
   "dateModified": "2017-09-02 22:44:30",
   "idDrink": 13625,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/x894cs1504388670.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "vodka",
      "bailey's irish cream",
      "kahlua"
   ],
   "instructions": "Pour first vodka, then Bailey's, then Kahlua into a cocktail glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
   "measures": [
      "1 oz ",
      "1 1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 457,
   "drinkName": "screwdriver",
   "dateModified": "2017-09-02 12:36:47",
   "idDrink": 12162,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
   "glassType": "highball glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "vodka",
      "orange juice"
   ],
   "instructions": "Mix in a highball glass with ice. Garnish and serve.",
   "measures": [
      "2 oz "
   ]
},
 {
   "FIELD1": 458,
   "drinkName": "sea breeze",
   "dateModified": "2017-09-02 17:59:22",
   "idDrink": 13377,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg",
   "glassType": "highball glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "vodka",
      "cranberry juice",
      "grapefruit juice"
   ],
   "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
   "measures": [
      "1 1/2 oz ",
      "4 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 459,
   "drinkName": "sex on the beach",
   "dateModified": "2016-07-21 10:12:45",
   "idDrink": 12754,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/twsvwr1469092365.jpg",
   "glassType": "highball glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "vodka",
      "peach schnapps",
      "cranberry juice",
      "grapefruit juice"
   ],
   "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
   "measures": [
      "1 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 460,
   "drinkName": "shanghai cocktail",
   "dateModified": "2016-11-10 23:31:18",
   "idDrink": 12186,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ttyrxr1478820678.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "light rum",
      "anisette",
      "grenadine",
      "lemon"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz jamaican ",
      "1 tsp ",
      "1/2 tsp ",
      "juice of 1/4 "
   ]
},
 {
   "FIELD1": 461,
   "drinkName": "shark attack",
   "dateModified": "2017-09-07 15:07:37",
   "idDrink": 16273,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg",
   "glassType": "pitcher",
   "ingredients": [
      "lemonade",
      "water",
      "vodka"
   ],
   "instructions": "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
   "measures": [
      "1 can ",
      "3 cans ",
      "1 1/2 cup "
   ]
},
 {
   "FIELD1": 462,
   "drinkName": "sherry eggnog",
   "dateModified": "2016-11-10 23:29:01",
   "idDrink": 12188,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "sherry",
      "powdered sugar",
      "egg",
      "milk",
      "nutmeg"
   ],
   "instructions": "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.",
   "measures": [
      "2 oz cream ",
      "1 tsp ",
      "1 whole "
   ]
},
 {
   "FIELD1": 463,
   "drinkName": "sherry flip",
   "dateModified": "2016-11-10 23:27:08",
   "idDrink": 12190,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qrryvq1478820428.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "sherry",
      "light cream",
      "powdered sugar",
      "egg",
      "nutmeg"
   ],
   "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
   "measures": [
      "1 1/2 oz cream ",
      "2 tsp ",
      "1 tsp ",
      "1 whole "
   ]
},
 {
   "FIELD1": 464,
   "drinkName": "shot-gun",
   "dateModified": "2017-08-24 09:33:03",
   "idDrink": 16985,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2j1m881503563583.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "jim beam",
      "jack daniels",
      "wild turkey"
   ],
   "instructions": "Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top.",
   "measures": [
      "1 part ",
      "1 part ",
      "1 oz "
   ]
},
 {
   "FIELD1": 465,
   "drinkName": "sidecar",
   "dateModified": "2015-08-18 15:07:32",
   "idDrink": 12196,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/stwxuq1439906852.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "cognac",
      "cointreau",
      "lemon juice"
   ],
   "instructions": "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
   "measures": [
      "2 oz ",
      "1/2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 466,
   "drinkName": "sidecar cocktail",
   "dateModified": "2017-09-07 22:40:28",
   "idDrink": 12198,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "brandy",
      "triple sec",
      "lemon"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "juice of 1/4 "
   ]
},
 {
   "FIELD1": 467,
   "drinkName": "singapore sling",
   "dateModified": "2015-08-18 14:58:08",
   "idDrink": 12214,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tvtrrt1439906288.jpg",
   "glassType": "hurricane glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "cherry brandy",
      "grenadine",
      "gin",
      "sweet and sour",
      "carbonated water",
      "cherry"
   ],
   "instructions": "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into highball glass. Garnish with pineapple and cocktail cherry.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1 oz ",
      "2 oz "
   ]
},
 {
   "FIELD1": 468,
   "drinkName": "sloe gin cocktail",
   "dateModified": "2017-09-08 17:52:12",
   "idDrink": 12224,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/d7mo481504889531.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "sloe gin",
      "dry vermouth",
      "orange bitters"
   ],
   "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "2 oz ",
      "1/4 tsp ",
      "1 dash "
   ]
},
 {
   "FIELD1": 469,
   "drinkName": "smut",
   "dateModified": "2017-09-02 16:23:32",
   "idDrink": 17141,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
   "glassType": "beer mug",
   "ingredients": [
      "red wine",
      "peach schnapps",
      "pepsi cola",
      "orange juice"
   ],
   "instructions": "Throw it all together and serve real cold.",
   "measures": [
      "1/3 part ",
      "1 shot ",
      "1/3 part ",
      "1/3 part "
   ]
},
 {
   "FIELD1": 470,
   "drinkName": "snake bite (uk)",
   "dateModified": "2015-09-03 03:52:14",
   "idDrink": 13389,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
   "glassType": "pint glass",
   "ingredients": [
      "lager",
      "cider"
   ],
   "instructions": "Pour ingredients into a pint glass. Drink. Fall over.",
   "measures": [
      "1/2 pint ",
      "1/2 pint sweet or dry "
   ]
},
 {
   "FIELD1": 471,
   "drinkName": "snakebite and black",
   "dateModified": "2015-09-03 03:54:23",
   "idDrink": 15789,
   "type": "alcoholic",
   "category": "beer",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rssvwv1441248863.jpg",
   "glassType": "pint glass",
   "ingredients": [
      "lager",
      "cider",
      "blackcurrant squash"
   ],
   "instructions": "Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another.",
   "measures": [
      "1/2 pint ",
      "1/2 pint ",
      "a little bit of "
   ]
},
 {
   "FIELD1": 472,
   "drinkName": "snowball",
   "dateModified": "2017-09-06 23:03:36",
   "idDrink": 14195,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/7ibfs61504735416.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "advocaat",
      "lemonade",
      "lemon",
      "ice"
   ],
   "instructions": "Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once.",
   "measures": [
      "1 1/2 oz ",
      "8-10 oz cold ",
      "1 slice ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 473,
   "drinkName": "sol y sombra",
   "dateModified": "2017-08-22 19:19:43",
   "idDrink": 12256,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg",
   "glassType": "brandy snifter",
   "ingredients": [
      "brandy",
      "anisette"
   ],
   "instructions": "Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is \"Sun and Shade\", and after sampling this drink, you'll understand why. Thanks, Kirby.)",
   "measures": [
      "1 1/2 oz ",
      "1 1/2 oz "
   ]
},
 {
   "FIELD1": 474,
   "drinkName": "space odyssey",
   "dateModified": "2017-09-07 21:57:23",
   "idDrink": 15226,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "151 proof rum",
      "malibu rum",
      "pineapple juice",
      "orange juice",
      "grenadine",
      "cherries"
   ],
   "instructions": "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
   "measures": [
      "1 shot bacardi ",
      "1 shot ",
      "1 shot "
   ]
},
 {
   "FIELD1": 475,
   "drinkName": "spanish chocolate",
   "dateModified": "2017-02-20 15:04:14",
   "idDrink": 12750,
   "type": "non alcoholic",
   "category": "cocoa",
   "picture": "http://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "milk",
      "chocolate",
      "cinnamon",
      "egg yolk"
   ],
   "instructions": "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.",
   "measures": [
      "2 cups ",
      "2 oz sweet ",
      "1/2 tsp ",
      "2 beaten "
   ]
},
 {
   "FIELD1": 476,
   "drinkName": "spiced peach punch",
   "dateModified": "2016-07-19 11:32:11",
   "idDrink": 13032,
   "type": "non alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "peach nectar",
      "orange juice",
      "brown sugar",
      "cinnamon",
      "cloves",
      "lime juice"
   ],
   "instructions": "Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.",
   "measures": [
      "46 oz ",
      "20 oz ",
      "1/2 cup ",
      "3 3-inch ",
      "1/2 tsp ",
      "2 tblsp "
   ]
},
 {
   "FIELD1": 477,
   "drinkName": "spiking coffee",
   "dateModified": "2017-02-20 14:52:55",
   "idDrink": 12780,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "coffee",
      "cinnamon"
   ],
   "instructions": "Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug.",
   "measures": [
      "\n"
   ]
},
 {
   "FIELD1": 478,
   "drinkName": "spritz",
   "dateModified": "2017-09-02 18:34:25",
   "idDrink": 17215,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/j9evx11504373665.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "prosecco",
      "campari",
      "soda water"
   ],
   "instructions": "Build into glass over ice, garnish and serve.",
   "measures": [
      "6 cl",
      "4 cl",
      "splash"
   ]
},
 {
   "FIELD1": 479,
   "drinkName": "stinger",
   "dateModified": "2017-09-02 12:40:33",
   "idDrink": 17193,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "brandy",
      "white creme de menthe"
   ],
   "instructions": "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 480,
   "drinkName": "stone sour",
   "dateModified": "2016-09-01 09:51:35",
   "idDrink": 12308,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vruvtp1472719895.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "apricot brandy",
      "orange juice",
      "sweet and sour"
   ],
   "instructions": "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 481,
   "drinkName": "strawberry daiquiri",
   "dateModified": "2017-09-06 23:15:36",
   "idDrink": 12316,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "strawberry schnapps",
      "light rum",
      "lime juice",
      "powdered sugar",
      "strawberries"
   ],
   "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
   "measures": [
      "1/2 oz ",
      "1 oz ",
      "1 oz ",
      "1 tsp ",
      "1 oz "
   ]
},
 {
   "FIELD1": 482,
   "drinkName": "strawberry lemonade",
   "dateModified": "2016-07-19 11:33:45",
   "idDrink": 13036,
   "type": "non alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "lemon",
      "sugar",
      "strawberries",
      "water"
   ],
   "instructions": "Throw everything into a blender and mix until fairly smooth. Serve over ice.",
   "measures": [
      "juice of 1 ",
      "1 tblsp ",
      "8-10 ripe ",
      "1 cup "
   ]
},
 {
   "FIELD1": 483,
   "drinkName": "strawberry margarita",
   "dateModified": "2015-08-18 14:41:51",
   "idDrink": 12322,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "strawberry schnapps",
      "tequila",
      "triple sec",
      "lemon juice",
      "strawberries",
      "salt"
   ],
   "instructions": "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
   "measures": [
      "1/2 oz ",
      "1 oz ",
      "1/2 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 484,
   "drinkName": "strawberry shivers",
   "dateModified": "2017-02-20 15:10:04",
   "idDrink": 12722,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "strawberries",
      "honey",
      "water"
   ],
   "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
   "measures": [
      "1 1/2 cup ",
      "4 tsp ",
      "1/2 cup "
   ]
},
 {
   "FIELD1": 485,
   "drinkName": "sunny holiday punch",
   "dateModified": "2016-07-19 11:39:18",
   "idDrink": 13042,
   "type": "optional alcohol",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rywtwy1468924758.jpg",
   "glassType": "punch bowl",
   "ingredients": [
      "pineapple juice",
      "club soda",
      "orange juice",
      "lemon",
      "berries",
      "champagne"
   ],
   "instructions": "Combine all ingredients in a punch bowl.",
   "measures": [
      "46 oz chilled ",
      "28 oz ",
      "6 oz frozen ",
      "1 ",
      "2 cups ",
      "1 bottle "
   ]
},
 {
   "FIELD1": 486,
   "drinkName": "surf city lifesaver",
   "dateModified": "2017-02-20 14:58:19",
   "idDrink": 12760,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2rzfer1487602699.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "ouzo",
      "bailey's irish cream",
      "gin",
      "grand marnier"
   ],
   "instructions": "Lots of ice and soda top up in tall glass with cherry and a grin.",
   "measures": [
      "1 part ",
      "1 part ",
      "2 parts ",
      "1/2 part "
   ]
},
 {
   "FIELD1": 487,
   "drinkName": "swedish coffee",
   "dateModified": "2015-09-03 03:19:43",
   "idDrink": 15521,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ywtrvt1441246783.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "coffee",
      "aquavit",
      "sugar"
   ],
   "instructions": "Pour the coffee in an ordinary coffee cup. Add the aquavit. Add sugar by taste. Stir and have a nice evening (morning)",
   "measures": [
      "1 cup",
      "4 cl ",
      "by taste "
   ]
},
 {
   "FIELD1": 488,
   "drinkName": "sweet bananas",
   "dateModified": "2017-02-20 15:09:05",
   "idDrink": 12724,
   "type": "non alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "milk",
      "banana",
      "honey"
   ],
   "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
   "measures": [
      "2 cups ",
      "1 ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 489,
   "drinkName": "sweet sangria",
   "dateModified": "2016-07-19 11:30:28",
   "idDrink": 13024,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
   "glassType": "pitcher",
   "ingredients": [
      "red wine",
      "sugar",
      "water",
      "apple",
      "orange",
      "lime",
      "lemon",
      "fresca"
   ],
   "instructions": "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.",
   "measures": [
      "2 bottles ",
      "1 cup ",
      "2 cups hot ",
      "1 cup ",
      "wedges\n",
      "wedges\n"
   ]
},
 {
   "FIELD1": 490,
   "drinkName": "sweet tooth",
   "dateModified": "2017-08-24 09:37:01",
   "idDrink": 16990,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/j6rq6h1503563821.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "godiva liqueur",
      "milk"
   ],
   "instructions": "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like.",
   "measures": [
      "2 shots "
   ]
},
 {
   "FIELD1": 491,
   "drinkName": "talos coffee",
   "dateModified": "2015-09-03 03:15:18",
   "idDrink": 14860,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rswqpy1441246518.jpg",
   "glassType": "brandy snifter",
   "ingredients": [
      "grand marnier",
      "coffee"
   ],
   "instructions": "Add your GM and then add your coffee.",
   "measures": [
      "3 parts ",
      "1 part "
   ]
},
 {
   "FIELD1": 492,
   "drinkName": "tennesee mud",
   "dateModified": "2015-09-03 03:02:50",
   "idDrink": 15515,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/txruqv1441245770.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "coffee",
      "jack daniels",
      "amaretto",
      "whipped cream"
   ],
   "instructions": "Mix Coffee, Jack Daniels and Amaretto. Add Cream on top.",
   "measures": [
      "8 oz ",
      "4 oz ",
      "4 oz "
   ]
},
 {
   "FIELD1": 493,
   "drinkName": "tequila fizz",
   "dateModified": "2017-09-08 17:53:57",
   "idDrink": 12362,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "tequila",
      "lemon juice",
      "grenadine",
      "egg white",
      "ginger ale"
   ],
   "instructions": "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
   "measures": [
      "2 oz ",
      "1 tblsp ",
      "3/4 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 494,
   "drinkName": "tequila sour",
   "dateModified": "2017-09-07 22:43:21",
   "idDrink": 12370,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "tequila",
      "lemon",
      "powdered sugar",
      "lemon",
      "cherry"
   ],
   "instructions": "Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "1/2 slice ",
      "1 "
   ]
},
 {
   "FIELD1": 495,
   "drinkName": "tequila sunrise",
   "dateModified": "2016-12-04 19:18:23",
   "idDrink": 13621,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
   "glassType": "highball glass",
   "strIBA": "Contemporary Classics",
   "ingredients": [
      "tequila",
      "orange juice",
      "grenadine"
   ],
   "instructions": "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
   "measures": [
      "2 measures "
   ]
},
 {
   "FIELD1": 496,
   "drinkName": "tequila surprise",
   "dateModified": "2017-09-06 23:06:21",
   "idDrink": 14602,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/8189p51504735581.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "tequila",
      "tabasco sauce"
   ],
   "instructions": "Fill shot glass with Tequila. Add drops of Tobasco sauce.",
   "measures": [
      "full glass ",
      "about 8 drops "
   ]
},
 {
   "FIELD1": 497,
   "drinkName": "texas rattlesnake",
   "dateModified": "2017-09-08 17:55:50",
   "idDrink": 15178,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rtohqp1504889750.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yukon jack",
      "cherry brandy",
      "southern comfort",
      "sweet and sour"
   ],
   "instructions": "Mix all ingredients and Shake well. Sweet at first, with a BITE at the end...",
   "measures": [
      "1 part ",
      "1/2 part ",
      "1 part ",
      "1 splash "
   ]
},
 {
   "FIELD1": 498,
   "drinkName": "texas sling",
   "dateModified": "2017-09-08 18:02:39",
   "idDrink": 15639,
   "type": "alcoholic",
   "category": "milk / float / shake",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ypl13s1504890158.jpg",
   "glassType": "wine glass",
   "ingredients": [
      "kahlua",
      "irish cream",
      "amaretto",
      "151 proof rum",
      "cream"
   ],
   "instructions": "Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.",
   "measures": [
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz ",
      "1/2 oz bacardi ",
      "1 oz "
   ]
},
 {
   "FIELD1": 499,
   "drinkName": "thai coffee",
   "dateModified": "2015-09-03 03:23:45",
   "idDrink": 12782,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "coffee",
      "coriander",
      "cardamom",
      "sugar",
      "whipping cream",
      "ice"
   ],
   "instructions": "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away.",
   "measures": [
      "6 tblsp ground",
      "1/4 tsp ",
      "4-5 whole green "
   ]
},
 {
   "FIELD1": 500,
   "drinkName": "thai iced coffee",
   "dateModified": "2015-09-03 03:00:50",
   "idDrink": 12784,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "coffee",
      "sugar",
      "cream",
      "cardamom"
   ],
   "instructions": "Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in highball glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.",
   "measures": [
      "black",
      "pods\n"
   ]
},
 {
   "FIELD1": 501,
   "drinkName": "thai iced tea",
   "dateModified": "2015-09-03 02:59:28",
   "idDrink": 12786,
   "type": "non alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "tea",
      "water",
      "condensed milk",
      "ice",
      "mint"
   ],
   "instructions": "Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings.",
   "measures": [
      "1/4 cup thai ",
      "1/2 cup boiling ",
      "2 tsp sweetened ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 502,
   "drinkName": "the evil blue thing",
   "dateModified": "2017-09-07 15:04:19",
   "idDrink": 16271,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "creme de cacao",
      "blue curacao",
      "light rum"
   ],
   "instructions": "Pour ingredients into glass, and drop in a blue whale! The blue whale isn't really necessary, but it makes the drink more \"fun\".",
   "measures": [
      "1 1/2 oz ",
      "1 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 503,
   "drinkName": "thriller",
   "dateModified": "2016-04-28 19:21:54",
   "idDrink": 12388,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "scotch",
      "wine",
      "orange juice"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
   "measures": [
      "1 1/2 oz ",
      "1 oz green ginger ",
      "1 oz "
   ]
},
 {
   "FIELD1": 504,
   "drinkName": "tia-maria",
   "dateModified": "2017-09-02 16:44:58",
   "idDrink": 12856,
   "type": "alcoholic",
   "category": "homemade liqueur",
   "picture": "http://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "water",
      "brown sugar",
      "coffee",
      "rum",
      "vanilla extract"
   ],
   "instructions": "Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.",
   "measures": [
      "1 cup ",
      "3/4-1 cup ",
      "4 tsp ",
      "1 cup ",
      "4 tsp "
   ]
},
 {
   "FIELD1": 505,
   "drinkName": "tom collins",
   "dateModified": "2015-08-18 15:21:22",
   "idDrink": 12402,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qystvv1439907682.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "gin",
      "lemon juice",
      "sugar",
      "club soda",
      "maraschino cherry",
      "orange"
   ],
   "instructions": "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.",
   "measures": [
      "2 oz ",
      "1 oz ",
      "1 tsp superfine ",
      "3 oz ",
      "1 ",
      "1 "
   ]
},
 {
   "FIELD1": 506,
   "drinkName": "tomato tang",
   "dateModified": "2017-02-20 15:07:58",
   "idDrink": 12726,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "tomato juice",
      "lemon juice",
      "celery salt"
   ],
   "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
   "measures": [
      "2 cups ",
      "1-2 tblsp ",
      "1 dash "
   ]
},
 {
   "FIELD1": 507,
   "drinkName": "tommy's margarita",
   "dateModified": "2017-09-02 18:37:54",
   "idDrink": 17216,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "tequila",
      "lime juice",
      "agave syrup"
   ],
   "instructions": "Shake and strain into a chilled cocktail glass.",
   "measures": [
      "4.5 cl",
      "1.5 cl",
      "2 spoons"
   ]
},
 {
   "FIELD1": 508,
   "drinkName": "turf cocktail",
   "dateModified": "2015-09-06 16:46:07",
   "idDrink": 12418,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "dry vermouth",
      "gin",
      "anis",
      "bitters",
      "orange peel"
   ],
   "instructions": "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
   "measures": [
      "1 oz ",
      "1 oz ",
      "1/4 tsp ",
      "2 dashes ",
      "twist of "
   ]
},
 {
   "FIELD1": 509,
   "drinkName": "turkeyball",
   "dateModified": "2015-09-06 16:44:53",
   "idDrink": 15006,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rxurpr1441554292.jpg",
   "glassType": "shot glass",
   "ingredients": [
      "wild turkey",
      "amaretto",
      "pineapple juice"
   ],
   "instructions": "Shake with ice and strain into a shot glass.",
   "measures": [
      "1 oz ",
      "3/4 oz ",
      "1 splash "
   ]
},
 {
   "FIELD1": 510,
   "drinkName": "tuxedo cocktail",
   "dateModified": "2017-09-02 12:42:31",
   "idDrink": 12420,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/4u0nbl1504352551.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "dry vermouth",
      "gin",
      "maraschino liqueur",
      "anis",
      "orange bitters",
      "cherry"
   ],
   "instructions": "Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and a twist of lemon zest.",
   "measures": [
      "1 1/2 oz ",
      "1 1/2 oz ",
      "1/4 tsp ",
      "1/4 tsp ",
      "2 dashes ",
      "1 "
   ]
},
 {
   "FIELD1": 511,
   "drinkName": "valencia cocktail",
   "dateModified": "2017-04-23 20:27:20",
   "idDrink": 12434,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/9myuc11492975640.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "apricot brandy",
      "orange juice",
      "orange bitters"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1 tblsp ",
      "2 dashes "
   ]
},
 {
   "FIELD1": 512,
   "drinkName": "vampiro",
   "dateModified": "2017-09-02 18:44:06",
   "idDrink": 17217,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "tequila",
      "tomato juice",
      "orange juice",
      "lime juice",
      "sugar syrup",
      "salt"
   ],
   "instructions": "Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first \"rim\" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.",
   "measures": [
      "6 cl",
      "3 cl",
      "3 cl",
      "1.5 cl",
      "1 dash",
      "1 pinch"
   ]
},
 {
   "FIELD1": 513,
   "drinkName": "van vleet",
   "dateModified": "2017-04-23 20:29:31",
   "idDrink": 12436,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/fgq2bl1492975771.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "light rum",
      "maple syrup",
      "lemon juice"
   ],
   "instructions": "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
   "measures": [
      "3 oz ",
      "1 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 514,
   "drinkName": "vermouth cassis",
   "dateModified": "2015-09-06 16:51:14",
   "idDrink": 12442,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/tswpxx1441554674.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "dry vermouth",
      "creme de cassis",
      "carbonated water"
   ],
   "instructions": "Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz "
   ]
},
 {
   "FIELD1": 515,
   "drinkName": "vesper",
   "dateModified": "2017-09-02 18:48:34",
   "idDrink": 17218,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg",
   "glassType": "cocktail glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "gin",
      "vodka",
      "lillet blanc"
   ],
   "instructions": "Shake over ice until well chilled, then strain into a deep goblet and garnish with a thin slice of lemon peel.",
   "measures": [
      "6 cl",
      "1.5 cl",
      "0.75 cl"
   ]
},
 {
   "FIELD1": 516,
   "drinkName": "vesuvio",
   "dateModified": "2017-04-23 20:36:43",
   "idDrink": 12444,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/26cq601492976203.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "light rum",
      "sweet vermouth",
      "lemon",
      "powdered sugar",
      "egg white"
   ],
   "instructions": "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
   "measures": [
      "1 oz ",
      "1/2 oz ",
      "juice of 1/2 ",
      "1 tsp ",
      "1 "
   ]
},
 {
   "FIELD1": 517,
   "drinkName": "veteran",
   "dateModified": "2017-04-23 20:37:36",
   "idDrink": 12446,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/iwml9t1492976255.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "dark rum",
      "cherry brandy"
   ],
   "instructions": "Pour the rum and cherry brandy into an old-fashioned glass almost filled with ice cubes. Stir well.",
   "measures": [
      "2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 518,
   "drinkName": "victor",
   "dateModified": "2017-04-23 20:40:16",
   "idDrink": 12450,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "gin",
      "sweet vermouth",
      "brandy"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "1 1/2 oz ",
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 519,
   "drinkName": "victory collins",
   "dateModified": "2017-04-23 20:43:39",
   "idDrink": 12452,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "lemon juice",
      "grape juice",
      "powdered sugar",
      "orange"
   ],
   "instructions": "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.",
   "measures": [
      "1 1/2 oz ",
      "3 oz ",
      "3 oz unsweetened ",
      "1 tsp ",
      "1 slice "
   ]
},
 {
   "FIELD1": 520,
   "drinkName": "vodka and tonic",
   "dateModified": "2017-09-07 22:41:40",
   "idDrink": 12460,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "vodka",
      "tonic water"
   ],
   "instructions": "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
   "measures": [
      "2 oz "
   ]
},
 {
   "FIELD1": 521,
   "drinkName": "vodka fizz",
   "dateModified": "2015-09-03 05:24:03",
   "idDrink": 16967,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg",
   "glassType": "white wine glass",
   "ingredients": [
      "vodka",
      "half-and-half",
      "limeade",
      "ice",
      "nutmeg"
   ],
   "instructions": "Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
   "measures": [
      "2 oz ",
      "2 oz ",
      "2 oz "
   ]
},
 {
   "FIELD1": 522,
   "drinkName": "vodka martini",
   "dateModified": "2015-08-18 15:02:08",
   "idDrink": 14167,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "vodka",
      "dry vermouth",
      "olive"
   ],
   "instructions": "Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.",
   "measures": [
      "1 1/2 oz ",
      "3/4 oz ",
      "1 "
   ]
},
 {
   "FIELD1": 523,
   "drinkName": "vodka russian",
   "dateModified": "2016-02-03 15:58:49",
   "idDrink": 15403,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/rpttur1454515129.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vodka",
      "schweppes russchian"
   ],
   "instructions": "Mix it as a ordinary drink .",
   "measures": [
      "2 oz "
   ]
},
 {
   "FIELD1": 524,
   "drinkName": "waikiki beachcomber",
   "dateModified": "2015-09-02 16:43:03",
   "idDrink": 12474,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ysuqus1441208583.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "triple sec",
      "gin",
      "pineapple juice"
   ],
   "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
   "measures": [
      "3/4 oz ",
      "3/4 oz ",
      "1 tblsp "
   ]
},
 {
   "FIELD1": 525,
   "drinkName": "whiskey sour",
   "dateModified": "2017-09-02 12:45:25",
   "idDrink": 12516,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/o56h041504352725.jpg",
   "glassType": "old-fashioned glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "blended whiskey",
      "lemon",
      "powdered sugar",
      "cherry",
      "lemon"
   ],
   "instructions": "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
   "measures": [
      "2 oz ",
      "juice of 1/2 ",
      "1/2 tsp ",
      "1 ",
      "1/2 slice "
   ]
},
 {
   "FIELD1": 526,
   "drinkName": "whisky mac",
   "dateModified": "2016-04-28 19:24:18",
   "idDrink": 12518,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "scotch",
      "wine"
   ],
   "instructions": "Pour both of the ingredients into a wine goblet with no ice.",
   "measures": [
      "1 1/2 oz ",
      "1 oz green ginger "
   ]
},
 {
   "FIELD1": 527,
   "drinkName": "white lady",
   "dateModified": "2017-09-02 12:49:52",
   "idDrink": 17194,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/jofsaz1504352991.jpg",
   "glassType": "cocktail glass",
   "strIBA": "Unforgettables",
   "ingredients": [
      "gin",
      "triple sec",
      "lemon juice"
   ],
   "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
   "measures": [
      "4cl",
      "3cl",
      "2cl"
   ]
},
 {
   "FIELD1": 528,
   "drinkName": "white russian",
   "dateModified": "2016-08-28 18:35:32",
   "idDrink": 12528,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "vodka",
      "coffee liqueur",
      "light cream"
   ],
   "instructions": "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
   "measures": [
      "2 oz ",
      "1 oz "
   ]
},
 {
   "FIELD1": 529,
   "drinkName": "whitecap margarita",
   "dateModified": "2015-09-02 17:00:22",
   "idDrink": 16158,
   "type": "alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
   "glassType": "margarita/coupette glass",
   "ingredients": [
      "ice",
      "tequila",
      "cream of coconut",
      "lime juice"
   ],
   "instructions": "Place all ingredients in a blender and blend until smooth. This makes one drink.",
   "measures": [
      "1 cup ",
      "2 oz ",
      "1/4 cup ",
      "3 tblsp fresh "
   ]
},
 {
   "FIELD1": 530,
   "drinkName": "wine cooler",
   "dateModified": "2016-09-08 15:16:50",
   "idDrink": 13056,
   "type": "optional alcohol",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/yutxtv1473344210.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "red wine",
      "lemon-lime soda",
      "ice"
   ],
   "instructions": "Mix wine and soft drink. Pour into glass. Add ice.",
   "measures": [
      "2 oz white or ",
      "5 oz ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 531,
   "drinkName": "wine punch",
   "dateModified": "2016-09-08 15:18:30",
   "idDrink": 13058,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/txustu1473344310.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "red wine",
      "lemon",
      "orange juice",
      "orange",
      "pineapple juice"
   ],
   "instructions": "Combine all of the ingredients and pour over a block of ice.",
   "measures": [
      "1 bottle ",
      "2 ",
      "1 cup ",
      "3 ",
      "1 cup "
   ]
},
 {
   "FIELD1": 532,
   "drinkName": "yellow bird",
   "dateModified": "2017-09-02 18:53:31",
   "idDrink": 17219,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg",
   "glassType": "cocktail glass",
   "strIBA": "New Era Drinks",
   "ingredients": [
      "white rum",
      "galliano",
      "triple sec",
      "lime juice"
   ],
   "instructions": "Shake and strain into a chilled cocktail glass",
   "measures": [
      "3 cl",
      "1.5 cl",
      "1.5 cl",
      "1.5 cl"
   ]
},
 {
   "FIELD1": 533,
   "drinkName": "yoghurt cooler",
   "dateModified": "2015-09-03 05:27:46",
   "idDrink": 12728,
   "type": "non alcoholic",
   "category": "other/unknown",
   "picture": "http://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "yoghurt",
      "fruit",
      "ice"
   ],
   "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed.",
   "measures": [
      "1 cup ",
      "1 cup "
   ]
},
 {
   "FIELD1": 534,
   "drinkName": "zambeer",
   "dateModified": "2017-01-28 16:06:18",
   "idDrink": 15933,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/bje5401485619578.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "sambuca",
      "root beer",
      "ice"
   ],
   "instructions": "Mix sambuca with rootbeer and stir. Add ice",
   "measures": [
      "1 1/2 oz ",
      "add 10 oz ",
      "cubes\n"
   ]
},
 {
   "FIELD1": 535,
   "drinkName": "zenmeister",
   "dateModified": "2016-11-15 11:31:02",
   "idDrink": 15254,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/qyuvsu1479209462.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "jägermeister",
      "root beer"
   ],
   "instructions": "Mix together and enjoy",
   "measures": [
      "1/2 oz ",
      "1/2 oz "
   ]
},
 {
   "FIELD1": 536,
   "drinkName": "ziemes martini apfelsaft",
   "dateModified": "2017-01-28 16:08:07",
   "idDrink": 14157,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/xnzr2p1485619687.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "vermouth",
      "apple juice"
   ],
   "instructions": "Serve without ice. At least the juice shold have room temperature.",
   "measures": [
      "4 cl ",
      "16 cl "
   ]
},
 {
   "FIELD1": 537,
   "drinkName": "zima blaster",
   "dateModified": "2017-01-28 16:09:57",
   "idDrink": 17027,
   "type": "alcoholic",
   "category": "ordinary drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/1wifuv1485619797.jpg",
   "glassType": "hurricane glass",
   "ingredients": [
      "zima",
      "chambord raspberry liqueur"
   ],
   "instructions": "Fill glass with ice. Pour in Chambord, then fill with Zima. Mix and enjoy.",
   "measures": [
      "12 oz ",
      "3 oz "
   ]
},
 {
   "FIELD1": 538,
   "drinkName": "zimadori zinger",
   "dateModified": "2017-01-28 16:12:00",
   "idDrink": 15801,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/bw8gzx1485619920.jpg",
   "glassType": "collins glass",
   "ingredients": [
      "midori melon liqueur",
      "zima"
   ],
   "instructions": "Pour Zima in a collins glass over ice and then pour the shot of Midori. Don't stir. Garnish with a cherry.",
   "measures": [
      "1.5 oz ",
      "12 oz "
   ]
},
 {
   "FIELD1": 539,
   "drinkName": "zinger",
   "dateModified": "2017-01-28 16:13:34",
   "idDrink": 14888,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg",
   "glassType": "highball glass",
   "ingredients": [
      "peachtree schnapps",
      "surge"
   ],
   "instructions": "Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.",
   "measures": [
      "4 shots ",
      "4 shots "
   ]
},
 {
   "FIELD1": 540,
   "drinkName": "zipperhead",
   "dateModified": "2017-01-28 16:17:15",
   "idDrink": 16942,
   "type": "alcoholic",
   "category": "shot",
   "picture": "http://www.thecocktaildb.com/images/media/drink/r2qzhu1485620235.jpg",
   "glassType": "whiskey sour glass",
   "ingredients": [
      "chambord raspberry liqueur",
      "vodka",
      "soda water"
   ],
   "instructions": "Fill glass with rocks, add straw before putting in liquor. Then add the ingredients in order, trying to keep layered as much as possible (i.e. Chambord on bottom, then Vodka, Then soda on top).",
   "measures": [
      "1 shot ",
      "1 shot ",
      "fill with "
   ]
},
 {
   "FIELD1": 541,
   "drinkName": "zippy's revenge",
   "dateModified": "2017-01-28 16:18:33",
   "idDrink": 14065,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/1sqm7n1485620312.jpg",
   "glassType": "old-fashioned glass",
   "ingredients": [
      "amaretto",
      "rum",
      "kool-aid"
   ],
   "instructions": "Mix Kool-Aid to taste then add Rum and ammaretto. shake well to disolve the sugar in the Kool-Aid... serve cold",
   "measures": [
      "2 oz ",
      "2 oz ",
      "4 oz grape "
   ]
},
 {
   "FIELD1": 542,
   "drinkName": "zizi coin-coin",
   "dateModified": "2017-01-28 16:25:52",
   "idDrink": 14594,
   "type": "alcoholic",
   "category": "punch / party drink",
   "picture": "http://www.thecocktaildb.com/images/media/drink/0fbo2t1485620752.jpg",
   "glassType": "margarita/coupette glass",
   "ingredients": [
      "cointreau",
      "lemon juice",
      "ice",
      "lemon"
   ],
   "instructions": "Pour 5cl of Cointreau on ice, add 2cl of fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass.",
   "measures": [
      "5 cl ",
      "2 cl ",
      "cubes\n",
      "or lime\n"
   ]
},
 {
   "FIELD1": 543,
   "drinkName": "zoksel",
   "dateModified": "2017-01-28 16:28:50",
   "idDrink": 15691,
   "type": "alcoholic",
   "category": "soft drink / soda",
   "picture": "http://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg",
   "glassType": "beer pilsner",
   "ingredients": [
      "beer",
      "root beer",
      "lemonade",
      "coca-cola",
      "7-up",
      "creme de cassis",
      "lemon"
   ],
   "instructions": "No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.",
   "measures": [
      "\n",
      "slice\n"
   ]
},
 {
   "FIELD1": 544,
   "drinkName": "zorbatini",
   "dateModified": "2017-01-28 16:32:35",
   "idDrink": 16963,
   "type": "alcoholic",
   "category": "cocktail",
   "picture": "http://www.thecocktaildb.com/images/media/drink/wtkqgb1485621155.jpg",
   "glassType": "cocktail glass",
   "ingredients": [
      "vodka",
      "ouzo"
   ],
   "instructions": "Prepare like a Martini. Garnish with a green olive.",
   "measures": [
      "1 1/4 oz stoli ",
      "1/4 oz "
   ]
},
 {
   "FIELD1": 545,
   "drinkName": "zorro",
   "dateModified": "2017-01-28 16:34:43",
   "idDrink": 15328,
   "type": "alcoholic",
   "category": "coffee / tea",
   "picture": "http://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
   "glassType": "coffee mug",
   "ingredients": [
      "sambuca",
      "bailey's irish cream",
      "white creme de menthe"
   ],
   "instructions": "add all and pour black coffee and add whipped cream on top.",
   "measures": [
      "2 cl ",
      "2 cl ",
      "2 cl "
   ]
}
]

const drinkSeeds = DRINKS.map( drink => {
   return {
      drinkName: drink["drinkName"],
      idDrink: drink["idDrink"],
      type: drink["type"],
      category: drink["category"],
      picture: drink["picture"],
      glassType: drink["glassType"],
      ingredients: drink["ingredients"].map((ingredient, i) => ({
         measure: drink["measures"][i],
         ingredient
      })),
      instructions: drink["instructions"],
   }
})

// console.log(drinkSeeds.filter( d => d.idDrink === 11050))


Drink.insertMany(drinkSeeds, (err, drinks) => {
	if (err) console.log(err)
	console.log(`🌈 Inserted ${drinkSeeds.length} drinks 🌈`)
	process.exit()
>>>>>>> c4aa578b9110c6e2f27d94eedf80b0814a0deb1e
})