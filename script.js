/* =========================================
   HOW TO ADD A BOOK
   Copy any book below, change title/author/about,
   and set only the traits that apply (1 = a little,
   2 = quite a bit, 3 = very much). Traits you leave
   out count as 0.
========================================= */

/* =========================================
   BOOK DATA
========================================= */

const books = [

    /* ---------- Fiction: contemporary and emotional ---------- */

    {
        title: "The Midnight Library",
        author: "Matt Haig",
        about: "A thought-provoking story about choices, regrets, and the different lives a person could have lived.",
        traits: {
            purposeReflect: 3, purposeFeel: 2,
            fantasy: 3, contemporary: 2,
            emotional: 3, reflective: 3, inspiring: 3,
            characterGrowth: 3, ordinaryCharacter: 3,
            fast: 1, moderatePace: 2, slow: 2,
            easy: 2, challenging: 2,
            short: 2, medium: 3,
            modern: 3,
            happyEnding: 2, emotionalEnding: 3, openEnding: 2
        }
    },

    {
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        about: "A warm and imaginative story about belonging, friendship, family, and finding a place where you feel accepted.",
        traits: {
            purposeFeel: 3, purposeEscape: 2, purposeFun: 1,
            fantasy: 3, romance: 2, contemporary: 1,
            emotional: 3, inspiring: 3, light: 3,
            characterGrowth: 3, ordinaryCharacter: 2, relationships: 3,
            moderatePace: 2, slow: 3,
            easy: 3,
            medium: 3, long: 1,
            modern: 3,
            happyEnding: 3, emotionalEnding: 2
        }
    },

    {
        title: "Anxious People",
        author: "Fredrik Backman",
        about: "A failed bank robbery turns into a funny and tender story about a group of strangers and the secrets that bring them together.",
        traits: {
            purposeFeel: 3, purposeFun: 2, purposeReflect: 2,
            contemporary: 3, mystery: 1,
            emotional: 3, inspiring: 3, light: 3, reflective: 2,
            ordinaryCharacter: 3, relationships: 3, characterGrowth: 2,
            moderatePace: 3, slow: 1,
            easy: 3,
            medium: 3,
            modern: 3,
            happyEnding: 3, emotionalEnding: 2, surprisingEnding: 1
        }
    },

    {
        title: "It Ends with Us",
        author: "Colleen Hoover",
        about: "An emotional love story about a woman who faces a painful choice between the love she wants and the life she deserves.",
        traits: {
            purposeFeel: 3, purposeEscape: 1,
            romance: 3, contemporary: 3,
            emotional: 3, dark: 2,
            characterGrowth: 3, ordinaryCharacter: 3, relationships: 3,
            fast: 3, moderatePace: 2,
            easy: 3,
            medium: 3,
            modern: 3,
            emotionalEnding: 3, surprisingEnding: 1
        }
    },

    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        about: "A powerful story of friendship, guilt, and redemption that follows two boys in Afghanistan across decades.",
        traits: {
            purposeFeel: 3, purposeReflect: 3,
            historical: 3, contemporary: 1,
            emotional: 3, dark: 3, reflective: 3,
            characterGrowth: 3, ordinaryCharacter: 3, relationships: 3,
            moderatePace: 3, slow: 1,
            easy: 1, challenging: 2,
            medium: 3,
            modern: 3,
            emotionalEnding: 3
        }
    },

    /* ---------- Fiction: romance and historical ---------- */

    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        about: "A character-driven story about fame, love, identity, difficult choices, and the secrets behind a legendary actress's life.",
        traits: {
            purposeFeel: 3, purposeReflect: 2,
            romance: 3, historical: 3, contemporary: 1, mystery: 1,
            emotional: 3, reflective: 2, dark: 1,
            characterGrowth: 3, mysteriousCharacter: 2, relationships: 3,
            fast: 1, moderatePace: 3, slow: 1,
            easy: 2, challenging: 1,
            medium: 3, long: 1,
            modern: 3,
            emotionalEnding: 3, surprisingEnding: 2, openEnding: 1
        }
    },

    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        about: "A witty classic about love, class, and first impressions, centered on the sharp-minded Elizabeth Bennet.",
        traits: {
            purposeFun: 3, purposeFeel: 2,
            romance: 3, historical: 3,
            light: 3, emotional: 1,
            characterGrowth: 3, relationships: 3, ordinaryCharacter: 2,
            moderatePace: 2, slow: 2,
            easy: 1, challenging: 2,
            medium: 3, long: 1,
            classic: 3,
            happyEnding: 3
        }
    },

    {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        about: "A beautiful retelling of the Trojan War through the love story of Achilles and Patroclus.",
        traits: {
            purposeFeel: 3, purposeEscape: 2,
            romance: 3, historical: 3, fantasy: 2,
            emotional: 3, dark: 1,
            characterGrowth: 3, relationships: 3,
            moderatePace: 1, slow: 3,
            easy: 2, challenging: 1,
            medium: 3,
            modern: 3,
            emotionalEnding: 3
        }
    },

    {
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        about: "A lonely girl grows up in the marshes of North Carolina, and a murder mystery pulls her into the spotlight.",
        traits: {
            purposeFeel: 3, purposeEscape: 2,
            mystery: 2, romance: 2, historical: 2, contemporary: 1,
            emotional: 3, reflective: 2, dark: 1,
            characterGrowth: 3, ordinaryCharacter: 2, mysteriousCharacter: 1,
            moderatePace: 2, slow: 3,
            easy: 2,
            medium: 3, long: 1,
            modern: 3,
            emotionalEnding: 2, surprisingEnding: 3
        }
    },

    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        about: "A classic about justice, prejudice, and growing up, told through the eyes of a young girl in the American South.",
        traits: {
            purposeReflect: 3, purposeFeel: 2,
            historical: 3,
            emotional: 2, reflective: 3, inspiring: 3, dark: 1,
            characterGrowth: 3, ordinaryCharacter: 3, relationships: 2,
            moderatePace: 3, slow: 2,
            easy: 2, challenging: 2,
            medium: 3,
            classic: 3,
            emotionalEnding: 3, happyEnding: 1
        }
    },

    /* ---------- Fiction: mystery and thriller ---------- */

    {
        title: "One of Us Is Lying",
        author: "Karen M. McManus",
        about: "A fast-paced mystery in which five students enter detention, but only four leave alive.",
        traits: {
            purposeEscape: 3, purposeFun: 2,
            mystery: 3, contemporary: 3, romance: 1,
            dark: 2, emotional: 1,
            ordinaryCharacter: 3, mysteriousCharacter: 2, relationships: 1,
            fast: 3, moderatePace: 1,
            easy: 3,
            medium: 3, short: 1,
            modern: 3,
            surprisingEnding: 3
        }
    },

    {
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",
        about: "A determined student investigates an old murder case and discovers that the truth may be more complicated than it seems.",
        traits: {
            purposeEscape: 3, purposeFun: 2,
            mystery: 3, contemporary: 3,
            dark: 2,
            heroic: 2, ordinaryCharacter: 2, characterGrowth: 1,
            fast: 3, moderatePace: 1,
            easy: 3,
            medium: 3, long: 1,
            modern: 3,
            surprisingEnding: 3
        }
    },

    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        about: "A marriage unravels after a wife disappears, and every twist makes you question who is telling the truth.",
        traits: {
            purposeEscape: 3, purposeFeel: 1,
            mystery: 3, contemporary: 3,
            dark: 3,
            mysteriousCharacter: 3, relationships: 2,
            fast: 2, moderatePace: 2,
            easy: 1, challenging: 2,
            medium: 3, long: 1,
            modern: 3,
            surprisingEnding: 3, openEnding: 2
        }
    },

    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        about: "A famous painter shoots her husband and then never speaks again, until a therapist becomes obsessed with uncovering why.",
        traits: {
            purposeEscape: 3,
            mystery: 3, contemporary: 3,
            dark: 3, emotional: 1,
            mysteriousCharacter: 3,
            fast: 3,
            easy: 3,
            short: 3, medium: 1,
            modern: 3,
            surprisingEnding: 3
        }
    },

    {
        title: "Big Little Lies",
        author: "Liane Moriarty",
        about: "Three mothers, a school trivia night, and a death that exposes the secrets hiding behind perfect lives.",
        traits: {
            purposeFun: 3, purposeEscape: 2,
            mystery: 2, contemporary: 3,
            dark: 1, light: 1, emotional: 2,
            ordinaryCharacter: 3, relationships: 3, characterGrowth: 2,
            fast: 2, moderatePace: 3,
            easy: 3,
            medium: 3, long: 1,
            modern: 3,
            surprisingEnding: 3, emotionalEnding: 2
        }
    },

    /* ---------- Fiction: fantasy and adventure ---------- */

    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        about: "A comfortable hobbit is swept into a quest with dwarves, a wizard, and a dragon, in the story that started modern fantasy.",
        traits: {
            purposeEscape: 3, purposeFun: 3,
            fantasy: 3, adventure: 3,
            light: 3, inspiring: 2,
            heroic: 2, ordinaryCharacter: 3, characterGrowth: 3,
            fast: 1, moderatePace: 3, slow: 1,
            easy: 3,
            medium: 3,
            classic: 3,
            happyEnding: 3
        }
    },

    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        about: "A legendary figure tells the story of his own life, from a gifted childhood to a mysterious university of magic.",
        traits: {
            purposeEscape: 3, purposeFun: 1,
            fantasy: 3, adventure: 3, mystery: 1, romance: 1,
            dark: 1, emotional: 1,
            heroic: 2, mysteriousCharacter: 3, characterGrowth: 3,
            moderatePace: 2, slow: 3,
            easy: 2, challenging: 1,
            long: 3,
            modern: 3,
            openEnding: 3
        }
    },

    {
        title: "Circe",
        author: "Madeline Miller",
        about: "The goddess Circe is exiled to a remote island, where she finds her own power and her own voice.",
        traits: {
            purposeEscape: 2, purposeReflect: 3, purposeFeel: 2,
            fantasy: 3, historical: 2, romance: 1,
            emotional: 2, reflective: 3, inspiring: 3, dark: 1,
            characterGrowth: 3, mysteriousCharacter: 2,
            slow: 3,
            easy: 1, challenging: 2,
            medium: 3, long: 1,
            modern: 3,
            emotionalEnding: 3, happyEnding: 2, openEnding: 1
        }
    },

    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        about: "A short philosophical journey about dreams, purpose, personal discovery, and following what matters to you.",
        traits: {
            purposeReflect: 3, purposeLearn: 1, purposeEscape: 2,
            fantasy: 2, historical: 1, adventure: 3,
            emotional: 1, reflective: 3, inspiring: 3, light: 2,
            characterGrowth: 3, ordinaryCharacter: 3,
            fast: 1, moderatePace: 3,
            easy: 3,
            short: 3,
            classic: 2, modern: 1,
            happyEnding: 3, emotionalEnding: 1, openEnding: 1
        }
    },

    /* ---------- Fiction: science fiction and dystopia ---------- */

    {
        title: "Project Hail Mary",
        author: "Andy Weir",
        about: "A man wakes up alone on a spaceship with no memory and has to save humanity, one clever scientific step at a time.",
        traits: {
            purposeEscape: 3, purposeFun: 3, purposeLearn: 2,
            scifi: 3, adventure: 3, mystery: 1,
            light: 2, inspiring: 3, emotional: 2,
            heroic: 3, ordinaryCharacter: 2, characterGrowth: 2, relationships: 2,
            fast: 3, moderatePace: 1,
            easy: 2, challenging: 1,
            medium: 2, long: 2,
            modern: 3,
            happyEnding: 2, emotionalEnding: 3, surprisingEnding: 2
        }
    },

    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        about: "In a brutal televised competition, a teenage girl volunteers to take her sister's place and fights to survive.",
        traits: {
            purposeEscape: 3, purposeFeel: 2,
            scifi: 3, adventure: 3, romance: 1,
            dark: 3, emotional: 2,
            heroic: 3, characterGrowth: 2, ordinaryCharacter: 2,
            fast: 3,
            easy: 3,
            medium: 3,
            modern: 3,
            emotionalEnding: 3, surprisingEnding: 1
        }
    },

    {
        title: "1984",
        author: "George Orwell",
        about: "A chilling classic about a man who tries to think for himself in a society ruled by total surveillance.",
        traits: {
            purposeReflect: 3, purposeLearn: 2,
            scifi: 3,
            dark: 3, reflective: 3,
            ordinaryCharacter: 3, mysteriousCharacter: 1,
            moderatePace: 2, slow: 2,
            challenging: 3,
            medium: 3,
            classic: 3,
            emotionalEnding: 3, surprisingEnding: 1, openEnding: 1
        }
    },

    {
        title: "Dune",
        author: "Frank Herbert",
        about: "A young heir is thrown into a war over a desert planet in a vast epic of politics, religion, and survival.",
        traits: {
            purposeEscape: 3, purposeReflect: 1,
            scifi: 3, fantasy: 1, adventure: 3,
            dark: 2,
            heroic: 3, mysteriousCharacter: 2, characterGrowth: 3,
            moderatePace: 1, slow: 3,
            challenging: 3,
            long: 3,
            classic: 3,
            emotionalEnding: 2, surprisingEnding: 1, openEnding: 2
        }
    },

    /* ---------- Non-fiction ---------- */

    {
        title: "Atomic Habits",
        author: "James Clear",
        about: "A practical guide to building good habits and breaking bad ones through small, consistent changes.",
        traits: {
            purposeLearn: 3, purposeReflect: 1,
            nonfiction: 3,
            inspiring: 3, light: 1,
            characterGrowth: 2,
            fast: 1, moderatePace: 3,
            easy: 3,
            medium: 3, short: 1,
            modern: 3
        }
    },

    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        about: "A big-picture history of humankind, from the first humans to the modern world, that changes how you see society.",
        traits: {
            purposeLearn: 3, purposeReflect: 3,
            nonfiction: 3, historical: 2,
            reflective: 3, inspiring: 1,
            moderatePace: 2, slow: 2,
            easy: 1, challenging: 3,
            medium: 1, long: 3,
            modern: 3,
            openEnding: 2
        }
    },

    {
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        about: "A psychiatrist reflects on surviving the Nazi camps and on why finding purpose can help people endure almost anything.",
        traits: {
            purposeReflect: 3, purposeLearn: 3, purposeFeel: 2,
            nonfiction: 3, historical: 3,
            emotional: 3, dark: 2, inspiring: 3, reflective: 3,
            characterGrowth: 3, ordinaryCharacter: 2,
            moderatePace: 2, slow: 2,
            easy: 1, challenging: 2,
            short: 3,
            classic: 3,
            emotionalEnding: 3, openEnding: 1
        }
    },

    {
        title: "Educated",
        author: "Tara Westover",
        about: "A memoir about a young woman who grows up in an isolated family, teaches herself, and eventually earns a PhD.",
        traits: {
            purposeFeel: 3, purposeLearn: 2, purposeReflect: 2,
            nonfiction: 3,
            emotional: 3, dark: 2, inspiring: 3,
            characterGrowth: 3, ordinaryCharacter: 3,
            fast: 1, moderatePace: 3,
            easy: 2, challenging: 1,
            medium: 3, long: 1,
            modern: 3,
            emotionalEnding: 3, openEnding: 1
        }
    },

    {
        title: "Born a Crime",
        author: "Trevor Noah",
        about: "Funny and moving stories from a childhood in apartheid South Africa, told with humor and a lot of heart.",
        traits: {
            purposeLearn: 3, purposeFun: 3, purposeFeel: 2,
            nonfiction: 3,
            light: 3, emotional: 2, inspiring: 3,
            characterGrowth: 3, ordinaryCharacter: 3, relationships: 2,
            fast: 1, moderatePace: 3,
            easy: 3,
            medium: 3,
            modern: 3,
            emotionalEnding: 2, happyEnding: 1
        }
    }

];


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question: "What are you looking for in a book?",
        answers: [
            { text: "To escape and get lost in a story", traits: { purposeEscape: 3 } },
            { text: "To learn something new", traits: { purposeLearn: 3 } },
            { text: "To feel strong emotions", traits: { purposeFeel: 3 } },
            { text: "To reflect and think about life", traits: { purposeReflect: 3 } },
            { text: "To have fun and enjoy myself", traits: { purposeFun: 3 } }
        ]
    },

    {
        question: "Which genre attracts you the most?",
        answers: [
            { text: "Fantasy", traits: { fantasy: 4 } },
            { text: "Mystery or thriller", traits: { mystery: 4 } },
            { text: "Romance", traits: { romance: 4 } },
            { text: "Historical fiction", traits: { historical: 4 } },
            { text: "Contemporary fiction", traits: { contemporary: 4 } },
            { text: "Science fiction", traits: { scifi: 4 } },
            { text: "Non-fiction (real stories and ideas)", traits: { nonfiction: 4 } }
        ]
    },

    {
        question: "What kind of story sounds more interesting to you?",
        answers: [
            { text: "A character's journey of self-discovery", traits: { characterGrowth: 3 } },
            { text: "A mystery that needs to be solved", traits: { mystery: 2, fast: 1 } },
            { text: "A big adventure", traits: { adventure: 3, purposeEscape: 1 } },
            { text: "An unusual world with imaginative elements", traits: { fantasy: 2, scifi: 2 } },
            { text: "A story focused on relationships and people", traits: { relationships: 3, emotional: 1 } }
        ]
    },

    {
        question: "What kind of pace do you prefer?",
        answers: [
            { text: "Fast-paced and exciting", traits: { fast: 3 } },
            { text: "Moderate, with a mix of action and detail", traits: { moderatePace: 3 } },
            { text: "Slow and detailed", traits: { slow: 3 } }
        ]
    },

    {
        question: "What tone do you prefer?",
        answers: [
            { text: "Light and comforting", traits: { light: 3, happyEnding: 1 } },
            { text: "Dark and intense", traits: { dark: 3 } },
            { text: "Emotional and moving", traits: { emotional: 3 } },
            { text: "Inspirational and uplifting", traits: { inspiring: 3 } }
        ]
    },

    {
        question: "What kind of main character do you prefer?",
        answers: [
            { text: "A hero who takes action", traits: { heroic: 3, fast: 1 } },
            { text: "A mysterious or complicated character", traits: { mysteriousCharacter: 3 } },
            { text: "An ordinary person facing an unusual situation", traits: { ordinaryCharacter: 3 } },
            { text: "Someone discovering who they really are", traits: { characterGrowth: 3, reflective: 1 } }
        ]
    },

    {
        question: "How challenging do you want the book to be?",
        answers: [
            { text: "Easy and relaxing", traits: { easy: 3 } },
            { text: "Moderately challenging", traits: { easy: 2, challenging: 2 } },
            { text: "Challenging and thought-provoking", traits: { challenging: 3, reflective: 1 } }
        ]
    },

    {
        question: "How long would you like the book to be?",
        answers: [
            { text: "Short (under 300 pages)", traits: { short: 3 } },
            { text: "Medium length", traits: { medium: 3 } },
            { text: "Long and immersive", traits: { long: 3 } },
            { text: "I don't mind", traits: {} }
        ]
    },

    {
        question: "Do you prefer a classic or a recent book?",
        answers: [
            { text: "A timeless classic", traits: { classic: 3 } },
            { text: "Something more recent", traits: { modern: 3 } },
            { text: "I don't mind", traits: {} }
        ]
    },

    {
        question: "What kind of ending do you prefer?",
        answers: [
            { text: "Happy and satisfying", traits: { happyEnding: 3 } },
            { text: "Emotional and memorable", traits: { emotionalEnding: 3 } },
            { text: "Unexpected and surprising", traits: { surprisingEnding: 3 } },
            { text: "Open to interpretation", traits: { openEnding: 3 } }
        ]
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;

let selectedAnswer = null;

let userTraits = {};


/* =========================================
   HTML ELEMENTS
========================================= */

const introScreen = document.getElementById("intro");

const quizScreen = document.getElementById("quiz");

const resultScreen = document.getElementById("result");

const startBtn = document.getElementById("startBtn");

const nextBtn = document.getElementById("nextBtn");

const restartBtn = document.getElementById("restartBtn");

const questionElement = document.getElementById("question");

const answersElement = document.getElementById("answers");

const questionNumberElement = document.getElementById("questionNumber");

const progressBar = document.getElementById("progressBar");

const bookTitle = document.getElementById("bookTitle");

const bookAuthor = document.getElementById("bookAuthor");

const bookReason = document.getElementById("bookReason");

const bookAbout = document.getElementById("bookAbout");

// Remember the original text of the Next button so we can restore it
const nextBtnDefaultText = nextBtn.textContent;


/* =========================================
   START QUIZ
========================================= */

startBtn.addEventListener("click", function () {

    introScreen.classList.remove("active");

    quizScreen.classList.add("active");

    currentQuestion = 0;

    userTraits = {};

    showQuestion();

});


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;

    const isLast = currentQuestion === questions.length - 1;

    nextBtn.textContent = isLast ? "See my book" : nextBtnDefaultText;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    answersElement.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.classList.add("answer-button");

        button.textContent = answer.text;

        button.addEventListener("click", function () {

            selectAnswer(index);

        });

        answersElement.appendChild(button);

    });

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(index) {

    selectedAnswer = index;

    const buttons = document.querySelectorAll(".answer-button");

    buttons.forEach(button => {

        button.classList.remove("selected");

    });

    buttons[index].classList.add("selected");

    nextBtn.disabled = false;

}


