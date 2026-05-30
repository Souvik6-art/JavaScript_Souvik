const myMember =[
    {name : "Souvik Mondal",
     ph : "0022448866",
     location :"Kolkata"
    },

    {name : "Niladri Mondal",
     ph : "0022448866",
     location :"Delhi"
    },

    {name : "Arun Mondal",
     ph : "0022455565",
     location :"Lucknnow"
    }
]
myMember.forEach((item)=> {
   console.log(item.name);
    })

// NEW
const language= ["bengali", "Hindi", "english", "Bhojpuri", "Marwadi" , "Santali"]
language.forEach((item)=>{if(item == "Hindi"){
    console.log(`${item} is detected` );
    }
})

const dataSet = [
  12, 45, 78, 23, 56, 91, 34, 67, 89, 10,
  54, 32, 76, 88, 29, 41, 63, 95, 17, 72,
  38, 84, 26, 59, 61, 47, 93, 15, 68, 21,
  80, 36, 52, 99, 14, 27, 73, 65, 48, 90,
  11, 58, 83, 24, 69, 37, 96, 18, 53, 77,
  42, 70, 31, 86, 20, 64, 75, 92, 28, 57
];
let target = 78
let found = false;
dataSet.forEach((item1)=>{
        if(item1 == target){
        console.log(`${item1} is present in the array`);
        found = true;
            }})
            if(!found){
                console.log(`${target} is not present in the array`);
            }

            // Filter the numbers from array
                const greatter = dataSet.filter((item)=> { return item>80}) // {} newa hoyeche bole return kortei hbe. {} na nile return korte hoinna
                
                console.log(greatter);

