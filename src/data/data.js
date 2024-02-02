

const data = [

    {
  
      id: 1,
  
      name: "Ригатони",
  
      category1: "паста", 

      category2:  "итальянская кухня",
  
      price: 150,
  
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D"
  
    },
  
    {
  
      id: 2,
  
      name: "Болоньезе",
  
      category1: "паста", 

      category2:  "итальянская кухня",
  
      price: 200,
  
      image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RhfGVufDB8fDB8fHww"
  
    },
  
  
  
    {
  
      id: 3,
  
      name: "Паста дель маре",
  
      category1: "паста", 

      category2:  "итальянская кухня",
  
      price: 400,
  
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
  
    },
  
  
  
    {
  
      id: 4,
  
      name: "Стейк лосося",
  
      category1: "рыба", 

      category2:  "итальянская кухня",
  
      price: 500,
  
      image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
  
    },
  
  
  
    {
  
      id: 5,
  
      name: "Чизбургер",

      category1: "фастфуд", 

      category2:  "американская кухня",
  
      price: 300,
  
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
  
    },
  
    {
  
      id: 6,
  
      name: "Вегансэндвичи",

      category1: "сэндвичи", 

      category2:  "итальянская кухня",
  
      price: 100,
  
      image: "https://images.unsplash.com/photo-1540914124281-342587941389?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxmb29kfGVufDB8fDB8fHww"
  
    },
  
    {
  
      id: 7,
  
      name: "Гамбургер и фри",


      category1: "фастфуд", 

      category2:  "американская кухня",
  
      price: 400,
  
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxmb29kfGVufDB8fDB8fHww"
  
    },
  
    {
  
      id: 8,
  
      name: "Филе семги",
  
      category1: "рыба", 

      category2:  "итальянская кухня",
  
      price: 700,
  
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxmb29kfGVufDB8fDB8fHww"
  
    },
  
    {
  
      id: 9,
  
      name: "Маргарита",

      category1: "пицца", 

      category2:  "итальянская кухня",
  
      price: 500,
  
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxmb29kfGVufDB8fDB8fHww"
  
    },
  
    {
  
      id: 10,
  
      name: "Стейк из говядины",

      category1: "мясо", 

      category2:  "американская кухня",
  
      price: 500,
  
      image: "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk1fHxmb29kfGVufDB8fDB8fHww"
  
    },
  
    {
  
      id: 11,
  
      name: "Панкейки",
  

      category1: "десерты", 

      category2:  "американская кухня",
  
      price: 250,
  
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAzfHxmb29kfGVufDB8fDB8fHww"
  
    },
  
    {
  
      id: 12,
  
      name: "Куриное филе с картофелем",
  

      category1: "курица", 

      category2:  "американская кухня",
  
      price: 400,
  
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpa2VufGVufDB8fDB8fHww"
  
    },
  
    {
  
      id: 13,
  
      name: "Куриные голени",
  
      category1: "курица", 

      category2:  "американская кухня",
  
      price: 250,
  
      image: "https://images.unsplash.com/photo-1671393002836-487b4cc61a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNoaWtlbnxlbnwwfHwwfHx8MA%3D%3D"
  
    },
  
    {
  
      id: 14,
  
      name: "Рибай стейк",

      category1: "мясо", 

      category2:  "американская кухня",
  
      price: 450,
  
      image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZWZ8ZW58MHx8MHx8fDA%3D"
  
    },
  
    {
  
      id: 15,
  
      name: "Овощной салат",
  

      category1: "салат", 

      category2:  "американская кухня",
  
      price: 200,
  
      image: "https://images.unsplash.com/photo-1621634892819-80f7874c96dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNhbGFkfGVufDB8fDB8fHww"
  
    },
    {
        id: 16,
  
        name: "Греческий салат",
    
        category1: "салат", 

        category2:  "итальянская кухня",
    
        price: 250, 

        image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNhbGFkfGVufDB8fDB8fHww"
    },
    {
        id: 17,
  
        name: "Салат Фаттуш",
    
        category1: "салат", 

        category2:  "американская кухня",
    
        price: 300, 

        image: "https://images.unsplash.com/photo-1543339318-b43dc53e19b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHNhbGFkfGVufDB8fDB8fHww"
    },
    {

    id: 18,
  
    name: "Ягодные панкейки",


    category1: "десерты", 

    category2:  "американская кухня",

    price: 250,

    image: "https://images.unsplash.com/photo-1492683962492-deef0ec456c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBkaXNoZXN8ZW58MHx8MHx8fDA%3D"

  },

  {

    id: 19,
  
    name: "Шокомаффины",


    category1: "десерты", 

    category2:  "американская кухня",

    price: 250,

    image: "https://images.unsplash.com/photo-1448131063153-f1e240f98a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxmb29kJTIwZGlzaGVzfGVufDB8fDB8fHww"

  },

  {
  
    id: 20,

    name: "Пепперони",

    category1: "пицца", 

    category2:  "итальянская кухня",

    price: 500,

    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D"

  },

  {
  
    id: 21,

    name: "Пицца 4 сыра",

    category1: "пицца", 

    category2:  "итальянская кухня",

    price: 500,

    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"

  },
  ]
  
  export default data;