/* =========================================
   NEXT QUESTION
========================================= */

nextBtn.addEventListener("click", function () {

    const selected = questions[currentQuestion].answers[selectedAnswer];

    addTraits(selected.traits);

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();

    }

});


/* =========================================
   ADD USER TRAITS
========================================= */

function addTraits(traits) {

    Object.keys(traits).forEach(trait => {

        userTraits[trait] = (userTraits[trait] || 0) + traits[trait];

    });

}


/* =========================================
   RANK BOOKS
   Each book gets a score = how well it matches the
   user's answers. The score is divided by the size of
   the book's trait list, so books with lots of high
   traits don't win every time just for being "generic".
========================================= */

function rankBooks() {

    const results = books.map(book => {

        let dot = 0;

        const contributions = [];

        Object.keys(userTraits).forEach(trait => {

            const points = userTraits[trait] * (book.traits[trait] || 0);

            if (points > 0) {

                dot += points;

                contributions.push([trait, points]);

            }

        });

        const size = Math.sqrt(
            Object.values(book.traits).reduce((sum, v) => sum + v * v, 0)
        );

        return {
            book: book,
            score: size > 0 ? dot / size : 0,
            contributions: contributions
        };

    });

    results.sort((a, b) => b.score - a.score);

    return results;

}


/* =========================================
   REASON TEXT
   Only mentions traits the recommended book
   really has, so the explanation is accurate.
========================================= */

