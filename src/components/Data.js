const questions = [
    { 
        id : 1,
        question: "In which year was Google founded  ?",
        answers : [
            {
                text: "1995",
                correct: false ,
            },
            {
                text: "2000",
                correct: false ,
            },
            {
                text: "1998",
                correct: true ,
            },
            {
                text: "2002",
                correct: false ,
            },
        ] 
    },
    { 
        id : 2,
        question: "What is the most common abbreviation for 'HyperText Markup Language'?",
        answers : [
            {
                text: "HTML",
                correct: true ,
            },
            {
                text: "HTM",
                correct: false ,
            },
            {
                text: "XML",
                correct: false ,
            },
            {
                text: "PHP",
                correct: false ,
            },
        ] 
    },
    { 
        id : 3,
        question: "Which company produces the Windows operating system?",
        answers : [
            {
                text: "Microsoft",
                correct: true ,
            },
            {
                text: "Apple",
                correct: false ,
            },
            {
                text: "IBM",
                correct: false ,
            },
            {
                text: " Google",
                correct: false ,
            },
        ] 
    },
    { 
        id : 4,
        question: "What does the abbreviation 'URL' mean?",
        answers : [
            {
                text: "Unified Resource Locator",
                correct: false ,
            },
            {
                text: "Uniform Resource Locator",
                correct: true ,
            },
            {
                text: "Unified Reference Locator",
                correct: false ,
            },
            {
                text: "Unique Resource Locator",
                correct: false ,
            },
        ] 
    },
    { 
        id : 5,
        question: "What is the largest social network in the world?",
        answers : [
            {
                text: "Twitter",
                correct: false ,
            },
            {
                text: "Facebook",
                correct: true ,
            },
            {
                text: "LinkedIn",
                correct: false ,
            },
            {
                text: "Instagram",
                correct: false ,
            },
        ] 
    },
    { 
        id : 6,
        question: "What does the abbreviation 'ISP' mean in the context of internet connection?",
        answers : [
            {
                text: "Internet Service Provider",
                correct: true ,
            },
            {
                text: "Internet Signal Processor",
                correct: false ,
            },
            {
                text: "Information Security Protocol",
                correct: false ,
            },
            {
                text: "Internet Search Platform",
                correct: false ,
            },
        ] 
    },
    { 
        id : 7,
        question: "What is the most common type of attack on the security of information systems via email?",
        answers : [
            {
                text: " Spamming",
                correct: false ,
            },
            {
                text: "Hacking",
                correct: false ,
            },
            {
                text: "Phishing",
                correct: true ,
            },
            {
                text: "Spoofing",
                correct: false ,
            },
        ] 
    },
    { 
        id : 8,
        question: "Who developed the Linux operating system?",
        answers : [
            {
                text: "Bill Gates ",
                correct: false ,
            },
            {
                text: " Richard Stallman",
                correct: false ,
            },
            {
                text: "Linus Torvalds",
                correct: true ,
            },
            {
                text: "Steve Jobs",
                correct: false ,
            },
        ] 
    },
    { 
        id : 9,
        question: "What is the purpose of HTML5 in web development?",
        answers : [
            {
                text: "To define the structure of web pages",
                correct: true ,
            },
            {
                text: "To style web pages",
                correct: false ,
            },
            {
                text: "To create dynamic content",
                correct: false ,
            },
            {
                text: "To manage databases",
                correct: false ,
            },
        ] 
    },
    { 
        id : 10,
        question: "What is the term for the process of converting source code into machine code?",
        answers : [
            {
                text: "Compilation",
                correct: true ,
            },
            {
                text: "Interpretation",
                correct: false ,
            },
            {
                text: "Assembly",
                correct: false ,
            },
            {
                text: "Optimization",
                correct: false ,
            },
        ] 
    },
    { 
        id : 11,
        question: "Which programming paradigm emphasizes the use of mathematical functions and immutable data?",
        answers : [
            {
                text: "Object-oriented programming (OOP)",
                correct: false ,
            },
            {
                text: "Procedural programming",
                correct: false ,
            },
            {
                text: "Functional programming",
                correct: true ,
            },
            {
                text: "Logic programming",
                correct: false ,
            },
        ] 
    },
    { 
        id : 12,
        question: "Which sorting algorithm has the best time complexity in the worst-case scenario?",
        answers : [
            {
                text: "Bubble Sort",
                correct: false ,
            },
            {
                text: "Quick Sort",
                correct: false ,
            },
            {
                text: "Merge Sort",
                correct: true ,
            },
            {
                text: "Insertion Sort",
                correct: false ,
            },
        ] 
    },
    { 
        id : 13,
        question: "What is the time complexity of the best case for finding an element in a balanced binary search tree (BST) with n elements?",
        answers : [
            {
                text: "O(log n)",
                correct: true ,
            },
            {
                text: "O(n)",
                correct: false ,
            },
            {
                text: "O(n log n)",
                correct: false ,
            },
            {
                text: "O(1)",
                correct: false ,
            },
        ] 
    },
    { 
        id : 14,
        question: "Which data structure is typically used to implement a priority queue with efficient operations for both insertion and extraction of the highest priority element?",
        answers : [
            {
                text: "Linked List",
                correct: false ,
            },
            {
                text: "Stack",
                correct: false ,
            },
            {
                text: "Queue",
                correct: false ,
            },
            {
                text: "Binary Heap",
                correct: true ,
            },
        ] 
    },
    { 
        id : 15,
        question: "Which of the following statements about C++ templates is incorrect?",
        answers : [
            {
                text: "Templates allow generic programming in C++.",
                correct: false ,
            },
            {
                text: "Templates can only be used with built-in data types.",
                correct: true ,
            },
            {
                text: "Templates can be used for both functions and classes.",
                correct: false ,
            },
            {
                text: "Templates are instantiated at compile-time.",
                correct: false ,
            },
        ] 
    },
];

export default questions;