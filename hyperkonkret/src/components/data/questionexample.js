import Heck from '../../images/skog.jpg';

export const questionexample = [
        {
        id: 1,
        exercise_id: 1,
        type: "multiple-choice",
        image: "",
        question: "I vilket landskap ligger Örebro?",
        concrete: "Fundera på om du vet i vilken del av Sverige Örebro ligger. Fundera sedan på vilka alternativ du har att välja på och vad som känns mest rimligt.",
        answer: "[0]Blekinge\n[1]Närke\n[0]Dalarna\n[0]Härjedalen",
        order: 1
    },
    {
        id: 2,
        exercise_id: 1,
        type: "multiple-choice",
        image: require('../../images/skog.jpg'),
        question: "Den här bilden är tagen från det landskap som har den största skogsarean. Vilket landskap är det?",
        concrete: "FIXA fråga.",
        answer: "[1]Kramar ett träd\n[0]Springer runt i panik\n[0]Ingenting\n[0]Ringer en vän",
        order: 2
    },
    {
        id: 3,
        exercise_id: 20, // ändra frågan + id
        type: "match",
        image: "",
        question: "Para ihop ?",
        concrete: "FlugSVAMP :)",
        answer: "Flugsvamp[=]Svamp\nHäst[=]Djur\nPizza[=]Mat\nSpanska[=]Språk",
        order: 1
    },
    {
        id: 4,
        exercise_id: 10, // ändra frågan + id
        type: "match",
        image: "",
        question: "Matcha stora och små bokstäver",
        concrete: "Can't help you friend",
        answer: "A[=]a\nH[=]h\nP[=]p\nS[=]s",
        order: 2
    },
    {
        id: 5,
        exercise_id: 2,
        type: "multiple-choice",
        image: "",
        question: "Vad heter det när köpare och säljare är överens om ett pris? Ett svar är rätt",
        concrete: "",
        answer: "[0]Medelpris\n[0]Medlemspris\n[0]Jämförpris\n[1]Jämviktspris",
        order: 1
    },
    {
        id: 6,
        exercise_id: 2,
        type: "multiple-choice",
        image: "",
        question: "Vad är monopol? Ett svar är rätt",
        concrete: "Monopol är också ett spel, men det efterfrågar vi inte här.",
        answer: "[1]Ensamrätt på försäljning eller tillverkning av en vara eller tjänst\n[0]Gemensam rätt på varor och tjänster\n[0]Ensamrätt på en butik\n[0]Flera stora företag som styr marknaden",
        order: 2,
    },
    {
        id: 7,
        exercise_id: 2,
        type: "multiple-choice",
        image: "",
        question: "Vad är en planekonomi? Ett svar är rätt",
        concrete: "",
        answer: "[1]När marknaden styr vad som ska säljas och tillverkas\n[0]När arbetarna bestämmer vad som ska säljas och tillverkas\n[1]När staten bestämmer vad som ska säljas och tillverkas\n[0]När ekonomer planerar vad som ska säljas och tillverkas",
        order: 3,
    },
    {
        id: 8,
        exercise_id: 2,
        type: "match",
        image: "",
        question: "Ordet ekonomi kommer från grekiskan och betyder hushållning. Para ihop de olika meningarna",
        concrete: "",
        answer: "Inkomsterna måste balanseras mot utgifterna[=]Det ska gå jämnt upp\nGör av med mer pengar än man har[=]Underskottet\nPlanera inköp utifrån de tillgångar[=]Budget\nHushålla med sina resurser[=]Ha koll på sina pengar",
        order: 1,
    }
];