const reasonPhrases = {

    purposeEscape: "getting lost in a story",
    purposeLearn: "learning something new",
    purposeFeel: "stories that stir strong emotions",
    purposeReflect: "books that make you think about life",
    purposeFun: "a fun, enjoyable read",

    fantasy: "imaginative fantasy worlds",
    mystery: "mysteries and twists",
    romance: "love stories",
    historical: "stories rooted in the past",
    contemporary: "modern, relatable settings",
    scifi: "science fiction ideas",
    nonfiction: "real stories and ideas",

    emotional: "emotional stories",
    reflective: "thought-provoking ideas",
    inspiring: "uplifting messages",
    dark: "a darker, more intense tone",
    light: "a light, comforting tone",

    characterGrowth: "characters who grow and find themselves",
    adventure: "big adventures",
    relationships: "stories about relationships",
    heroic: "heroes who take action",
    ordinaryCharacter: "relatable, everyday characters",
    mysteriousCharacter: "complex, mysterious characters",

    fast: "a fast pace",
    moderatePace: "a balanced pace",
    slow: "slow, detailed storytelling",

    easy: "an easy, accessible read",
    challenging: "a more challenging read",

    short: "shorter books",
    medium: "medium-length books",
    long: "longer, immersive books",

    classic: "timeless classics",
    modern: "recent releases",

    happyEnding: "satisfying endings",
    emotionalEnding: "memorable emotional endings",
    surprisingEnding: "unexpected endings",
    openEnding: "endings that leave room to think"

};