// using if condition***************
                const greatter1= []
                dataSet.forEach((item)=>{
                    if(item >=50){
                        greatter1.push(item)
                    }
                })
                console.log(greatter1);
                
             const bookList = [
  { "book_id": 1, "title": "The Silent Forest", "genre": "Fiction", "price": 299 },
  { "book_id": 2, "title": "Quantum Dreams", "genre": "Science", "price": 450 },
  { "book_id": 3, "title": "Love Beyond Time", "genre": "Romance", "price": 350 },
  { "book_id": 4, "title": "Dark Secrets", "genre": "Thriller", "price": 399 },
  { "book_id": 5, "title": "History of India", "genre": "History", "price": 500 },
  { "book_id": 6, "title": "Coding Basics", "genre": "Education", "price": 250 },
  { "book_id": 7, "title": "Space Odyssey", "genre": "Science Fiction", "price": 420 },
  { "book_id": 8, "title": "Hidden Truth", "genre": "Mystery", "price": 370 },
  { "book_id": 9, "title": "The Last Kingdom", "genre": "Fantasy", "price": 480 },
  { "book_id": 10, "title": "Mind Power", "genre": "Self-help", "price": 320 },
  { "book_id": 11, "title": "Ocean Deep", "genre": "Fiction", "price": 310 },
  { "book_id": 12, "title": "AI Revolution", "genre": "Technology", "price": 550 },
  { "book_id": 13, "title": "Heartbeats", "genre": "Romance", "price": 340 },
  { "book_id": 14, "title": "Crime Files", "genre": "Thriller", "price": 410 },
  { "book_id": 15, "title": "Ancient Civilizations", "genre": "History", "price": 530 },
  { "book_id": 16, "title": "Learn Python", "genre": "Education", "price": 270 },
  { "book_id": 17, "title": "Galaxy Wars", "genre": "Science Fiction", "price": 460 },
  { "book_id": 18, "title": "Secret Code", "genre": "Mystery", "price": 360 },
  { "book_id": 19, "title": "Dragon Tales", "genre": "Fantasy", "price": 490 },
  { "book_id": 20, "title": "Success Habits", "genre": "Self-help", "price": 300 },
  { "book_id": 21, "title": "River Stories", "genre": "Fiction", "price": 280 },
  { "book_id": 22, "title": "Future Tech", "genre": "Technology", "price": 520 },
  { "book_id": 23, "title": "Endless Love", "genre": "Romance", "price": 330 },
  { "book_id": 24, "title": "Night Chase", "genre": "Thriller", "price": 395 },
  { "book_id": 25, "title": "World War Facts", "genre": "History", "price": 510 },
  { "book_id": 26, "title": "Math Made Easy", "genre": "Education", "price": 260 },
  { "book_id": 27, "title": "Alien Worlds", "genre": "Science Fiction", "price": 440 },
  { "book_id": 28, "title": "Lost Clue", "genre": "Mystery", "price": 355 },
  { "book_id": 29, "title": "Magic Realm", "genre": "Fantasy", "price": 470 },
  { "book_id": 30, "title": "Think Big", "genre": "Self-help", "price": 310 },
  { "book_id": 31, "title": "Broken Path", "genre": "Fiction", "price": 290 },
  { "book_id": 32, "title": "Cyber Age", "genre": "Technology", "price": 540 },
  { "book_id": 33, "title": "Forever Yours", "genre": "Romance", "price": 345 },
  { "book_id": 34, "title": "Deadly Game", "genre": "Thriller", "price": 405 },
  { "book_id": 35, "title": "Indian Freedom", "genre": "History", "price": 495 },
  { "book_id": 36, "title": "Physics Simplified", "genre": "Education", "price": 275 },
  { "book_id": 37, "title": "Time Travel", "genre": "Science Fiction", "price": 455 },
  { "book_id": 38, "title": "Hidden Door", "genre": "Mystery", "price": 365 },
  { "book_id": 39, "title": "Wizard’s Rise", "genre": "Fantasy", "price": 485 },
  { "book_id": 40, "title": "Positive Thinking", "genre": "Self-help", "price": 315 },
  { "book_id": 41, "title": "City Lights", "genre": "Fiction", "price": 305 },
  { "book_id": 42, "title": "Digital Future", "genre": "Technology", "price": 560 },
  { "book_id": 43, "title": "True Love", "genre": "Romance", "price": 335 },
  { "book_id": 44, "title": "Final Escape", "genre": "Thriller", "price": 390 },
  { "book_id": 45, "title": "Medieval Times", "genre": "History", "price": 505 },
  { "book_id": 46, "title": "Chemistry Basics", "genre": "Education", "price": 265 },
  { "book_id": 47, "title": "Star Mission", "genre": "Science Fiction", "price": 445 },
  { "book_id": 48, "title": "Unknown Case", "genre": "Mystery", "price": 350 },
  { "book_id": 49, "title": "Fairy Land", "genre": "Fantasy", "price": 475 },
  { "book_id": 50, "title": "Life Goals", "genre": "Self-help", "price": 325 },
  { "book_id": 51, "title": "Silent Night", "genre": "Fiction", "price": 295 },
  { "book_id": 52, "title": "Smart Tech", "genre": "Technology", "price": 530 },
  { "book_id": 53, "title": "Love Story", "genre": "Romance", "price": 325 },
  { "book_id": 54, "title": "Hidden Enemy", "genre": "Thriller", "price": 400 },
  { "book_id": 55, "title": "Ancient India", "genre": "History", "price": 515 },
  { "book_id": 56, "title": "Biology Guide", "genre": "Education", "price": 280 },
  { "book_id": 57, "title": "Space Journey", "genre": "Science Fiction", "price": 470 },
  { "book_id": 58, "title": "Mystery House", "genre": "Mystery", "price": 360 },
  { "book_id": 59, "title": "Dark Magic", "genre": "Fantasy", "price": 495 },
  { "book_id": 60, "title": "Inner Peace", "genre": "Self-help", "price": 330 }
]

const books= []
bookList.forEach((item)=>{
    if (item.genre == "Science" || item.genre =="Technology"){
        books.push(item)
    }
})
//console.log(books);

let books1 =[]
books1= bookList.filter((bk)=>bk.price<300)
//console.log(books1);
 

let books2 =bookList.filter((bk)=>{return bk.price<400 && bk.genre =="Romance"})
console.log(books2);
