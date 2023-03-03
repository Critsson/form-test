const template = {
    form: [
        {
            tag: "1practitioner1",
            label: "Practioner name:",
            type: "text"
        },
        {
            tag: "1client1",
            label: "Client name:",
            type: "text"
        },
        {
            tag: "1date1",
            label: "Date:",
            type: "date"
        },
        {
            tag: "1client_feeling1",
            label: "How was the client feeling when they came in today?",
            type: "radio",
            values: [
                "happy",
                "normal",
                "sad"
            ]
        }
    ],
    paragraphs: {
        0: ["On 1date1, "],
        1: [
            "1client1 visited 1practitioner1 for a session. ",
            "1practitioner1 met with 1client1. ",
            "1client1 had a session with 1practitioner1. "
        ],
        2: [
            "When 1client1 came in for the session, ",
            "When 1client1 arrived for the session, ",
            "At the start of the session, "
        ],
        3: [
            "they were feeling 1client_feeling1.",
            "1client1 was feeling 1client_feeling1.",
            "1client1 was 1client_feeling1."
        ]
    }
}

export default template