function joinList(items) {

    if (items.length === 1) return items[0];

    if (items.length === 2) return `${items[0]} and ${items[1]}`;

    return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;

}


function createReason(result) {

    const phrases = result.contributions
        .sort((a, b) => b[1] - a[1])
        .map(item => reasonPhrases[item[0]])
        .filter(Boolean)
        .slice(0, 3);

    if (phrases.length === 0) {

        return `Your answers suggest that ${result.book.title} may match several of your reading preferences.`;

    }

    return `Your answers point toward ${joinList(phrases)}. ${result.book.title} lines up with these preferences better than the other books in the collection.`;

}


/* =========================================
   SHOW RESULT
========================================= */

function showResult() {

    const ranked = rankBooks();

    const best = ranked[0];

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");

    bookTitle.textContent = best.book.title;

    bookAuthor.textContent = best.book.author;

    bookAbout.textContent = best.book.about;

    bookReason.textContent = createReason(best);

    showAlsoLike(ranked.slice(1, 3));

}


/* =========================================
   "YOU MIGHT ALSO LIKE"
   Creates its own element if index.html doesn't
   have one, so no HTML changes are required.
========================================= */

function showAlsoLike(others) {

    let box = document.getElementById("alsoLike");

    if (!box) {

        box = document.createElement("div");

        box.id = "alsoLike";

        box.classList.add("also-like");

        bookAbout.insertAdjacentElement("afterend", box);

    }

    box.innerHTML = "";

    const heading = document.createElement("p");

    heading.classList.add("also-like-title");

    heading.textContent = "You might also like";

    box.appendChild(heading);

    others.forEach(item => {

        const line = document.createElement("p");

        line.classList.add("also-like-item");

        line.textContent = `${item.book.title} by ${item.book.author}`;

        box.appendChild(line);

    });

}


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener("click", function () {

    resultScreen.classList.remove("active");

    introScreen.classList.add("active");

    currentQuestion = 0;

    selectedAnswer = null;

    userTraits = {};

});
