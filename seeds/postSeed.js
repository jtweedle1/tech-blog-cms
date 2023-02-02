const { Post } = require("../models")

const postData = [
    {
        "id": 1,
        "title": "Twitter replaces its free API with a paid tier in quest to make more money",
        "user_id": 101,
        "content": "Twitter will no longer provide free access to the Twitter API from February 9th. As announced by the official Twitter Developer account late Wednesday night, Elon Musk's social media hobby will stop supporting free access to the Twitter API and will instead provide a “paid basic tier.” Twitter hasn't provided any information regarding pricing, but said that it will provide “more details on what you can expect next week.” “Over the years, hundreds of millions of people have sent over a trillion Tweets, with billions more every week,” said the Twitter Developer account. “Twitter data are among the world's most powerful data sets. We're committed to enabling fast & comprehensive access so you can continue to build with us.”" 
    },
    {
        "id": 2,
        "title": "Apple and Google face mounting pressure to remove TikTok from app stores",
        "user_id": 102,
        "content": "Sen. Michael Bennet (D-CO) demanded that Apple and Google “immediately” remove TikTok from their app stores in a letter addressed to the companies' chief executives, Tim Cook and Sundar Pichai, Thursday. Bennet's push to restrict downloads of the app is just the latest in a series of mounting congressional actions to ban the embattled Chinese-owned app. Since January, Republicans and Democrats have been calling for either their colleagues or Biden administration officials to quickly impose stricter data collection restrictions or a nationwide ban on the app, citing its possible risks to US national security." 
    },
    {
        "id": 3,
        "title": "Microsoft launches Teams Premium with features powered by OpenAI",
        "user_id": 103,
        "content": "Microsoft Teams Premium is now available with features powered by OpenAI's GPT-3.5 AI language model. The new premium tier of Microsoft Teams includes an intelligent recap feature that automatically generates notes, tasks, and highlights of meetings thanks to GPT-3.5, alongside branded meetings, custom meeting templates, and features like watermarking to better protect meeting contents. Intelligent recap is the big new addition to Microsoft Teams Premium, and it may tempt users to pay the $7 per month per user introductory price ($10 per month from June 30th) just to get an idea of how useful it will be. Intelligent recap uses OpenAI’s GPT-3.5 model to generate meeting notes and highlights even if you weren't present in a meeting." 
    },
    {
        "id": 4,
        "title": "Google is reportedly testing an alternate home page with ChatGPT-style Q&A prompts",
        "user_id": 104,
        "content": "We know Google is currently freaking out about AI chatbot ChatGPT, but a report from CNBC offers new details about how the search giant is apparently marshaling its response. According to CNBC, Googlers are currently testing an AI chatbot of their own called “Apprentice Bard,” which offers responses to questions posed using natural language just like ChatGPT. Bard is built using Google's LaMDA technology, which is itself similar to the GPT-series of AI language models that ChatGPT itself relies on. (Google has used LaMDA in the past to power similar chatbot demos at I/O, like its conversation with Pluto.) One big advantage Bard reportedly has over ChatGPT is its ability to talk about recent events. As OpenAI warns, ChatGPT has “Limited knowledge of world and events after 2021,” but Bard is more up-to-date, even able to answer questions about Google’s recent layoffs." 
    },
    {
        "id": 5,
        "title": "Samsung, Google and Qualcomm are making a mixed reality platform",
        "user_id": 105,
        "content": "Samsung, Google and Qualcomm are joining hands to make a mixed-reality platform. Executives from the companies, namely Samsung’s TM Roh, Qualcomm’s Cristiano Amon, and Google’s Hiroshi Lockheimer came on stage at the Samsung Galaxy Unpacked event to make this announcement. These companies only announced the partnership — they had no future device or hardware product to show. “We are working to create a new era of highly immersive digital experiences that blur the line between our physical and digital worlds. With our Snapdragon XR tech, Samsung’s amazing products, and Google experiences we have the foundation to make this opportunity a reality,” Amon said onstage. Lockheimer noted that Google has been investing in both AR and VR “across experiences and technology”. He added that this partnership will provide “cutting-edge advanced hardware and software” to “deliver the next-gen technology.”" 
    },
    {
        "id": 6,
        "title": "Why I Love Scooby Snax",
        "user_id": 106,
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Feugiat in fermentum posuere urna. Amet nisl purus in mollis nunc. Tellus orci ac auctor augue mauris augue. Dolor morbi non arcu risus quis varius quam quisque id. Et malesuada fames ac turpis egestas sed tempus. Eget mi proin sed libero enim sed faucibus. Turpis massa sed elementum tempus. Congue eu consequat ac felis donec." 
    }
  ]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts