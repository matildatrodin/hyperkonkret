import Heck from '../../images/skog.jpg';

export const questionexample = [
        {
        id: 1,
        exercise_id: 1,
        type: "multiple-choice",
        image: "",
        question: "Vilken av följande ska du inte äta?",
        concrete: "Vilken är GIFTIG ?!?",
        answer: "[0]Kantarell\n[1]Flugsvamp\n[0]Något gott\n[0]Daggmask",
        order: 1
    },
    {
        id: 2,
        exercise_id: 1,
        type: "multiple-choice",
        image: require('../../images/skog.jpg'),
        question: "Vad gör du om du är vilse i skogen?",
        concrete: "Vad har dina föräldrar sagt???",
        answer: "[1]Kramar ett träd\n[0]Springer runt i panik\n[0]Ingenting\n[0]Ringer en vän",
        order: 2
    },
    {
        id: 3,
        exercise_id: 2,
        type: "match",
        image: "",
        question: "Vilka passar ihop?",
        concrete: "FlugSVAMP :)",
        answer: "Flugsvamp[=]Svamp\nHäst[=]Djur\nPizza[=]Mat\nSpanska[=]Språk",
        order: 1
    },
    {
        id: 4,
        exercise_id: 2,
        type: "match",
        image: "",
        question: "Matcha stora och små bokstäver",
        concrete: "Can't help you friend",
        answer: "A[=]a\nH[=]h\nP[=]p\nS[=]s",
        order: 2
    }
];
