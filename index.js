function handleGenerate() {
  let myQuotes = {
    "-Nelson Mandela":
      "“For to be free is not merely to cast off one’s chains, but to live in a way that respects and enhances the freedom of others.”",
    "-Bob Dylan": "No one is free, even the birds are chained to the sky.",
    "-S Sreesanth":
      "Anyone is free to judge me, but they weren't there in my tough times.",
    "-Abraham Lincoln":
      "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
    "-Peter Ducker": "The best way to predict the future is to create it.",
    "-Walt whitman":
      "I am as bad as the worst, but, thank God, I am as good as the best.",
    "-John Galsworthy": "“Life calls the tune, we dance.”",
    "- Aaron Lauritsen":
      "“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”",
    "-Kufre Inyang": "Live simple, to enable others live simply",
    "-Walt Whitman":
      "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "- Amal Clooney":
      "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    "-Winston Churchill":
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "- Oprah Winfrey":
      "You define your own life. Don't let other people write your script.",
    "-Malala Yousafzai":
      "You are never too old to set another goal or to dream a new dream.",
    "- Michelle Obama":
      "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
    "-Lady Gaga":
      "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    "-Aristotle":
      "It is during our darkest moments that we must focus to see the light.",
    "-Kesha":
      "You can be everything. You can be the infinite amount of things that people are.",
    "-Marianne Cantwell":
      "Weaknesses are just strengths in the wrong environment.",
    "-Morgan Freeman":
      "Learning how to be still, to really be still and let life happen—that stillness becomes a radiance",
    "-Serena Williams":
      "I tell myself, 'You've been through so much, you've endured so much, time will allow me to heal, and soon this will be just another memory that made me the strong woman, athlete, and mother I am today.",
    "-Joelle Speranza":
      "Our lives are stories in which we write, direct and star in the leading role. Some chapters are happy while others bring lessons to learn, but we always have the power to be the heroes of our own adventures.",
    "-Martin Fowler":
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
    "–John Johnson": "“First, solve the problem. Then, write the code.”",
    "- Oscar Wilde":
      "“Experience is the name everyone gives to their mistakes.”",
    "-Coco Chanel ":
      "“In order to be irreplaceable, one must always be different”",
    "-Cory House":
      "“Code is like humor. When you have to explain it, it’s bad.”",
    "- Dan Salomon":
      "“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”",
    "-Antoine de Saint-Exupery":
      "“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”",
    "– Steve Maguire": "“Fix the cause, not the symptom.”",
    "-Kent Beck":
      "“Optimism is an occupational hazard of programming: feedback is the treatment. “",
    "–Martin Fowler":
      "“When to use iterative development? You should use iterative development only on projects that you want to succeed.”",
    " –Austin Freeman": "“Simplicity is the soul of efficiency.”",
    "–Ralph Johnson":
      "“Before software can be reusable it first has to be usable.”",
    "–Kent Beck": "“Make it work, make it right, make it fast.”",
    "–Sheryl Sandberg":
      "“We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored.”",
  };

  let authors = Object.keys(myQuotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let myquote = myQuotes[author];

  document.getElementById("myquote").innerHTML = myquote;
  document.getElementById("author").innerHTML = author;
}
