import mongoose from "mongoose";

/*  
?--------------------------------- NOTED ------------------------------------------------------------
!   THIS IS JUST A DUMMY DATA: A LIST OF ALL THE ADMINS OF EACH DEPARTMENT
!   THAT WE HAVE IN OUR DATABASE THAT WE NEED TO USE FOR TESTING, DEVELOPMENT
!   AND DEMO PURPOSES ONLY. THIS IS NOT THE ACTUAL DATA THAT WE HAVE IN OUR DATABASE.
?----------------------------------------------------------------------------------------------------
*/

//! UNIQUES IDS FOR EACH USER THAT AUTOMATICALLY GENERATED BY MONGOOSE FOR US
const userIds: mongoose.Types.ObjectId[] = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
    {
        _id: userIds[0],
        firstName: "CCSEA",
        lastName: "SOURCE",
        email: "ccsea.source@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p11.jpeg",
        friends: [] as mongoose.Types.ObjectId[],
        location: "San Fran, CA",
        occupation: "Admin",
        viewedProfile: 14561,
        impressions: 888822,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1],
        firstName: "CCSEA",
        lastName: "SOURCE",
        email: "lsu.ozamiz@lsu.edu.ph",
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p3.jpeg",
        friends: [],
        location: "LSU, ozamiz",
        occupation: "Admin",
        viewedProfile: 12351,
        impressions: 55555,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2],
        firstName: "Test",
        lastName: "User",
        email: "lsu.source@lsu.edu.ph",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        picturePath: "p4.jpeg",
        friends: [],
        location: "test-location-ito",
        occupation: "CCSEA BSIT-1",
        viewedProfile: 45468,
        impressions: 19986,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[3],
        firstName: "CCSEA",
        lastName: "UAPSA",
        email: "cardo.talisay@lsu.edu.ph",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p6.jpeg",
        friends: [],
        location: "test-location",
        occupation: "Admin",
        viewedProfile: 41024,
        impressions: 55316,
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
    },
    {
        _id: userIds[4],
        firstName: "Ayahw",
        lastName: "Cole",
        email: "hebrong@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p5.jpeg",
        friends: [],
        location: "Utah, CA",
        occupation: "CCSEA BSIT-3",
        viewedProfile: 40212,
        impressions: 7758,
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
    },
    {
        _id: userIds[5],
        firstName: "Yamete",
        lastName: "Kudasai",
        email: "yemete123@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p7.jpeg",
        friends: [],
        location: "Los Angeles, CA",
        occupation: "CCSEA BSIT-1",
        viewedProfile: 976,
        impressions: 4658,
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
    },
    {
        _id: userIds[6],
        firstName: "Cardo",
        lastName: "Talisay",
        email: "ayahwcole@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p8.jpeg",
        friends: [],
        location: "Chicago, IL",
        occupation: "CCSEA BSIT-3",
        viewedProfile: 1510,
        impressions: 77579,
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0,
    },
    {
        _id: userIds[7],
        firstName: "Hebron",
        lastName: "Games",
        email: "ccsea.uapsa@lsu.edu.ph",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p9.jpeg",
        friends: [],
        location: "Washington, DC",
        occupation: "CCSEA BSIT-3",
        viewedProfile: 19420,
        impressions: 82970,
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
];

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        firstName: "CCSEA",
        lastName: "SOURCE",
        location: "Admin",
        description: "This is the logo of our organization",
        picturePath: "post1.jpeg",
        userPicturePath: "p3.jpeg",
        likes: new Map([
            [userIds[0], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        comments: [
            "Wow nice logo!",
            "Very nays logo indeed",
            "I like this logo",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        firstName: "CCSEA",
        lastName: "UAPSA",
        location: "Admin",
        description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        picturePath: "post2.jpeg",
        userPicturePath: "p6.jpeg",
        likes: new Map([
            [userIds[7], true],
            [userIds[4], true],
            [userIds[1], true],
            [userIds[2], true],
        ]),
        comments: [
            "Nays naman lods keep it down",
            "This is a random comment",
            "I will finish softEng or softEng will finish me",
            "This is a random comment baby",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        firstName: "Ayahw",
        lastName: "Cole",
        location: "CCSEA BSIT-3",
        description:
            "This is a description of a random post that is really long and has no meaning at all",
        picturePath: "post3.jpeg",
        userPicturePath: "p5.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
            [userIds[5], true],
        ]),
        comments: [
            "OH MY GOD THIS IS SO LONG I CAN'T BELIEVE IT",
            "One last comment",
            "I lied, this is not the last comment",
            "I lied again, one more random comment",
            "This is boring",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],
        firstName: "Yamete",
        lastName: "Kudasai",
        location: "CCSEA BSIT-1",
        description:
            "sOFTeNG Magbabagsakan dito in 5 4 3 2.",
        picturePath: "post4.jpeg",
        userPicturePath: "p7.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
        ]),
        comments: [
            "Grades is just a string!",
            "Amen to that",
            "Petition na this",
            "All I want to do is play video games",
            "I'm going to play video games",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[6],
        firstName: "Cardo",
        lastName: "Talisay",
        location: "CCSEA BSCS-3",
        description:
            "This is a test description of a random post thatwill change the world!",
        picturePath: "post5.jpeg",
        userPicturePath: "p8.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true],
        ]),
        comments: [
            "WOW WATTA NAYS POST",
            "wowoowowowow",
            "mas taas nga wowowowowoww",
            "Mas taas ni nga wowowowowowowowow",
            "Ang pinaka taas nga wowowowowowowowowowo",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],
        firstName: "Hebron",
        lastName: "Games",
        location: "CCSEA BSIT-3",
        description:
            "Nung ga IT man ko T.T huhuhu Shift na dis!",
        picturePath: "post6.jpeg",
        userPicturePath: "p9.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
        ]),

        comments: [
            "Nung ga IT man ko T.T.",
            "No let's actually study.",
            "Masisira buhay mo.",
            "Stop it.",
            "Ching chang chocha ching chang chocha ching chang chocha!",
        ],
    },
]